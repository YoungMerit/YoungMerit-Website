/* ============================================================
   HONE — Country Dot Globe (v5)
   A real rotating Earth (actual continent dot data projected on
   a sphere) spins slowly, then the camera pans + zooms — rotating
   longitude/latitude toward the clicked country while dollying
   in — and crossfades into the precise, real-geography country
   map (target amber, neighbors white). Settles into a still,
   gently breathing silhouette. Pure canvas, no deps.
   ============================================================ */
(function () {
  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  function shuffleIdx(n) {
    const a = [];
    for (let i = 0; i < n; i++) a.push(i);
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function hexToRgba(hex, a) {
    const v = hex.replace('#', '');
    const r = parseInt(v.substring(0, 2), 16);
    const g = parseInt(v.substring(2, 4), 16);
    const b = parseInt(v.substring(4, 6), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + Math.max(0, a).toFixed(3) + ')';
  }

  // Rotate a point at (lonRad,latRad) by camera yaw (camLon) + pitch (camLat)
  // so that (camLon,camLat) ends up centered facing the viewer (z=+1).
  function project(lonRad, latRad, camLon, camLat, R, D, cxPx, cyPx) {
    const relLon = lonRad - camLon;
    const x0 = Math.cos(latRad) * Math.sin(relLon);
    const z0 = Math.cos(latRad) * Math.cos(relLon);
    const y0 = Math.sin(latRad);
    const y1 = y0 * Math.cos(camLat) - z0 * Math.sin(camLat);
    const z1 = y0 * Math.sin(camLat) + z0 * Math.cos(camLat);
    const k = D / (D - z1);
    return { px: cxPx + x0 * R * k, py: cyPx - y1 * R * k, z1: z1 };
  }

  window.HONEGlobe = {
    // config: { target, neighbors, centroid:[lonDeg,latDeg], amber, worldDotsUrl }
    init: function (canvasId, config) {
      const canvas = document.getElementById(canvasId);
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const AMBER = config.amber || '#E8A83A';
      const target = config.target || [];
      const neighbors = config.neighbors || [];
      const centroid = config.centroid || [0, 0];

      const combined = target.map(function (p) { return { p: p, isTarget: true }; })
        .concat(neighbors.map(function (p) { return { p: p, isTarget: false }; }));
      const NM = combined.length;

      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      target.forEach(function (p) {
        if (p[0] < minX) minX = p[0];
        if (p[0] > maxX) maxX = p[0];
        if (p[1] < minY) minY = p[1];
        if (p[1] > maxY) maxY = p[1];
      });
      const tcx = (minX + maxX) / 2, tcy = (minY + maxY) / 2;
      const targetSpan = Math.max((maxX - minX) / 2, (maxY - minY) / 2, 0.4);
      const mapTargets = combined.map(function (o) {
        return [(o.p[0] - tcx) / targetSpan, (o.p[1] - tcy) / targetSpan];
      });
      const mapDelays = combined.map(function () { return Math.random() * 0.4; });

      // ---- sizing (ResizeObserver = robust against layout/font races) ----
      let w = 0, h = 0, sizeReady = false;
      let dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      function applySize(rw, rh) {
        if (rw <= 0 || rh <= 0) return;
        w = rw; h = rh;
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        sizeReady = true;
      }
      if (window.ResizeObserver) {
        const ro = new window.ResizeObserver(function (entries) {
          const r = entries[0].contentRect;
          applySize(r.width, r.height);
        });
        ro.observe(canvas);
      } else {
        const rect = canvas.getBoundingClientRect();
        applySize(rect.width, rect.height);
        window.addEventListener('resize', function () {
          const r = canvas.getBoundingClientRect();
          applySize(r.width, r.height);
        });
      }

      // ---- world sphere data (fetched once, shared across pages) ----
      let worldReady = false;
      let worldRad = []; // [lonRad, latRad][]
      let sphereOrder = [];
      if (config.worldDotsUrl) {
        fetch(config.worldDotsUrl)
          .then(function (r) { return r.json(); })
          .then(function (d) {
            worldRad = d.map(function (p) { return [p[0] * Math.PI / 180, p[1] * Math.PI / 180]; });
            sphereOrder = shuffleIdx(worldRad.length);
            worldReady = true;
          })
          .catch(function () { worldReady = true; });
      } else {
        worldReady = true;
      }

      const targetLonRad = centroid[0] * Math.PI / 180;
      const targetLatRad = centroid[1] * Math.PI / 180;
      const TOTAL_PAN = 210 * Math.PI / 180;
      const startLon = targetLonRad + TOTAL_PAN;

      function glow(cxPx, cyPx, r, color) {
        if (r <= 0) return;
        const grad = ctx.createRadialGradient(cxPx, cyPx, 0, cxPx, cyPx, r);
        grad.addColorStop(0, color);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.fillRect(cxPx - r, cyPx - r, r * 2, r * 2);
      }

      let ROTATE_MS = reduceMotion ? 500 : 5600;
      let MORPH_MS = reduceMotion ? 500 : 5600;
      let CROSS_MS = reduceMotion ? 400 : 1800;
      const ROT_SPEED_A = 18 * Math.PI / 180; // ~18deg/s — a clear, deliberate spin, held for the full ROTATE_MS
      const phaseATravel = ROT_SPEED_A * (ROTATE_MS / 1000);
      const camLonEnd = startLon - phaseATravel;
      const phaseBTravel = TOTAL_PAN - phaseATravel;
      const D = 2.5;
      const UP_SHIFT = 0.07;
      const IDLE_ZOOM = 0.42; // fraction of min(w,h) per normalized unit — keeps the whole country in frame
      const CROSS_ZOOM_START = IDLE_ZOOM * 1.5; // arrive slightly close, then ease back to reveal the full shape

      let start = null;
      let noWorldFallback = false;

      function draw(now) {
        if (!sizeReady || !worldReady) {
          requestAnimationFrame(draw);
          return;
        }
        if (start === null) {
          start = now;
          if (worldRad.length === 0) {
            noWorldFallback = true;
            ROTATE_MS = 0;
            MORPH_MS = 0;
            CROSS_MS = reduceMotion ? 300 : 900;
          }
        }
        const t = now - start;
        ctx.clearRect(0, 0, w, h);
        const cxPx = w / 2, cyPx = h / 2;
        const T1 = ROTATE_MS, T2 = ROTATE_MS + MORPH_MS, T3 = T2 + CROSS_MS;
        const R0 = Math.min(w, h) * 0.30;
        const R1 = Math.min(w, h) * 1.4;

        if (!noWorldFallback && t < T1) {
          // Phase A — slow establishing rotation, real continents, neutral tilt
          const camLon = startLon - ROT_SPEED_A * (t / 1000);
          glow(cxPx, cyPx, R0 * 1.6, 'rgba(232,168,58,0.055)');
          for (let i = 0; i < worldRad.length; i++) {
            const idx = sphereOrder[i];
            const lr = worldRad[idx];
            const pr = project(lr[0], lr[1], camLon, 0, R0, D, cxPx, cyPx);
            const depth = (pr.z1 + 1) / 2;
            const size = 0.9 + depth * 1.6;
            const alpha = 0.16 + depth * 0.58;
            ctx.beginPath();
            ctx.arc(pr.px, pr.py, size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(253,250,245,' + alpha.toFixed(3) + ')';
            ctx.fill();
          }
        } else if (!noWorldFallback && t < T2) {
          // Phase B — camera pans (yaw+pitch) and dollies in toward the country
          const rawT = (t - T1) / MORPH_MS;
          const et = easeInOutCubic(Math.min(1, rawT));
          const camLon = camLonEnd - phaseBTravel * et;
          const camLat = targetLatRad * et;
          const R = R0 + (R1 - R0) * et;
          glow(cxPx, cyPx, Math.min(w, h) * (0.34 + et * 0.5), 'rgba(232,168,58,' + (0.05 + et * 0.14).toFixed(3) + ')');
          for (let i = 0; i < worldRad.length; i++) {
            const idx = sphereOrder[i];
            const lr = worldRad[idx];
            const pr = project(lr[0], lr[1], camLon, camLat, R, D, cxPx, cyPx);
            const depth = (pr.z1 + 1) / 2;
            const size = 0.9 + depth * 2.1;
            const alpha = 0.14 + depth * 0.62;
            ctx.beginPath();
            ctx.arc(pr.px, pr.py, size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(253,250,245,' + alpha.toFixed(3) + ')';
            ctx.fill();
          }
        } else if (t < T3 || noWorldFallback) {
          // Phase C — crossfade: sphere (frozen, locked on target) fades out,
          // precise real-geography map fades in, target resolving to amber
          const rawT = noWorldFallback ? (t / CROSS_MS) : (t - T2) / CROSS_MS;
          const crossT = easeOutCubic(Math.max(0, Math.min(1, rawT)));

          if (!noWorldFallback) {
            for (let i = 0; i < worldRad.length; i++) {
              const idx = sphereOrder[i];
              const lr = worldRad[idx];
              const pr = project(lr[0], lr[1], targetLonRad, targetLatRad, R1, D, cxPx, cyPx);
              const depth = (pr.z1 + 1) / 2;
              const size = 0.9 + depth * 2.1;
              const alpha = (0.14 + depth * 0.62) * (1 - crossT);
              if (alpha <= 0.01) continue;
              ctx.beginPath();
              ctx.arc(pr.px, pr.py, size, 0, Math.PI * 2);
              ctx.fillStyle = 'rgba(253,250,245,' + alpha.toFixed(3) + ')';
              ctx.fill();
            }
          }

          const zoomNow = CROSS_ZOOM_START + (IDLE_ZOOM - CROSS_ZOOM_START) * crossT;
          const zoomScale = Math.min(w, h) * zoomNow;
          const cyZoom = cyPx - h * UP_SHIFT;
          glow(cxPx, cyZoom, Math.min(w, h) * 0.56, 'rgba(232,168,58,' + (0.16 * crossT).toFixed(3) + ')');
          for (let i = 0; i < NM; i++) {
            const local = Math.max(0, Math.min(1, (crossT - mapDelays[i] * 0.5) / (1 - mapDelays[i] * 0.5 || 1)));
            const de = easeOutCubic(local);
            if (de <= 0.02) continue;
            const tp = mapTargets[i];
            const isTarget = combined[i].isTarget;
            const px = cxPx + tp[0] * zoomScale;
            const py = cyZoom + tp[1] * zoomScale;
            if (isTarget) {
              ctx.beginPath();
              ctx.arc(px, py, 3.6, 0, Math.PI * 2);
              ctx.fillStyle = hexToRgba(AMBER, 0.16 * de);
              ctx.fill();
              ctx.beginPath();
              ctx.arc(px, py, 1.2 + de * 0.9, 0, Math.PI * 2);
              ctx.fillStyle = hexToRgba(AMBER, de * 0.86);
              ctx.fill();
            } else {
              const size = 1.2 + de * 0.6;
              const alpha = de * 0.42;
              ctx.beginPath();
              ctx.arc(px, py, size, 0, Math.PI * 2);
              ctx.fillStyle = 'rgba(253,250,245,' + alpha.toFixed(3) + ')';
              ctx.fill();
            }
          }
        } else {
          // Phase D — settled, living idle silhouette (still, no tilt)
          const idleT = (t - T3) / 1000;
          const zoomScale = Math.min(w, h) * IDLE_ZOOM;
          const cyZoom = cyPx - h * UP_SHIFT;
          glow(cxPx, cyZoom, Math.min(w, h) * 0.58, 'rgba(232,168,58,0.12)');
          // neighbors first (so amber halos sit visually on top)
          for (let i = 0; i < NM; i++) {
            if (combined[i].isTarget) continue;
            const tp = mapTargets[i];
            const phase = i * 0.29;
            const drift = reduceMotion ? 0 : Math.sin(idleT * 0.75 + phase) * 1.1;
            const pulse = reduceMotion ? 0.85 : 0.72 + 0.26 * Math.sin(idleT * 1.0 + phase);
            const px = cxPx + tp[0] * zoomScale;
            const py = cyZoom + tp[1] * zoomScale + drift;
            ctx.beginPath();
            ctx.arc(px, py, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(253,250,245,' + (0.15 * pulse + 0.07).toFixed(3) + ')';
            ctx.fill();
          }
          for (let i = 0; i < NM; i++) {
            if (!combined[i].isTarget) continue;
            const tp = mapTargets[i];
            const phase = i * 0.29;
            const drift = reduceMotion ? 0 : Math.sin(idleT * 0.75 + phase) * 1.1;
            const pulse = reduceMotion ? 0.85 : 0.72 + 0.26 * Math.sin(idleT * 1.0 + phase);
            const px = cxPx + tp[0] * zoomScale;
            const py = cyZoom + tp[1] * zoomScale + drift;
            const corePulse = 0.58 * pulse + 0.3;
            ctx.beginPath();
            ctx.arc(px, py, 3.6, 0, Math.PI * 2);
            ctx.fillStyle = hexToRgba(AMBER, 0.16 * pulse);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(px, py, 1.75, 0, Math.PI * 2);
            ctx.fillStyle = hexToRgba(AMBER, corePulse);
            ctx.fill();
          }
        }
        requestAnimationFrame(draw);
      }

      requestAnimationFrame(draw);
    }
  };
})();