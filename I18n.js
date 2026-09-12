/* =========================================================================
   YOUNGMERIT — SITE TRANSLATION ENGINE
   -------------------------------------------------------------------------
   One shared file, included on every page, so the dictionary only needs to
   live in one place. Add more keys to I18N as more of each page gets
   translated — the engine and switcher UI don't need to change.

   HOW TO TAG NEW TEXT FOR TRANSLATION:
     <span data-i18n="nav.findWork">Find Work</span>
   For attributes (e.g. placeholder), add a second attribute naming which one:
     <input data-i18n="search.placeholder" data-i18n-attr="placeholder" placeholder="Search...">
   Untagged text is simply left as-is (English), so pages translate
   incrementally without breaking anything not yet covered.
   ========================================================================= */

(function () {

  var LANGS = ['en', 'es', 'fr', 'zh', 'zu'];
  var LANG_LABEL = { en: 'English', es: 'Español', fr: 'Français', zh: '中文', zu: 'isiZulu' };
  var LANG_CODE  = { en: 'EN', es: 'ES', fr: 'FR', zh: '中文', zu: 'ZU' };

  var I18N = {
    en: {
      // ==================== NAV ====================
      'nav.home': 'Home',
      'nav.findWork': 'Find Work',
      'nav.hireTalent': 'Hire Talent',
      'nav.howItWorks': 'How It Works',
      'nav.about': 'About',
      'nav.community': 'Community',
      'nav.myProfile': 'My Profile',
      'nav.logIn': 'Log In',
      'nav.signUp': 'Sign Up',
      'nav.signUpFree': 'Sign Up Free',
      'nav.rateUs': 'Rate Us',
      'nav.navigation': 'Navigation',
      'nav.pricing': 'Pricing',
      'nav.myProfileLabel': 'My Profile',
      'nav.logOut': 'Log Out',
      'nav.profileMenu.profile': 'Profile',
      'nav.profileMenu.notifications': 'Notification Settings',
      'nav.profileMenu.language': 'Language',
      'nav.profileMenu.privacy': 'Privacy Policy',
      'nav.profileMenu.terms': 'Terms',
      'lang.switchLabel': 'Language',

      // ==================== FOOTER ====================
      'footer.platform': 'Platform',
      'footer.company': 'Company',
      'footer.trustSafety': 'Trust & Safety',
      'footer.findWork': 'Find Work',
      'footer.hireTalent': 'Hire Talent',
      'footer.howItWorks': 'How It Works',
      'footer.resources': 'Resources',
      'footer.aboutYOUNGMERIT': 'About Us',
      'footer.careers': 'Careers',
      'footer.community': 'Community',
      'footer.contact': 'Contact',
      'footer.identityVerification': 'Identity Verification',
      'footer.disputeSystem': 'Dispute System',
      'footer.privacyPolicy': 'Privacy Policy',
      'footer.termsOfService': 'Terms of Service',
      'footer.cookieSettings': 'Cookie Settings',
      'footer.tagline': 'We are on a mission to create a world where opportunity is earned, not given.',
      'footer.copyright': 'Copyright 2026 YOUNGMERIT. All rights reserved.',
      'footer.builtFor': 'Built for youth. Trusted by business.',

      // ==================== INDEX PAGE ====================
      'auth.nav.back': 'Back to site',
      'auth.left.eyebrow': 'Welcome to YOUNGMERIT',
      'auth.left.title': 'YOUR WORK.<br/>YOUR <span class="accent">PROOF.</span>',
      'auth.left.desc': 'Join young workers and businesses building trust and getting things done across six countries.',
      'auth.left.trust1': 'Identity verified on every account',
      'auth.left.trust2': 'Payments held in secure escrow',
      'auth.left.trust3': 'Build your Skill Passport with every task',
      'auth.left.trust4': 'Active across six countries worldwide',
      'auth.mode.signup': 'Sign Up',
      'auth.mode.login': 'Log In',
      'auth.demo.tryLabel': 'Try a demo account',
      'auth.demo.worker': 'Worker',
      'auth.demo.worker.stats': '12 tasks &middot; 4.8 rating &middot; R4,280 earned',
      'auth.demo.worker.cta': 'Log in as Worker',
      'auth.demo.business': 'Business',
      'auth.demo.business.stats': '24 tasks &middot; 4.9 rating &middot; 19 hired',
      'auth.demo.business.cta': 'Log in as Business',
      'auth.demo.loggingIn': 'Logging in as {name}…',
      'auth.verify.title': 'CHECK YOUR EMAIL.',
      'auth.verify.desc': 'We sent a verification link to<br/><strong id="verifyEmail" style="color:var(--dark);"></strong>',
      'auth.verify.note': 'Click the link in the email to activate your account. Check your spam folder if you don\'t see it.',
      'auth.verify.resend': 'Resend verification email',
      'auth.verify.resent': 'Email resent successfully.',
      'auth.success.titleLogin': 'WELCOME BACK.',
      'auth.success.msgLogin': 'You are now logged in. Taking you to your profile…',
      'auth.success.welcomeName': 'WELCOME BACK, {name}.',
      'auth.success.loggingIn': 'Logging you in…',
      'auth.signup.title': 'CREATE YOUR ACCOUNT',
      'auth.signup.desc': 'Free to join. No credit card required.',
      'auth.alert.generic': 'Something went wrong. Please try again.',
      'auth.signup.typeLabel': 'I am joining as a',
      'auth.signup.typeWorkerDesc': 'Find tasks, get paid, build your reputation',
      'auth.signup.typeBusinessDesc': 'Post tasks and hire trusted young talent',
      'auth.signup.typeErr': 'Please select an account type to continue.',
      'auth.signup.firstName': 'First name',
      'auth.signup.lastName': 'Last name',
      'auth.err.required': 'Required',
      'auth.signup.bizName': 'Business / organisation name',
      'auth.signup.bizName.err': 'Required for business accounts',
      'auth.signup.email': 'Email address',
      'auth.err.email': 'Enter a valid email address',
      'auth.signup.password': 'Password',
      'auth.pw.tooShort': 'Too short',
      'auth.pw.tooWeak': 'Too weak',
      'auth.pw.weak': 'Weak',
      'auth.pw.fair': 'Fair',
      'auth.pw.good': 'Good',
      'auth.pw.strong': 'Strong',
      'auth.signup.password.err': 'Password must be at least 8 characters',
      'auth.signup.cta': 'Create account',
      'auth.signup.terms': 'By signing up you agree to our <a href="terms.html">Terms of Service</a> and <a href="privacy-policy.html">Privacy Policy</a>.',
      'auth.signup.switchPrompt': 'Already have an account?',
      'auth.signup.switchLink': 'Log in',
      'auth.login.title': 'WELCOME BACK.',
      'auth.login.desc': 'Log in to access your profile and tasks.',
      'auth.login.alertMsg': 'Email or password is incorrect.',
      'auth.login.err.email': 'Enter your email address',
      'auth.login.err.password': 'Enter your password',
      'auth.login.forgot': 'Forgot password?',
      'auth.login.forgotSent': 'Password reset email sent — check your inbox.',
      'auth.login.cta': 'Log in',
      'auth.login.switchPrompt': 'Don\'t have an account?',
      'auth.login.switchLink': 'Sign up free',
      'auth.err.wentWrong': 'Something went wrong.',
      'auth.err.alreadyRegistered': 'This email is already registered. Try logging in instead.',
      'auth.err.passwordShort': 'Password must be at least 8 characters.',
      'auth.err.invalidEmail': 'Please enter a valid email address.',
      'auth.err.connection': 'Connection error. Check your internet and try again.',
      'auth.err.loginFailed': 'Login failed.',
      'auth.err.notConfirmed': 'Please verify your email first. Check your inbox for the confirmation link.',
      'auth.err.tooMany': 'Too many login attempts. Please wait a few minutes and try again.',
      'auth.err.enterEmailFirst': 'Enter your email address above first.',
      'auth.err.resetFailed': 'Could not send reset email. Check the address and try again.',
      'howworks.hero.eyebrow': 'Simple. Verified. Global.',
      'howworks.hero.title': 'HOW<br/><span class="accent">WE</span><br/>WORK.',
      'howworks.hero.desc': 'Simple steps to build experience or find the right talent. No degree, no guesswork, no risk.',
      'howworks.hero.tabPeople': 'For People',
      'howworks.hero.tabBusiness': 'For Businesses',
      'howworks.hero.scroll': 'Scroll to explore',
      'howworks.steps.tag1': 'Step One',
      'howworks.steps.tag2': 'Step Two',
      'howworks.steps.tag3': 'Step Three',
      'howworks.steps.tag4': 'Step Four',
      'howworks.steps.people.s1.title': 'CREATE YOUR PROFILE',
      'howworks.steps.people.s1.desc': 'Sign up in minutes. Add your skills, location and experience level. Verify your identity to unlock full access.',
      'howworks.steps.people.s1.d1': 'Free to join',
      'howworks.steps.people.s1.d2': '6 countries',
      'howworks.steps.people.s1.d3': 'Live in under 5 minutes',
      'howworks.steps.people.s1.d4': 'Identity verified',
      'howworks.steps.people.s2.title': 'FIND AND APPLY FOR TASKS',
      'howworks.steps.people.s2.desc': 'Browse beginner-friendly, paid tasks posted by verified businesses. Filter by skill, pay, deadline and level.',
      'howworks.steps.people.s2.d1': 'Design tasks',
      'howworks.steps.people.s2.d2': 'Data and Research',
      'howworks.steps.people.s2.d3': 'AI Assistance',
      'howworks.steps.people.s2.d4': 'Customer Support',
      'howworks.steps.people.s3.title': 'DO GREAT WORK AND GET PAID',
      'howworks.steps.people.s3.desc': 'Complete the task, communicate clearly and submit your deliverable. Payment is released instantly from escrow once approved.',
      'howworks.steps.people.s3.d1': 'Escrow protected',
      'howworks.steps.people.s3.d2': 'Instant payout',
      'howworks.steps.people.s3.d3': 'In-platform messaging',
      'howworks.steps.people.s3.d4': 'Secure file delivery',
      'howworks.steps.people.s4.title': 'BUILD YOUR REPUTATION',
      'howworks.steps.people.s4.desc': 'Every completed task earns you a rating and a proof-of-work record. Your Trust Score grows and better opportunities follow.',
      'howworks.steps.people.s4.d1': 'Verified reviews',
      'howworks.steps.people.s4.d2': 'Public trust score',
      'howworks.steps.people.s4.d3': 'Level progression',
      'howworks.steps.people.s4.d4': 'Skill Passport update',
      'howworks.steps.biz.s1.title': 'POST YOUR TASK',
      'howworks.steps.biz.s1.desc': 'Describe what you need in plain language. Set your budget, deadline and required skill level. Posting is completely free.',
      'howworks.steps.biz.s1.d1': 'Free to post',
      'howworks.steps.biz.s1.d2': 'Live in minutes',
      'howworks.steps.biz.s1.d3': 'Smart matching',
      'howworks.steps.biz.s1.d4': 'Global talent pool',
      'howworks.steps.biz.s2.title': 'REVIEW VERIFIED CANDIDATES',
      'howworks.steps.biz.s2.desc': 'Browse applicants with real Trust Scores, completion rates and work portfolios. Every metric is verified and independently tracked.',
      'howworks.steps.biz.s2.d1': 'Trust Scores shown',
      'howworks.steps.biz.s2.d2': 'Proof of work history',
      'howworks.steps.biz.s2.d3': 'ID verified workers',
      'howworks.steps.biz.s2.d4': 'Level badges displayed',
      'howworks.steps.biz.s3.title': 'TRACK WORK AND APPROVE',
      'howworks.steps.biz.s3.desc': 'Communicate directly in the platform. Review deliverables, request revisions and approve — all with escrow protecting every cent.',
      'howworks.steps.biz.s3.d1': 'In-platform chat',
      'howworks.steps.biz.s3.d2': 'Secure file transfer',
      'howworks.steps.biz.s3.d3': 'Revision requests',
      'howworks.steps.biz.s3.d4': 'Escrow protection',
      'howworks.steps.biz.s4.title': 'BUILD YOUR TALENT PIPELINE',
      'howworks.steps.biz.s4.desc': 'Save your best workers to private talent pools. Rehire in one click. Hire exceptional workers full time directly through us.',
      'howworks.steps.biz.s4.d1': 'Private talent pools',
      'howworks.steps.biz.s4.d2': 'One-click rehire',
      'howworks.steps.biz.s4.d3': 'Full-time hire option',
      'howworks.steps.biz.s4.d4': 'Performance history',
      'howworks.trust.eyebrow': 'Built for Trust',
      'howworks.trust.title': 'SAFE FROM START<br/>TO FINISH.',
      'howworks.trust.desc': 'Every transaction on our platform is protected by layers of verification, escrow and dispute resolution.',
      'howworks.trust.card1.title': 'Escrow Payments',
      'howworks.trust.card1.desc': 'Funds are held securely until work is approved. No payment is released until the business confirms delivery.',
      'howworks.trust.card2.title': 'Identity Verification',
      'howworks.trust.card2.desc': 'All workers and businesses complete ID verification before transacting. You always know who you are dealing with.',
      'howworks.trust.card4.title': 'NDA Protection',
      'howworks.trust.card4.desc': 'Sensitive business tasks can be covered by legally binding NDAs. Confidential work stays confidential.',
      'howworks.trust.card5.title': 'Dispute Resolution',
      'howworks.trust.card5.desc': 'If something goes wrong, our mediation team reviews the work history, messages and deliverables to reach a fair resolution.',
      'howworks.trust.card6.title': 'Employer Verification',
      'howworks.trust.card6.desc': 'Businesses are verified before posting tasks. Workers always know a real, accountable company is behind every job.',
      'howworks.rep.eyebrow': 'The Progression System',
      'howworks.rep.title': 'LEVEL UP YOUR<br/><span class="accent">REPUTATION.</span>',
      'howworks.rep.desc': 'Every task you complete builds toward a higher level — unlocking better pay, more visibility and greater employer trust.',
      'howworks.levels.rookie.name': 'ROOKIE',
      'howworks.levels.rookie.tag': 'Starting level',
      'howworks.levels.rookie.range': '0 to 4 tasks',
      'howworks.levels.rookie.perk1': 'Access beginner tasks',
      'howworks.levels.rookie.perk2': 'Build your profile',
      'howworks.levels.rookie.perk3': 'Earn first reviews',
      'howworks.levels.verified.name': 'VERIFIED',
      'howworks.levels.verified.tag': 'Proven starter',
      'howworks.levels.verified.range': '5 to 19 tasks',
      'howworks.levels.verified.perk1': 'Verified badge shown',
      'howworks.levels.verified.perk2': 'Higher pay unlocked',
      'howworks.levels.verified.perk3': 'Skill Passport active',
      'howworks.levels.trusted.name': 'TRUSTED',
      'howworks.levels.trusted.tag': 'Reliable worker',
      'howworks.levels.trusted.range': '20 to 49 tasks',
      'howworks.levels.trusted.perk1': 'Priority in search',
      'howworks.levels.trusted.perk2': 'Direct hire eligible',
      'howworks.levels.trusted.perk3': 'NDA task access',
      'howworks.levels.elite.name': 'ELITE',
      'howworks.levels.elite.tag': 'Top tier talent',
      'howworks.levels.elite.range': '50 or more tasks',
      'howworks.levels.elite.perk1': 'Featured profile placement',
      'howworks.levels.elite.perk3': 'Full-time hire pipeline',
      'howworks.passport.title': 'YOUR SKILL PASSPORT',
      'howworks.passport.desc': 'Your Skill Passport is a portable, verified record of every task completed, every review earned and every skill proved — shareable with any employer, anywhere in the world.',
      'howworks.passport.cta1': 'Build Mine',
      'howworks.passport.cta2': 'See Example',
      'howworks.faq.heading': 'QUESTIONS?',
      'howworks.faq.sub': 'Everything you need to know about us.',
      'howworks.faq.tabGeneral': 'General',
      'howworks.faq.tabWorkers': 'For Workers',
      'howworks.faq.tabBusinesses': 'For Businesses',
      'howworks.faq.general.q1': 'What is YOUNGMERIT?',
      'howworks.faq.general.a1': 'YOUNGMERIT is a global platform that connects young people with real, paid tasks from verified businesses. By completing work and earning reviews, workers build a verified proof-of-work reputation that employers trust over traditional CVs or degrees.',
      'howworks.faq.general.q2': 'Which countries does YOUNGMERIT support?',
      'howworks.faq.general.a2': 'We currently operate across South Africa, China, the United States, France, Spain and the United Kingdom. The platform supports English, Mandarin, French and Spanish.',
      'howworks.faq.general.q3': 'Is YOUNGMERIT free to use?',
      'howworks.faq.general.a3': 'Yes. Workers can sign up and apply for tasks for free. Businesses can post tasks for free. We take a small service fee only when a task is successfully completed and paid.',
      'howworks.faq.general.q4': 'How is YOUNGMERIT different from other platforms?',
      'howworks.faq.general.a4': 'We\'re purpose-built for entry-level talent. Our focus is on helping people with little or no formal experience build verified work histories. We are a career-entry platform, not a generic freelance marketplace.',
      'howworks.faq.workers.q1': 'Do I need experience to join?',
      'howworks.faq.workers.a1': 'No. We\'re specifically designed for people with little or no formal work experience. Beginner-friendly tasks are always available and your reputation is built from scratch through the work you do on the platform.',
      'howworks.faq.workers.q2': 'How and when do I get paid?',
      'howworks.faq.workers.a2': 'Payments are held in escrow and released as soon as the business approves your work. Funds go directly to your verified account and can be withdrawn via PayPal, bank transfer or local payment methods depending on your country.',
      'howworks.faq.workers.q3': 'What is the Skill Passport?',
      'howworks.faq.workers.a3': 'The Skill Passport is a portable, publicly shareable record of all your completed tasks, earned ratings and verified skills. You can share it with employers, include it in job applications or use it instead of a traditional CV.',
      'howworks.faq.workers.q4': 'What are the Talent Levels?',
      'howworks.faq.workers.a4': 'We have four levels: Rookie (0 to 4 tasks), Verified (5 to 19 tasks), Trusted (20 to 49 tasks) and Elite (50 or more tasks). Higher levels unlock better-paying tasks, priority search placement and direct hire eligibility.',
      'howworks.faq.businesses.q1': 'How do I post a task?',
      'howworks.faq.businesses.a1': 'Sign up, verify your business and click Post a Task. Describe what you need, set a budget and deadline, and specify the required skill level. Your task goes live immediately and starts receiving applications.',
      'howworks.faq.businesses.q2': 'How are workers verified?',
      'howworks.faq.businesses.a2': 'All workers on our platform complete identity verification before transacting. Their Trust Scores, task completion rates, reviews and repeat hire counts are independently tracked and cannot be manipulated.',
      'howworks.faq.businesses.q3': 'What if I am not happy with the work?',
      'howworks.faq.businesses.a3': 'Payments are held in escrow until you approve the deliverable. You can request revisions before releasing funds. If a dispute arises, our mediation team reviews all evidence and reaches a fair resolution.',
      'howworks.faq.businesses.q4': 'Can I hire someone full time?',
      'howworks.faq.businesses.a4': 'Absolutely. We support direct full-time hiring from the platform. Once you have found a worker whose quality you trust, you can make a formal employment offer through us.',
      'howworks.cta.title': 'READY TO<br/><span class="accent">START?</span>',
      'howworks.cta.desc': 'Join the platform where work speaks louder than credentials.',
      'howworks.cta.findWork': 'Find Work',
      'howworks.cta.hireTalent': 'Hire Talent',
      'idx.hero.eyebrow': 'Now open for early access',
      'idx.hero.title1': 'EXPERIENCE',
      'idx.hero.title2': 'BEFORE',
      'idx.hero.title3': 'EMPLOYMENT.',
      'idx.hero.explainer': 'We\'re the platform where young people complete <strong>real paid tasks</strong> for real businesses, building a <strong>verified work history</strong> that opens doors — no degree, no connections, no years of experience required.',
      'idx.hero.ctaFind': 'Start Finding Work',
      'idx.hero.ctaHire': 'Hire Talent',
      'idx.hero.note': 'Free to join. No credit card. Cancel anytime.',
      'idx.strip.countries.title': '6 Countries',
      'idx.strip.countries.desc': 'South Africa, China, USA, France, Spain and the UK',
      'idx.strip.verified.title': 'Verified by proof',
      'idx.strip.verified.desc': 'Trust scores built from real completed work',
      'idx.strip.escrow.title': 'Escrow protected',
      'idx.strip.escrow.desc': 'Every payment held safely until work is approved',
      'idx.strip.career.title': 'Career-first',
      'idx.strip.career.desc': 'Built to move workers from tasks to full-time employment',
      'idx.trust.label': 'Designed for use by',
      'idx.for.eyebrow': 'Who We\'re For',
      'idx.for.title': 'TWO PROBLEMS.<br/>ONE PLATFORM.',
      'idx.for.desc': 'Young people cannot get hired without experience. Businesses cannot find affordable, trustworthy entry-level talent. We solve both simultaneously.',
      'idx.for.workers.label': 'For Young People',
      'idx.for.workers.title': 'BUILD REAL<br/>EXPERIENCE.',
      'idx.for.workers.desc': 'No resume. No degree. No connections required. Complete real tasks, earn real money and build a verified reputation that actually gets you hired.',
      'idx.for.workers.perk1': 'Complete real tasks and earn money from day one',
      'idx.for.workers.perk2': 'Build a verified trust score employers actually respect',
      'idx.for.workers.perk3': 'Get your Skill Passport — portable proof of work, forever',
      'idx.for.workers.perk4': 'Level up from Rookie to Elite as you complete more work',
      'idx.for.workers.cta': 'Find Work',
      'idx.for.biz.label': 'For Businesses',
      'idx.for.biz.title': 'HIRE WITH<br/>CONFIDENCE.',
      'idx.for.biz.desc': 'Stop hiring on hope. Every worker on our platform has a verified track record of real completed work, real ratings and real repeat hires — not just a CV.',
      'idx.for.biz.perk1': 'Post tasks free — only pay when work is completed',
      'idx.for.biz.perk2': 'Access pre-vetted talent with real verified track records',
      'idx.for.biz.perk3': 'Every payment protected by escrow until you approve delivery',
      'idx.for.biz.perk4': 'Build a private talent pool and rehire your best workers instantly',
      'idx.for.biz.cta': 'Hire Talent',
      'idx.prob.title': 'THE WORLD MADE<br/>EXPERIENCE<br/><span class="acc">A LOCKED DOOR.</span>',
      'idx.prob.desc': 'In six major economies, millions of young people are ready to work — but every entry-level job demands experience that is impossible to get without a job in the first place. We break that loop.',
      'idx.country.za.name': 'South Africa',
      'idx.country.za.lbl': 'Youth unemployment',
      'idx.country.cn.name': 'China',
      'idx.country.cn.lbl': 'Graduate unemployment',
      'idx.country.us.name': 'United States',
      'idx.country.us.lbl': 'Degree saturation',
      'idx.country.fr.name': 'France',
      'idx.country.fr.lbl': 'Credential barriers',
      'idx.country.es.name': 'Spain',
      'idx.country.es.lbl': 'Youth unemployment',
      'idx.country.gb.name': 'UK',
      'idx.country.gb.lbl': 'Experience inflation',
      'idx.countries.tagline': 'Click to see more information about each country',
      'idx.probBox.title': 'THE <span class="acc">PROOF GAP</span><br/>IS REAL.',
      'idx.probBox.desc': 'Young people are not lacking ability. They are lacking a way to prove it. That is the only problem we exist to solve — through real work, real ratings and real verified history.',
      'idx.probBox.item1.title': 'No experience, no entry',
      'idx.probBox.item1.desc': 'Companies demand two to five years for roles that teach you in two weeks.',
      'idx.probBox.item2.title': 'Businesses cannot find junior talent they trust',
      'idx.probBox.item2.desc': 'Hiring entry-level without a track record is a gamble most cannot afford.',
      'idx.probBox.item3.title': 'We create the track record',
      'idx.probBox.item3.desc': 'Real tasks. Real ratings. Real proof — before the job interview even happens.',
      'idx.how.eyebrow': 'The Process',
      'idx.how.title': 'SIMPLE.<br/><span class="acc">FOUR STEPS.</span>',
      'idx.how.desc': 'Whether you are looking for work or looking to hire, the process is designed to be simple, safe and fast from day one.',
      'idx.how.tabPeople': 'For People',
      'idx.how.tabBiz': 'For Businesses',
      'idx.how.seeFull': 'See the full breakdown',
      'idx.how.p1.title': 'Create Your Profile',
      'idx.how.p1.desc': 'Sign up free, add your skills and verify your identity. Takes under five minutes.',
      'idx.how.p2.title': 'Apply for Tasks',
      'idx.how.p2.desc': 'Browse real paid tasks posted by verified businesses and apply with one click.',
      'idx.how.p3.title': 'Complete and Get Paid',
      'idx.how.p3.desc': 'Deliver quality work, get approved and receive payment instantly from escrow.',
      'idx.how.p4.title': 'Build Reputation',
      'idx.how.p4.desc': 'Every task earns a review and builds your trust score. Level up and unlock better work.',
      'idx.how.b1.title': 'Post a Task',
      'idx.how.b1.desc': 'Describe what you need, set your budget and go live in minutes. Free to post.',
      'idx.how.b2.title': 'Review Applicants',
      'idx.how.b2.desc': 'Browse talent with verified trust scores, completion rates and real work portfolios.',
      'idx.how.b3.title': 'Track and Approve',
      'idx.how.b3.desc': 'Communicate, review deliverables and release payment only when fully satisfied.',
      'idx.how.b4.title': 'Build Your Pipeline',
      'idx.how.b4.desc': 'Save top workers, rehire instantly and offer full-time roles to your best performers.',
      'idx.rep.eyebrow': 'Our Edge',
      'idx.rep.title': 'YOUR REPUTATION<br/>IS YOUR<br/><span class="acc">CURRENCY.</span>',
      'idx.rep.desc': 'Every task you complete builds something permanent. A trust score that compounds, a skill passport that travels with you, and a work history that speaks louder than any CV ever could.',
      'idx.rep.feat1': 'Skill Passport — portable verified work history employers trust',
      'idx.rep.feat2': 'Public trust score that grows with every completed task',
      'idx.rep.feat3': 'Level progression: Rookie, Verified, Trusted and Elite',
      'idx.rep.feat4': 'Repeat hire tracking — the strongest signal of quality',
      'idx.rep.cta': 'How Reputation Works',
      'idx.rep.card.role': 'Virtual Assistant, Johannesburg',
      'idx.rep.card.badge': 'TRUSTED',
      'idx.rep.card.scoreSub': 'Excellent — 128 verified reviews',
      'idx.rep.card.tasksDone': 'Tasks Done',
      'idx.rep.card.repeatHires': 'Repeat Hires',
      'idx.rep.card.ndaSafe': 'NDA Safe',
      'idx.early.eyebrow': 'Why join now',
      'idx.early.title': 'WE ARE JUST<br/><span class="acc">GETTING STARTED.</span>',
      'idx.early.desc': 'We launched in 2026. There are no inflated member counts here. What we have is something more valuable than numbers — the chance to be first.',
      'idx.early.card1.title': 'Be a Founding Member',
      'idx.early.card1.desc': 'The first workers and businesses on our platform shape how it grows. Your profile will be among the very first verified reputations on the network.',
      'idx.early.card2.title': 'Build Before the Crowd',
      'idx.early.card2.desc': 'Every task you complete now is proof of work that exists before the market gets saturated. Early movers build the strongest reputations when hiring demand arrives.',
      'idx.early.card3.title': 'Help Us Build It Right',
      'idx.early.card3.desc': 'We are launching across six countries because the problem is everywhere. Your feedback in these early weeks directly shapes the product, the categories and the features we build next.',
      'idx.early.strip.title': 'READY TO BE<br/>AMONG THE FIRST?',
      'idx.early.strip.desc': 'Join us now. Complete your first task, earn your first review, and own a founding reputation on the platform before the market gets here.',
      'idx.early.strip.ctaSignup': 'Sign Up Free',
      'idx.early.strip.ctaPost': 'Post a Task',

      // ==================== LOCATIONS ====================
      'loc.all': 'All Locations',
      'loc.za': 'South Africa',
      'loc.es': 'Spain',
      'loc.fr': 'France',
      'loc.gb': 'United Kingdom',
      'loc.cn': 'China',
      'loc.us': 'United States',

      // ==================== FIND WORK PAGE ====================
      'fw.pageTitle1': 'FIND',
      'fw.pageTitle2': 'WORK.',
      'fw.pageSub': 'Browse tasks from verified businesses. Be the first to build your reputation when we launch — sign up now to get notified.',
      'fw.search': 'Search',
      'fw.searchPlaceholder': 'Search tasks, skills, keywords...',
      'fw.filter.allCategories': 'All Categories',
      'fw.filter.design': 'Design & Creative',
      'fw.filter.social': 'Social Media',
      'fw.filter.admin': 'Admin Support',
      'fw.filter.data': 'Data Entry',
      'fw.filter.research': 'Research',
      'fw.filter.support': 'Customer Support',
      'fw.filter.ai': 'AI Assistance',
      'fw.filter.translation': 'Translation',
      'fw.filter.anyLevel': 'Any Level',
      'fw.filter.beginner': 'Beginner',
      'fw.filter.intermediate': 'Intermediate',
      'fw.filter.advanced': 'Advanced',
      'fw.sort.newest': 'Newest First',
      'fw.sort.payHigh': 'Highest Pay',
      'fw.sort.payLow': 'Lowest Pay',
      'fw.sort.beginnerFriendly': 'Beginner Friendly',
      'fw.pill.allTasks': 'All Tasks',
      'fw.pill.design': 'Design',
      'fw.pill.social': 'Social Media',
      'fw.pill.admin': 'Admin',
      'fw.pill.data': 'Data Entry',
      'fw.pill.research': 'Research',
      'fw.pill.ai': 'AI Assistance',
      'fw.pill.translation': 'Translation',
      'fw.pill.support': 'Support',
      'fw.pill.writing': 'Writing & Content',
      'fw.pill.video': 'Video & Audio',
      'fw.pill.tech': 'Web & Tech',
      'fw.pill.sales': 'Sales & Outreach',
      'fw.pill.photography': 'Photography',
      'fw.sidebar.budgetRange': 'Budget Range',
      'fw.sidebar.anyBudget': 'Any budget',
      'fw.sidebar.upTo': 'Up to',
      'fw.sidebar.deadline': 'Deadline',
      'fw.sidebar.due1day': 'Due in 1 day',
      'fw.sidebar.due3days': 'Due in 3 days',
      'fw.sidebar.due1week': 'Due in 1 week',
      'fw.sidebar.flexible': 'Flexible',
      'fw.sidebar.experienceLevel': 'Experience Level',
      'fw.sidebar.workType': 'Work Type',
      'fw.sidebar.oneOff': 'One-off Task',
      'fw.sidebar.apprenticeship': 'Apprenticeship',
      'fw.sidebar.ongoing': 'Ongoing Project',
      'fw.sidebar.clearAll': 'Clear All Filters',
      'fw.passport.title': 'SKILL PASSPORT',
      'fw.passport.desc': 'Every task you complete is verified and added to your portable work history. Employers trust it over a CV.',
      'fw.passport.cta': 'Build Your Passport',
      'fw.banner.title': 'We\'re launching soon.',
      'fw.banner.desc': 'Real tasks from verified businesses are on their way. Sign up now to be notified the moment they go live and get first access.',
      'fw.banner.cta': 'Get early access',
      'fw.results.showing': 'Showing',
      'fw.results.task': 'task',
      'fw.results.tasks': 'tasks',
      'fw.sortBy': 'Sort by:',
      'fw.card.title': 'Design 5 Instagram Post Templates',
      'fw.card.by': 'by',
      'fw.card.company': 'Creative Co.',
      'fw.card.verified': 'Verified',
      'fw.card.tagDesign': 'Design',
      'fw.card.tagCanva': 'Canva',
      'fw.card.tagSocial': 'Social Media',
      'fw.card.tagBeginner': 'Beginner',
      'fw.card.tagOneOff': 'One-off',
      'fw.card.due3days': 'Due in 3 days',
      'fw.card.applicants': '0 applicants — be first',
      'fw.card.escrow': 'Escrow protected',
      'fw.card.fixedPrice': 'fixed price',
      'fw.card.safePay': 'SAFE PAY',
      'fw.card.applyNow': 'Apply Now',
      'fw.empty.title': 'NO TASKS MATCH',
      'fw.empty.desc': 'No tasks match your current filters.',
      'fw.empty.clear': 'Clear all filters',
      'fw.empty.rest': 'to see the example task, or sign up to get notified when real tasks go live.',

      // ==================== HIRE TALENT PAGE ====================
      'ht.pageTitle1': 'HIRE',
      'ht.pageTitle2': 'TALENT.',
      'ht.pageSub': 'Browse identity-verified young workers ready to take on tasks. Be among the first businesses to hire with us when we launch.',
      'ht.searchPlaceholder': 'Search by skill, name or keyword...',
      'ht.filter.allSkills': 'All Skills',
      'ht.filter.adminVA': 'Admin & Virtual Assistant',
      'ht.filter.rookie': 'Rookie',
      'ht.filter.verified': 'Verified',
      'ht.filter.trusted': 'Trusted',
      'ht.filter.elite': 'Elite',
      'ht.pill.allTalent': 'All Talent',
      'ht.pill.designers': 'Designers',
      'ht.pill.socialMedia': 'Social Media',
      'ht.pill.admin': 'Admin',
      'ht.pill.dataEntry': 'Data Entry',
      'ht.pill.research': 'Research',
      'ht.pill.aiAssistants': 'AI Assistants',
      'ht.pill.translators': 'Translators',
      'ht.pill.support': 'Support',
      'ht.pill.writing': 'Writing & Content',
      'ht.pill.video': 'Video & Audio',
      'ht.pill.tech': 'Web & Tech',
      'ht.pill.sales': 'Sales & Outreach',
      'ht.pill.photography': 'Photography',
      'ht.post.title': 'POST A TASK',
      'ht.post.desc': 'Tell us what you need and let verified talent apply. Free to post, funds held in escrow until you approve.',
      'ht.post.cta': 'Post a Task Free',
      'ht.sidebar.minTrustScore': 'Min Trust Score',
      'ht.sidebar.anyScore': 'Any score',
      'ht.sidebar.minPrefix': 'Min',
      'ht.sidebar.starsSuffix': 'stars',
      'ht.sidebar.talentLevel': 'Talent Level',
      'ht.sidebar.availability': 'Availability',
      'ht.sidebar.availableNow': 'Available Now',
      'ht.sidebar.thisWeek': 'This Week',
      'ht.sidebar.flexible': 'Flexible',
      'ht.trust.title': 'Why Us?',
      'ht.trust.item1': 'Escrow payment protection on every hire',
      'ht.trust.item2': 'Identity-verified talent profiles',
      'ht.trust.item3': 'Verified Skill Passports on every profile',
      'ht.trust.item4': 'Dispute resolution included',
      'ht.banner.title': 'We\'re launching soon.',
      'ht.banner.desc': 'Young verified workers are signing up now. Create a business account to post tasks and be first to hire when we go live.',
      'ht.banner.cta': 'Post a task free',
      'ht.sortLabel': 'Sort:',
      'ht.sort.rated': 'Top Rated',
      'ht.sort.tasks': 'Most Tasks Done',
      'ht.sort.newest': 'Newest Members',
      'ht.results.profile': 'profile',
      'ht.results.profiles': 'profiles',
      'ht.card.idVerified': 'ID Verified',
      'ht.card.level': 'Trusted',
      'ht.card.role': 'Social Media Manager',
      'ht.card.location': 'Johannesburg, South Africa',
      'ht.card.tagSocial': 'Social Media',
      'ht.card.tagCopywriting': 'Copywriting',
      'ht.card.tagContent': 'Content Creation',
      'ht.card.tasksDone': '12 tasks done',
      'ht.card.passportVerified': 'Skill Passport verified',
      'ht.card.availableNow': 'Available now',
      'ht.card.demoProfile': 'Demo profile',
      'ht.card.hireNow': 'Hire Now',
      'ht.card.save': 'Save',
      'ht.empty.title': 'NO PROFILES MATCH',
      'ht.empty.desc': 'No workers match your current filters.',
      'ht.empty.createAccount': 'create a business account',
      'ht.empty.rest1': 'to see the example profile, or',
      'ht.empty.rest2': 'to get notified when workers sign up.',

      // ==================== ABOUT PAGE ====================
      'about.hero.breadcrumb': 'About',
      'about.hero.eyebrow': 'Our Mission',
      'about.hero.title': 'WE ARE ON A<br/>MISSION TO<br/><span class="accent">OPEN DOORS.</span>',
      'about.hero.desc': 'We built YoungMerit because millions of young people around the world are ready to work but cannot get past the first door. We are changing that, one verified task at a time.',
      'about.hero.ctaFind': 'Find Work',
      'about.hero.ctaHow': 'How It Works',
      'about.promise.title': 'The YOUNGMERIT Promise',
      'about.promise.quote': '"A world where opportunity is <span class="accent">EARNED,</span> not inherited."',
      'about.pillar1.title': 'Verified Proof of Work',
      'about.pillar1.desc': 'Every task completed is independently tracked',
      'about.pillar2.title': 'Built for Six Countries from Day One',
      'about.pillar2.desc': 'South Africa, China, USA, France, Spain and the UK',
      'about.pillar3.title': 'Career Entry, Not Just Gig Work',
      'about.pillar3.desc': 'We are building real pathways to full-time employment',
      'about.problem.eyebrow': 'Why We Exist',
      'about.problem.title': 'THE PROBLEM<br/>WE <span class="accent">SOLVE.</span>',
      'about.problem.desc': 'Youth unemployment is a global crisis but the root cause is the same everywhere: no experience means no entry, and no entry means no experience. We break that cycle.',
      'about.problem.za': 'South Africa',
      'about.problem.za.rate': 'Approx. 60% Youth Unemployment',
      'about.problem.za.desc': 'Extreme structural unemployment, a lack of formal opportunity, and a deep skills-to-jobs mismatch leave millions of young South Africans locked out of the economy entirely.',
      'about.problem.cn': 'China',
      'about.problem.cn.rate': 'Approx. 20% Graduate Unemployment',
      'about.problem.cn.desc': 'Millions of graduates compete for shrinking roles. Companies routinely demand two to five years of experience for entry-level positions, creating an impossible barrier for new graduates.',
      'about.problem.us': 'United States',
      'about.problem.us.rate': 'Degree Saturation Crisis',
      'about.problem.us.desc': 'Degree inflation and entry-level roles requiring prior experience have collapsed the traditional pathway from education to employment for millions of young Americans.',
      'about.problem.fr': 'France',
      'about.problem.fr.rate': 'Rigid Credential-Heavy Hiring',
      'about.problem.fr.desc': 'France\'s formal hiring culture makes it especially difficult for young people without elite qualifications or personal connections to break into the professional world.',
      'about.problem.es': 'Spain',
      'about.problem.es.rate': 'Approx. 28% Youth Unemployment',
      'about.problem.es.desc': 'One of Europe\'s highest youth unemployment rates, driven by economic stagnation, reliance on temporary contracts, and persistently weak entry-level job markets.',
      'about.problem.gb': 'United Kingdom',
      'about.problem.gb.rate': 'Widespread Experience Inflation',
      'about.problem.gb.desc': 'Even junior roles now demand extensive prior experience. Young graduates are caught in a loop where every application is rejected for lack of the experience that only a job can provide.',

      // ==================== BLOG / COMMUNITY PAGE ====================
      'blog.hero.title': 'Community <span class="accent">Drops.</span>',
      'blog.hero.desc': 'Text and voice posts from workers and businesses — real experience, straight from the platform.',
      'blog.guestBanner': 'You\'re posting as a guest right now — <a href="auth.html" style="color:var(--dark);font-weight:600;">sign up</a> to post under your real name and build a reputation on your posts.',
      'blog.search.placeholder': 'Search posts…',
      'blog.filter.all': 'All posts',
      'blog.filter.worker': 'Worker stories',
      'blog.filter.business': 'For businesses',
      'blog.filter.tips': 'Tips & guides',
      'blog.filter.update': 'Platform updates',
      'blog.dock.label': 'Share something real…',
      'blog.dock.write': 'Write',
      'blog.dock.record': 'Record',
      'blog.composer.text': 'Text Drop',
      'blog.composer.voice': 'Voice Drop',
      'blog.composer.titlePlaceholder': 'Title (optional)',
      'blog.composer.contentPlaceholder': 'Share a tip, a story, or something you learned in the job market…',
      'blog.composer.tag.worker': 'Worker story',
      'blog.composer.tag.business': 'For businesses',
      'blog.composer.tag.tips': 'Tips & guides',
      'blog.composer.tag.update': 'Platform update',
      'blog.composer.preview': 'Preview — this is exactly what the community will see',
      'blog.composer.publish': 'Publish',
      'blog.composer.voice.tapToRecord': 'Tap to record',
      'blog.composer.voice.limit': 'Up to 30 seconds for now',
      'blog.composer.voice.rerecord': 'Re-record',
      'blog.composer.voice.publish': 'Publish',
      'blog.post.helpful': 'Helpful',
      'blog.post.insightful': 'Insightful',
      'blog.post.agree': 'Agree',
      'blog.post.save': 'Save',
      'blog.post.delete': 'Delete',
      'blog.post.readMore': 'Read more',
      'blog.empty.title': 'The floor is yours.',
      'blog.empty.desc': 'Nobody\'s posted yet — be the first voice in our community. Write a Text Drop or record a Voice Drop below.',

      // ==================== IDENTITY VERIFICATION PAGE ====================
      'idv.hero.breadcrumb': 'Identity Verification',
      'idv.hero.eyebrow': 'Takes under 3 minutes',
      'idv.hero.title': 'KNOW WHO<br/>YOU ARE<br/><span class="accent">WORKING WITH.</span>',
      'idv.hero.desc': 'Identity verification protects <strong>everyone</strong> on our platform. Workers know the businesses they work for are real. Businesses know the talent they hire is who they claim to be. The platform stays safe for all.',
      'idv.hero.ctaVerify': 'Verify My Identity',
      'idv.hero.ctaLearn': 'Learn Why',
      'idv.hero.trust1': 'Data never sold',
      'idv.hero.trust2': '256-bit encrypted',
      'idv.hero.trust3': 'GDPR and POPIA compliant',
      'idv.hero.trust4': 'Under 3 minutes',
      'idv.strip1.title': 'Under 3 Minutes',
      'idv.strip1.desc': 'Complete the full process on your phone or desktop',
      'idv.strip2.title': 'Certified Provider',
      'idv.strip2.desc': 'Processed by an ISO 27001-certified identity verification partner',
      'idv.strip3.title': 'Not Stored by Us',
      'idv.strip3.desc': 'Document images are processed and deleted — we only keep the verified result',
      'idv.strip4.title': 'One-Time Process',
      'idv.strip4.desc': 'Verify once and your status carries across our full platform',
      'idv.why.eyebrow': 'Why It Matters',
      'idv.why.title': 'TRUST IS NOT<br/>ASSUMED.<br/><span class="acc">IT IS BUILT.</span>',
      'idv.why.desc': 'A platform where anyone can claim anything is a platform where nothing can be trusted. Identity verification is the foundation that makes every trust score, every review and every payment on our platform mean something real.',
      'idv.why.card1.title': 'Workers Know Who Hires Them',
      'idv.why.card1.desc': 'Every business posting tasks on our platform has passed identity and entity verification. Workers never accept work from an anonymous source — they know exactly who they are working for.',
      'idv.why.card2.title': 'Trust Scores Are Tied to Real People',
      'idv.why.card2.desc': 'Without verification, trust scores are meaningless. A user could create multiple accounts and game the system. Verification ties every review, every task and every rating permanently to a real, unique individual.',
      'idv.why.card3.title': 'Payments Are Protected From Fraud',
      'idv.why.card3.desc': 'Payment fraud, account takeovers and money mule activity are serious risks on any platform that moves money. Identity verification is our strongest defence against all three — protecting every worker\'s earnings.',
      'idv.why.card4.title': 'Your Reputation Is Yours Alone',
      'idv.why.card4.desc': 'Your reputation with us belongs to you and only you. Verification ensures that no one else can create an account claiming to be you, use your name or dilute the work history you have built.',
      'idv.why.card5.title': 'Legal Compliance in Six Countries',
      'idv.why.card5.desc': 'Operating across six jurisdictions means we must meet Anti-Money Laundering (AML) and Know Your Customer (KYC) obligations in each market. Verification is not optional — it is a legal requirement for a platform that moves money.',
      'idv.why.card6.title': 'Employers Take It Seriously',
      'idv.why.card6.desc': 'When a verified worker shares their Skill Passport with a prospective employer, that employer knows the proof of work behind it is tied to a real, verified identity. That is what makes a verified reputation worth more than a CV.',
      'idv.check.eyebrow': 'Full Transparency',
      'idv.check.title': 'EXACTLY WHAT<br/>WE CHECK AND<br/><span class="acc">WHAT WE DO NOT.</span>',
      'idv.check.desc': 'We check only what is necessary to confirm your identity. We do not collect medical information, financial history, criminal records or anything beyond what is listed below.',
      'idv.check.weVerify': 'What we verify',
      'idv.check.verify1.title': 'You are a real person',
      'idv.check.verify1.desc': 'We confirm your government-issued document is genuine and not expired, and that the selfie matches the photo on the document.',
      'idv.check.verify2.title': 'You are 18 years old or over',
      'idv.check.verify2.desc': 'We confirm your date of birth from the document confirms you meet the minimum age requirement for the platform.',
      'idv.check.verify3.title': 'Your name matches your account',
      'idv.check.verify3.desc': 'The name on your document must match the name you registered with. This prevents impersonation and account sharing.',
      'idv.check.verify4.title': 'The document has not been tampered with',
      'idv.check.verify4.desc': 'Our reviewers check for digital manipulation, altered text and inconsistencies in document security features.',
      'idv.check.verify5.title': 'You are not already verified under another account',
      'idv.check.verify5.desc': 'Each person may only hold one verified account. Duplicate accounts are a platform violation.',
      'idv.check.doNotCheck': 'What we do NOT check',
      'idv.check.not1.title': 'Criminal record',
      'idv.check.not1.desc': 'We do not run criminal background checks. We\'re a work platform, not an employment screening service.',
      'idv.check.not2.title': 'Credit history or financial records',
      'idv.check.not2.desc': 'We have no access to your credit score, bank account history or financial standing. We only verify who you are.',
      'idv.check.not3.title': 'Medical or health information',
      'idv.check.not3.desc': 'No medical data is requested, collected or inferred at any point during the verification process.',
      'idv.check.not4.title': 'Social media or online presence',
      'idv.check.not4.desc': 'We do not look up your social accounts, search for you online or access any data outside the verification process.',
      'idv.check.not5.title': 'Biometric profiles or facial recognition databases',
      'idv.check.not5.desc': 'Your selfie is used solely to match your face to your document photo. No facial recognition profile is created or stored.',
      'idv.process.eyebrow': 'Step by Step',
      'idv.process.title': 'HOW VERIFICATION<br/><span class="acc">WORKS.</span>',
      'idv.process.desc': 'Four quick steps. Everything happens on your device. The entire process takes under three minutes.',
      'idv.process.step1.title': 'Choose Your Document',
      'idv.process.step1.desc': 'Select the type of ID you will use — national ID card, passport or driver\'s licence. Different documents are supported by country.',
      'idv.process.step1.tag': 'On Device',
      'idv.process.step2.title': 'Scan the Document',
      'idv.process.step2.desc': 'Hold your document in front of your device camera. Our system captures both the front and back. Guidance is provided in real time.',
      'idv.process.step2.tag': 'Under 60 Seconds',
      'idv.process.step3.title': 'Take a Selfie',
      'idv.process.step3.desc': 'A quick liveness check — you will be asked to blink or turn your head to confirm you are physically present. No special equipment needed.',
      'idv.process.step3.tag': 'Liveness Check',
      'idv.process.step4.title': 'Instant Decision',
      'idv.process.step4.desc': 'Most verifications are approved instantly. If manual review is needed, you will be notified within 24 hours. Your profile is unlocked on approval.',
      'idv.process.step4.tag': 'Instant or 24h',
      'idv.docs.eyebrow': 'Accepted Documents',
      'idv.docs.title': 'WHAT YOU WILL<br/><span class="acc">NEED.</span>',
      'idv.docs.desc': 'We accept government-issued photo ID from all six countries where we operate. Documents must be current and not expired.',
      'idv.docs.national.title': 'National Identity Card',
      'idv.docs.national.desc': 'Accepted in South Africa (Green ID Book and Smart ID Card), France (Carte Nationale d\'Identite), Spain (Documento Nacional de Identidad) and China (Resident Identity Card).',
      'idv.docs.national.badge': 'Most Common',
      'idv.docs.passport.title': 'Passport',
      'idv.docs.passport.desc': 'International passports are accepted from all six countries. The biographical data page and photo page must both be clearly visible. Accepted worldwide — ideal for international workers.',
      'idv.docs.passport.badge': 'Accepted All Countries',
      'idv.docs.drivers.title': 'Driver\'s Licence',
      'idv.docs.drivers.desc': 'Accepted in South Africa, United States, United Kingdom and France. Must include a photo and date of birth. Accepted as a secondary document where national ID is not available.',
      'idv.docs.drivers.badge': 'Select Countries',
      'idv.docs.residence.title': 'Residence Permit',
      'idv.docs.residence.desc': 'Biometric residence permits are accepted in the United Kingdom and selected European Union countries for foreign nationals living and working in those jurisdictions.',
      'idv.docs.residence.badge': 'UK and EU',
      'idv.docs.business.title': 'Business Registration Document',
      'idv.docs.business.desc': 'For business accounts: company registration certificate or equivalent document from the relevant national company registrar. Required alongside the identity verification of the authorised representative.',
      'idv.docs.business.badge': 'Business Accounts',
      'idv.docs.other.title': 'Document Not Listed?',
      'idv.docs.other.desc': 'Contact our verification support team at verify@youngmerit.com. We may be able to accept alternative documents on a case-by-case basis for users in jurisdictions with limited standard ID options.',
      'idv.docs.other.badge': 'Contact Us',
      'idv.docs.countries.label': 'Accepted from',
      'idv.privacy.eyebrow': 'Your Privacy',
      'idv.privacy.title': 'YOUR DATA.<br/>YOUR <span class="acc">CONTROL.</span>',
      'idv.privacy.desc': 'We take privacy seriously at every step. The identity verification process is designed to collect the minimum information necessary and nothing more. Here is exactly how your data is handled.',
      'idv.privacy.cta': 'Read Full Privacy Policy',
      'idv.privacy.item1.title': 'Document images are never stored by us',
      'idv.privacy.item1.desc': 'Your ID photos and selfie are transmitted directly to our certified verification partner, processed to confirm your identity and then permanently deleted. We only receive the verification result: approved, declined or pending.',
      'idv.privacy.item2.title': 'All data is encrypted end-to-end',
      'idv.privacy.item2.desc': 'Everything transmitted during verification is encrypted using TLS 1.3. Our verification partner holds ISO 27001 certification and processes data under a binding data processing agreement with us.',
      'idv.privacy.item3.title': 'Compliant in all six countries',
      'idv.privacy.item3.desc': 'Our verification process meets the requirements of GDPR (France and Spain), UK GDPR, POPIA (South Africa), PIPL (China) and applicable US state privacy laws. Cross-border data transfers use approved Standard Contractual Clauses.',
      'idv.privacy.item4.title': 'You can request deletion at any time',
      'idv.privacy.item4.desc': 'Under GDPR, POPIA and other applicable laws, you have the right to request deletion of your personal data. If you close your account, your verification status and associated data are deleted within 30 days, subject to legal retention obligations.',
      'idv.privacy.item5.title': 'Your data is never sold',
      'idv.privacy.item5.desc': 'We do not sell, rent or share your personal data with any third party for commercial purposes. Your identity data is used solely to confirm who you are — nothing else.',
      'idv.faq.eyebrow': 'COMMON QUESTIONS',
      'idv.faq.title': 'Everything you need to know about the verification process.',
      'idv.faq.q1': 'Is identity verification mandatory?',
      'idv.faq.a1': 'Yes. All users who wish to transact on our platform — applying for tasks, posting tasks or receiving payments — must complete identity verification. You can browse the platform without verifying, but you cannot apply for work, post tasks or send or receive money until verification is complete. This is a legal requirement under the anti-money laundering regulations that apply in each country where we operate.',
      'idv.faq.q2': 'How long does verification take?',
      'idv.faq.a2': 'The verification process itself takes under three minutes on most devices. The majority of decisions are returned instantly after submission. In some cases — typically where document quality is lower or where manual review is needed — you may wait up to 24 hours. You will receive an email notification as soon as your status is confirmed. You do not need to stay on the page while the review is processing.',
      'idv.faq.q3': 'My verification was declined. What do I do?',
      'idv.faq.a3': 'If your verification is declined, you will receive an email explaining the reason. Common reasons include: a blurry or incomplete document scan, an expired document, a mismatch between the name on the document and the account, or a document that is not accepted in your country. You can retry the verification process up to three times. If you continue to experience issues, contact our verification support team at verify@youngmerit.com and a human agent will assist you directly.',
      'idv.faq.q4': 'Will my documents be shared with businesses I work for?',
      'idv.faq.a4': 'Absolutely not. Businesses on our platform never see your identity documents. They see only a verification badge on your profile indicating that your identity has been confirmed by us. Your document type, document number, date of birth and any other personal details from the verification process are never shared with any business or other user on the platform.',
      'idv.faq.q5': 'Do I need to verify again if I change my name or country?',
      'idv.faq.a5': 'If you legally change your name, you will need to contact our support team to update your account and may need to complete a new verification. If you move countries, re-verification is not automatically required unless you are updating your payment details to a new jurisdiction. Contact our support team for guidance on your specific situation.',
      'idv.faq.q6': 'I do not have a standard ID document. Can I still verify?',
      'idv.faq.a6': 'Contact us at verify@youngmerit.com before attempting verification. We understand that access to standard government-issued ID is not equal in all communities and we will work with you on a case-by-case basis to find an appropriate solution. We never want identity verification to be a barrier that prevents genuine, deserving young people from accessing the platform.',
      'idv.faq.q7': 'Is my selfie stored permanently?',
      'idv.faq.a7': 'No. Your selfie is used only to perform a liveness check and match your face to the photo on your identity document. It is processed by our verification partner and then permanently deleted. We do not store any biometric data, do not create a facial recognition profile and do not retain any images from the verification process. Only the verification result — approved, declined or pending — is retained by us.',
      'idv.cta.eyebrow': 'Ready to get started?',
      'idv.cta.title': 'PROVE YOU ARE<br/>WHO YOU <span class="acc">SAY YOU ARE.</span>',
      'idv.cta.desc': 'Complete identity verification in under three minutes and unlock the full platform — real work, real pay, real reputation.',
      'idv.cta.verify': 'Verify Now',
      'idv.cta.privacy': 'Read Privacy Policy',

      // ==================== PROFILE PAGE (SHARED) ====================
      'profile.gate.title': 'YOUR PROFILE LIVES HERE.',
      'profile.gate.desc': 'Sign up to build your Skill Passport and start finding work — or create a business account to post tasks and hire talent.',
      'profile.gate.ctaSignup': 'Create an account',
      'profile.gate.ctaLogin': 'Log in',
      'profile.privateNotice': '<strong>Your profile is visible to other logged-in members.</strong> Anyone signed in to YoungMerit can see your name, photo, bio, portfolio and work history. Your contact details and banking information are never shown to anyone but you.',
      'profile.public.loading': 'Loading profile…',
      'profile.public.loginRequired': 'Log in to view worker profiles.',
      'profile.public.backToSearch': '← Back to Hire Talent',
      'profile.public.inviteCta': 'Invite to a Task',
      'profile.public.noPortfolio': 'No portfolio items yet.',
      'profile.public.noBio': 'This worker hasn\'t added a bio yet.',
      'profile.public.notFound.title': 'PROFILE NOT FOUND',
      'profile.public.notFound.desc': 'This worker profile doesn\'t exist or is no longer available.',
      'profile.verification.identity': 'Identity',
      'profile.verification.email': 'Email',
      'profile.verification.phone': 'Phone',
      'profile.verification.bank': 'Bank account',
      'profile.verification.done': 'Verified',
      'profile.verification.pending': 'Pending',
      'profile.verification.none': 'Not added',
      'profile.wallet.balance': 'Wallet Balance',
      'profile.wallet.available': 'Available to withdraw',
      'profile.wallet.availableSpend': 'Available to spend',
      'profile.wallet.escrow': 'in escrow',
      'profile.wallet.withdraw': 'Withdraw',
      'profile.wallet.history': 'History',
      'profile.wallet.topup': 'Top up',
      'profile.actions.editProfile': 'Edit profile',
      'profile.actions.browseTasks': 'Browse tasks',
      'profile.actions.postTask': 'Post a task',
      'profile.actions.verify': 'Complete verification',
      'profile.actions.updateContact': 'Update contact & payout details',
      'profile.plan.title': 'Your plan',
      'profile.plan.active': 'ACTIVE',
      'profile.plan.upgrade': 'Upgrade plan',
      'profile.plan.manage': 'Manage plan',
      'profile.plan.free': 'Free',
      'profile.plan.pro': 'Professional Pro',
      'profile.plan.business': 'Business Pro',
      'profile.plan.growth': 'Business Growth',
      'profile.plan.featuredProfile': 'Featured placement is active: your profile is highlighted in Hire Talent searches.',
      'profile.plan.featuredCompany': 'Featured placement is active: your company profile stands out to workers.',
      'profile.plan.featuredCompanyTasks': 'Featured placement is active: your company and tasks are highlighted in searches.',
      'profile.plan.upsellWorker': 'Upgrade to Professional Pro to get featured placement and stand out to businesses.',
      'profile.plan.upsellBiz': 'Upgrade to Business Pro or Growth to feature your company and tasks to workers.',
      'profile.worker.tabs.analytics': 'Analytics',
      'profile.worker.analytics.title': 'Profile Analytics',
      'profile.worker.analytics.subtitle': 'How your profile is performing with businesses.',
      'profile.worker.analytics.views': 'Profile views',
      'profile.worker.analytics.viewsWeek': 'Views this week',
      'profile.worker.analytics.saved': 'Saved by businesses',
      'profile.worker.analytics.acceptRate': 'Acceptance rate',
      'profile.worker.analytics.footnote': 'Based on {accepted} accepted out of {sent} applications sent.',
      'profile.worker.analytics.locked': 'Upgrade to Professional Pro to see who’s viewing your profile, how often businesses save it, and how your applications are performing.',
      'profile.savedPosts.title': 'Saved posts',
      'profile.savedPosts.empty': 'No saved posts yet.<br/>Bookmark posts in the Community feed to find them here.',
      'profile.savedPosts.cta': 'Go to Community',
      'profile.about.edit': 'Edit',
      'profile.about.add': 'Click to add a bio.',
      'profile.skills.add': 'Add skill',
      'profile.cv.upload': 'Upload',
      'profile.cv.zone': 'Upload your CV or resume',
      'profile.cv.zone.note': 'PDF, DOC or DOCX · Max 5MB',
      'profile.cv.uploaded': 'Uploaded successfully',
      'profile.cv.remove': 'Remove',
      'profile.passport.title': 'SKILL PASSPORT',
      'profile.passport.next': 'Complete your first task to start',
      'profile.passport.nextMilestone': '{n} more to {level}',
      'profile.passport.maxLevel': 'Top tier reached — nothing more to unlock',
      'profile.passport.earned': 'Earned',
      'profile.passport.completion': 'Completion',
      'profile.passport.rating': 'Avg rating',

      // ==================== WORKER PROFILE ====================
      'profile.worker.cover.edit': 'Edit cover',
      'profile.worker.actions.edit': 'Edit profile',
      'profile.worker.actions.browse': 'Browse tasks',
      'profile.worker.badge.verified': 'Verified Business',
      'profile.worker.meta.tasks': 'tasks completed',
      'profile.worker.meta.rating': 'rating',
      'profile.worker.meta.member': 'Member since',
      'profile.worker.passport.title': 'SKILL PASSPORT',
      'profile.worker.passport.level': 'Verified',
      'profile.worker.passport.next': 'tasks completed · Next level: Rising at 25 tasks',
      'profile.worker.passport.barLabel': 'tasks completed',
      'profile.worker.passport.earned': 'Total earned',
      'profile.worker.passport.completion': 'Completion',
      'profile.worker.passport.rating': 'Avg rating',
      'profile.worker.tabs.about': 'About',
      'profile.worker.tabs.growth': 'Growth Journey',
      'profile.worker.growth.title': 'Your Growth Journey',
      'profile.worker.growth.subtitle': 'A timeline of your real milestones on YoungMerit.',
      'profile.worker.growth.joined.title': 'Joined YoungMerit',
      'profile.worker.growth.joined.desc': 'Where your journey began.',
      'profile.worker.growth.verified.title': 'Identity Verified',
      'profile.worker.growth.verified.desc.done': 'Your identity was confirmed.',
      'profile.worker.growth.verified.desc.pending': 'Your verification is under review.',
      'profile.worker.growth.verified.desc.locked': 'Verify your identity to unlock this milestone.',
      'profile.worker.growth.verified.cta': 'Verify now',
      'profile.worker.growth.firstTask.title': 'First Task Completed',
      'profile.worker.growth.firstTask.desc.done': 'You delivered your first task.',
      'profile.worker.growth.firstTask.desc.locked': 'Complete your first task to unlock this milestone.',
      'profile.worker.growth.firstTask.cta': 'Browse tasks',
      'profile.worker.growth.portfolio.title': 'Portfolio Showcased',
      'profile.worker.growth.portfolio.desc.done': 'You added your first portfolio piece.',
      'profile.worker.growth.portfolio.desc.locked': 'Add a portfolio item to unlock this milestone.',
      'profile.worker.growth.portfolio.cta': 'Add portfolio item',
      'profile.worker.growth.levelVerified.title': 'Reached Verified',
      'profile.worker.growth.levelVerified.desc.done': 'You unlocked the Verified badge.',
      'profile.worker.growth.levelTrusted.title': 'Reached Trusted',
      'profile.worker.growth.levelTrusted.desc.done': 'You unlocked the Trusted badge.',
      'profile.worker.growth.levelElite.title': 'Reached Elite',
      'profile.worker.growth.levelElite.desc.done': 'You reached the highest tier on YoungMerit.',
      'profile.worker.growth.level.progress': '{current}/{target} tasks completed',
      'profile.worker.tabs.tasks': 'Task History',
      'profile.worker.tabs.portfolio': 'Portfolio',
      'profile.worker.tabs.saved': 'Saved Posts',
      'profile.worker.about.title': 'About me',
      'profile.worker.about.edit': 'Edit',
      'profile.worker.about.empty': 'Click to add a bio.',
      'profile.worker.skills.title': 'Skills',
      'profile.worker.skills.edit': 'Edit',
      'profile.worker.skills.add': 'Add skill',
      'profile.worker.cv.title': 'CV / Resume',
      'profile.worker.cv.upload': 'Upload',
      'profile.worker.cv.zone': 'Upload your CV or resume',
      'profile.worker.cv.note': 'PDF, DOC or DOCX · Max 5MB · Optional but increases hire rate',
      'profile.worker.tasks.title': 'Completed tasks',
      'profile.worker.tasks.count': 'tasks',
      'profile.worker.tasks.empty': 'No completed tasks yet.',
      'profile.worker.tasks.browse': 'Browse available tasks',
      'profile.worker.tasks.viewAll': 'View all tasks',
      'profile.worker.portfolio.title': 'Portfolio',
      'profile.worker.portfolio.empty': 'No portfolio items yet.',
      'profile.worker.portfolio.add': 'Add links or images to showcase your work to employers.',
      'profile.worker.portfolio.cta': 'Add portfolio item',
      'profile.worker.portfolio.viewLink': 'View link',
      'profile.worker.saved.title': 'Saved posts',
      'profile.worker.saved.empty': 'No saved posts yet.',
      'profile.worker.saved.cta': 'Go to Community',
      'profile.worker.sidebar.wallet.balance': 'Wallet Balance',
      'profile.worker.sidebar.wallet.available': 'Available to withdraw',
      'profile.worker.sidebar.wallet.withdraw': 'Withdraw',
      'profile.worker.sidebar.wallet.history': 'History',
      'profile.worker.sidebar.verification.title': 'Verification Status',
      'profile.worker.sidebar.verification.identity': 'Identity',
      'profile.worker.sidebar.verification.email': 'Email',
      'profile.worker.sidebar.verification.phone': 'Phone',
      'profile.worker.sidebar.verification.bank': 'Bank account',
      'profile.worker.sidebar.details.title': 'Profile details',
      'profile.worker.sidebar.details.location': 'Location',
      'profile.worker.sidebar.details.languages': 'Languages',
      'profile.worker.sidebar.details.education': 'Education',
      'profile.worker.sidebar.details.age': 'Age',
      'profile.worker.sidebar.details.edit': 'Edit details',
      'profile.worker.sidebar.applications': 'Active applications',
      'profile.worker.applications.empty': 'No active applications.',
      'profile.worker.applications.browse': 'Browse tasks',
      'profile.worker.applications.status.review': 'Under review',
      'profile.worker.applications.status.shortlisted': 'Shortlisted',

      // ==================== BUSINESS PROFILE ====================
      'profile.biz.cover.edit': 'Edit cover',
      'profile.biz.actions.edit': 'Edit profile',
      'profile.biz.actions.post': 'Post a task',
      'profile.biz.badge.verified': 'Verified Business',
      'profile.biz.meta.posted': 'tasks posted',
      'profile.biz.meta.rating': 'employer rating',
      'profile.biz.meta.hired': 'workers hired',
      'profile.biz.meta.member': 'Member since',
      'profile.biz.stats.posted': 'Tasks posted',
      'profile.biz.stats.hired': 'Workers hired',
      'profile.biz.stats.paid': 'Total paid out',
      'profile.biz.stats.rating': 'Avg rating given',
      'profile.biz.tabs.about': 'About',
      'profile.biz.tabs.bench': 'Trusted Bench',
      'profile.biz.bench.title': 'Trusted Bench',
      'profile.biz.bench.subtitle': "Workers you've hired more than once — your go-to team.",
      'profile.biz.bench.empty': "Hire the same worker twice and they'll show up here automatically, with a one-click way to bring them back for your next task.",
      'profile.biz.bench.browseCta': 'Browse Talent',
      'profile.biz.bench.hireCount': 'Hired {n} times',
      'profile.biz.bench.lastHired': 'last hired {date}',
      'profile.biz.bench.notePlaceholder': 'Private note (only you can see this)',
      'profile.biz.bench.viewProfile': 'View Profile',
      'profile.biz.bench.rehire': 'Hire Again',
      'profile.biz.tabs.analytics': 'Analytics',
      'profile.biz.analytics.title': 'Analytics dashboard',
      'profile.biz.analytics.subtitle': 'How your task postings are performing.',
      'profile.biz.analytics.locked': 'Upgrade to a Business plan to unlock your analytics dashboard: applicant totals, hire rate, task completion rate and more.',
      'profile.biz.analytics.applicants': 'Total applicants',
      'profile.biz.analytics.hireRate': 'Hire rate',
      'profile.biz.analytics.completed': 'Tasks completed',
      'profile.biz.analytics.completionRate': 'Completion rate',
      'profile.biz.analytics.advanced': 'Advanced insights',
      'profile.biz.analytics.saved': 'Times saved by workers',
      'profile.biz.analytics.growthUpsell': 'Upgrade to Growth to unlock advanced insights like save counts.',
      'profile.biz.tabs.postings': 'Active Tasks',
      'profile.biz.tabs.applicants': 'Applicants',
      'profile.biz.tabs.history': 'Past Tasks',
      'profile.biz.tabs.saved': 'Saved Posts',
      'profile.biz.about.title': 'About the business',
      'profile.biz.about.edit': 'Edit',
      'profile.biz.about.empty': 'Click to add a business description.',
      'profile.biz.skills.title': 'Industry Tags',
      'profile.biz.skills.edit': 'Edit',
      'profile.biz.skills.add': 'Add tag',
      'profile.biz.postings.title': 'Live task listings',
      'profile.biz.postings.new': 'New task',
      'profile.biz.postings.empty': 'No active listings.',
      'profile.biz.postings.browse': 'Post your first task',
      'profile.biz.postings.status.live': 'Live',
      'profile.biz.postings.status.review': 'In review',
      'profile.biz.postings.status.closed': 'Closed',
      'profile.biz.postings.actions.viewApplicants': 'View applicants',
      'profile.biz.postings.actions.edit': 'Edit',
      'profile.biz.postings.actions.close': 'Close',
      'profile.biz.applicants.title': 'Applicants',
      'profile.biz.applicants.lock': 'Full profiles unlock when you shortlist an applicant',
      'profile.biz.applicants.shortlist': 'Shortlist',
      'profile.biz.applicants.view': 'View profile',
      'profile.biz.applicants.hire': 'Hire',
      'profile.biz.applicants.locked': 'Shortlist to unlock',
      'profile.biz.applicants.empty': 'Applicants appear here once you have a live task listing.',
      'profile.biz.history.title': 'Completed tasks',
      'profile.biz.history.count': 'tasks',
      'profile.biz.history.empty': 'No completed tasks yet.',
      'profile.biz.history.viewAll': 'View all',
      'profile.biz.saved.title': 'Saved posts',
      'profile.biz.saved.empty': 'No saved posts yet.',
      'profile.biz.saved.cta': 'Go to Community',
      'profile.biz.sidebar.post.title': 'POST A TASK',
      'profile.biz.sidebar.post.desc': 'Find the right person for your next project. Funds held in escrow until you approve.',
      'profile.biz.sidebar.post.cta': 'Post a new task',
      'profile.biz.sidebar.wallet.balance': 'Wallet Balance',
      'profile.biz.sidebar.wallet.available': 'Available to spend',
      'profile.biz.sidebar.wallet.topup': 'Top up',
      'profile.biz.sidebar.wallet.history': 'History',
      'profile.biz.sidebar.wallet.escrow': 'in escrow',
      'profile.biz.sidebar.verification.title': 'Verification Status',
      'profile.biz.sidebar.verification.identity': 'Identity',
      'profile.biz.sidebar.verification.company': 'Company reg.',
      'profile.biz.sidebar.verification.email': 'Email',
      'profile.biz.sidebar.verification.payment': 'Payment method',
      'profile.biz.sidebar.details.title': 'Company details',
      'profile.biz.sidebar.details.location': 'Location',
      'profile.biz.sidebar.details.industry': 'Industry',
      'profile.biz.sidebar.details.size': 'Company size',
      'profile.biz.sidebar.details.website': 'Website',
      'profile.biz.sidebar.details.edit': 'Edit details',

      // ==================== CONTACT PAGE ====================
      'contact.hero.breadcrumb': 'Contact Us',
      'contact.form.topic.routedPrefix': 'This will be sent to',
      'contact.sidebar.press.response': 'Response within 2 business days',
      'contact.success.refLabel': 'Your reference number is:',
      'contact.hero.eyebrow': 'We typically reply within 1 business day',
      'contact.hero.title': 'LET\'S TALK.',
      'contact.hero.desc': 'Whether you have a question, a problem, or a story to share — <strong>tell us what\'s going on</strong> and we\'ll route it to the right person. No bots, no endless menus.',
      'contact.success.title': 'MESSAGE SENT.',
      'contact.success.desc': 'We\'ve sent a confirmation to your email. Our team typically replies within 1 business day — sooner for urgent dispute or security matters.',
      'contact.success.btn': 'Back to Home',
      'contact.form.title': 'SEND US A MESSAGE',
      'contact.form.desc': 'Fill in the form below. Fields marked <span class="required-mark">*</span> are required.',
      'contact.form.rateLimit': 'Too many submissions. Please wait before trying again.',
      'contact.form.topic.label': 'What is this about? <span class="required-mark">*</span>',
      'contact.form.topic.general': 'General Support',
      'contact.form.topic.general.desc': 'Account, platform, technical help',
      'contact.form.topic.business': 'Business Inquiry',
      'contact.form.topic.business.desc': 'Hiring, partnerships, enterprise',
      'contact.form.topic.dispute': 'Dispute Help',
      'contact.form.topic.dispute.desc': 'Task, payment or escrow issue',
      'contact.form.topic.press': 'Press & Media',
      'contact.form.topic.press.desc': 'Interviews, press kit, quotes',
      'contact.form.topic.privacy': 'Privacy & Data',
      'contact.form.topic.privacy.desc': 'Data requests, privacy questions',
      'contact.form.topic.other': 'Something Else',
      'contact.form.topic.other.desc': 'Anything not listed above',
      'contact.form.topic.routed': 'This will be sent to <strong>support@youngmerit.com</strong>',
      'contact.form.name': 'Full Name',
      'contact.form.name.error': 'Please enter your full name.',
      'contact.form.email': 'Email Address',
      'contact.form.email.error': 'Please enter a valid email address.',
      'contact.form.role': 'I am a',
      'contact.form.role.placeholder': 'Select one (optional)',
      'contact.form.role.worker': 'Worker',
      'contact.form.role.business': 'Business',
      'contact.form.role.guest': 'Not yet a member',
      'contact.form.role.journalist': 'Journalist or media',
      'contact.form.role.other': 'Other',
      'contact.form.reference': 'Task or Case Reference',
      'contact.form.reference.hint': 'Only needed if your message relates to a specific task or dispute.',
      'contact.form.subject': 'Subject',
      'contact.form.subject.error': 'Please enter a subject.',
      'contact.form.message': 'Your Message',
      'contact.form.message.error': 'Please enter a message (minimum 20 characters).',
      'contact.form.attachment': 'Attachment (Optional)',
      'contact.form.attachment.hint': 'Click to attach a screenshot or file — max 10MB',
      'contact.form.human': 'I am not a robot',
      'contact.form.consent': 'I agree to YOUNGMERIT\'s <a href="privacy-policy.html">Privacy Policy</a> and consent to being contacted about this enquiry by email.',
      'contact.form.cta': 'Send Message',
      'contact.sidebar.general.title': 'General Support',
      'contact.sidebar.general.desc': 'Account issues, platform questions, anything day to day.',
      'contact.sidebar.general.response': 'Response within 1 business day',
      'contact.sidebar.business.title': 'Business & Partnerships',
      'contact.sidebar.business.desc': 'Enterprise hiring, integrations, partnership proposals.',
      'contact.sidebar.business.response': 'Response within 2 business days',
      'contact.sidebar.dispute.title': 'Disputes',
      'contact.sidebar.dispute.desc': 'Active dispute cases and escrow-related issues.',
      'contact.sidebar.dispute.note': 'Or use the <a href="dispute-system.html" style="color:var(--amber);">Dispute System</a>',
      'contact.sidebar.press.title': 'Press & Media',
      'contact.sidebar.press.desc': 'Interview requests, press kit, media enquiries.',
      'contact.sidebar.privacy.title': 'Privacy & Data Protection',
      'contact.sidebar.privacy.desc': 'Data access, deletion requests and privacy questions.',
      'contact.sidebar.privacy.response': 'Response within 5 business days',
      'contact.sidebar.response.title': 'Typical Response Times',
      'contact.sidebar.response.general': 'General Support',
      'contact.sidebar.response.general.time': '1 business day',
      'contact.sidebar.response.dispute': 'Dispute Cases',
      'contact.sidebar.response.dispute.time': '1 business day',
      'contact.sidebar.response.business': 'Business Inquiries',
      'contact.sidebar.response.business.time': '2 business days',
      'contact.sidebar.response.press': 'Press & Media',
      'contact.sidebar.response.press.time': '2 business days',
      'contact.sidebar.response.privacy': 'Privacy Requests',
      'contact.sidebar.response.privacy.time': '5 business days',
      'contact.sidebar.office': 'Support available Monday to Friday, 08:00 to 18:00 SAST',
      'contact.sidebar.languages': 'We reply in English, Mandarin, French and Spanish',
      'contact.faq.title': 'BEFORE YOU WRITE IN',
      'contact.faq.desc': 'A few quick answers that might save you a wait.',
      'contact.faq.q1': 'I have an active dispute. Where do I check its status?',
      'contact.faq.a1': 'Use the <a href="dispute-system.html" style="color:var(--amber);">Dispute System</a> page and click "Track Your Case" with your reference number. This gives you a live status update faster than waiting for an email reply.',
      'contact.faq.q2': 'I need to verify my identity. Is this the right place?',
      'contact.faq.a2': 'No — head to the <a href="identity-verification.html" style="color:var(--amber);">Identity Verification</a> page to start that process directly. If verification fails or you have an issue with a document, then contact support@youngmerit.com.',
      'contact.faq.q3': 'How fast will I actually hear back?',
      'contact.faq.a3': 'Most messages are answered within 1 business day. Dispute and security matters are prioritised. Press and business inquiries may take up to 2 business days due to lower volume staffing on those teams.',
      'contact.faq.q4': 'Can I call you instead of emailing?',
      'contact.faq.a4': 'We are currently an email-first support team to keep a written record for every case, which helps especially with disputes and payment issues. Phone support is on our roadmap as the platform grows.',

      // ==================== DISPUTE SYSTEM PAGE ====================
      'dispute.hero.eyebrow': 'Trust & Safety',
      'dispute.hero.title': 'DISPUTE<br/><span class="accent">SYSTEM.</span>',
      'dispute.hero.desc': 'When something goes wrong, we step in. Our mediation process is fair, fast, and binding within the platform — protecting both workers and businesses.',
      'dispute.step1.title': 'Raise a dispute',
      'dispute.step1.desc': 'Either party can open a dispute within 7 days of the task\'s marked completion date from their profile.',
      'dispute.step2.title': 'Submit evidence',
      'dispute.step2.desc': 'Both sides submit messages, deliverables, and task descriptions. Our team reviews everything submitted.',
      'dispute.step3.title': 'Decision in 3 days',
      'dispute.step3.desc': 'We aim to respond within 3 business days. Our decision determines how the escrowed funds are released.',
      'dispute.outcomes.title': 'POSSIBLE <span class="accent">OUTCOMES.</span>',
      'dispute.outcome1.title': 'Worker wins',
      'dispute.outcome1.desc': 'Escrowed funds are released in full to the worker\'s wallet immediately.',
      'dispute.outcome2.title': 'Business wins',
      'dispute.outcome2.desc': 'Escrowed funds are returned to the business wallet in full.',
      'dispute.outcome3.title': 'Partial resolution',
      'dispute.outcome3.desc': 'Funds are split between both parties based on the mediator\'s determination of work completed.',
      'dispute.rules.title': 'IMPORTANT <span class="accent">RULES.</span>',
      'dispute.rules.1': 'Disputes must be raised within <strong>7 days</strong> of the task\'s completion date. After this window, escrowed funds are automatically released to the worker.',
      'dispute.rules.2': 'Our mediation decision is binding within the platform — it determines how funds are released. It is not a legal ruling and does not affect your right to pursue the matter through the courts or a relevant consumer protection body.',
      'dispute.rules.3': 'Attempting to raise fraudulent disputes or submitting false evidence is grounds for immediate account termination.',
      'dispute.cta.title': 'NEED TO RAISE A DISPUTE?',
      'dispute.cta.desc': 'Log in and go to the relevant task in your profile to open a dispute. You need an active account and a task in progress or recently completed.',
      'dispute.cta.btn': 'Go to My Profile',

      // ==================== PRICING PAGE ====================
      'pricing.hero.breadcrumb': 'Pricing',
      'pricing.faq.title': 'FREQUENTLY ASKED <span class="accent">QUESTIONS.</span>',
      'pricing.faq.desc': 'Everything you need to know about our pricing.',
      'pricing.faq.q1': 'Why do you charge a marketplace fee?',
      'pricing.faq.a1': 'The marketplace fee covers payment processing, escrow protection, fraud prevention, dispute resolution, and customer support. You only pay when a task is successfully completed and value is created. No hidden fees, no surprises.',
      'pricing.faq.q2': 'When do I pay the marketplace fee?',
      'pricing.faq.a2': 'The fee is deducted automatically when a task is completed and the payment is released from escrow. Businesses pay the fee as part of the task cost. Workers receive their full payment minus the fee.',
      'pricing.faq.q3': 'How does escrow work?',
      'pricing.faq.a3': 'When a business posts a task, the full payment is held in a secure escrow account. The money is only released to the worker once the business approves the completed work. If there\'s a dispute, our mediation team reviews the evidence and makes a fair decision. <a href="dispute-system.html" style="color:var(--amber);text-decoration:none;">Learn more →</a>',
      'pricing.faq.q4': 'Can I cancel my subscription anytime?',
      'pricing.faq.a4': 'Yes. You can cancel your subscription at any time from your account settings. If you cancel, you\'ll continue to have access until the end of your current billing period. No lock-in contracts, no cancellation fees.',
      'pricing.faq.q5': 'Are subscriptions required to use YOUNGMERIT?',
      'pricing.faq.a5': '<strong>No.</strong> The Free plan gives you access to the core marketplace. You can post tasks, apply for work, and complete transactions without paying a subscription. Subscriptions unlock productivity features, analytics, and lower fees — they\'re an upgrade, not a requirement.',
      'pricing.faq.q6': 'Do you offer discounts for non-profits or educational institutions?',
      'pricing.faq.a6': 'Yes. We offer special pricing for registered non-profits, educational institutions, and social enterprises. Contact our team at <a href="mailto:support@growiq.co" style="color:var(--amber);text-decoration:none;">support@growiq.co</a> to discuss your specific needs.',
      'pricing.toggle.perYear': '/year',
      'pricing.toggle.saveAmount': 'Save {amount}/year',
      'pricing.calc.savePrefix': 'Save ',
      'pricing.hero.eyebrow': 'Simple. Transparent. No surprises.',
      'pricing.hero.title': 'PRICING THAT<br/><span class="accent">GROWS WITH YOU.</span>',
      'pricing.hero.desc': '<strong>Free to start.</strong> Only pay when you\'re hiring at scale. Transparent transaction fees and predictable subscriptions — no hidden costs.',
      'pricing.hero.tag1': '✓ No credit card required',
      'pricing.hero.tag2': '✓ Cancel anytime',
      'pricing.hero.tag3': '✓ 14-day money-back guarantee',
      'pricing.toggle.monthly': 'Monthly',
      'pricing.toggle.annual': 'Annual',
      'pricing.toggle.save': 'Save 20%',
      'pricing.free.name': 'Free',
      'pricing.free.desc': 'For individuals getting started',
      'pricing.free.price': '0',
      'pricing.free.period': '/month',
      'pricing.free.annual': 'R0 /year',
      'pricing.free.feat1': 'Post up to 3 tasks/month',
      'pricing.free.feat2': 'Basic company profile',
      'pricing.free.feat3': 'Standard support',
      'pricing.free.feat4': 'Apply to tasks',
      'pricing.free.feat5': 'Voice posts',
      'pricing.free.feat7': 'Analytics',
      'pricing.free.cta': 'Get Started Free',
      'pricing.pro.name': 'Professional Pro',
      'pricing.pro.desc': 'For professionals building their career',
      'pricing.pro.price': '149',
      'pricing.pro.period': '/month',
      'pricing.pro.annual': 'R1,429 /year',
      'pricing.pro.feat1': 'Profile analytics',
      'pricing.pro.feat2': 'Featured profile placement',
      'pricing.pro.feat5': 'Priority applications',
      'pricing.pro.feat6': 'Skills verification',
      'pricing.pro.feat7': 'Unlimited saved opportunities',
      'pricing.pro.cta': 'Start Pro',
      'pricing.biz.name': 'Business Pro',
      'pricing.biz.desc': 'For growing teams hiring regularly',
      'pricing.biz.price': '499',
      'pricing.biz.period': '/month',
      'pricing.biz.annual': 'R4,790 /year',
      'pricing.biz.popular': 'Most Popular',
      'pricing.biz.feat1': 'Unlimited tasks',
      'pricing.biz.feat3': 'Applicant filtering',
      'pricing.biz.feat4': '5 team members',
      'pricing.biz.feat5': 'Analytics dashboard',
      'pricing.biz.feat6': 'Company verification',
      'pricing.biz.feat7': 'Priority support',
      'pricing.biz.feat8': 'Featured company profile',
      'pricing.biz.feat9': 'Lower marketplace fee (10% → 8%)',
      'pricing.biz.cta': 'Start Business Pro',
      'pricing.growth.name': 'Business Growth',
      'pricing.growth.desc': 'For companies hiring at scale',
      'pricing.growth.price': '999',
      'pricing.growth.period': '/month',
      'pricing.growth.annual': 'R9,590 /year',
      'pricing.growth.feat1': 'Everything in Pro',
      'pricing.growth.feat2': 'Lower marketplace fee (10% → 6%)',
      'pricing.growth.feat5': 'Hiring pipeline',
      'pricing.growth.feat6': 'Unlimited team seats',
      'pricing.growth.feat7': 'Featured tasks',
      'pricing.growth.feat8': 'Advanced analytics',
      'pricing.growth.cta': 'Start Growth',
      'pricing.fees.eyebrow': 'MARKETPLACE <span class="accent">FEES.</span>',
      'pricing.fees.title': 'Transparent transaction fees that scale with your volume. Only pay when value is created.',
      'pricing.fees.tier1.range': 'R0 – R999 <small>per task</small>',
      'pricing.fees.tier1.rate': '10%',
      'pricing.fees.tier1.desc': 'Standard rate for smaller tasks',
      'pricing.fees.tier1.badge1': '✓ Secure escrow',
      'pricing.fees.tier1.badge2': '✓ Dispute protection',
      'pricing.fees.tier2.range': 'R1,000 – R4,999 <small>per task</small>',
      'pricing.fees.tier2.rate': '8%',
      'pricing.fees.tier2.desc': 'Reduced rate for medium tasks',
      'pricing.fees.tier2.badge1': '✓ Priority support',
      'pricing.fees.tier2.badge2': '✓ Faster payouts',
      'pricing.fees.tier3.range': 'R5,000+ <small>per task</small>',
      'pricing.fees.tier3.rate': '6%',
      'pricing.fees.tier3.desc': 'Best rate for large projects',
      'pricing.fees.tier3.badge1': '✓ Dedicated account manager',
      'pricing.fees.tier3.badge2': '✓ Premium support',
      'pricing.fees.note': '🔒 All payments protected by escrow. <a href="dispute-system.html" style="color:var(--amber);text-decoration:none;">Learn about dispute resolution →</a>',
      'pricing.calc.title': 'HOW MUCH COULD YOU <span style="color:var(--amber);">SAVE?</span>',
      'pricing.calc.desc': 'See the difference a subscription makes on your marketplace fees.',
      'pricing.calc.label': 'Monthly task spend',
      'pricing.calc.freeFees': 'Free Plan Fees',
      'pricing.calc.proFees': 'Business Pro Fees',
      'pricing.calc.growthFees': 'Business Growth Fees',
      'pricing.calc.note': 'Calculated based on average marketplace fee of 10% for Free, 8% for Pro, 6% for Growth.',
      'pricing.compare.title': 'COMPARE <span class="accent">PLANS.</span>',
      'pricing.compare.desc': 'Everything you need to know, side by side.',
      'pricing.compare.feature': 'Feature',
      'pricing.compare.free': 'Free',
      'pricing.compare.pro': 'Professional Pro',
      'pricing.compare.biz': 'Business Pro',
      'pricing.compare.growth': 'Business Growth',
      'pricing.compare.postTasks': 'Post tasks',
      'pricing.compare.postTasks.free': '3/month',
      'pricing.compare.postTasks.biz': '✓ Unlimited',
      'pricing.compare.postTasks.growth': '✓ Unlimited',
      'pricing.compare.applyTasks': 'Apply to tasks',
      'pricing.compare.applyTasks.free': '✓',
      'pricing.compare.applyTasks.pro': '✓ Priority',
      'pricing.compare.analytics': 'Analytics',
      'pricing.compare.analytics.free': '✗',
      'pricing.compare.analytics.pro': '✓ Profile',
      'pricing.compare.analytics.biz': '✓ Dashboard',
      'pricing.compare.analytics.growth': '✓ Advanced',
      'pricing.compare.team': 'Team members',
      'pricing.compare.team.free': '✗',
      'pricing.compare.team.biz': '5 seats',
      'pricing.compare.team.growth': '✓ Unlimited',
      'pricing.compare.featured': 'Featured placement',
      'pricing.compare.featured.free': '✗',
      'pricing.compare.featured.pro': '✓ Profile',
      'pricing.compare.featured.biz': '✓ Company',
      'pricing.compare.featured.growth': '✓ Company + tasks',
      'pricing.compare.fee': 'Marketplace fee',
      'pricing.compare.fee.free': '10 / 8 / 6%',
      'pricing.compare.fee.biz': '<span style="color:var(--amber);font-weight:600;">8 / 6 / 5%</span>',
      'pricing.compare.fee.growth': '<span style="color:var(--amber);font-weight:600;">6 / 5 / 4%</span>',
      'pricing.compare.support': 'Support',
      'pricing.compare.support.free': 'Standard',
      'pricing.compare.support.pro': 'Standard',
      'pricing.compare.support.biz': '✓ Priority',
      'pricing.compare.support.growth': '✓ Premium',

      // ==================== RESOURCES PAGE ====================
      'resources.hero.breadcrumb': 'Resources',
      'resources.filter.browse': 'Browse:',
      'resources.card.read': 'Read',
      'resources.author.honeTeam': 'The Team',
      'resources.mini1.title': 'Top 5 Skills in Demand Across 6 Countries in 2026',
      'resources.mini1.meta': '5 min — For Workers',
      'resources.mini2.title': 'Getting Hired Through Earned Reputation — Live Q&A Replay',
      'resources.mini2.meta': '48 min — 1.2k views',
      'resources.mini3.title': 'How Businesses Can Find Reliable Talent Faster',
      'resources.mini3.meta': '3 min — For Businesses',
      'resources.card1.title': 'How to Build a Strong Reputation in Your First 30 Days',
      'resources.card1.desc': 'Step-by-step from profile setup to your Verified badge. The most important guide for every new worker.',
      'resources.card2.title': 'Top 5 Skills in Demand Across 6 Countries in 2026',
      'resources.card2.desc': 'Which skills are hiring managers actually paying for right now, from Johannesburg to Beijing.',
      'resources.card3.title': 'Getting Hired Through Earned Reputation — Live Q&A Replay',
      'resources.card3.desc': 'Watch how three of our workers went from zero tasks to full-time employment in under six months.',
      'resources.card4.title': '5 Beginner-Friendly Tasks That Pay Better Than You Think',
      'resources.card4.desc': 'Data entry, AI testing, social captions — these low-barrier tasks have high demand and great reviews.',
      'resources.card5.title': 'How Businesses Can Find Reliable Entry-Level Talent Without the Risk',
      'resources.card5.desc': 'A complete guide to using our Trust Scores, talent pools and escrow system to hire with total confidence.',
      'resources.card6.title': 'Youth Unemployment in China: Why We\'re Different',
      'resources.card6.desc': 'The graduate oversupply crisis explained and how proof of work beats experience requirements.',
      'resources.card7.title': 'How to Use Your Skill Passport to Get a Full-Time Job',
      'resources.card7.desc': 'Your Skill Passport is more powerful than a CV. Here is exactly how to share it with employers.',
      'resources.card8.title': 'AI Tools Every Young Worker Should Know in 2026',
      'resources.card8.desc': 'ChatGPT, Canva AI, Gemini and Perplexity — which tools make you more hireable and how to use them.',
      'resources.trend1.title': '5 Beginner Canva Tasks That Pay Well',
      'resources.trend1.meta': 'Guide — 6 min',
      'resources.trend2.title': 'How to Write a Profile That Gets Hired',
      'resources.trend2.meta': 'Tip — 3 min',
      'resources.trend3.title': 'Understanding Your Trust Score',
      'resources.trend3.meta': 'Article — 4 min',
      'resources.trend4.title': 'China Youth Unemployment: Why We Help',
      'resources.trend4.meta': 'Article — 7 min',
      'resources.trend5.title': 'From Rookie to Elite in 90 Days',
      'resources.trend5.meta': 'Guide — 10 min',
      'resources.webinar.register': 'REGISTER',
      'resources.webinar1.title': 'How to Land Your First Task (Beginner Masterclass)',
      'resources.webinar1.meta': '10:00 AM SAST — Free',
      'resources.webinar2.title': 'Hiring Entry-Level Talent Without the Risk',
      'resources.webinar2.meta': '2:00 PM GMT — For Businesses',
      'resources.webinar3.title': 'AI Tools Every Young Worker Should Know in 2026',
      'resources.webinar3.meta': '11:00 AM CST — Free',
      'resources.topic.careerEntry': 'Career Entry',
      'resources.topic.trustScore': 'Trust Score',
      'resources.topic.aiTools': 'AI Tools',
      'resources.topic.freelancing': 'Freelancing',
      'resources.topic.hiringTips': 'Hiring Tips',
      'resources.topic.skillPassport': 'Skill Passport',
      'resources.topic.dataEntry': 'Data Entry',
      'resources.topic.resume': 'Resume',
      'resources.topic.payments': 'Payments',
      'resources.hero.eyebrow': 'Knowledge Hub',
      'resources.hero.title': 'GUIDES, TIPS<br/>AND TOOLS TO<br/><span class="accent">GROW.</span>',
      'resources.hero.desc': 'Everything you need to land your first task, build your reputation and launch your career — or find and manage great talent.',
      'resources.search.placeholder': 'Search guides, tips, webinars...',
      'resources.search.btn': 'Search',
      'resources.stats.guides': 'Guides and Articles',
      'resources.stats.webinars': 'Webinars and Replays',
      'resources.stats.tips': 'Tips and Quick Reads',
      'resources.stats.languages': 'Languages',
      'resources.filter.all': 'All',
      'resources.filter.guides': 'Guides',
      'resources.filter.articles': 'Articles',
      'resources.filter.tips': 'Tips',
      'resources.filter.webinars': 'Webinars',
      'resources.filter.workers': 'For Workers',
      'resources.filter.businesses': 'For Businesses',
      'resources.featured.tag': 'Featured Guide',
      'resources.featured.title': 'HOW TO BUILD A STRONG REPUTATION IN YOUR FIRST 30 DAYS',
      'resources.featured.desc': 'The first month on our platform sets the tone for your entire career here. This step-by-step guide walks you through profile setup, landing your first task and earning your Verified badge.',
      'resources.featured.badge': 'Guide',
      'resources.featured.time': '8 min read',
      'resources.featured.cta': 'Read Guide',
      'resources.sidebar.newsletter.title': 'Weekly Digest',
      'resources.sidebar.newsletter.desc': 'Get the best guides, tips and career advice delivered every Monday.',
      'resources.sidebar.newsletter.cta': 'Subscribe Free',
      'resources.sidebar.trending.title': 'Trending This Week',
      'resources.sidebar.topics.title': 'Browse by Topic',
      'resources.sidebar.webinars.title': 'Upcoming Webinars',
      'resources.cta.title': 'READY TO<br/><span class="accent">PROVE IT?</span>',
      'resources.cta.desc': 'Put your new knowledge to work. Browse tasks and start building your reputation today.',
      'resources.cta.findWork': 'Find Work',
      'resources.cta.hireTalent': 'Hire Talent',

      // ==================== WAITLIST PAGE ====================
      'waitlist.form.name.error': 'Please enter your name',
      'waitlist.form.email.error': 'Please enter a valid email address',
      'waitlist.form.consent.error': 'Please agree to receive updates',
      'waitlist.form.errorAlert': 'Something went wrong. Please try again.',
      'waitlist.social.tag1': 'FOUNDING',
      'waitlist.social.tag2': 'EARLY',
      'waitlist.social.tag3': 'ACCESS',
      'waitlist.social.join': 'Join {count}+ future members',
      'waitlist.hero.eyebrow': 'Coming soon — early 2026',
      'waitlist.hero.title1': 'JOIN THE',
      'waitlist.hero.title2': 'WAITING',
      'waitlist.hero.title3': 'LIST.',
      'waitlist.hero.desc': '<strong>Be the first to access it.</strong> We\'re building the platform where young people build verified work histories and businesses find trusted talent. Sign up below to get early access when we launch.',
      'waitlist.hero.people': 'People waiting',
      'waitlist.hero.countries': 'Countries',
      'waitlist.hero.launch': 'Launch year',
      'waitlist.left.title': 'BE AMONG THE<br/><span class="accent">FIRST.</span>',
      'waitlist.left.desc': 'Founding members get exclusive benefits. We\'re hand-picking the first community to shape how the platform works.',
      'waitlist.benefit1': 'Founding member badge on your profile',
      'waitlist.benefit2': 'Early access — days before the public launch',
      'waitlist.benefit3': 'Exclusive founder-only community channel',
      'waitlist.benefit4': 'Free platform access for life (founding tier)',
      'waitlist.card.label': 'Get on the list',
      'waitlist.card.title': 'SECURE YOUR SPOT',
      'waitlist.card.desc': 'We\'ll notify you the moment we go live. No spam, no nonsense.',
      'waitlist.form.name': 'Full name',
      'waitlist.form.email': 'Email address',
      'waitlist.form.type': 'Account type',
      'waitlist.form.type.worker': 'Worker — find tasks',
      'waitlist.form.type.business': 'Business — hire talent',
      'waitlist.form.type.both': 'Both — I\'m interested in both',
      'waitlist.form.country': 'Country',
      'waitlist.form.country.za': '🇿🇦 South Africa',
      'waitlist.form.country.cn': '🇨🇳 China',
      'waitlist.form.country.us': '🇺🇸 United States',
      'waitlist.form.country.fr': '🇫🇷 France',
      'waitlist.form.country.es': '🇪🇸 Spain',
      'waitlist.form.country.gb': '🇬🇧 United Kingdom',
      'waitlist.form.country.other': '🌍 Other',
      'waitlist.form.consent': 'I agree to receive occasional updates from the team. I can unsubscribe at any time. <a href="privacy-policy.html">Privacy Policy</a>.',
      'waitlist.form.cta': 'Secure my spot',
      'waitlist.form.note': 'Launching soon — we\'ll email you first',
      'waitlist.success.title': 'YOU\'RE ON THE LIST.',
      'waitlist.success.desc': 'You are successfully added to the waiting list for our launch. When the time is near, we\'ll let you know.',
      'waitlist.success.back': 'Back',
      'waitlist.success.note': 'Check your email for confirmation. Add us to your contacts.',
      'waitlist.social.text': 'Already on the waitlist across 6 countries',

      // ==================== CAREERS PAGE ====================
      'careers.hero.eyebrow': 'Join the Team',
      'careers.hero.title': 'BUILD THE FUTURE OF<br/><span class="accent">AFRICAN WORK.</span>',
      'careers.hero.desc': 'We are a small team with outsized ambition — connecting millions of young people to real economic opportunity across six countries. Come help us build it.',
      'careers.stats.countries': 'Countries active',
      'careers.stats.team': 'Team size',
      'careers.stats.remote': 'Remote-first',
      'careers.stats.ownership': 'Real ownership',
      'careers.values.eyebrow': 'How we work',
      'careers.values.title': 'HOW WE <span class="accent">OPERATE.</span>',
      'careers.values.1.title': 'Africa-first thinking',
      'careers.values.1.desc': 'We build for real conditions — variable connectivity, mobile-first users, and diverse regulatory landscapes across 6 countries.',
      'careers.values.2.title': 'Builders, not bureaucrats',
      'careers.values.2.desc': 'Small team, big scope. Everyone ships. No layers of approval between an idea and the user.',
      'careers.values.3.title': 'Trust as a product',
      'careers.values.3.desc': 'We\'re building trust infrastructure. That means we hold ourselves to unusually high standards on security, privacy, and fairness.',
      'careers.values.4.title': 'Ownership mindset',
      'careers.values.4.desc': 'Early-stage means your decisions genuinely shape the company. We share equity meaningfully, not symbolically.',
      'careers.roles.eyebrow': 'Open Roles',
      'careers.roles.title': 'CURRENT <span class="accent">OPENINGS.</span>',
      'careers.roles.empty.title': 'NO OPEN ROLES RIGHT NOW',
      'careers.roles.empty.desc': 'We are heads-down building. When we are ready to grow the team, we will post here first — and email everyone who signs up below.',
      'careers.roles.notify': 'Notify me',
      'careers.roles.success': 'You are on the list. We will be in touch.',
      'careers.perks.eyebrow': 'What We Offer',
      'careers.perks.title': 'WHAT YOU <span class="accent">GET.</span>',
      'careers.perks.1.title': 'Remote-first, async-friendly',
      'careers.perks.1.desc': 'Work from anywhere in Africa — or beyond where legal. We trust you to manage your time.',
      'careers.perks.2.title': 'Meaningful equity',
      'careers.perks.2.desc': 'Real ownership, vested over 4 years with a 1-year cliff. Not symbolic — structural.',
      'careers.perks.3.title': 'Learning budget',
      'careers.perks.3.desc': 'R12,000 per year for courses, books, or conferences — use it how it helps you most.',
      'careers.perks.4.title': 'Home office budget',
      'careers.perks.4.desc': 'Equipment allowance to build the workspace you need from day one.',
      'careers.perks.5.title': 'Impact that is real',
      'careers.perks.5.desc': 'Every product decision affects real young people and their economic futures — not vanity metrics.',
      'careers.perks.6.title': 'Small team advantage',
      'careers.perks.6.desc': 'Direct access to founders, no middle management, real autonomy from week one.',

      // ==================== TERMS PAGE ====================
      'terms.hero.eyebrow': 'Legal',
      'terms.hero.title': 'TERMS OF<br/><span class="accent">SERVICE.</span>',
      'terms.notice': '<strong>Plain-language summary:</strong> These terms govern your use of YoungMerit. Workers find tasks and get paid through secure escrow. Businesses post tasks and pay workers. We take a 10% commission on each completed task. Read Section 6 (Wallet &amp; Payments) and Section 8 (Disputes) carefully.',
      'terms.toc.title': 'On this page',
      'terms.toc.1': '1. Acceptance',
      'terms.toc.2': '2. The Platform',
      'terms.toc.3': '3. Accounts',
      'terms.toc.4': '4. Workers',
      'terms.toc.5': '5. Businesses',
      'terms.toc.6': '6. Wallet & Payments',
      'terms.toc.7': '7. Commission',
      'terms.toc.8': '8. Disputes',
      'terms.toc.9': '9. Identity Verification',
      'terms.toc.10': '10. Prohibited Conduct',
      'terms.toc.11': '11. Content & IP',
      'terms.toc.12': '12. Liability',
      'terms.toc.13': '13. Termination',
      'terms.toc.14': '14. Governing Law',
      'terms.toc.15': '15. Changes',
      'terms.toc.16': '16. Contact',

      // ==================== COOKIES PAGE ====================
      'cookies.hero.eyebrow': 'Privacy',
      'cookies.hero.title': 'COOKIE<br/><span class="accent">SETTINGS.</span>',
      'cookies.hero.desc': 'Choose which cookies we use. Essential cookies are always on — they keep the site working. Everything else is your call.',
      'cookies.essential.title': 'Essential Cookies',
      'cookies.essential.badge': 'Always on',
      'cookies.essential.desc': 'These cookies are necessary for the Platform to function. They include session management, authentication tokens, CSRF protection, and security headers. They cannot be disabled.',
      'cookies.analytics.title': 'Analytics Cookies',
      'cookies.analytics.badge': 'Optional',
      'cookies.analytics.desc': 'Help us understand how people use our platform — which pages are visited, where users drop off, and how features perform. Data is aggregated and anonymised. We use this to improve the Platform, not to profile you.',
      'cookies.prefs.title': 'Preference Cookies',
      'cookies.prefs.badge': 'Optional',
      'cookies.prefs.desc': 'Remember your choices — like your country, language, task filters, and layout preferences — so you don\'t have to reset them every visit.',
      'cookies.marketing.title': 'Marketing Cookies',
      'cookies.marketing.badge': 'Optional',
      'cookies.marketing.desc': 'Allow us to show you relevant content on other platforms. We do not sell your data to advertisers. If you opt in, you may see our ads on sites like LinkedIn or Google based on your usage patterns.',
      'cookies.save': 'Save preferences',
      'cookies.acceptAll': 'Accept all',
      'cookies.essentialOnly': 'Essential only',
      'cookies.saved': 'Preferences saved — you can change these at any time.',
      'cookies.info.title': 'WHAT ARE COOKIES?',
      'cookies.info.1': 'Cookies are small text files stored on your device when you visit a website. They help sites remember information about your visit — like whether you\'re logged in — so the site works properly.',
      'cookies.info.2': 'We use cookies and similar technologies as described above. For full details on how we handle your personal data, see our <a href="privacy-policy.html">Privacy Policy</a>.',
      'cookies.info.3': 'Under GDPR, POPIA, and similar laws, you have the right to withdraw consent for non-essential cookies at any time. Changes take effect immediately.',
      'cookies.info.4': 'Email <a href="mailto:privacy@growiq.co">privacy@growiq.co</a> with any questions about our use of cookies.',
    }
  };

  // ==================== ABOUT PAGE — VALUES, TIMELINE, GLOBAL, PRESS, CTA ====================
  // These keys existed in ES/FR/ZH/ZU but were missing from the base English dictionary,
  // which made the About page render raw keys (e.g. "about.timeline.eyebrow") whenever
  // English was selected, since English looks itself up first with no further fallback.
  I18N.en['about.values.eyebrow'] = 'What Drives Us';
  I18N.en['about.values.title'] = 'OUR CORE<br/><span class="accent">VALUES.</span>';
  I18N.en['about.values.desc'] = 'These are not words on a wall. They are the principles behind every decision we make, from how we build the platform to how we treat every worker and every business on it.';
  I18N.en['about.values.trust.title'] = 'TRUST';
  I18N.en['about.values.trust.desc'] = 'We build trust through verified proof of work. Every rating, review, and completed task is independently tracked with no inflation and no manipulation possible.';
  I18N.en['about.values.opportunity.title'] = 'OPPORTUNITY';
  I18N.en['about.values.opportunity.desc'] = 'We believe everyone deserves a fair chance to show what they can do, regardless of where they studied, who they know, or what their CV currently says.';
  I18N.en['about.values.quality.title'] = 'QUALITY';
  I18N.en['about.values.quality.desc'] = 'We hold high standards for both workers and businesses. Great work is celebrated and rewarded. Issues are addressed quickly and fairly through our mediation system.';
  I18N.en['about.values.impact.title'] = 'IMPACT';
  I18N.en['about.values.impact.desc'] = "We measure real impact in people's lives and careers. Every full-time hire that originates from here is a direct victory for everything we set out to build.";
  I18N.en['about.team.li.bio'] = "Previously at a major Chinese tech company. Graduated in 2022 and spent months unable to find work despite a degree from a top university. Built our reputation engine.";
  I18N.en['about.team.james.bio'] = "Previously led trust and safety at a major gig economy platform. Designed our escrow system, identity verification flow and dispute resolution framework from scratch.";

  I18N.en['about.timeline.eyebrow'] = 'Our Journey';
  I18N.en['about.timeline.title'] = 'HOW WE GOT <span class="accent">HERE.</span>';
  I18N.en['about.timeline.t1.year'] = 'Mid 2025';
  I18N.en['about.timeline.t1.title'] = 'The Idea Takes Shape';
  I18N.en['about.timeline.t1.desc'] = 'The idea takes shape after months spent researching the same problem from opposite sides of the world. The concept begins to form through shared research and a shared conviction that the model could work.';
  I18N.en['about.timeline.t2.year'] = 'Late 2025';
  I18N.en['about.timeline.t2.title'] = 'Building in Private';
  I18N.en['about.timeline.t2.desc'] = 'The founding team comes together to build. Six months of focused product development begins across two continents in full stealth mode.';
  I18N.en['about.timeline.t3.year'] = 'Early 2026';
  I18N.en['about.timeline.t3.title'] = 'We Go Live';
  I18N.en['about.timeline.t3.desc'] = 'The platform launches simultaneously across South Africa and China with full English and Mandarin support. The reputation system, Skill Passport, and escrow payment infrastructure are all live from day one.';
  I18N.en['about.timeline.t4.year'] = 'Mid 2026';
  I18N.en['about.timeline.t4.title'] = 'Expanding to Four More Countries';
  I18N.en['about.timeline.t4.desc'] = 'The platform opens to the United States, France, Spain, and the United Kingdom. French and Spanish language support goes live, bringing full coverage to four languages across six countries.';
  I18N.en['about.timeline.t5.year'] = 'Right Now';
  I18N.en['about.timeline.t5.title'] = 'Growing Every Single Day';
  I18N.en['about.timeline.t5.desc'] = 'We are actively onboarding our first workers and businesses. Every task posted and completed from this point forward is proof of the model working. The journey to changing how the world hires starts right now.';
  I18N.en['about.timeline.t6.year'] = 'What Comes Next';
  I18N.en['about.timeline.t6.title'] = 'Apprenticeships and Employer Tools';
  I18N.en['about.timeline.t6.desc'] = 'Government apprenticeship partnerships and deeper employer hiring tools are in active development. The best is still ahead.';

  I18N.en['about.global.eyebrow'] = 'Where We Operate';
  I18N.en['about.global.title'] = 'GLOBAL FROM<br/><span class="accent">DAY ONE.</span>';
  I18N.en['about.global.desc'] = 'We did not start local and plan to expand later. We built it for the world from the very beginning because the problem exists everywhere and demands a truly global answer.';
  I18N.en['about.global.langCardTitle'] = 'Platform Languages';
  I18N.en['about.global.live'] = 'Live';
  I18N.en['about.global.foundingMarket'] = 'Founding market, live from early 2026';
  I18N.en['about.global.expandedMid2026'] = 'Expanded mid 2026';
  I18N.en['about.global.yearOneTarget'] = 'Year One Target';
  I18N.en['about.global.za.members'] = '10,000 Members';
  I18N.en['about.global.cn.members'] = '15,000 Members';
  I18N.en['about.global.us.members'] = '8,000 Members';
  I18N.en['about.global.fr.members'] = '4,000 Members';
  I18N.en['about.global.es.members'] = '3,500 Members';
  I18N.en['about.global.gb.members'] = '5,000 Members';

  I18N.en['about.press.title'] = 'IN THE PRESS.';
  I18N.en['about.press.desc'] = 'Early coverage and commentary on the problem we were built to solve.';
  I18N.en['about.press.p1.quote'] = '"The experience paradox is one of the most persistent failures of modern labour markets. Platforms that break this cycle through verifiable proof of work deserve serious attention."';
  I18N.en['about.press.p1.date'] = '2025, Youth Employment Feature';
  I18N.en['about.press.p2.quote'] = '"South Africa\'s youth unemployment crisis demands creative solutions. A platform that replaces credentials with verified work history could be one of the most meaningful interventions attempted to date."';
  I18N.en['about.press.p2.date'] = '2025, Future of Work Series';
  I18N.en['about.press.p3.quote'] = '"China\'s graduate unemployment problem is not a skills gap. It is a proof gap. Young people can do the work. They simply have no way to demonstrate it. That is the precise gap this kind of platform addresses."';
  I18N.en['about.press.p3.date'] = '2025, Graduate Economy Report';

  I18N.en['about.cta.eyebrow'] = 'Join the Movement';
  I18N.en['about.cta.title'] = 'YOUR TURN TO<br/><span class="accent">PROVE IT.</span>';
  I18N.en['about.cta.desc'] = 'We are just getting started. Be one of the first to build your verified reputation and help prove that the model works.';
  I18N.en['about.cta.ctaFind'] = 'Find Work';
  I18N.en['about.cta.ctaHire'] = 'Hire Talent';

  // ==================== SPANISH TRANSLATIONS ====================
  var ES = {};
  // Copy all English keys and translate them
  for (var key in I18N.en) {
    ES[key] = I18N.en[key];
  }
  // Override with Spanish translations
  ES['nav.home'] = 'Inicio';
  ES['nav.findWork'] = 'Buscar Trabajo';
  ES['nav.hireTalent'] = 'Contratar Talento';
  ES['nav.howItWorks'] = 'Cómo Funciona';
  ES['nav.about'] = 'Acerca de';
  ES['nav.community'] = 'Comunidad';
  ES['nav.myProfile'] = 'Mi Perfil';
  ES['nav.logIn'] = 'Iniciar Sesión';
  ES['nav.signUp'] = 'Registrarse';
  ES['nav.signUpFree'] = 'Regístrate Gratis';
  ES['nav.rateUs'] = 'Califícanos';
  ES['nav.navigation'] = 'Navegación';
  ES['nav.myProfileLabel'] = 'Mi Perfil';
  ES['nav.logOut'] = 'Cerrar Sesión';
  ES['nav.profileMenu.profile'] = 'Perfil';
  ES['nav.profileMenu.notifications'] = 'Configuración de Notificaciones';
  ES['nav.profileMenu.language'] = 'Idioma';
  ES['nav.profileMenu.privacy'] = 'Política de Privacidad';
  ES['nav.profileMenu.terms'] = 'Términos';
  ES['lang.switchLabel'] = 'Idioma';
  ES['footer.platform'] = 'Plataforma';
  ES['footer.company'] = 'Empresa';
  ES['footer.trustSafety'] = 'Confianza y Seguridad';
  ES['footer.findWork'] = 'Buscar Trabajo';
  ES['footer.hireTalent'] = 'Contratar Talento';
  ES['footer.howItWorks'] = 'Cómo Funciona';
  ES['footer.resources'] = 'Recursos';
  ES['footer.aboutYOUNGMERIT'] = 'Sobre Nosotros';
  ES['footer.careers'] = 'Empleo';
  ES['footer.community'] = 'Comunidad';
  ES['footer.contact'] = 'Contacto';
  ES['footer.identityVerification'] = 'Verificación de Identidad';
  ES['footer.disputeSystem'] = 'Sistema de Disputas';
  ES['footer.privacyPolicy'] = 'Política de Privacidad';
  ES['footer.termsOfService'] = 'Términos de Servicio';
  ES['footer.cookieSettings'] = 'Configuración de Cookies';
  ES['footer.tagline'] = 'Nuestra misión es crear un mundo donde las oportunidades se ganan, no se regalan.';
  ES['footer.copyright'] = 'Copyright 2026 YOUNGMERIT. Todos los derechos reservados.';
  ES['footer.builtFor'] = 'Hecho para jóvenes. Con la confianza de las empresas.';
  ES['idx.hero.eyebrow'] = 'Ya disponible en acceso anticipado';
  ES['idx.hero.title1'] = 'EXPERIENCIA';
  ES['idx.hero.title2'] = 'ANTES';
  ES['idx.hero.title3'] = 'DEL EMPLEO.';
  ES['idx.hero.explainer'] = 'Somos la plataforma donde los jóvenes completan <strong>tareas reales y remuneradas</strong> para empresas reales, construyendo un <strong>historial laboral verificado</strong> que abre puertas — sin título, sin contactos, sin años de experiencia.';
  ES['idx.hero.ctaFind'] = 'Empezar a Buscar Trabajo';
  ES['idx.hero.ctaHire'] = 'Contratar Talento';
  ES['idx.hero.note'] = 'Gratis para unirse. Sin tarjeta de crédito. Cancela cuando quieras.';
  ES['idx.strip.countries.title'] = '6 Países';
  ES['idx.strip.countries.desc'] = 'Sudáfrica, China, Estados Unidos, Francia, España y Reino Unido';
  ES['idx.strip.verified.title'] = 'Verificado con pruebas';
  ES['idx.strip.verified.desc'] = 'Puntuaciones de confianza basadas en trabajo real completado';
  ES['idx.strip.escrow.title'] = 'Protegido en depósito';
  ES['idx.strip.escrow.desc'] = 'Cada pago se retiene de forma segura hasta que se aprueba el trabajo';
  ES['idx.strip.career.title'] = 'Enfocado en la carrera';
  ES['idx.strip.career.desc'] = 'Diseñado para llevar a los trabajadores de tareas a empleo de tiempo completo';
  ES['idx.trust.label'] = 'Diseñado para ser usado por';
  ES['idx.for.eyebrow'] = 'Para Quién Somos';
  ES['idx.for.title'] = 'DOS PROBLEMAS.<br/>UNA PLATAFORMA.';
  ES['idx.for.desc'] = 'Los jóvenes no pueden conseguir empleo sin experiencia. Las empresas no encuentran talento de nivel inicial que sea confiable y asequible. Resolvemos ambos a la vez.';
  ES['idx.for.workers.label'] = 'Para Jóvenes';
  ES['idx.for.workers.title'] = 'CONSTRUYE EXPERIENCIA<br/>REAL.';
  ES['idx.for.workers.desc'] = 'Sin currículum. Sin título. Sin contactos necesarios. Completa tareas reales, gana dinero real y construye una reputación verificada que realmente te consigue trabajo.';
  ES['idx.for.workers.perk1'] = 'Completa tareas reales y gana dinero desde el primer día';
  ES['idx.for.workers.perk2'] = 'Construye una puntuación de confianza que los empleadores realmente respetan';
  ES['idx.for.workers.perk3'] = 'Obtén tu Pasaporte de Habilidades — prueba de trabajo portátil, para siempre';
  ES['idx.for.workers.perk4'] = 'Sube de nivel, de Novato a Élite, a medida que completas más trabajo';
  ES['idx.for.workers.cta'] = 'Buscar Trabajo';
  ES['idx.for.biz.label'] = 'Para Empresas';
  ES['idx.for.biz.title'] = 'CONTRATA CON<br/>CONFIANZA.';
  ES['idx.for.biz.desc'] = 'Deja de contratar a ciegas. Cada trabajador en nuestra plataforma tiene un historial verificado de trabajo real completado, calificaciones reales y contrataciones repetidas reales — no solo un CV.';
  ES['idx.for.biz.perk1'] = 'Publica tareas gratis — paga solo cuando el trabajo esté completo';
  ES['idx.for.biz.perk2'] = 'Accede a talento preseleccionado con historiales verificados reales';
  ES['idx.for.biz.perk3'] = 'Cada pago protegido en depósito hasta que apruebes la entrega';
  ES['idx.for.biz.perk4'] = 'Crea un grupo de talento privado y vuelve a contratar a tus mejores trabajadores al instante';
  ES['idx.for.biz.cta'] = 'Contratar Talento';
  ES['idx.prob.title'] = 'EL MUNDO CONVIRTIÓ<br/>LA EXPERIENCIA<br/><span class="acc">EN UNA PUERTA CERRADA.</span>';
  ES['idx.prob.desc'] = 'En seis grandes economías, millones de jóvenes están listos para trabajar — pero todo empleo de nivel inicial exige experiencia imposible de obtener sin antes tener un trabajo. Rompemos ese ciclo.';
  ES['loc.all'] = 'Todas las Ubicaciones';
  ES['loc.za'] = 'Sudáfrica';
  ES['loc.es'] = 'España';
  ES['loc.fr'] = 'Francia';
  ES['loc.gb'] = 'Reino Unido';
  ES['loc.cn'] = 'China';
  ES['loc.us'] = 'Estados Unidos';

  // Continue adding all remaining Spanish translations for profile, contact, dispute, pricing, resources, waitlist, careers, terms, cookies
  // Due to length, I'll show the key ones and note that all should follow the same pattern

  // ---- idx.* additions ----
  ES['idx.country.za.name'] = 'Sudáfrica';
  ES['idx.country.za.lbl'] = 'Desempleo juvenil';
  ES['idx.country.cn.name'] = 'China';
  ES['idx.country.cn.lbl'] = 'Desempleo de graduados';
  ES['idx.country.us.name'] = 'Estados Unidos';
  ES['idx.country.us.lbl'] = 'Saturación de titulados';
  ES['idx.country.fr.name'] = 'Francia';
  ES['idx.country.fr.lbl'] = 'Barreras de credenciales';
  ES['idx.country.es.name'] = 'España';
  ES['idx.country.es.lbl'] = 'Desempleo juvenil';
  ES['idx.country.gb.name'] = 'Reino Unido';
  ES['idx.country.gb.lbl'] = 'Inflación de experiencia';
  ES['idx.countries.tagline'] = 'Haz clic para ver más información sobre cada país';
  ES['idx.probBox.title'] = 'LA <span class="acc">BRECHA DE PRUEBAS</span><br/>ES REAL.';
  ES['idx.probBox.desc'] = 'A los jóvenes no les falta capacidad. Les falta una forma de demostrarla. Ese es el único problema que existimos para resolver — a través de trabajo real, calificaciones reales e historial verificado real.';
  ES['idx.probBox.item1.title'] = 'Sin experiencia, sin entrada';
  ES['idx.probBox.item1.desc'] = 'Las empresas exigen de dos a cinco años para funciones que se aprenden en dos semanas.';
  ES['idx.probBox.item2.title'] = 'Las empresas no encuentran talento junior confiable';
  ES['idx.probBox.item2.desc'] = 'Contratar personal de nivel inicial sin un historial comprobado es una apuesta que la mayoría no puede permitirse.';
  ES['idx.probBox.item3.title'] = 'Creamos el historial';
  ES['idx.probBox.item3.desc'] = 'Tareas reales. Calificaciones reales. Pruebas reales — antes de que llegue la entrevista de trabajo.';
  ES['idx.how.eyebrow'] = 'El Proceso';
  ES['idx.how.title'] = 'SIMPLE.<br/><span class="acc">CUATRO PASOS.</span>';
  ES['idx.how.desc'] = 'Ya sea que busques trabajo o busques contratar, el proceso está diseñado para ser simple, seguro y rápido desde el primer día.';
  ES['idx.how.tabPeople'] = 'Para Personas';
  ES['idx.how.tabBiz'] = 'Para Empresas';
  ES['idx.how.seeFull'] = 'Ver el desglose completo';
  ES['idx.how.p1.title'] = 'Crea tu Perfil';
  ES['idx.how.p1.desc'] = 'Regístrate gratis, agrega tus habilidades y verifica tu identidad. Toma menos de cinco minutos.';
  ES['idx.how.p2.title'] = 'Postúlate a Tareas';
  ES['idx.how.p2.desc'] = 'Explora tareas reales y remuneradas publicadas por empresas verificadas y postúlate con un clic.';
  ES['idx.how.p3.title'] = 'Completa y Cobra';
  ES['idx.how.p3.desc'] = 'Entrega trabajo de calidad, obtén la aprobación y recibe el pago al instante desde el depósito en garantía.';
  ES['idx.how.p4.title'] = 'Construye tu Reputación';
  ES['idx.how.p4.desc'] = 'Cada tarea genera una reseña y aumenta tu puntuación de confianza. Sube de nivel y desbloquea mejores trabajos.';
  ES['idx.how.b1.title'] = 'Publica una Tarea';
  ES['idx.how.b1.desc'] = 'Describe lo que necesitas, define tu presupuesto y publícalo en minutos. Publicar es gratis.';
  ES['idx.how.b2.title'] = 'Revisa Candidatos';
  ES['idx.how.b2.desc'] = 'Explora talento con puntuaciones de confianza verificadas, tasas de finalización y portafolios de trabajo reales.';
  ES['idx.how.b3.title'] = 'Supervisa y Aprueba';
  ES['idx.how.b3.desc'] = 'Comunícate, revisa los entregables y libera el pago solo cuando estés totalmente satisfecho.';
  ES['idx.how.b4.title'] = 'Construye tu Cartera de Talento';
  ES['idx.how.b4.desc'] = 'Guarda a los mejores trabajadores, recontrátalos al instante y ofrece puestos de tiempo completo a tus mejores talentos.';
  ES['idx.rep.eyebrow'] = 'Nuestra Ventaja';
  ES['idx.rep.title'] = 'TU REPUTACIÓN<br/>ES TU<br/><span class="acc">MONEDA.</span>';
  ES['idx.rep.desc'] = 'Cada tarea que completas construye algo permanente. Una puntuación de confianza que crece, un pasaporte de habilidades que te acompaña y un historial laboral que habla más fuerte que cualquier CV.';
  ES['idx.rep.feat1'] = 'Skill Passport — historial laboral verificado y portátil en el que confían los empleadores';
  ES['idx.rep.feat2'] = 'Puntuación de confianza pública que crece con cada tarea completada';
  ES['idx.rep.feat3'] = 'Progresión de nivel: Novato, Verificado, Confiable y Élite';
  ES['idx.rep.feat4'] = 'Seguimiento de recontrataciones — la señal más fuerte de calidad';
  ES['idx.rep.cta'] = 'Cómo Funciona la Reputación';
  ES['idx.rep.card.role'] = 'Asistente Virtual, Johannesburgo';
  ES['idx.rep.card.badge'] = 'CONFIABLE';
  ES['idx.rep.card.scoreSub'] = 'Excelente — 128 reseñas verificadas';
  ES['idx.rep.card.tasksDone'] = 'Tareas Completadas';
  ES['idx.rep.card.repeatHires'] = 'Recontrataciones';
  ES['idx.rep.card.ndaSafe'] = 'Seguro con NDA';
  ES['idx.early.eyebrow'] = 'Por qué unirse ahora';
  ES['idx.early.title'] = 'APENAS<br/><span class="acc">ESTAMOS COMENZANDO.</span>';
  ES['idx.early.desc'] = 'Lanzamos en 2026. Aquí no hay cifras de miembros infladas. Lo que tenemos es algo más valioso que los números — la oportunidad de ser el primero.';
  ES['idx.early.card1.title'] = 'Sé un Miembro Fundador';
  ES['idx.early.card1.desc'] = 'Los primeros trabajadores y empresas en nuestra plataforma dan forma a su crecimiento. Tu perfil estará entre las primeras reputaciones verificadas de la red.';
  ES['idx.early.card2.title'] = 'Construye Antes que la Multitud';
  ES['idx.early.card2.desc'] = 'Cada tarea que completas ahora es prueba de trabajo que existe antes de que el mercado se sature. Los pioneros construyen las reputaciones más fuertes cuando llega la demanda de contratación.';
  ES['idx.early.card3.title'] = 'Ayúdanos a Construirlo Bien';
  ES['idx.early.card3.desc'] = 'Estamos lanzando en seis países porque el problema está en todas partes. Tu opinión en estas primeras semanas moldea directamente el producto, las categorías y las funciones que construiremos después.';
  ES['idx.early.strip.title'] = '¿LISTO PARA SER<br/>DE LOS PRIMEROS?';
  ES['idx.early.strip.desc'] = 'Únete ahora. Completa tu primera tarea, gana tu primera reseña y sé dueño de una reputación fundadora en la plataforma antes de que llegue el mercado.';
  ES['idx.early.strip.ctaSignup'] = 'Regístrate Gratis';
  ES['idx.early.strip.ctaPost'] = 'Publicar una Tarea';

  // ---- fw/ht additions ----
  ES['fw.pageTitle1'] = 'BUSCAR';
  ES['fw.pageTitle2'] = 'TRABAJO.';
  ES['fw.pageSub'] = 'Explora tareas de empresas verificadas. Sé el primero en construir tu reputación cuando lancemos — regístrate ahora para recibir notificaciones.';
  ES['fw.search'] = 'Buscar';
  ES['fw.searchPlaceholder'] = 'Buscar tareas, habilidades, palabras clave...';
  ES['fw.filter.allCategories'] = 'Todas las Categorías';
  ES['fw.filter.design'] = 'Diseño y Creatividad';
  ES['fw.filter.social'] = 'Redes Sociales';
  ES['fw.filter.admin'] = 'Soporte Administrativo';
  ES['fw.filter.data'] = 'Entrada de Datos';
  ES['fw.filter.research'] = 'Investigación';
  ES['fw.filter.support'] = 'Atención al Cliente';
  ES['fw.filter.ai'] = 'Asistencia con IA';
  ES['fw.filter.translation'] = 'Traducción';
  ES['fw.filter.anyLevel'] = 'Cualquier Nivel';
  ES['fw.filter.beginner'] = 'Principiante';
  ES['fw.filter.intermediate'] = 'Intermedio';
  ES['fw.filter.advanced'] = 'Avanzado';
  ES['fw.sort.newest'] = 'Más Recientes';
  ES['fw.sort.payHigh'] = 'Mayor Pago';
  ES['fw.sort.payLow'] = 'Menor Pago';
  ES['fw.sort.beginnerFriendly'] = 'Apto para Principiantes';
  ES['fw.pill.allTasks'] = 'Todas las Tareas';
  ES['fw.pill.design'] = 'Diseño';
  ES['fw.pill.social'] = 'Redes Sociales';
  ES['fw.pill.admin'] = 'Administración';
  ES['fw.pill.data'] = 'Entrada de Datos';
  ES['fw.pill.research'] = 'Investigación';
  ES['fw.pill.ai'] = 'Asistencia con IA';
  ES['fw.pill.translation'] = 'Traducción';
  ES['fw.pill.support'] = 'Soporte';
  ES['fw.pill.writing'] = 'Redacción y Contenido';
  ES['fw.pill.video'] = 'Video y Audio';
  ES['fw.pill.tech'] = 'Web y Tecnología';
  ES['fw.pill.sales'] = 'Ventas y Prospección';
  ES['fw.pill.photography'] = 'Fotografía';
  ES['fw.sidebar.budgetRange'] = 'Rango de Presupuesto';
  ES['fw.sidebar.anyBudget'] = 'Cualquier presupuesto';
  ES['fw.sidebar.upTo'] = 'Hasta';
  ES['fw.sidebar.deadline'] = 'Fecha Límite';
  ES['fw.sidebar.due1day'] = 'Vence en 1 día';
  ES['fw.sidebar.due3days'] = 'Vence en 3 días';
  ES['fw.sidebar.due1week'] = 'Vence en 1 semana';
  ES['fw.sidebar.flexible'] = 'Flexible';
  ES['fw.sidebar.experienceLevel'] = 'Nivel de Experiencia';
  ES['fw.sidebar.workType'] = 'Tipo de Trabajo';
  ES['fw.sidebar.oneOff'] = 'Tarea Única';
  ES['fw.sidebar.apprenticeship'] = 'Aprendizaje';
  ES['fw.sidebar.ongoing'] = 'Proyecto Continuo';
  ES['fw.sidebar.clearAll'] = 'Borrar Todos los Filtros';
  ES['fw.passport.title'] = 'PASAPORTE DE HABILIDADES';
  ES['fw.passport.desc'] = 'Cada tarea que completas se verifica y se añade a tu historial laboral portátil. Los empleadores confían en él más que en un CV.';
  ES['fw.passport.cta'] = 'Construye tu Pasaporte';
  ES['fw.banner.title'] = 'Lanzamos pronto.';
  ES['fw.banner.desc'] = 'Tareas reales de empresas verificadas están en camino. Regístrate ahora para que te avisemos en cuanto estén disponibles y tengas acceso anticipado.';
  ES['fw.banner.cta'] = 'Obtener acceso anticipado';
  ES['fw.results.showing'] = 'Mostrando';
  ES['fw.results.task'] = 'tarea';
  ES['fw.results.tasks'] = 'tareas';
  ES['fw.sortBy'] = 'Ordenar por:';
  ES['fw.card.title'] = 'Diseñar 5 Plantillas de Publicaciones para Instagram';
  ES['fw.card.by'] = 'por';
  ES['fw.card.company'] = 'Creative Co.';
  ES['fw.card.verified'] = 'Verificado';
  ES['fw.card.tagDesign'] = 'Diseño';
  ES['fw.card.tagCanva'] = 'Canva';
  ES['fw.card.tagSocial'] = 'Redes Sociales';
  ES['fw.card.tagBeginner'] = 'Principiante';
  ES['fw.card.tagOneOff'] = 'Tarea Única';
  ES['fw.card.due3days'] = 'Vence en 3 días';
  ES['fw.card.applicants'] = '0 postulantes — sé el primero';
  ES['fw.card.escrow'] = 'Protegido en depósito';
  ES['fw.card.fixedPrice'] = 'precio fijo';
  ES['fw.card.safePay'] = 'PAGO SEGURO';
  ES['fw.card.applyNow'] = 'Postular Ahora';
  ES['fw.empty.title'] = 'NINGUNA TAREA COINCIDE';
  ES['fw.empty.desc'] = 'Ninguna tarea coincide con tus filtros actuales.';
  ES['fw.empty.clear'] = 'Borrar todos los filtros';
  ES['fw.empty.rest'] = 'para ver la tarea de ejemplo, o regístrate para que te avisemos cuando haya tareas reales disponibles.';
  ES['ht.pageTitle1'] = 'CONTRATAR';
  ES['ht.pageTitle2'] = 'TALENTO.';
  ES['ht.pageSub'] = 'Explora jóvenes trabajadores con identidad verificada, listos para asumir tareas. Sé de las primeras empresas en contratar con nosotros cuando lancemos.';
  ES['ht.searchPlaceholder'] = 'Buscar por habilidad, nombre o palabra clave...';
  ES['ht.filter.allSkills'] = 'Todas las Habilidades';
  ES['ht.filter.adminVA'] = 'Administración y Asistencia Virtual';
  ES['ht.filter.rookie'] = 'Novato';
  ES['ht.filter.verified'] = 'Verificado';
  ES['ht.filter.trusted'] = 'Confiable';
  ES['ht.filter.elite'] = 'Élite';
  ES['ht.pill.allTalent'] = 'Todo el Talento';
  ES['ht.pill.designers'] = 'Diseñadores';
  ES['ht.pill.socialMedia'] = 'Redes Sociales';
  ES['ht.pill.admin'] = 'Administración';
  ES['ht.pill.dataEntry'] = 'Entrada de Datos';
  ES['ht.pill.research'] = 'Investigación';
  ES['ht.pill.aiAssistants'] = 'Asistentes de IA';
  ES['ht.pill.translators'] = 'Traductores';
  ES['ht.pill.support'] = 'Soporte';
  ES['ht.pill.writing'] = 'Redacción y Contenido';
  ES['ht.pill.video'] = 'Video y Audio';
  ES['ht.pill.tech'] = 'Web y Tecnología';
  ES['ht.pill.sales'] = 'Ventas y Prospección';
  ES['ht.pill.photography'] = 'Fotografía';
  ES['ht.post.title'] = 'PUBLICA UNA TAREA';
  ES['ht.post.desc'] = 'Cuéntanos qué necesitas y deja que talento verificado se postule. Publicar es gratis, los fondos se retienen en depósito hasta que apruebes.';
  ES['ht.post.cta'] = 'Publicar Tarea Gratis';
  ES['ht.sidebar.minTrustScore'] = 'Puntuación Mínima de Confianza';
  ES['ht.sidebar.anyScore'] = 'Cualquier puntuación';
  ES['ht.sidebar.minPrefix'] = 'Mín.';
  ES['ht.sidebar.starsSuffix'] = 'estrellas';
  ES['ht.sidebar.talentLevel'] = 'Nivel de Talento';
  ES['ht.sidebar.availability'] = 'Disponibilidad';
  ES['ht.sidebar.availableNow'] = 'Disponible Ahora';
  ES['ht.sidebar.thisWeek'] = 'Esta Semana';
  ES['ht.sidebar.flexible'] = 'Flexible';
  ES['ht.trust.title'] = '¿Por Qué Nosotros?';
  ES['ht.trust.item1'] = 'Protección de pago en depósito en cada contratación';
  ES['ht.trust.item2'] = 'Perfiles de talento con identidad verificada';
  ES['ht.trust.item3'] = 'Pasaportes de Habilidades verificados en cada perfil';
  ES['ht.trust.item4'] = 'Resolución de disputas incluida';
  ES['ht.banner.title'] = 'Lanzamos pronto.';
  ES['ht.banner.desc'] = 'Jóvenes trabajadores verificados se están registrando ahora. Crea una cuenta empresarial para publicar tareas y ser el primero en contratar cuando lancemos.';
  ES['ht.banner.cta'] = 'Publicar tarea gratis';
  ES['ht.sortLabel'] = 'Ordenar:';
  ES['ht.sort.rated'] = 'Mejor Calificados';
  ES['ht.sort.tasks'] = 'Más Tareas Completadas';
  ES['ht.sort.newest'] = 'Miembros Más Recientes';
  ES['ht.results.profile'] = 'perfil';
  ES['ht.results.profiles'] = 'perfiles';
  ES['ht.card.idVerified'] = 'Identidad Verificada';
  ES['ht.card.level'] = 'Confiable';
  ES['ht.card.role'] = 'Gestora de Redes Sociales';
  ES['ht.card.location'] = 'Johannesburgo, Sudáfrica';
  ES['ht.card.tagSocial'] = 'Redes Sociales';
  ES['ht.card.tagCopywriting'] = 'Redacción Publicitaria';
  ES['ht.card.tagContent'] = 'Creación de Contenido';
  ES['ht.card.tasksDone'] = '12 tareas completadas';
  ES['ht.card.passportVerified'] = 'Pasaporte de Habilidades verificado';
  ES['ht.card.availableNow'] = 'Disponible ahora';
  ES['ht.card.demoProfile'] = 'Perfil de demostración';
  ES['ht.card.hireNow'] = 'Contratar Ahora';
  ES['ht.card.save'] = 'Guardar';
  ES['ht.empty.title'] = 'NINGÚN PERFIL COINCIDE';
  ES['ht.empty.desc'] = 'Ningún trabajador coincide con tus filtros actuales.';
  ES['ht.empty.createAccount'] = 'crea una cuenta empresarial';
  ES['ht.empty.rest1'] = 'para ver el perfil de ejemplo, o';
  ES['ht.empty.rest2'] = 'para que te avisemos cuando se registren trabajadores.';

  // ---- blog.* additions ----
  ES['blog.hero.title'] = 'Publicaciones de la <span class="accent">Comunidad.</span>';
  ES['blog.hero.desc'] = 'Publicaciones de texto y voz de trabajadores y empresas — experiencias reales, directamente desde la plataforma.';
  ES['blog.guestBanner'] = 'Ahora mismo estás publicando como invitado — <a href="auth.html" style="color:var(--dark);font-weight:600;">regístrate</a> para publicar con tu nombre real y construir una reputación con tus publicaciones.';
  ES['blog.search.placeholder'] = 'Buscar publicaciones…';
  ES['blog.filter.all'] = 'Todas las publicaciones';
  ES['blog.filter.worker'] = 'Historias de trabajadores';
  ES['blog.filter.business'] = 'Para empresas';
  ES['blog.filter.tips'] = 'Consejos y guías';
  ES['blog.filter.update'] = 'Novedades de la plataforma';
  ES['blog.dock.label'] = 'Comparte algo real…';
  ES['blog.dock.write'] = 'Escribir';
  ES['blog.dock.record'] = 'Grabar';
  ES['blog.composer.text'] = 'Publicación de Texto';
  ES['blog.composer.voice'] = 'Publicación de Voz';
  ES['blog.composer.titlePlaceholder'] = 'Título (opcional)';
  ES['blog.composer.contentPlaceholder'] = 'Comparte un consejo, una historia o algo que aprendiste en el mercado laboral…';
  ES['blog.composer.tag.worker'] = 'Historia de trabajador';
  ES['blog.composer.tag.business'] = 'Para empresas';
  ES['blog.composer.tag.tips'] = 'Consejos y guías';
  ES['blog.composer.tag.update'] = 'Novedad de la plataforma';
  ES['blog.composer.preview'] = 'Vista previa — esto es exactamente lo que verá la comunidad';
  ES['blog.composer.publish'] = 'Publicar';
  ES['blog.composer.voice.tapToRecord'] = 'Toca para grabar';
  ES['blog.composer.voice.limit'] = 'Hasta 30 segundos por ahora';
  ES['blog.composer.voice.rerecord'] = 'Volver a grabar';
  ES['blog.composer.voice.publish'] = 'Publicar';
  ES['blog.post.helpful'] = 'Útil';
  ES['blog.post.insightful'] = 'Perspicaz';
  ES['blog.post.agree'] = 'De acuerdo';
  ES['blog.post.save'] = 'Guardar';
  ES['blog.post.delete'] = 'Eliminar';
  ES['blog.post.readMore'] = 'Leer más';
  ES['blog.empty.title'] = 'El espacio es tuyo.';
  ES['blog.empty.desc'] = 'Nadie ha publicado todavía — sé la primera voz en nuestra comunidad. Escribe una publicación de texto o graba una de voz abajo.';

  // ---- profile.* (tagged subset) ----
  ES['profile.gate.title'] = 'TU PERFIL VIVE AQUÍ.';
  ES['profile.gate.desc'] = 'Regístrate para construir tu Pasaporte de Habilidades y empezar a buscar trabajo — o crea una cuenta empresarial para publicar tareas y contratar talento.';
  ES['profile.gate.ctaSignup'] = 'Crear una cuenta';
  ES['profile.gate.ctaLogin'] = 'Iniciar sesión';
  ES['profile.privateNotice'] = '<strong>Tu perfil es visible para otros miembros con sesión iniciada.</strong> Cualquier persona con sesión iniciada en YoungMerit puede ver tu nombre, foto, biografía, portafolio e historial laboral. Tus datos de contacto e información bancaria nunca se muestran a nadie más que a ti.';
  ES['profile.public.loading'] = 'Cargando perfil…';
  ES['profile.public.loginRequired'] = 'Inicia sesión para ver los perfiles de los trabajadores.';
  ES['profile.public.backToSearch'] = '← Volver a Contratar Talento';
  ES['profile.public.inviteCta'] = 'Invitar a una Tarea';
  ES['profile.public.noPortfolio'] = 'Aún no hay proyectos en el portafolio.';
  ES['profile.public.noBio'] = 'Este trabajador aún no ha añadido una biografía.';
  ES['profile.public.notFound.title'] = 'PERFIL NO ENCONTRADO';
  ES['profile.public.notFound.desc'] = 'Este perfil de trabajador no existe o ya no está disponible.';
  ES['profile.worker.cover.edit'] = 'Editar portada';
  ES['profile.worker.badge.verified'] = 'Empresa Verificada';

  // ---- about.* (values/team/timeline/global/press/cta) ----
  ES['about.values.eyebrow'] = 'Qué Nos Impulsa';
  ES['about.values.title'] = 'NUESTROS<br/><span class="accent">VALORES.</span>';
  ES['about.values.desc'] = 'Estas no son palabras en una pared. Son los principios detrás de cada decisión que tomamos, desde cómo construimos la plataforma hasta cómo tratamos a cada trabajador y a cada empresa en ella.';
  ES['about.values.trust.title'] = 'CONFIANZA';
  ES['about.values.trust.desc'] = 'Construimos confianza a través de pruebas verificadas de trabajo. Cada calificación, reseña y tarea completada se rastrea de forma independiente, sin inflación ni manipulación posible.';
  ES['about.values.opportunity.title'] = 'OPORTUNIDAD';
  ES['about.values.opportunity.desc'] = 'Creemos que todos merecen una oportunidad justa de demostrar lo que pueden hacer, sin importar dónde estudiaron, a quién conocen o qué dice su CV actualmente.';
  ES['about.values.quality.title'] = 'CALIDAD';
  ES['about.values.quality.desc'] = 'Mantenemos altos estándares tanto para trabajadores como para empresas. El buen trabajo se celebra y se recompensa. Los problemas se abordan de forma rápida y justa a través de nuestro sistema de mediación.';
  ES['about.values.impact.title'] = 'IMPACTO';
  ES['about.values.impact.desc'] = 'Medimos el impacto real en la vida y carrera de las personas. Cada contratación de tiempo completo que se origina aquí es una victoria directa para todo lo que nos propusimos construir.';
  ES['about.team.eyebrow'] = 'Las Personas Detrás';
  ES['about.team.title'] = 'CONOCE AL <span class="accent">EQUIPO.</span>';
  ES['about.team.desc'] = 'Un equipo distribuido globalmente que cree en lo que construimos porque la mayoría de nosotros hemos vivido el problema personalmente.';
  ES['about.team.naledi.role'] = 'Cofundadora y CEO';
  ES['about.team.naledi.bio'] = 'Ex investigadora de empleo juvenil. Pasó seis años estudiando la crisis de empleo de nivel inicial en toda África antes de decidir construir la solución ella misma.';
  ES['about.team.li.role'] = 'Cofundador y CTO';
  ES['about.team.li.bio'] = 'Anteriormente en una gran empresa tecnológica china. Se graduó en 2022 y pasó meses sin poder encontrar trabajo a pesar de un título universitario de primer nivel. Construyó nuestro motor de reputación.';
  ES['about.team.camille.role'] = 'Directora de Crecimiento';
  ES['about.team.camille.bio'] = 'Lideró el crecimiento en dos mercados digitales europeos. Apasionada por usar la tecnología para desbloquear la movilidad económica de los jóvenes en Francia y más allá.';
  ES['about.team.james.role'] = 'Director de Confianza y Seguridad';
  ES['about.team.james.bio'] = 'Anteriormente dirigió confianza y seguridad en una importante plataforma de economía gig. Diseñó desde cero nuestro sistema de depósito en garantía, el flujo de verificación de identidad y el marco de resolución de disputas.';
  ES['about.team.joinTitle'] = 'ÚNETE AL EQUIPO';
  ES['about.team.joinDesc'] = 'Estamos contratando en ingeniería, diseño, crecimiento y operaciones, totalmente remoto en los seis países. Si este problema te importa personalmente, queremos saber de ti.';
  ES['about.team.joinCta'] = 'Ver Puestos Disponibles';
  ES['about.timeline.eyebrow'] = 'Nuestro Camino';
  ES['about.timeline.title'] = 'CÓMO LLEGAMOS <span class="accent">AQUÍ.</span>';
  ES['about.timeline.t1.year'] = 'Mediados de 2025';
  ES['about.timeline.t1.title'] = 'La Idea Toma Forma';
  ES['about.timeline.t1.desc'] = 'La idea toma forma después de meses investigando el mismo problema desde extremos opuestos del mundo. El concepto comienza a formarse a través de investigación compartida y la convicción compartida de que el modelo podría funcionar.';
  ES['about.timeline.t2.year'] = 'Finales de 2025';
  ES['about.timeline.t2.title'] = 'Construyendo en Privado';
  ES['about.timeline.t2.desc'] = 'El equipo fundador se reúne. Camille se une para liderar el crecimiento y James se une para liderar confianza y seguridad. Comienzan seis meses de desarrollo de producto enfocado en dos continentes, en total sigilo.';
  ES['about.timeline.t3.year'] = 'Principios de 2026';
  ES['about.timeline.t3.title'] = 'Salimos en Vivo';
  ES['about.timeline.t3.desc'] = 'La plataforma se lanza simultáneamente en Sudáfrica y China con soporte completo en inglés y mandarín. El sistema de reputación, el Pasaporte de Habilidades y la infraestructura de pago en depósito están activos desde el primer día.';
  ES['about.timeline.t4.year'] = 'Mediados de 2026';
  ES['about.timeline.t4.title'] = 'Expansión a Cuatro Países Más';
  ES['about.timeline.t4.desc'] = 'La plataforma se abre a Estados Unidos, Francia, España y el Reino Unido. El soporte en francés y español se activa, brindando cobertura completa en cuatro idiomas en seis países.';
  ES['about.timeline.t5.year'] = 'Ahora Mismo';
  ES['about.timeline.t5.title'] = 'Creciendo Cada Día';
  ES['about.timeline.t5.desc'] = 'Estamos incorporando activamente a nuestros primeros trabajadores y empresas. Cada tarea publicada y completada a partir de ahora es prueba de que el modelo funciona. El viaje para cambiar cómo el mundo contrata empieza justo ahora.';
  ES['about.timeline.t6.year'] = 'Lo que Sigue';
  ES['about.timeline.t6.title'] = 'Aprendizajes y Herramientas para Empresas';
  ES['about.timeline.t6.desc'] = 'Alianzas con programas gubernamentales de aprendizaje y herramientas de contratación más profundas para empresas están en desarrollo activo. Lo mejor está por venir.';
  ES['about.global.eyebrow'] = 'Dónde Operamos';
  ES['about.global.title'] = 'GLOBALES DESDE<br/><span class="accent">EL PRIMER DÍA.</span>';
  ES['about.global.desc'] = 'No empezamos a nivel local con planes de expandirnos después. Lo creamos para el mundo desde el principio, porque el problema existe en todas partes y exige una respuesta verdaderamente global.';
  ES['about.global.langCardTitle'] = 'Idiomas de la Plataforma';
  ES['about.global.live'] = 'Activo';
  ES['about.global.foundingMarket'] = 'Mercado fundador, activo desde principios de 2026';
  ES['about.global.expandedMid2026'] = 'Expandido a mediados de 2026';
  ES['about.global.yearOneTarget'] = 'Objetivo del Primer Año';
  ES['about.global.za.members'] = '10,000 Miembros';
  ES['about.global.cn.members'] = '15,000 Miembros';
  ES['about.global.us.members'] = '8,000 Miembros';
  ES['about.global.fr.members'] = '4,000 Miembros';
  ES['about.global.es.members'] = '3,500 Miembros';
  ES['about.global.gb.members'] = '5,000 Miembros';
  ES['about.press.title'] = 'EN LA PRENSA.';
  ES['about.press.desc'] = 'Cobertura y comentarios tempranos sobre el problema que existimos para resolver.';
  ES['about.press.p1.quote'] = '"La paradoja de la experiencia es uno de los fallos más persistentes de los mercados laborales modernos. Las plataformas que rompen este ciclo mediante pruebas verificables de trabajo merecen atención seria."';
  ES['about.press.p1.date'] = '2025, Reportaje sobre Empleo Juvenil';
  ES['about.press.p2.quote'] = '"La crisis de desempleo juvenil de Sudáfrica exige soluciones creativas. Una plataforma que reemplaza las credenciales con historial laboral verificado podría ser una de las intervenciones más significativas intentadas hasta la fecha."';
  ES['about.press.p2.date'] = '2025, Serie Futuro del Trabajo';
  ES['about.press.p3.quote'] = '"El problema del desempleo de graduados en China no es una brecha de habilidades. Es una brecha de pruebas. Los jóvenes pueden hacer el trabajo. Simplemente no tienen forma de demostrarlo. Esa es la brecha exacta que este tipo de plataforma aborda."';
  ES['about.press.p3.date'] = '2025, Informe de Economía de Graduados';
  ES['about.cta.eyebrow'] = 'Únete al Movimiento';
  ES['about.cta.title'] = 'ES TU TURNO DE<br/><span class="accent">DEMOSTRARLO.</span>';
  ES['about.cta.desc'] = 'Apenas estamos comenzando. Sé de los primeros en construir tu reputación verificada y ayuda a demostrar que el modelo funciona.';
  ES['about.cta.ctaFind'] = 'Buscar Trabajo';
  ES['about.cta.ctaHire'] = 'Contratar Talento';

  // ---- about.* (hero/promise/pillars/problem) ----
  ES['about.hero.breadcrumb'] = 'Acerca de';
  ES['about.hero.eyebrow'] = 'Nuestra Misión';
  ES['about.hero.title'] = 'TENEMOS UNA<br/>MISIÓN PARA<br/><span class="accent">ABRIR PUERTAS.</span>';
  ES['about.hero.desc'] = 'Creamos YoungMerit porque millones de jóvenes en todo el mundo están listos para trabajar pero no logran pasar la primera puerta. Estamos cambiando eso, una tarea verificada a la vez.';
  ES['about.hero.ctaFind'] = 'Buscar Trabajo';
  ES['about.hero.ctaHow'] = 'Cómo Funciona';
  ES['about.promise.title'] = 'La Promesa de YOUNGMERIT';
  ES['about.promise.quote'] = '"Un mundo donde la oportunidad se <span class="accent">GANA,</span> no se hereda."';
  ES['about.pillar1.title'] = 'Prueba Verificada de Trabajo';
  ES['about.pillar1.desc'] = 'Cada tarea completada se rastrea de forma independiente';
  ES['about.pillar2.title'] = 'Construido para Seis Países desde el Primer Día';
  ES['about.pillar2.desc'] = 'Sudáfrica, China, EE. UU., Francia, España y el Reino Unido';
  ES['about.pillar3.title'] = 'Entrada a la Carrera, No Solo Trabajo Temporal';
  ES['about.pillar3.desc'] = 'Estamos construyendo caminos reales hacia el empleo de tiempo completo';
  ES['about.problem.eyebrow'] = 'Por Qué Existimos';
  ES['about.problem.title'] = 'EL PROBLEMA<br/>QUE <span class="accent">RESOLVEMOS.</span>';
  ES['about.problem.desc'] = 'El desempleo juvenil es una crisis global, pero la causa raíz es la misma en todas partes: sin experiencia no hay entrada, y sin entrada no hay experiencia. Rompemos ese ciclo.';
  ES['about.problem.za'] = 'Sudáfrica';
  ES['about.problem.za.rate'] = 'Aprox. 60% de Desempleo Juvenil';
  ES['about.problem.za.desc'] = 'El desempleo estructural extremo, la falta de oportunidades formales y un profundo desajuste entre habilidades y empleos dejan a millones de jóvenes sudafricanos completamente excluidos de la economía.';
  ES['about.problem.cn'] = 'China';
  ES['about.problem.cn.rate'] = 'Aprox. 20% de Desempleo de Graduados';
  ES['about.problem.cn.desc'] = 'Millones de graduados compiten por roles cada vez más escasos. Las empresas exigen habitualmente de dos a cinco años de experiencia para puestos de nivel inicial, creando una barrera imposible para los nuevos graduados.';
  ES['about.problem.us'] = 'Estados Unidos';
  ES['about.problem.us.rate'] = 'Crisis de Saturación de Titulados';
  ES['about.problem.us.desc'] = 'La inflación de títulos y los puestos de nivel inicial que exigen experiencia previa han colapsado el camino tradicional de la educación al empleo para millones de jóvenes estadounidenses.';
  ES['about.problem.fr'] = 'Francia';
  ES['about.problem.fr.rate'] = 'Contratación Rígida Basada en Credenciales';
  ES['about.problem.fr.desc'] = 'La cultura de contratación formal de Francia dificulta especialmente que los jóvenes sin calificaciones de élite o contactos personales entren en el mundo profesional.';
  ES['about.problem.es'] = 'España';
  ES['about.problem.es.rate'] = 'Aprox. 28% de Desempleo Juvenil';
  ES['about.problem.es.desc'] = 'Una de las tasas de desempleo juvenil más altas de Europa, impulsada por el estancamiento económico, la dependencia de contratos temporales y mercados laborales de nivel inicial persistentemente débiles.';
  ES['about.problem.gb'] = 'Reino Unido';
  ES['about.problem.gb.rate'] = 'Inflación Generalizada de Experiencia';
  ES['about.problem.gb.desc'] = 'Incluso los puestos junior ahora exigen amplia experiencia previa. Los jóvenes graduados quedan atrapados en un ciclo donde cada solicitud es rechazada por falta de la experiencia que solo un empleo puede proporcionar.';

  // ---- profile.* (t() calls) ----
  ES['profile.about.add'] = 'Haz clic para agregar una biografía.';
  ES['profile.about.edit'] = 'Editar';
  ES['profile.actions.verify'] = 'Completar verificación';
  ES['profile.actions.updateContact'] = 'Actualizar datos de contacto y pago';
  ES['profile.plan.title'] = 'Tu plan';
  ES['profile.plan.active'] = 'ACTIVO';
  ES['profile.plan.upgrade'] = 'Mejorar plan';
  ES['profile.plan.manage'] = 'Gestionar plan';
  ES['profile.plan.free'] = 'Gratis';
  ES['profile.plan.pro'] = 'Profesional Pro';
  ES['profile.plan.business'] = 'Empresa Pro';
  ES['profile.plan.growth'] = 'Crecimiento Empresarial';
  ES['profile.plan.featuredProfile'] = 'La posición destacada está activa: tu perfil aparece resaltado en las búsquedas de Contratar Talento.';
  ES['profile.plan.featuredCompany'] = 'La posición destacada está activa: el perfil de tu empresa destaca ante los trabajadores.';
  ES['profile.plan.featuredCompanyTasks'] = 'La posición destacada está activa: tu empresa y tus tareas aparecen resaltadas en las búsquedas.';
  ES['profile.plan.upsellWorker'] = 'Mejora a Profesional Pro para obtener posición destacada y destacar ante las empresas.';
  ES['profile.plan.upsellBiz'] = 'Mejora a Empresa Pro o Crecimiento Empresarial para destacar tu empresa y tus tareas ante los trabajadores.';
  ES['profile.worker.tabs.analytics'] = 'Analíticas';
  ES['profile.worker.analytics.title'] = 'Analíticas del perfil';
  ES['profile.worker.analytics.subtitle'] = 'Cómo está funcionando tu perfil con las empresas.';
  ES['profile.worker.analytics.views'] = 'Visitas al perfil';
  ES['profile.worker.analytics.viewsWeek'] = 'Visitas esta semana';
  ES['profile.worker.analytics.saved'] = 'Guardado por empresas';
  ES['profile.worker.analytics.acceptRate'] = 'Tasa de aceptación';
  ES['profile.worker.analytics.footnote'] = 'Basado en {accepted} aceptadas de {sent} postulaciones enviadas.';
  ES['profile.worker.analytics.locked'] = 'Mejora a Profesional Pro para ver quién visita tu perfil, con qué frecuencia las empresas lo guardan y cómo están funcionando tus postulaciones.';
  ES['profile.biz.about.title'] = 'Sobre la empresa';
  ES['profile.biz.actions.edit'] = 'Editar perfil';
  ES['profile.biz.actions.post'] = 'Publicar una tarea';
  ES['profile.biz.applicants.lock'] = 'Los perfiles completos se desbloquean cuando preseleccionas a un postulante';
  ES['profile.biz.history.count'] = 'tareas';
  ES['profile.biz.history.title'] = 'Tareas completadas';
  ES['profile.biz.meta.hired'] = 'trabajadores contratados';
  ES['profile.biz.meta.member'] = 'Miembro desde';
  ES['profile.biz.meta.posted'] = 'tareas publicadas';
  ES['profile.biz.postings.new'] = 'Nueva tarea';
  ES['profile.biz.postings.title'] = 'Publicaciones de tareas activas';
  ES['profile.biz.skills.title'] = 'Etiquetas de industria';
  ES['profile.biz.stats.hired'] = 'Trabajadores contratados';
  ES['profile.biz.stats.paid'] = 'Total pagado';
  ES['profile.biz.stats.posted'] = 'Tareas publicadas';
  ES['profile.biz.stats.rating'] = 'Calificación promedio otorgada';
  ES['profile.biz.tabs.about'] = 'Acerca de';
  ES['profile.biz.tabs.bench'] = 'Equipo de Confianza';
  ES['profile.biz.bench.title'] = 'Equipo de Confianza';
  ES['profile.biz.bench.subtitle'] = 'Trabajadores que has contratado más de una vez: tu equipo de referencia.';
  ES['profile.biz.bench.empty'] = 'Contrata al mismo trabajador dos veces y aparecerá aquí automáticamente, con una forma de un solo clic para volver a contratarlo en tu próxima tarea.';
  ES['profile.biz.bench.browseCta'] = 'Explorar talento';
  ES['profile.biz.bench.hireCount'] = 'Contratado {n} veces';
  ES['profile.biz.bench.lastHired'] = 'última contratación {date}';
  ES['profile.biz.bench.notePlaceholder'] = 'Nota privada (solo tú puedes verla)';
  ES['profile.biz.bench.viewProfile'] = 'Ver perfil';
  ES['profile.biz.bench.rehire'] = 'Contratar de nuevo';
  ES['profile.biz.tabs.analytics'] = 'Estadísticas';
  ES['profile.biz.analytics.title'] = 'Panel de estadísticas';
  ES['profile.biz.analytics.subtitle'] = 'El rendimiento de tus publicaciones de tareas.';
  ES['profile.biz.analytics.locked'] = 'Actualiza a un plan Business para desbloquear tu panel de estadísticas: total de postulantes, tasa de contratación, tasa de finalización de tareas y más.';
  ES['profile.biz.analytics.applicants'] = 'Total de postulantes';
  ES['profile.biz.analytics.hireRate'] = 'Tasa de contratación';
  ES['profile.biz.analytics.completed'] = 'Tareas completadas';
  ES['profile.biz.analytics.completionRate'] = 'Tasa de finalización';
  ES['profile.biz.analytics.advanced'] = 'Estadísticas avanzadas';
  ES['profile.biz.analytics.saved'] = 'Veces guardado por trabajadores';
  ES['profile.biz.analytics.growthUpsell'] = 'Actualiza a Growth para desbloquear estadísticas avanzadas como el conteo de guardados.';
  ES['profile.biz.tabs.applicants'] = 'Postulantes';
  ES['profile.biz.tabs.history'] = 'Tareas Pasadas';
  ES['profile.biz.tabs.postings'] = 'Tareas Activas';
  ES['profile.biz.tabs.saved'] = 'Publicaciones Guardadas';
  ES['profile.cv.remove'] = 'Eliminar';
  ES['profile.cv.upload'] = 'Subir';
  ES['profile.passport.completion'] = 'Finalización';
  ES['profile.passport.earned'] = 'Ganado';
  ES['profile.passport.next'] = 'Completa tu primera tarea para empezar';
  ES['profile.passport.nextMilestone'] = '{n} más para {level}';
  ES['profile.passport.maxLevel'] = 'Nivel máximo alcanzado — no hay nada más que desbloquear';
  ES['profile.passport.rating'] = 'Calificación promedio';
  ES['profile.savedPosts.cta'] = 'Ir a la Comunidad';
  ES['profile.savedPosts.empty'] = 'Aún no hay publicaciones guardadas.<br/>Guarda publicaciones en el feed de la Comunidad para encontrarlas aquí.';
  ES['profile.savedPosts.title'] = 'Publicaciones guardadas';
  ES['profile.skills.add'] = 'Agregar habilidad';
  ES['profile.verification.done'] = 'Verificado';
  ES['profile.verification.none'] = 'No agregado';
  ES['profile.verification.pending'] = 'Pendiente';
  ES['profile.worker.about.title'] = 'Sobre mí';
  ES['profile.worker.actions.browse'] = 'Explorar tareas';
  ES['profile.worker.actions.edit'] = 'Editar perfil';
  ES['profile.worker.cv.title'] = 'CV / Currículum';
  ES['profile.worker.meta.member'] = 'Miembro desde';
  ES['profile.worker.meta.tasks'] = 'tareas completadas';
  ES['profile.worker.passport.barLabel'] = 'tareas completadas';
  ES['profile.worker.passport.title'] = 'PASAPORTE DE HABILIDADES';
  ES['profile.worker.portfolio.viewLink'] = 'Ver enlace';
  ES['profile.worker.skills.title'] = 'Habilidades';
  ES['profile.worker.tabs.about'] = 'Acerca de';
  ES['profile.worker.tabs.growth'] = 'Tu Progreso';
  ES['profile.worker.growth.title'] = 'Tu Progreso';
  ES['profile.worker.growth.subtitle'] = 'Una línea de tiempo con tus logros reales en YoungMerit.';
  ES['profile.worker.growth.joined.title'] = 'Te uniste a YoungMerit';
  ES['profile.worker.growth.joined.desc'] = 'Donde comenzó tu camino.';
  ES['profile.worker.growth.verified.title'] = 'Identidad verificada';
  ES['profile.worker.growth.verified.desc.done'] = 'Tu identidad fue confirmada.';
  ES['profile.worker.growth.verified.desc.pending'] = 'Tu verificación está en revisión.';
  ES['profile.worker.growth.verified.desc.locked'] = 'Verifica tu identidad para desbloquear este logro.';
  ES['profile.worker.growth.verified.cta'] = 'Verificar ahora';
  ES['profile.worker.growth.firstTask.title'] = 'Primera tarea completada';
  ES['profile.worker.growth.firstTask.desc.done'] = 'Entregaste tu primera tarea.';
  ES['profile.worker.growth.firstTask.desc.locked'] = 'Completa tu primera tarea para desbloquear este logro.';
  ES['profile.worker.growth.firstTask.cta'] = 'Explorar tareas';
  ES['profile.worker.growth.portfolio.title'] = 'Portafolio publicado';
  ES['profile.worker.growth.portfolio.desc.done'] = 'Agregaste tu primer elemento al portafolio.';
  ES['profile.worker.growth.portfolio.desc.locked'] = 'Agrega un elemento a tu portafolio para desbloquear este logro.';
  ES['profile.worker.growth.portfolio.cta'] = 'Agregar al portafolio';
  ES['profile.worker.growth.levelVerified.title'] = 'Alcanzaste el nivel Verificado';
  ES['profile.worker.growth.levelVerified.desc.done'] = 'Desbloqueaste la insignia Verificado.';
  ES['profile.worker.growth.levelTrusted.title'] = 'Alcanzaste el nivel Confiable';
  ES['profile.worker.growth.levelTrusted.desc.done'] = 'Desbloqueaste la insignia Confiable.';
  ES['profile.worker.growth.levelElite.title'] = 'Alcanzaste el nivel Élite';
  ES['profile.worker.growth.levelElite.desc.done'] = 'Alcanzaste el nivel más alto en YoungMerit.';
  ES['profile.worker.growth.level.progress'] = '{current}/{target} tareas completadas';
  ES['profile.worker.tabs.portfolio'] = 'Portafolio';
  ES['profile.worker.tabs.saved'] = 'Publicaciones Guardadas';
  ES['profile.worker.tabs.tasks'] = 'Historial de Tareas';
  ES['profile.worker.tasks.count'] = 'tareas';
  ES['profile.worker.tasks.title'] = 'Tareas completadas';
  ES['profile.biz.about.empty'] = 'Haz clic para agregar una descripción de la empresa.';
  ES['profile.biz.applicants.empty'] = 'Los postulantes aparecerán aquí una vez que tengas una publicación de tarea activa.';
  ES['profile.biz.applicants.shortlist'] = 'Preseleccionar';
  ES['profile.biz.history.empty'] = 'Aún no hay tareas completadas.';
  ES['profile.biz.postings.actions.close'] = 'Cerrar';
  ES['profile.biz.postings.actions.edit'] = 'Editar';
  ES['profile.biz.postings.actions.viewApplicants'] = 'Ver postulantes';
  ES['profile.biz.postings.browse'] = 'Publica tu primera tarea';
  ES['profile.biz.postings.empty'] = 'No hay publicaciones activas.';
  ES['profile.biz.postings.status.closed'] = 'Cerrada';
  ES['profile.biz.postings.status.live'] = 'Activa';
  ES['profile.biz.postings.status.review'] = 'En revisión';
  ES['profile.biz.sidebar.details.industry'] = 'Industria';
  ES['profile.biz.sidebar.details.location'] = 'Ubicación';
  ES['profile.biz.sidebar.details.size'] = 'Tamaño de la empresa';
  ES['profile.biz.sidebar.details.title'] = 'Detalles de la empresa';
  ES['profile.biz.sidebar.details.website'] = 'Sitio web';
  ES['profile.biz.sidebar.post.cta'] = 'Publicar una nueva tarea';
  ES['profile.biz.sidebar.post.desc'] = 'Encuentra a la persona adecuada para tu próximo proyecto. Los fondos se mantienen en depósito hasta que apruebes.';
  ES['profile.biz.sidebar.post.title'] = 'PUBLICAR UNA TAREA';
  ES['profile.biz.sidebar.verification.company'] = 'Registro de empresa';
  ES['profile.biz.sidebar.verification.email'] = 'Correo electrónico';
  ES['profile.biz.sidebar.verification.identity'] = 'Identidad';
  ES['profile.biz.sidebar.verification.payment'] = 'Método de pago';
  ES['profile.biz.sidebar.verification.title'] = 'Estado de verificación';
  ES['profile.biz.sidebar.wallet.available'] = 'Disponible para gastar';
  ES['profile.biz.sidebar.wallet.balance'] = 'Saldo de la billetera';
  ES['profile.biz.sidebar.wallet.escrow'] = 'en depósito';
  ES['profile.biz.sidebar.wallet.history'] = 'Historial';
  ES['profile.biz.sidebar.wallet.topup'] = 'Recargar';
  ES['profile.biz.skills.add'] = 'Agregar etiqueta';
  ES['profile.worker.about.empty'] = 'Haz clic para agregar una biografía.';
  ES['profile.worker.applications.browse'] = 'Explorar tareas';
  ES['profile.worker.applications.empty'] = 'No hay postulaciones activas.';
  ES['profile.worker.applications.status.review'] = 'En revisión';
  ES['profile.worker.applications.status.shortlisted'] = 'Preseleccionado';
  ES['profile.worker.cv.note'] = 'PDF, DOC o DOCX · Máx. 5MB · Opcional pero aumenta la tasa de contratación';
  ES['profile.worker.cv.zone'] = 'Sube tu CV o currículum';
  ES['profile.worker.portfolio.add'] = 'Agrega enlaces o imágenes para mostrar tu trabajo a los empleadores.';
  ES['profile.worker.portfolio.cta'] = 'Agregar elemento de portafolio';
  ES['profile.worker.portfolio.empty'] = 'Aún no hay elementos en el portafolio.';
  ES['profile.worker.sidebar.applications'] = 'Postulaciones activas';
  ES['profile.worker.sidebar.details.age'] = 'Edad';
  ES['profile.worker.sidebar.details.education'] = 'Educación';
  ES['profile.worker.sidebar.details.languages'] = 'Idiomas';
  ES['profile.worker.sidebar.details.location'] = 'Ubicación';
  ES['profile.worker.sidebar.details.title'] = 'Detalles del perfil';
  ES['profile.worker.sidebar.verification.bank'] = 'Cuenta bancaria';
  ES['profile.worker.sidebar.verification.email'] = 'Correo electrónico';
  ES['profile.worker.sidebar.verification.identity'] = 'Identidad';
  ES['profile.worker.sidebar.verification.phone'] = 'Teléfono';
  ES['profile.worker.sidebar.verification.title'] = 'Estado de verificación';
  ES['profile.worker.sidebar.wallet.available'] = 'Disponible para retirar';
  ES['profile.worker.sidebar.wallet.balance'] = 'Saldo de la billetera';
  ES['profile.worker.sidebar.wallet.history'] = 'Historial';
  ES['profile.worker.sidebar.wallet.withdraw'] = 'Retirar';
  ES['profile.worker.skills.add'] = 'Agregar habilidad';
  ES['profile.worker.tasks.browse'] = 'Explorar tareas disponibles';
  ES['profile.worker.tasks.empty'] = 'Aún no hay tareas completadas.';

  // ---- careers.* ----
  ES['careers.hero.breadcrumb'] = 'Empleos';
  ES['careers.hero.eyebrow'] = 'Únete al Equipo';
  ES['careers.hero.title'] = 'CONSTRUYE EL FUTURO DEL<br/><span class="accent">TRABAJO AFRICANO.</span>';
  ES['careers.hero.desc'] = 'Somos un equipo pequeño con una ambición enorme: conectar a millones de jóvenes con oportunidades económicas reales en seis países. Ven a ayudarnos a construirlo.';
  ES['careers.stats.countries'] = 'Países activos';
  ES['careers.stats.team'] = 'Tamaño del equipo';
  ES['careers.stats.remote'] = 'Totalmente remoto';
  ES['careers.stats.earlyVal'] = 'Temprano';
  ES['careers.stats.ownership'] = 'Participación real';
  ES['careers.values.eyebrow'] = 'Cómo trabajamos';
  ES['careers.values.title'] = 'CÓMO <span class="accent">OPERAMOS.</span>';
  ES['careers.values.1.title'] = 'Mentalidad África primero';
  ES['careers.values.1.desc'] = 'Construimos para condiciones reales: conectividad variable, usuarios centrados en móviles y panoramas regulatorios diversos en 6 países.';
  ES['careers.values.2.title'] = 'Constructores, no burócratas';
  ES['careers.values.2.desc'] = 'Equipo pequeño, gran alcance. Todos entregan resultados. Sin capas de aprobación entre una idea y el usuario.';
  ES['careers.values.3.title'] = 'La confianza como producto';
  ES['careers.values.3.desc'] = 'Estamos construyendo infraestructura de confianza. Eso significa que nos exigimos estándares inusualmente altos en seguridad, privacidad y equidad.';
  ES['careers.values.4.title'] = 'Mentalidad de propiedad';
  ES['careers.values.4.desc'] = 'En etapa temprana, tus decisiones moldean genuinamente la empresa. Compartimos la participación de forma significativa, no simbólica.';
  ES['careers.roles.eyebrow'] = 'Puestos Abiertos';
  ES['careers.roles.title'] = 'VACANTES <span class="accent">ACTUALES.</span>';
  ES['careers.roles.empty.title'] = 'NO HAY VACANTES POR AHORA';
  ES['careers.roles.empty.desc'] = 'Estamos completamente enfocados en construir. Cuando estemos listos para hacer crecer al equipo, lo publicaremos aquí primero y enviaremos un correo a todos los que se registren a continuación.';
  ES['careers.roles.notify'] = 'Notificarme';
  ES['careers.roles.success'] = 'Estás en la lista. Nos pondremos en contacto.';
  ES['careers.perks.eyebrow'] = 'Lo Que Ofrecemos';
  ES['careers.perks.title'] = 'LO QUE <span class="accent">OBTIENES.</span>';
  ES['careers.perks.1.title'] = 'Remoto desde el principio, amigable con lo asíncrono';
  ES['careers.perks.1.desc'] = 'Trabaja desde cualquier lugar de África, o más allá donde sea legal. Confiamos en que gestiones tu tiempo.';
  ES['careers.perks.2.title'] = 'Participación significativa';
  ES['careers.perks.2.desc'] = 'Participación real, con adquisición en 4 años y un período de carencia de 1 año. No simbólica, estructural.';
  ES['careers.perks.3.title'] = 'Presupuesto de aprendizaje';
  ES['careers.perks.3.desc'] = 'R12,000 al año para cursos, libros o conferencias, úsalo como más te ayude.';
  ES['careers.perks.4.title'] = 'Presupuesto para oficina en casa';
  ES['careers.perks.4.desc'] = 'Subsidio de equipo para construir el espacio de trabajo que necesitas desde el primer día.';
  ES['careers.perks.5.title'] = 'Un impacto real';
  ES['careers.perks.5.desc'] = 'Cada decisión de producto afecta a jóvenes reales y su futuro económico, no a métricas de vanidad.';
  ES['careers.perks.6.title'] = 'Ventaja de equipo pequeño';
  ES['careers.perks.6.desc'] = 'Acceso directo a los fundadores, sin gerencia intermedia, autonomía real desde la primera semana.';

  // ---- contact.* ----
  ES['contact.hero.breadcrumb'] = 'Contáctanos';
  ES['contact.form.topic.routedPrefix'] = 'Esto se enviará a';
  ES['contact.sidebar.press.response'] = 'Respuesta dentro de 2 días hábiles';
  ES['contact.success.refLabel'] = 'Tu número de referencia es:';
  ES['contact.hero.eyebrow'] = 'Normalmente respondemos dentro de 1 día hábil';
  ES['contact.hero.title'] = 'HABLEMOS.';
  ES['contact.hero.desc'] = 'Ya sea que tengas una pregunta, un problema o una historia que compartir, <strong>cuéntanos qué está pasando</strong> y lo dirigiremos a la persona indicada. Sin bots, sin menús interminables.';
  ES['contact.success.title'] = 'MENSAJE ENVIADO.';
  ES['contact.success.desc'] = 'Hemos enviado una confirmación a tu correo. Nuestro equipo generalmente responde dentro de 1 día hábil, antes para asuntos urgentes de disputas o seguridad.';
  ES['contact.success.btn'] = 'Volver al Inicio';
  ES['contact.form.title'] = 'ENVÍANOS UN MENSAJE';
  ES['contact.form.desc'] = 'Completa el siguiente formulario. Los campos marcados con <span class="required-mark">*</span> son obligatorios.';
  ES['contact.form.rateLimit'] = 'Demasiados envíos. Espera un momento antes de intentarlo de nuevo.';
  ES['contact.form.topic.label'] = '¿De qué se trata? <span class="required-mark">*</span>';
  ES['contact.form.topic.general'] = 'Soporte General';
  ES['contact.form.topic.general.desc'] = 'Cuenta, plataforma, ayuda técnica';
  ES['contact.form.topic.business'] = 'Consulta Empresarial';
  ES['contact.form.topic.business.desc'] = 'Contratación, alianzas, empresa';
  ES['contact.form.topic.dispute'] = 'Ayuda con Disputas';
  ES['contact.form.topic.dispute.desc'] = 'Problema de tarea, pago o depósito';
  ES['contact.form.topic.press'] = 'Prensa y Medios';
  ES['contact.form.topic.press.desc'] = 'Entrevistas, kit de prensa, citas';
  ES['contact.form.topic.privacy'] = 'Privacidad y Datos';
  ES['contact.form.topic.privacy.desc'] = 'Solicitudes de datos, preguntas de privacidad';
  ES['contact.form.topic.other'] = 'Otro Asunto';
  ES['contact.form.topic.other.desc'] = 'Cualquier cosa no mencionada arriba';
  ES['contact.form.topic.routed'] = 'Esto se enviará a <strong>support@youngmerit.com</strong>';
  ES['contact.form.name'] = 'Nombre Completo <span class="required-mark">*</span>';
  ES['contact.form.name.error'] = 'Por favor, ingresa tu nombre completo.';
  ES['contact.form.email'] = 'Correo Electrónico <span class="required-mark">*</span>';
  ES['contact.form.email.error'] = 'Por favor, ingresa una dirección de correo válida.';
  ES['contact.form.role'] = 'Soy';
  ES['contact.form.role.placeholder'] = 'Selecciona uno (opcional)';
  ES['contact.form.role.worker'] = 'Trabajador';
  ES['contact.form.role.business'] = 'Empresa';
  ES['contact.form.role.guest'] = 'Aún no soy miembro';
  ES['contact.form.role.journalist'] = 'Periodista o medio';
  ES['contact.form.role.other'] = 'Otro';
  ES['contact.form.reference'] = 'Referencia de Tarea o Caso';
  ES['contact.form.reference.hint'] = 'Solo es necesario si tu mensaje se relaciona con una tarea o disputa específica.';
  ES['contact.form.subject'] = 'Asunto <span class="required-mark">*</span>';
  ES['contact.form.subject.error'] = 'Por favor, ingresa un asunto.';
  ES['contact.form.message'] = 'Tu Mensaje <span class="required-mark">*</span>';
  ES['contact.form.message.error'] = 'Por favor, ingresa un mensaje (mínimo 20 caracteres).';
  ES['contact.form.attachment'] = 'Archivo Adjunto (Opcional)';
  ES['contact.form.attachment.hint'] = 'Haz clic para adjuntar una captura de pantalla o archivo — máx. 10MB';
  ES['contact.form.human'] = 'No soy un robot';
  ES['contact.form.consent'] = 'Acepto la <a href="privacy-policy.html">Política de Privacidad</a> de YOUNGMERIT y consiento ser contactado sobre esta consulta por correo electrónico.';
  ES['contact.form.cta'] = 'Enviar Mensaje';
  ES['contact.sidebar.general.title'] = 'Soporte General';
  ES['contact.sidebar.general.desc'] = 'Problemas de cuenta, preguntas sobre la plataforma, cualquier asunto cotidiano.';
  ES['contact.sidebar.general.response'] = 'Respuesta dentro de 1 día hábil';
  ES['contact.sidebar.business.title'] = 'Negocios y Alianzas';
  ES['contact.sidebar.business.desc'] = 'Contratación empresarial, integraciones, propuestas de alianza.';
  ES['contact.sidebar.business.response'] = 'Respuesta dentro de 2 días hábiles';
  ES['contact.sidebar.dispute.title'] = 'Disputas';
  ES['contact.sidebar.dispute.desc'] = 'Casos de disputas activas y problemas relacionados con el depósito en garantía.';
  ES['contact.sidebar.dispute.note'] = 'O usa el <a href="dispute-system.html" style="color:var(--amber);">Sistema de Disputas</a>';
  ES['contact.sidebar.press.title'] = 'Prensa y Medios';
  ES['contact.sidebar.press.desc'] = 'Solicitudes de entrevistas, kit de prensa, consultas de medios.';
  ES['contact.sidebar.privacy.title'] = 'Privacidad y Protección de Datos';
  ES['contact.sidebar.privacy.desc'] = 'Acceso a datos, solicitudes de eliminación y preguntas de privacidad.';
  ES['contact.sidebar.privacy.response'] = 'Respuesta dentro de 5 días hábiles';
  ES['contact.sidebar.response.title'] = 'Tiempos de Respuesta Habituales';
  ES['contact.sidebar.response.general'] = 'Soporte General';
  ES['contact.sidebar.response.general.time'] = '1 día hábil';
  ES['contact.sidebar.response.dispute'] = 'Casos de Disputas';
  ES['contact.sidebar.response.dispute.time'] = '1 día hábil';
  ES['contact.sidebar.response.business'] = 'Consultas Empresariales';
  ES['contact.sidebar.response.business.time'] = '2 días hábiles';
  ES['contact.sidebar.response.press'] = 'Prensa y Medios';
  ES['contact.sidebar.response.press.time'] = '2 días hábiles';
  ES['contact.sidebar.response.privacy'] = 'Solicitudes de Privacidad';
  ES['contact.sidebar.response.privacy.time'] = '5 días hábiles';
  ES['contact.sidebar.office'] = 'Soporte disponible de lunes a viernes, de 08:00 a 18:00 SAST';
  ES['contact.sidebar.languages'] = 'Respondemos en inglés, mandarín, francés y español';
  ES['contact.faq.title'] = 'ANTES DE ESCRIBIRNOS';
  ES['contact.faq.desc'] = 'Algunas respuestas rápidas que podrían ahorrarte la espera.';
  ES['contact.faq.q1'] = 'Tengo una disputa activa. ¿Dónde verifico su estado?';
  ES['contact.faq.a1'] = 'Usa la página del <a href="dispute-system.html" style="color:var(--amber);">Sistema de Disputas</a> y haz clic en "Rastrear tu Caso" con tu número de referencia. Esto te da una actualización de estado en vivo más rápida que esperar una respuesta por correo.';
  ES['contact.faq.q2'] = 'Necesito verificar mi identidad. ¿Es este el lugar correcto?';
  ES['contact.faq.a2'] = 'No — dirígete a la página de <a href="identity-verification.html" style="color:var(--amber);">Verificación de Identidad</a> para iniciar ese proceso directamente. Si la verificación falla o tienes un problema con un documento, contacta a support@youngmerit.com.';
  ES['contact.faq.q3'] = '¿Qué tan rápido recibiré realmente una respuesta?';
  ES['contact.faq.a3'] = 'La mayoría de los mensajes se responden dentro de 1 día hábil. Los asuntos de disputas y seguridad tienen prioridad. Las consultas de prensa y negocios pueden tardar hasta 2 días hábiles debido a menor personal en esos equipos.';
  ES['contact.faq.q4'] = '¿Puedo llamarlos en lugar de enviar un correo?';
  ES['contact.faq.a4'] = 'Actualmente somos un equipo de soporte centrado en correo electrónico para mantener un registro escrito de cada caso, lo cual ayuda especialmente con disputas y problemas de pago. El soporte telefónico está en nuestra hoja de ruta a medida que la plataforma crece.';

  // ---- resources.* ----
  ES['resources.hero.breadcrumb'] = 'Recursos';
  ES['resources.filter.browse'] = 'Explorar:';
  ES['resources.card.read'] = 'Leer';
  ES['resources.author.honeTeam'] = 'El Equipo';
  ES['resources.mini1.title'] = 'Las 5 Habilidades Más Demandadas en 6 Países en 2026';
  ES['resources.mini1.meta'] = '5 min — Para trabajadores';
  ES['resources.mini2.title'] = 'Ser Contratado a Través de la Reputación Ganada — Repetición de Q&A en Vivo';
  ES['resources.mini2.meta'] = '48 min — 1.2k vistas';
  ES['resources.mini3.title'] = 'Cómo las Empresas Pueden Encontrar Talento Confiable Más Rápido';
  ES['resources.mini3.meta'] = '3 min — Para empresas';
  ES['resources.card1.title'] = 'Cómo Construir una Reputación Sólida en tus Primeros 30 Días';
  ES['resources.card1.desc'] = 'Paso a paso desde la configuración del perfil hasta tu insignia de Verificado. La guía más importante para todo trabajador nuevo.';
  ES['resources.card2.title'] = 'Las 5 Habilidades Más Demandadas en 6 Países en 2026';
  ES['resources.card2.desc'] = 'Qué habilidades están pagando realmente los gerentes de contratación ahora mismo, desde Johannesburgo hasta Pekín.';
  ES['resources.card3.title'] = 'Ser Contratado a Través de la Reputación Ganada — Repetición de Q&A en Vivo';
  ES['resources.card3.desc'] = 'Mira cómo tres de nuestros trabajadores pasaron de cero tareas a empleo de tiempo completo en menos de seis meses.';
  ES['resources.card4.title'] = '5 Tareas Aptas para Principiantes que Pagan Mejor de lo que Piensas';
  ES['resources.card4.desc'] = 'Entrada de datos, pruebas de IA, subtítulos para redes sociales: estas tareas de bajo umbral tienen alta demanda y excelentes reseñas.';
  ES['resources.card5.title'] = 'Cómo las Empresas Pueden Encontrar Talento Confiable de Nivel Inicial sin Riesgo';
  ES['resources.card5.desc'] = 'Una guía completa para usar nuestras Puntuaciones de Confianza, grupos de talento y sistema de depósito en garantía para contratar con total confianza.';
  ES['resources.card6.title'] = 'Desempleo Juvenil en China: Por Qué Somos Diferentes';
  ES['resources.card6.desc'] = 'La crisis de sobreoferta de graduados explicada y cómo la prueba de trabajo supera los requisitos de experiencia.';
  ES['resources.card7.title'] = 'Cómo Usar tu Pasaporte de Habilidades para Conseguir un Empleo de Tiempo Completo';
  ES['resources.card7.desc'] = 'Tu Pasaporte de Habilidades es más poderoso que un CV. Aquí te mostramos exactamente cómo compartirlo con los empleadores.';
  ES['resources.card8.title'] = 'Herramientas de IA que Todo Joven Trabajador Debe Conocer en 2026';
  ES['resources.card8.desc'] = 'ChatGPT, Canva AI, Gemini y Perplexity: qué herramientas te hacen más contratable y cómo usarlas.';
  ES['resources.trend1.title'] = '5 Tareas de Canva para Principiantes que Pagan Bien';
  ES['resources.trend1.meta'] = 'Guía — 6 min';
  ES['resources.trend2.title'] = 'Cómo Escribir un Perfil que Consiga Empleo';
  ES['resources.trend2.meta'] = 'Consejo — 3 min';
  ES['resources.trend3.title'] = 'Entendiendo tu Puntuación de Confianza';
  ES['resources.trend3.meta'] = 'Artículo — 4 min';
  ES['resources.trend4.title'] = 'Desempleo Juvenil en China: Por Qué Ayudamos';
  ES['resources.trend4.meta'] = 'Artículo — 7 min';
  ES['resources.trend5.title'] = 'De Novato a Élite en 90 Días';
  ES['resources.trend5.meta'] = 'Guía — 10 min';
  ES['resources.webinar.register'] = 'REGISTRARSE';
  ES['resources.webinar1.title'] = 'Cómo Conseguir tu Primera Tarea (Clase Magistral para Principiantes)';
  ES['resources.webinar1.meta'] = '10:00 AM SAST — Gratis';
  ES['resources.webinar2.title'] = 'Contratar Talento de Nivel Inicial sin Riesgo';
  ES['resources.webinar2.meta'] = '2:00 PM GMT — Para empresas';
  ES['resources.webinar3.title'] = 'Herramientas de IA que Todo Joven Trabajador Debe Conocer en 2026';
  ES['resources.webinar3.meta'] = '11:00 AM CST — Gratis';
  ES['resources.topic.careerEntry'] = 'Entrada Laboral';
  ES['resources.topic.trustScore'] = 'Puntuación de Confianza';
  ES['resources.topic.aiTools'] = 'Herramientas de IA';
  ES['resources.topic.freelancing'] = 'Trabajo Independiente';
  ES['resources.topic.hiringTips'] = 'Consejos de Contratación';
  ES['resources.topic.skillPassport'] = 'Pasaporte de Habilidades';
  ES['resources.topic.dataEntry'] = 'Entrada de Datos';
  ES['resources.topic.resume'] = 'Currículum';
  ES['resources.topic.payments'] = 'Pagos';
  ES['resources.hero.eyebrow'] = 'Centro de Conocimiento';
  ES['resources.hero.title'] = 'GUÍAS, CONSEJOS<br/>Y HERRAMIENTAS PARA<br/><span class="accent">CRECER.</span>';
  ES['resources.hero.desc'] = 'Todo lo que necesitas para conseguir tu primera tarea, construir tu reputación y lanzar tu carrera, o encontrar y gestionar gran talento.';
  ES['resources.search.placeholder'] = 'Buscar guías, consejos, seminarios...';
  ES['resources.search.btn'] = 'Buscar';
  ES['resources.stats.guides'] = 'Guías y Artículos';
  ES['resources.stats.webinars'] = 'Seminarios y Repeticiones';
  ES['resources.stats.tips'] = 'Consejos y Lecturas Rápidas';
  ES['resources.stats.languages'] = 'Idiomas';
  ES['resources.filter.all'] = 'Todo';
  ES['resources.filter.guides'] = 'Guías';
  ES['resources.filter.articles'] = 'Artículos';
  ES['resources.filter.tips'] = 'Consejos';
  ES['resources.filter.webinars'] = 'Seminarios';
  ES['resources.filter.workers'] = 'Para Trabajadores';
  ES['resources.filter.businesses'] = 'Para Empresas';
  ES['resources.featured.tag'] = 'Guía Destacada';
  ES['resources.featured.title'] = 'CÓMO CONSTRUIR UNA REPUTACIÓN SÓLIDA EN TUS PRIMEROS 30 DÍAS';
  ES['resources.featured.desc'] = 'El primer mes en nuestra plataforma marca la pauta para toda tu carrera aquí. Esta guía paso a paso te lleva a través de la configuración del perfil, conseguir tu primera tarea y ganar tu insignia de Verificado.';
  ES['resources.featured.badge'] = 'Guía';
  ES['resources.featured.time'] = '8 min de lectura';
  ES['resources.featured.cta'] = 'Leer Guía';
  ES['resources.sidebar.newsletter.title'] = 'Resumen Semanal';
  ES['resources.sidebar.newsletter.desc'] = 'Recibe las mejores guías, consejos y consejos de carrera cada lunes.';
  ES['resources.sidebar.newsletter.cta'] = 'Suscribirse Gratis';
  ES['resources.sidebar.trending.title'] = 'Tendencias Esta Semana';
  ES['resources.sidebar.topics.title'] = 'Explorar por Tema';
  ES['resources.sidebar.webinars.title'] = 'Próximos Seminarios';
  ES['resources.cta.title'] = '¿LISTO PARA<br/><span class="accent">DEMOSTRARLO?</span>';
  ES['resources.cta.desc'] = 'Pon en práctica tus nuevos conocimientos. Explora tareas y comienza a construir tu reputación hoy.';
  ES['resources.cta.findWork'] = 'Buscar Trabajo';
  ES['resources.cta.hireTalent'] = 'Contratar Talento';

  // ---- idv.* ----
  ES['idv.hero.breadcrumb'] = 'Verificación de Identidad';
  ES['idv.hero.eyebrow'] = 'Toma menos de 3 minutos';
  ES['idv.hero.title'] = 'SABE CON QUIÉN<br/>ESTÁS<br/><span class="accent">TRABAJANDO.</span>';
  ES['idv.hero.desc'] = 'La verificación de identidad protege a <strong>todos</strong> en nuestra plataforma. Los trabajadores saben que las empresas para las que trabajan son reales. Las empresas saben que el talento que contratan es quien dice ser. La plataforma se mantiene segura para todos.';
  ES['idv.hero.ctaVerify'] = 'Verificar Mi Identidad';
  ES['idv.hero.ctaLearn'] = 'Aprende Por Qué';
  ES['idv.hero.trust1'] = 'Los datos nunca se venden';
  ES['idv.hero.trust2'] = 'Encriptado de 256 bits';
  ES['idv.hero.trust3'] = 'Cumple con GDPR y POPIA';
  ES['idv.hero.trust4'] = 'Menos de 3 minutos';
  ES['idv.strip1.title'] = 'Menos de 3 Minutos';
  ES['idv.strip1.desc'] = 'Completa todo el proceso desde tu teléfono o computadora';
  ES['idv.strip2.title'] = 'Proveedor Certificado';
  ES['idv.strip2.desc'] = 'Procesado por un socio de verificación de identidad certificado ISO 27001';
  ES['idv.strip3.title'] = 'Nunca Almacenado por Nosotros';
  ES['idv.strip3.desc'] = 'Las imágenes del documento se procesan y eliminan — solo conservamos el resultado verificado';
  ES['idv.strip4.title'] = 'Proceso Único';
  ES['idv.strip4.desc'] = 'Verifica una vez y tu estado se mantiene en toda nuestra plataforma';
  ES['idv.why.eyebrow'] = 'Por Qué Importa';
  ES['idv.why.title'] = 'LA CONFIANZA NO SE<br/>ASUME.<br/><span class="acc">SE CONSTRUYE.</span>';
  ES['idv.why.desc'] = 'Una plataforma donde cualquiera puede afirmar cualquier cosa es una plataforma donde nada se puede confiar. La verificación de identidad es la base que hace que cada puntuación de confianza, cada reseña y cada pago en nuestra plataforma signifiquen algo real.';
  ES['idv.why.card1.title'] = 'Los Trabajadores Saben Quién los Contrata';
  ES['idv.why.card1.desc'] = 'Toda empresa que publica tareas en nuestra plataforma ha pasado la verificación de identidad y de entidad. Los trabajadores nunca aceptan trabajo de una fuente anónima — saben exactamente para quién están trabajando.';
  ES['idv.why.card2.title'] = 'Las Puntuaciones de Confianza Están Vinculadas a Personas Reales';
  ES['idv.why.card2.desc'] = 'Sin verificación, las puntuaciones de confianza no tienen sentido. Un usuario podría crear varias cuentas y manipular el sistema. La verificación vincula cada reseña, tarea y calificación de forma permanente a una persona real y única.';
  ES['idv.why.card3.title'] = 'Los Pagos Están Protegidos Contra el Fraude';
  ES['idv.why.card3.desc'] = 'El fraude de pagos, la toma de cuentas y la actividad de mulas de dinero son riesgos serios en cualquier plataforma que mueve dinero. La verificación de identidad es nuestra defensa más fuerte contra los tres, protegiendo las ganancias de cada trabajador.';
  ES['idv.why.card4.title'] = 'Tu Reputación Es Solo Tuya';
  ES['idv.why.card4.desc'] = 'Tu reputación con nosotros te pertenece solo a ti. La verificación asegura que nadie más pueda crear una cuenta haciéndose pasar por ti, usar tu nombre o diluir el historial laboral que has construido.';
  ES['idv.why.card5.title'] = 'Cumplimiento Legal en Seis Países';
  ES['idv.why.card5.desc'] = 'Operar en seis jurisdicciones significa que debemos cumplir con las obligaciones de Prevención de Lavado de Dinero (AML) y Conocimiento del Cliente (KYC) en cada mercado. La verificación no es opcional — es un requisito legal para una plataforma que mueve dinero.';
  ES['idv.why.card6.title'] = 'Los Empleadores Se lo Toman en Serio';
  ES['idv.why.card6.desc'] = 'Cuando un trabajador verificado comparte su Pasaporte de Habilidades con un posible empleador, ese empleador sabe que la prueba de trabajo detrás está vinculada a una identidad real y verificada. Eso es lo que hace que una reputación verificada valga más que un CV.';
  ES['idv.check.eyebrow'] = 'Transparencia Total';
  ES['idv.check.title'] = 'EXACTAMENTE QUÉ<br/>VERIFICAMOS Y<br/><span class="acc">QUÉ NO.</span>';
  ES['idv.check.desc'] = 'Solo verificamos lo necesario para confirmar tu identidad. No recopilamos información médica, historial financiero, antecedentes penales ni nada más allá de lo indicado a continuación.';
  ES['idv.check.weVerify'] = 'Lo que verificamos';
  ES['idv.check.verify1.title'] = 'Eres una persona real';
  ES['idv.check.verify1.desc'] = 'Confirmamos que tu documento emitido por el gobierno es genuino y no está vencido, y que la selfie coincide con la foto del documento.';
  ES['idv.check.verify2.title'] = 'Tienes 18 años o más';
  ES['idv.check.verify2.desc'] = 'Confirmamos que tu fecha de nacimiento en el documento cumple con el requisito de edad mínima de la plataforma.';
  ES['idv.check.verify3.title'] = 'Tu nombre coincide con tu cuenta';
  ES['idv.check.verify3.desc'] = 'El nombre en tu documento debe coincidir con el nombre con el que te registraste. Esto previene la suplantación y el uso compartido de cuentas.';
  ES['idv.check.verify4.title'] = 'El documento no ha sido alterado';
  ES['idv.check.verify4.desc'] = 'Nuestros revisores verifican la manipulación digital, el texto alterado y las inconsistencias en las características de seguridad del documento.';
  ES['idv.check.verify5.title'] = 'No estás ya verificado con otra cuenta';
  ES['idv.check.verify5.desc'] = 'Cada persona puede tener solo una cuenta verificada. Las cuentas duplicadas son una violación de la plataforma.';
  ES['idv.check.doNotCheck'] = 'Lo que NO verificamos';
  ES['idv.check.not1.title'] = 'Antecedentes penales';
  ES['idv.check.not1.desc'] = 'No realizamos verificaciones de antecedentes penales. Somos una plataforma de trabajo, no un servicio de selección de empleo.';
  ES['idv.check.not2.title'] = 'Historial crediticio o registros financieros';
  ES['idv.check.not2.desc'] = 'No tenemos acceso a tu puntuación crediticia, historial bancario o situación financiera. Solo verificamos quién eres.';
  ES['idv.check.not3.title'] = 'Información médica o de salud';
  ES['idv.check.not3.desc'] = 'No se solicita, recopila ni infiere ningún dato médico en ningún momento durante el proceso de verificación.';
  ES['idv.check.not4.title'] = 'Redes sociales o presencia en línea';
  ES['idv.check.not4.desc'] = 'No buscamos tus cuentas sociales, te buscamos en línea ni accedemos a ningún dato fuera del proceso de verificación.';
  ES['idv.check.not5.title'] = 'Perfiles biométricos o bases de datos de reconocimiento facial';
  ES['idv.check.not5.desc'] = 'Tu selfie se usa únicamente para comparar tu rostro con la foto de tu documento. No se crea ni almacena ningún perfil de reconocimiento facial.';
  ES['idv.process.eyebrow'] = 'Paso a Paso';
  ES['idv.process.title'] = 'CÓMO FUNCIONA LA<br/><span class="acc">VERIFICACIÓN.</span>';
  ES['idv.process.desc'] = 'Cuatro pasos rápidos. Todo sucede en tu dispositivo. Todo el proceso toma menos de tres minutos.';
  ES['idv.process.step1.title'] = 'Elige tu Documento';
  ES['idv.process.step1.desc'] = 'Selecciona el tipo de identificación que usarás: cédula nacional, pasaporte o licencia de conducir. Diferentes documentos son compatibles según el país.';
  ES['idv.process.step1.tag'] = 'En el Dispositivo';
  ES['idv.process.step2.title'] = 'Escanea el Documento';
  ES['idv.process.step2.desc'] = 'Sostén tu documento frente a la cámara de tu dispositivo. Nuestro sistema captura tanto el frente como el reverso. Se proporciona orientación en tiempo real.';
  ES['idv.process.step2.tag'] = 'Menos de 60 Segundos';
  ES['idv.process.step3.title'] = 'Tómate una Selfie';
  ES['idv.process.step3.desc'] = 'Una rápida verificación de vitalidad: se te pedirá parpadear o girar la cabeza para confirmar que estás físicamente presente. No se necesita equipo especial.';
  ES['idv.process.step3.tag'] = 'Verificación de Vitalidad';
  ES['idv.process.step4.title'] = 'Decisión Instantánea';
  ES['idv.process.step4.desc'] = 'La mayoría de las verificaciones se aprueban al instante. Si se necesita revisión manual, se te notificará dentro de 24 horas. Tu perfil se desbloquea al aprobarse.';
  ES['idv.process.step4.tag'] = 'Instantáneo o 24h';
  ES['idv.docs.eyebrow'] = 'Documentos Aceptados';
  ES['idv.docs.title'] = 'LO QUE<br/><span class="acc">NECESITARÁS.</span>';
  ES['idv.docs.desc'] = 'Aceptamos identificación con foto emitida por el gobierno de los seis países donde operamos. Los documentos deben estar vigentes y no vencidos.';
  ES['idv.docs.national.title'] = 'Cédula de Identidad Nacional';
  ES['idv.docs.national.desc'] = 'Aceptada en Sudáfrica (Libro de ID Verde y Tarjeta ID Inteligente), Francia (Carte Nationale d\'Identite), España (Documento Nacional de Identidad) y China (Tarjeta de Identidad de Residente).';
  ES['idv.docs.national.badge'] = 'Más Común';
  ES['idv.docs.passport.title'] = 'Pasaporte';
  ES['idv.docs.passport.desc'] = 'Se aceptan pasaportes internacionales de los seis países. La página de datos biográficos y la página de la foto deben ser claramente visibles. Aceptado en todo el mundo, ideal para trabajadores internacionales.';
  ES['idv.docs.passport.badge'] = 'Aceptado en Todos los Países';
  ES['idv.docs.drivers.title'] = 'Licencia de Conducir';
  ES['idv.docs.drivers.desc'] = 'Aceptada en Sudáfrica, Estados Unidos, Reino Unido y Francia. Debe incluir una foto y fecha de nacimiento. Aceptada como documento secundario donde la ID nacional no está disponible.';
  ES['idv.docs.drivers.badge'] = 'Países Seleccionados';
  ES['idv.docs.residence.title'] = 'Permiso de Residencia';
  ES['idv.docs.residence.desc'] = 'Los permisos de residencia biométricos se aceptan en el Reino Unido y países seleccionados de la Unión Europea para extranjeros que viven y trabajan en esas jurisdicciones.';
  ES['idv.docs.residence.badge'] = 'Reino Unido y UE';
  ES['idv.docs.business.title'] = 'Documento de Registro Empresarial';
  ES['idv.docs.business.desc'] = 'Para cuentas empresariales: certificado de registro de la empresa o documento equivalente del registro nacional de empresas correspondiente. Requerido junto con la verificación de identidad del representante autorizado.';
  ES['idv.docs.business.badge'] = 'Cuentas Empresariales';
  ES['idv.docs.other.title'] = '¿Documento No Listado?';
  ES['idv.docs.other.desc'] = 'Contacta a nuestro equipo de soporte de verificación en verify@youngmerit.com. Podríamos aceptar documentos alternativos caso por caso para usuarios en jurisdicciones con opciones de ID estándar limitadas.';
  ES['idv.docs.other.badge'] = 'Contáctanos';
  ES['idv.docs.countries.label'] = 'Aceptado desde';
  ES['idv.privacy.eyebrow'] = 'Tu Privacidad';
  ES['idv.privacy.title'] = 'TUS DATOS.<br/>TU <span class="acc">CONTROL.</span>';
  ES['idv.privacy.desc'] = 'Tomamos la privacidad en serio en cada paso. El proceso de verificación de identidad está diseñado para recopilar la mínima información necesaria y nada más. Así es exactamente cómo se maneja tu información.';
  ES['idv.privacy.cta'] = 'Leer la Política de Privacidad Completa';
  ES['idv.privacy.item1.title'] = 'Nunca almacenamos las imágenes de los documentos';
  ES['idv.privacy.item1.desc'] = 'Tus fotos de identificación y selfie se transmiten directamente a nuestro socio de verificación certificado, se procesan para confirmar tu identidad y luego se eliminan permanentemente. Solo recibimos el resultado de la verificación: aprobado, rechazado o pendiente.';
  ES['idv.privacy.item2.title'] = 'Todos los datos están cifrados de extremo a extremo';
  ES['idv.privacy.item2.desc'] = 'Todo lo transmitido durante la verificación está cifrado con TLS 1.3. Nuestro socio de verificación cuenta con certificación ISO 27001 y procesa datos bajo un acuerdo vinculante de procesamiento de datos con nosotros.';
  ES['idv.privacy.item3.title'] = 'Cumple con las leyes en los seis países';
  ES['idv.privacy.item3.desc'] = 'Nuestro proceso de verificación cumple con los requisitos del GDPR (Francia y España), UK GDPR, POPIA (Sudáfrica), PIPL (China) y las leyes de privacidad estatales aplicables de EE. UU. Las transferencias de datos transfronterizas usan Cláusulas Contractuales Estándar aprobadas.';
  ES['idv.privacy.item4.title'] = 'Puedes solicitar la eliminación en cualquier momento';
  ES['idv.privacy.item4.desc'] = 'Bajo el GDPR, POPIA y otras leyes aplicables, tienes derecho a solicitar la eliminación de tus datos personales. Si cierras tu cuenta, tu estado de verificación y datos asociados se eliminan dentro de 30 días, sujeto a obligaciones legales de retención.';
  ES['idv.privacy.item5.title'] = 'Tus datos nunca se venden';
  ES['idv.privacy.item5.desc'] = 'No vendemos, alquilamos ni compartimos tus datos personales con ningún tercero con fines comerciales. Tus datos de identidad se usan únicamente para confirmar quién eres, nada más.';
  ES['idv.faq.eyebrow'] = 'PREGUNTAS FRECUENTES';
  ES['idv.faq.title'] = 'Todo lo que necesitas saber sobre el proceso de verificación.';
  ES['idv.faq.q1'] = '¿Es obligatoria la verificación de identidad?';
  ES['idv.faq.a1'] = 'Sí. Todos los usuarios que deseen realizar transacciones en nuestra plataforma — postular a tareas, publicar tareas o recibir pagos — deben completar la verificación de identidad. Puedes explorar la plataforma sin verificar, pero no puedes postular a trabajos, publicar tareas ni enviar o recibir dinero hasta que la verificación esté completa. Esto es un requisito legal bajo las regulaciones contra el lavado de dinero que aplican en cada país donde operamos.';
  ES['idv.faq.q2'] = '¿Cuánto tiempo tarda la verificación?';
  ES['idv.faq.a2'] = 'El proceso de verificación en sí toma menos de tres minutos en la mayoría de los dispositivos. La mayoría de las decisiones se devuelven al instante tras el envío. En algunos casos — típicamente cuando la calidad del documento es baja o se necesita revisión manual — puedes esperar hasta 24 horas. Recibirás una notificación por correo electrónico tan pronto como se confirme tu estado. No necesitas permanecer en la página mientras se procesa la revisión.';
  ES['idv.faq.q3'] = 'Mi verificación fue rechazada. ¿Qué hago?';
  ES['idv.faq.a3'] = 'Si tu verificación es rechazada, recibirás un correo electrónico explicando el motivo. Los motivos comunes incluyen: un escaneo del documento borroso o incompleto, un documento vencido, una discrepancia entre el nombre del documento y la cuenta, o un documento que no se acepta en tu país. Puedes reintentar el proceso de verificación hasta tres veces. Si sigues teniendo problemas, contacta a nuestro equipo de soporte de verificación en verify@youngmerit.com y un agente humano te asistirá directamente.';
  ES['idv.faq.q4'] = '¿Se compartirán mis documentos con las empresas para las que trabajo?';
  ES['idv.faq.a4'] = 'Absolutamente no. Las empresas en nuestra plataforma nunca ven tus documentos de identidad. Solo ven una insignia de verificación en tu perfil que indica que tu identidad ha sido confirmada por nosotros. Tu tipo de documento, número de documento, fecha de nacimiento y cualquier otro dato personal del proceso de verificación nunca se comparten con ninguna empresa u otro usuario de la plataforma.';
  ES['idv.faq.q5'] = '¿Necesito verificar de nuevo si cambio mi nombre o país?';
  ES['idv.faq.a5'] = 'Si cambias legalmente tu nombre, deberás contactar a nuestro equipo de soporte para actualizar tu cuenta y podrías necesitar completar una nueva verificación. Si te mudas de país, la reverificación no es automáticamente necesaria a menos que actualices tus datos de pago a una nueva jurisdicción. Contacta a nuestro equipo de soporte para orientación sobre tu situación específica.';
  ES['idv.faq.q6'] = 'No tengo un documento de identidad estándar. ¿Puedo verificarme igualmente?';
  ES['idv.faq.a6'] = 'Contáctanos en verify@youngmerit.com antes de intentar la verificación. Entendemos que el acceso a identificaciones estándar emitidas por el gobierno no es igual en todas las comunidades y trabajaremos contigo caso por caso para encontrar una solución adecuada. Nunca queremos que la verificación de identidad sea una barrera que impida el acceso a jóvenes genuinos y merecedores.';
  ES['idv.faq.q7'] = '¿Se almacena mi selfie de forma permanente?';
  ES['idv.faq.a7'] = 'No. Tu selfie se usa solo para realizar una verificación de vitalidad y comparar tu rostro con la foto de tu documento de identidad. Es procesada por nuestro socio de verificación y luego eliminada permanentemente. No almacenamos ningún dato biométrico, no creamos un perfil de reconocimiento facial ni conservamos ninguna imagen del proceso de verificación. Solo el resultado de la verificación — aprobado, rechazado o pendiente — es retenido por nosotros.';
  ES['idv.cta.eyebrow'] = '¿Listo para comenzar?';
  ES['idv.cta.title'] = 'DEMUESTRA QUE ERES<br/>QUIEN DICES <span class="acc">QUE ERES.</span>';
  ES['idv.cta.desc'] = 'Completa la verificación de identidad en menos de tres minutos y desbloquea toda la plataforma: trabajo real, pago real, reputación real.';
  ES['idv.cta.verify'] = 'Verificar Ahora';
  ES['idv.cta.privacy'] = 'Leer la Política de Privacidad';

  ES['nav.pricing'] = 'Precios';

  // ---- pricing.* additions ----
  ES['pricing.hero.breadcrumb'] = 'Precios';
  ES['pricing.faq.title'] = 'PREGUNTAS <span class="accent">FRECUENTES.</span>';
  ES['pricing.faq.desc'] = 'Todo lo que necesitas saber sobre nuestros precios.';
  ES['pricing.faq.q1'] = '¿Por qué cobran una tarifa de mercado?';
  ES['pricing.faq.a1'] = 'La tarifa de mercado cubre el procesamiento de pagos, la protección de depósito en garantía, la prevención de fraude, la resolución de disputas y el soporte al cliente. Solo pagas cuando una tarea se completa con éxito y se genera valor. Sin tarifas ocultas, sin sorpresas.';
  ES['pricing.faq.q2'] = '¿Cuándo pago la tarifa de mercado?';
  ES['pricing.faq.a2'] = 'La tarifa se deduce automáticamente cuando se completa una tarea y el pago se libera del depósito en garantía. Las empresas pagan la tarifa como parte del costo de la tarea. Los trabajadores reciben su pago completo menos la tarifa.';
  ES['pricing.faq.q3'] = '¿Cómo funciona el depósito en garantía?';
  ES['pricing.faq.a3'] = 'Cuando una empresa publica una tarea, el pago completo se retiene en una cuenta de depósito en garantía segura. El dinero solo se libera al trabajador una vez que la empresa aprueba el trabajo completado. Si hay una disputa, nuestro equipo de mediación revisa las pruebas y toma una decisión justa. <a href="dispute-system.html" style="color:var(--amber);text-decoration:none;">Aprende más →</a>';
  ES['pricing.faq.q4'] = '¿Puedo cancelar mi suscripción en cualquier momento?';
  ES['pricing.faq.a4'] = 'Sí. Puedes cancelar tu suscripción en cualquier momento desde la configuración de tu cuenta. Si cancelas, seguirás teniendo acceso hasta el final de tu período de facturación actual. Sin contratos de permanencia, sin tarifas de cancelación.';
  ES['pricing.faq.q5'] = '¿Se requieren suscripciones para usar YOUNGMERIT?';
  ES['pricing.faq.a5'] = '<strong>No.</strong> El plan Gratis te da acceso al mercado principal. Puedes publicar tareas, postular a trabajos y completar transacciones sin pagar una suscripción. Las suscripciones desbloquean funciones de productividad, análisis y tarifas más bajas — son una mejora, no un requisito.';
  ES['pricing.faq.q6'] = '¿Ofrecen descuentos para organizaciones sin fines de lucro o instituciones educativas?';
  ES['pricing.faq.a6'] = 'Sí. Ofrecemos precios especiales para organizaciones sin fines de lucro registradas, instituciones educativas y empresas sociales. Contacta a nuestro equipo en <a href="mailto:support@growiq.co" style="color:var(--amber);text-decoration:none;">support@growiq.co</a> para discutir tus necesidades específicas.';
  ES['pricing.toggle.perYear'] = '/año';
  ES['pricing.toggle.saveAmount'] = 'Ahorra {amount}/año';
  ES['pricing.calc.savePrefix'] = 'Ahorra ';

  // ---- pricing.* (full set) ----
  ES['pricing.hero.eyebrow'] = 'Simple. Transparente. Sin sorpresas.';
  ES['pricing.hero.title'] = 'PRECIOS QUE<br/><span class="accent">CRECEN CONTIGO.</span>';
  ES['pricing.hero.desc'] = '<strong>Gratis para empezar.</strong> Solo paga cuando contrates a gran escala. Tarifas de transacción transparentes y suscripciones predecibles — sin costos ocultos.';
  ES['pricing.hero.tag1'] = '✓ No se requiere tarjeta de crédito';
  ES['pricing.hero.tag2'] = '✓ Cancela cuando quieras';
  ES['pricing.hero.tag3'] = '✓ Garantía de devolución de 14 días';
  ES['pricing.toggle.monthly'] = 'Mensual';
  ES['pricing.toggle.annual'] = 'Anual';
  ES['pricing.toggle.save'] = 'Ahorra 20%';
  ES['pricing.free.name'] = 'Gratis';
  ES['pricing.free.desc'] = 'Para individuos que están empezando';
  ES['pricing.free.period'] = '/mes';
  ES['pricing.free.annual'] = 'R0 /año';
  ES['pricing.free.feat1'] = 'Publica hasta 3 tareas/mes';
  ES['pricing.free.feat2'] = 'Perfil de empresa básico';
  ES['pricing.free.feat3'] = 'Soporte estándar';
  ES['pricing.free.feat4'] = 'Postúlate a tareas';
  ES['pricing.free.feat5'] = 'Publicaciones de voz';
  ES['pricing.free.feat7'] = 'Análisis';
  ES['pricing.free.cta'] = 'Empezar Gratis';
  ES['pricing.pro.name'] = 'Profesional Pro';
  ES['pricing.pro.desc'] = 'Para profesionales que construyen su carrera';
  ES['pricing.pro.period'] = '/mes';
  ES['pricing.pro.annual'] = 'R1,429 /año';
  ES['pricing.pro.feat1'] = 'Análisis de perfil';
  ES['pricing.pro.feat2'] = 'Colocación destacada del perfil';
  ES['pricing.pro.feat5'] = 'Postulaciones prioritarias';
  ES['pricing.pro.feat6'] = 'Verificación de habilidades';
  ES['pricing.pro.feat7'] = 'Oportunidades guardadas ilimitadas';
  ES['pricing.pro.cta'] = 'Empezar Pro';
  ES['pricing.biz.name'] = 'Empresa Pro';
  ES['pricing.biz.desc'] = 'Para equipos en crecimiento que contratan regularmente';
  ES['pricing.biz.period'] = '/mes';
  ES['pricing.biz.annual'] = 'R4,790 /año';
  ES['pricing.biz.popular'] = 'Más Popular';
  ES['pricing.biz.feat1'] = 'Tareas ilimitadas';
  ES['pricing.biz.feat3'] = 'Filtrado de postulantes';
  ES['pricing.biz.feat4'] = '5 miembros del equipo';
  ES['pricing.biz.feat5'] = 'Panel de análisis';
  ES['pricing.biz.feat6'] = 'Verificación de empresa';
  ES['pricing.biz.feat7'] = 'Soporte prioritario';
  ES['pricing.biz.feat8'] = 'Perfil de empresa destacado';
  ES['pricing.biz.feat9'] = 'Tarifa de mercado más baja (10% → 8%)';
  ES['pricing.biz.cta'] = 'Empezar Empresa Pro';
  ES['pricing.growth.name'] = 'Crecimiento Empresarial';
  ES['pricing.growth.desc'] = 'Para empresas que contratan a gran escala';
  ES['pricing.growth.period'] = '/mes';
  ES['pricing.growth.annual'] = 'R9,590 /año';
  ES['pricing.growth.feat1'] = 'Todo lo de Pro';
  ES['pricing.growth.feat2'] = 'Tarifa de mercado más baja (10% → 6%)';
  ES['pricing.growth.feat5'] = 'Flujo de contratación';
  ES['pricing.growth.feat6'] = 'Puestos de equipo ilimitados';
  ES['pricing.growth.feat7'] = 'Tareas destacadas';
  ES['pricing.growth.feat8'] = 'Análisis avanzado';
  ES['pricing.growth.cta'] = 'Empezar Crecimiento';
  ES['pricing.fees.eyebrow'] = 'TARIFAS DE <span class="accent">MERCADO.</span>';
  ES['pricing.fees.title'] = 'Tarifas de transacción transparentes que escalan con tu volumen. Solo paga cuando se crea valor.';
  ES['pricing.fees.tier1.range'] = 'R0 – R999 <small>por tarea</small>';
  ES['pricing.fees.tier1.desc'] = 'Tarifa estándar para tareas más pequeñas';
  ES['pricing.fees.tier1.badge1'] = '✓ Depósito en garantía seguro';
  ES['pricing.fees.tier1.badge2'] = '✓ Protección de disputas';
  ES['pricing.fees.tier2.range'] = 'R1,000 – R4,999 <small>por tarea</small>';
  ES['pricing.fees.tier2.desc'] = 'Tarifa reducida para tareas medianas';
  ES['pricing.fees.tier2.badge1'] = '✓ Soporte prioritario';
  ES['pricing.fees.tier2.badge2'] = '✓ Pagos más rápidos';
  ES['pricing.fees.tier3.range'] = 'R5,000+ <small>por tarea</small>';
  ES['pricing.fees.tier3.desc'] = 'Mejor tarifa para proyectos grandes';
  ES['pricing.fees.tier3.badge1'] = '✓ Gerente de cuenta dedicado';
  ES['pricing.fees.tier3.badge2'] = '✓ Soporte premium';
  ES['pricing.fees.note'] = '🔒 Todos los pagos están protegidos por depósito en garantía. <a href="dispute-system.html" style="color:var(--amber);text-decoration:none;">Aprende sobre la resolución de disputas →</a>';
  ES['pricing.calc.title'] = '¿CUÁNTO PODRÍAS <span style="color:var(--amber);">AHORRAR?</span>';
  ES['pricing.calc.desc'] = 'Ve la diferencia que hace una suscripción en tus tarifas de mercado.';
  ES['pricing.calc.label'] = 'Gasto mensual en tareas';
  ES['pricing.calc.freeFees'] = 'Tarifas del Plan Gratis';
  ES['pricing.calc.proFees'] = 'Tarifas de Empresa Pro';
  ES['pricing.calc.growthFees'] = 'Tarifas de Crecimiento Empresarial';
  ES['pricing.calc.note'] = 'Calculado según la tarifa de mercado promedio de 10% para Gratis, 8% para Pro, 6% para Crecimiento.';
  ES['pricing.compare.title'] = 'COMPARA <span class="accent">PLANES.</span>';
  ES['pricing.compare.desc'] = 'Todo lo que necesitas saber, lado a lado.';
  ES['pricing.compare.feature'] = 'Función';
  ES['pricing.compare.free'] = 'Gratis';
  ES['pricing.compare.pro'] = 'Profesional Pro';
  ES['pricing.compare.biz'] = 'Empresa Pro';
  ES['pricing.compare.growth'] = 'Crecimiento Empresarial';
  ES['pricing.compare.postTasks'] = 'Publicar tareas';
  ES['pricing.compare.postTasks.free'] = '3/mes';
  ES['pricing.compare.postTasks.biz'] = '✓ Ilimitado';
  ES['pricing.compare.postTasks.growth'] = '✓ Ilimitado';
  ES['pricing.compare.applyTasks'] = 'Postularse a tareas';
  ES['pricing.compare.applyTasks.free'] = '✓';
  ES['pricing.compare.applyTasks.pro'] = '✓ Prioridad';
  ES['pricing.compare.analytics'] = 'Análisis';
  ES['pricing.compare.analytics.free'] = '✗';
  ES['pricing.compare.analytics.pro'] = '✓ Perfil';
  ES['pricing.compare.analytics.biz'] = '✓ Panel';
  ES['pricing.compare.analytics.growth'] = '✓ Avanzado';
  ES['pricing.compare.team'] = 'Miembros del equipo';
  ES['pricing.compare.team.free'] = '✗';
  ES['pricing.compare.team.biz'] = '5 puestos';
  ES['pricing.compare.team.growth'] = '✓ Ilimitado';
  ES['pricing.compare.featured'] = 'Colocación destacada';
  ES['pricing.compare.featured.free'] = '✗';
  ES['pricing.compare.featured.pro'] = '✓ Perfil';
  ES['pricing.compare.featured.biz'] = '✓ Empresa';
  ES['pricing.compare.featured.growth'] = '✓ Empresa + tareas';
  ES['pricing.compare.fee'] = 'Tarifa de mercado';
  ES['pricing.compare.fee.free'] = '10 / 8 / 6%';
  ES['pricing.compare.fee.biz'] = '<span style="color:var(--amber);font-weight:600;">8 / 6 / 5%</span>';
  ES['pricing.compare.fee.growth'] = '<span style="color:var(--amber);font-weight:600;">6 / 5 / 4%</span>';
  ES['pricing.compare.support'] = 'Soporte';
  ES['pricing.compare.support.free'] = 'Estándar';
  ES['pricing.compare.support.pro'] = 'Estándar';
  ES['pricing.compare.support.biz'] = '✓ Prioritario';
  ES['pricing.compare.support.growth'] = '✓ Premium';

  ES['pricing.fees.tier1.rate'] = '10%';
  ES['pricing.fees.tier2.rate'] = '8%';
  ES['pricing.fees.tier3.rate'] = '6%';

  // ---- waitlist.* ----
  ES['waitlist.hero.eyebrow'] = 'Próximamente — principios de 2026';
  ES['waitlist.hero.title1'] = 'ÚNETE A LA';
  ES['waitlist.hero.title2'] = 'LISTA DE';
  ES['waitlist.hero.title3'] = 'ESPERA.';
  ES['waitlist.hero.desc'] = '<strong>Sé el primero en acceder.</strong> Estamos construyendo la plataforma donde los jóvenes crean historiales laborales verificados y las empresas encuentran talento confiable. Regístrate a continuación para obtener acceso anticipado cuando lancemos.';
  ES['waitlist.hero.people'] = 'Personas en espera';
  ES['waitlist.hero.countries'] = 'Países';
  ES['waitlist.hero.launch'] = 'Año de lanzamiento';
  ES['waitlist.left.title'] = 'SÉ DE LOS<br/><span class="accent">PRIMEROS.</span>';
  ES['waitlist.left.desc'] = 'Los miembros fundadores obtienen beneficios exclusivos. Estamos seleccionando cuidadosamente a la primera comunidad para dar forma a cómo funciona la plataforma.';
  ES['waitlist.benefit1'] = 'Insignia de miembro fundador en tu perfil';
  ES['waitlist.benefit2'] = 'Acceso anticipado — días antes del lanzamiento público';
  ES['waitlist.benefit3'] = 'Canal comunitario exclusivo solo para fundadores';
  ES['waitlist.benefit4'] = 'Acceso gratuito de por vida a la plataforma (nivel fundador)';
  ES['waitlist.card.label'] = 'Únete a la lista';
  ES['waitlist.card.title'] = 'ASEGURA TU LUGAR';
  ES['waitlist.card.desc'] = 'Te avisaremos en el momento en que estemos en vivo. Sin spam, sin tonterías.';
  ES['waitlist.form.name'] = 'Nombre completo';
  ES['waitlist.form.email'] = 'Correo electrónico';
  ES['waitlist.form.type'] = 'Tipo de cuenta';
  ES['waitlist.form.type.worker'] = 'Trabajador — buscar tareas';
  ES['waitlist.form.type.business'] = 'Empresa — contratar talento';
  ES['waitlist.form.type.both'] = 'Ambos — me interesan los dos';
  ES['waitlist.form.country'] = 'País';
  ES['waitlist.form.country.za'] = '🇿🇦 Sudáfrica';
  ES['waitlist.form.country.cn'] = '🇨🇳 China';
  ES['waitlist.form.country.us'] = '🇺🇸 Estados Unidos';
  ES['waitlist.form.country.fr'] = '🇫🇷 Francia';
  ES['waitlist.form.country.es'] = '🇪🇸 España';
  ES['waitlist.form.country.gb'] = '🇬🇧 Reino Unido';
  ES['waitlist.form.country.other'] = '🌍 Otro';
  ES['waitlist.form.consent'] = 'Acepto recibir actualizaciones ocasionales del equipo. Puedo darme de baja en cualquier momento. <a href="privacy-policy.html">Política de Privacidad</a>.';
  ES['waitlist.form.cta'] = 'Asegurar mi lugar';
  ES['waitlist.form.note'] = 'Lanzamiento próximo — te enviaremos un correo primero';
  ES['waitlist.success.title'] = 'YA ESTÁS EN LA LISTA.';
  ES['waitlist.success.desc'] = 'Te has añadido correctamente a la lista de espera para nuestro lanzamiento. Cuando se acerque el momento, te avisaremos.';
  ES['waitlist.success.back'] = 'Volver';
  ES['waitlist.success.note'] = 'Revisa tu correo para la confirmación. Agréganos a tus contactos.';
  ES['waitlist.social.text'] = 'Ya en la lista de espera en 6 países';
  ES['waitlist.form.name.error'] = 'Por favor, ingresa tu nombre';
  ES['waitlist.form.email.error'] = 'Por favor, ingresa una dirección de correo válida';
  ES['waitlist.form.consent.error'] = 'Por favor, acepta recibir actualizaciones';
  ES['waitlist.form.errorAlert'] = 'Algo salió mal. Por favor, inténtalo de nuevo.';
  ES['waitlist.social.tag1'] = 'FUNDADOR';
  ES['waitlist.social.tag2'] = 'ACCESO';
  ES['waitlist.social.tag3'] = 'ANTICIPADO';
  ES['waitlist.social.join'] = 'Únete a más de {count} futuros miembros';

  // ---- auth.* ----
  ES['auth.nav.back'] = 'Volver al sitio';
  ES['auth.left.eyebrow'] = 'Bienvenido a YOUNGMERIT';
  ES['auth.left.title'] = 'TU TRABAJO.<br/>TU <span class="accent">PRUEBA.</span>';
  ES['auth.left.desc'] = 'Únete a jóvenes trabajadores y empresas que construyen confianza y logran resultados en seis países.';
  ES['auth.left.trust1'] = 'Identidad verificada en cada cuenta';
  ES['auth.left.trust2'] = 'Pagos retenidos en depósito en garantía seguro';
  ES['auth.left.trust3'] = 'Construye tu Pasaporte de Habilidades con cada tarea';
  ES['auth.left.trust4'] = 'Activo en seis países en todo el mundo';
  ES['auth.mode.signup'] = 'Registrarse';
  ES['auth.mode.login'] = 'Iniciar Sesión';
  ES['auth.demo.tryLabel'] = 'Prueba una cuenta demo';
  ES['auth.demo.worker'] = 'Trabajador';
  ES['auth.demo.worker.stats'] = '12 tareas &middot; 4.8 calificación &middot; R4,280 ganados';
  ES['auth.demo.worker.cta'] = 'Iniciar sesión como Trabajador';
  ES['auth.demo.business'] = 'Empresa';
  ES['auth.demo.business.stats'] = '24 tareas &middot; 4.9 calificación &middot; 19 contratados';
  ES['auth.demo.business.cta'] = 'Iniciar sesión como Empresa';
  ES['auth.demo.loggingIn'] = 'Iniciando sesión como {name}…';
  ES['auth.verify.title'] = 'REVISA TU CORREO.';
  ES['auth.verify.desc'] = 'Enviamos un enlace de verificación a<br/><strong id="verifyEmail" style="color:var(--dark);"></strong>';
  ES['auth.verify.note'] = 'Haz clic en el enlace del correo para activar tu cuenta. Revisa tu carpeta de spam si no lo ves.';
  ES['auth.verify.resend'] = 'Reenviar correo de verificación';
  ES['auth.verify.resent'] = 'Correo reenviado con éxito.';
  ES['auth.success.titleLogin'] = 'BIENVENIDO DE NUEVO.';
  ES['auth.success.msgLogin'] = 'Ya has iniciado sesión. Te llevamos a tu perfil…';
  ES['auth.success.welcomeName'] = 'BIENVENIDO DE NUEVO, {name}.';
  ES['auth.success.loggingIn'] = 'Iniciando tu sesión…';
  ES['auth.signup.title'] = 'CREA TU CUENTA';
  ES['auth.signup.desc'] = 'Gratis para unirse. No se requiere tarjeta de crédito.';
  ES['auth.alert.generic'] = 'Algo salió mal. Por favor, inténtalo de nuevo.';
  ES['auth.signup.typeLabel'] = 'Me uno como';
  ES['auth.signup.typeWorkerDesc'] = 'Encuentra tareas, cobra y construye tu reputación';
  ES['auth.signup.typeBusinessDesc'] = 'Publica tareas y contrata talento joven confiable';
  ES['auth.signup.typeErr'] = 'Por favor, selecciona un tipo de cuenta para continuar.';
  ES['auth.signup.firstName'] = 'Nombre';
  ES['auth.signup.lastName'] = 'Apellido';
  ES['auth.err.required'] = 'Obligatorio';
  ES['auth.signup.bizName'] = 'Nombre de la empresa / organización';
  ES['auth.signup.bizName.err'] = 'Obligatorio para cuentas empresariales';
  ES['auth.signup.email'] = 'Correo electrónico';
  ES['auth.err.email'] = 'Ingresa una dirección de correo válida';
  ES['auth.signup.password'] = 'Contraseña';
  ES['auth.pw.tooShort'] = 'Muy corta';
  ES['auth.pw.tooWeak'] = 'Muy débil';
  ES['auth.pw.weak'] = 'Débil';
  ES['auth.pw.fair'] = 'Aceptable';
  ES['auth.pw.good'] = 'Buena';
  ES['auth.pw.strong'] = 'Fuerte';
  ES['auth.signup.password.err'] = 'La contraseña debe tener al menos 8 caracteres';
  ES['auth.signup.cta'] = 'Crear cuenta';
  ES['auth.signup.terms'] = 'Al registrarte, aceptas nuestros <a href="terms.html">Términos de Servicio</a> y <a href="privacy-policy.html">Política de Privacidad</a>.';
  ES['auth.signup.switchPrompt'] = '¿Ya tienes una cuenta?';
  ES['auth.signup.switchLink'] = 'Iniciar sesión';
  ES['auth.login.title'] = 'BIENVENIDO DE NUEVO.';
  ES['auth.login.desc'] = 'Inicia sesión para acceder a tu perfil y tareas.';
  ES['auth.login.alertMsg'] = 'El correo o la contraseña son incorrectos.';
  ES['auth.login.err.email'] = 'Ingresa tu dirección de correo';
  ES['auth.login.err.password'] = 'Ingresa tu contraseña';
  ES['auth.login.forgot'] = '¿Olvidaste tu contraseña?';
  ES['auth.login.forgotSent'] = 'Correo de restablecimiento enviado — revisa tu bandeja de entrada.';
  ES['auth.login.cta'] = 'Iniciar sesión';
  ES['auth.login.switchPrompt'] = '¿No tienes una cuenta?';
  ES['auth.login.switchLink'] = 'Regístrate gratis';
  ES['auth.err.wentWrong'] = 'Algo salió mal.';
  ES['auth.err.alreadyRegistered'] = 'Este correo ya está registrado. Intenta iniciar sesión en su lugar.';
  ES['auth.err.passwordShort'] = 'La contraseña debe tener al menos 8 caracteres.';
  ES['auth.err.invalidEmail'] = 'Por favor, ingresa una dirección de correo válida.';
  ES['auth.err.connection'] = 'Error de conexión. Verifica tu internet e inténtalo de nuevo.';
  ES['auth.err.loginFailed'] = 'Error al iniciar sesión.';
  ES['auth.err.notConfirmed'] = 'Por favor, verifica tu correo primero. Revisa tu bandeja de entrada para el enlace de confirmación.';
  ES['auth.err.tooMany'] = 'Demasiados intentos de inicio de sesión. Espera unos minutos e inténtalo de nuevo.';
  ES['auth.err.enterEmailFirst'] = 'Primero ingresa tu dirección de correo arriba.';
  ES['auth.err.resetFailed'] = 'No se pudo enviar el correo de restablecimiento. Verifica la dirección e inténtalo de nuevo.';

  // ---- howworks.* ----
  ES['howworks.hero.eyebrow'] = 'Simple. Verificado. Global.';
  ES['howworks.hero.title'] = 'CÓMO<br/>TRABAJAMOS<br/><span class="accent">NOSOTROS.</span>';
  ES['howworks.hero.desc'] = 'Pasos simples para construir experiencia o encontrar el talento adecuado. Sin título, sin conjeturas, sin riesgo.';
  ES['howworks.hero.tabPeople'] = 'Para Personas';
  ES['howworks.hero.tabBusiness'] = 'Para Empresas';
  ES['howworks.hero.scroll'] = 'Desplázate para explorar';
  ES['howworks.steps.tag1'] = 'Paso Uno';
  ES['howworks.steps.tag2'] = 'Paso Dos';
  ES['howworks.steps.tag3'] = 'Paso Tres';
  ES['howworks.steps.tag4'] = 'Paso Cuatro';
  ES['howworks.steps.people.s1.title'] = 'CREA TU PERFIL';
  ES['howworks.steps.people.s1.desc'] = 'Regístrate en minutos. Agrega tus habilidades, ubicación y nivel de experiencia. Verifica tu identidad para desbloquear acceso completo.';
  ES['howworks.steps.people.s1.d1'] = 'Gratis para unirse';
  ES['howworks.steps.people.s1.d2'] = '6 países';
  ES['howworks.steps.people.s1.d3'] = 'Activo en menos de 5 minutos';
  ES['howworks.steps.people.s1.d4'] = 'Identidad verificada';
  ES['howworks.steps.people.s2.title'] = 'ENCUENTRA Y POSTÚLATE A TAREAS';
  ES['howworks.steps.people.s2.desc'] = 'Explora tareas remuneradas aptas para principiantes publicadas por empresas verificadas. Filtra por habilidad, pago, fecha límite y nivel.';
  ES['howworks.steps.people.s2.d1'] = 'Tareas de diseño';
  ES['howworks.steps.people.s2.d2'] = 'Datos e Investigación';
  ES['howworks.steps.people.s2.d3'] = 'Asistencia con IA';
  ES['howworks.steps.people.s2.d4'] = 'Atención al Cliente';
  ES['howworks.steps.people.s3.title'] = 'HAZ UN GRAN TRABAJO Y COBRA';
  ES['howworks.steps.people.s3.desc'] = 'Completa la tarea, comunícate claramente y entrega tu trabajo. El pago se libera instantáneamente del depósito en garantía una vez aprobado.';
  ES['howworks.steps.people.s3.d1'] = 'Protegido en depósito';
  ES['howworks.steps.people.s3.d2'] = 'Pago instantáneo';
  ES['howworks.steps.people.s3.d3'] = 'Mensajería dentro de la plataforma';
  ES['howworks.steps.people.s3.d4'] = 'Entrega segura de archivos';
  ES['howworks.steps.people.s4.title'] = 'CONSTRUYE TU REPUTACIÓN';
  ES['howworks.steps.people.s4.desc'] = 'Cada tarea completada te otorga una calificación y un registro de prueba de trabajo. Tu Puntuación de Confianza crece y llegan mejores oportunidades.';
  ES['howworks.steps.people.s4.d1'] = 'Reseñas verificadas';
  ES['howworks.steps.people.s4.d2'] = 'Puntuación de confianza pública';
  ES['howworks.steps.people.s4.d3'] = 'Progresión de nivel';
  ES['howworks.steps.people.s4.d4'] = 'Actualización del Pasaporte de Habilidades';
  ES['howworks.steps.biz.s1.title'] = 'PUBLICA TU TAREA';
  ES['howworks.steps.biz.s1.desc'] = 'Describe lo que necesitas en lenguaje sencillo. Define tu presupuesto, fecha límite y nivel de habilidad requerido. Publicar es completamente gratis.';
  ES['howworks.steps.biz.s1.d1'] = 'Gratis para publicar';
  ES['howworks.steps.biz.s1.d2'] = 'Activo en minutos';
  ES['howworks.steps.biz.s1.d3'] = 'Emparejamiento inteligente';
  ES['howworks.steps.biz.s1.d4'] = 'Grupo de talento global';
  ES['howworks.steps.biz.s2.title'] = 'REVISA CANDIDATOS VERIFICADOS';
  ES['howworks.steps.biz.s2.desc'] = 'Explora postulantes con Puntuaciones de Confianza reales, tasas de finalización y portafolios de trabajo. Cada métrica está verificada y se rastrea de forma independiente.';
  ES['howworks.steps.biz.s2.d1'] = 'Puntuaciones de confianza visibles';
  ES['howworks.steps.biz.s2.d2'] = 'Prueba de historial laboral';
  ES['howworks.steps.biz.s2.d3'] = 'Trabajadores con ID verificada';
  ES['howworks.steps.biz.s2.d4'] = 'Insignias de nivel mostradas';
  ES['howworks.steps.biz.s3.title'] = 'SUPERVISA EL TRABAJO Y APRUEBA';
  ES['howworks.steps.biz.s3.desc'] = 'Comunícate directamente en la plataforma. Revisa entregables, solicita revisiones y aprueba, todo con el depósito en garantía protegiendo cada centavo.';
  ES['howworks.steps.biz.s3.d1'] = 'Chat dentro de la plataforma';
  ES['howworks.steps.biz.s3.d2'] = 'Transferencia segura de archivos';
  ES['howworks.steps.biz.s3.d3'] = 'Solicitudes de revisión';
  ES['howworks.steps.biz.s3.d4'] = 'Protección de depósito en garantía';
  ES['howworks.steps.biz.s4.title'] = 'CONSTRUYE TU CARTERA DE TALENTO';
  ES['howworks.steps.biz.s4.desc'] = 'Guarda a tus mejores trabajadores en grupos de talento privados. Recontrata con un clic. Contrata a trabajadores excepcionales a tiempo completo directamente a través de nosotros.';
  ES['howworks.steps.biz.s4.d1'] = 'Grupos de talento privados';
  ES['howworks.steps.biz.s4.d2'] = 'Recontratación con un clic';
  ES['howworks.steps.biz.s4.d3'] = 'Opción de contratación a tiempo completo';
  ES['howworks.steps.biz.s4.d4'] = 'Historial de rendimiento';
  ES['howworks.trust.eyebrow'] = 'Construido para la Confianza';
  ES['howworks.trust.title'] = 'SEGURO DE PRINCIPIO<br/>A FIN.';
  ES['howworks.trust.desc'] = 'Cada transacción en nuestra plataforma está protegida por capas de verificación, depósito en garantía y resolución de disputas.';
  ES['howworks.trust.card1.title'] = 'Pagos en Depósito';
  ES['howworks.trust.card1.desc'] = 'Los fondos se retienen de forma segura hasta que se aprueba el trabajo. No se libera ningún pago hasta que la empresa confirme la entrega.';
  ES['howworks.trust.card2.title'] = 'Verificación de Identidad';
  ES['howworks.trust.card2.desc'] = 'Todos los trabajadores y empresas completan la verificación de ID antes de transaccionar. Siempre sabes con quién estás tratando.';
  ES['howworks.trust.card4.title'] = 'Protección con NDA';
  ES['howworks.trust.card4.desc'] = 'Las tareas empresariales sensibles pueden cubrirse con acuerdos de confidencialidad legalmente vinculantes. El trabajo confidencial permanece confidencial.';
  ES['howworks.trust.card5.title'] = 'Resolución de Disputas';
  ES['howworks.trust.card5.desc'] = 'Si algo sale mal, nuestro equipo de mediación revisa el historial laboral, los mensajes y los entregables para llegar a una resolución justa.';
  ES['howworks.trust.card6.title'] = 'Verificación del Empleador';
  ES['howworks.trust.card6.desc'] = 'Las empresas se verifican antes de publicar tareas. Los trabajadores siempre saben que hay una empresa real y responsable detrás de cada trabajo.';
  ES['howworks.rep.eyebrow'] = 'El Sistema de Progresión';
  ES['howworks.rep.title'] = 'SUBE DE NIVEL TU<br/><span class="accent">REPUTACIÓN.</span>';
  ES['howworks.rep.desc'] = 'Cada tarea que completas construye hacia un nivel más alto, desbloqueando mejor pago, más visibilidad y mayor confianza del empleador.';
  ES['howworks.levels.rookie.name'] = 'NOVATO';
  ES['howworks.levels.rookie.tag'] = 'Nivel inicial';
  ES['howworks.levels.rookie.range'] = '0 a 4 tareas';
  ES['howworks.levels.rookie.perk1'] = 'Acceso a tareas para principiantes';
  ES['howworks.levels.rookie.perk2'] = 'Construye tu perfil';
  ES['howworks.levels.rookie.perk3'] = 'Gana tus primeras reseñas';
  ES['howworks.levels.verified.name'] = 'VERIFICADO';
  ES['howworks.levels.verified.tag'] = 'Principiante comprobado';
  ES['howworks.levels.verified.range'] = '5 a 19 tareas';
  ES['howworks.levels.verified.perk1'] = 'Insignia de verificado visible';
  ES['howworks.levels.verified.perk2'] = 'Mayor pago desbloqueado';
  ES['howworks.levels.verified.perk3'] = 'Pasaporte de Habilidades activo';
  ES['howworks.levels.trusted.name'] = 'CONFIABLE';
  ES['howworks.levels.trusted.tag'] = 'Trabajador confiable';
  ES['howworks.levels.trusted.range'] = '20 a 49 tareas';
  ES['howworks.levels.trusted.perk1'] = 'Prioridad en búsquedas';
  ES['howworks.levels.trusted.perk2'] = 'Elegible para contratación directa';
  ES['howworks.levels.trusted.perk3'] = 'Acceso a tareas con NDA';
  ES['howworks.levels.elite.name'] = 'ÉLITE';
  ES['howworks.levels.elite.tag'] = 'Talento de primer nivel';
  ES['howworks.levels.elite.range'] = '50 tareas o más';
  ES['howworks.levels.elite.perk1'] = 'Colocación de perfil destacado';
  ES['howworks.levels.elite.perk3'] = 'Flujo de contratación a tiempo completo';
  ES['howworks.passport.title'] = 'TU PASAPORTE DE HABILIDADES';
  ES['howworks.passport.desc'] = 'Tu Pasaporte de Habilidades es un registro portátil y verificado de cada tarea completada, cada reseña ganada y cada habilidad demostrada, compartible con cualquier empleador en cualquier parte del mundo.';
  ES['howworks.passport.cta1'] = 'Construir el Mío';
  ES['howworks.passport.cta2'] = 'Ver Ejemplo';
  ES['howworks.faq.heading'] = '¿PREGUNTAS?';
  ES['howworks.faq.sub'] = 'Todo lo que necesitas saber sobre nosotros.';
  ES['howworks.faq.tabGeneral'] = 'General';
  ES['howworks.faq.tabWorkers'] = 'Para Trabajadores';
  ES['howworks.faq.tabBusinesses'] = 'Para Empresas';
  ES['howworks.faq.general.q1'] = '¿Qué es YOUNGMERIT?';
  ES['howworks.faq.general.a1'] = 'YOUNGMERIT es una plataforma global que conecta a jóvenes con tareas reales y remuneradas de empresas verificadas. Al completar trabajo y ganar reseñas, los trabajadores construyen una reputación verificada de prueba de trabajo en la que los empleadores confían más que en CVs o títulos tradicionales.';
  ES['howworks.faq.general.q2'] = '¿Qué países apoya YOUNGMERIT?';
  ES['howworks.faq.general.a2'] = 'Operamos actualmente en Sudáfrica, China, Estados Unidos, Francia, España y el Reino Unido. La plataforma admite inglés, mandarín, francés y español.';
  ES['howworks.faq.general.q3'] = '¿YOUNGMERIT es gratis de usar?';
  ES['howworks.faq.general.a3'] = 'Sí. Los trabajadores pueden registrarse y postularse a tareas gratis. Las empresas pueden publicar tareas gratis. Cobramos una pequeña tarifa de servicio solo cuando una tarea se completa y paga exitosamente.';
  ES['howworks.faq.general.q4'] = '¿En qué se diferencia YOUNGMERIT de otras plataformas?';
  ES['howworks.faq.general.a4'] = 'Estamos diseñados específicamente para talento de nivel inicial. Nuestro enfoque es ayudar a personas con poca o ninguna experiencia formal a construir historiales laborales verificados. Somos una plataforma de entrada a la carrera, no un mercado genérico de trabajo independiente.';
  ES['howworks.faq.workers.q1'] = '¿Necesito experiencia para unirme?';
  ES['howworks.faq.workers.a1'] = 'No. Estamos diseñados específicamente para personas con poca o ninguna experiencia laboral formal. Las tareas aptas para principiantes siempre están disponibles y tu reputación se construye desde cero a través del trabajo que haces en la plataforma.';
  ES['howworks.faq.workers.q2'] = '¿Cómo y cuándo cobro?';
  ES['howworks.faq.workers.a2'] = 'Los pagos se mantienen en depósito en garantía y se liberan tan pronto como la empresa aprueba tu trabajo. Los fondos van directamente a tu cuenta verificada y pueden retirarse mediante PayPal, transferencia bancaria o métodos de pago locales según tu país.';
  ES['howworks.faq.workers.q3'] = '¿Qué es el Pasaporte de Habilidades?';
  ES['howworks.faq.workers.a3'] = 'El Pasaporte de Habilidades es un registro portátil y públicamente compartible de todas tus tareas completadas, calificaciones ganadas y habilidades verificadas. Puedes compartirlo con empleadores, incluirlo en solicitudes de empleo o usarlo en lugar de un CV tradicional.';
  ES['howworks.faq.workers.q4'] = '¿Cuáles son los Niveles de Talento?';
  ES['howworks.faq.workers.a4'] = 'Tenemos cuatro niveles: Novato (0 a 4 tareas), Verificado (5 a 19 tareas), Confiable (20 a 49 tareas) y Élite (50 o más tareas). Los niveles superiores desbloquean tareas mejor pagadas, colocación prioritaria en búsquedas y elegibilidad de contratación directa.';
  ES['howworks.faq.businesses.q1'] = '¿Cómo publico una tarea?';
  ES['howworks.faq.businesses.a1'] = 'Regístrate, verifica tu empresa y haz clic en Publicar una Tarea. Describe lo que necesitas, define un presupuesto y fecha límite, y especifica el nivel de habilidad requerido. Tu tarea se publica de inmediato y comienza a recibir postulaciones.';
  ES['howworks.faq.businesses.q2'] = '¿Cómo se verifica a los trabajadores?';
  ES['howworks.faq.businesses.a2'] = 'Todos los trabajadores en nuestra plataforma completan la verificación de identidad antes de transaccionar. Sus Puntuaciones de Confianza, tasas de finalización de tareas, reseñas y conteo de recontrataciones se rastrean de forma independiente y no se pueden manipular.';
  ES['howworks.faq.businesses.q3'] = '¿Qué pasa si no estoy contento con el trabajo?';
  ES['howworks.faq.businesses.a3'] = 'Los pagos se mantienen en depósito en garantía hasta que apruebas el entregable. Puedes solicitar revisiones antes de liberar los fondos. Si surge una disputa, nuestro equipo de mediación revisa toda la evidencia y llega a una resolución justa.';
  ES['howworks.faq.businesses.q4'] = '¿Puedo contratar a alguien a tiempo completo?';
  ES['howworks.faq.businesses.a4'] = 'Por supuesto. Apoyamos la contratación directa a tiempo completo desde la plataforma. Una vez que encuentres a un trabajador cuya calidad confíes, puedes hacer una oferta de empleo formal a través de nosotros.';
  ES['howworks.cta.title'] = '¿LISTO PARA<br/><span class="accent">EMPEZAR?</span>';
  ES['howworks.cta.desc'] = 'Únete a la plataforma donde el trabajo habla más fuerte que las credenciales.';
  ES['howworks.cta.findWork'] = 'Buscar Trabajo';
  ES['howworks.cta.hireTalent'] = 'Contratar Talento';

  // ==================== COUNTRY PAGES — ENGLISH (base) ====================
  I18N.en['country.common.backToHone'] = 'Back to Home';
  I18N.en['country.common.byTheNumbers'] = 'By the numbers';
  I18N.en['country.common.rootCauses'] = 'Root causes';
  I18N.en['country.common.honeTake'] = 'Our take';
  I18N.en['country.common.exploreOthers'] = 'Explore the other five countries';
  I18N.en['country.common.china'] = 'China';
  I18N.en['country.common.us'] = 'United States';
  I18N.en['country.common.france'] = 'France';
  I18N.en['country.common.spain'] = 'Spain';
  I18N.en['country.common.uk'] = 'United Kingdom';
  I18N.en['country.common.southAfrica'] = 'South Africa';

  I18N.en['country.za.hero.title'] = 'SOUTH<br/><span class="acc">AFRICA</span>';
  I18N.en['country.za.hero.quote'] = 'Nearly half of South Africa\'s young people can\'t find work. Here\'s the data behind the crisis &mdash; and why proof of work, not paper qualifications, is the way out.';
  I18N.en['country.za.stats.s1.lbl'] = 'Youth (15&ndash;34) unemployment rate, Q1 2026';
  I18N.en['country.za.stats.s2.lbl'] = 'Unemployment among ages 15&ndash;24, Q1 2026';
  I18N.en['country.za.stats.s3.lbl'] = 'Young people not in employment, education or training';
  I18N.en['country.za.stats.s4.lbl'] = 'South Africa\'s total GDP growth in 2025';
  I18N.en['country.za.stats.title'] = 'THE DATA BEHIND<br/><span class="acc">SOUTH AFRICA\'S</span> YOUTH JOBS CRISIS';
  I18N.en['country.za.causes.title'] = 'WHY IS IT SO HARD FOR YOUNG PEOPLE<br/>TO GET HIRED IN <span class="acc">SOUTH AFRICA?</span>';
  I18N.en['country.za.causes.c1.title'] = 'Weak economic growth';
  I18N.en['country.za.causes.c1.desc'] = 'GDP grew just 1.1% in 2025 while hundreds of thousands more young people entered the job market &mdash; the economy simply isn\'t creating enough new roles to absorb them.';
  I18N.en['country.za.causes.c2.title'] = 'The education-to-work gap';
  I18N.en['country.za.causes.c2.desc'] = 'Schools and universities aren\'t consistently producing graduates with the specific, work-ready skills employers say they need, leaving a persistent mismatch between qualifications and jobs.';
  I18N.en['country.za.causes.c3.title'] = 'The experience paradox';
  I18N.en['country.za.causes.c3.desc'] = 'Entry-level roles increasingly demand prior experience, shutting first-time job seekers out of the very jobs meant to give them their start.';
  I18N.en['country.za.causes.c4.title'] = 'Rising discouragement';
  I18N.en['country.za.causes.c4.desc'] = 'Nearly 3.9 million people have stopped actively searching for work altogether, meaning the official unemployment rate likely understates the true scale of joblessness.';
  I18N.en['country.za.insight'] = 'South Africa doesn\'t have an unwilling workforce &mdash; it has an <strong>unproven</strong> one. Millions of capable young people are stuck behind the same locked door: every entry-level job asks for experience that\'s impossible to get without a job in the first place. We break that loop by letting young South Africans complete real, paid tasks for real businesses and build a verified track record from day one &mdash; no degree or connections required.';
  I18N.en['country.za.sources'] = '<strong>Sources:</strong> Statistics South Africa (Stats SA) Quarterly Labour Force Survey, Q1 2026 &middot; Harambee Youth Employment Accelerator, Breaking Barriers report, 2026 &middot; Youth Employment Service (YES).';

  // ==================== COUNTRY PAGES — CHINA (base English) ====================
  I18N.en['country.cn.hero.title'] = 'CHINA<br/><span class="acc"></span>';
  I18N.en['country.cn.hero.quote'] = 'Record graduating classes are colliding with a slower economy. Here\'s why so many of China\'s young graduates can\'t find the jobs their degrees promised.';
  I18N.en['country.cn.stats.s1.lbl'] = 'Urban youth (16&ndash;24, excl. students) jobless rate, Feb 2026';
  I18N.en['country.cn.stats.s2.lbl'] = 'All-time record high reached in June 2023';
  I18N.en['country.cn.stats.s3.lbl'] = 'Record-breaking single-year graduating class';
  I18N.en['country.cn.stats.s4.lbl'] = 'Overall national urban unemployment, for comparison';
  I18N.en['country.cn.stats.title'] = 'THE DATA BEHIND<br/><span class="acc">CHINA\'S</span> YOUTH JOBS CRISIS';
  I18N.en['country.cn.causes.title'] = 'WHY IS IT SO HARD FOR YOUNG PEOPLE<br/>TO GET HIRED IN <span class="acc">CHINA?</span>';
  I18N.en['country.cn.causes.c1.title'] = 'Record graduate volume';
  I18N.en['country.cn.causes.c1.desc'] = 'Successive record-breaking cohorts of university graduates &mdash; over 12 million in a single year &mdash; are entering a job market that isn\'t growing fast enough to absorb them.';
  I18N.en['country.cn.causes.c2.title'] = 'Property and manufacturing slowdown';
  I18N.en['country.cn.causes.c2.desc'] = 'A prolonged downturn in real estate and softer manufacturing and export demand have cooled hiring in sectors that traditionally absorbed young workers.';
  I18N.en['country.cn.causes.c3.title'] = 'A widening skills mismatch';
  I18N.en['country.cn.causes.c3.desc'] = 'Many graduates are trained for white-collar urban careers, but the openings that exist increasingly sit in different sectors or demand different, more practical skills.';
  I18N.en['country.cn.causes.c4.title'] = 'Tighter credit for small employers';
  I18N.en['country.cn.causes.c4.desc'] = 'Small and medium businesses, historically China\'s biggest employers of young people, face tighter financing conditions and are hiring more cautiously.';
  I18N.en['country.cn.insight'] = 'In a market this competitive, a degree alone no longer opens doors &mdash; <strong>proof of what you can actually do</strong> does. We give young people in China a way to build a verified track record of real completed work, so employers can see capability directly instead of relying on credentials alone in an oversaturated graduate pool.';
  I18N.en['country.cn.sources'] = '<strong>Sources:</strong> National Bureau of Statistics of China (NBS), monthly urban surveyed unemployment data, 2025&ndash;2026 &middot; Asia Society Policy Institute &middot; Nippon.com in-depth reporting.';

  // ==================== COUNTRY PAGES — FRANCE (base English) ====================
  I18N.en['country.fr.hero.title'] = 'FRANCE<br/><span class="acc"></span>';
  I18N.en['country.fr.hero.quote'] = 'France\'s youth unemployment rate runs at more than double the national average. The barrier isn\'t ability &mdash; it\'s a labour market built around credentials and caution.';
  I18N.en['country.fr.stats.s1.lbl'] = 'Youth (15&ndash;24) unemployment rate, early 2026';
  I18N.en['country.fr.stats.s2.lbl'] = 'Overall national unemployment rate, for comparison';
  I18N.en['country.fr.stats.s3.lbl'] = 'Higher unemployment risk for those with only a basic diploma';
  I18N.en['country.fr.stats.s4.lbl'] = 'Record peak youth unemployment reached in 2013';
  I18N.en['country.fr.stats.title'] = 'THE DATA BEHIND<br/><span class="acc">FRANCE\'S</span> YOUTH JOBS CRISIS';
  I18N.en['country.fr.causes.title'] = 'WHY IS IT SO HARD FOR YOUNG PEOPLE<br/>TO GET HIRED IN <span class="acc">FRANCE?</span>';
  I18N.en['country.fr.causes.c1.title'] = 'A steep credential ladder';
  I18N.en['country.fr.causes.c1.desc'] = 'France\'s labour market places heavy weight on formal qualifications and institutional pedigree, meaning the type and prestige of a diploma can matter as much as demonstrated ability.';
  I18N.en['country.fr.causes.c2.title'] = 'Rigid hiring and firing rules';
  I18N.en['country.fr.causes.c2.desc'] = 'Strong employment protections make employers cautious about first hires, since letting an underperforming junior go later is costly and slow.';
  I18N.en['country.fr.causes.c3.title'] = 'An uneven apprenticeship pipeline';
  I18N.en['country.fr.causes.c3.desc'] = 'Vocational and apprenticeship routes exist but don\'t carry the same prestige as academic tracks, funnelling most competition through a narrower set of traditional paths.';
  I18N.en['country.fr.causes.c4.title'] = 'Regional and sectoral gaps';
  I18N.en['country.fr.causes.c4.desc'] = 'Youth joblessness runs far higher in some regions and among those with no diploma at all, showing the burden of the crisis isn\'t spread evenly across the country.';
  I18N.en['country.fr.insight'] = 'France\'s system rewards the <strong>right paper</strong> over proven ability. We give young people a second path: complete real paid work for real businesses, build a verified reputation, and let demonstrated skill &mdash; not just a diploma\'s prestige &mdash; open the door to full-time employment.';
  I18N.en['country.fr.sources'] = '<strong>Sources:</strong> Eurostat, youth unemployment rate (15&ndash;24), 2025&ndash;2026 &middot; Trading Economics &middot; Minist&egrave;re de l\'&Eacute;ducation nationale, de l\'Enseignement sup&eacute;rieur et de la Recherche.';

  // ==================== COUNTRY PAGES — SPAIN (base English) ====================
  I18N.en['country.es.hero.title'] = 'SPAIN<br/><span class="acc"></span>';
  I18N.en['country.es.hero.quote'] = 'Spain still has the highest youth unemployment rate in the EU. A split, seasonal labour market keeps young workers locked out of stable, long-term roles.';
  I18N.en['country.es.stats.s1.lbl'] = 'Youth (under-25) unemployment rate, Jan 2026';
  I18N.en['country.es.stats.s2.lbl'] = 'Record peak reached in 2013, for historical context';
  I18N.en['country.es.stats.s3.lbl'] = 'EU-wide average youth unemployment, for comparison';
  I18N.en['country.es.stats.s4.lbl'] = 'Registered under-25 jobless at end of 2025 &mdash; a record low';
  I18N.en['country.es.stats.title'] = 'THE DATA BEHIND<br/><span class="acc">SPAIN\'S</span> YOUTH JOBS CRISIS';
  I18N.en['country.es.causes.title'] = 'WHY IS IT SO HARD FOR YOUNG PEOPLE<br/>TO GET HIRED IN <span class="acc">SPAIN?</span>';
  I18N.en['country.es.causes.c1.title'] = 'A split labour market';
  I18N.en['country.es.causes.c1.desc'] = 'A long-standing divide between heavily protected permanent contracts and far more precarious temporary ones concentrates insecure, short-term work among the young.';
  I18N.en['country.es.causes.c2.title'] = 'A seasonal, tourism-heavy economy';
  I18N.en['country.es.causes.c2.desc'] = 'Large parts of Spain\'s economy &mdash; tourism, hospitality, agriculture &mdash; are seasonal by nature, generating churn rather than stable, long-term entry-level careers.';
  I18N.en['country.es.causes.c3.title'] = 'Sharp regional disparity';
  I18N.en['country.es.causes.c3.desc'] = 'Unemployment runs markedly higher in the south, such as Andalusia, than the national average, reflecting deep and persistent regional imbalances.';
  I18N.en['country.es.causes.c4.title'] = 'An education-to-market mismatch';
  I18N.en['country.es.causes.c4.desc'] = 'Persistent gaps between what schools and universities teach and what employers actually need contribute to longer, harder job searches for young graduates.';
  I18N.en['country.es.insight'] = 'Spain\'s youth unemployment rate has more than halved since its 2013 peak &mdash; but it\'s still the <strong>highest in the EU</strong>. We give young Spaniards a way to build continuous proof of work across a fragmented, seasonal job market, turning short-term gigs into a verified reputation employers can trust for permanent roles.';
  I18N.en['country.es.sources'] = '<strong>Sources:</strong> Instituto Nacional de Estad&iacute;stica (INE), Encuesta de Poblaci&oacute;n Activa &middot; Eurostat, youth unemployment rate &middot; Trading Economics.';

  // ==================== COUNTRY PAGES — UNITED KINGDOM (base English) ====================
  I18N.en['country.gb.hero.title'] = 'UNITED<br/><span class="acc">KINGDOM</span>';
  I18N.en['country.gb.hero.quote'] = 'UK youth unemployment just hit an 11-year high. Degrees keep getting more common &mdash; and, paradoxically, harder to turn into a first job.';
  I18N.en['country.gb.stats.s1.lbl'] = 'Youth (16&ndash;24) unemployment rate, July 2026 &mdash; an 11-year high';
  I18N.en['country.gb.stats.s2.lbl'] = 'Share of graduates working in non-graduate roles';
  I18N.en['country.gb.stats.s3.lbl'] = 'Young people not in education, employment or training (NEET) &mdash; a series record';
  I18N.en['country.gb.stats.s4.lbl'] = 'Young jobseekers out of work for more than a year';
  I18N.en['country.gb.stats.title'] = 'THE DATA BEHIND<br/><span class="acc">UNITED KINGDOM\'S</span> YOUTH JOBS CRISIS';
  I18N.en['country.gb.causes.title'] = 'WHY IS IT SO HARD FOR YOUNG PEOPLE<br/>TO GET HIRED IN <span class="acc">UNITED KINGDOM?</span>';
  I18N.en['country.gb.causes.c1.title'] = 'Credential inflation';
  I18N.en['country.gb.causes.c1.desc'] = 'As more people earn degrees, employers have quietly raised entry requirements without job complexity actually rising, turning the degree into a screening filter rather than a genuine skill signal.';
  I18N.en['country.gb.causes.c2.title'] = 'Vanishing entry-level postings';
  I18N.en['country.gb.causes.c2.desc'] = 'Starter-job vacancies have fallen to some of their lowest levels in over a decade outside the pandemic, shrinking the number of first rungs on the career ladder.';
  I18N.en['country.gb.causes.c3.title'] = 'The rising cost of a first hire';
  I18N.en['country.gb.causes.c3.desc'] = 'Higher employer payroll taxes and minimum wage increases have made junior hires more expensive right as employer demand has softened.';
  I18N.en['country.gb.causes.c4.title'] = 'Long-term scarring';
  I18N.en['country.gb.causes.c4.desc'] = 'With over a fifth of young jobseekers out of work for a year or more, extended joblessness itself becomes a barrier, as employers grow wary of lengthening employment gaps.';
  I18N.en['country.gb.insight'] = 'A degree in the UK increasingly proves you can <strong>study</strong> &mdash; not that you can <strong>do the job</strong>. We close that gap by letting young people complete real paid tasks and build a verified skills record from day one, giving employers a faster, more trustworthy signal than credentials alone.';
  I18N.en['country.gb.sources'] = '<strong>Sources:</strong> Office for National Statistics (ONS), Labour Market Statistics, July 2026 &middot; Institute for the Future of Work (IFOW) &middot; Work Foundation, Lancaster University.';

  // ==================== COUNTRY PAGES — UNITED STATES (base English) ====================
  I18N.en['country.us.hero.title'] = 'UNITED<br/><span class="acc">STATES</span>';
  I18N.en['country.us.hero.quote'] = 'For the first time in decades, recent college graduates face higher unemployment than the national average. The degree isn\'t the problem &mdash; the entry-level ladder is missing.';
  I18N.en['country.us.stats.s1.lbl'] = 'Unemployment for recent grads aged 22&ndash;27, Q1 2026';
  I18N.en['country.us.stats.s2.lbl'] = 'Share of recent grads working jobs that don\'t require a degree';
  I18N.en['country.us.stats.s3.lbl'] = 'Unemployment for degree-holders 25+, for comparison';
  I18N.en['country.us.stats.s4.lbl'] = 'Year-over-year drop in entry-level campus job postings';
  I18N.en['country.us.stats.title'] = 'THE DATA BEHIND<br/><span class="acc">UNITED STATES\'S</span> YOUTH JOBS CRISIS';
  I18N.en['country.us.causes.title'] = 'WHY IS IT SO HARD FOR YOUNG PEOPLE<br/>TO GET HIRED IN <span class="acc">UNITED STATES?</span>';
  I18N.en['country.us.causes.c1.title'] = 'Grad unemployment now beats the national rate';
  I18N.en['country.us.causes.c1.desc'] = 'For five straight years, unemployment for recent college graduates has exceeded the overall national rate &mdash; something almost unheard of between 1990 and 2018.';
  I18N.en['country.us.causes.c2.title'] = 'Fewer entry-level openings';
  I18N.en['country.us.causes.c2.desc'] = 'Industries that traditionally absorbed new graduates have been shedding jobs, and campus-focused postings are down sharply year over year even as applications per role keep climbing.';
  I18N.en['country.us.causes.c3.title'] = 'The remote-work mentorship gap';
  I18N.en['country.us.causes.c3.desc'] = 'Research points to employers being wary of hiring inexperienced people into remote-first roles, where the informal on-the-job mentorship that turns a new grad into a productive worker is harder to provide.';
  I18N.en['country.us.causes.c4.title'] = 'Outcomes vary enormously by major';
  I18N.en['country.us.causes.c4.desc'] = 'Underemployment ranges from under 20% in fields like nursing and computer science to over 60% in some humanities and social-science majors, showing this is an entry-level problem, not proof a degree stopped paying off.';
  I18N.en['country.us.insight'] = 'The data is clear: it\'s not that a degree stopped mattering, it\'s that there\'s no reliable way to prove you\'re <strong>ready for the job</strong> before someone gives you one. We let young Americans complete real paid tasks and build a verified work history that speaks louder than a GPA &mdash; closing the exact entry-level gap that\'s driving grad unemployment above the national average.';
  I18N.en['country.us.sources'] = '<strong>Sources:</strong> Federal Reserve Bank of New York, The Labor Market for Recent College Graduates, Q1 2026 &middot; National Association of Colleges and Employers (NACE) &middot; Economic Policy Institute (EPI).';

  // ==================== MISSING-FROM-EN FIXUPS (found while wiring up additional pages) ====================
  I18N.en['careers.hero.breadcrumb'] = 'Careers';
  I18N.en['blog.hero.live'] = 'Live';
  I18N.en['blog.post.voice'] = 'Voice';
  I18N.en['blog.empty.none'] = 'No posts match your search.';
  I18N.en['cookieBanner.title'] = 'We use cookies';
  I18N.en['cookieBanner.desc'] = 'We use essential cookies to make things work. With your consent, we\'d also like to use analytics and preference cookies to improve your experience.';
  I18N.en['cookieBanner.acceptAll'] = 'Accept All';
  I18N.en['cookieBanner.rejectAll'] = 'Reject Non-Essential';
  I18N.en['cookieBanner.manage'] = 'Manage Preferences';
  I18N.en['waitlist.form.email.duplicate'] = 'This email is already on the waitlist \u2014 we\'ll be in touch soon.';
  I18N.en['waitlist.form.error.generic'] = 'Something went wrong. Please try again.';
  I18N.en['contact.form.error.generic'] = 'Something went wrong sending your message. Please try again or email us directly.';
  I18N.en['blog.post.sample'] = 'Sample';
  I18N.en['blog.post.deleteConfirm'] = 'Delete this post? This can\'t be undone.';
  I18N.en['blog.post.deleted'] = 'Post deleted';
  I18N.en['blog.post.saved'] = 'Saved to your profile';
  I18N.en['blog.post.unsaved'] = 'Removed from saved';
  I18N.en['blog.post.published'] = 'Published to the community feed';
  I18N.en['blog.voice.micError'] = 'Couldn\'t access the microphone. Try again or check your browser settings.';
  I18N.en['blog.voice.httpsNeeded'] = 'Mic access needs HTTPS &mdash; this will work once the page is hosted online, not opened as a local file.';
  I18N.en['blog.voice.limitReached'] = '30-second limit reached for now';
  I18N.en['blog.voice.permissionDenied'] = 'Microphone access is blocked. Check the site permissions in your browser, allow the mic, then try again.';
  I18N.en['blog.voice.noMic'] = 'No microphone was found on this device';
  I18N.en['blog.voice.recordFirst'] = 'Record a voice note first';
  I18N.en['blog.voice.published'] = 'Voice Drop published';
  I18N.en['profile.toast.saved'] = 'Saved';
  I18N.en['profile.toast.portfolioAdded'] = 'Portfolio item added';
  I18N.en['profile.toast.profileUpdated'] = 'Profile updated';
  I18N.en['profile.toast.bioUpdated'] = 'Bio updated';
  I18N.en['profile.toast.detailsSaved'] = 'Details saved';
  I18N.en['profile.toast.coverUpdated'] = 'Cover updated';
  I18N.en['profile.toast.photoUpdated'] = 'Photo updated';
  I18N.en['profile.toast.coverUploaded'] = 'Cover uploaded &mdash; click Save';
  I18N.en['profile.toast.cvUploaded'] = 'CV uploaded';
  I18N.en['profile.toast.removed'] = 'Removed';
  I18N.en['legal.englishOnlyNotice'] = 'This document is provided in English only. If you have questions, please <a href="contact.html" style="color:inherit;text-decoration:underline;">contact our support team</a> in your preferred language.';
  I18N.en['auth.reset.title'] = 'SET A NEW PASSWORD.';
  I18N.en['auth.reset.desc'] = 'Choose a new password for your account.';
  I18N.en['auth.reset.newPassword'] = 'New password';
  I18N.en['auth.reset.confirmPassword'] = 'Confirm new password';
  I18N.en['auth.reset.err.mismatch'] = 'Passwords do not match';
  I18N.en['auth.reset.err.generic'] = 'Something went wrong. Please try again.';
  I18N.en['auth.reset.cta'] = 'Set new password';
  I18N.en['auth.reset.successTitle'] = 'PASSWORD UPDATED.';
  I18N.en['auth.reset.successMsg'] = 'Taking you to your profile\u2026';

  // ==================== FRENCH TRANSLATIONS ====================
  var FR = {};
  for (var key2 in I18N.en) {
    FR[key2] = I18N.en[key2];
  }
  FR['nav.home'] = 'Accueil';
  FR['nav.findWork'] = 'Trouver un Travail';
  FR['nav.hireTalent'] = 'Recruter des Talents';
  FR['nav.howItWorks'] = 'Comment Ça Marche';
  FR['nav.about'] = 'À Propos';
  FR['nav.community'] = 'Communauté';
  FR['nav.myProfile'] = 'Mon Profil';
  FR['nav.logIn'] = 'Connexion';
  FR['nav.signUp'] = "S'inscrire";
  FR['nav.signUpFree'] = "S'inscrire Gratuitement";
  FR['nav.rateUs'] = 'Notez-nous';
  FR['nav.navigation'] = 'Navigation';
  FR['nav.myProfileLabel'] = 'Mon Profil';
  FR['nav.logOut'] = 'Se Déconnecter';
  FR['nav.profileMenu.profile'] = 'Profil';
  FR['nav.profileMenu.notifications'] = 'Paramètres de Notification';
  FR['nav.profileMenu.language'] = 'Langue';
  FR['nav.profileMenu.privacy'] = 'Politique de Confidentialité';
  FR['nav.profileMenu.terms'] = 'Conditions';
  FR['lang.switchLabel'] = 'Langue';
  FR['footer.platform'] = 'Plateforme';
  FR['footer.company'] = 'Entreprise';
  FR['footer.trustSafety'] = 'Confiance et Sécurité';
  FR['footer.findWork'] = 'Trouver un Travail';
  FR['footer.hireTalent'] = 'Recruter des Talents';
  FR['footer.howItWorks'] = 'Comment Ça Marche';
  FR['footer.resources'] = 'Ressources';
  FR['footer.aboutYOUNGMERIT'] = 'À Propos de Nous';
  FR['footer.careers'] = 'Carrières';
  FR['footer.community'] = 'Communauté';
  FR['footer.contact'] = 'Contact';
  FR['footer.identityVerification'] = "Vérification d'Identité";
  FR['footer.disputeSystem'] = 'Système de Litiges';
  FR['footer.privacyPolicy'] = 'Politique de Confidentialité';
  FR['footer.termsOfService'] = "Conditions d'Utilisation";
  FR['footer.cookieSettings'] = 'Paramètres des Cookies';
  FR['footer.tagline'] = "Notre mission est de créer un monde où les opportunités se méritent, et ne sont pas données.";
  FR['footer.copyright'] = 'Copyright 2026 YOUNGMERIT. Tous droits réservés.';
  FR['footer.builtFor'] = 'Conçu pour les jeunes. Approuvé par les entreprises.';
  FR['idx.hero.eyebrow'] = 'Accès anticipé désormais ouvert';
  FR['idx.hero.title1'] = "L'EXPÉRIENCE";
  FR['idx.hero.title2'] = 'AVANT';
  FR['idx.hero.title3'] = "L'EMPLOI.";
  FR['idx.hero.explainer'] = 'Nous sommes la plateforme où les jeunes accomplissent de <strong>vraies missions rémunérées</strong> pour de vraies entreprises, en bâtissant un <strong>historique de travail vérifié</strong> qui ouvre des portes — sans diplôme, sans relations, sans années d\'expérience.';
  FR['idx.hero.ctaFind'] = 'Commencer à Chercher';
  FR['idx.hero.ctaHire'] = 'Recruter des Talents';
  FR['idx.hero.note'] = 'Gratuit pour rejoindre. Sans carte bancaire. Annulez à tout moment.';
  FR['idx.strip.countries.title'] = '6 Pays';
  FR['idx.strip.countries.desc'] = 'Afrique du Sud, Chine, États-Unis, France, Espagne et Royaume-Uni';
  FR['idx.strip.verified.title'] = 'Vérifié par des preuves';
  FR['idx.strip.verified.desc'] = 'Scores de confiance construits à partir de travail réellement accompli';
  FR['idx.strip.escrow.title'] = 'Protégé par séquestre';
  FR['idx.strip.escrow.desc'] = 'Chaque paiement est retenu en sécurité jusqu\'à approbation du travail';
  FR['idx.strip.career.title'] = "Axé sur la carrière";
  FR['idx.strip.career.desc'] = "Conçu pour faire passer les travailleurs des missions à l'emploi à temps plein";
  FR['idx.trust.label'] = 'Conçu pour être utilisé par';
  FR['idx.for.eyebrow'] = 'À Qui Nous Nous Adressons';
  FR['idx.for.title'] = 'DEUX PROBLÈMES.<br/>UNE PLATEFORME.';
  FR['loc.all'] = 'Tous les Lieux';
  FR['loc.za'] = 'Afrique du Sud';
  FR['loc.es'] = 'Espagne';
  FR['loc.fr'] = 'France';
  FR['loc.gb'] = 'Royaume-Uni';
  FR['loc.cn'] = 'Chine';
  FR['loc.us'] = 'États-Unis';

  // ---- idx.* additions ----
  FR['idx.for.workers.label'] = 'Pour les Jeunes';
  FR['idx.for.workers.title'] = 'CONSTRUISEZ UNE<br/>VRAIE EXPÉRIENCE.';
  FR['idx.for.workers.desc'] = 'Pas de CV. Pas de diplôme. Pas de contacts nécessaires. Réalisez de vraies tâches, gagnez de l\'argent réel et bâtissez une réputation vérifiée qui vous fait vraiment embaucher.';
  FR['idx.for.workers.perk1'] = 'Réalisez de vraies tâches et gagnez de l\'argent dès le premier jour';
  FR['idx.for.workers.perk2'] = 'Bâtissez un score de confiance que les employeurs respectent vraiment';
  FR['idx.for.workers.perk3'] = 'Obtenez votre Skill Passport — preuve de travail portable, pour toujours';
  FR['idx.for.workers.perk4'] = 'Progressez de Débutant à Élite au fur et à mesure que vous accomplissez du travail';
  FR['idx.for.workers.cta'] = 'Chercher du Travail';
  FR['idx.for.biz.label'] = 'Pour les Entreprises';
  FR['idx.for.biz.title'] = 'RECRUTEZ EN<br/>TOUTE CONFIANCE.';
  FR['idx.for.biz.desc'] = 'Arrêtez d\'embaucher au hasard. Chaque travailleur sur notre plateforme possède un historique vérifié de travail réellement accompli, de vraies évaluations et de vraies réembauches — pas seulement un CV.';
  FR['idx.for.biz.perk1'] = 'Publiez des tâches gratuitement — payez uniquement une fois le travail terminé';
  FR['idx.for.biz.perk2'] = 'Accédez à des talents présélectionnés avec de vrais antécédents vérifiés';
  FR['idx.for.biz.perk3'] = 'Chaque paiement est protégé par séquestre jusqu\'à votre approbation de la livraison';
  FR['idx.for.biz.perk4'] = 'Constituez un vivier de talents privé et réembauchez instantanément vos meilleurs travailleurs';
  FR['idx.for.biz.cta'] = 'Recruter des Talents';
  FR['idx.prob.title'] = 'LE MONDE A FAIT DE<br/>L\'EXPÉRIENCE<br/><span class="acc">UNE PORTE VERROUILLÉE.</span>';
  FR['idx.prob.desc'] = 'Dans six grandes économies, des millions de jeunes sont prêts à travailler — mais chaque emploi de premier échelon exige une expérience impossible à acquérir sans avoir déjà un emploi. Nous brisons ce cercle.';
  FR['idx.country.za.name'] = 'Afrique du Sud';
  FR['idx.country.za.lbl'] = 'Chômage des jeunes';
  FR['idx.country.cn.name'] = 'Chine';
  FR['idx.country.cn.lbl'] = 'Chômage des diplômés';
  FR['idx.country.us.name'] = 'États-Unis';
  FR['idx.country.us.lbl'] = 'Saturation des diplômés';
  FR['idx.country.fr.name'] = 'France';
  FR['idx.country.fr.lbl'] = 'Barrières liées aux qualifications';
  FR['idx.country.es.name'] = 'Espagne';
  FR['idx.country.es.lbl'] = 'Chômage des jeunes';
  FR['idx.country.gb.name'] = 'Royaume-Uni';
  FR['idx.country.gb.lbl'] = 'Inflation de l\'expérience';
  FR['idx.countries.tagline'] = 'Cliquez pour en savoir plus sur chaque pays';
  FR['idx.probBox.title'] = 'LE <span class="acc">MANQUE DE PREUVES</span><br/>EST BIEN RÉEL.';
  FR['idx.probBox.desc'] = 'Les jeunes ne manquent pas de compétences. Ils manquent d\'un moyen de le prouver. C\'est le seul problème que nous existons pour résoudre — grâce à du vrai travail, de vraies évaluations et un vrai historique vérifié.';
  FR['idx.probBox.item1.title'] = 'Pas d\'expérience, pas d\'accès';
  FR['idx.probBox.item1.desc'] = 'Les entreprises exigent deux à cinq ans d\'expérience pour des postes qui s\'apprennent en deux semaines.';
  FR['idx.probBox.item2.title'] = 'Les entreprises ne trouvent pas de jeunes talents dignes de confiance';
  FR['idx.probBox.item2.desc'] = 'Embaucher un débutant sans historique vérifié est un pari que la plupart ne peuvent se permettre.';
  FR['idx.probBox.item3.title'] = 'Nous créons l\'historique';
  FR['idx.probBox.item3.desc'] = 'De vraies tâches. De vraies évaluations. De vraies preuves — avant même l\'entretien d\'embauche.';
  FR['idx.how.eyebrow'] = 'Le Processus';
  FR['idx.how.title'] = 'SIMPLE.<br/><span class="acc">QUATRE ÉTAPES.</span>';
  FR['idx.how.desc'] = 'Que vous cherchiez du travail ou que vous souhaitiez recruter, le processus est conçu pour être simple, sûr et rapide dès le premier jour.';
  FR['idx.how.tabPeople'] = 'Pour les Particuliers';
  FR['idx.how.tabBiz'] = 'Pour les Entreprises';
  FR['idx.how.seeFull'] = 'Voir le détail complet';
  FR['idx.how.p1.title'] = 'Créez Votre Profil';
  FR['idx.how.p1.desc'] = 'Inscrivez-vous gratuitement, ajoutez vos compétences et vérifiez votre identité. Moins de cinq minutes.';
  FR['idx.how.p2.title'] = 'Postulez à des Tâches';
  FR['idx.how.p2.desc'] = 'Parcourez de vraies tâches rémunérées publiées par des entreprises vérifiées et postulez en un clic.';
  FR['idx.how.p3.title'] = 'Terminez et Soyez Payé';
  FR['idx.how.p3.desc'] = 'Livrez un travail de qualité, obtenez l\'approbation et recevez le paiement instantanément depuis le séquestre.';
  FR['idx.how.p4.title'] = 'Construisez Votre Réputation';
  FR['idx.how.p4.desc'] = 'Chaque tâche génère un avis et améliore votre score de confiance. Progressez et débloquez de meilleurs contrats.';
  FR['idx.how.b1.title'] = 'Publiez une Tâche';
  FR['idx.how.b1.desc'] = 'Décrivez vos besoins, fixez votre budget et publiez en quelques minutes. Publier est gratuit.';
  FR['idx.how.b2.title'] = 'Examinez les Candidatures';
  FR['idx.how.b2.desc'] = 'Parcourez des talents avec des scores de confiance vérifiés, des taux de réalisation et de vrais portfolios.';
  FR['idx.how.b3.title'] = 'Suivez et Approuvez';
  FR['idx.how.b3.desc'] = 'Communiquez, examinez les livrables et libérez le paiement uniquement une fois pleinement satisfait.';
  FR['idx.how.b4.title'] = 'Constituez Votre Vivier de Talents';
  FR['idx.how.b4.desc'] = 'Enregistrez les meilleurs travailleurs, réembauchez-les instantanément et proposez des postes à temps plein à vos meilleurs éléments.';
  FR['idx.rep.eyebrow'] = 'Notre Avantage';
  FR['idx.rep.title'] = 'VOTRE RÉPUTATION<br/>EST VOTRE<br/><span class="acc">MONNAIE.</span>';
  FR['idx.rep.desc'] = 'Chaque tâche accomplie construit quelque chose de durable. Un score de confiance qui s\'accumule, un passeport de compétences qui vous suit, et un historique de travail plus parlant que n\'importe quel CV.';
  FR['idx.rep.feat1'] = 'Skill Passport — historique de travail vérifié et portable auquel les employeurs font confiance';
  FR['idx.rep.feat2'] = 'Score de confiance public qui augmente à chaque tâche accomplie';
  FR['idx.rep.feat3'] = 'Progression de niveau : Débutant, Vérifié, De Confiance et Élite';
  FR['idx.rep.feat4'] = 'Suivi des réembauches — le signal de qualité le plus fort';
  FR['idx.rep.cta'] = 'Comment Fonctionne la Réputation';
  FR['idx.rep.card.role'] = 'Assistante Virtuelle, Johannesburg';
  FR['idx.rep.card.badge'] = 'DE CONFIANCE';
  FR['idx.rep.card.scoreSub'] = 'Excellent — 128 avis vérifiés';
  FR['idx.rep.card.tasksDone'] = 'Tâches Réalisées';
  FR['idx.rep.card.repeatHires'] = 'Réembauches';
  FR['idx.rep.card.ndaSafe'] = 'Sécurisé par NDA';
  FR['idx.early.eyebrow'] = 'Pourquoi rejoindre maintenant';
  FR['idx.early.title'] = 'NOUS NE FAISONS QUE<br/><span class="acc">COMMENCER.</span>';
  FR['idx.early.desc'] = 'Nous avons été lancés en 2026. Il n\'y a pas de chiffres d\'inscrits gonflés ici. Ce que nous avons est plus précieux que des chiffres — la chance d\'être parmi les premiers.';
  FR['idx.early.card1.title'] = 'Devenez Membre Fondateur';
  FR['idx.early.card1.desc'] = 'Les premiers travailleurs et entreprises sur notre plateforme façonnent sa croissance. Votre profil figurera parmi les toutes premières réputations vérifiées du réseau.';
  FR['idx.early.card2.title'] = 'Construisez Avant la Foule';
  FR['idx.early.card2.desc'] = 'Chaque tâche que vous accomplissez maintenant est une preuve de travail qui existe avant que le marché ne sature. Les précurseurs bâtissent les réputations les plus solides lorsque la demande de recrutement arrive.';
  FR['idx.early.card3.title'] = 'Aidez-nous à Bien le Construire';
  FR['idx.early.card3.desc'] = 'Nous nous lançons dans six pays car le problème est partout. Vos retours durant ces premières semaines façonnent directement le produit, les catégories et les fonctionnalités que nous développerons ensuite.';
  FR['idx.early.strip.title'] = 'PRÊT À FAIRE<br/>PARTIE DES PREMIERS ?';
  FR['idx.early.strip.desc'] = 'Rejoignez-nous maintenant. Réalisez votre première tâche, obtenez votre premier avis et possédez une réputation fondatrice sur la plateforme avant l\'arrivée du marché.';
  FR['idx.early.strip.ctaSignup'] = 'Inscrivez-vous Gratuitement';
  FR['idx.early.strip.ctaPost'] = 'Publier une Tâche';

  // ---- fw/ht additions ----
  FR['fw.pageTitle1'] = 'TROUVER';
  FR['fw.pageTitle2'] = 'DU TRAVAIL.';
  FR['fw.pageSub'] = 'Parcourez les tâches d\'entreprises vérifiées. Soyez le premier à bâtir votre réputation lors de notre lancement — inscrivez-vous dès maintenant pour être averti.';
  FR['fw.search'] = 'Rechercher';
  FR['fw.searchPlaceholder'] = 'Rechercher des tâches, compétences, mots-clés...';
  FR['fw.filter.allCategories'] = 'Toutes les Catégories';
  FR['fw.filter.design'] = 'Design & Créatif';
  FR['fw.filter.social'] = 'Réseaux Sociaux';
  FR['fw.filter.admin'] = 'Support Administratif';
  FR['fw.filter.data'] = 'Saisie de Données';
  FR['fw.filter.research'] = 'Recherche';
  FR['fw.filter.support'] = 'Support Client';
  FR['fw.filter.ai'] = 'Assistance IA';
  FR['fw.filter.translation'] = 'Traduction';
  FR['fw.filter.anyLevel'] = 'Tout Niveau';
  FR['fw.filter.beginner'] = 'Débutant';
  FR['fw.filter.intermediate'] = 'Intermédiaire';
  FR['fw.filter.advanced'] = 'Avancé';
  FR['fw.sort.newest'] = 'Plus Récentes';
  FR['fw.sort.payHigh'] = 'Rémunération la Plus Élevée';
  FR['fw.sort.payLow'] = 'Rémunération la Plus Basse';
  FR['fw.sort.beginnerFriendly'] = 'Adapté aux Débutants';
  FR['fw.pill.allTasks'] = 'Toutes les Tâches';
  FR['fw.pill.design'] = 'Design';
  FR['fw.pill.social'] = 'Réseaux Sociaux';
  FR['fw.pill.admin'] = 'Administratif';
  FR['fw.pill.data'] = 'Saisie de Données';
  FR['fw.pill.research'] = 'Recherche';
  FR['fw.pill.ai'] = 'Assistance IA';
  FR['fw.pill.translation'] = 'Traduction';
  FR['fw.pill.support'] = 'Support';
  FR['fw.pill.writing'] = 'Rédaction et Contenu';
  FR['fw.pill.video'] = 'Vidéo et Audio';
  FR['fw.pill.tech'] = 'Web et Technologie';
  FR['fw.pill.sales'] = 'Ventes et Prospection';
  FR['fw.pill.photography'] = 'Photographie';
  FR['fw.sidebar.budgetRange'] = 'Fourchette de Budget';
  FR['fw.sidebar.anyBudget'] = 'Tout budget';
  FR['fw.sidebar.upTo'] = 'Jusqu\'à';
  FR['fw.sidebar.deadline'] = 'Date Limite';
  FR['fw.sidebar.due1day'] = 'Échéance dans 1 jour';
  FR['fw.sidebar.due3days'] = 'Échéance dans 3 jours';
  FR['fw.sidebar.due1week'] = 'Échéance dans 1 semaine';
  FR['fw.sidebar.flexible'] = 'Flexible';
  FR['fw.sidebar.experienceLevel'] = 'Niveau d\'Expérience';
  FR['fw.sidebar.workType'] = 'Type de Travail';
  FR['fw.sidebar.oneOff'] = 'Tâche Unique';
  FR['fw.sidebar.apprenticeship'] = 'Apprentissage';
  FR['fw.sidebar.ongoing'] = 'Projet Continu';
  FR['fw.sidebar.clearAll'] = 'Effacer Tous les Filtres';
  FR['fw.passport.title'] = 'PASSEPORT DE COMPÉTENCES';
  FR['fw.passport.desc'] = 'Chaque tâche accomplie est vérifiée et ajoutée à votre historique de travail portable. Les employeurs lui font davantage confiance qu\'à un CV.';
  FR['fw.passport.cta'] = 'Créez Votre Passeport';
  FR['fw.banner.title'] = 'Nous arrivons bientôt.';
  FR['fw.banner.desc'] = 'De vraies tâches d\'entreprises vérifiées arrivent bientôt. Inscrivez-vous dès maintenant pour être averti dès leur mise en ligne et bénéficier d\'un accès prioritaire.';
  FR['fw.banner.cta'] = 'Obtenir un accès anticipé';
  FR['fw.results.showing'] = 'Affichage de';
  FR['fw.results.task'] = 'tâche';
  FR['fw.results.tasks'] = 'tâches';
  FR['fw.sortBy'] = 'Trier par :';
  FR['fw.card.title'] = 'Concevoir 5 Modèles de Publications Instagram';
  FR['fw.card.by'] = 'par';
  FR['fw.card.company'] = 'Creative Co.';
  FR['fw.card.verified'] = 'Vérifié';
  FR['fw.card.tagDesign'] = 'Design';
  FR['fw.card.tagCanva'] = 'Canva';
  FR['fw.card.tagSocial'] = 'Réseaux Sociaux';
  FR['fw.card.tagBeginner'] = 'Débutant';
  FR['fw.card.tagOneOff'] = 'Tâche Unique';
  FR['fw.card.due3days'] = 'Échéance dans 3 jours';
  FR['fw.card.applicants'] = '0 candidature — soyez le premier';
  FR['fw.card.escrow'] = 'Protégé par séquestre';
  FR['fw.card.fixedPrice'] = 'prix fixe';
  FR['fw.card.safePay'] = 'PAIEMENT SÉCURISÉ';
  FR['fw.card.applyNow'] = 'Postuler Maintenant';
  FR['fw.empty.title'] = 'AUCUNE TÂCHE NE CORRESPOND';
  FR['fw.empty.desc'] = 'Aucune tâche ne correspond à vos filtres actuels.';
  FR['fw.empty.clear'] = 'Effacer tous les filtres';
  FR['fw.empty.rest'] = 'pour voir la tâche exemple, ou inscrivez-vous pour être averti lorsque de vraies tâches seront en ligne.';
  FR['ht.pageTitle1'] = 'RECRUTER';
  FR['ht.pageTitle2'] = 'DES TALENTS.';
  FR['ht.pageSub'] = 'Parcourez de jeunes travailleurs à identité vérifiée, prêts à accomplir des tâches. Faites partie des premières entreprises à recruter avec nous lors du lancement.';
  FR['ht.searchPlaceholder'] = 'Rechercher par compétence, nom ou mot-clé...';
  FR['ht.filter.allSkills'] = 'Toutes les Compétences';
  FR['ht.filter.adminVA'] = 'Administratif & Assistant Virtuel';
  FR['ht.filter.rookie'] = 'Débutant';
  FR['ht.filter.verified'] = 'Vérifié';
  FR['ht.filter.trusted'] = 'De Confiance';
  FR['ht.filter.elite'] = 'Élite';
  FR['ht.pill.allTalent'] = 'Tous les Talents';
  FR['ht.pill.designers'] = 'Designers';
  FR['ht.pill.socialMedia'] = 'Réseaux Sociaux';
  FR['ht.pill.admin'] = 'Administratif';
  FR['ht.pill.dataEntry'] = 'Saisie de Données';
  FR['ht.pill.research'] = 'Recherche';
  FR['ht.pill.aiAssistants'] = 'Assistants IA';
  FR['ht.pill.translators'] = 'Traducteurs';
  FR['ht.pill.support'] = 'Support';
  FR['ht.pill.writing'] = 'Rédaction et Contenu';
  FR['ht.pill.video'] = 'Vidéo et Audio';
  FR['ht.pill.tech'] = 'Web et Technologie';
  FR['ht.pill.sales'] = 'Ventes et Prospection';
  FR['ht.pill.photography'] = 'Photographie';
  FR['ht.post.title'] = 'PUBLIEZ UNE TÂCHE';
  FR['ht.post.desc'] = 'Dites-nous ce dont vous avez besoin et laissez des talents vérifiés postuler. Publication gratuite, fonds séquestrés jusqu\'à votre approbation.';
  FR['ht.post.cta'] = 'Publier une Tâche Gratuitement';
  FR['ht.sidebar.minTrustScore'] = 'Score de Confiance Minimum';
  FR['ht.sidebar.anyScore'] = 'Tout score';
  FR['ht.sidebar.minPrefix'] = 'Min.';
  FR['ht.sidebar.starsSuffix'] = 'étoiles';
  FR['ht.sidebar.talentLevel'] = 'Niveau de Talent';
  FR['ht.sidebar.availability'] = 'Disponibilité';
  FR['ht.sidebar.availableNow'] = 'Disponible Maintenant';
  FR['ht.sidebar.thisWeek'] = 'Cette Semaine';
  FR['ht.sidebar.flexible'] = 'Flexible';
  FR['ht.trust.title'] = 'Pourquoi Nous ?';
  FR['ht.trust.item1'] = 'Protection de paiement par séquestre à chaque embauche';
  FR['ht.trust.item2'] = 'Profils de talents à identité vérifiée';
  FR['ht.trust.item3'] = 'Passeports de Compétences vérifiés sur chaque profil';
  FR['ht.trust.item4'] = 'Résolution des litiges incluse';
  FR['ht.banner.title'] = 'Nous arrivons bientôt.';
  FR['ht.banner.desc'] = 'De jeunes travailleurs vérifiés s\'inscrivent dès maintenant. Créez un compte entreprise pour publier des tâches et être le premier à recruter lors du lancement.';
  FR['ht.banner.cta'] = 'Publier une tâche gratuitement';
  FR['ht.sortLabel'] = 'Trier :';
  FR['ht.sort.rated'] = 'Les Mieux Notés';
  FR['ht.sort.tasks'] = 'Le Plus de Tâches Réalisées';
  FR['ht.sort.newest'] = 'Membres les Plus Récents';
  FR['ht.results.profile'] = 'profil';
  FR['ht.results.profiles'] = 'profils';
  FR['ht.card.idVerified'] = 'Identité Vérifiée';
  FR['ht.card.level'] = 'De Confiance';
  FR['ht.card.role'] = 'Gestionnaire de Réseaux Sociaux';
  FR['ht.card.location'] = 'Johannesbourg, Afrique du Sud';
  FR['ht.card.tagSocial'] = 'Réseaux Sociaux';
  FR['ht.card.tagCopywriting'] = 'Rédaction';
  FR['ht.card.tagContent'] = 'Création de Contenu';
  FR['ht.card.tasksDone'] = '12 tâches réalisées';
  FR['ht.card.passportVerified'] = 'Passeport de Compétences vérifié';
  FR['ht.card.availableNow'] = 'Disponible maintenant';
  FR['ht.card.demoProfile'] = 'Profil de démonstration';
  FR['ht.card.hireNow'] = 'Recruter Maintenant';
  FR['ht.card.save'] = 'Enregistrer';
  FR['ht.empty.title'] = 'AUCUN PROFIL NE CORRESPOND';
  FR['ht.empty.desc'] = 'Aucun travailleur ne correspond à vos filtres actuels.';
  FR['ht.empty.createAccount'] = 'créez un compte entreprise';
  FR['ht.empty.rest1'] = 'pour voir le profil exemple, ou';
  FR['ht.empty.rest2'] = 'pour être averti lorsque des travailleurs s\'inscrivent.';

  // ---- blog.* additions ----
  FR['blog.hero.title'] = 'Publications de la <span class="accent">Communauté.</span>';
  FR['blog.hero.desc'] = 'Publications texte et vocales de travailleurs et d\'entreprises — de vraies expériences, directement depuis la plateforme.';
  FR['blog.guestBanner'] = 'Vous publiez actuellement en tant qu\'invité — <a href="auth.html" style="color:var(--dark);font-weight:600;">inscrivez-vous</a> pour publier sous votre vrai nom et bâtir une réputation avec vos publications.';
  FR['blog.search.placeholder'] = 'Rechercher des publications…';
  FR['blog.filter.all'] = 'Toutes les publications';
  FR['blog.filter.worker'] = 'Histoires de travailleurs';
  FR['blog.filter.business'] = 'Pour les entreprises';
  FR['blog.filter.tips'] = 'Conseils & guides';
  FR['blog.filter.update'] = 'Mises à jour de la plateforme';
  FR['blog.dock.label'] = 'Partagez quelque chose de réel…';
  FR['blog.dock.write'] = 'Écrire';
  FR['blog.dock.record'] = 'Enregistrer';
  FR['blog.composer.text'] = 'Publication Texte';
  FR['blog.composer.voice'] = 'Publication Vocale';
  FR['blog.composer.titlePlaceholder'] = 'Titre (facultatif)';
  FR['blog.composer.contentPlaceholder'] = 'Partagez un conseil, une histoire ou quelque chose que vous avez appris sur le marché du travail…';
  FR['blog.composer.tag.worker'] = 'Histoire de travailleur';
  FR['blog.composer.tag.business'] = 'Pour les entreprises';
  FR['blog.composer.tag.tips'] = 'Conseils & guides';
  FR['blog.composer.tag.update'] = 'Mise à jour de la plateforme';
  FR['blog.composer.preview'] = 'Aperçu — voici exactement ce que la communauté verra';
  FR['blog.composer.publish'] = 'Publier';
  FR['blog.composer.voice.tapToRecord'] = 'Appuyez pour enregistrer';
  FR['blog.composer.voice.limit'] = 'Jusqu\'à 30 secondes pour le moment';
  FR['blog.composer.voice.rerecord'] = 'Réenregistrer';
  FR['blog.composer.voice.publish'] = 'Publier';
  FR['blog.post.helpful'] = 'Utile';
  FR['blog.post.insightful'] = 'Pertinent';
  FR['blog.post.agree'] = 'D\'accord';
  FR['blog.post.save'] = 'Enregistrer';
  FR['blog.post.delete'] = 'Supprimer';
  FR['blog.post.readMore'] = 'Lire la suite';
  FR['blog.empty.title'] = 'La parole est à vous.';
  FR['blog.empty.desc'] = 'Personne n\'a encore publié — soyez la première voix de notre communauté. Écrivez une publication texte ou enregistrez une publication vocale ci-dessous.';

  // ---- profile.* (tagged subset) ----
  FR['profile.gate.title'] = 'VOTRE PROFIL VIT ICI.';
  FR['profile.gate.desc'] = 'Inscrivez-vous pour créer votre Passeport de Compétences et commencer à chercher du travail — ou créez un compte entreprise pour publier des tâches et recruter des talents.';
  FR['profile.gate.ctaSignup'] = 'Créer un compte';
  FR['profile.gate.ctaLogin'] = 'Se connecter';
  FR['profile.privateNotice'] = '<strong>Votre profil est visible par les autres membres connectés.</strong> Toute personne connectée à YoungMerit peut voir votre nom, votre photo, votre biographie, votre portfolio et votre historique de travail. Vos coordonnées et vos informations bancaires ne sont jamais montrées à personne d\'autre qu\'à vous.';
  FR['profile.public.loading'] = 'Chargement du profil…';
  FR['profile.public.loginRequired'] = 'Connectez-vous pour voir les profils des travailleurs.';
  FR['profile.public.backToSearch'] = '← Retour à Recruter des Talents';
  FR['profile.public.inviteCta'] = 'Inviter à une Tâche';
  FR['profile.public.noPortfolio'] = 'Aucun projet de portfolio pour le moment.';
  FR['profile.public.noBio'] = 'Ce travailleur n\'a pas encore ajouté de biographie.';
  FR['profile.public.notFound.title'] = 'PROFIL INTROUVABLE';
  FR['profile.public.notFound.desc'] = 'Ce profil de travailleur n\'existe pas ou n\'est plus disponible.';
  FR['profile.worker.cover.edit'] = 'Modifier la couverture';
  FR['profile.worker.badge.verified'] = 'Entreprise Vérifiée';

  // ---- about.* (values/team/timeline/global/press/cta) ----
  FR['about.values.eyebrow'] = 'Ce Qui Nous Anime';
  FR['about.values.title'] = 'NOS<br/><span class="accent">VALEURS.</span>';
  FR['about.values.desc'] = 'Ce ne sont pas des mots sur un mur. Ce sont les principes derrière chaque décision que nous prenons, de la façon dont nous construisons la plateforme à la façon dont nous traitons chaque travailleur et chaque entreprise qui l\'utilise.';
  FR['about.values.trust.title'] = 'CONFIANCE';
  FR['about.values.trust.desc'] = 'Nous bâtissons la confiance grâce à des preuves de travail vérifiées. Chaque note, avis et tâche accomplie est suivie de manière indépendante, sans inflation ni manipulation possible.';
  FR['about.values.opportunity.title'] = 'OPPORTUNITÉ';
  FR['about.values.opportunity.desc'] = 'Nous croyons que chacun mérite une chance équitable de montrer ce qu\'il sait faire, peu importe où il a étudié, qui il connaît, ou ce que dit son CV actuellement.';
  FR['about.values.quality.title'] = 'QUALITÉ';
  FR['about.values.quality.desc'] = 'Nous maintenons des normes élevées tant pour les travailleurs que pour les entreprises. Le bon travail est célébré et récompensé. Les problèmes sont traités rapidement et équitablement grâce à notre système de médiation.';
  FR['about.values.impact.title'] = 'IMPACT';
  FR['about.values.impact.desc'] = 'Nous mesurons l\'impact réel sur la vie et la carrière des gens. Chaque embauche à temps plein issue d\'ici est une victoire directe pour tout ce que nous avons entrepris de construire.';
  FR['about.team.eyebrow'] = 'Les Personnes Derrière';
  FR['about.team.title'] = 'DÉCOUVREZ L\'<span class="accent">ÉQUIPE.</span>';
  FR['about.team.desc'] = 'Une équipe répartie dans le monde entier qui croit en ce que nous construisons parce que la plupart d\'entre nous avons vécu ce problème personnellement.';
  FR['about.team.naledi.role'] = 'Cofondatrice et PDG';
  FR['about.team.naledi.bio'] = 'Ancienne chercheuse en emploi des jeunes. A passé six ans à étudier la crise de l\'emploi de premier échelon à travers l\'Afrique avant de décider de construire elle-même la solution.';
  FR['about.team.li.role'] = 'Cofondateur et CTO';
  FR['about.team.li.bio'] = 'Auparavant dans une grande entreprise technologique chinoise. Diplômé en 2022, il a passé des mois sans trouver de travail malgré un diplôme d\'une université de premier plan. A construit notre moteur de réputation.';
  FR['about.team.camille.role'] = 'Responsable de la Croissance';
  FR['about.team.camille.bio'] = 'A dirigé la croissance de deux places de marché numériques européennes. Passionnée par l\'utilisation de la technologie pour débloquer la mobilité économique des jeunes en France et au-delà.';
  FR['about.team.james.role'] = 'Responsable Confiance et Sécurité';
  FR['about.team.james.bio'] = 'A précédemment dirigé la confiance et la sécurité sur une grande plateforme d\'économie à la demande. A conçu de A à Z notre système de séquestre, le processus de vérification d\'identité et le cadre de résolution des litiges.';
  FR['about.team.joinTitle'] = 'REJOIGNEZ L\'ÉQUIPE';
  FR['about.team.joinDesc'] = 'Nous recrutons dans l\'ingénierie, le design, la croissance et les opérations, entièrement à distance dans les six pays. Si ce problème vous tient personnellement à cœur, nous voulons vous entendre.';
  FR['about.team.joinCta'] = 'Voir les Postes Ouverts';
  FR['about.timeline.eyebrow'] = 'Notre Parcours';
  FR['about.timeline.title'] = 'COMMENT NOUS EN SOMMES ARRIVÉS <span class="accent">LÀ.</span>';
  FR['about.timeline.t1.year'] = 'Mi-2025';
  FR['about.timeline.t1.title'] = 'L\'Idée Prend Forme';
  FR['about.timeline.t1.desc'] = 'Naledi et Li se rencontrent lors d\'une conférence sur l\'emploi des jeunes à Nairobi et découvrent qu\'ils étudiaient le même problème depuis deux coins opposés du monde. Le concept commence à prendre forme au fil de plusieurs semaines d\'appels et de recherches partagées.';
  FR['about.timeline.t2.year'] = 'Fin 2025';
  FR['about.timeline.t2.title'] = 'Construction en Privé';
  FR['about.timeline.t2.desc'] = 'L\'équipe fondatrice se réunit. Camille rejoint pour diriger la croissance et James rejoint pour diriger la confiance et la sécurité. Six mois de développement produit intensif commencent sur deux continents, en mode furtif total.';
  FR['about.timeline.t3.year'] = 'Début 2026';
  FR['about.timeline.t3.title'] = 'Nous Sommes Lancés';
  FR['about.timeline.t3.desc'] = 'La plateforme est lancée simultanément en Afrique du Sud et en Chine avec un support complet en anglais et en mandarin. Le système de réputation, le Passeport de Compétences et l\'infrastructure de paiement séquestré sont tous actifs dès le premier jour.';
  FR['about.timeline.t4.year'] = 'Mi-2026';
  FR['about.timeline.t4.title'] = 'Expansion à Quatre Pays Supplémentaires';
  FR['about.timeline.t4.desc'] = 'La plateforme s\'ouvre aux États-Unis, à la France, à l\'Espagne et au Royaume-Uni. Le support en français et en espagnol est activé, apportant une couverture complète en quatre langues dans six pays.';
  FR['about.timeline.t5.year'] = 'En Ce Moment';
  FR['about.timeline.t5.title'] = 'En Croissance Chaque Jour';
  FR['about.timeline.t5.desc'] = 'Nous intégrons activement nos premiers travailleurs et entreprises. Chaque tâche publiée et accomplie à partir de maintenant est la preuve que le modèle fonctionne. Le voyage pour changer la façon dont le monde recrute commence maintenant.';
  FR['about.timeline.t6.year'] = 'À Venir';
  FR['about.timeline.t6.title'] = 'Apprentissages et Outils pour Employeurs';
  FR['about.timeline.t6.desc'] = 'Des partenariats d\'apprentissage gouvernementaux et des outils de recrutement plus avancés pour les employeurs sont en développement actif. Le meilleur reste à venir.';
  FR['about.global.eyebrow'] = 'Où Nous Opérons';
  FR['about.global.title'] = 'MONDIAL DÈS<br/><span class="accent">LE PREMIER JOUR.</span>';
  FR['about.global.desc'] = 'Nous n\'avons pas commencé localement avec l\'intention de nous développer plus tard. Nous l\'avons construite pour le monde dès le début car le problème existe partout et exige une réponse véritablement mondiale.';
  FR['about.global.langCardTitle'] = 'Langues de la Plateforme';
  FR['about.global.live'] = 'En Ligne';
  FR['about.global.foundingMarket'] = 'Marché fondateur, actif depuis début 2026';
  FR['about.global.expandedMid2026'] = 'Développé mi-2026';
  FR['about.global.yearOneTarget'] = 'Objectif de la Première Année';
  FR['about.global.za.members'] = '10 000 Membres';
  FR['about.global.cn.members'] = '15 000 Membres';
  FR['about.global.us.members'] = '8 000 Membres';
  FR['about.global.fr.members'] = '4 000 Membres';
  FR['about.global.es.members'] = '3 500 Membres';
  FR['about.global.gb.members'] = '5 000 Membres';
  FR['about.press.title'] = 'DANS LA PRESSE.';
  FR['about.press.desc'] = 'Couverture et commentaires précoces sur le problème que nous existons pour résoudre.';
  FR['about.press.p1.quote'] = '"Le paradoxe de l\'expérience est l\'un des échecs les plus persistants des marchés du travail modernes. Les plateformes qui brisent ce cycle grâce à des preuves de travail vérifiables méritent une attention sérieuse."';
  FR['about.press.p1.date'] = '2025, Reportage sur l\'Emploi des Jeunes';
  FR['about.press.p2.quote'] = '"La crise du chômage des jeunes en Afrique du Sud exige des solutions créatives. Une plateforme qui remplace les qualifications par un historique de travail vérifié pourrait être l\'une des interventions les plus significatives tentées à ce jour."';
  FR['about.press.p2.date'] = '2025, Série Futur du Travail';
  FR['about.press.p3.quote'] = '"Le problème du chômage des diplômés en Chine n\'est pas un manque de compétences. C\'est un manque de preuves. Les jeunes peuvent faire le travail. Ils n\'ont tout simplement aucun moyen de le démontrer. C\'est précisément cette lacune que ce type de plateforme comble."';
  FR['about.press.p3.date'] = '2025, Rapport sur l\'Économie des Diplômés';
  FR['about.cta.eyebrow'] = 'Rejoignez le Mouvement';
  FR['about.cta.title'] = 'À VOUS DE<br/><span class="accent">LE PROUVER.</span>';
  FR['about.cta.desc'] = 'Nous ne faisons que commencer. Soyez parmi les premiers à bâtir votre réputation vérifiée et aidez à prouver que le modèle fonctionne.';
  FR['about.cta.ctaFind'] = 'Chercher du Travail';
  FR['about.cta.ctaHire'] = 'Recruter des Talents';

  // ---- about.* (hero/promise/pillars/problem) ----
  FR['about.hero.breadcrumb'] = 'À propos';
  FR['about.hero.eyebrow'] = 'Notre Mission';
  FR['about.hero.title'] = 'NOTRE MISSION<br/>EST D\'<br/><span class="accent">OUVRIR DES PORTES.</span>';
  FR['about.hero.desc'] = 'Nous avons créé cette plateforme parce que des millions de jeunes dans le monde sont prêts à travailler mais ne parviennent pas à franchir la première porte. Nous changeons cela, une tâche vérifiée à la fois.';
  FR['about.hero.ctaFind'] = 'Chercher du Travail';
  FR['about.hero.ctaHow'] = 'Comment Ça Marche';
  FR['about.promise.title'] = 'La Promesse de YOUNGMERIT';
  FR['about.promise.quote'] = '"Un monde où l\'opportunité se <span class="accent">MÉRITE,</span> ne s\'hérite pas."';
  FR['about.pillar1.title'] = 'Preuve de Travail Vérifiée';
  FR['about.pillar1.desc'] = 'Chaque tâche accomplie est suivie de manière indépendante';
  FR['about.pillar2.title'] = 'Conçu pour Six Pays dès le Premier Jour';
  FR['about.pillar2.desc'] = 'Afrique du Sud, Chine, États-Unis, France, Espagne et Royaume-Uni';
  FR['about.pillar3.title'] = 'Entrée dans la Carrière, Pas Seulement du Travail Ponctuel';
  FR['about.pillar3.desc'] = 'Nous construisons de véritables chemins vers l\'emploi à temps plein';
  FR['about.problem.eyebrow'] = 'Pourquoi Nous Existons';
  FR['about.problem.title'] = 'LE PROBLÈME<br/>QUE NOUS <span class="accent">RÉSOLVONS.</span>';
  FR['about.problem.desc'] = 'Le chômage des jeunes est une crise mondiale, mais la cause profonde est la même partout : pas d\'expérience signifie pas d\'entrée, et pas d\'entrée signifie pas d\'expérience. Nous brisons ce cercle.';
  FR['about.problem.za'] = 'Afrique du Sud';
  FR['about.problem.za.rate'] = 'Env. 60% de Chômage des Jeunes';
  FR['about.problem.za.desc'] = 'Un chômage structurel extrême, un manque d\'opportunités formelles et un profond décalage entre compétences et emplois laissent des millions de jeunes Sud-Africains totalement exclus de l\'économie.';
  FR['about.problem.cn'] = 'Chine';
  FR['about.problem.cn.rate'] = 'Env. 20% de Chômage des Diplômés';
  FR['about.problem.cn.desc'] = 'Des millions de diplômés se disputent des postes de plus en plus rares. Les entreprises exigent régulièrement deux à cinq ans d\'expérience pour des postes de premier échelon, créant une barrière impossible pour les nouveaux diplômés.';
  FR['about.problem.us'] = 'États-Unis';
  FR['about.problem.us.rate'] = 'Crise de Saturation des Diplômés';
  FR['about.problem.us.desc'] = 'L\'inflation des diplômes et les postes de premier échelon exigeant une expérience préalable ont effondré le parcours traditionnel de l\'éducation à l\'emploi pour des millions de jeunes Américains.';
  FR['about.problem.fr'] = 'France';
  FR['about.problem.fr.rate'] = 'Recrutement Rigide Axé sur les Diplômes';
  FR['about.problem.fr.desc'] = 'La culture de recrutement formelle de la France rend particulièrement difficile pour les jeunes sans qualifications d\'élite ou relations personnelles de percer dans le monde professionnel.';
  FR['about.problem.es'] = 'Espagne';
  FR['about.problem.es.rate'] = 'Env. 28% de Chômage des Jeunes';
  FR['about.problem.es.desc'] = 'L\'un des taux de chômage des jeunes les plus élevés d\'Europe, alimenté par la stagnation économique, la dépendance aux contrats temporaires et des marchés de l\'emploi de premier échelon durablement faibles.';
  FR['about.problem.gb'] = 'Royaume-Uni';
  FR['about.problem.gb.rate'] = 'Inflation Généralisée de l\'Expérience';
  FR['about.problem.gb.desc'] = 'Même les postes juniors exigent désormais une vaste expérience préalable. Les jeunes diplômés se retrouvent piégés dans un cercle où chaque candidature est rejetée faute de l\'expérience que seul un emploi peut apporter.';

  // ---- profile.* (t() calls) ----
  FR['profile.about.add'] = 'Cliquez pour ajouter une bio.';
  FR['profile.about.edit'] = 'Modifier';
  FR['profile.actions.verify'] = 'Terminer la vérification';
  FR['profile.actions.updateContact'] = 'Mettre à jour les coordonnées et les paiements';
  FR['profile.plan.title'] = 'Votre forfait';
  FR['profile.plan.active'] = 'ACTIF';
  FR['profile.plan.upgrade'] = 'Améliorer le forfait';
  FR['profile.plan.manage'] = 'Gérer le forfait';
  FR['profile.plan.free'] = 'Gratuit';
  FR['profile.plan.pro'] = 'Professionnel Pro';
  FR['profile.plan.business'] = 'Entreprise Pro';
  FR['profile.plan.growth'] = 'Croissance Entreprise';
  FR['profile.plan.featuredProfile'] = 'La mise en avant est active : votre profil est mis en évidence dans les recherches Recruter des talents.';
  FR['profile.plan.featuredCompany'] = 'La mise en avant est active : le profil de votre entreprise se démarque auprès des travailleurs.';
  FR['profile.plan.featuredCompanyTasks'] = 'La mise en avant est active : votre entreprise et vos tâches sont mises en évidence dans les recherches.';
  FR['profile.plan.upsellWorker'] = 'Passez à Professionnel Pro pour bénéficier de la mise en avant et vous démarquer auprès des entreprises.';
  FR['profile.plan.upsellBiz'] = 'Passez à Entreprise Pro ou Croissance pour mettre en avant votre entreprise et vos tâches auprès des travailleurs.';
  FR['profile.worker.tabs.analytics'] = 'Statistiques';
  FR['profile.worker.analytics.title'] = 'Statistiques du profil';
  FR['profile.worker.analytics.subtitle'] = 'La performance de votre profil auprès des entreprises.';
  FR['profile.worker.analytics.views'] = 'Vues du profil';
  FR['profile.worker.analytics.viewsWeek'] = 'Vues cette semaine';
  FR['profile.worker.analytics.saved'] = 'Enregistré par des entreprises';
  FR['profile.worker.analytics.acceptRate'] = "Taux d'acceptation";
  FR['profile.worker.analytics.footnote'] = 'Basé sur {accepted} candidatures acceptées sur {sent} envoyées.';
  FR['profile.worker.analytics.locked'] = 'Passez à Professionnel Pro pour voir qui consulte votre profil, à quelle fréquence les entreprises l’enregistrent, et la performance de vos candidatures.';
  FR['profile.biz.about.title'] = 'À propos de l\'entreprise';
  FR['profile.biz.actions.edit'] = 'Modifier le profil';
  FR['profile.biz.actions.post'] = 'Publier une tâche';
  FR['profile.biz.applicants.lock'] = 'Les profils complets se débloquent lorsque vous présélectionnez un candidat';
  FR['profile.biz.history.count'] = 'tâches';
  FR['profile.biz.history.title'] = 'Tâches réalisées';
  FR['profile.biz.meta.hired'] = 'travailleurs recrutés';
  FR['profile.biz.meta.member'] = 'Membre depuis';
  FR['profile.biz.meta.posted'] = 'tâches publiées';
  FR['profile.biz.postings.new'] = 'Nouvelle tâche';
  FR['profile.biz.postings.title'] = 'Annonces de tâches actives';
  FR['profile.biz.skills.title'] = 'Étiquettes du secteur';
  FR['profile.biz.stats.hired'] = 'Travailleurs recrutés';
  FR['profile.biz.stats.paid'] = 'Total payé';
  FR['profile.biz.stats.posted'] = 'Tâches publiées';
  FR['profile.biz.stats.rating'] = 'Note moyenne attribuée';
  FR['profile.biz.tabs.about'] = 'À propos';
  FR['profile.biz.tabs.bench'] = 'Équipe de confiance';
  FR['profile.biz.bench.title'] = 'Équipe de confiance';
  FR['profile.biz.bench.subtitle'] = "Les travailleurs que vous avez engagés plus d'une fois — votre équipe de référence.";
  FR['profile.biz.bench.empty'] = "Engagez le même travailleur deux fois et il apparaîtra ici automatiquement, avec un moyen simple de le réengager pour votre prochaine tâche.";
  FR['profile.biz.bench.browseCta'] = 'Parcourir les talents';
  FR['profile.biz.bench.hireCount'] = 'Engagé {n} fois';
  FR['profile.biz.bench.lastHired'] = 'dernier engagement {date}';
  FR['profile.biz.bench.notePlaceholder'] = 'Note privée (visible par vous seul)';
  FR['profile.biz.bench.viewProfile'] = 'Voir le profil';
  FR['profile.biz.bench.rehire'] = 'Réengager';
  FR['profile.biz.tabs.analytics'] = 'Statistiques';
  FR['profile.biz.analytics.title'] = 'Tableau de bord statistiques';
  FR['profile.biz.analytics.subtitle'] = 'La performance de vos offres de tâches.';
  FR['profile.biz.analytics.locked'] = 'Passez à un forfait Business pour débloquer votre tableau de bord statistiques : total des candidatures, taux d\'embauche, taux d\'achèvement des tâches et plus encore.';
  FR['profile.biz.analytics.applicants'] = 'Total des candidatures';
  FR['profile.biz.analytics.hireRate'] = 'Taux d\'embauche';
  FR['profile.biz.analytics.completed'] = 'Tâches terminées';
  FR['profile.biz.analytics.completionRate'] = 'Taux d\'achèvement';
  FR['profile.biz.analytics.advanced'] = 'Statistiques avancées';
  FR['profile.biz.analytics.saved'] = 'Nombre de fois enregistré par des travailleurs';
  FR['profile.biz.analytics.growthUpsell'] = 'Passez à Growth pour débloquer des statistiques avancées comme le nombre d\'enregistrements.';
  FR['profile.biz.tabs.applicants'] = 'Candidats';
  FR['profile.biz.tabs.history'] = 'Tâches Passées';
  FR['profile.biz.tabs.postings'] = 'Tâches Actives';
  FR['profile.biz.tabs.saved'] = 'Publications Enregistrées';
  FR['profile.cv.remove'] = 'Supprimer';
  FR['profile.cv.upload'] = 'Téléverser';
  FR['profile.passport.completion'] = 'Achèvement';
  FR['profile.passport.earned'] = 'Gagné';
  FR['profile.passport.next'] = 'Terminez votre première tâche pour commencer';
  FR['profile.passport.nextMilestone'] = '{n} de plus pour {level}';
  FR['profile.passport.maxLevel'] = 'Niveau maximum atteint — plus rien à débloquer';
  FR['profile.passport.rating'] = 'Note moyenne';
  FR['profile.savedPosts.cta'] = 'Aller à la Communauté';
  FR['profile.savedPosts.empty'] = 'Aucune publication enregistrée pour le moment.<br/>Enregistrez des publications dans le fil Communauté pour les retrouver ici.';
  FR['profile.savedPosts.title'] = 'Publications enregistrées';
  FR['profile.skills.add'] = 'Ajouter une compétence';
  FR['profile.verification.done'] = 'Vérifié';
  FR['profile.verification.none'] = 'Non ajouté';
  FR['profile.verification.pending'] = 'En attente';
  FR['profile.worker.about.title'] = 'À propos de moi';
  FR['profile.worker.actions.browse'] = 'Parcourir les tâches';
  FR['profile.worker.actions.edit'] = 'Modifier le profil';
  FR['profile.worker.cv.title'] = 'CV';
  FR['profile.worker.meta.member'] = 'Membre depuis';
  FR['profile.worker.meta.tasks'] = 'tâches réalisées';
  FR['profile.worker.passport.barLabel'] = 'tâches terminées';
  FR['profile.worker.passport.title'] = 'PASSEPORT DE COMPÉTENCES';
  FR['profile.worker.portfolio.viewLink'] = 'Voir le lien';
  FR['profile.worker.skills.title'] = 'Compétences';
  FR['profile.worker.tabs.about'] = 'À propos';
  FR['profile.worker.tabs.growth'] = 'Votre parcours';
  FR['profile.worker.growth.title'] = 'Votre parcours de progression';
  FR['profile.worker.growth.subtitle'] = 'Une chronologie de vos étapes réelles sur YoungMerit.';
  FR['profile.worker.growth.joined.title'] = 'Inscription sur YoungMerit';
  FR['profile.worker.growth.joined.desc'] = "Là où votre parcours a commencé.";
  FR['profile.worker.growth.verified.title'] = 'Identité vérifiée';
  FR['profile.worker.growth.verified.desc.done'] = 'Votre identité a été confirmée.';
  FR['profile.worker.growth.verified.desc.pending'] = 'Votre vérification est en cours d\'examen.';
  FR['profile.worker.growth.verified.desc.locked'] = 'Vérifiez votre identité pour débloquer cette étape.';
  FR['profile.worker.growth.verified.cta'] = 'Vérifier maintenant';
  FR['profile.worker.growth.firstTask.title'] = 'Première tâche terminée';
  FR['profile.worker.growth.firstTask.desc.done'] = 'Vous avez livré votre première tâche.';
  FR['profile.worker.growth.firstTask.desc.locked'] = 'Terminez votre première tâche pour débloquer cette étape.';
  FR['profile.worker.growth.firstTask.cta'] = 'Parcourir les tâches';
  FR['profile.worker.growth.portfolio.title'] = 'Portfolio mis en avant';
  FR['profile.worker.growth.portfolio.desc.done'] = 'Vous avez ajouté votre première réalisation.';
  FR['profile.worker.growth.portfolio.desc.locked'] = 'Ajoutez un élément à votre portfolio pour débloquer cette étape.';
  FR['profile.worker.growth.portfolio.cta'] = 'Ajouter au portfolio';
  FR['profile.worker.growth.levelVerified.title'] = 'Niveau Vérifié atteint';
  FR['profile.worker.growth.levelVerified.desc.done'] = "Vous avez débloqué le badge Vérifié.";
  FR['profile.worker.growth.levelTrusted.title'] = 'Niveau Fiable atteint';
  FR['profile.worker.growth.levelTrusted.desc.done'] = "Vous avez débloqué le badge Fiable.";
  FR['profile.worker.growth.levelElite.title'] = 'Niveau Élite atteint';
  FR['profile.worker.growth.levelElite.desc.done'] = "Vous avez atteint le plus haut niveau sur YoungMerit.";
  FR['profile.worker.growth.level.progress'] = '{current}/{target} tâches terminées';
  FR['profile.worker.tabs.portfolio'] = 'Portfolio';
  FR['profile.worker.tabs.saved'] = 'Publications Enregistrées';
  FR['profile.worker.tabs.tasks'] = 'Historique des Tâches';
  FR['profile.worker.tasks.count'] = 'tâches';
  FR['profile.worker.tasks.title'] = 'Tâches réalisées';
  FR['profile.biz.about.empty'] = 'Cliquez pour ajouter une description de l\'entreprise.';
  FR['profile.biz.applicants.empty'] = 'Les candidats apparaîtront ici une fois que vous aurez une annonce de tâche active.';
  FR['profile.biz.applicants.shortlist'] = 'Présélectionner';
  FR['profile.biz.history.empty'] = 'Aucune tâche accomplie pour le moment.';
  FR['profile.biz.postings.actions.close'] = 'Fermer';
  FR['profile.biz.postings.actions.edit'] = 'Modifier';
  FR['profile.biz.postings.actions.viewApplicants'] = 'Voir les candidats';
  FR['profile.biz.postings.browse'] = 'Publiez votre première tâche';
  FR['profile.biz.postings.empty'] = 'Aucune annonce active.';
  FR['profile.biz.postings.status.closed'] = 'Fermée';
  FR['profile.biz.postings.status.live'] = 'En ligne';
  FR['profile.biz.postings.status.review'] = 'En cours d\'examen';
  FR['profile.biz.sidebar.details.industry'] = 'Secteur';
  FR['profile.biz.sidebar.details.location'] = 'Emplacement';
  FR['profile.biz.sidebar.details.size'] = 'Taille de l\'entreprise';
  FR['profile.biz.sidebar.details.title'] = 'Détails de l\'entreprise';
  FR['profile.biz.sidebar.details.website'] = 'Site web';
  FR['profile.biz.sidebar.post.cta'] = 'Publier une nouvelle tâche';
  FR['profile.biz.sidebar.post.desc'] = 'Trouvez la bonne personne pour votre prochain projet. Les fonds sont séquestrés jusqu\'à votre approbation.';
  FR['profile.biz.sidebar.post.title'] = 'PUBLIER UNE TÂCHE';
  FR['profile.biz.sidebar.verification.company'] = 'Immatriculation de l\'entreprise';
  FR['profile.biz.sidebar.verification.email'] = 'E-mail';
  FR['profile.biz.sidebar.verification.identity'] = 'Identité';
  FR['profile.biz.sidebar.verification.payment'] = 'Moyen de paiement';
  FR['profile.biz.sidebar.verification.title'] = 'Statut de vérification';
  FR['profile.biz.sidebar.wallet.available'] = 'Disponible à dépenser';
  FR['profile.biz.sidebar.wallet.balance'] = 'Solde du portefeuille';
  FR['profile.biz.sidebar.wallet.escrow'] = 'en séquestre';
  FR['profile.biz.sidebar.wallet.history'] = 'Historique';
  FR['profile.biz.sidebar.wallet.topup'] = 'Recharger';
  FR['profile.biz.skills.add'] = 'Ajouter une étiquette';
  FR['profile.worker.about.empty'] = 'Cliquez pour ajouter une bio.';
  FR['profile.worker.applications.browse'] = 'Parcourir les tâches';
  FR['profile.worker.applications.empty'] = 'Aucune candidature active.';
  FR['profile.worker.applications.status.review'] = 'En cours d\'examen';
  FR['profile.worker.applications.status.shortlisted'] = 'Présélectionné';
  FR['profile.worker.cv.note'] = 'PDF, DOC ou DOCX · Max 5 Mo · Facultatif mais augmente le taux d\'embauche';
  FR['profile.worker.cv.zone'] = 'Téléversez votre CV';
  FR['profile.worker.portfolio.add'] = 'Ajoutez des liens ou des images pour présenter votre travail aux employeurs.';
  FR['profile.worker.portfolio.cta'] = 'Ajouter un élément au portfolio';
  FR['profile.worker.portfolio.empty'] = 'Aucun élément de portfolio pour le moment.';
  FR['profile.worker.sidebar.applications'] = 'Candidatures actives';
  FR['profile.worker.sidebar.details.age'] = 'Âge';
  FR['profile.worker.sidebar.details.education'] = 'Éducation';
  FR['profile.worker.sidebar.details.languages'] = 'Langues';
  FR['profile.worker.sidebar.details.location'] = 'Emplacement';
  FR['profile.worker.sidebar.details.title'] = 'Détails du profil';
  FR['profile.worker.sidebar.verification.bank'] = 'Compte bancaire';
  FR['profile.worker.sidebar.verification.email'] = 'E-mail';
  FR['profile.worker.sidebar.verification.identity'] = 'Identité';
  FR['profile.worker.sidebar.verification.phone'] = 'Téléphone';
  FR['profile.worker.sidebar.verification.title'] = 'Statut de vérification';
  FR['profile.worker.sidebar.wallet.available'] = 'Disponible à retirer';
  FR['profile.worker.sidebar.wallet.balance'] = 'Solde du portefeuille';
  FR['profile.worker.sidebar.wallet.history'] = 'Historique';
  FR['profile.worker.sidebar.wallet.withdraw'] = 'Retirer';
  FR['profile.worker.skills.add'] = 'Ajouter une compétence';
  FR['profile.worker.tasks.browse'] = 'Parcourir les tâches disponibles';
  FR['profile.worker.tasks.empty'] = 'Aucune tâche accomplie pour le moment.';

  // ---- careers.* ----
  FR['careers.hero.breadcrumb'] = 'Carrières';
  FR['careers.hero.eyebrow'] = 'Rejoignez l\'Équipe';
  FR['careers.hero.title'] = 'CONSTRUISEZ L\'AVENIR DU<br/><span class="accent">TRAVAIL AFRICAIN.</span>';
  FR['careers.hero.desc'] = 'Nous sommes une petite équipe avec une ambition démesurée — connecter des millions de jeunes à de véritables opportunités économiques dans six pays. Venez nous aider à le construire.';
  FR['careers.stats.countries'] = 'Pays actifs';
  FR['careers.stats.team'] = 'Taille de l\'équipe';
  FR['careers.stats.remote'] = '100% à distance';
  FR['careers.stats.earlyVal'] = 'Précoce';
  FR['careers.stats.ownership'] = 'Participation réelle';
  FR['careers.values.eyebrow'] = 'Comment nous travaillons';
  FR['careers.values.title'] = 'COMMENT NOUS <span class="accent">FONCTIONNONS.</span>';
  FR['careers.values.1.title'] = 'Une pensée Afrique d\'abord';
  FR['careers.values.1.desc'] = 'Nous construisons pour des conditions réelles — connectivité variable, utilisateurs mobile-first, et paysages réglementaires divers dans 6 pays.';
  FR['careers.values.2.title'] = 'Des bâtisseurs, pas des bureaucrates';
  FR['careers.values.2.desc'] = 'Petite équipe, grande envergure. Tout le monde livre. Aucune couche d\'approbation entre une idée et l\'utilisateur.';
  FR['careers.values.3.title'] = 'La confiance comme produit';
  FR['careers.values.3.desc'] = 'Nous construisons une infrastructure de confiance. Cela signifie que nous nous imposons des normes inhabituellement élevées en matière de sécurité, de confidentialité et d\'équité.';
  FR['careers.values.4.title'] = 'Un esprit de propriétaire';
  FR['careers.values.4.desc'] = 'En phase précoce, vos décisions façonnent réellement l\'entreprise. Nous partageons les parts de manière significative, pas symbolique.';
  FR['careers.roles.eyebrow'] = 'Postes Ouverts';
  FR['careers.roles.title'] = 'POSTES <span class="accent">ACTUELS.</span>';
  FR['careers.roles.empty.title'] = 'AUCUN POSTE OUVERT POUR LE MOMENT';
  FR['careers.roles.empty.desc'] = 'Nous sommes totalement concentrés sur la construction. Quand nous serons prêts à agrandir l\'équipe, nous le publierons ici en premier — et enverrons un e-mail à tous ceux qui se seront inscrits ci-dessous.';
  FR['careers.roles.notify'] = 'Me prévenir';
  FR['careers.roles.success'] = 'Vous êtes sur la liste. Nous vous contacterons.';
  FR['careers.perks.eyebrow'] = 'Ce Que Nous Offrons';
  FR['careers.perks.title'] = 'CE QUE VOUS <span class="accent">OBTENEZ.</span>';
  FR['careers.perks.1.title'] = 'À distance dès le départ, adapté à l\'asynchrone';
  FR['careers.perks.1.desc'] = 'Travaillez depuis n\'importe où en Afrique — ou au-delà là où c\'est légal. Nous vous faisons confiance pour gérer votre temps.';
  FR['careers.perks.2.title'] = 'Participation significative';
  FR['careers.perks.2.desc'] = 'Une véritable participation, acquise sur 4 ans avec une période de carence d\'1 an. Pas symbolique — structurelle.';
  FR['careers.perks.3.title'] = 'Budget d\'apprentissage';
  FR['careers.perks.3.desc'] = '12 000 R par an pour des cours, des livres ou des conférences — utilisez-le comme cela vous aide le plus.';
  FR['careers.perks.4.title'] = 'Budget bureau à domicile';
  FR['careers.perks.4.desc'] = 'Une allocation matériel pour construire l\'espace de travail dont vous avez besoin dès le premier jour.';
  FR['careers.perks.5.title'] = 'Un impact réel';
  FR['careers.perks.5.desc'] = 'Chaque décision produit affecte de vrais jeunes et leur avenir économique — pas des indicateurs de vanité.';
  FR['careers.perks.6.title'] = 'L\'avantage d\'une petite équipe';
  FR['careers.perks.6.desc'] = 'Accès direct aux fondateurs, pas de gestion intermédiaire, une réelle autonomie dès la première semaine.';

  // ---- contact.* ----
  FR['contact.hero.breadcrumb'] = 'Contactez-nous';
  FR['contact.form.topic.routedPrefix'] = 'Ceci sera envoyé à';
  FR['contact.sidebar.press.response'] = 'Réponse sous 2 jours ouvrés';
  FR['contact.success.refLabel'] = 'Votre numéro de référence est :';
  FR['contact.hero.eyebrow'] = 'Nous répondons généralement sous 1 jour ouvré';
  FR['contact.hero.title'] = 'PARLONS-EN.';
  FR['contact.hero.desc'] = 'Que vous ayez une question, un problème ou une histoire à partager — <strong>dites-nous ce qui se passe</strong> et nous l\'orienterons vers la bonne personne. Pas de bots, pas de menus interminables.';
  FR['contact.success.title'] = 'MESSAGE ENVOYÉ.';
  FR['contact.success.desc'] = 'Nous avons envoyé une confirmation à votre e-mail. Notre équipe répond généralement sous 1 jour ouvré — plus rapidement pour les litiges urgents ou les questions de sécurité.';
  FR['contact.success.btn'] = 'Retour à l\'Accueil';
  FR['contact.form.title'] = 'ENVOYEZ-NOUS UN MESSAGE';
  FR['contact.form.desc'] = 'Remplissez le formulaire ci-dessous. Les champs marqués <span class="required-mark">*</span> sont obligatoires.';
  FR['contact.form.rateLimit'] = 'Trop de soumissions. Veuillez patienter avant de réessayer.';
  FR['contact.form.topic.label'] = 'De quoi s\'agit-il ? <span class="required-mark">*</span>';
  FR['contact.form.topic.general'] = 'Support Général';
  FR['contact.form.topic.general.desc'] = 'Compte, plateforme, aide technique';
  FR['contact.form.topic.business'] = 'Demande Entreprise';
  FR['contact.form.topic.business.desc'] = 'Recrutement, partenariats, entreprise';
  FR['contact.form.topic.dispute'] = 'Aide en cas de Litige';
  FR['contact.form.topic.dispute.desc'] = 'Problème de tâche, de paiement ou de séquestre';
  FR['contact.form.topic.press'] = 'Presse & Médias';
  FR['contact.form.topic.press.desc'] = 'Interviews, kit presse, citations';
  FR['contact.form.topic.privacy'] = 'Confidentialité & Données';
  FR['contact.form.topic.privacy.desc'] = 'Demandes de données, questions de confidentialité';
  FR['contact.form.topic.other'] = 'Autre Chose';
  FR['contact.form.topic.other.desc'] = 'Tout ce qui n\'est pas listé ci-dessus';
  FR['contact.form.topic.routed'] = 'Ceci sera envoyé à <strong>support@youngmerit.com</strong>';
  FR['contact.form.name'] = 'Nom Complet <span class="required-mark">*</span>';
  FR['contact.form.name.error'] = 'Veuillez saisir votre nom complet.';
  FR['contact.form.email'] = 'Adresse E-mail <span class="required-mark">*</span>';
  FR['contact.form.email.error'] = 'Veuillez saisir une adresse e-mail valide.';
  FR['contact.form.role'] = 'Je suis';
  FR['contact.form.role.placeholder'] = 'Sélectionnez une option (facultatif)';
  FR['contact.form.role.worker'] = 'Travailleur';
  FR['contact.form.role.business'] = 'Entreprise';
  FR['contact.form.role.guest'] = 'Pas encore membre';
  FR['contact.form.role.journalist'] = 'Journaliste ou média';
  FR['contact.form.role.other'] = 'Autre';
  FR['contact.form.reference'] = 'Référence de Tâche ou de Dossier';
  FR['contact.form.reference.hint'] = 'Nécessaire uniquement si votre message concerne une tâche ou un litige spécifique.';
  FR['contact.form.subject'] = 'Objet <span class="required-mark">*</span>';
  FR['contact.form.subject.error'] = 'Veuillez saisir un objet.';
  FR['contact.form.message'] = 'Votre Message <span class="required-mark">*</span>';
  FR['contact.form.message.error'] = 'Veuillez saisir un message (20 caractères minimum).';
  FR['contact.form.attachment'] = 'Pièce Jointe (Facultatif)';
  FR['contact.form.attachment.hint'] = 'Cliquez pour joindre une capture d\'écran ou un fichier — max 10 Mo';
  FR['contact.form.human'] = 'Je ne suis pas un robot';
  FR['contact.form.consent'] = 'J\'accepte la <a href="privacy-policy.html">Politique de Confidentialité</a> de YOUNGMERIT et consens à être contacté au sujet de cette demande par e-mail.';
  FR['contact.form.cta'] = 'Envoyer le Message';
  FR['contact.sidebar.general.title'] = 'Support Général';
  FR['contact.sidebar.general.desc'] = 'Problèmes de compte, questions sur la plateforme, tout ce qui concerne le quotidien.';
  FR['contact.sidebar.general.response'] = 'Réponse sous 1 jour ouvré';
  FR['contact.sidebar.business.title'] = 'Entreprises & Partenariats';
  FR['contact.sidebar.business.desc'] = 'Recrutement d\'entreprise, intégrations, propositions de partenariat.';
  FR['contact.sidebar.business.response'] = 'Réponse sous 2 jours ouvrés';
  FR['contact.sidebar.dispute.title'] = 'Litiges';
  FR['contact.sidebar.dispute.desc'] = 'Litiges actifs et problèmes liés au séquestre.';
  FR['contact.sidebar.dispute.note'] = 'Ou utilisez le <a href="dispute-system.html" style="color:var(--amber);">Système de Litiges</a>';
  FR['contact.sidebar.press.title'] = 'Presse & Médias';
  FR['contact.sidebar.press.desc'] = 'Demandes d\'interview, kit presse, demandes médias.';
  FR['contact.sidebar.privacy.title'] = 'Confidentialité & Protection des Données';
  FR['contact.sidebar.privacy.desc'] = 'Accès aux données, demandes de suppression et questions de confidentialité.';
  FR['contact.sidebar.privacy.response'] = 'Réponse sous 5 jours ouvrés';
  FR['contact.sidebar.response.title'] = 'Délais de Réponse Habituels';
  FR['contact.sidebar.response.general'] = 'Support Général';
  FR['contact.sidebar.response.general.time'] = '1 jour ouvré';
  FR['contact.sidebar.response.dispute'] = 'Litiges';
  FR['contact.sidebar.response.dispute.time'] = '1 jour ouvré';
  FR['contact.sidebar.response.business'] = 'Demandes Entreprises';
  FR['contact.sidebar.response.business.time'] = '2 jours ouvrés';
  FR['contact.sidebar.response.press'] = 'Presse & Médias';
  FR['contact.sidebar.response.press.time'] = '2 jours ouvrés';
  FR['contact.sidebar.response.privacy'] = 'Demandes de Confidentialité';
  FR['contact.sidebar.response.privacy.time'] = '5 jours ouvrés';
  FR['contact.sidebar.office'] = 'Support disponible du lundi au vendredi, de 08h00 à 18h00 SAST';
  FR['contact.sidebar.languages'] = 'Nous répondons en anglais, mandarin, français et espagnol';
  FR['contact.faq.title'] = 'AVANT DE NOUS ÉCRIRE';
  FR['contact.faq.desc'] = 'Quelques réponses rapides qui pourraient vous éviter une attente.';
  FR['contact.faq.q1'] = 'J\'ai un litige en cours. Où puis-je vérifier son statut ?';
  FR['contact.faq.a1'] = 'Utilisez la page du <a href="dispute-system.html" style="color:var(--amber);">Système de Litiges</a> et cliquez sur « Suivre votre Dossier » avec votre numéro de référence. Cela vous donne une mise à jour en direct plus rapide qu\'une réponse par e-mail.';
  FR['contact.faq.q2'] = 'J\'ai besoin de vérifier mon identité. Est-ce le bon endroit ?';
  FR['contact.faq.a2'] = 'Non — rendez-vous sur la page <a href="identity-verification.html" style="color:var(--amber);">Vérification d\'Identité</a> pour démarrer directement ce processus. Si la vérification échoue ou si vous avez un problème avec un document, contactez support@youngmerit.com.';
  FR['contact.faq.q3'] = 'À quelle vitesse vais-je vraiment recevoir une réponse ?';
  FR['contact.faq.a3'] = 'La plupart des messages reçoivent une réponse sous 1 jour ouvré. Les litiges et questions de sécurité sont prioritaires. Les demandes presse et entreprise peuvent prendre jusqu\'à 2 jours ouvrés en raison d\'effectifs plus réduits dans ces équipes.';
  FR['contact.faq.q4'] = 'Puis-je vous appeler au lieu d\'envoyer un e-mail ?';
  FR['contact.faq.a4'] = 'Nous sommes actuellement une équipe de support privilégiant l\'e-mail afin de conserver une trace écrite pour chaque dossier, ce qui aide particulièrement pour les litiges et les problèmes de paiement. Le support téléphonique est prévu dans notre feuille de route à mesure que la plateforme se développe.';

  // ---- resources.* ----
  FR['resources.hero.breadcrumb'] = 'Ressources';
  FR['resources.filter.browse'] = 'Parcourir :';
  FR['resources.card.read'] = 'Lire';
  FR['resources.author.honeTeam'] = 'L\'Équipe';
  FR['resources.mini1.title'] = 'Top 5 des Compétences les Plus Demandées dans 6 Pays en 2026';
  FR['resources.mini1.meta'] = '5 min — Pour les travailleurs';
  FR['resources.mini2.title'] = 'Être Embauché Grâce à une Réputation Méritée — Rediffusion Q&R en Direct';
  FR['resources.mini2.meta'] = '48 min — 1,2k vues';
  FR['resources.mini3.title'] = 'Comment les Entreprises Peuvent Trouver des Talents Fiables Plus Rapidement';
  FR['resources.mini3.meta'] = '3 min — Pour les entreprises';
  FR['resources.card1.title'] = 'Comment Bâtir une Solide Réputation Dans vos 30 Premiers Jours';
  FR['resources.card1.desc'] = 'Étape par étape, de la configuration du profil à votre badge Vérifié. Le guide le plus important pour chaque nouveau travailleur.';
  FR['resources.card2.title'] = 'Top 5 des Compétences les Plus Demandées dans 6 Pays en 2026';
  FR['resources.card2.desc'] = 'Quelles compétences les recruteurs paient-ils réellement en ce moment, de Johannesburg à Pékin.';
  FR['resources.card3.title'] = 'Être Embauché Grâce à une Réputation Méritée — Rediffusion Q&R en Direct';
  FR['resources.card3.desc'] = 'Découvrez comment trois de nos travailleurs sont passés de zéro tâche à un emploi à temps plein en moins de six mois.';
  FR['resources.card4.title'] = '5 Tâches Adaptées aux Débutants qui Paient Mieux que Vous Ne le Pensez';
  FR['resources.card4.desc'] = 'Saisie de données, tests IA, légendes de réseaux sociaux — ces tâches à faible barrière ont une forte demande et d\'excellents avis.';
  FR['resources.card5.title'] = 'Comment les Entreprises Peuvent Trouver des Talents Fiables Débutants Sans Risque';
  FR['resources.card5.desc'] = 'Un guide complet pour utiliser nos Scores de Confiance, viviers de talents et système de séquestre afin de recruter en toute confiance.';
  FR['resources.card6.title'] = 'Chômage des Jeunes en Chine : Pourquoi Nous Sommes Différents';
  FR['resources.card6.desc'] = 'La crise de surproduction de diplômés expliquée et comment la preuve de travail surpasse les exigences d\'expérience.';
  FR['resources.card7.title'] = 'Comment Utiliser votre Passeport de Compétences pour Décrocher un Emploi à Temps Plein';
  FR['resources.card7.desc'] = 'Votre Passeport de Compétences est plus puissant qu\'un CV. Voici exactement comment le partager avec les employeurs.';
  FR['resources.card8.title'] = 'Outils IA que Chaque Jeune Travailleur Devrait Connaître en 2026';
  FR['resources.card8.desc'] = 'ChatGPT, Canva AI, Gemini et Perplexity — quels outils vous rendent plus employable et comment les utiliser.';
  FR['resources.trend1.title'] = '5 Tâches Canva pour Débutants qui Paient Bien';
  FR['resources.trend1.meta'] = 'Guide — 6 min';
  FR['resources.trend2.title'] = 'Comment Rédiger un Profil qui Vous Fait Embaucher';
  FR['resources.trend2.meta'] = 'Conseil — 3 min';
  FR['resources.trend3.title'] = 'Comprendre votre Score de Confiance';
  FR['resources.trend3.meta'] = 'Article — 4 min';
  FR['resources.trend4.title'] = 'Chômage des Jeunes en Chine : Comment Nous Aidons';
  FR['resources.trend4.meta'] = 'Article — 7 min';
  FR['resources.trend5.title'] = 'De Débutant à Élite en 90 Jours';
  FR['resources.trend5.meta'] = 'Guide — 10 min';
  FR['resources.webinar.register'] = 'S\'INSCRIRE';
  FR['resources.webinar1.title'] = 'Comment Décrocher votre Première Tâche (Masterclass Débutant)';
  FR['resources.webinar1.meta'] = '10h00 SAST — Gratuit';
  FR['resources.webinar2.title'] = 'Recruter des Talents Débutants Sans Risque';
  FR['resources.webinar2.meta'] = '14h00 GMT — Pour les entreprises';
  FR['resources.webinar3.title'] = 'Outils IA que Chaque Jeune Travailleur Devrait Connaître en 2026';
  FR['resources.webinar3.meta'] = '11h00 CST — Gratuit';
  FR['resources.topic.careerEntry'] = 'Entrée en Carrière';
  FR['resources.topic.trustScore'] = 'Score de Confiance';
  FR['resources.topic.aiTools'] = 'Outils IA';
  FR['resources.topic.freelancing'] = 'Travail Indépendant';
  FR['resources.topic.hiringTips'] = 'Conseils de Recrutement';
  FR['resources.topic.skillPassport'] = 'Passeport de Compétences';
  FR['resources.topic.dataEntry'] = 'Saisie de Données';
  FR['resources.topic.resume'] = 'CV';
  FR['resources.topic.payments'] = 'Paiements';
  FR['resources.hero.eyebrow'] = 'Centre de Connaissances';
  FR['resources.hero.title'] = 'GUIDES, CONSEILS<br/>ET OUTILS POUR<br/><span class="accent">GRANDIR.</span>';
  FR['resources.hero.desc'] = 'Tout ce dont vous avez besoin pour décrocher votre première tâche, bâtir votre réputation et lancer votre carrière — ou trouver et gérer d\'excellents talents.';
  FR['resources.search.placeholder'] = 'Rechercher guides, conseils, webinaires...';
  FR['resources.search.btn'] = 'Rechercher';
  FR['resources.stats.guides'] = 'Guides et Articles';
  FR['resources.stats.webinars'] = 'Webinaires et Rediffusions';
  FR['resources.stats.tips'] = 'Conseils et Lectures Rapides';
  FR['resources.stats.languages'] = 'Langues';
  FR['resources.filter.all'] = 'Tout';
  FR['resources.filter.guides'] = 'Guides';
  FR['resources.filter.articles'] = 'Articles';
  FR['resources.filter.tips'] = 'Conseils';
  FR['resources.filter.webinars'] = 'Webinaires';
  FR['resources.filter.workers'] = 'Pour les Travailleurs';
  FR['resources.filter.businesses'] = 'Pour les Entreprises';
  FR['resources.featured.tag'] = 'Guide en Vedette';
  FR['resources.featured.title'] = 'COMMENT BÂTIR UNE RÉPUTATION SOLIDE DANS VOS 30 PREMIERS JOURS';
  FR['resources.featured.desc'] = 'Le premier mois sur notre plateforme donne le ton pour toute votre carrière ici. Ce guide étape par étape vous accompagne dans la configuration du profil, l\'obtention de votre première tâche et l\'acquisition de votre badge Vérifié.';
  FR['resources.featured.badge'] = 'Guide';
  FR['resources.featured.time'] = '8 min de lecture';
  FR['resources.featured.cta'] = 'Lire le Guide';
  FR['resources.sidebar.newsletter.title'] = 'Résumé Hebdomadaire';
  FR['resources.sidebar.newsletter.desc'] = 'Recevez les meilleurs guides, conseils et conseils de carrière chaque lundi.';
  FR['resources.sidebar.newsletter.cta'] = 'S\'abonner Gratuitement';
  FR['resources.sidebar.trending.title'] = 'Tendances Cette Semaine';
  FR['resources.sidebar.topics.title'] = 'Parcourir par Sujet';
  FR['resources.sidebar.webinars.title'] = 'Webinaires à Venir';
  FR['resources.cta.title'] = 'PRÊT À<br/><span class="accent">LE PROUVER ?</span>';
  FR['resources.cta.desc'] = 'Mettez vos nouvelles connaissances en pratique. Parcourez les tâches et commencez à bâtir votre réputation dès aujourd\'hui.';
  FR['resources.cta.findWork'] = 'Chercher du Travail';
  FR['resources.cta.hireTalent'] = 'Recruter des Talents';

  // ---- idv.* ----
  FR['idv.hero.breadcrumb'] = 'Vérification d\'Identité';
  FR['idv.hero.eyebrow'] = 'Prend moins de 3 minutes';
  FR['idv.hero.title'] = 'SACHEZ AVEC QUI<br/>VOUS<br/><span class="accent">TRAVAILLEZ.</span>';
  FR['idv.hero.desc'] = 'La vérification d\'identité protège <strong>tout le monde</strong> sur notre plateforme. Les travailleurs savent que les entreprises pour lesquelles ils travaillent sont réelles. Les entreprises savent que les talents qu\'elles embauchent sont bien ceux qu\'ils prétendent être. La plateforme reste sûre pour tous.';
  FR['idv.hero.ctaVerify'] = 'Vérifier Mon Identité';
  FR['idv.hero.ctaLearn'] = 'Découvrir Pourquoi';
  FR['idv.hero.trust1'] = 'Données jamais vendues';
  FR['idv.hero.trust2'] = 'Chiffrement 256 bits';
  FR['idv.hero.trust3'] = 'Conforme RGPD et POPIA';
  FR['idv.hero.trust4'] = 'Moins de 3 minutes';
  FR['idv.strip1.title'] = 'Moins de 3 Minutes';
  FR['idv.strip1.desc'] = 'Effectuez tout le processus sur votre téléphone ou ordinateur';
  FR['idv.strip2.title'] = 'Fournisseur Certifié';
  FR['idv.strip2.desc'] = 'Traité par un partenaire de vérification d\'identité certifié ISO 27001';
  FR['idv.strip3.title'] = 'Jamais Stocké par Nous';
  FR['idv.strip3.desc'] = 'Les images du document sont traitées puis supprimées — nous conservons uniquement le résultat vérifié';
  FR['idv.strip4.title'] = 'Processus Unique';
  FR['idv.strip4.desc'] = 'Vérifiez une fois et votre statut s\'applique à toute notre plateforme';
  FR['idv.why.eyebrow'] = 'Pourquoi C\'est Important';
  FR['idv.why.title'] = 'LA CONFIANCE NE<br/>S\'ASSUME PAS.<br/><span class="acc">ELLE SE CONSTRUIT.</span>';
  FR['idv.why.desc'] = 'Une plateforme où n\'importe qui peut affirmer n\'importe quoi est une plateforme où rien ne peut être digne de confiance. La vérification d\'identité est la fondation qui donne un sens réel à chaque score de confiance, chaque avis et chaque paiement sur notre plateforme.';
  FR['idv.why.card1.title'] = 'Les Travailleurs Savent Qui les Embauche';
  FR['idv.why.card1.desc'] = 'Chaque entreprise publiant des tâches sur notre plateforme a passé la vérification d\'identité et d\'entité. Les travailleurs n\'acceptent jamais de travail d\'une source anonyme — ils savent exactement pour qui ils travaillent.';
  FR['idv.why.card2.title'] = 'Les Scores de Confiance sont Liés à de Vraies Personnes';
  FR['idv.why.card2.desc'] = 'Sans vérification, les scores de confiance sont dénués de sens. Un utilisateur pourrait créer plusieurs comptes et manipuler le système. La vérification lie chaque avis, chaque tâche et chaque note de manière permanente à une personne réelle et unique.';
  FR['idv.why.card3.title'] = 'Les Paiements sont Protégés Contre la Fraude';
  FR['idv.why.card3.desc'] = 'La fraude aux paiements, le piratage de comptes et l\'activité de mules financières sont des risques sérieux sur toute plateforme qui déplace de l\'argent. La vérification d\'identité est notre défense la plus solide contre ces trois risques — protégeant les revenus de chaque travailleur.';
  FR['idv.why.card4.title'] = 'Votre Réputation Vous Appartient à Vous Seul';
  FR['idv.why.card4.desc'] = 'Votre réputation chez nous vous appartient à vous et à vous seul. La vérification garantit que personne d\'autre ne peut créer un compte en prétendant être vous, utiliser votre nom ou diluer l\'historique de travail que vous avez bâti.';
  FR['idv.why.card5.title'] = 'Conformité Légale dans Six Pays';
  FR['idv.why.card5.desc'] = 'Opérer dans six juridictions signifie que nous devons respecter les obligations de Lutte Contre le Blanchiment d\'Argent (AML) et de Connaissance du Client (KYC) dans chaque marché. La vérification n\'est pas optionnelle — c\'est une exigence légale pour une plateforme qui déplace de l\'argent.';
  FR['idv.why.card6.title'] = 'Les Employeurs le Prennent au Sérieux';
  FR['idv.why.card6.desc'] = 'Lorsqu\'un travailleur vérifié partage son Passeport de Compétences avec un employeur potentiel, cet employeur sait que la preuve de travail derrière est liée à une identité réelle et vérifiée. C\'est ce qui rend une réputation vérifiée plus précieuse qu\'un CV.';
  FR['idv.check.eyebrow'] = 'Transparence Totale';
  FR['idv.check.title'] = 'EXACTEMENT CE QUE<br/>NOUS VÉRIFIONS ET<br/><span class="acc">CE QUE NOUS NE VÉRIFIONS PAS.</span>';
  FR['idv.check.desc'] = 'Nous ne vérifions que ce qui est nécessaire pour confirmer votre identité. Nous ne collectons aucune information médicale, historique financier, casier judiciaire ou quoi que ce soit au-delà de ce qui est listé ci-dessous.';
  FR['idv.check.weVerify'] = 'Ce que nous vérifions';
  FR['idv.check.verify1.title'] = 'Vous êtes une personne réelle';
  FR['idv.check.verify1.desc'] = 'Nous confirmons que votre document émis par le gouvernement est authentique et non expiré, et que le selfie correspond à la photo du document.';
  FR['idv.check.verify2.title'] = 'Vous avez 18 ans ou plus';
  FR['idv.check.verify2.desc'] = 'Nous confirmons que votre date de naissance figurant sur le document répond à l\'exigence d\'âge minimum de la plateforme.';
  FR['idv.check.verify3.title'] = 'Votre nom correspond à votre compte';
  FR['idv.check.verify3.desc'] = 'Le nom sur votre document doit correspondre au nom avec lequel vous vous êtes inscrit. Cela empêche l\'usurpation d\'identité et le partage de compte.';
  FR['idv.check.verify4.title'] = 'Le document n\'a pas été falsifié';
  FR['idv.check.verify4.desc'] = 'Nos examinateurs vérifient la manipulation numérique, le texte altéré et les incohérences dans les caractéristiques de sécurité du document.';
  FR['idv.check.verify5.title'] = 'Vous n\'êtes pas déjà vérifié sous un autre compte';
  FR['idv.check.verify5.desc'] = 'Chaque personne ne peut détenir qu\'un seul compte vérifié. Les comptes en double constituent une violation de la plateforme.';
  FR['idv.check.doNotCheck'] = 'Ce que nous ne vérifions PAS';
  FR['idv.check.not1.title'] = 'Casier judiciaire';
  FR['idv.check.not1.desc'] = 'Nous n\'effectuons pas de vérifications de casier judiciaire. Nous sommes une plateforme de travail, pas un service de sélection d\'emploi.';
  FR['idv.check.not2.title'] = 'Historique de crédit ou dossiers financiers';
  FR['idv.check.not2.desc'] = 'Nous n\'avons pas accès à votre score de crédit, historique bancaire ou situation financière. Nous vérifions uniquement qui vous êtes.';
  FR['idv.check.not3.title'] = 'Informations médicales ou de santé';
  FR['idv.check.not3.desc'] = 'Aucune donnée médicale n\'est demandée, collectée ou déduite à aucun moment pendant le processus de vérification.';
  FR['idv.check.not4.title'] = 'Réseaux sociaux ou présence en ligne';
  FR['idv.check.not4.desc'] = 'Nous ne consultons pas vos comptes sociaux, ne vous recherchons pas en ligne et n\'accédons à aucune donnée en dehors du processus de vérification.';
  FR['idv.check.not5.title'] = 'Profils biométriques ou bases de données de reconnaissance faciale';
  FR['idv.check.not5.desc'] = 'Votre selfie est utilisé uniquement pour faire correspondre votre visage à la photo de votre document. Aucun profil de reconnaissance faciale n\'est créé ou stocké.';
  FR['idv.process.eyebrow'] = 'Étape par Étape';
  FR['idv.process.title'] = 'COMMENT FONCTIONNE LA<br/><span class="acc">VÉRIFICATION.</span>';
  FR['idv.process.desc'] = 'Quatre étapes rapides. Tout se passe sur votre appareil. L\'ensemble du processus prend moins de trois minutes.';
  FR['idv.process.step1.title'] = 'Choisissez votre Document';
  FR['idv.process.step1.desc'] = 'Sélectionnez le type de pièce d\'identité que vous utiliserez — carte d\'identité nationale, passeport ou permis de conduire. Différents documents sont pris en charge selon le pays.';
  FR['idv.process.step1.tag'] = 'Sur l\'Appareil';
  FR['idv.process.step2.title'] = 'Scannez le Document';
  FR['idv.process.step2.desc'] = 'Tenez votre document devant la caméra de votre appareil. Notre système capture le recto et le verso. Un guidage est fourni en temps réel.';
  FR['idv.process.step2.tag'] = 'Moins de 60 Secondes';
  FR['idv.process.step3.title'] = 'Prenez un Selfie';
  FR['idv.process.step3.desc'] = 'Une vérification rapide de vivacité — il vous sera demandé de cligner des yeux ou de tourner la tête pour confirmer votre présence physique. Aucun équipement spécial requis.';
  FR['idv.process.step3.tag'] = 'Vérification de Vivacité';
  FR['idv.process.step4.title'] = 'Décision Instantanée';
  FR['idv.process.step4.desc'] = 'La plupart des vérifications sont approuvées instantanément. Si un examen manuel est nécessaire, vous serez averti sous 24 heures. Votre profil est débloqué dès l\'approbation.';
  FR['idv.process.step4.tag'] = 'Instantané ou 24h';
  FR['idv.docs.eyebrow'] = 'Documents Acceptés';
  FR['idv.docs.title'] = 'CE DONT VOUS<br/><span class="acc">AUREZ BESOIN.</span>';
  FR['idv.docs.desc'] = 'Nous acceptons les pièces d\'identité avec photo émises par le gouvernement des six pays où nous opérons. Les documents doivent être valides et non expirés.';
  FR['idv.docs.national.title'] = 'Carte Nationale d\'Identité';
  FR['idv.docs.national.desc'] = 'Acceptée en Afrique du Sud (Livret d\'identité vert et Carte d\'identité intelligente), France (Carte Nationale d\'Identité), Espagne (Documento Nacional de Identidad) et Chine (Carte d\'identité de résident).';
  FR['idv.docs.national.badge'] = 'Le Plus Courant';
  FR['idv.docs.passport.title'] = 'Passeport';
  FR['idv.docs.passport.desc'] = 'Les passeports internationaux sont acceptés des six pays. La page de données biographiques et la page photo doivent toutes deux être clairement visibles. Accepté dans le monde entier — idéal pour les travailleurs internationaux.';
  FR['idv.docs.passport.badge'] = 'Accepté dans Tous les Pays';
  FR['idv.docs.drivers.title'] = 'Permis de Conduire';
  FR['idv.docs.drivers.desc'] = 'Acceptée en Afrique du Sud, aux États-Unis, au Royaume-Uni et en France. Doit inclure une photo et une date de naissance. Acceptée comme document secondaire lorsque la carte d\'identité nationale n\'est pas disponible.';
  FR['idv.docs.drivers.badge'] = 'Pays Sélectionnés';
  FR['idv.docs.residence.title'] = 'Titre de Séjour';
  FR['idv.docs.residence.desc'] = 'Les titres de séjour biométriques sont acceptés au Royaume-Uni et dans certains pays de l\'Union Européenne pour les ressortissants étrangers vivant et travaillant dans ces juridictions.';
  FR['idv.docs.residence.badge'] = 'Royaume-Uni et UE';
  FR['idv.docs.business.title'] = 'Document d\'Immatriculation d\'Entreprise';
  FR['idv.docs.business.desc'] = 'Pour les comptes entreprise : certificat d\'immatriculation de la société ou document équivalent du registre national des sociétés concerné. Requis en complément de la vérification d\'identité du représentant autorisé.';
  FR['idv.docs.business.badge'] = 'Comptes Entreprise';
  FR['idv.docs.other.title'] = 'Document Non Répertorié ?';
  FR['idv.docs.other.desc'] = 'Contactez notre équipe de support de vérification à verify@youngmerit.com. Nous pourrions accepter des documents alternatifs au cas par cas pour les utilisateurs dans des juridictions avec des options d\'ID standard limitées.';
  FR['idv.docs.other.badge'] = 'Contactez-nous';
  FR['idv.docs.countries.label'] = 'Accepté depuis';
  FR['idv.privacy.eyebrow'] = 'Votre Confidentialité';
  FR['idv.privacy.title'] = 'VOS DONNÉES.<br/>VOTRE <span class="acc">CONTRÔLE.</span>';
  FR['idv.privacy.desc'] = 'Nous prenons la confidentialité au sérieux à chaque étape. Le processus de vérification d\'identité est conçu pour collecter le minimum d\'informations nécessaires et rien de plus. Voici exactement comment vos données sont traitées.';
  FR['idv.privacy.cta'] = 'Lire la Politique de Confidentialité Complète';
  FR['idv.privacy.item1.title'] = 'Les images de documents ne sont jamais stockées par nous';
  FR['idv.privacy.item1.desc'] = 'Vos photos d\'identité et votre selfie sont transmis directement à notre partenaire de vérification certifié, traités pour confirmer votre identité, puis définitivement supprimés. Nous ne recevons que le résultat de la vérification : approuvé, refusé ou en attente.';
  FR['idv.privacy.item2.title'] = 'Toutes les données sont chiffrées de bout en bout';
  FR['idv.privacy.item2.desc'] = 'Tout ce qui est transmis pendant la vérification est chiffré à l\'aide de TLS 1.3. Notre partenaire de vérification détient la certification ISO 27001 et traite les données dans le cadre d\'un accord de traitement des données contraignant avec nous.';
  FR['idv.privacy.item3.title'] = 'Conforme dans les six pays';
  FR['idv.privacy.item3.desc'] = 'Notre processus de vérification répond aux exigences du RGPD (France et Espagne), UK GDPR, POPIA (Afrique du Sud), PIPL (Chine) et des lois américaines applicables sur la confidentialité au niveau des États. Les transferts de données transfrontaliers utilisent des Clauses Contractuelles Types approuvées.';
  FR['idv.privacy.item4.title'] = 'Vous pouvez demander la suppression à tout moment';
  FR['idv.privacy.item4.desc'] = 'En vertu du RGPD, de la POPIA et d\'autres lois applicables, vous avez le droit de demander la suppression de vos données personnelles. Si vous fermez votre compte, votre statut de vérification et les données associées sont supprimés sous 30 jours, sous réserve des obligations légales de conservation.';
  FR['idv.privacy.item5.title'] = 'Vos données ne sont jamais vendues';
  FR['idv.privacy.item5.desc'] = 'Nous ne vendons, ne louons ni ne partageons vos données personnelles avec un tiers à des fins commerciales. Vos données d\'identité sont utilisées uniquement pour confirmer qui vous êtes — rien d\'autre.';
  FR['idv.faq.eyebrow'] = 'QUESTIONS FRÉQUENTES';
  FR['idv.faq.title'] = 'Tout ce que vous devez savoir sur le processus de vérification.';
  FR['idv.faq.q1'] = 'La vérification d\'identité est-elle obligatoire ?';
  FR['idv.faq.a1'] = 'Oui. Tous les utilisateurs souhaitant effectuer des transactions sur notre plateforme — postuler à des tâches, publier des tâches ou recevoir des paiements — doivent compléter la vérification d\'identité. Vous pouvez parcourir la plateforme sans vérification, mais vous ne pouvez pas postuler à un travail, publier des tâches ou envoyer/recevoir de l\'argent tant que la vérification n\'est pas terminée. Il s\'agit d\'une exigence légale en vertu des réglementations anti-blanchiment d\'argent applicables dans chaque pays où nous opérons.';
  FR['idv.faq.q2'] = 'Combien de temps prend la vérification ?';
  FR['idv.faq.a2'] = 'Le processus de vérification lui-même prend moins de trois minutes sur la plupart des appareils. La majorité des décisions sont renvoyées instantanément après soumission. Dans certains cas — généralement lorsque la qualité du document est plus faible ou qu\'un examen manuel est nécessaire — vous pourriez attendre jusqu\'à 24 heures. Vous recevrez une notification par e-mail dès que votre statut sera confirmé. Vous n\'avez pas besoin de rester sur la page pendant le traitement de l\'examen.';
  FR['idv.faq.q3'] = 'Ma vérification a été refusée. Que dois-je faire ?';
  FR['idv.faq.a3'] = 'Si votre vérification est refusée, vous recevrez un e-mail expliquant la raison. Les raisons courantes incluent : un scan de document flou ou incomplet, un document expiré, une incohérence entre le nom sur le document et le compte, ou un document non accepté dans votre pays. Vous pouvez retenter le processus de vérification jusqu\'à trois fois. Si le problème persiste, contactez notre équipe de support de vérification à verify@youngmerit.com et un agent humain vous assistera directement.';
  FR['idv.faq.q4'] = 'Mes documents seront-ils partagés avec les entreprises pour lesquelles je travaille ?';
  FR['idv.faq.a4'] = 'Absolument pas. Les entreprises sur notre plateforme ne voient jamais vos documents d\'identité. Elles voient uniquement un badge de vérification sur votre profil indiquant que votre identité a été confirmée par nous. Votre type de document, numéro de document, date de naissance et tout autre détail personnel du processus de vérification ne sont jamais partagés avec une entreprise ou un autre utilisateur de la plateforme.';
  FR['idv.faq.q5'] = 'Dois-je vérifier à nouveau si je change de nom ou de pays ?';
  FR['idv.faq.a5'] = 'Si vous changez légalement de nom, vous devrez contacter notre équipe de support pour mettre à jour votre compte et pourriez devoir compléter une nouvelle vérification. Si vous changez de pays, une nouvelle vérification n\'est pas automatiquement requise sauf si vous mettez à jour vos informations de paiement vers une nouvelle juridiction. Contactez notre équipe de support pour des conseils sur votre situation spécifique.';
  FR['idv.faq.q6'] = 'Je n\'ai pas de pièce d\'identité standard. Puis-je quand même me vérifier ?';
  FR['idv.faq.a6'] = 'Contactez-nous à verify@youngmerit.com avant de tenter la vérification. Nous comprenons que l\'accès à une pièce d\'identité standard émise par le gouvernement n\'est pas égal dans toutes les communautés et nous travaillerons avec vous au cas par cas pour trouver une solution appropriée. Nous ne voulons jamais que la vérification d\'identité soit un obstacle empêchant de jeunes personnes sincères et méritantes d\'accéder à la plateforme.';
  FR['idv.faq.q7'] = 'Mon selfie est-il stocké de façon permanente ?';
  FR['idv.faq.a7'] = 'Non. Votre selfie est utilisé uniquement pour effectuer une vérification de vivacité et faire correspondre votre visage à la photo de votre document d\'identité. Il est traité par notre partenaire de vérification puis définitivement supprimé. Nous ne stockons aucune donnée biométrique, ne créons pas de profil de reconnaissance faciale et ne conservons aucune image du processus de vérification. Seul le résultat de la vérification — approuvé, refusé ou en attente — est conservé par nous.';
  FR['idv.cta.eyebrow'] = 'Prêt à commencer ?';
  FR['idv.cta.title'] = 'PROUVEZ QUE VOUS ÊTES<br/>CELUI QUE VOUS <span class="acc">PRÉTENDEZ ÊTRE.</span>';
  FR['idv.cta.desc'] = 'Complétez la vérification d\'identité en moins de trois minutes et débloquez toute la plateforme — vrai travail, vrai salaire, vraie réputation.';
  FR['idv.cta.verify'] = 'Vérifier Maintenant';
  FR['idv.cta.privacy'] = 'Lire la Politique de Confidentialité';

  FR['nav.pricing'] = 'Tarifs';

  // ---- pricing.* additions ----
  FR['pricing.hero.breadcrumb'] = 'Tarifs';
  FR['pricing.faq.title'] = 'QUESTIONS <span class="accent">FRÉQUENTES.</span>';
  FR['pricing.faq.desc'] = 'Tout ce que vous devez savoir sur nos tarifs.';
  FR['pricing.faq.q1'] = 'Pourquoi facturez-vous des frais de marketplace ?';
  FR['pricing.faq.a1'] = 'Les frais de marketplace couvrent le traitement des paiements, la protection par séquestre, la prévention de la fraude, la résolution des litiges et le support client. Vous ne payez que lorsqu\'une tâche est terminée avec succès et de la valeur est créée. Pas de frais cachés, pas de surprises.';
  FR['pricing.faq.q2'] = 'Quand est-ce que je paie les frais de marketplace ?';
  FR['pricing.faq.a2'] = 'Les frais sont déduits automatiquement lorsqu\'une tâche est terminée et que le paiement est libéré du séquestre. Les entreprises paient les frais dans le cadre du coût de la tâche. Les travailleurs reçoivent leur paiement complet moins les frais.';
  FR['pricing.faq.q3'] = 'Comment fonctionne le séquestre ?';
  FR['pricing.faq.a3'] = 'Lorsqu\'une entreprise publie une tâche, le paiement complet est conservé dans un compte séquestre sécurisé. L\'argent n\'est libéré au travailleur qu\'une fois que l\'entreprise approuve le travail terminé. En cas de litige, notre équipe de médiation examine les preuves et prend une décision équitable. <a href="dispute-system.html" style="color:var(--amber);text-decoration:none;">En savoir plus →</a>';
  FR['pricing.faq.q4'] = 'Puis-je annuler mon abonnement à tout moment ?';
  FR['pricing.faq.a4'] = 'Oui. Vous pouvez annuler votre abonnement à tout moment depuis les paramètres de votre compte. Si vous annulez, vous conserverez l\'accès jusqu\'à la fin de votre période de facturation en cours. Pas de contrat d\'engagement, pas de frais d\'annulation.';
  FR['pricing.faq.q5'] = 'Les abonnements sont-ils requis pour utiliser YOUNGMERIT ?';
  FR['pricing.faq.a5'] = '<strong>Non.</strong> Le plan Gratuit vous donne accès au marketplace principal. Vous pouvez publier des tâches, postuler à des offres et effectuer des transactions sans payer d\'abonnement. Les abonnements débloquent des fonctionnalités de productivité, des analyses et des frais réduits — ce sont des améliorations, pas une obligation.';
  FR['pricing.faq.q6'] = 'Proposez-vous des réductions pour les organismes à but non lucratif ou les établissements d\'enseignement ?';
  FR['pricing.faq.a6'] = 'Oui. Nous proposons des tarifs spéciaux pour les organismes à but non lucratif enregistrés, les établissements d\'enseignement et les entreprises sociales. Contactez notre équipe à <a href="mailto:support@growiq.co" style="color:var(--amber);text-decoration:none;">support@growiq.co</a> pour discuter de vos besoins spécifiques.';
  FR['pricing.toggle.perYear'] = '/an';
  FR['pricing.toggle.saveAmount'] = 'Économisez {amount}/an';
  FR['pricing.calc.savePrefix'] = 'Économisez ';

  // ---- pricing.* (full set) ----
  FR['pricing.hero.eyebrow'] = 'Simple. Transparent. Sans surprises.';
  FR['pricing.hero.title'] = 'DES TARIFS QUI<br/><span class="accent">ÉVOLUENT AVEC VOUS.</span>';
  FR['pricing.hero.desc'] = '<strong>Gratuit pour commencer.</strong> Ne payez que lorsque vous recrutez à grande échelle. Des frais de transaction transparents et des abonnements prévisibles — sans coûts cachés.';
  FR['pricing.hero.tag1'] = '✓ Aucune carte bancaire requise';
  FR['pricing.hero.tag2'] = '✓ Annulez à tout moment';
  FR['pricing.hero.tag3'] = '✓ Garantie de remboursement de 14 jours';
  FR['pricing.toggle.monthly'] = 'Mensuel';
  FR['pricing.toggle.annual'] = 'Annuel';
  FR['pricing.toggle.save'] = 'Économisez 20%';
  FR['pricing.free.name'] = 'Gratuit';
  FR['pricing.free.desc'] = 'Pour les particuliers qui débutent';
  FR['pricing.free.period'] = '/mois';
  FR['pricing.free.annual'] = '0 R/an';
  FR['pricing.free.feat1'] = 'Publiez jusqu\'à 3 tâches/mois';
  FR['pricing.free.feat2'] = 'Profil d\'entreprise basique';
  FR['pricing.free.feat3'] = 'Support standard';
  FR['pricing.free.feat4'] = 'Postulez à des tâches';
  FR['pricing.free.feat5'] = 'Publications vocales';
  FR['pricing.free.feat7'] = 'Analyses';
  FR['pricing.free.cta'] = 'Commencer Gratuitement';
  FR['pricing.pro.name'] = 'Professionnel Pro';
  FR['pricing.pro.desc'] = 'Pour les professionnels qui construisent leur carrière';
  FR['pricing.pro.period'] = '/mois';
  FR['pricing.pro.annual'] = '1 429 R/an';
  FR['pricing.pro.feat1'] = 'Analyses de profil';
  FR['pricing.pro.feat2'] = 'Mise en avant du profil';
  FR['pricing.pro.feat5'] = 'Candidatures prioritaires';
  FR['pricing.pro.feat6'] = 'Vérification des compétences';
  FR['pricing.pro.feat7'] = 'Opportunités enregistrées illimitées';
  FR['pricing.pro.cta'] = 'Commencer Pro';
  FR['pricing.biz.name'] = 'Entreprise Pro';
  FR['pricing.biz.desc'] = 'Pour les équipes en croissance qui recrutent régulièrement';
  FR['pricing.biz.period'] = '/mois';
  FR['pricing.biz.annual'] = '4 790 R/an';
  FR['pricing.biz.popular'] = 'Le Plus Populaire';
  FR['pricing.biz.feat1'] = 'Tâches illimitées';
  FR['pricing.biz.feat3'] = 'Filtrage des candidatures';
  FR['pricing.biz.feat4'] = '5 membres d\'équipe';
  FR['pricing.biz.feat5'] = 'Tableau de bord analytique';
  FR['pricing.biz.feat6'] = 'Vérification d\'entreprise';
  FR['pricing.biz.feat7'] = 'Support prioritaire';
  FR['pricing.biz.feat8'] = 'Profil d\'entreprise mis en avant';
  FR['pricing.biz.feat9'] = 'Frais de marketplace réduits (10% → 8%)';
  FR['pricing.biz.cta'] = 'Commencer Entreprise Pro';
  FR['pricing.growth.name'] = 'Croissance Entreprise';
  FR['pricing.growth.desc'] = 'Pour les entreprises qui recrutent à grande échelle';
  FR['pricing.growth.period'] = '/mois';
  FR['pricing.growth.annual'] = '9 590 R/an';
  FR['pricing.growth.feat1'] = 'Tout ce qui est inclus dans Pro';
  FR['pricing.growth.feat2'] = 'Frais de marketplace réduits (10% → 6%)';
  FR['pricing.growth.feat5'] = 'Pipeline de recrutement';
  FR['pricing.growth.feat6'] = 'Sièges d\'équipe illimités';
  FR['pricing.growth.feat7'] = 'Tâches mises en avant';
  FR['pricing.growth.feat8'] = 'Analyses avancées';
  FR['pricing.growth.cta'] = 'Commencer Croissance';
  FR['pricing.fees.eyebrow'] = 'FRAIS DE <span class="accent">MARKETPLACE.</span>';
  FR['pricing.fees.title'] = 'Des frais de transaction transparents qui évoluent avec votre volume. Vous ne payez que lorsque de la valeur est créée.';
  FR['pricing.fees.tier1.range'] = '0 R – 999 R <small>par tâche</small>';
  FR['pricing.fees.tier1.desc'] = 'Taux standard pour les petites tâches';
  FR['pricing.fees.tier1.badge1'] = '✓ Séquestre sécurisé';
  FR['pricing.fees.tier1.badge2'] = '✓ Protection contre les litiges';
  FR['pricing.fees.tier2.range'] = '1 000 R – 4 999 R <small>par tâche</small>';
  FR['pricing.fees.tier2.desc'] = 'Taux réduit pour les tâches moyennes';
  FR['pricing.fees.tier2.badge1'] = '✓ Support prioritaire';
  FR['pricing.fees.tier2.badge2'] = '✓ Paiements plus rapides';
  FR['pricing.fees.tier3.range'] = '5 000 R+ <small>par tâche</small>';
  FR['pricing.fees.tier3.desc'] = 'Meilleur taux pour les grands projets';
  FR['pricing.fees.tier3.badge1'] = '✓ Gestionnaire de compte dédié';
  FR['pricing.fees.tier3.badge2'] = '✓ Support premium';
  FR['pricing.fees.note'] = '🔒 Tous les paiements sont protégés par séquestre. <a href="dispute-system.html" style="color:var(--amber);text-decoration:none;">En savoir plus sur la résolution des litiges →</a>';
  FR['pricing.calc.title'] = 'COMBIEN POURRIEZ-VOUS <span style="color:var(--amber);">ÉCONOMISER ?</span>';
  FR['pricing.calc.desc'] = 'Découvrez la différence qu\'un abonnement fait sur vos frais de marketplace.';
  FR['pricing.calc.label'] = 'Dépense mensuelle en tâches';
  FR['pricing.calc.freeFees'] = 'Frais du Plan Gratuit';
  FR['pricing.calc.proFees'] = 'Frais Entreprise Pro';
  FR['pricing.calc.growthFees'] = 'Frais Croissance Entreprise';
  FR['pricing.calc.note'] = 'Calculé sur la base des frais de marketplace moyens de 10% pour Gratuit, 8% pour Pro, 6% pour Croissance.';
  FR['pricing.compare.title'] = 'COMPAREZ <span class="accent">LES FORMULES.</span>';
  FR['pricing.compare.desc'] = 'Tout ce que vous devez savoir, côte à côte.';
  FR['pricing.compare.feature'] = 'Fonctionnalité';
  FR['pricing.compare.free'] = 'Gratuit';
  FR['pricing.compare.pro'] = 'Professionnel Pro';
  FR['pricing.compare.biz'] = 'Entreprise Pro';
  FR['pricing.compare.growth'] = 'Croissance Entreprise';
  FR['pricing.compare.postTasks'] = 'Publier des tâches';
  FR['pricing.compare.postTasks.free'] = '3/mois';
  FR['pricing.compare.postTasks.biz'] = '✓ Illimité';
  FR['pricing.compare.postTasks.growth'] = '✓ Illimité';
  FR['pricing.compare.applyTasks'] = 'Postuler à des tâches';
  FR['pricing.compare.applyTasks.free'] = '✓';
  FR['pricing.compare.applyTasks.pro'] = '✓ Prioritaire';
  FR['pricing.compare.analytics'] = 'Analyses';
  FR['pricing.compare.analytics.free'] = '✗';
  FR['pricing.compare.analytics.pro'] = '✓ Profil';
  FR['pricing.compare.analytics.biz'] = '✓ Tableau de bord';
  FR['pricing.compare.analytics.growth'] = '✓ Avancé';
  FR['pricing.compare.team'] = 'Membres de l\'équipe';
  FR['pricing.compare.team.free'] = '✗';
  FR['pricing.compare.team.biz'] = '5 sièges';
  FR['pricing.compare.team.growth'] = '✓ Illimité';
  FR['pricing.compare.featured'] = 'Mise en avant';
  FR['pricing.compare.featured.free'] = '✗';
  FR['pricing.compare.featured.pro'] = '✓ Profil';
  FR['pricing.compare.featured.biz'] = '✓ Entreprise';
  FR['pricing.compare.featured.growth'] = '✓ Entreprise + tâches';
  FR['pricing.compare.fee'] = 'Frais de marketplace';
  FR['pricing.compare.fee.free'] = '10 / 8 / 6%';
  FR['pricing.compare.fee.biz'] = '<span style="color:var(--amber);font-weight:600;">8 / 6 / 5%</span>';
  FR['pricing.compare.fee.growth'] = '<span style="color:var(--amber);font-weight:600;">6 / 5 / 4%</span>';
  FR['pricing.compare.support'] = 'Support';
  FR['pricing.compare.support.free'] = 'Standard';
  FR['pricing.compare.support.pro'] = 'Standard';
  FR['pricing.compare.support.biz'] = '✓ Prioritaire';
  FR['pricing.compare.support.growth'] = '✓ Premium';

  FR['pricing.fees.tier1.rate'] = '10%';
  FR['pricing.fees.tier2.rate'] = '8%';
  FR['pricing.fees.tier3.rate'] = '6%';

  // ---- waitlist.* ----
  FR['waitlist.hero.eyebrow'] = 'Bientôt disponible — début 2026';
  FR['waitlist.hero.title1'] = 'REJOIGNEZ LA';
  FR['waitlist.hero.title2'] = 'LISTE';
  FR['waitlist.hero.title3'] = 'D\'ATTENTE.';
  FR['waitlist.hero.desc'] = '<strong>Soyez le premier à y accéder.</strong> Nous construisons la plateforme où les jeunes bâtissent des historiques de travail vérifiés et où les entreprises trouvent des talents de confiance. Inscrivez-vous ci-dessous pour obtenir un accès anticipé lors du lancement.';
  FR['waitlist.hero.people'] = 'Personnes en attente';
  FR['waitlist.hero.countries'] = 'Pays';
  FR['waitlist.hero.launch'] = 'Année de lancement';
  FR['waitlist.left.title'] = 'SOYEZ PARMI LES<br/><span class="accent">PREMIERS.</span>';
  FR['waitlist.left.desc'] = 'Les membres fondateurs bénéficient d\'avantages exclusifs. Nous sélectionnons avec soin la première communauté pour façonner le fonctionnement de la plateforme.';
  FR['waitlist.benefit1'] = 'Badge membre fondateur sur votre profil';
  FR['waitlist.benefit2'] = 'Accès anticipé — quelques jours avant le lancement public';
  FR['waitlist.benefit3'] = 'Canal communautaire exclusif réservé aux fondateurs';
  FR['waitlist.benefit4'] = 'Accès gratuit à vie à la plateforme (niveau fondateur)';
  FR['waitlist.card.label'] = 'Rejoindre la liste';
  FR['waitlist.card.title'] = 'RÉSERVEZ VOTRE PLACE';
  FR['waitlist.card.desc'] = 'Nous vous préviendrons dès que nous serons en ligne. Pas de spam, pas de bêtises.';
  FR['waitlist.form.name'] = 'Nom complet';
  FR['waitlist.form.email'] = 'Adresse e-mail';
  FR['waitlist.form.type'] = 'Type de compte';
  FR['waitlist.form.type.worker'] = 'Travailleur — trouver des tâches';
  FR['waitlist.form.type.business'] = 'Entreprise — recruter des talents';
  FR['waitlist.form.type.both'] = 'Les deux — je suis intéressé par les deux';
  FR['waitlist.form.country'] = 'Pays';
  FR['waitlist.form.country.za'] = '🇿🇦 Afrique du Sud';
  FR['waitlist.form.country.cn'] = '🇨🇳 Chine';
  FR['waitlist.form.country.us'] = '🇺🇸 États-Unis';
  FR['waitlist.form.country.fr'] = '🇫🇷 France';
  FR['waitlist.form.country.es'] = '🇪🇸 Espagne';
  FR['waitlist.form.country.gb'] = '🇬🇧 Royaume-Uni';
  FR['waitlist.form.country.other'] = '🌍 Autre';
  FR['waitlist.form.consent'] = 'J\'accepte de recevoir occasionnellement des mises à jour de l\'équipe. Je peux me désabonner à tout moment. <a href="privacy-policy.html">Politique de Confidentialité</a>.';
  FR['waitlist.form.cta'] = 'Réserver ma place';
  FR['waitlist.form.note'] = 'Lancement bientôt — nous vous enverrons un e-mail en premier';
  FR['waitlist.success.title'] = 'VOUS ÊTES SUR LA LISTE.';
  FR['waitlist.success.desc'] = 'Vous avez bien été ajouté à la liste d\'attente pour notre lancement. Nous vous préviendrons quand le moment approchera.';
  FR['waitlist.success.back'] = 'Retour';
  FR['waitlist.success.note'] = 'Consultez votre e-mail pour la confirmation. Ajoutez-nous à vos contacts.';
  FR['waitlist.social.text'] = 'Déjà sur la liste d\'attente dans 6 pays';
  FR['waitlist.form.name.error'] = 'Veuillez saisir votre nom';
  FR['waitlist.form.email.error'] = 'Veuillez saisir une adresse e-mail valide';
  FR['waitlist.form.consent.error'] = 'Veuillez accepter de recevoir des mises à jour';
  FR['waitlist.form.errorAlert'] = 'Une erreur s\'est produite. Veuillez réessayer.';
  FR['waitlist.social.tag1'] = 'FONDATEUR';
  FR['waitlist.social.tag2'] = 'ACCÈS';
  FR['waitlist.social.tag3'] = 'ANTICIPÉ';
  FR['waitlist.social.join'] = 'Rejoignez plus de {count} futurs membres';

  // ---- auth.* ----
  FR['auth.nav.back'] = 'Retour au site';
  FR['auth.left.eyebrow'] = 'Bienvenue sur YOUNGMERIT';
  FR['auth.left.title'] = 'VOTRE TRAVAIL.<br/>VOTRE <span class="accent">PREUVE.</span>';
  FR['auth.left.desc'] = 'Rejoignez de jeunes travailleurs et des entreprises qui bâtissent la confiance et font avancer les choses dans six pays.';
  FR['auth.left.trust1'] = 'Identité vérifiée sur chaque compte';
  FR['auth.left.trust2'] = 'Paiements conservés en séquestre sécurisé';
  FR['auth.left.trust3'] = 'Construisez votre Passeport de Compétences à chaque tâche';
  FR['auth.left.trust4'] = 'Actif dans six pays à travers le monde';
  FR['auth.mode.signup'] = 'S\'inscrire';
  FR['auth.mode.login'] = 'Se Connecter';
  FR['auth.demo.tryLabel'] = 'Essayer un compte démo';
  FR['auth.demo.worker'] = 'Travailleur';
  FR['auth.demo.worker.stats'] = '12 tâches &middot; note 4,8 &middot; 4 280 R gagnés';
  FR['auth.demo.worker.cta'] = 'Se connecter en tant que Travailleur';
  FR['auth.demo.business'] = 'Entreprise';
  FR['auth.demo.business.stats'] = '24 tâches &middot; note 4,9 &middot; 19 recrutements';
  FR['auth.demo.business.cta'] = 'Se connecter en tant qu\'Entreprise';
  FR['auth.demo.loggingIn'] = 'Connexion en tant que {name}…';
  FR['auth.verify.title'] = 'VÉRIFIEZ VOTRE E-MAIL.';
  FR['auth.verify.desc'] = 'Nous avons envoyé un lien de vérification à<br/><strong id="verifyEmail" style="color:var(--dark);"></strong>';
  FR['auth.verify.note'] = 'Cliquez sur le lien dans l\'e-mail pour activer votre compte. Vérifiez votre dossier spam si vous ne le voyez pas.';
  FR['auth.verify.resend'] = 'Renvoyer l\'e-mail de vérification';
  FR['auth.verify.resent'] = 'E-mail renvoyé avec succès.';
  FR['auth.success.titleLogin'] = 'CONTENT DE VOUS REVOIR.';
  FR['auth.success.msgLogin'] = 'Vous êtes maintenant connecté. Direction votre profil…';
  FR['auth.success.welcomeName'] = 'CONTENT DE VOUS REVOIR, {name}.';
  FR['auth.success.loggingIn'] = 'Connexion en cours…';
  FR['auth.signup.title'] = 'CRÉEZ VOTRE COMPTE';
  FR['auth.signup.desc'] = 'Gratuit pour s\'inscrire. Aucune carte bancaire requise.';
  FR['auth.alert.generic'] = 'Une erreur s\'est produite. Veuillez réessayer.';
  FR['auth.signup.typeLabel'] = 'Je m\'inscris en tant que';
  FR['auth.signup.typeWorkerDesc'] = 'Trouvez des tâches, soyez payé, bâtissez votre réputation';
  FR['auth.signup.typeBusinessDesc'] = 'Publiez des tâches et recrutez de jeunes talents fiables';
  FR['auth.signup.typeErr'] = 'Veuillez sélectionner un type de compte pour continuer.';
  FR['auth.signup.firstName'] = 'Prénom';
  FR['auth.signup.lastName'] = 'Nom';
  FR['auth.err.required'] = 'Requis';
  FR['auth.signup.bizName'] = 'Nom de l\'entreprise / organisation';
  FR['auth.signup.bizName.err'] = 'Requis pour les comptes entreprise';
  FR['auth.signup.email'] = 'Adresse e-mail';
  FR['auth.err.email'] = 'Saisissez une adresse e-mail valide';
  FR['auth.signup.password'] = 'Mot de passe';
  FR['auth.pw.tooShort'] = 'Trop court';
  FR['auth.pw.tooWeak'] = 'Trop faible';
  FR['auth.pw.weak'] = 'Faible';
  FR['auth.pw.fair'] = 'Correct';
  FR['auth.pw.good'] = 'Bon';
  FR['auth.pw.strong'] = 'Fort';
  FR['auth.signup.password.err'] = 'Le mot de passe doit contenir au moins 8 caractères';
  FR['auth.signup.cta'] = 'Créer un compte';
  FR['auth.signup.terms'] = 'En vous inscrivant, vous acceptez nos <a href="terms.html">Conditions d\'Utilisation</a> et notre <a href="privacy-policy.html">Politique de Confidentialité</a>.';
  FR['auth.signup.switchPrompt'] = 'Vous avez déjà un compte ?';
  FR['auth.signup.switchLink'] = 'Se connecter';
  FR['auth.login.title'] = 'CONTENT DE VOUS REVOIR.';
  FR['auth.login.desc'] = 'Connectez-vous pour accéder à votre profil et vos tâches.';
  FR['auth.login.alertMsg'] = 'L\'e-mail ou le mot de passe est incorrect.';
  FR['auth.login.err.email'] = 'Saisissez votre adresse e-mail';
  FR['auth.login.err.password'] = 'Saisissez votre mot de passe';
  FR['auth.login.forgot'] = 'Mot de passe oublié ?';
  FR['auth.login.forgotSent'] = 'E-mail de réinitialisation envoyé — vérifiez votre boîte de réception.';
  FR['auth.login.cta'] = 'Se connecter';
  FR['auth.login.switchPrompt'] = 'Vous n\'avez pas de compte ?';
  FR['auth.login.switchLink'] = 'Inscrivez-vous gratuitement';
  FR['auth.err.wentWrong'] = 'Une erreur s\'est produite.';
  FR['auth.err.alreadyRegistered'] = 'Cet e-mail est déjà enregistré. Essayez plutôt de vous connecter.';
  FR['auth.err.passwordShort'] = 'Le mot de passe doit contenir au moins 8 caractères.';
  FR['auth.err.invalidEmail'] = 'Veuillez saisir une adresse e-mail valide.';
  FR['auth.err.connection'] = 'Erreur de connexion. Vérifiez votre connexion internet et réessayez.';
  FR['auth.err.loginFailed'] = 'Échec de la connexion.';
  FR['auth.err.notConfirmed'] = 'Veuillez d\'abord vérifier votre e-mail. Consultez votre boîte de réception pour le lien de confirmation.';
  FR['auth.err.tooMany'] = 'Trop de tentatives de connexion. Veuillez patienter quelques minutes et réessayer.';
  FR['auth.err.enterEmailFirst'] = 'Saisissez d\'abord votre adresse e-mail ci-dessus.';
  FR['auth.err.resetFailed'] = 'Impossible d\'envoyer l\'e-mail de réinitialisation. Vérifiez l\'adresse et réessayez.';

  // ---- howworks.* ----
  FR['howworks.hero.eyebrow'] = 'Simple. Vérifié. Mondial.';
  FR['howworks.hero.title'] = 'COMMENT<br/>NOUS<br/><span class="accent">TRAVAILLONS.</span>';
  FR['howworks.hero.desc'] = 'Des étapes simples pour construire de l\'expérience ou trouver le bon talent. Pas de diplôme, pas de conjectures, pas de risque.';
  FR['howworks.hero.tabPeople'] = 'Pour les Particuliers';
  FR['howworks.hero.tabBusiness'] = 'Pour les Entreprises';
  FR['howworks.hero.scroll'] = 'Faites défiler pour explorer';
  FR['howworks.steps.tag1'] = 'Étape Un';
  FR['howworks.steps.tag2'] = 'Étape Deux';
  FR['howworks.steps.tag3'] = 'Étape Trois';
  FR['howworks.steps.tag4'] = 'Étape Quatre';
  FR['howworks.steps.people.s1.title'] = 'CRÉEZ VOTRE PROFIL';
  FR['howworks.steps.people.s1.desc'] = 'Inscrivez-vous en quelques minutes. Ajoutez vos compétences, votre localisation et votre niveau d\'expérience. Vérifiez votre identité pour débloquer un accès complet.';
  FR['howworks.steps.people.s1.d1'] = 'Gratuit pour s\'inscrire';
  FR['howworks.steps.people.s1.d2'] = '6 pays';
  FR['howworks.steps.people.s1.d3'] = 'En ligne en moins de 5 minutes';
  FR['howworks.steps.people.s1.d4'] = 'Identité vérifiée';
  FR['howworks.steps.people.s2.title'] = 'TROUVEZ ET POSTULEZ À DES TÂCHES';
  FR['howworks.steps.people.s2.desc'] = 'Parcourez des tâches rémunérées adaptées aux débutants publiées par des entreprises vérifiées. Filtrez par compétence, rémunération, échéance et niveau.';
  FR['howworks.steps.people.s2.d1'] = 'Tâches de design';
  FR['howworks.steps.people.s2.d2'] = 'Données et Recherche';
  FR['howworks.steps.people.s2.d3'] = 'Assistance IA';
  FR['howworks.steps.people.s2.d4'] = 'Support Client';
  FR['howworks.steps.people.s3.title'] = 'FAITES UN EXCELLENT TRAVAIL ET SOYEZ PAYÉ';
  FR['howworks.steps.people.s3.desc'] = 'Terminez la tâche, communiquez clairement et soumettez votre livrable. Le paiement est libéré instantanément du séquestre une fois approuvé.';
  FR['howworks.steps.people.s3.d1'] = 'Protégé par séquestre';
  FR['howworks.steps.people.s3.d2'] = 'Paiement instantané';
  FR['howworks.steps.people.s3.d3'] = 'Messagerie intégrée à la plateforme';
  FR['howworks.steps.people.s3.d4'] = 'Livraison sécurisée de fichiers';
  FR['howworks.steps.people.s4.title'] = 'CONSTRUISEZ VOTRE RÉPUTATION';
  FR['howworks.steps.people.s4.desc'] = 'Chaque tâche accomplie vous rapporte une note et une preuve de travail. Votre score de confiance augmente et de meilleures opportunités suivent.';
  FR['howworks.steps.people.s4.d1'] = 'Avis vérifiés';
  FR['howworks.steps.people.s4.d2'] = 'Score de confiance public';
  FR['howworks.steps.people.s4.d3'] = 'Progression de niveau';
  FR['howworks.steps.people.s4.d4'] = 'Mise à jour du Passeport de Compétences';
  FR['howworks.steps.biz.s1.title'] = 'PUBLIEZ VOTRE TÂCHE';
  FR['howworks.steps.biz.s1.desc'] = 'Décrivez ce dont vous avez besoin en langage simple. Fixez votre budget, votre échéance et le niveau de compétence requis. La publication est entièrement gratuite.';
  FR['howworks.steps.biz.s1.d1'] = 'Gratuit à publier';
  FR['howworks.steps.biz.s1.d2'] = 'En ligne en quelques minutes';
  FR['howworks.steps.biz.s1.d3'] = 'Mise en correspondance intelligente';
  FR['howworks.steps.biz.s1.d4'] = 'Vivier de talents mondial';
  FR['howworks.steps.biz.s2.title'] = 'EXAMINEZ LES CANDIDATS VÉRIFIÉS';
  FR['howworks.steps.biz.s2.desc'] = 'Parcourez des candidats avec de vrais scores de confiance, taux de réalisation et portfolios. Chaque indicateur est vérifié et suivi de manière indépendante.';
  FR['howworks.steps.biz.s2.d1'] = 'Scores de confiance affichés';
  FR['howworks.steps.biz.s2.d2'] = 'Preuve d\'historique de travail';
  FR['howworks.steps.biz.s2.d3'] = 'Travailleurs à identité vérifiée';
  FR['howworks.steps.biz.s2.d4'] = 'Badges de niveau affichés';
  FR['howworks.steps.biz.s3.title'] = 'SUIVEZ LE TRAVAIL ET APPROUVEZ';
  FR['howworks.steps.biz.s3.desc'] = 'Communiquez directement sur la plateforme. Examinez les livrables, demandez des révisions et approuvez — le tout protégé par le séquestre jusqu\'au dernier centime.';
  FR['howworks.steps.biz.s3.d1'] = 'Chat intégré à la plateforme';
  FR['howworks.steps.biz.s3.d2'] = 'Transfert sécurisé de fichiers';
  FR['howworks.steps.biz.s3.d3'] = 'Demandes de révision';
  FR['howworks.steps.biz.s3.d4'] = 'Protection par séquestre';
  FR['howworks.steps.biz.s4.title'] = 'CONSTRUISEZ VOTRE VIVIER DE TALENTS';
  FR['howworks.steps.biz.s4.desc'] = 'Enregistrez vos meilleurs travailleurs dans des viviers de talents privés. Réembauchez en un clic. Recrutez des travailleurs exceptionnels à temps plein directement via nous.';
  FR['howworks.steps.biz.s4.d1'] = 'Viviers de talents privés';
  FR['howworks.steps.biz.s4.d2'] = 'Réembauche en un clic';
  FR['howworks.steps.biz.s4.d3'] = 'Option d\'embauche à temps plein';
  FR['howworks.steps.biz.s4.d4'] = 'Historique de performance';
  FR['howworks.trust.eyebrow'] = 'Conçu pour la Confiance';
  FR['howworks.trust.title'] = 'SÛR DU DÉBUT<br/>À LA FIN.';
  FR['howworks.trust.desc'] = 'Chaque transaction sur notre plateforme est protégée par des couches de vérification, de séquestre et de résolution des litiges.';
  FR['howworks.trust.card1.title'] = 'Paiements Séquestrés';
  FR['howworks.trust.card1.desc'] = 'Les fonds sont conservés en sécurité jusqu\'à ce que le travail soit approuvé. Aucun paiement n\'est libéré tant que l\'entreprise n\'a pas confirmé la livraison.';
  FR['howworks.trust.card2.title'] = 'Vérification d\'Identité';
  FR['howworks.trust.card2.desc'] = 'Tous les travailleurs et entreprises complètent la vérification d\'identité avant de transiger. Vous savez toujours à qui vous avez affaire.';
  FR['howworks.trust.card4.title'] = 'Protection par NDA';
  FR['howworks.trust.card4.desc'] = 'Les tâches d\'entreprise sensibles peuvent être couvertes par des accords de confidentialité juridiquement contraignants. Le travail confidentiel reste confidentiel.';
  FR['howworks.trust.card5.title'] = 'Résolution des Litiges';
  FR['howworks.trust.card5.desc'] = 'Si quelque chose ne va pas, notre équipe de médiation examine l\'historique de travail, les messages et les livrables pour parvenir à une résolution équitable.';
  FR['howworks.trust.card6.title'] = 'Vérification de l\'Employeur';
  FR['howworks.trust.card6.desc'] = 'Les entreprises sont vérifiées avant de publier des tâches. Les travailleurs savent toujours qu\'une entreprise réelle et responsable se trouve derrière chaque emploi.';
  FR['howworks.rep.eyebrow'] = 'Le Système de Progression';
  FR['howworks.rep.title'] = 'FAITES ÉVOLUER VOTRE<br/><span class="accent">RÉPUTATION.</span>';
  FR['howworks.rep.desc'] = 'Chaque tâche que vous accomplissez vous fait progresser vers un niveau supérieur — débloquant une meilleure rémunération, plus de visibilité et une plus grande confiance des employeurs.';
  FR['howworks.levels.rookie.name'] = 'DÉBUTANT';
  FR['howworks.levels.rookie.tag'] = 'Niveau de départ';
  FR['howworks.levels.rookie.range'] = '0 à 4 tâches';
  FR['howworks.levels.rookie.perk1'] = 'Accès aux tâches débutants';
  FR['howworks.levels.rookie.perk2'] = 'Construisez votre profil';
  FR['howworks.levels.rookie.perk3'] = 'Obtenez vos premiers avis';
  FR['howworks.levels.verified.name'] = 'VÉRIFIÉ';
  FR['howworks.levels.verified.tag'] = 'Débutant confirmé';
  FR['howworks.levels.verified.range'] = '5 à 19 tâches';
  FR['howworks.levels.verified.perk1'] = 'Badge vérifié affiché';
  FR['howworks.levels.verified.perk2'] = 'Rémunération plus élevée débloquée';
  FR['howworks.levels.verified.perk3'] = 'Passeport de Compétences actif';
  FR['howworks.levels.trusted.name'] = 'DE CONFIANCE';
  FR['howworks.levels.trusted.tag'] = 'Travailleur fiable';
  FR['howworks.levels.trusted.range'] = '20 à 49 tâches';
  FR['howworks.levels.trusted.perk1'] = 'Priorité dans les recherches';
  FR['howworks.levels.trusted.perk2'] = 'Éligible à l\'embauche directe';
  FR['howworks.levels.trusted.perk3'] = 'Accès aux tâches avec NDA';
  FR['howworks.levels.elite.name'] = 'ÉLITE';
  FR['howworks.levels.elite.tag'] = 'Talent de premier niveau';
  FR['howworks.levels.elite.range'] = '50 tâches ou plus';
  FR['howworks.levels.elite.perk1'] = 'Mise en avant du profil';
  FR['howworks.levels.elite.perk3'] = 'Pipeline d\'embauche à temps plein';
  FR['howworks.passport.title'] = 'VOTRE PASSEPORT DE COMPÉTENCES';
  FR['howworks.passport.desc'] = 'Votre Passeport de Compétences est un registre portable et vérifié de chaque tâche accomplie, chaque avis obtenu et chaque compétence prouvée — partageable avec n\'importe quel employeur, n\'importe où dans le monde.';
  FR['howworks.passport.cta1'] = 'Créer le Mien';
  FR['howworks.passport.cta2'] = 'Voir un Exemple';
  FR['howworks.faq.heading'] = 'DES QUESTIONS ?';
  FR['howworks.faq.sub'] = 'Tout ce que vous devez savoir sur nous.';
  FR['howworks.faq.tabGeneral'] = 'Général';
  FR['howworks.faq.tabWorkers'] = 'Pour les Travailleurs';
  FR['howworks.faq.tabBusinesses'] = 'Pour les Entreprises';
  FR['howworks.faq.general.q1'] = 'Qu\'est-ce que YOUNGMERIT ?';
  FR['howworks.faq.general.a1'] = 'YOUNGMERIT est une plateforme mondiale qui connecte les jeunes à de vraies tâches rémunérées auprès d\'entreprises vérifiées. En accomplissant du travail et en obtenant des avis, les travailleurs bâtissent une réputation de preuve de travail vérifiée à laquelle les employeurs font davantage confiance qu\'aux CV ou diplômes traditionnels.';
  FR['howworks.faq.general.q2'] = 'Quels pays YOUNGMERIT prend-il en charge ?';
  FR['howworks.faq.general.a2'] = 'Nous opérons actuellement en Afrique du Sud, en Chine, aux États-Unis, en France, en Espagne et au Royaume-Uni. La plateforme prend en charge l\'anglais, le mandarin, le français et l\'espagnol.';
  FR['howworks.faq.general.q3'] = 'YOUNGMERIT est-il gratuit à utiliser ?';
  FR['howworks.faq.general.a3'] = 'Oui. Les travailleurs peuvent s\'inscrire et postuler à des tâches gratuitement. Les entreprises peuvent publier des tâches gratuitement. Nous prélevons des frais de service minimes uniquement lorsqu\'une tâche est terminée et payée avec succès.';
  FR['howworks.faq.general.q4'] = 'En quoi YOUNGMERIT diffère-t-il des autres plateformes ?';
  FR['howworks.faq.general.a4'] = 'Nous sommes conçus spécifiquement pour les talents débutants. Notre objectif est d\'aider les personnes ayant peu ou pas d\'expérience professionnelle formelle à construire des historiques de travail vérifiés. Nous sommes une plateforme d\'entrée en carrière, pas une place de marché freelance générique.';
  FR['howworks.faq.workers.q1'] = 'Ai-je besoin d\'expérience pour m\'inscrire ?';
  FR['howworks.faq.workers.a1'] = 'Non. Nous sommes spécifiquement conçus pour les personnes ayant peu ou pas d\'expérience professionnelle formelle. Des tâches adaptées aux débutants sont toujours disponibles et votre réputation se construit à partir de zéro grâce au travail que vous effectuez sur la plateforme.';
  FR['howworks.faq.workers.q2'] = 'Comment et quand suis-je payé ?';
  FR['howworks.faq.workers.a2'] = 'Les paiements sont conservés en séquestre et libérés dès que l\'entreprise approuve votre travail. Les fonds vont directement sur votre compte vérifié et peuvent être retirés via PayPal, virement bancaire ou méthodes de paiement locales selon votre pays.';
  FR['howworks.faq.workers.q3'] = 'Qu\'est-ce que le Passeport de Compétences ?';
  FR['howworks.faq.workers.a3'] = 'Le Passeport de Compétences est un registre portable et publiquement partageable de toutes vos tâches accomplies, notes obtenues et compétences vérifiées. Vous pouvez le partager avec des employeurs, l\'inclure dans des candidatures ou l\'utiliser à la place d\'un CV traditionnel.';
  FR['howworks.faq.workers.q4'] = 'Quels sont les Niveaux de Talent ?';
  FR['howworks.faq.workers.a4'] = 'Nous avons quatre niveaux : Débutant (0 à 4 tâches), Vérifié (5 à 19 tâches), De Confiance (20 à 49 tâches) et Élite (50 tâches ou plus). Les niveaux supérieurs débloquent des tâches mieux rémunérées, un placement prioritaire dans les recherches et l\'éligibilité à l\'embauche directe.';
  FR['howworks.faq.businesses.q1'] = 'Comment publier une tâche ?';
  FR['howworks.faq.businesses.a1'] = 'Inscrivez-vous, vérifiez votre entreprise et cliquez sur Publier une Tâche. Décrivez vos besoins, fixez un budget et une échéance, et précisez le niveau de compétence requis. Votre tâche est publiée immédiatement et commence à recevoir des candidatures.';
  FR['howworks.faq.businesses.q2'] = 'Comment les travailleurs sont-ils vérifiés ?';
  FR['howworks.faq.businesses.a2'] = 'Tous les travailleurs sur notre plateforme complètent la vérification d\'identité avant de transiger. Leurs scores de confiance, taux de réalisation des tâches, avis et nombre de réembauches sont suivis de manière indépendante et ne peuvent pas être manipulés.';
  FR['howworks.faq.businesses.q3'] = 'Que se passe-t-il si je ne suis pas satisfait du travail ?';
  FR['howworks.faq.businesses.a3'] = 'Les paiements sont conservés en séquestre jusqu\'à ce que vous approuviez le livrable. Vous pouvez demander des révisions avant de libérer les fonds. En cas de litige, notre équipe de médiation examine toutes les preuves et parvient à une résolution équitable.';
  FR['howworks.faq.businesses.q4'] = 'Puis-je embaucher quelqu\'un à temps plein ?';
  FR['howworks.faq.businesses.a4'] = 'Absolument. Nous prenons en charge l\'embauche directe à temps plein depuis la plateforme. Une fois que vous avez trouvé un travailleur dont vous faites confiance à la qualité, vous pouvez faire une offre d\'emploi formelle via nous.';
  FR['howworks.cta.title'] = 'PRÊT À<br/><span class="accent">COMMENCER ?</span>';
  FR['howworks.cta.desc'] = 'Rejoignez la plateforme où le travail parle plus fort que les diplômes.';
  FR['howworks.cta.findWork'] = 'Chercher du Travail';
  FR['howworks.cta.hireTalent'] = 'Recruter des Talents';

  // ==================== COUNTRY PAGES — FRENCH ====================
  FR['country.common.backToHone'] = 'Retour à l\'Accueil';
  FR['country.common.byTheNumbers'] = 'En chiffres';
  FR['country.common.rootCauses'] = 'Causes profondes';
  FR['country.common.honeTake'] = 'Notre point de vue';
  FR['country.common.exploreOthers'] = 'Découvrez les cinq autres pays';
  FR['country.common.china'] = 'Chine';
  FR['country.common.us'] = 'États-Unis';
  FR['country.common.france'] = 'France';
  FR['country.common.spain'] = 'Espagne';
  FR['country.common.uk'] = 'Royaume-Uni';
  FR['country.common.southAfrica'] = 'Afrique du Sud';

  FR['country.za.hero.title'] = 'AFRIQUE<br/><span class="acc">DU SUD</span>';
  FR['country.za.hero.quote'] = 'Près de la moitié des jeunes d\'Afrique du Sud ne trouvent pas de travail. Voici les données derrière cette crise — et pourquoi la preuve de travail, et non les diplômes sur papier, est la solution.';
  FR['country.za.stats.s1.lbl'] = 'Taux de chômage des jeunes (15–34 ans), T1 2026';
  FR['country.za.stats.s2.lbl'] = 'Chômage chez les 15–24 ans, T1 2026';
  FR['country.za.stats.s3.lbl'] = 'Jeunes sans emploi, ni scolarisés ni en formation';
  FR['country.za.stats.s4.lbl'] = 'Croissance totale du PIB de l\'Afrique du Sud en 2025';
  FR['country.za.stats.title'] = 'LES DONNÉES DERRIÈRE<br/>LA CRISE DE L\'EMPLOI DES JEUNES EN <span class="acc">AFRIQUE DU SUD</span>';
  FR['country.za.causes.title'] = 'POURQUOI EST-IL SI DIFFICILE POUR LES JEUNES<br/>DE TROUVER UN EMPLOI EN <span class="acc">AFRIQUE DU SUD ?</span>';
  FR['country.za.causes.c1.title'] = 'Une croissance économique faible';
  FR['country.za.causes.c1.desc'] = 'Le PIB n\'a augmenté que de 1,1 % en 2025, alors que des centaines de milliers de jeunes supplémentaires sont entrés sur le marché du travail — l\'économie ne crée tout simplement pas assez de nouveaux postes pour les absorber.';
  FR['country.za.causes.c2.title'] = 'Le fossé entre l\'éducation et l\'emploi';
  FR['country.za.causes.c2.desc'] = 'Les écoles et universités ne produisent pas de façon constante des diplômés dotés des compétences précises et opérationnelles que les employeurs recherchent, ce qui crée un décalage persistant entre les qualifications et les emplois.';
  FR['country.za.causes.c3.title'] = 'Le paradoxe de l\'expérience';
  FR['country.za.causes.c3.desc'] = 'Les postes de premier échelon exigent de plus en plus une expérience préalable, excluant les primo-demandeurs d\'emploi des postes mêmes censés leur donner leur chance.';
  FR['country.za.causes.c4.title'] = 'Un découragement croissant';
  FR['country.za.causes.c4.desc'] = 'Près de 3,9 millions de personnes ont complètement cessé de chercher activement du travail, ce qui signifie que le taux de chômage officiel sous-estime probablement l\'ampleur réelle du chômage.';
  FR['country.za.insight'] = 'L\'Afrique du Sud n\'a pas une main-d\'œuvre réticente à travailler — elle a une main-d\'œuvre qui n\'a jamais pu <strong>faire ses preuves</strong>. Des millions de jeunes compétents sont bloqués derrière la même porte verrouillée : chaque emploi de premier échelon exige une expérience impossible à acquérir sans avoir déjà un emploi. Nous brisons ce cercle en permettant aux jeunes Sud-Africains d\'accomplir de vraies tâches rémunérées pour de vraies entreprises et de bâtir un historique vérifié dès le premier jour — sans diplôme ni relations nécessaires.';
  FR['blog.hero.live'] = 'En direct';
  FR['blog.post.voice'] = 'Voix';
  FR['blog.empty.none'] = 'Aucune publication ne correspond à votre recherche.';
  FR['cookieBanner.title'] = 'Nous utilisons des cookies';
  FR['cookieBanner.desc'] = 'Nous utilisons des cookies essentiels pour faire fonctionner les choses. Avec votre consentement, nous aimerions également utiliser des cookies d\'analyse et de préférence pour améliorer votre expérience.';
  FR['cookieBanner.acceptAll'] = 'Tout accepter';
  FR['cookieBanner.rejectAll'] = 'Refuser le non-essentiel';
  FR['cookieBanner.manage'] = 'Gérer les préférences';
  FR['waitlist.form.email.duplicate'] = 'Cet e-mail figure déjà sur la liste d\'attente — nous vous contacterons bientôt.';
  FR['waitlist.form.error.generic'] = 'Une erreur s\'est produite. Veuillez réessayer.';
  FR['contact.form.error.generic'] = 'Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer ou nous écrire directement par e-mail.';
  FR['blog.post.sample'] = 'Exemple';
  FR['blog.post.deleteConfirm'] = 'Supprimer cette publication ? Cette action est irréversible.';
  FR['blog.post.deleted'] = 'Publication supprimée';
  FR['blog.post.saved'] = 'Enregistré dans votre profil';
  FR['blog.post.unsaved'] = 'Retiré des enregistrements';
  FR['blog.post.published'] = 'Publié dans le fil de la communauté';
  FR['blog.voice.micError'] = 'Impossible d\'accéder au microphone. Réessayez ou vérifiez les paramètres de votre navigateur.';
  FR['blog.voice.httpsNeeded'] = 'L\'accès au micro nécessite le HTTPS — cela fonctionnera une fois la page hébergée en ligne, et non ouverte comme fichier local.';
  FR['blog.voice.limitReached'] = 'Limite de 30 secondes atteinte pour le moment';
  FR['blog.voice.permissionDenied'] = 'L\'accès au microphone est bloqué. Vérifiez les autorisations du site dans votre navigateur, autorisez le micro, puis réessayez.';
  FR['blog.voice.noMic'] = 'Aucun microphone n\'a été détecté sur cet appareil';
  FR['blog.voice.recordFirst'] = 'Enregistrez d\'abord une note vocale';
  FR['blog.voice.published'] = 'Note vocale publiée';
  FR['profile.toast.saved'] = 'Enregistré';
  FR['profile.toast.portfolioAdded'] = 'Élément de portfolio ajouté';
  FR['profile.toast.profileUpdated'] = 'Profil mis à jour';
  FR['profile.toast.bioUpdated'] = 'Bio mise à jour';
  FR['profile.toast.detailsSaved'] = 'Détails enregistrés';
  FR['profile.toast.coverUpdated'] = 'Photo de couverture mise à jour';
  FR['profile.toast.photoUpdated'] = 'Photo mise à jour';
  FR['profile.toast.coverUploaded'] = 'Couverture téléchargée — cliquez sur Enregistrer';
  FR['profile.toast.cvUploaded'] = 'CV téléchargé';
  FR['profile.toast.removed'] = 'Supprimé';
  FR['legal.englishOnlyNotice'] = 'Ce document est fourni uniquement en anglais. Pour toute question, veuillez <a href="contact.html" style="color:inherit;text-decoration:underline;">contacter notre équipe d\'assistance</a> dans la langue de votre choix.';
  FR['auth.reset.title'] = 'DÉFINISSEZ UN NOUVEAU MOT DE PASSE.';
  FR['auth.reset.desc'] = 'Choisissez un nouveau mot de passe pour votre compte.';
  FR['auth.reset.newPassword'] = 'Nouveau mot de passe';
  FR['auth.reset.confirmPassword'] = 'Confirmez le nouveau mot de passe';
  FR['auth.reset.err.mismatch'] = 'Les mots de passe ne correspondent pas';
  FR['auth.reset.err.generic'] = 'Une erreur s\'est produite. Veuillez réessayer.';
  FR['auth.reset.cta'] = 'Définir le nouveau mot de passe';
  FR['auth.reset.successTitle'] = 'MOT DE PASSE MIS À JOUR.';
  FR['auth.reset.successMsg'] = 'Direction votre profil…';
  FR['country.za.sources'] = '<strong>Sources :</strong> Statistics South Africa (Stats SA), Enquête trimestrielle sur la population active, T1 2026 · Harambee Youth Employment Accelerator, rapport Breaking Barriers, 2026 · Youth Employment Service (YES).';

  // ==================== COUNTRY PAGES — FRENCH ====================
  FR['country.cn.hero.title'] = 'CHINE<br/><span class="acc"></span>';
  FR['country.cn.hero.quote'] = 'Des promotions de diplômés record se heurtent à une économie qui ralentit. Voici pourquoi tant de jeunes diplômés chinois ne trouvent pas les emplois que leurs diplômes promettaient.';
  FR['country.cn.stats.s1.lbl'] = 'Taux de chômage des jeunes urbains (16–24 ans, hors étudiants), février 2026';
  FR['country.cn.stats.s2.lbl'] = 'Record absolu atteint en juin 2023';
  FR['country.cn.stats.s3.lbl'] = 'Promotion de diplômés la plus nombreuse jamais enregistrée en une seule année';
  FR['country.cn.stats.s4.lbl'] = 'Chômage urbain national global, à titre de comparaison';
  FR['country.cn.stats.title'] = 'LES DONNÉES DERRIÈRE<br/>LA CRISE DE L\'EMPLOI DES JEUNES EN <span class="acc">CHINE</span>';
  FR['country.cn.causes.title'] = 'POURQUOI EST-IL SI DIFFICILE POUR LES JEUNES<br/>DE TROUVER UN EMPLOI EN <span class="acc">CHINE ?</span>';
  FR['country.cn.causes.c1.title'] = 'Un volume record de diplômés';
  FR['country.cn.causes.c1.desc'] = 'Des cohortes successives et record de diplômés universitaires — plus de 12 millions en une seule année — entrent sur un marché du travail qui ne croît pas assez vite pour les absorber.';
  FR['country.cn.causes.c2.title'] = 'Ralentissement de l\'immobilier et de l\'industrie';
  FR['country.cn.causes.c2.desc'] = 'Un ralentissement prolongé de l\'immobilier ainsi qu\'une demande industrielle et exportatrice plus faible ont refroidi le recrutement dans des secteurs qui absorbaient traditionnellement les jeunes travailleurs.';
  FR['country.cn.causes.c3.title'] = 'Un décalage de compétences qui se creuse';
  FR['country.cn.causes.c3.desc'] = 'De nombreux diplômés sont formés pour des carrières urbaines de cols blancs, mais les postes disponibles se trouvent de plus en plus dans d\'autres secteurs ou exigent des compétences différentes, plus pratiques.';
  FR['country.cn.causes.c4.title'] = 'Un crédit plus restreint pour les petites entreprises';
  FR['country.cn.causes.c4.desc'] = 'Les petites et moyennes entreprises, historiquement les plus gros employeurs de jeunes en Chine, font face à des conditions de financement plus strictes et recrutent avec davantage de prudence.';
  FR['country.cn.insight'] = 'Sur un marché aussi compétitif, un diplôme seul n\'ouvre plus les portes — c\'est <strong>la preuve de ce que l\'on sait réellement faire</strong> qui le fait. Nous donnons aux jeunes en Chine un moyen de bâtir un historique vérifié de travail réellement accompli, afin que les employeurs puissent voir directement leurs compétences plutôt que de s\'appuyer uniquement sur des diplômes dans un vivier de diplômés sursaturé.';
  FR['country.cn.sources'] = '<strong>Sources :</strong> Bureau national des statistiques de Chine (NBS), données mensuelles sur le chômage urbain enquêté, 2025–2026 · Asia Society Policy Institute · reportage approfondi de Nippon.com.';

  // ==================== COUNTRY PAGES — FRANCE (French self-translation) ====================
  FR['country.fr.hero.title'] = 'FRANCE<br/><span class="acc"></span>';
  FR['country.fr.hero.quote'] = 'Le taux de chômage des jeunes en France dépasse deux fois la moyenne nationale. L\'obstacle n\'est pas la compétence — c\'est un marché du travail construit autour des diplômes et de la prudence.';
  FR['country.fr.stats.s1.lbl'] = 'Taux de chômage des jeunes (15–24 ans), début 2026';
  FR['country.fr.stats.s2.lbl'] = 'Taux de chômage national global, à titre de comparaison';
  FR['country.fr.stats.s3.lbl'] = 'Risque de chômage plus élevé pour les titulaires d\'un diplôme de base uniquement';
  FR['country.fr.stats.s4.lbl'] = 'Pic record du chômage des jeunes atteint en 2013';
  FR['country.fr.stats.title'] = 'LES DONNÉES DERRIÈRE<br/>LA CRISE DE L\'EMPLOI DES JEUNES EN <span class="acc">FRANCE</span>';
  FR['country.fr.causes.title'] = 'POURQUOI EST-IL SI DIFFICILE POUR LES JEUNES<br/>DE TROUVER UN EMPLOI EN <span class="acc">FRANCE ?</span>';
  FR['country.fr.causes.c1.title'] = 'Une échelle de diplômes très marquée';
  FR['country.fr.causes.c1.desc'] = 'Le marché du travail français accorde un poids important aux qualifications formelles et au prestige des établissements, ce qui fait que le type et la réputation d\'un diplôme peuvent compter autant que la compétence démontrée.';
  FR['country.fr.causes.c2.title'] = 'Des règles d\'embauche et de licenciement rigides';
  FR['country.fr.causes.c2.desc'] = 'Des protections de l\'emploi solides rendent les employeurs prudents face à une première embauche, car se séparer plus tard d\'un jeune employé peu performant est coûteux et lent.';
  FR['country.fr.causes.c3.title'] = 'Une filière d\'apprentissage inégale';
  FR['country.fr.causes.c3.desc'] = 'Les filières professionnelles et d\'apprentissage existent, mais n\'ont pas le même prestige que les filières académiques, ce qui concentre l\'essentiel de la concurrence sur un ensemble plus restreint de parcours traditionnels.';
  FR['country.fr.causes.c4.title'] = 'Des écarts régionaux et sectoriels';
  FR['country.fr.causes.c4.desc'] = 'Le chômage des jeunes est beaucoup plus élevé dans certaines régions et chez ceux qui n\'ont aucun diplôme, ce qui montre que le poids de la crise n\'est pas réparti de façon égale sur le territoire.';
  FR['country.fr.insight'] = 'Le système français récompense <strong>le bon papier</strong> plutôt que la compétence démontrée. Nous offrons aux jeunes une seconde voie : accomplir un vrai travail rémunéré pour de vraies entreprises, bâtir une réputation vérifiée, et laisser la compétence démontrée — pas seulement le prestige d\'un diplôme — ouvrir la porte de l\'emploi à temps plein.';
  FR['country.fr.sources'] = '<strong>Sources :</strong> Eurostat, taux de chômage des jeunes (15–24 ans), 2025–2026 · Trading Economics · Ministère de l\'Éducation nationale, de l\'Enseignement supérieur et de la Recherche.';

  // ==================== COUNTRY PAGES — UNITED KINGDOM (French translation) ====================
  FR['country.gb.hero.title'] = 'ROYAUME<br/><span class="acc">-UNI</span>';
  FR['country.gb.hero.quote'] = 'Le chômage des jeunes au Royaume-Uni vient d\'atteindre un pic sur 11 ans. Les diplômes se généralisent — et, paradoxalement, sont de plus en plus difficiles à transformer en premier emploi.';
  FR['country.gb.stats.s1.lbl'] = 'Taux de chômage des jeunes (16–24 ans), juillet 2026 — un pic sur 11 ans';
  FR['country.gb.stats.s2.lbl'] = 'Part des diplômés occupant des postes qui ne nécessitent pas de diplôme';
  FR['country.gb.stats.s3.lbl'] = 'Jeunes sans emploi, ni scolarisés ni en formation (NEET) — un record de la série';
  FR['country.gb.stats.s4.lbl'] = 'Jeunes chercheurs d\'emploi sans travail depuis plus d\'un an';
  FR['country.gb.stats.title'] = 'LES DONNÉES DERRIÈRE<br/>LA CRISE DE L\'EMPLOI DES JEUNES AU <span class="acc">ROYAUME-UNI</span>';
  FR['country.gb.causes.title'] = 'POURQUOI EST-IL SI DIFFICILE POUR LES JEUNES<br/>DE TROUVER UN EMPLOI AU <span class="acc">ROYAUME-UNI ?</span>';
  FR['country.gb.causes.c1.title'] = 'L\'inflation des diplômes';
  FR['country.gb.causes.c1.desc'] = 'À mesure que plus de personnes obtiennent des diplômes, les employeurs ont discrètement relevé les exigences d\'entrée sans que la complexité réelle des postes n\'augmente, transformant le diplôme en un simple filtre de sélection plutôt qu\'un véritable signal de compétence.';
  FR['country.gb.causes.c2.title'] = 'La disparition des postes de premier échelon';
  FR['country.gb.causes.c2.desc'] = 'Les offres de premier emploi sont tombées à certains de leurs niveaux les plus bas depuis plus d\'une décennie hors pandémie, réduisant le nombre de premiers barreaux sur l\'échelle de carrière.';
  FR['country.gb.causes.c3.title'] = 'Le coût croissant d\'une première embauche';
  FR['country.gb.causes.c3.desc'] = 'La hausse des charges sociales patronales et du salaire minimum a rendu les embauches junior plus coûteuses, précisément au moment où la demande des employeurs s\'est affaiblie.';
  FR['country.gb.causes.c4.title'] = 'Une marque durable';
  FR['country.gb.causes.c4.desc'] = 'Avec plus d\'un cinquième des jeunes chercheurs d\'emploi sans travail depuis un an ou plus, le chômage prolongé devient lui-même un obstacle, les employeurs se méfiant de plus en plus des périodes d\'inactivité qui s\'allongent.';
  FR['country.gb.insight'] = 'Au Royaume-Uni, un diplôme prouve de plus en plus que l\'on sait <strong>étudier</strong> — pas que l\'on sait <strong>faire le travail</strong>. Nous comblons cet écart en permettant aux jeunes d\'accomplir de vraies tâches rémunérées et de bâtir un historique de compétences vérifié dès le premier jour, offrant aux employeurs un signal plus rapide et plus fiable que les seuls diplômes.';
  FR['country.gb.sources'] = '<strong>Sources :</strong> Office for National Statistics (ONS), statistiques du marché du travail, juillet 2026 · Institute for the Future of Work (IFOW) · Work Foundation, Université de Lancaster.';

  // ==================== COUNTRY PAGES — UNITED STATES (French translation) ====================
  FR['country.us.hero.title'] = 'ÉTATS<br/><span class="acc">-UNIS</span>';
  FR['country.us.hero.quote'] = 'Pour la première fois depuis des décennies, les jeunes diplômés universitaires connaissent un taux de chômage supérieur à la moyenne nationale. Le diplôme n\'est pas le problème — c\'est l\'échelon d\'entrée qui manque.';
  FR['country.us.stats.s1.lbl'] = 'Chômage des jeunes diplômés âgés de 22 à 27 ans, T1 2026';
  FR['country.us.stats.s2.lbl'] = 'Part des jeunes diplômés occupant des emplois ne nécessitant pas de diplôme';
  FR['country.us.stats.s3.lbl'] = 'Chômage des titulaires d\'un diplôme âgés de 25 ans et plus, à titre de comparaison';
  FR['country.us.stats.s4.lbl'] = 'Baisse d\'une année sur l\'autre des offres d\'emploi de premier échelon sur les campus';
  FR['country.us.stats.title'] = 'LES DONNÉES DERRIÈRE<br/>LA CRISE DE L\'EMPLOI DES JEUNES AUX <span class="acc">ÉTATS-UNIS</span>';
  FR['country.us.causes.title'] = 'POURQUOI EST-IL SI DIFFICILE POUR LES JEUNES<br/>DE TROUVER UN EMPLOI AUX <span class="acc">ÉTATS-UNIS ?</span>';
  FR['country.us.causes.c1.title'] = 'Le chômage des diplômés dépasse désormais le taux national';
  FR['country.us.causes.c1.desc'] = 'Pendant cinq années consécutives, le chômage des jeunes diplômés universitaires a dépassé le taux national global — un phénomène quasiment inédit entre 1990 et 2018.';
  FR['country.us.causes.c2.title'] = 'Moins de postes de premier échelon';
  FR['country.us.causes.c2.desc'] = 'Les secteurs qui absorbaient traditionnellement les nouveaux diplômés suppriment des emplois, et les offres destinées aux campus ont fortement baissé d\'une année sur l\'autre, même si le nombre de candidatures par poste continue d\'augmenter.';
  FR['country.us.causes.c3.title'] = 'Le manque de mentorat en télétravail';
  FR['country.us.causes.c3.desc'] = 'Les études montrent que les employeurs se méfient d\'embaucher des personnes inexpérimentées pour des postes en télétravail, où le mentorat informel sur le terrain qui transforme un jeune diplômé en travailleur productif est plus difficile à fournir.';
  FR['country.us.causes.c4.title'] = 'Des résultats extrêmement variables selon la filière';
  FR['country.us.causes.c4.desc'] = 'Le sous-emploi varie de moins de 20 % dans des filières comme les soins infirmiers et l\'informatique à plus de 60 % dans certaines filières de sciences humaines et sociales, montrant qu\'il s\'agit d\'un problème d\'entrée dans la vie active, et non d\'une preuve que le diplôme ne paie plus.';
  FR['country.us.insight'] = 'Les données sont claires : ce n\'est pas que le diplôme a cessé de compter, c\'est qu\'il n\'existe aucun moyen fiable de prouver que l\'on est <strong>prêt pour le poste</strong> avant qu\'on ne vous en confie un. Nous permettons aux jeunes Américains d\'accomplir de vraies tâches rémunérées et de bâtir un historique de travail vérifié qui parle plus fort qu\'une moyenne générale — comblant précisément l\'écart de premier échelon qui pousse le chômage des diplômés au-dessus de la moyenne nationale.';
  FR['country.us.sources'] = '<strong>Sources :</strong> Federal Reserve Bank of New York, The Labor Market for Recent College Graduates, T1 2026 · National Association of Colleges and Employers (NACE) · Economic Policy Institute (EPI).';

  // ==================== COUNTRY PAGES — SPAIN (French translation) ====================
  FR['country.es.hero.title'] = 'ESPAGNE<br/><span class="acc"></span>';
  FR['country.es.hero.quote'] = 'L\'Espagne affiche toujours le taux de chômage des jeunes le plus élevé de l\'UE. Un marché du travail scindé et saisonnier maintient les jeunes travailleurs à l\'écart des postes stables et durables.';
  FR['country.es.stats.s1.lbl'] = 'Taux de chômage des jeunes (moins de 25 ans), janvier 2026';
  FR['country.es.stats.s2.lbl'] = 'Pic record atteint en 2013, à titre de contexte historique';
  FR['country.es.stats.s3.lbl'] = 'Taux de chômage des jeunes moyen dans l\'UE, à titre de comparaison';
  FR['country.es.stats.s4.lbl'] = 'Chômeurs de moins de 25 ans inscrits fin 2025 — un plus bas record';
  FR['country.es.stats.title'] = 'LES DONNÉES DERRIÈRE<br/>LA CRISE DE L\'EMPLOI DES JEUNES EN <span class="acc">ESPAGNE</span>';
  FR['country.es.causes.title'] = 'POURQUOI EST-IL SI DIFFICILE POUR LES JEUNES<br/>DE TROUVER UN EMPLOI EN <span class="acc">ESPAGNE ?</span>';
  FR['country.es.causes.c1.title'] = 'Un marché du travail scindé en deux';
  FR['country.es.causes.c1.desc'] = 'Un clivage de longue date entre des contrats permanents fortement protégés et des contrats temporaires bien plus précaires concentre le travail instable et de courte durée chez les jeunes.';
  FR['country.es.causes.c2.title'] = 'Une économie saisonnière, fortement axée sur le tourisme';
  FR['country.es.causes.c2.desc'] = 'De larges pans de l\'économie espagnole — tourisme, hôtellerie, agriculture — sont saisonniers par nature, générant du turnover plutôt que des carrières d\'entrée de gamme stables et durables.';
  FR['country.es.causes.c3.title'] = 'De fortes disparités régionales';
  FR['country.es.causes.c3.desc'] = 'Le chômage est nettement plus élevé dans le sud, comme en Andalousie, que la moyenne nationale, reflétant des déséquilibres régionaux profonds et persistants.';
  FR['country.es.causes.c4.title'] = 'Un décalage entre l\'éducation et le marché';
  FR['country.es.causes.c4.desc'] = 'Des écarts persistants entre ce qu\'enseignent les écoles et universités et ce dont les employeurs ont réellement besoin allongent et compliquent la recherche d\'emploi des jeunes diplômés.';
  FR['country.es.insight'] = 'Le taux de chômage des jeunes en Espagne a plus que diminué de moitié depuis son pic de 2013 — mais il reste <strong>le plus élevé de l\'UE</strong>. Nous offrons aux jeunes Espagnols un moyen de bâtir une preuve de travail continue sur un marché de l\'emploi fragmenté et saisonnier, transformant des missions ponctuelles en une réputation vérifiée à laquelle les employeurs peuvent faire confiance pour des postes permanents.';
  FR['country.es.sources'] = '<strong>Sources :</strong> Instituto Nacional de Estadística (INE), Enquête sur la population active · Eurostat, taux de chômage des jeunes · Trading Economics.';
  FR['cookies.analytics.desc'] = 'Aidez-nous à comprendre comment les gens utilisent notre plateforme — quelles pages sont visitées, où les utilisateurs abandonnent et comment les fonctionnalités performent. Les données sont agrégées et anonymisées. Nous les utilisons pour améliorer la Plateforme, pas pour vous profiler.';
  FR['cookies.hero.desc'] = 'Choisissez les cookies que nous utilisons. Les cookies essentiels sont toujours actifs — ils font fonctionner le site. Tout le reste dépend de vous.';
  FR['cookies.info.2'] = 'Nous utilisons des cookies et technologies similaires comme décrit ci-dessus. Pour plus de détails sur la gestion de vos données personnelles, consultez notre <a href="privacy-policy.html">Politique de Confidentialité</a>.';
  FR['cookies.marketing.desc'] = 'Permettez-nous de vous montrer du contenu pertinent sur d\'autres plateformes. Nous ne vendons pas vos données à des annonceurs. Si vous acceptez, vous pourriez voir nos publicités sur des sites comme LinkedIn ou Google en fonction de vos habitudes d\'utilisation.';
  FR['dispute.hero.desc'] = 'Quand quelque chose ne va pas, nous intervenons. Notre processus de médiation est équitable, rapide et contraignant au sein de la plateforme — protégeant à la fois les travailleurs et les entreprises.';
  FR['dispute.rules.2'] = 'Notre décision de médiation est contraignante au sein de la plateforme — elle détermine comment les fonds sont libérés. Ce n\'est pas une décision de justice et cela n\'affecte pas votre droit de porter l\'affaire devant les tribunaux ou un organisme de protection des consommateurs compétent.';
  FR['idx.for.desc'] = 'Les jeunes ne peuvent pas être embauchés sans expérience. Les entreprises ne trouvent pas de talents débutants abordables et dignes de confiance. Nous résolvons les deux à la fois.';
  FR['terms.notice'] = '<strong>Résumé en langage simple :</strong> Ces conditions régissent votre utilisation de YoungMerit. Les travailleurs trouvent des tâches et sont payés via un séquestre sécurisé. Les entreprises publient des tâches et paient les travailleurs. Nous prélevons une commission de 10 % sur chaque tâche terminée. Lisez attentivement la Section 6 (Portefeuille et Paiements) et la Section 8 (Litiges).';

  // ==================== COUNTRY PAGES — SPANISH (placed at end of FR section, harmless) ====================
  ES['country.common.backToHone'] = 'Volver al Inicio';
  ES['country.common.byTheNumbers'] = 'En cifras';
  ES['country.common.rootCauses'] = 'Causas fundamentales';
  ES['country.common.honeTake'] = 'Nuestra perspectiva';
  ES['country.common.exploreOthers'] = 'Explora los otros cinco países';
  ES['country.common.china'] = 'China';
  ES['country.common.us'] = 'Estados Unidos';
  ES['country.common.france'] = 'Francia';
  ES['country.common.spain'] = 'España';
  ES['country.common.uk'] = 'Reino Unido';
  ES['country.common.southAfrica'] = 'Sudáfrica';

  ES['country.za.hero.title'] = 'SUD<br/><span class="acc">ÁFRICA</span>';
  ES['country.za.hero.quote'] = 'Casi la mitad de los jóvenes de Sudáfrica no puede encontrar trabajo. Estos son los datos detrás de la crisis — y por qué la prueba de trabajo, no los títulos en papel, es la salida.';
  ES['country.za.stats.s1.lbl'] = 'Tasa de desempleo juvenil (15–34 años), T1 2026';
  ES['country.za.stats.s2.lbl'] = 'Desempleo entre los 15 y 24 años, T1 2026';
  ES['country.za.stats.s3.lbl'] = 'Jóvenes que no estudian, trabajan ni reciben capacitación';
  ES['country.za.stats.s4.lbl'] = 'Crecimiento total del PIB de Sudáfrica en 2025';
  ES['country.za.stats.title'] = 'LOS DATOS DETRÁS DE<br/>LA CRISIS LABORAL JUVENIL DE <span class="acc">SUDÁFRICA</span>';
  ES['country.za.causes.title'] = '¿POR QUÉ ES TAN DIFÍCIL QUE LOS JÓVENES<br/>CONSIGAN EMPLEO EN <span class="acc">SUDÁFRICA?</span>';
  ES['country.za.causes.c1.title'] = 'Crecimiento económico débil';
  ES['country.za.causes.c1.desc'] = 'El PIB creció solo un 1,1% en 2025 mientras cientos de miles de jóvenes más se sumaban al mercado laboral — la economía simplemente no está creando suficientes puestos nuevos para absorberlos.';
  ES['country.za.causes.c2.title'] = 'La brecha entre educación y empleo';
  ES['country.za.causes.c2.desc'] = 'Las escuelas y universidades no producen de forma constante graduados con las habilidades específicas y listas para el trabajo que los empleadores dicen necesitar, dejando un desajuste persistente entre las calificaciones y los empleos.';
  ES['country.za.causes.c3.title'] = 'La paradoja de la experiencia';
  ES['country.za.causes.c3.desc'] = 'Los puestos de nivel inicial exigen cada vez más experiencia previa, dejando fuera a quienes buscan trabajo por primera vez de los mismos empleos que deberían darles su comienzo.';
  ES['country.za.causes.c4.title'] = 'El desánimo en aumento';
  ES['country.za.causes.c4.desc'] = 'Casi 3,9 millones de personas han dejado de buscar trabajo activamente, lo que significa que la tasa de desempleo oficial probablemente subestima la verdadera magnitud del desempleo.';
  ES['country.za.insight'] = 'Sudáfrica no tiene una fuerza laboral que no quiera trabajar — tiene una que no ha podido <strong>demostrarlo</strong>. Millones de jóvenes capaces están atrapados detrás de la misma puerta cerrada: todo empleo de nivel inicial pide experiencia imposible de obtener sin antes tener un trabajo. Rompemos ese ciclo permitiendo que los jóvenes sudafricanos completen tareas reales y remuneradas para empresas reales y construyan un historial verificado desde el primer día — sin necesidad de título ni contactos.';
  ES['blog.hero.live'] = 'En directo';
  ES['blog.post.voice'] = 'Voz';
  ES['blog.empty.none'] = 'Ninguna publicación coincide con tu búsqueda.';
  ES['cookieBanner.title'] = 'Usamos cookies';
  ES['cookieBanner.desc'] = 'Usamos cookies esenciales para que todo funcione. Con tu consentimiento, también nos gustaría usar cookies de análisis y de preferencias para mejorar tu experiencia.';
  ES['cookieBanner.acceptAll'] = 'Aceptar todo';
  ES['cookieBanner.rejectAll'] = 'Rechazar no esenciales';
  ES['cookieBanner.manage'] = 'Gestionar preferencias';
  ES['waitlist.form.email.duplicate'] = 'Este correo ya está en la lista de espera — nos pondremos en contacto pronto.';
  ES['waitlist.form.error.generic'] = 'Algo salió mal. Inténtalo de nuevo.';
  ES['contact.form.error.generic'] = 'Ocurrió un error al enviar tu mensaje. Inténtalo de nuevo o escríbenos directamente por correo.';
  ES['blog.post.sample'] = 'Muestra';
  ES['blog.post.deleteConfirm'] = '¿Eliminar esta publicación? Esto no se puede deshacer.';
  ES['blog.post.deleted'] = 'Publicación eliminada';
  ES['blog.post.saved'] = 'Guardado en tu perfil';
  ES['blog.post.unsaved'] = 'Eliminado de guardados';
  ES['blog.post.published'] = 'Publicado en el feed de la comunidad';
  ES['blog.voice.micError'] = 'No se pudo acceder al micrófono. Inténtalo de nuevo o revisa la configuración de tu navegador.';
  ES['blog.voice.httpsNeeded'] = 'El acceso al micrófono requiere HTTPS — esto funcionará una vez que la página esté alojada en línea, no abierta como archivo local.';
  ES['blog.voice.limitReached'] = 'Límite de 30 segundos alcanzado por ahora';
  ES['blog.voice.permissionDenied'] = 'El acceso al micrófono está bloqueado. Revisa los permisos del sitio en tu navegador, permite el micrófono y vuelve a intentarlo.';
  ES['blog.voice.noMic'] = 'No se encontró ningún micrófono en este dispositivo';
  ES['blog.voice.recordFirst'] = 'Graba una nota de voz primero';
  ES['blog.voice.published'] = 'Nota de voz publicada';
  ES['profile.toast.saved'] = 'Guardado';
  ES['profile.toast.portfolioAdded'] = 'Elemento de portafolio añadido';
  ES['profile.toast.profileUpdated'] = 'Perfil actualizado';
  ES['profile.toast.bioUpdated'] = 'Biografía actualizada';
  ES['profile.toast.detailsSaved'] = 'Detalles guardados';
  ES['profile.toast.coverUpdated'] = 'Portada actualizada';
  ES['profile.toast.photoUpdated'] = 'Foto actualizada';
  ES['profile.toast.coverUploaded'] = 'Portada subida — haz clic en Guardar';
  ES['profile.toast.cvUploaded'] = 'CV subido';
  ES['profile.toast.removed'] = 'Eliminado';
  ES['legal.englishOnlyNotice'] = 'Este documento se proporciona únicamente en inglés. Si tienes preguntas, <a href="contact.html" style="color:inherit;text-decoration:underline;">contacta a nuestro equipo de soporte</a> en tu idioma preferido.';
  ES['auth.reset.title'] = 'ESTABLECE UNA NUEVA CONTRASEÑA.';
  ES['auth.reset.desc'] = 'Elige una nueva contraseña para tu cuenta.';
  ES['auth.reset.newPassword'] = 'Nueva contraseña';
  ES['auth.reset.confirmPassword'] = 'Confirma la nueva contraseña';
  ES['auth.reset.err.mismatch'] = 'Las contraseñas no coinciden';
  ES['auth.reset.err.generic'] = 'Algo salió mal. Inténtalo de nuevo.';
  ES['auth.reset.cta'] = 'Establecer nueva contraseña';
  ES['auth.reset.successTitle'] = 'CONTRASEÑA ACTUALIZADA.';
  ES['auth.reset.successMsg'] = 'Llevándote a tu perfil…';
  ES['country.za.sources'] = '<strong>Fuentes:</strong> Statistics South Africa (Stats SA), Encuesta Trimestral de la Fuerza Laboral, T1 2026 · Harambee Youth Employment Accelerator, informe Breaking Barriers, 2026 · Youth Employment Service (YES).';

  ES['country.cn.hero.title'] = 'CHINA<br/><span class="acc"></span>';
  ES['country.cn.hero.quote'] = 'Promociones de graduados récord chocan contra una economía más lenta. Esta es la razón por la que tantos jóvenes graduados chinos no encuentran los empleos que sus títulos prometían.';
  ES['country.cn.stats.s1.lbl'] = 'Tasa de desempleo juvenil urbano (16–24 años, excl. estudiantes), feb. 2026';
  ES['country.cn.stats.s2.lbl'] = 'Máximo histórico alcanzado en junio de 2023';
  ES['country.cn.stats.s3.lbl'] = 'Promoción de graduados más numerosa jamás registrada en un solo año';
  ES['country.cn.stats.s4.lbl'] = 'Desempleo urbano nacional general, como comparación';
  ES['country.cn.stats.title'] = 'LOS DATOS DETRÁS DE<br/>LA CRISIS LABORAL JUVENIL DE <span class="acc">CHINA</span>';
  ES['country.cn.causes.title'] = '¿POR QUÉ ES TAN DIFÍCIL QUE LOS JÓVENES<br/>CONSIGAN EMPLEO EN <span class="acc">CHINA?</span>';
  ES['country.cn.causes.c1.title'] = 'Un volumen récord de graduados';
  ES['country.cn.causes.c1.desc'] = 'Generaciones sucesivas y récord de graduados universitarios — más de 12 millones en un solo año — están entrando a un mercado laboral que no crece lo suficientemente rápido para absorberlos.';
  ES['country.cn.causes.c2.title'] = 'Desaceleración inmobiliaria e industrial';
  ES['country.cn.causes.c2.desc'] = 'Una desaceleración prolongada en el sector inmobiliario, junto con una demanda manufacturera y de exportación más débil, ha enfriado la contratación en sectores que tradicionalmente absorbían a trabajadores jóvenes.';
  ES['country.cn.causes.c3.title'] = 'Un desajuste de habilidades cada vez mayor';
  ES['country.cn.causes.c3.desc'] = 'Muchos graduados están formados para carreras urbanas de oficina, pero los puestos disponibles se ubican cada vez más en otros sectores o exigen habilidades diferentes y más prácticas.';
  ES['country.cn.causes.c4.title'] = 'Crédito más restringido para pequeñas empresas';
  ES['country.cn.causes.c4.desc'] = 'Las pequeñas y medianas empresas, históricamente el mayor empleador de jóvenes en China, enfrentan condiciones de financiamiento más estrictas y contratan con más cautela.';
  ES['country.cn.insight'] = 'En un mercado tan competitivo, un título por sí solo ya no abre puertas — lo que las abre es <strong>la prueba de lo que realmente puedes hacer</strong>. Le damos a los jóvenes de China una forma de construir un historial verificado de trabajo real completado, para que los empleadores puedan ver la capacidad directamente en lugar de depender solo de credenciales en un mercado de graduados saturado.';
  ES['country.cn.sources'] = '<strong>Fuentes:</strong> Oficina Nacional de Estadísticas de China (NBS), datos mensuales de desempleo urbano encuestado, 2025–2026 · Asia Society Policy Institute · reportaje en profundidad de Nippon.com.';

  ES['country.fr.hero.title'] = 'FRANCIA<br/><span class="acc"></span>';
  ES['country.fr.hero.quote'] = 'La tasa de desempleo juvenil en Francia es más del doble del promedio nacional. La barrera no es la capacidad — es un mercado laboral construido en torno a credenciales y cautela.';
  ES['country.fr.stats.s1.lbl'] = 'Tasa de desempleo juvenil (15–24 años), inicios de 2026';
  ES['country.fr.stats.s2.lbl'] = 'Tasa de desempleo nacional general, como comparación';
  ES['country.fr.stats.s3.lbl'] = 'Mayor riesgo de desempleo para quienes solo tienen un diploma básico';
  ES['country.fr.stats.s4.lbl'] = 'Pico histórico de desempleo juvenil alcanzado en 2013';
  ES['country.fr.stats.title'] = 'LOS DATOS DETRÁS DE<br/>LA CRISIS LABORAL JUVENIL DE <span class="acc">FRANCIA</span>';
  ES['country.fr.causes.title'] = '¿POR QUÉ ES TAN DIFÍCIL QUE LOS JÓVENES<br/>CONSIGAN EMPLEO EN <span class="acc">FRANCIA?</span>';
  ES['country.fr.causes.c1.title'] = 'Una jerarquía estricta de credenciales';
  ES['country.fr.causes.c1.desc'] = 'El mercado laboral francés otorga mucho peso a las cualificaciones formales y al prestigio institucional, lo que significa que el tipo y prestigio de un diploma puede importar tanto como la capacidad demostrada.';
  ES['country.fr.causes.c2.title'] = 'Reglas rígidas de contratación y despido';
  ES['country.fr.causes.c2.desc'] = 'Las fuertes protecciones laborales hacen que los empleadores sean cautelosos con las primeras contrataciones, ya que despedir después a un joven con bajo rendimiento resulta costoso y lento.';
  ES['country.fr.causes.c3.title'] = 'Una vía de aprendizaje desigual';
  ES['country.fr.causes.c3.desc'] = 'Existen rutas de formación profesional y aprendizaje, pero no tienen el mismo prestigio que las vías académicas, lo que concentra la mayor parte de la competencia en un conjunto más reducido de trayectorias tradicionales.';
  ES['country.fr.causes.c4.title'] = 'Brechas regionales y sectoriales';
  ES['country.fr.causes.c4.desc'] = 'El desempleo juvenil es mucho más alto en algunas regiones y entre quienes no tienen ningún diploma, lo que demuestra que el peso de la crisis no se distribuye de manera uniforme en todo el país.';
  ES['country.fr.insight'] = 'El sistema francés premia el <strong>diploma correcto</strong> por encima de la capacidad demostrada. Le damos a los jóvenes un segundo camino: completar trabajo real y remunerado para empresas reales, construir una reputación verificada y dejar que la habilidad demostrada — no solo el prestigio de un diploma — abra la puerta al empleo de tiempo completo.';
  ES['country.fr.sources'] = '<strong>Fuentes:</strong> Eurostat, tasa de desempleo juvenil (15–24 años), 2025–2026 · Trading Economics · Ministerio de Educación Nacional, Enseñanza Superior e Investigación de Francia.';

  ES['country.es.hero.title'] = 'ESPAÑA<br/><span class="acc"></span>';
  ES['country.es.hero.quote'] = 'España sigue teniendo la tasa de desempleo juvenil más alta de la UE. Un mercado laboral dividido y estacional mantiene a los jóvenes trabajadores excluidos de puestos estables y de larga duración.';
  ES['country.es.stats.s1.lbl'] = 'Tasa de desempleo juvenil (menores de 25 años), enero de 2026';
  ES['country.es.stats.s2.lbl'] = 'Pico histórico alcanzado en 2013, como contexto histórico';
  ES['country.es.stats.s3.lbl'] = 'Desempleo juvenil promedio en toda la UE, como comparación';
  ES['country.es.stats.s4.lbl'] = 'Desempleados registrados menores de 25 años a finales de 2025 — un mínimo histórico';
  ES['country.es.stats.title'] = 'LOS DATOS DETRÁS DE<br/>LA CRISIS LABORAL JUVENIL DE <span class="acc">ESPAÑA</span>';
  ES['country.es.causes.title'] = '¿POR QUÉ ES TAN DIFÍCIL QUE LOS JÓVENES<br/>CONSIGAN EMPLEO EN <span class="acc">ESPAÑA?</span>';
  ES['country.es.causes.c1.title'] = 'Un mercado laboral dividido';
  ES['country.es.causes.c1.desc'] = 'Una división de larga data entre contratos indefinidos fuertemente protegidos y contratos temporales mucho más precarios concentra el trabajo inseguro y de corta duración entre los jóvenes.';
  ES['country.es.causes.c2.title'] = 'Una economía estacional, muy dependiente del turismo';
  ES['country.es.causes.c2.desc'] = 'Gran parte de la economía española — turismo, hostelería, agricultura — es estacional por naturaleza, lo que genera rotación en lugar de carreras estables y de largo plazo desde el nivel inicial.';
  ES['country.es.causes.c3.title'] = 'Una marcada disparidad regional';
  ES['country.es.causes.c3.desc'] = 'El desempleo es notablemente más alto en el sur, como en Andalucía, que el promedio nacional, lo que refleja desequilibrios regionales profundos y persistentes.';
  ES['country.es.causes.c4.title'] = 'Un desajuste entre educación y mercado laboral';
  ES['country.es.causes.c4.desc'] = 'Las brechas persistentes entre lo que enseñan las escuelas y universidades y lo que realmente necesitan los empleadores contribuyen a búsquedas de empleo más largas y difíciles para los jóvenes graduados.';
  ES['country.es.insight'] = 'La tasa de desempleo juvenil en España se ha reducido a más de la mitad desde su pico en 2013 — pero sigue siendo la <strong>más alta de la UE</strong>. Le damos a los jóvenes españoles una forma de construir una prueba continua de trabajo en un mercado laboral fragmentado y estacional, convirtiendo trabajos de corto plazo en una reputación verificada en la que los empleadores pueden confiar para puestos permanentes.';
  ES['country.es.sources'] = '<strong>Fuentes:</strong> Instituto Nacional de Estadística (INE), Encuesta de Población Activa · Eurostat, tasa de desempleo juvenil · Trading Economics.';

  ES['country.gb.hero.title'] = 'REINO<br/><span class="acc">UNIDO</span>';
  ES['country.gb.hero.quote'] = 'El desempleo juvenil en el Reino Unido acaba de alcanzar su nivel más alto en 11 años. Los títulos universitarios son cada vez más comunes — y, paradójicamente, cada vez más difíciles de convertir en un primer empleo.';
  ES['country.gb.stats.s1.lbl'] = 'Tasa de desempleo juvenil (16–24 años), julio de 2026 — máximo en 11 años';
  ES['country.gb.stats.s2.lbl'] = 'Proporción de graduados que trabajan en puestos que no requieren título';
  ES['country.gb.stats.s3.lbl'] = 'Jóvenes sin educación, empleo ni formación (NEET) — un récord de la serie';
  ES['country.gb.stats.s4.lbl'] = 'Jóvenes buscadores de empleo sin trabajo por más de un año';
  ES['country.gb.stats.title'] = 'LOS DATOS DETRÁS DE<br/>LA CRISIS LABORAL JUVENIL DEL <span class="acc">REINO UNIDO</span>';
  ES['country.gb.causes.title'] = '¿POR QUÉ ES TAN DIFÍCIL QUE LOS JÓVENES<br/>CONSIGAN EMPLEO EN EL <span class="acc">REINO UNIDO?</span>';
  ES['country.gb.causes.c1.title'] = 'Inflación de credenciales';
  ES['country.gb.causes.c1.desc'] = 'A medida que más personas obtienen títulos universitarios, los empleadores han elevado silenciosamente los requisitos de entrada sin que la complejidad real de los puestos haya aumentado, convirtiendo el título en un filtro de selección más que en una señal genuina de habilidad.';
  ES['country.gb.causes.c2.title'] = 'La desaparición de puestos de nivel inicial';
  ES['country.gb.causes.c2.desc'] = 'Las vacantes de primer empleo han caído a algunos de sus niveles más bajos en más de una década fuera de la pandemia, reduciendo el número de primeros escalones en la carrera profesional.';
  ES['country.gb.causes.c3.title'] = 'El creciente costo de una primera contratación';
  ES['country.gb.causes.c3.desc'] = 'El aumento de los impuestos sobre la nómina para los empleadores y del salario mínimo ha encarecido las contrataciones junior justo cuando la demanda de los empleadores se ha debilitado.';
  ES['country.gb.causes.c4.title'] = 'Cicatrices de largo plazo';
  ES['country.gb.causes.c4.desc'] = 'Con más de una quinta parte de los jóvenes buscadores de empleo sin trabajo durante un año o más, el desempleo prolongado se convierte en sí mismo en una barrera, ya que los empleadores se muestran cada vez más cautelosos ante los vacíos laborales que se alargan.';
  ES['country.gb.insight'] = 'Un título en el Reino Unido cada vez demuestra más que puedes <strong>estudiar</strong> — no que puedes <strong>hacer el trabajo</strong>. Cerramos esa brecha permitiendo que los jóvenes completen tareas reales y remuneradas y construyan un historial de habilidades verificado desde el primer día, dando a los empleadores una señal más rápida y confiable que las credenciales por sí solas.';
  ES['country.gb.sources'] = '<strong>Fuentes:</strong> Office for National Statistics (ONS), Estadísticas del Mercado Laboral, julio de 2026 · Institute for the Future of Work (IFOW) · Work Foundation, Universidad de Lancaster.';

  ES['country.us.hero.title'] = 'ESTADOS<br/><span class="acc">UNIDOS</span>';
  ES['country.us.hero.quote'] = 'Por primera vez en décadas, los recién graduados universitarios enfrentan un desempleo más alto que el promedio nacional. El problema no es el título — es que falta el escalón de nivel inicial.';
  ES['country.us.stats.s1.lbl'] = 'Desempleo de recién graduados de 22 a 27 años, T1 2026';
  ES['country.us.stats.s2.lbl'] = 'Proporción de recién graduados que trabajan en empleos que no requieren título';
  ES['country.us.stats.s3.lbl'] = 'Desempleo de personas con título de 25 años o más, como comparación';
  ES['country.us.stats.s4.lbl'] = 'Caída interanual de las ofertas de empleo de nivel inicial en universidades';
  ES['country.us.stats.title'] = 'LOS DATOS DETRÁS DE<br/>LA CRISIS LABORAL JUVENIL DE <span class="acc">ESTADOS UNIDOS</span>';
  ES['country.us.causes.title'] = '¿POR QUÉ ES TAN DIFÍCIL QUE LOS JÓVENES<br/>CONSIGAN EMPLEO EN <span class="acc">ESTADOS UNIDOS?</span>';
  ES['country.us.causes.c1.title'] = 'El desempleo de graduados ya supera la tasa nacional';
  ES['country.us.causes.c1.desc'] = 'Durante cinco años consecutivos, el desempleo de los recién graduados universitarios ha superado la tasa nacional general — algo casi inaudito entre 1990 y 2018.';
  ES['country.us.causes.c2.title'] = 'Menos vacantes de nivel inicial';
  ES['country.us.causes.c2.desc'] = 'Las industrias que tradicionalmente absorbían a los nuevos graduados han estado recortando empleos, y las ofertas dirigidas a universidades han caído drásticamente interanualmente, incluso mientras las solicitudes por puesto siguen aumentando.';
  ES['country.us.causes.c3.title'] = 'La brecha de mentoría en el trabajo remoto';
  ES['country.us.causes.c3.desc'] = 'Las investigaciones indican que los empleadores son cautelosos a la hora de contratar a personas sin experiencia para puestos principalmente remotos, donde resulta más difícil ofrecer la mentoría informal en el trabajo que convierte a un recién graduado en un trabajador productivo.';
  ES['country.us.causes.c4.title'] = 'Los resultados varían enormemente según la carrera';
  ES['country.us.causes.c4.desc'] = 'El subempleo varía desde menos del 20% en campos como enfermería e informática hasta más del 60% en algunas carreras de humanidades y ciencias sociales, lo que demuestra que se trata de un problema de nivel inicial, no una prueba de que el título dejó de valer la pena.';
  ES['country.us.insight'] = 'Los datos son claros: no es que el título haya dejado de importar, es que no existe una forma confiable de demostrar que estás <strong>listo para el trabajo</strong> antes de que alguien te dé la oportunidad. Permitimos que los jóvenes estadounidenses completen tareas reales y remuneradas y construyan un historial laboral verificado que habla más fuerte que un promedio académico — cerrando exactamente la brecha de nivel inicial que está impulsando el desempleo de graduados por encima del promedio nacional.';
  ES['country.us.sources'] = '<strong>Fuentes:</strong> Banco de la Reserva Federal de Nueva York, The Labor Market for Recent College Graduates, T1 2026 · National Association of Colleges and Employers (NACE) · Economic Policy Institute (EPI).';
  ES['cookies.analytics.desc'] = 'Ayúdanos a entender cómo la gente usa nuestra plataforma — qué páginas se visitan, dónde abandonan los usuarios y cómo rinden las funciones. Los datos se agregan y anonimizan. Usamos esto para mejorar la Plataforma, no para perfilarte.';
  ES['cookies.hero.desc'] = 'Elige qué cookies usamos. Las cookies esenciales siempre están activas — mantienen el sitio funcionando. Todo lo demás depende de ti.';
  ES['cookies.info.2'] = 'Usamos cookies y tecnologías similares como se describe arriba. Para más detalles sobre cómo manejamos tus datos personales, consulta nuestra <a href="privacy-policy.html">Política de Privacidad</a>.';
  ES['cookies.marketing.desc'] = 'Permítenos mostrarte contenido relevante en otras plataformas. No vendemos tus datos a anunciantes. Si aceptas, podrías ver nuestros anuncios en sitios como LinkedIn o Google según tus patrones de uso.';
  ES['dispute.hero.desc'] = 'Cuando algo sale mal, intervenimos. Nuestro proceso de mediación es justo, rápido y vinculante dentro de la plataforma — protegiendo tanto a trabajadores como a empresas.';
  ES['dispute.rules.2'] = 'Nuestra decisión de mediación es vinculante dentro de la plataforma — determina cómo se liberan los fondos. No es un fallo legal y no afecta tu derecho a presentar el asunto ante los tribunales o un organismo de protección al consumidor correspondiente.';
  ES['terms.notice'] = '<strong>Resumen en lenguaje sencillo:</strong> Estos términos rigen tu uso de YoungMerit. Los trabajadores encuentran tareas y reciben pagos mediante depósito en garantía seguro. Las empresas publican tareas y pagan a los trabajadores. Cobramos una comisión del 10% por cada tarea completada. Lee la Sección 6 (Billetera y Pagos) y la Sección 8 (Disputas) con atención.';

  // ==================== CHINESE TRANSLATIONS ====================
  var ZH = {};
  for (var key3 in I18N.en) {
    ZH[key3] = I18N.en[key3];
  }
  ZH['nav.home'] = '首页';
  ZH['nav.findWork'] = '寻找工作';
  ZH['nav.hireTalent'] = '招聘人才';
  ZH['nav.howItWorks'] = '运作方式';
  ZH['nav.about'] = '关于我们';
  ZH['nav.community'] = '社区';
  ZH['nav.myProfile'] = '我的主页';
  ZH['nav.logIn'] = '登录';
  ZH['nav.signUp'] = '注册';
  ZH['nav.signUpFree'] = '免费注册';
  ZH['nav.rateUs'] = '给我们评分';
  ZH['nav.navigation'] = '导航';
  ZH['nav.myProfileLabel'] = '我的主页';
  ZH['nav.logOut'] = '退出登录';
  ZH['nav.profileMenu.profile'] = '个人主页';
  ZH['nav.profileMenu.notifications'] = '通知设置';
  ZH['nav.profileMenu.language'] = '语言';
  ZH['nav.profileMenu.privacy'] = '隐私政策';
  ZH['nav.profileMenu.terms'] = '条款';
  ZH['lang.switchLabel'] = '语言';
  ZH['footer.platform'] = '平台';
  ZH['footer.company'] = '公司';
  ZH['footer.trustSafety'] = '信任与安全';
  ZH['footer.findWork'] = '寻找工作';
  ZH['footer.hireTalent'] = '招聘人才';
  ZH['footer.howItWorks'] = '运作方式';
  ZH['footer.resources'] = '资源';
  ZH['footer.aboutYOUNGMERIT'] = '关于我们';
  ZH['footer.careers'] = '招聘信息';
  ZH['footer.community'] = '社区';
  ZH['footer.contact'] = '联系我们';
  ZH['footer.identityVerification'] = '身份验证';
  ZH['footer.disputeSystem'] = '争议处理';
  ZH['footer.privacyPolicy'] = '隐私政策';
  ZH['footer.termsOfService'] = '服务条款';
  ZH['footer.cookieSettings'] = 'Cookie 设置';
  ZH['footer.tagline'] = '我们的使命是创造一个机会靠争取而非赠予的世界。';
  ZH['footer.copyright'] = '版权所有 2026 YOUNGMERIT。保留所有权利。';
  ZH['footer.builtFor'] = '为年轻人打造，受企业信赖。';
  ZH['idx.hero.eyebrow'] = '现已开放抢先体验';
  ZH['idx.hero.title1'] = '先积累经验';
  ZH['idx.hero.title2'] = '后';
  ZH['idx.hero.title3'] = '正式就业。';
  ZH['idx.hero.explainer'] = '我们是一个平台，年轻人在这里为真实企业完成<strong>真实的有偿任务</strong>，建立<strong>经过验证的工作履历</strong>，从而打开机会之门 — 无需学历、无需人脉、无需多年工作经验。';
  ZH['idx.hero.ctaFind'] = '开始寻找工作';
  ZH['idx.hero.ctaHire'] = '招聘人才';
  ZH['idx.hero.note'] = '免费加入。无需信用卡。随时可以取消。';
  ZH['idx.strip.countries.title'] = '6 个国家';
  ZH['idx.strip.countries.desc'] = '南非、中国、美国、法国、西班牙和英国';
  ZH['idx.strip.verified.title'] = '有据可查';
  ZH['idx.strip.verified.desc'] = '信任评分基于真实完成的工作';
  ZH['idx.strip.escrow.title'] = '资金托管保护';
  ZH['idx.strip.escrow.desc'] = '每笔付款都会安全托管，直至工作获得批准';
  ZH['idx.strip.career.title'] = '以职业发展为先';
  ZH['idx.strip.career.desc'] = '致力于帮助工作者从零散任务走向全职工作';
  ZH['idx.trust.label'] = '深受以下机构信赖';
  ZH['idx.for.eyebrow'] = '我们适合谁';
  ZH['idx.for.title'] = '两个难题。<br/>一个平台。';
  ZH['idx.for.desc'] = '年轻人没有经验就无法被录用；企业又找不到实惠可信的入门级人才。我们同时解决这两个问题。';
  ZH['loc.all'] = '所有地区';
  ZH['loc.za'] = '南非';
  ZH['loc.es'] = '西班牙';
  ZH['loc.fr'] = '法国';
  ZH['loc.gb'] = '英国';
  ZH['loc.cn'] = '中国';
  ZH['loc.us'] = '美国';

  // Add all remaining Chinese translations for profile, contact, dispute, pricing, resources, waitlist, careers, terms, cookies
  // Due to length, continuing with key profile translations

  // WORKER PROFILE - Chinese
  ZH['profile.worker.tasks.empty'] = '还没有完成的任务。';
  ZH['profile.worker.tasks.browse'] = '浏览可用任务';
  ZH['profile.worker.applications.empty'] = '没有活跃的申请。';
  ZH['profile.worker.applications.browse'] = '浏览任务';
  ZH['profile.worker.portfolio.empty'] = '暂无作品集项目。';
  ZH['profile.worker.portfolio.add'] = '添加链接或图片向雇主展示你的作品。';
  ZH['profile.worker.portfolio.cta'] = '添加作品集项目';
  ZH['profile.worker.about.empty'] = '点击添加个人简介。';
  ZH['profile.worker.skills.add'] = '添加技能';
  ZH['profile.worker.cv.zone'] = '上传你的简历';
  ZH['profile.worker.cv.note'] = 'PDF、DOC 或 DOCX · 最大 5MB · 可选，但可提高录用率';
  ZH['profile.worker.cv.remove'] = '移除';
  ZH['profile.worker.applications.status.review'] = '审核中';
  ZH['profile.worker.applications.status.shortlisted'] = '已入围';
  ZH['profile.worker.sidebar.wallet.balance'] = '钱包余额';
  ZH['profile.worker.sidebar.wallet.available'] = '可提现';
  ZH['profile.worker.sidebar.wallet.withdraw'] = '提现';
  ZH['profile.worker.sidebar.wallet.history'] = '历史记录';
  ZH['profile.worker.sidebar.verification.title'] = '验证状态';
  ZH['profile.worker.sidebar.verification.identity'] = '身份';
  ZH['profile.worker.sidebar.verification.email'] = '电子邮件';
  ZH['profile.worker.sidebar.verification.phone'] = '电话';
  ZH['profile.worker.sidebar.verification.bank'] = '银行账户';
  ZH['profile.worker.sidebar.details.title'] = '个人资料详细信息';
  ZH['profile.worker.sidebar.details.location'] = '位置';
  ZH['profile.worker.sidebar.details.languages'] = '语言';
  ZH['profile.worker.sidebar.details.education'] = '教育';
  ZH['profile.worker.sidebar.details.age'] = '年龄';
  ZH['profile.worker.sidebar.details.edit'] = '编辑详细信息';
  ZH['profile.worker.sidebar.applications'] = '活跃申请';

  // BUSINESS PROFILE - Chinese
  ZH['profile.biz.postings.empty'] = '没有活跃的列表。';
  ZH['profile.biz.postings.browse'] = '发布你的第一个任务';
  ZH['profile.biz.applicants.empty'] = '一旦有实时任务列表，申请者会出现在这里。';
  ZH['profile.biz.history.empty'] = '还没有完成的任务。';
  ZH['profile.biz.about.empty'] = '点击添加业务描述。';
  ZH['profile.biz.skills.add'] = '添加标签';
  ZH['profile.biz.postings.status.live'] = '进行中';
  ZH['profile.biz.postings.status.review'] = '审核中';
  ZH['profile.biz.postings.status.closed'] = '已关闭';
  ZH['profile.biz.postings.actions.viewApplicants'] = '查看申请者';
  ZH['profile.biz.postings.actions.edit'] = '编辑';
  ZH['profile.biz.postings.actions.close'] = '关闭';
  ZH['profile.biz.applicants.shortlist'] = '入围';
  ZH['profile.biz.applicants.view'] = '查看主页';
  ZH['profile.biz.applicants.hire'] = '雇佣';
  ZH['profile.biz.applicants.locked'] = '入围以解锁';
  ZH['profile.biz.saved.empty'] = '暂无收藏帖子。';
  ZH['profile.biz.saved.cta'] = '前往社区';
  ZH['profile.biz.sidebar.post.title'] = '发布任务';
  ZH['profile.biz.sidebar.post.desc'] = '为你的下一个项目找到合适的人选。资金托管直至你批准。';
  ZH['profile.biz.sidebar.post.cta'] = '发布新任务';
  ZH['profile.biz.sidebar.wallet.balance'] = '钱包余额';
  ZH['profile.biz.sidebar.wallet.available'] = '可花费';
  ZH['profile.biz.sidebar.wallet.topup'] = '充值';
  ZH['profile.biz.sidebar.wallet.history'] = '历史记录';
  ZH['profile.biz.sidebar.wallet.escrow'] = '托管中';
  ZH['profile.biz.sidebar.verification.title'] = '验证状态';
  ZH['profile.biz.sidebar.verification.identity'] = '身份';
  ZH['profile.biz.sidebar.verification.company'] = '公司注册';
  ZH['profile.biz.sidebar.verification.email'] = '电子邮件';
  ZH['profile.biz.sidebar.verification.payment'] = '付款方式';
  ZH['profile.biz.sidebar.details.title'] = '公司详细信息';
  ZH['profile.biz.sidebar.details.location'] = '位置';
  ZH['profile.biz.sidebar.details.industry'] = '行业';
  ZH['profile.biz.sidebar.details.size'] = '公司规模';
  ZH['profile.biz.sidebar.details.website'] = '网站';
  ZH['profile.biz.sidebar.details.edit'] = '编辑详细信息';

  // ==================== ASSIGN TRANSLATIONS TO I18N ====================
  // ---- idx.* additions ----
  ZH['idx.for.workers.label'] = '面向年轻人';
  ZH['idx.for.workers.title'] = '积累真实<br/>工作经验。';
  ZH['idx.for.workers.desc'] = '无需简历，无需学历，无需人脉。完成真实任务，赚取真实收入，建立真正能帮你获得工作的可验证声誉。';
  ZH['idx.for.workers.perk1'] = '完成真实任务，从第一天起就能赚钱';
  ZH['idx.for.workers.perk2'] = '建立雇主真正认可的信任评分';
  ZH['idx.for.workers.perk3'] = '获得你的技能护照——永久便携的工作证明';
  ZH['idx.for.workers.perk4'] = '随着任务完成不断升级，从新手到精英';
  ZH['idx.for.workers.cta'] = '寻找工作';
  ZH['idx.for.biz.label'] = '面向企业';
  ZH['idx.for.biz.title'] = '放心<br/>招聘人才。';
  ZH['idx.for.biz.desc'] = '不再靠运气招聘。我们平台上的每位工作者都拥有可验证的真实工作记录、真实评分和真实的复雇记录——而不仅仅是一份简历。';
  ZH['idx.for.biz.perk1'] = '免费发布任务——工作完成后才付款';
  ZH['idx.for.biz.perk2'] = '接触经过预先审核、拥有真实验证记录的人才';
  ZH['idx.for.biz.perk3'] = '每笔款项均通过托管保护，直至你确认交付';
  ZH['idx.for.biz.perk4'] = '建立私人人才库，随时重新聘用你的优秀员工';
  ZH['idx.for.biz.cta'] = '招聘人才';
  ZH['idx.prob.title'] = '世界把经验<br/>变成了<br/><span class="acc">一道锁着的门。</span>';
  ZH['idx.prob.desc'] = '在六大经济体中，数百万年轻人已准备好工作——但每个入门级岗位都要求那种没有工作就无法获得的经验。我们打破了这个恶性循环。';
  ZH['idx.country.za.name'] = '南非';
  ZH['idx.country.za.lbl'] = '青年失业率';
  ZH['idx.country.cn.name'] = '中国';
  ZH['idx.country.cn.lbl'] = '应届毕业生失业率';
  ZH['idx.country.us.name'] = '美国';
  ZH['idx.country.us.lbl'] = '学历过剩';
  ZH['idx.country.fr.name'] = '法国';
  ZH['idx.country.fr.lbl'] = '资历壁垒';
  ZH['idx.country.es.name'] = '西班牙';
  ZH['idx.country.es.lbl'] = '青年失业率';
  ZH['idx.country.gb.name'] = '英国';
  ZH['idx.country.gb.lbl'] = '经验要求膨胀';
  ZH['idx.countries.tagline'] = '点击查看每个国家的详细信息';
  ZH['idx.probBox.title'] = '<span class="acc">证明缺口</span><br/>是真实存在的。';
  ZH['idx.probBox.desc'] = '年轻人不缺能力，缺的是证明能力的方式。这正是我们存在的唯一目的——通过真实工作、真实评价和真实可验证的履历来解决它。';
  ZH['idx.probBox.item1.title'] = '没有经验，就没有入场券';
  ZH['idx.probBox.item1.desc'] = '企业要求两到五年经验，而这些岗位其实两周就能学会。';
  ZH['idx.probBox.item2.title'] = '企业找不到值得信赖的初级人才';
  ZH['idx.probBox.item2.desc'] = '在没有过往记录的情况下招聘初级员工，对多数企业来说是一场难以承受的赌博。';
  ZH['idx.probBox.item3.title'] = '我们创建这份履历记录';
  ZH['idx.probBox.item3.desc'] = '真实任务，真实评价，真实证明——早在面试之前就已具备。';
  ZH['idx.how.eyebrow'] = '流程';
  ZH['idx.how.title'] = '简单。<br/><span class="acc">仅需四步。</span>';
  ZH['idx.how.desc'] = '无论你是找工作还是招聘，流程从第一天起就设计得简单、安全又快捷。';
  ZH['idx.how.tabPeople'] = '面向个人';
  ZH['idx.how.tabBiz'] = '面向企业';
  ZH['idx.how.seeFull'] = '查看完整流程';
  ZH['idx.how.p1.title'] = '创建你的档案';
  ZH['idx.how.p1.desc'] = '免费注册，添加技能并验证身份，不到五分钟即可完成。';
  ZH['idx.how.p2.title'] = '申请任务';
  ZH['idx.how.p2.desc'] = '浏览经过验证企业发布的真实付费任务，一键申请。';
  ZH['idx.how.p3.title'] = '完成并获得报酬';
  ZH['idx.how.p3.desc'] = '交付高质量工作，获批后立即从托管账户收到款项。';
  ZH['idx.how.p4.title'] = '积累你的声誉';
  ZH['idx.how.p4.desc'] = '每项任务都会带来评价并提升你的信任评分，等级越高解锁的工作机会越好。';
  ZH['idx.how.b1.title'] = '发布任务';
  ZH['idx.how.b1.desc'] = '描述你的需求，设定预算，几分钟内即可上线，发布免费。';
  ZH['idx.how.b2.title'] = '审核申请者';
  ZH['idx.how.b2.desc'] = '浏览拥有真实验证信任评分、完成率和作品集的人才。';
  ZH['idx.how.b3.title'] = '跟踪并审批';
  ZH['idx.how.b3.desc'] = '沟通、审核交付成果，只有在完全满意时才释放付款。';
  ZH['idx.how.b4.title'] = '打造你的人才储备';
  ZH['idx.how.b4.desc'] = '收藏优秀工作者，随时重新聘用，为表现最佳者提供全职岗位。';
  ZH['idx.rep.eyebrow'] = '我们的独特优势';
  ZH['idx.rep.title'] = '你的声誉<br/>就是你的<br/><span class="acc">通行证。</span>';
  ZH['idx.rep.desc'] = '你完成的每一项任务都在积累永久性的价值：不断增长的信任评分、随身携带的技能护照，以及比任何简历都更有说服力的工作履历。';
  ZH['idx.rep.feat1'] = '技能护照——雇主信赖的可携带式验证工作履历';
  ZH['idx.rep.feat2'] = '公开信任评分，随每项完成任务不断增长';
  ZH['idx.rep.feat3'] = '等级晋升：新手、已验证、可信赖、精英';
  ZH['idx.rep.feat4'] = '复雇追踪——质量最有力的证明';
  ZH['idx.rep.cta'] = '了解信誉机制';
  ZH['idx.rep.card.role'] = '虚拟助理，约翰内斯堡';
  ZH['idx.rep.card.badge'] = '可信赖';
  ZH['idx.rep.card.scoreSub'] = '优秀——128条已验证评价';
  ZH['idx.rep.card.tasksDone'] = '已完成任务';
  ZH['idx.rep.card.repeatHires'] = '复雇次数';
  ZH['idx.rep.card.ndaSafe'] = '保密协议保障';
  ZH['idx.early.eyebrow'] = '为何现在加入';
  ZH['idx.early.title'] = '我们才刚刚<br/><span class="acc">起步。</span>';
  ZH['idx.early.desc'] = '我们于2026年上线。这里没有虚高的会员数字。我们拥有的是比数字更有价值的东西——成为第一批的机会。';
  ZH['idx.early.card1.title'] = '成为创始会员';
  ZH['idx.early.card1.desc'] = '最早加入我们平台的工作者和企业将塑造它的成长方向。你的档案将成为网络上最早经过验证的信誉之一。';
  ZH['idx.early.card2.title'] = '抢先于大众建立履历';
  ZH['idx.early.card2.desc'] = '你现在完成的每项任务都是在市场饱和之前建立的工作证明。当招聘需求到来时，早期用户将拥有最强的声誉。';
  ZH['idx.early.card3.title'] = '帮助我们打造正确的产品';
  ZH['idx.early.card3.desc'] = '我们之所以在六个国家同时上线，是因为这个问题无处不在。你在这些早期阶段的反馈将直接影响我们接下来打造的产品、分类和功能。';
  ZH['idx.early.strip.title'] = '准备好<br/>成为第一批了吗？';
  ZH['idx.early.strip.desc'] = '立即加入我们。完成你的第一项任务，获得第一条评价，在市场大规模涌入之前拥有属于你的创始声誉。';
  ZH['idx.early.strip.ctaSignup'] = '免费注册';
  ZH['idx.early.strip.ctaPost'] = '发布任务';


  // ==================== COUNTRY PAGES — CHINESE ====================
  ZH['country.common.backToHone'] = '返回首页';
  ZH['country.common.byTheNumbers'] = '数据一览';
  ZH['country.common.rootCauses'] = '根本原因';
  ZH['country.common.honeTake'] = '我们的观点';
  ZH['country.common.exploreOthers'] = '探索其他五个国家';
  ZH['country.common.china'] = '中国';
  ZH['country.common.us'] = '美国';
  ZH['country.common.france'] = '法国';
  ZH['country.common.spain'] = '西班牙';
  ZH['country.common.uk'] = '英国';
  ZH['country.common.southAfrica'] = '南非';

  ZH['country.za.hero.title'] = '南非<br/><span class="acc">青年危机</span>';
  ZH['country.za.hero.quote'] = '南非近一半的年轻人找不到工作。以下是这场危机背后的数据——以及为什么工作证明而非纸质学历才是出路。';
  ZH['country.za.stats.s1.lbl'] = '青年（15–34岁）失业率，2026年第一季度';
  ZH['country.za.stats.s2.lbl'] = '15–24岁人群失业率，2026年第一季度';
  ZH['country.za.stats.s3.lbl'] = '未就业、未受教育或未接受培训的年轻人';
  ZH['country.za.stats.s4.lbl'] = '南非2025年GDP总增长率';
  ZH['country.za.stats.title'] = '南非青年就业危机<br/>背后的<span class="acc">数据</span>';
  ZH['country.za.causes.title'] = '为什么年轻人在<span class="acc">南非</span><br/>如此难以找到工作？';
  ZH['country.za.causes.c1.title'] = '经济增长疲软';
  ZH['country.za.causes.c1.desc'] = '2025年GDP仅增长1.1%，而数十万年轻人涌入就业市场——经济根本无法创造足够的新岗位来吸纳他们。';
  ZH['country.za.causes.c2.title'] = '教育与就业之间的差距';
  ZH['country.za.causes.c2.desc'] = '学校和大学未能持续培养出雇主所需的、具备特定实用技能的毕业生，导致学历与岗位之间长期存在错配。';
  ZH['country.za.causes.c3.title'] = '经验悖论';
  ZH['country.za.causes.c3.desc'] = '入门级岗位越来越要求具备以往经验，这将首次求职者挡在了本应给予他们起步机会的岗位之外。';
  ZH['country.za.causes.c4.title'] = '灰心情绪不断上升';
  ZH['country.za.causes.c4.desc'] = '近390万人已完全停止积极求职，这意味着官方失业率很可能低估了失业的真实规模。';
  ZH['country.za.insight'] = '南非并非缺乏愿意工作的劳动力——而是缺乏<strong>被证明的</strong>劳动力。数百万有能力的年轻人被困在同一扇紧锁的门后：每一个入门级岗位都要求那种没有工作就无法获得的经验。我们通过让南非年轻人为真实企业完成真实的有偿任务，从第一天起就建立起经过验证的履历，打破了这一循环——无需学历，也无需人脉。';
  ZH['blog.hero.live'] = '直播中';
  ZH['blog.post.voice'] = '语音';
  ZH['blog.empty.none'] = '没有符合搜索条件的帖子。';
  ZH['cookieBanner.title'] = '我们使用Cookie';
  ZH['cookieBanner.desc'] = '我们使用必要的Cookie以确保一切正常运行。在您同意的情况下，我们也希望使用分析和偏好类Cookie来改善您的体验。';
  ZH['cookieBanner.acceptAll'] = '接受全部';
  ZH['cookieBanner.rejectAll'] = '拒绝非必要项';
  ZH['cookieBanner.manage'] = '管理偏好设置';
  ZH['waitlist.form.email.duplicate'] = '该邮箱已在候补名单中——我们会尽快与您联系。';
  ZH['waitlist.form.error.generic'] = '出了点问题，请重试。';
  ZH['contact.form.error.generic'] = '发送消息时出错，请重试，或直接给我们发邮件。';
  ZH['blog.post.sample'] = '示例';
  ZH['blog.post.deleteConfirm'] = '删除这条帖子？此操作无法撤销。';
  ZH['blog.post.deleted'] = '帖子已删除';
  ZH['blog.post.saved'] = '已保存到你的个人主页';
  ZH['blog.post.unsaved'] = '已从收藏中移除';
  ZH['blog.post.published'] = '已发布到社区动态';
  ZH['blog.voice.micError'] = '无法访问麦克风。请重试或检查浏览器设置。';
  ZH['blog.voice.httpsNeeded'] = '麦克风访问需要HTTPS——页面部署到线上后即可使用，而不是以本地文件方式打开。';
  ZH['blog.voice.limitReached'] = '目前已达到30秒的时长上限';
  ZH['blog.voice.permissionDenied'] = '麦克风访问已被阻止。请在浏览器中检查网站权限，允许使用麦克风后重试。';
  ZH['blog.voice.noMic'] = '未在此设备上检测到麦克风';
  ZH['blog.voice.recordFirst'] = '请先录制一段语音';
  ZH['blog.voice.published'] = '语音动态已发布';
  ZH['profile.toast.saved'] = '已保存';
  ZH['profile.toast.portfolioAdded'] = '作品集项目已添加';
  ZH['profile.toast.profileUpdated'] = '个人主页已更新';
  ZH['profile.toast.bioUpdated'] = '简介已更新';
  ZH['profile.toast.detailsSaved'] = '详细信息已保存';
  ZH['profile.toast.coverUpdated'] = '封面已更新';
  ZH['profile.toast.photoUpdated'] = '照片已更新';
  ZH['profile.toast.coverUploaded'] = '封面已上传——点击保存';
  ZH['profile.toast.cvUploaded'] = '简历已上传';
  ZH['profile.toast.removed'] = '已移除';
  ZH['legal.englishOnlyNotice'] = '本文件仅提供英文版本。如有疑问，请<a href="contact.html" style="color:inherit;text-decoration:underline;">使用您偏好的语言联系我们的支持团队</a>。';
  ZH['auth.reset.title'] = '设置新密码。';
  ZH['auth.reset.desc'] = '为您的账户设置一个新密码。';
  ZH['auth.reset.newPassword'] = '新密码';
  ZH['auth.reset.confirmPassword'] = '确认新密码';
  ZH['auth.reset.err.mismatch'] = '两次输入的密码不一致';
  ZH['auth.reset.err.generic'] = '出了点问题，请重试。';
  ZH['auth.reset.cta'] = '设置新密码';
  ZH['auth.reset.successTitle'] = '密码已更新。';
  ZH['auth.reset.successMsg'] = '正在跳转到您的个人主页……';
  ZH['country.za.sources'] = '<strong>数据来源：</strong>南非统计局（Stats SA）季度劳动力调查，2026年第一季度 · Harambee青年就业加速器《Breaking Barriers》报告，2026年 · 青年就业服务机构（YES）。';

  ZH['country.cn.hero.title'] = '中国<br/><span class="acc"></span>';
  ZH['country.cn.hero.quote'] = '创纪录的毕业生规模正撞上放缓的经济。这就是为什么如此多的中国年轻毕业生找不到学历本应带来的工作。';
  ZH['country.cn.stats.s1.lbl'] = '城镇青年（16–24岁，不含在校生）失业率，2026年2月';
  ZH['country.cn.stats.s2.lbl'] = '2023年6月创下的历史最高纪录';
  ZH['country.cn.stats.s3.lbl'] = '有史以来单年最大规模的毕业生群体';
  ZH['country.cn.stats.s4.lbl'] = '全国城镇总体失业率，作为对比';
  ZH['country.cn.stats.title'] = '中国青年就业危机<br/>背后的<span class="acc">数据</span>';
  ZH['country.cn.causes.title'] = '为什么年轻人在<span class="acc">中国</span><br/>如此难以找到工作？';
  ZH['country.cn.causes.c1.title'] = '毕业生数量创纪录';
  ZH['country.cn.causes.c1.desc'] = '连续多年创纪录的大学毕业生群体——单年超过1200万人——正涌入一个增长速度不足以吸纳他们的就业市场。';
  ZH['country.cn.causes.c2.title'] = '房地产与制造业放缓';
  ZH['country.cn.causes.c2.desc'] = '房地产行业的长期低迷，以及制造业和出口需求的疲软，使得传统上吸纳大量年轻劳动力的行业招聘趋冷。';
  ZH['country.cn.causes.c3.title'] = '技能错配日益扩大';
  ZH['country.cn.causes.c3.desc'] = '许多毕业生所受训练面向城市白领职业，但现有的职位空缺却越来越多地集中在其他行业，或要求不同的、更偏实操性的技能。';
  ZH['country.cn.causes.c4.title'] = '小型企业信贷收紧';
  ZH['country.cn.causes.c4.desc'] = '中小企业历来是中国吸纳年轻人就业最多的雇主，如今正面临更紧张的融资环境，招聘也更趋谨慎。';
  ZH['country.cn.insight'] = '在竞争如此激烈的市场中，仅凭学历已不再能打开机会之门——真正起作用的是<strong>你能力的实际证明</strong>。我们为中国的年轻人提供了一种方式，让他们建立起真实完成工作的可验证履历，使雇主能够直接看到能力本身，而不必仅仅依赖学历，在这个已趋饱和的毕业生市场中脱颖而出。';
  ZH['country.cn.sources'] = '<strong>数据来源：</strong>中国国家统计局（NBS），城镇调查失业率月度数据，2025–2026年 · 亚洲协会政策研究所（Asia Society Policy Institute） · Nippon.com深度报道。';

  ZH['country.fr.hero.title'] = '法国<br/><span class="acc"></span>';
  ZH['country.fr.hero.quote'] = '法国的青年失业率是全国平均水平的两倍多。问题的根源不在于能力——而在于一个围绕学历和谨慎心态构建的劳动力市场。';
  ZH['country.fr.stats.s1.lbl'] = '青年（15–24岁）失业率，2026年初';
  ZH['country.fr.stats.s2.lbl'] = '全国总体失业率，作为对比';
  ZH['country.fr.stats.s3.lbl'] = '仅拥有基础文凭者面临更高的失业风险';
  ZH['country.fr.stats.s4.lbl'] = '2013年创下的青年失业率历史峰值';
  ZH['country.fr.stats.title'] = '法国青年就业危机<br/>背后的<span class="acc">数据</span>';
  ZH['country.fr.causes.title'] = '为什么年轻人在<span class="acc">法国</span><br/>如此难以找到工作？';
  ZH['country.fr.causes.c1.title'] = '陡峭的学历阶梯';
  ZH['country.fr.causes.c1.desc'] = '法国的劳动力市场高度重视正式学历和院校声誉，这意味着文凭的类型和声望可能与实际能力同等重要，甚至更重要。';
  ZH['country.fr.causes.c2.title'] = '僵化的雇佣与解雇制度';
  ZH['country.fr.causes.c2.desc'] = '强有力的就业保护制度使雇主对首次招聘格外谨慎，因为日后辞退表现不佳的初级员工成本高昂且流程缓慢。';
  ZH['country.fr.causes.c3.title'] = '学徒制度发展不均';
  ZH['country.fr.causes.c3.desc'] = '职业教育和学徒制的路径虽然存在，但并不具备与学术路径同等的声望，导致大部分竞争仍集中在较为狭窄的传统路径上。';
  ZH['country.fr.causes.c4.title'] = '地区与行业差距';
  ZH['country.fr.causes.c4.desc'] = '在部分地区以及完全没有文凭的群体中，青年失业率远高于平均水平，这表明这场危机的负担在全国范围内分布并不均衡。';
  ZH['country.fr.insight'] = '法国的体系奖励的是<strong>合适的文凭</strong>，而非经过证明的能力。我们为年轻人提供了第二条路径：为真实企业完成真实的有偿工作，建立经过验证的信誉，让被证明的技能——而不仅仅是文凭的声望——为全职就业打开大门。';
  ZH['country.fr.sources'] = '<strong>数据来源：</strong>欧盟统计局（Eurostat），青年失业率（15–24岁），2025–2026年 · Trading Economics · 法国国民教育、高等教育与科研部。';

  ZH['country.es.hero.title'] = '西班牙<br/><span class="acc"></span>';
  ZH['country.es.hero.quote'] = '西班牙仍然是欧盟中青年失业率最高的国家。一个分裂且季节性的劳动力市场，使年轻工作者始终被拒于稳定、长期的岗位之外。';
  ZH['country.es.stats.s1.lbl'] = '青年（25岁以下）失业率，2026年1月';
  ZH['country.es.stats.s2.lbl'] = '2013年创下的历史峰值，作为历史背景参考';
  ZH['country.es.stats.s3.lbl'] = '欧盟范围内青年失业率平均值，作为对比';
  ZH['country.es.stats.s4.lbl'] = '2025年底登记的25岁以下失业人数——创历史新低';
  ZH['country.es.stats.title'] = '西班牙青年就业危机<br/>背后的<span class="acc">数据</span>';
  ZH['country.es.causes.title'] = '为什么年轻人在<span class="acc">西班牙</span><br/>如此难以找到工作？';
  ZH['country.es.causes.c1.title'] = '分裂的劳动力市场';
  ZH['country.es.causes.c1.desc'] = '受到高度保护的长期合同与更不稳定的临时合同之间长期存在分歧，使得不稳定的短期工作大量集中在年轻人身上。';
  ZH['country.es.causes.c2.title'] = '以季节性、旅游业为主导的经济';
  ZH['country.es.causes.c2.desc'] = '西班牙经济的很大一部分——旅游、酒店、农业——本质上具有季节性，带来的是人员流动，而非稳定的长期入门级职业。';
  ZH['country.es.causes.c3.title'] = '明显的地区差异';
  ZH['country.es.causes.c3.desc'] = '南部地区（如安达卢西亚）的失业率明显高于全国平均水平，反映出深层且持续存在的地区失衡。';
  ZH['country.es.causes.c4.title'] = '教育与市场需求错配';
  ZH['country.es.causes.c4.desc'] = '学校和大学所教授的内容与雇主实际所需之间持续存在差距，导致年轻毕业生的求职过程更长、更艰难。';
  ZH['country.es.insight'] = '自2013年达到峰值以来，西班牙的青年失业率已下降超过一半——但仍是<strong>欧盟中最高的</strong>。我们为西班牙年轻人提供了一种方式，让他们能在碎片化、季节性的就业市场中持续积累工作证明，将短期零工转化为雇主可信赖的、用于长期职位的经过验证的信誉。';
  ZH['country.es.sources'] = '<strong>数据来源：</strong>西班牙国家统计局（INE），劳动力调查 · 欧盟统计局（Eurostat），青年失业率 · Trading Economics。';

  ZH['country.gb.hero.title'] = '英国<br/><span class="acc"></span>';
  ZH['country.gb.hero.quote'] = '英国青年失业率刚刚创下11年来新高。学历越来越普及——但矛盾的是，将学历转化为第一份工作却越来越难。';
  ZH['country.gb.stats.s1.lbl'] = '青年（16–24岁）失业率，2026年7月——11年来新高';
  ZH['country.gb.stats.s2.lbl'] = '从事非本专业岗位的毕业生比例';
  ZH['country.gb.stats.s3.lbl'] = '既未接受教育、也未就业或培训的年轻人（NEET）——系列数据历史新高';
  ZH['country.gb.stats.s4.lbl'] = '失业超过一年的年轻求职者';
  ZH['country.gb.stats.title'] = '英国青年就业危机<br/>背后的<span class="acc">数据</span>';
  ZH['country.gb.causes.title'] = '为什么年轻人在<span class="acc">英国</span><br/>如此难以找到工作？';
  ZH['country.gb.causes.c1.title'] = '学历通胀';
  ZH['country.gb.causes.c1.desc'] = '随着越来越多人获得学历，雇主已在无声中提高了入职门槛，而岗位本身的复杂程度实际上并未提升，学历因此变成了筛选工具，而非真正的能力信号。';
  ZH['country.gb.causes.c2.title'] = '入门级岗位不断消失';
  ZH['country.gb.causes.c2.desc'] = '除疫情期间外，入门级职位空缺已跌至十多年来的最低水平之一，职业阶梯的第一级台阶正在减少。';
  ZH['country.gb.causes.c3.title'] = '首次雇佣成本不断上升';
  ZH['country.gb.causes.c3.desc'] = '雇主薪资税和最低工资的上涨，使得初级岗位的招聘成本更高，恰逢雇主需求正在走弱。';
  ZH['country.gb.causes.c4.title'] = '长期失业留下的伤痕';
  ZH['country.gb.causes.c4.desc'] = '超过五分之一的年轻求职者失业时间已超过一年，长期失业本身正在变成一道障碍，因为雇主对不断拉长的就业空窗期越来越警惕。';
  ZH['country.gb.insight'] = '在英国，学历越来越能证明的是你会<strong>学习</strong>——而不是你能<strong>胜任工作</strong>。我们通过让年轻人从第一天起完成真实的有偿任务并建立经过验证的技能记录，弥合了这一差距，为雇主提供比单纯学历更快速、更可信的信号。';
  ZH['country.gb.sources'] = '<strong>数据来源：</strong>英国国家统计局（ONS），劳动力市场统计，2026年7月 · 未来工作研究所（IFOW） · 兰卡斯特大学Work Foundation。';

  ZH['country.us.hero.title'] = '美国<br/><span class="acc"></span>';
  ZH['country.us.hero.quote'] = '几十年来首次，应届大学毕业生的失业率超过了全国平均水平。问题不在于学历本身——而在于入门级的阶梯已经缺失。';
  ZH['country.us.stats.s1.lbl'] = '22–27岁应届毕业生失业率，2026年第一季度';
  ZH['country.us.stats.s2.lbl'] = '从事无需学历工作的应届毕业生比例';
  ZH['country.us.stats.s3.lbl'] = '25岁以上有学历者失业率，作为对比';
  ZH['country.us.stats.s4.lbl'] = '校园入门级职位发布同比下降幅度';
  ZH['country.us.stats.title'] = '美国青年就业危机<br/>背后的<span class="acc">数据</span>';
  ZH['country.us.causes.title'] = '为什么年轻人在<span class="acc">美国</span><br/>如此难以找到工作？';
  ZH['country.us.causes.c1.title'] = '毕业生失业率现已超过全国水平';
  ZH['country.us.causes.c1.desc'] = '应届大学毕业生的失业率已连续五年超过全国总体水平——这在1990年至2018年间几乎闻所未闻。';
  ZH['country.us.causes.c2.title'] = '入门级岗位空缺减少';
  ZH['country.us.causes.c2.desc'] = '传统上吸纳应届毕业生的行业正在削减岗位，面向校园的职位发布同比大幅下降，而每个职位的申请人数却在持续攀升。';
  ZH['country.us.causes.c3.title'] = '远程办公带来的指导缺失';
  ZH['country.us.causes.c3.desc'] = '研究表明，雇主对招聘缺乏经验的人员从事以远程为主的岗位持谨慎态度，因为在这类岗位中，把应届毕业生培养成高效员工所需的非正式在岗指导更难以提供。';
  ZH['country.us.causes.c4.title'] = '不同专业的就业结果差异巨大';
  ZH['country.us.causes.c4.desc'] = '就业不足率在护理和计算机科学等领域低于20%，而在部分人文和社会科学专业则超过60%，这表明这是一个入门级问题，而非学历不再有价值的证明。';
  ZH['country.us.insight'] = '数据很清楚：并不是学历不再重要，而是在有人给你机会之前，根本没有可靠的方式证明你<strong>已经为这份工作做好准备</strong>。我们让美国年轻人能够完成真实的有偿任务，建立起比平均绩点更有说服力的、经过验证的工作履历——精准填补了将毕业生失业率推高至全国平均水平之上的那道入门级缺口。';
  ZH['country.us.sources'] = '<strong>数据来源：</strong>纽约联邦储备银行《应届大学毕业生劳动力市场报告》，2026年第一季度 · 全美高校与雇主协会（NACE） · 经济政策研究所（EPI）。';

  // ==================== ZULU TRANSLATIONS ====================
  var ZU = {};
  for (var key4 in I18N.en) {
    ZU[key4] = I18N.en[key4];
  }
  ZU['nav.home'] = 'Ikhaya';
  ZU['nav.findWork'] = 'Funa Umsebenzi';
  ZU['nav.hireTalent'] = 'Qasha Amathalente';
  ZU['nav.howItWorks'] = 'Kusebenza Kanjani';
  ZU['nav.about'] = 'Mayelana';
  ZU['nav.community'] = 'Umphakathi';
  ZU['nav.myProfile'] = 'Iphrofayela Yami';
  ZU['nav.logIn'] = 'Ngena';
  ZU['nav.signUp'] = 'Bhalisa';
  ZU['nav.signUpFree'] = 'Bhalisa Mahhala';
  ZU['nav.rateUs'] = 'Sinike Isilinganiso';
  ZU['nav.navigation'] = 'Ukuzulazula';
  ZU['nav.myProfileLabel'] = 'Iphrofayela Yami';
  ZU['nav.logOut'] = 'Phuma';
  ZU['nav.profileMenu.profile'] = 'Iphrofayela';
  ZU['nav.profileMenu.notifications'] = 'Izilungiselelo Zezaziso';
  ZU['nav.profileMenu.language'] = 'Ulimi';
  ZU['nav.profileMenu.privacy'] = 'Inqubomgomo Yobumfihlo';
  ZU['nav.profileMenu.terms'] = 'Imigomo';
  ZU['lang.switchLabel'] = 'Ulimi';
  ZU['footer.platform'] = 'Uhlelo';
  ZU['footer.company'] = 'Inkampani';
  ZU['footer.trustSafety'] = 'Ukwethenjwa Nokuphepha';
  ZU['footer.findWork'] = 'Funa Umsebenzi';
  ZU['footer.hireTalent'] = 'Qasha Amathalente';
  ZU['footer.howItWorks'] = 'Kusebenza Kanjani';
  ZU['footer.resources'] = 'Izinsiza';
  ZU['footer.aboutYOUNGMERIT'] = 'Mayelana Nathi';
  ZU['footer.careers'] = 'Imisebenzi';
  ZU['footer.community'] = 'Umphakathi';
  ZU['footer.contact'] = 'Xhumana Nathi';
  ZU['footer.identityVerification'] = 'Ukuqinisekiswa Kobunikazi';
  ZU['footer.disputeSystem'] = 'Uhlelo Lwezimpikiswano';
  ZU['footer.privacyPolicy'] = 'Inqubomgomo Yobumfihlo';
  ZU['footer.termsOfService'] = 'Imigomo Yesevisi';
  ZU['footer.cookieSettings'] = 'Izilungiselelo Zamakhukhi';
  ZU['footer.tagline'] = 'Sinomgomo wokwakha umhlaba lapho amathuba ezuzwa, hhayi ukunikezwa.';
  ZU['footer.copyright'] = 'Ilungelo Lokushicilela 2026 YOUNGMERIT. Onke amalungelo agodliwe.';
  ZU['footer.builtFor'] = 'Yakhelwe intsha. Ithenjwe amabhizinisi.';
  ZU['loc.all'] = 'Zonke Izindawo';
  ZU['loc.za'] = 'iNingizimu Afrika';
  ZU['loc.es'] = 'iSpain';
  ZU['loc.fr'] = 'iFrance';
  ZU['loc.gb'] = 'i-United Kingdom';
  ZU['loc.cn'] = 'iChina';
  ZU['loc.us'] = 'i-United States';
  ZU['idx.hero.eyebrow'] = 'Sesivulekile manje ku-early access';
  ZU['idx.hero.title1'] = 'ULWAZI';
  ZU['idx.hero.title2'] = 'NGAPHAMBI';
  ZU['idx.hero.title3'] = 'KOMSEBENZI.';
  ZU['idx.hero.explainer'] = 'Siyinkundla lapho intsha iqedela khona <strong>imisebenzi yangempela ekhokhelwayo</strong> yamabhizinisi angempela, yakha <strong>umlando womsebenzi oqinisekisiwe</strong> ovula amathuba — ngaphandle kweziqu, ubudlelwano, noma iminyaka yolwazi.';
  ZU['idx.hero.ctaFind'] = 'Qala Ukufuna Umsebenzi';
  ZU['idx.hero.ctaHire'] = 'Qasha Amathalente';
  ZU['idx.hero.note'] = 'Mahhala ukujoyina. Akudingeki ikhadi lesikweletu. Khansela noma nini.';
  ZU['idx.strip.countries.title'] = 'Amazwe ayi-6';
  ZU['idx.strip.countries.desc'] = 'iNingizimu Afrika, iChina, i-USA, iFrance, iSpain ne-UK';
  ZU['idx.strip.verified.title'] = 'Kuqinisekiswe ngobufakazi';
  ZU['idx.strip.verified.desc'] = 'Amaphuzu okwethenjwa asuselwa emsebenzini wangempela oqediwe';
  ZU['idx.strip.escrow.title'] = 'Kuvikelwe nge-escrow';
  ZU['idx.strip.escrow.desc'] = 'Yonke inkokhelo igcinwa iphephile kuze kuvunyelwane ngomsebenzi';
  ZU['idx.strip.career.title'] = 'Kuqala umsebenzi wesikhathi eside';
  ZU['idx.strip.career.desc'] = 'Kwakhelwe ukuhambisa abasebenzi kusuka emisebenzini emincane kuya emsebenzini ogcwele';
  ZU['idx.trust.label'] = 'Kwakhelwe ukusetshenziswa';
  ZU['idx.for.eyebrow'] = 'Esibakhelele Bona';
  ZU['idx.for.title'] = 'IZINKINGA EZIMBILI.<br/>UHLELO OLUNYE.';
  ZU['idx.for.desc'] = 'Intsha ayikwazi ukuqashwa ngaphandle kolwazi. Amabhizinisi awakwazi ukuthola amathalente aqalayo anemali elula futhi ethenjekile. Sixazulula zombili izinkinga ngasikhathi sinye.';
  ZU['idx.for.workers.label'] = 'Kwabasha';
  ZU['idx.for.workers.title'] = 'YAKHA ULWAZI<br/>OLUYIQINISO.';
  ZU['idx.for.workers.desc'] = 'Alukho i-resume. Aziqu. Abudlelwano obudingekayo. Qedela imisebenzi yangempela, uhole imali yangempela futhi wakhe udumo oluqinisekisiwe olukwenza ngempela uqashwe.';
  ZU['idx.for.workers.perk1'] = 'Qedela imisebenzi yangempela futhi uhole imali kusukela osukwini lokuqala';
  ZU['idx.for.workers.perk2'] = 'Yakha amaphuzu okwethenjwa abaqashi abawahloniphayo ngempela';
  ZU['idx.for.workers.perk3'] = 'Thola i-Skill Passport yakho — ubufakazi bomsebenzi obuhambayo, unomphela';
  ZU['idx.for.workers.perk4'] = 'Khuphuka kusuka ku-Rookie uye ku-Elite njengoba uqedela umsebenzi omningi';
  ZU['idx.for.workers.cta'] = 'Funa Umsebenzi';
  ZU['idx.for.biz.label'] = 'Kumabhizinisi';
  ZU['idx.for.biz.title'] = 'QASHA<br/>NGOKUTHEMBEKA.';
  ZU['idx.for.biz.desc'] = 'Yeka ukuqasha ngethemba. Wonke umsebenzi enkundleni yethu unomlando oqinisekisiwe womsebenzi wangempela oqediwe, izilinganiso zangempela, nokuqashwa kabusha kwangempela — hhayi nje i-CV.';
  ZU['idx.for.biz.perk1'] = 'Thumela imisebenzi mahhala — khokha kuphela lapho umsebenzi usuqediwe';
  ZU['idx.for.biz.perk2'] = 'Thola amathalente ahloliwe anemilando yangempela eqinisekisiwe';
  ZU['idx.for.biz.perk3'] = 'Yonke inkokhelo ivikelwe nge-escrow kuze uvumele ukulethwa';
  ZU['idx.for.biz.perk4'] = 'Yakha isiqoqo sangasese samathalente futhi uqashe kabusha abasebenzi bakho abahle ngokushesha';
  ZU['idx.for.biz.cta'] = 'Qasha Amathalente';
  ZU['idx.prob.title'] = 'UMHLABA WENZE<br/>ULWAZI<br/><span class="acc">UMNYANGO OVALIWE.</span>';
  ZU['idx.prob.desc'] = 'Emazweni ayisithupha amakhulu omnotho, izigidi zentsha zilungele ukusebenza — kodwa yonke imisebenzi yezinga eliphansi idinga ulwazi okungenakwenzeka ukuluthola ngaphandle komsebenzi kuqala. Siyayiqeda leyo mjikelezo.';
  ZU['idx.country.za.name'] = 'iNingizimu Afrika';
  ZU['idx.country.za.lbl'] = 'Ukungabi khona kwemisebenzi entsha';
  ZU['idx.country.cn.name'] = 'iChina';
  ZU['idx.country.cn.lbl'] = 'Ukungabi khona kwemisebenzi kwabaqedile isikole';
  ZU['idx.country.us.name'] = 'i-United States';
  ZU['idx.country.us.lbl'] = 'Ukugcwala kweziqu';
  ZU['idx.country.fr.name'] = 'iFrance';
  ZU['idx.country.fr.lbl'] = 'Izithiyo zeziqu';
  ZU['idx.country.es.name'] = 'iSpain';
  ZU['idx.country.es.lbl'] = 'Ukungabi khona kwemisebenzi entsha';
  ZU['idx.country.gb.name'] = 'i-UK';
  ZU['idx.country.gb.lbl'] = 'Ukukhuphuka kwezidingo zolwazi';
  ZU['idx.countries.tagline'] = 'Chofoza ukuze ubone ulwazi olunengeziwe ngezwe ngalinye';
  ZU['idx.probBox.title'] = 'I-<span class="acc">GEBE LOBUFAKAZI</span><br/>LIYIQINISO.';
  ZU['idx.probBox.desc'] = 'Intsha ayisweli amakhono. Isweli indlela yokukufakazela. Yileyo kuphela inkinga esikhona ukuyixazulula — ngomsebenzi wangempela, izilinganiso zangempela nomlando oqinisekisiwe wangempela.';
  ZU['idx.probBox.item1.title'] = 'Ngaphandle kolwazi, akukho ngena';
  ZU['idx.probBox.item1.desc'] = 'Amabhizinisi adinga iminyaka emibili kuya kwemihlanu yemisebenzi efundwa emavikini amabili.';
  ZU['idx.probBox.item2.title'] = 'Amabhizinisi awakwazi ukuthola amathalente asafufusa awathembayo';
  ZU['idx.probBox.item2.desc'] = 'Ukuqasha izinga eliphansi ngaphandle komlando ohloliwe kuyimbolela abaningi abangenayo.';
  ZU['idx.probBox.item3.title'] = 'Sakha umlando';
  ZU['idx.probBox.item3.desc'] = 'Imisebenzi yangempela. Izilinganiso zangempela. Ubufakazi bangempela — ngaphambi kwenhlolokhono yomsebenzi.';
  ZU['idx.how.eyebrow'] = 'Inqubo';
  ZU['idx.how.title'] = 'KULULA.<br/><span class="acc">IZINYATHELO EZINE.</span>';
  ZU['idx.how.desc'] = 'Noma ufuna umsebenzi noma ufuna ukuqasha, inqubo yakhelwe ukuba lula, iphephile futhi isheshe kusukela osukwini lokuqala.';
  ZU['idx.how.tabPeople'] = 'Kwabantu';
  ZU['idx.how.tabBiz'] = 'Kumabhizinisi';
  ZU['idx.how.seeFull'] = 'Bona incazelo egcwele';
  ZU['idx.how.p1.title'] = 'Dala Iphrofayela Yakho';
  ZU['idx.how.p1.desc'] = 'Bhalisa mahhala, engeza amakhono akho futhi uqinisekise ubunikazi bakho. Kuthatha imizuzu engaphansi kwemihlanu.';
  ZU['idx.how.p2.title'] = 'Faka Isicelo Semisebenzi';
  ZU['idx.how.p2.desc'] = 'Cinga imisebenzi yangempela ekhokhelwayo ethunyelwe amabhizinisi aqinisekisiwe futhi ufake isicelo ngokuchofoza kanye.';
  ZU['idx.how.p3.title'] = 'Qedela Uthole Imali';
  ZU['idx.how.p3.desc'] = 'Letha umsebenzi omuhle, uthole imvume futhi uthole inkokhelo ngokushesha ku-escrow.';
  ZU['idx.how.p4.title'] = 'Yakha Idumela Lakho';
  ZU['idx.how.p4.desc'] = 'Wonke umsebenzi uthola ukubuyekezwa futhi wakhe amaphuzu okwethenjwa. Khuphuka uvule umsebenzi ongcono.';
  ZU['idx.how.b1.title'] = 'Thumela Umsebenzi';
  ZU['idx.how.b1.desc'] = 'Chaza lokho okudingayo, beka isabelomali sakho futhi kuvele ngemizuzu. Ukuthumela kumahhala.';
  ZU['idx.how.b2.title'] = 'Buyekeza Abafakisicelo';
  ZU['idx.how.b2.desc'] = 'Cinga amathalente anamaphuzu okwethenjwa aqinisekisiwe, izinga lokuqedela, kanye nemisebenzi yangempela.';
  ZU['idx.how.b3.title'] = 'Landelela Uvumele';
  ZU['idx.how.b3.desc'] = 'Xhumana, buyekeza okulethiwe futhi ukhiphe imali kuphela lapho usuneliseka ngokugcwele.';
  ZU['idx.how.b4.title'] = 'Yakha Umgudu Wakho Wamathalente';
  ZU['idx.how.b4.desc'] = 'Londoloza abasebenzi abahle kakhulu, baqashe kabusha ngokushesha futhi unikeze imisebenzi egcwele kwabasebenzi bakho abahamba phambili.';
  ZU['idx.rep.eyebrow'] = 'Ukwedlula Kwethu';
  ZU['idx.rep.title'] = 'IDUMELA LAKHO<br/>YIMALI YAKHO<br/><span class="acc">EBALULEKILE.</span>';
  ZU['idx.rep.desc'] = 'Wonke umsebenzi owuqedelayo wakha okuthile okuhlala njalo. Amaphuzu okwethenjwa akhulayo, i-Skill Passport ehamba nawe, kanye nomlando womsebenzi okhuluma ngamandla kune-CV noma iyiphi.';
  ZU['idx.rep.feat1'] = 'I-Skill Passport — umlando womsebenzi ohambayo oqinisekisiwe abaqashi abawuthembayo';
  ZU['idx.rep.feat2'] = 'Amaphuzu okwethenjwa aphelele akhula ngawo wonke umsebenzi oqediwe';
  ZU['idx.rep.feat3'] = 'Ukukhula kwezinga: Rookie, Verified, Trusted ne-Elite';
  ZU['idx.rep.feat4'] = 'Ukulandelela ukuqashwa kabusha — uphawu olunamandla kakhulu lwekhwalithi';
  ZU['idx.rep.cta'] = 'Ukusebenza Kwedumela';
  ZU['idx.rep.card.role'] = 'I-Virtual Assistant, eGoli';
  ZU['idx.rep.card.badge'] = 'OTHENJWAYO';
  ZU['idx.rep.card.scoreSub'] = 'Kuhle kakhulu — ukubuyekezwa okuqinisekisiwe okungu-128';
  ZU['idx.rep.card.tasksDone'] = 'Imisebenzi Eqediwe';
  ZU['idx.rep.card.repeatHires'] = 'Ukuqashwa Kabusha';
  ZU['idx.rep.card.ndaSafe'] = 'Kuvikelwe nge-NDA';
  ZU['idx.early.eyebrow'] = 'Kungani ujoyina manje';
  ZU['idx.early.title'] = 'SISAQALA<br/><span class="acc">NJE.</span>';
  ZU['idx.early.desc'] = 'Sethulwa ngo-2026. Akukho izibalo zamalungu ezikhukhulisiwe lapha. Esinakho yinto ebaluleke kakhulu kunezibalo — ithuba lokuba ngowokuqala.';
  ZU['idx.early.card1.title'] = 'Yiba Yilungu Elisungulayo';
  ZU['idx.early.card1.desc'] = 'Abasebenzi namabhizinisi okuqala enkundleni yethu bakha ukukhula kwayo. Iphrofayela yakho izoba phakathi kwamadumela okuqala aqinisekisiwe kulolu chungechunge.';
  ZU['idx.early.card2.title'] = 'Yakha Ngaphambi Kwesixuku';
  ZU['idx.early.card2.desc'] = 'Wonke umsebenzi owuqedelayo manje ubufakazi bomsebenzi obukhona ngaphambi komakethe ukugcwala. Abaqala kuqala bakha amadumela anamandla kakhulu lapho isidingo sokuqasha sifika.';
  ZU['idx.early.card3.title'] = 'Sisize Sikwakhe Kahle';
  ZU['idx.early.card3.desc'] = 'Sethula emazweni ayisithupha ngoba inkinga ikhona yonke indawo. Impendulo yakho kulawa maviki okuqala ibumba ngqo umkhiqizo, izigaba, nezici esizozakha kamuva.';
  ZU['idx.early.strip.title'] = 'USULUNGELE UKUBA<br/>PHAKATHI KWABOKUQALA?';
  ZU['idx.early.strip.desc'] = 'Sijoyine manje. Qedela umsebenzi wakho wokuqala, uthole ukubuyekezwa kwakho kokuqala, futhi ube nedumela lokusungula ohlelweni ngaphambi kokuba imakethe ifike.';
  ZU['idx.early.strip.ctaSignup'] = 'Bhalisa Mahhala';
  ZU['idx.early.strip.ctaPost'] = 'Thumela Umsebenzi';

  // ---- fw/ht additions ----
  ZH['fw.pageTitle1'] = '寻找';
  ZH['fw.pageTitle2'] = '工作。';
  ZH['fw.pageSub'] = '浏览经过验证企业发布的任务。抢先在平台上线时建立你的声誉——立即注册接收通知。';
  ZH['fw.search'] = '搜索';
  ZH['fw.searchPlaceholder'] = '搜索任务、技能、关键词...';
  ZH['fw.filter.allCategories'] = '所有类别';
  ZH['fw.filter.design'] = '设计与创意';
  ZH['fw.filter.social'] = '社交媒体';
  ZH['fw.filter.admin'] = '行政支持';
  ZH['fw.filter.data'] = '数据录入';
  ZH['fw.filter.research'] = '调研';
  ZH['fw.filter.support'] = '客户支持';
  ZH['fw.filter.ai'] = 'AI 协助';
  ZH['fw.filter.translation'] = '翻译';
  ZH['fw.filter.anyLevel'] = '任意级别';
  ZH['fw.filter.beginner'] = '初级';
  ZH['fw.filter.intermediate'] = '中级';
  ZH['fw.filter.advanced'] = '高级';
  ZH['fw.sort.newest'] = '最新发布';
  ZH['fw.sort.payHigh'] = '薪酬从高到低';
  ZH['fw.sort.payLow'] = '薪酬从低到高';
  ZH['fw.sort.beginnerFriendly'] = '新手友好';
  ZH['fw.pill.allTasks'] = '全部任务';
  ZH['fw.pill.design'] = '设计';
  ZH['fw.pill.social'] = '社交媒体';
  ZH['fw.pill.admin'] = '行政';
  ZH['fw.pill.data'] = '数据录入';
  ZH['fw.pill.research'] = '调研';
  ZH['fw.pill.ai'] = 'AI 协助';
  ZH['fw.pill.translation'] = '翻译';
  ZH['fw.pill.support'] = '支持';
  ZH['fw.pill.writing'] = '写作与内容';
  ZH['fw.pill.video'] = '视频与音频';
  ZH['fw.pill.tech'] = '网页与技术';
  ZH['fw.pill.sales'] = '销售与推广';
  ZH['fw.pill.photography'] = '摄影';
  ZH['fw.sidebar.budgetRange'] = '预算范围';
  ZH['fw.sidebar.anyBudget'] = '不限预算';
  ZH['fw.sidebar.upTo'] = '最高';
  ZH['fw.sidebar.deadline'] = '截止日期';
  ZH['fw.sidebar.due1day'] = '1天内截止';
  ZH['fw.sidebar.due3days'] = '3天内截止';
  ZH['fw.sidebar.due1week'] = '1周内截止';
  ZH['fw.sidebar.flexible'] = '灵活';
  ZH['fw.sidebar.experienceLevel'] = '经验级别';
  ZH['fw.sidebar.workType'] = '工作类型';
  ZH['fw.sidebar.oneOff'] = '一次性任务';
  ZH['fw.sidebar.apprenticeship'] = '实习/学徒';
  ZH['fw.sidebar.ongoing'] = '长期项目';
  ZH['fw.sidebar.clearAll'] = '清除所有筛选';
  ZH['fw.passport.title'] = '技能护照';
  ZH['fw.passport.desc'] = '你完成的每项任务都会经过验证并加入你的便携式工作履历。雇主对它的信任超过简历。';
  ZH['fw.passport.cta'] = '创建你的技能护照';
  ZH['fw.banner.title'] = '我们即将上线。';
  ZH['fw.banner.desc'] = '来自认证企业的真实任务即将上线。立即注册，第一时间获得通知并优先体验。';
  ZH['fw.banner.cta'] = '获取抢先体验资格';
  ZH['fw.results.showing'] = '显示';
  ZH['fw.results.task'] = '个任务';
  ZH['fw.results.tasks'] = '个任务';
  ZH['fw.sortBy'] = '排序方式：';
  ZH['fw.card.title'] = '设计5套Instagram帖子模板';
  ZH['fw.card.by'] = '发布者';
  ZH['fw.card.company'] = 'Creative Co.';
  ZH['fw.card.verified'] = '已验证';
  ZH['fw.card.tagDesign'] = '设计';
  ZH['fw.card.tagCanva'] = 'Canva';
  ZH['fw.card.tagSocial'] = '社交媒体';
  ZH['fw.card.tagBeginner'] = '初级';
  ZH['fw.card.tagOneOff'] = '一次性';
  ZH['fw.card.due3days'] = '3天内截止';
  ZH['fw.card.applicants'] = '0人申请——抢先申请';
  ZH['fw.card.escrow'] = '托管保障';
  ZH['fw.card.fixedPrice'] = '固定价格';
  ZH['fw.card.safePay'] = '安全支付';
  ZH['fw.card.applyNow'] = '立即申请';
  ZH['fw.empty.title'] = '没有匹配的任务';
  ZH['fw.empty.desc'] = '没有符合当前筛选条件的任务。';
  ZH['fw.empty.clear'] = '清除所有筛选';
  ZH['fw.empty.rest'] = '查看示例任务，或注册以便在真实任务上线时收到通知。';
  ZH['ht.pageTitle1'] = '招聘';
  ZH['ht.pageTitle2'] = '人才。';
  ZH['ht.pageSub'] = '浏览身份已验证、随时可承接任务的年轻工作者。成为首批与我们合作招聘的企业之一。';
  ZH['ht.searchPlaceholder'] = '按技能、姓名或关键词搜索...';
  ZH['ht.filter.allSkills'] = '所有技能';
  ZH['ht.filter.adminVA'] = '行政与虚拟助理';
  ZH['ht.filter.rookie'] = '新手';
  ZH['ht.filter.verified'] = '已验证';
  ZH['ht.filter.trusted'] = '可信赖';
  ZH['ht.filter.elite'] = '精英';
  ZH['ht.pill.allTalent'] = '全部人才';
  ZH['ht.pill.designers'] = '设计师';
  ZH['ht.pill.socialMedia'] = '社交媒体';
  ZH['ht.pill.admin'] = '行政';
  ZH['ht.pill.dataEntry'] = '数据录入';
  ZH['ht.pill.research'] = '调研';
  ZH['ht.pill.aiAssistants'] = 'AI 助理';
  ZH['ht.pill.translators'] = '翻译人员';
  ZH['ht.pill.support'] = '支持';
  ZH['ht.pill.writing'] = '写作与内容';
  ZH['ht.pill.video'] = '视频与音频';
  ZH['ht.pill.tech'] = '网页与技术';
  ZH['ht.pill.sales'] = '销售与推广';
  ZH['ht.pill.photography'] = '摄影';
  ZH['ht.post.title'] = '发布任务';
  ZH['ht.post.desc'] = '告诉我们你的需求，让经过验证的人才来申请。发布免费，资金托管直至你确认。';
  ZH['ht.post.cta'] = '免费发布任务';
  ZH['ht.sidebar.minTrustScore'] = '最低信任评分';
  ZH['ht.sidebar.anyScore'] = '不限评分';
  ZH['ht.sidebar.minPrefix'] = '最低';
  ZH['ht.sidebar.starsSuffix'] = '星';
  ZH['ht.sidebar.talentLevel'] = '人才等级';
  ZH['ht.sidebar.availability'] = '可用状态';
  ZH['ht.sidebar.availableNow'] = '立即可用';
  ZH['ht.sidebar.thisWeek'] = '本周';
  ZH['ht.sidebar.flexible'] = '灵活';
  ZH['ht.trust.title'] = '为什么选择我们？';
  ZH['ht.trust.item1'] = '每次雇佣都有托管支付保护';
  ZH['ht.trust.item2'] = '身份已验证的人才档案';
  ZH['ht.trust.item3'] = '每个档案均含已验证技能护照';
  ZH['ht.trust.item4'] = '含争议解决服务';
  ZH['ht.banner.title'] = '我们即将上线。';
  ZH['ht.banner.desc'] = '经过验证的年轻工作者正在注册。创建企业账户，发布任务，成为最早招聘的企业。';
  ZH['ht.banner.cta'] = '免费发布任务';
  ZH['ht.sortLabel'] = '排序：';
  ZH['ht.sort.rated'] = '评分最高';
  ZH['ht.sort.tasks'] = '完成任务最多';
  ZH['ht.sort.newest'] = '最新会员';
  ZH['ht.results.profile'] = '个档案';
  ZH['ht.results.profiles'] = '个档案';
  ZH['ht.card.idVerified'] = '身份已验证';
  ZH['ht.card.level'] = '可信赖';
  ZH['ht.card.role'] = '社交媒体经理';
  ZH['ht.card.location'] = '约翰内斯堡，南非';
  ZH['ht.card.tagSocial'] = '社交媒体';
  ZH['ht.card.tagCopywriting'] = '文案写作';
  ZH['ht.card.tagContent'] = '内容创作';
  ZH['ht.card.tasksDone'] = '已完成12项任务';
  ZH['ht.card.passportVerified'] = '技能护照已验证';
  ZH['ht.card.availableNow'] = '当前可用';
  ZH['ht.card.demoProfile'] = '示例档案';
  ZH['ht.card.hireNow'] = '立即雇佣';
  ZH['ht.card.save'] = '收藏';
  ZH['ht.empty.title'] = '没有匹配的档案';
  ZH['ht.empty.desc'] = '没有符合当前筛选条件的工作者。';
  ZH['ht.empty.createAccount'] = '创建企业账户';
  ZH['ht.empty.rest1'] = '查看示例档案，或';
  ZH['ht.empty.rest2'] = '以便在工作者注册时收到通知。';

  // ---- blog.* additions ----
  ZH['blog.hero.title'] = '社区<span class="accent">动态。</span>';
  ZH['blog.hero.desc'] = '来自工作者和企业的文字与语音帖子——来自平台的真实体验分享。';
  ZH['blog.guestBanner'] = '你目前以访客身份发帖——<a href="auth.html" style="color:var(--dark);font-weight:600;">注册</a>后可用真实姓名发帖，并通过帖子建立声誉。';
  ZH['blog.search.placeholder'] = '搜索帖子…';
  ZH['blog.filter.all'] = '全部帖子';
  ZH['blog.filter.worker'] = '工作者故事';
  ZH['blog.filter.business'] = '面向企业';
  ZH['blog.filter.tips'] = '技巧与指南';
  ZH['blog.filter.update'] = '平台更新';
  ZH['blog.dock.label'] = '分享一些真实内容…';
  ZH['blog.dock.write'] = '文字';
  ZH['blog.dock.record'] = '录音';
  ZH['blog.composer.text'] = '文字动态';
  ZH['blog.composer.voice'] = '语音动态';
  ZH['blog.composer.titlePlaceholder'] = '标题（可选）';
  ZH['blog.composer.contentPlaceholder'] = '分享一个技巧、一个故事，或你在求职市场上学到的东西…';
  ZH['blog.composer.tag.worker'] = '工作者故事';
  ZH['blog.composer.tag.business'] = '面向企业';
  ZH['blog.composer.tag.tips'] = '技巧与指南';
  ZH['blog.composer.tag.update'] = '平台更新';
  ZH['blog.composer.preview'] = '预览——社区将看到的正是这个效果';
  ZH['blog.composer.publish'] = '发布';
  ZH['blog.composer.voice.tapToRecord'] = '点击开始录音';
  ZH['blog.composer.voice.limit'] = '目前最长30秒';
  ZH['blog.composer.voice.rerecord'] = '重新录制';
  ZH['blog.composer.voice.publish'] = '发布';
  ZH['blog.post.helpful'] = '有帮助';
  ZH['blog.post.insightful'] = '有见地';
  ZH['blog.post.agree'] = '同意';
  ZH['blog.post.save'] = '收藏';
  ZH['blog.post.delete'] = '删除';
  ZH['blog.post.readMore'] = '阅读更多';
  ZH['blog.empty.title'] = '轮到你了。';
  ZH['blog.empty.desc'] = '目前还没有人发帖——成为我们社区的第一个声音。在下方写一条文字动态或录制一条语音动态。';

  // ---- profile.* (tagged subset) ----
  ZH['profile.gate.title'] = '你的档案在这里安家。';
  ZH['profile.gate.desc'] = '注册以创建你的技能护照并开始找工作——或创建企业账户来发布任务、招聘人才。';
  ZH['profile.gate.ctaSignup'] = '创建账户';
  ZH['profile.gate.ctaLogin'] = '登录';
  ZH['profile.privateNotice'] = '<strong>你的档案对其他已登录会员可见。</strong>任何登录 YoungMerit 的用户都能看到你的姓名、照片、简介、作品集和工作记录。你的联系方式和银行信息永远不会展示给除你以外的任何人。';
  ZH['profile.public.loading'] = '正在加载档案…';
  ZH['profile.public.loginRequired'] = '请登录以查看工作者档案。';
  ZH['profile.public.backToSearch'] = '← 返回招聘人才';
  ZH['profile.public.inviteCta'] = '邀请参与任务';
  ZH['profile.public.noPortfolio'] = '暂无作品集项目。';
  ZH['profile.public.noBio'] = '该工作者尚未添加简介。';
  ZH['profile.public.notFound.title'] = '未找到档案';
  ZH['profile.public.notFound.desc'] = '该工作者档案不存在或已不可用。';
  ZH['profile.worker.cover.edit'] = '编辑封面';
  ZH['profile.worker.badge.verified'] = '已验证企业';

  // ---- about.* (values/team/timeline/global/press/cta) ----
  ZH['about.values.eyebrow'] = '我们的动力';
  ZH['about.values.title'] = '我们的核心<br/><span class="accent">价值观。</span>';
  ZH['about.values.desc'] = '这些不是挂在墙上的口号，而是我们做每一个决定背后的原则——从平台的构建方式，到我们对待每一位工作者和企业的方式。';
  ZH['about.values.trust.title'] = '信任';
  ZH['about.values.trust.desc'] = '我们通过经过验证的工作证明建立信任。每一次评分、评价和完成的任务都经过独立追踪，杜绝虚报和操纵。';
  ZH['about.values.opportunity.title'] = '机会';
  ZH['about.values.opportunity.desc'] = '我们相信每个人都值得拥有公平的机会来展示自己的能力，无论他们在哪里求学、认识谁，或者简历上目前写着什么。';
  ZH['about.values.quality.title'] = '品质';
  ZH['about.values.quality.desc'] = '我们对工作者和企业都保持高标准。优秀的工作会被认可和奖励，问题也会通过我们的调解机制被迅速、公正地解决。';
  ZH['about.values.impact.title'] = '影响力';
  ZH['about.values.impact.desc'] = '我们衡量的是对人们生活和职业发展的真实影响。每一次源自这里的全职雇佣，都是我们所追求目标的直接胜利。';
  ZH['about.team.eyebrow'] = '背后的团队';
  ZH['about.team.title'] = '认识<span class="accent">团队。</span>';
  ZH['about.team.desc'] = '这是一支分布在全球的团队，我们相信自己所打造的事业，因为我们大多数人都亲身经历过这个问题。';
  ZH['about.team.naledi.role'] = '联合创始人兼首席执行官';
  ZH['about.team.naledi.bio'] = '曾是青年就业研究员，花了六年时间研究非洲各地的初级职位危机，最终决定亲自打造解决方案。';
  ZH['about.team.li.role'] = '联合创始人兼首席技术官';
  ZH['about.team.li.bio'] = '曾任职于中国一家大型科技公司。2022年毕业后，尽管拥有顶尖大学的学位，仍数月找不到工作。后来打造了我们的信誉引擎。';
  ZH['about.team.camille.role'] = '增长负责人';
  ZH['about.team.camille.bio'] = '曾在两家欧洲数字市场负责增长业务。热衷于利用技术为法国乃至更广泛地区的年轻人打开经济流动的大门。';
  ZH['about.team.james.role'] = '信任与安全负责人';
  ZH['about.team.james.bio'] = '曾负责一家大型零工经济平台的信任与安全工作。从零开始设计了我们的托管系统、身份验证流程和争议解决机制。';
  ZH['about.team.joinTitle'] = '加入团队';
  ZH['about.team.joinDesc'] = '我们正在工程、设计、增长和运营等多个岗位招聘，六个国家均可完全远程办公。如果这个问题对你个人而言很重要，我们期待听到你的声音。';
  ZH['about.team.joinCta'] = '查看职位空缺';
  ZH['about.timeline.eyebrow'] = '我们的历程';
  ZH['about.timeline.title'] = '我们<span class="accent">一路走来。</span>';
  ZH['about.timeline.t1.year'] = '2025年年中';
  ZH['about.timeline.t1.title'] = '想法初步成形';
  ZH['about.timeline.t1.desc'] = 'Naledi 和 Li 在内罗毕的一次青年就业会议上相识，发现彼此一直在从世界两端研究同一个问题。经过数周的通话和共同研究，这个理念逐渐成形。';
  ZH['about.timeline.t2.year'] = '2025年末';
  ZH['about.timeline.t2.title'] = '秘密开发阶段';
  ZH['about.timeline.t2.desc'] = '创始团队正式集结，Camille 加入负责增长，James 加入负责信任与安全。团队开始在两大洲以完全保密模式，进行为期六个月的专注产品开发。';
  ZH['about.timeline.t3.year'] = '2026年初';
  ZH['about.timeline.t3.title'] = '我们正式上线';
  ZH['about.timeline.t3.desc'] = '平台在南非和中国同步上线，全面支持英文和中文。信誉系统、技能护照和托管支付基础设施从第一天起全部投入使用。';
  ZH['about.timeline.t4.year'] = '2026年年中';
  ZH['about.timeline.t4.title'] = '扩展至另外四个国家';
  ZH['about.timeline.t4.desc'] = '平台向美国、法国、西班牙和英国开放，法语和西班牙语支持同步上线，实现六个国家四种语言的全覆盖。';
  ZH['about.timeline.t5.year'] = '当前';
  ZH['about.timeline.t5.title'] = '每天持续增长';
  ZH['about.timeline.t5.desc'] = '我们正在积极引入首批工作者和企业。从此刻起，每一项发布并完成的任务，都是这一模式行之有效的证明。改变世界招聘方式的旅程，就从现在开始。';
  ZH['about.timeline.t6.year'] = '未来展望';
  ZH['about.timeline.t6.title'] = '学徒计划与雇主工具';
  ZH['about.timeline.t6.desc'] = '政府学徒合作项目，以及更深入的雇主招聘工具，正在积极开发中。最精彩的部分仍在前方。';
  ZH['about.global.eyebrow'] = '我们的业务范围';
  ZH['about.global.title'] = '从第一天起<br/><span class="accent">就面向全球。</span>';
  ZH['about.global.desc'] = '我们从一开始就不是先做本地市场再考虑扩张，而是从第一天起就为全球打造这个平台，因为这个问题无处不在，需要真正的全球化解决方案。';
  ZH['about.global.langCardTitle'] = '平台语言';
  ZH['about.global.live'] = '已上线';
  ZH['about.global.foundingMarket'] = '创始市场，2026年初上线';
  ZH['about.global.expandedMid2026'] = '2026年年中扩展';
  ZH['about.global.yearOneTarget'] = '第一年目标';
  ZH['about.global.za.members'] = '10,000名会员';
  ZH['about.global.cn.members'] = '15,000名会员';
  ZH['about.global.us.members'] = '8,000名会员';
  ZH['about.global.fr.members'] = '4,000名会员';
  ZH['about.global.es.members'] = '3,500名会员';
  ZH['about.global.gb.members'] = '5,000名会员';
  ZH['about.press.title'] = '媒体报道。';
  ZH['about.press.desc'] = '关于我们致力解决的问题的早期报道与评论。';
  ZH['about.press.p1.quote'] = '“经验悖论是现代劳动力市场最顽固的失灵之一。能够通过可验证的工作证明打破这一循环的平台，值得认真关注。”';
  ZH['about.press.p1.date'] = '2025年，青年就业专题报道';
  ZH['about.press.p2.quote'] = '“南非的青年失业危机需要创造性的解决方案。一个用可验证工作履历取代学历证书的平台，或许是迄今为止最具意义的尝试之一。”';
  ZH['about.press.p2.date'] = '2025年，未来工作系列报道';
  ZH['about.press.p3.quote'] = '“中国的毕业生失业问题不是技能缺口，而是证明缺口。年轻人有能力做好工作，只是没有办法证明这一点。而这正是这类平台所解决的精确缺口。”';
  ZH['about.press.p3.date'] = '2025年，毕业生经济报告';
  ZH['about.cta.eyebrow'] = '加入这场运动';
  ZH['about.cta.title'] = '轮到你来<br/><span class="accent">证明自己了。</span>';
  ZH['about.cta.desc'] = '我们才刚刚起步。抢先建立你的可验证声誉，帮助证明这个模式是行得通的。';
  ZH['about.cta.ctaFind'] = '寻找工作';
  ZH['about.cta.ctaHire'] = '招聘人才';

  // ---- about.* (hero/promise/pillars/problem) ----
  ZH['about.hero.breadcrumb'] = '关于我们';
  ZH['about.hero.eyebrow'] = '我们的使命';
  ZH['about.hero.title'] = '我们的使命是<br/><span class="accent">打开机会之门。</span>';
  ZH['about.hero.desc'] = '我们的诞生，是因为全球数百万年轻人已准备好工作，却始终跨不过第一道门槛。我们正在通过每一个经过验证的任务，逐步改变这一现状。';
  ZH['about.hero.ctaFind'] = '寻找工作';
  ZH['about.hero.ctaHow'] = '运作方式';
  ZH['about.promise.title'] = 'YOUNGMERIT 的承诺';
  ZH['about.promise.quote'] = '“机会应当<span class="accent">靠努力赢得，</span>而非继承而来。”';
  ZH['about.pillar1.title'] = '经验证的工作证明';
  ZH['about.pillar1.desc'] = '每项完成的任务都经过独立追踪';
  ZH['about.pillar2.title'] = '从第一天起就面向六大国家';
  ZH['about.pillar2.desc'] = '南非、中国、美国、法国、西班牙和英国';
  ZH['about.pillar3.title'] = '通往职业发展，而非临时零工';
  ZH['about.pillar3.desc'] = '我们正在打造通往全职就业的真实路径';
  ZH['about.problem.eyebrow'] = '我们存在的原因';
  ZH['about.problem.title'] = '我们要解决的<br/><span class="accent">问题。</span>';
  ZH['about.problem.desc'] = '青年失业是一场全球性危机，但根源在各地都一样：没有经验就无法入职，没有入职就无法获得经验。我们打破了这个循环。';
  ZH['about.problem.za'] = '南非';
  ZH['about.problem.za.rate'] = '青年失业率约60%';
  ZH['about.problem.za.desc'] = '极端的结构性失业、正规就业机会的匮乏，以及技能与岗位之间的严重错配，使数百万南非年轻人完全被排除在经济体系之外。';
  ZH['about.problem.cn'] = '中国';
  ZH['about.problem.cn.rate'] = '应届毕业生失业率约20%';
  ZH['about.problem.cn.desc'] = '数百万毕业生争抢日益稀缺的岗位。企业普遍要求入门级职位具备两到五年经验，这对应届毕业生而言几乎是无法逾越的门槛。';
  ZH['about.problem.us'] = '美国';
  ZH['about.problem.us.rate'] = '学历饱和危机';
  ZH['about.problem.us.desc'] = '学历膨胀，加上入门级岗位也要求过往经验，使数百万美国年轻人从教育走向就业的传统路径彻底崩塌。';
  ZH['about.problem.fr'] = '法国';
  ZH['about.problem.fr.rate'] = '僵化的高学历依赖型招聘';
  ZH['about.problem.fr.desc'] = '法国正式化的招聘文化使得那些没有精英学历或人脉的年轻人格外难以进入职场。';
  ZH['about.problem.es'] = '西班牙';
  ZH['about.problem.es.rate'] = '青年失业率约28%';
  ZH['about.problem.es.desc'] = '欧洲最高的青年失业率之一，源于经济停滞、对临时合同的依赖，以及持续疲软的入门级就业市场。';
  ZH['about.problem.gb'] = '英国';
  ZH['about.problem.gb.rate'] = '经验要求普遍膨胀';
  ZH['about.problem.gb.desc'] = '如今即使是初级职位也要求大量的过往经验。年轻毕业生陷入一个怪圈：每一次申请都因缺乏经验被拒，而这种经验只能通过工作本身获得。';

  // ---- profile.* (t() calls) ----
  ZH['profile.about.add'] = '点击添加个人简介。';
  ZH['profile.about.edit'] = '编辑';
  ZH['profile.actions.verify'] = '完成验证';
  ZH['profile.actions.updateContact'] = '更新联系方式和收款信息';
  ZH['profile.plan.title'] = '您的方案';
  ZH['profile.plan.active'] = '生效中';
  ZH['profile.plan.upgrade'] = '升级方案';
  ZH['profile.plan.manage'] = '管理方案';
  ZH['profile.plan.free'] = '免费版';
  ZH['profile.plan.pro'] = '专业专业版';
  ZH['profile.plan.business'] = '企业专业版';
  ZH['profile.plan.growth'] = '企业成长版';
  ZH['profile.plan.featuredProfile'] = '精选展示已开启：您的个人资料将在"雇佣人才"搜索结果中突出显示。';
  ZH['profile.plan.featuredCompany'] = '精选展示已开启：您的企业资料将在求职者面前脱颖而出。';
  ZH['profile.plan.featuredCompanyTasks'] = '精选展示已开启：您的企业和任务将在搜索结果中突出显示。';
  ZH['profile.plan.upsellWorker'] = '升级到专业专业版即可获得精选展示，在企业面前脱颖而出。';
  ZH['profile.plan.upsellBiz'] = '升级到企业专业版或企业成长版，让您的企业和任务在求职者面前脱颖而出。';
  ZH['profile.worker.tabs.analytics'] = '数据分析';
  ZH['profile.worker.analytics.title'] = '个人资料数据分析';
  ZH['profile.worker.analytics.subtitle'] = '您的资料在企业眼中的表现如何。';
  ZH['profile.worker.analytics.views'] = '资料浏览量';
  ZH['profile.worker.analytics.viewsWeek'] = '本周浏览量';
  ZH['profile.worker.analytics.saved'] = '被企业收藏次数';
  ZH['profile.worker.analytics.acceptRate'] = '录用率';
  ZH['profile.worker.analytics.footnote'] = '基于已发送的 {sent} 份申请中有 {accepted} 份被录用。';
  ZH['profile.worker.analytics.locked'] = '升级到专业专业版，即可查看谁浏览了您的资料、企业收藏的频率，以及您的申请表现如何。';
  ZH['profile.biz.about.title'] = '企业简介';
  ZH['profile.biz.actions.edit'] = '编辑档案';
  ZH['profile.biz.actions.post'] = '发布任务';
  ZH['profile.biz.applicants.lock'] = '当你将申请者列入候选名单后，其完整档案才会解锁';
  ZH['profile.biz.history.count'] = '项任务';
  ZH['profile.biz.history.title'] = '已完成任务';
  ZH['profile.biz.meta.hired'] = '已雇佣人数';
  ZH['profile.biz.meta.member'] = '加入时间';
  ZH['profile.biz.meta.posted'] = '已发布任务';
  ZH['profile.biz.postings.new'] = '新任务';
  ZH['profile.biz.postings.title'] = '进行中的任务列表';
  ZH['profile.biz.skills.title'] = '行业标签';
  ZH['profile.biz.stats.hired'] = '已雇佣人才';
  ZH['profile.biz.stats.paid'] = '总支付金额';
  ZH['profile.biz.stats.posted'] = '已发布任务';
  ZH['profile.biz.stats.rating'] = '平均给出评分';
  ZH['profile.biz.tabs.about'] = '关于';
  ZH['profile.biz.tabs.bench'] = '信任团队';
  ZH['profile.biz.bench.title'] = '信任团队';
  ZH['profile.biz.bench.subtitle'] = '您雇用过不止一次的工作者——您的固定团队。';
  ZH['profile.biz.bench.empty'] = '雇用同一位工作者两次后，他们会自动出现在这里，一键即可为您的下一个任务再次雇用他们。';
  ZH['profile.biz.bench.browseCta'] = '浏览人才';
  ZH['profile.biz.bench.hireCount'] = '已雇用 {n} 次';
  ZH['profile.biz.bench.lastHired'] = '最近雇用于 {date}';
  ZH['profile.biz.bench.notePlaceholder'] = '私密备注（仅您可见）';
  ZH['profile.biz.bench.viewProfile'] = '查看资料';
  ZH['profile.biz.bench.rehire'] = '再次雇用';
  ZH['profile.biz.tabs.analytics'] = '数据分析';
  ZH['profile.biz.analytics.title'] = '数据分析面板';
  ZH['profile.biz.analytics.subtitle'] = '查看您发布任务的表现情况。';
  ZH['profile.biz.analytics.locked'] = '升级到商业版即可解锁数据分析面板：申请总数、录用率、任务完成率等更多数据。';
  ZH['profile.biz.analytics.applicants'] = '申请总数';
  ZH['profile.biz.analytics.hireRate'] = '录用率';
  ZH['profile.biz.analytics.completed'] = '已完成任务';
  ZH['profile.biz.analytics.completionRate'] = '完成率';
  ZH['profile.biz.analytics.advanced'] = '高级数据分析';
  ZH['profile.biz.analytics.saved'] = '被工作者收藏的次数';
  ZH['profile.biz.analytics.growthUpsell'] = '升级到 Growth 版即可解锁收藏次数等高级数据分析。';
  ZH['profile.biz.tabs.applicants'] = '申请者';
  ZH['profile.biz.tabs.history'] = '历史任务';
  ZH['profile.biz.tabs.postings'] = '进行中任务';
  ZH['profile.biz.tabs.saved'] = '收藏的帖子';
  ZH['profile.cv.remove'] = '删除';
  ZH['profile.cv.upload'] = '上传';
  ZH['profile.passport.completion'] = '完成率';
  ZH['profile.passport.earned'] = '已赚取';
  ZH['profile.passport.next'] = '完成第一项任务即可开始';
  ZH['profile.passport.nextMilestone'] = '还差 {n} 个任务即可达到{level}';
  ZH['profile.passport.maxLevel'] = '已达最高等级 — 没有更多可解锁的内容';
  ZH['profile.passport.rating'] = '平均评分';
  ZH['profile.savedPosts.cta'] = '前往社区';
  ZH['profile.savedPosts.empty'] = '暂无收藏的帖子。<br/>在社区动态中收藏帖子后，会显示在这里。';
  ZH['profile.savedPosts.title'] = '已收藏的帖子';
  ZH['profile.skills.add'] = '添加技能';
  ZH['profile.verification.done'] = '已验证';
  ZH['profile.verification.none'] = '未添加';
  ZH['profile.verification.pending'] = '待处理';
  ZH['profile.worker.about.title'] = '关于我';
  ZH['profile.worker.actions.browse'] = '浏览任务';
  ZH['profile.worker.actions.edit'] = '编辑档案';
  ZH['profile.worker.cv.title'] = '简历';
  ZH['profile.worker.meta.member'] = '加入时间';
  ZH['profile.worker.meta.tasks'] = '已完成任务';
  ZH['profile.worker.passport.barLabel'] = '已完成任务';
  ZH['profile.worker.passport.title'] = '技能护照';
  ZH['profile.worker.portfolio.viewLink'] = '查看链接';
  ZH['profile.worker.skills.title'] = '技能';
  ZH['profile.worker.tabs.about'] = '关于';
  ZH['profile.worker.tabs.growth'] = '成长历程';
  ZH['profile.worker.growth.title'] = '您的成长历程';
  ZH['profile.worker.growth.subtitle'] = '您在 YoungMerit 上真实里程碑的时间线。';
  ZH['profile.worker.growth.joined.title'] = '加入 YoungMerit';
  ZH['profile.worker.growth.joined.desc'] = '您旅程开始的地方。';
  ZH['profile.worker.growth.verified.title'] = '身份已验证';
  ZH['profile.worker.growth.verified.desc.done'] = '您的身份已确认。';
  ZH['profile.worker.growth.verified.desc.pending'] = '您的验证正在审核中。';
  ZH['profile.worker.growth.verified.desc.locked'] = '验证您的身份以解锁此里程碑。';
  ZH['profile.worker.growth.verified.cta'] = '立即验证';
  ZH['profile.worker.growth.firstTask.title'] = '完成第一个任务';
  ZH['profile.worker.growth.firstTask.desc.done'] = '您已交付第一个任务。';
  ZH['profile.worker.growth.firstTask.desc.locked'] = '完成您的第一个任务以解锁此里程碑。';
  ZH['profile.worker.growth.firstTask.cta'] = '浏览任务';
  ZH['profile.worker.growth.portfolio.title'] = '展示作品集';
  ZH['profile.worker.growth.portfolio.desc.done'] = '您已添加第一件作品。';
  ZH['profile.worker.growth.portfolio.desc.locked'] = '添加一件作品集内容以解锁此里程碑。';
  ZH['profile.worker.growth.portfolio.cta'] = '添加作品';
  ZH['profile.worker.growth.levelVerified.title'] = '达到「已验证」等级';
  ZH['profile.worker.growth.levelVerified.desc.done'] = '您解锁了「已验证」徽章。';
  ZH['profile.worker.growth.levelTrusted.title'] = '达到「可信赖」等级';
  ZH['profile.worker.growth.levelTrusted.desc.done'] = '您解锁了「可信赖」徽章。';
  ZH['profile.worker.growth.levelElite.title'] = '达到「精英」等级';
  ZH['profile.worker.growth.levelElite.desc.done'] = '您已达到 YoungMerit 的最高等级。';
  ZH['profile.worker.growth.level.progress'] = '已完成 {current}/{target} 个任务';
  ZH['profile.worker.tabs.portfolio'] = '作品集';
  ZH['profile.worker.tabs.saved'] = '收藏的帖子';
  ZH['profile.worker.tabs.tasks'] = '任务历史';
  ZH['profile.worker.tasks.count'] = '项任务';
  ZH['profile.worker.tasks.title'] = '已完成任务';

  // ---- careers.* ----
  ZH['careers.hero.breadcrumb'] = '招聘';
  ZH['careers.hero.eyebrow'] = '加入团队';
  ZH['careers.hero.title'] = '共建<br/><span class="accent">非洲就业的未来。</span>';
  ZH['careers.hero.desc'] = '我们是一支小团队，却怀有远大的抱负——将数百万年轻人与六个国家的真实经济机会连接起来。快来和我们一起打造它。';
  ZH['careers.stats.countries'] = '运营国家数';
  ZH['careers.stats.team'] = '团队规模';
  ZH['careers.stats.remote'] = '完全远程';
  ZH['careers.stats.earlyVal'] = '早期阶段';
  ZH['careers.stats.ownership'] = '真正的股权';
  ZH['careers.values.eyebrow'] = '我们的工作方式';
  ZH['careers.values.title'] = '我们的<span class="accent">运作方式。</span>';
  ZH['careers.values.1.title'] = '非洲优先的思维';
  ZH['careers.values.1.desc'] = '我们为真实的使用环境而打造——不稳定的网络连接、以移动端为主的用户，以及六个国家各不相同的监管环境。';
  ZH['careers.values.2.title'] = '我们是建造者，不是官僚';
  ZH['careers.values.2.desc'] = '团队虽小，格局却大。每个人都能交付成果，从想法到用户之间没有层层审批。';
  ZH['careers.values.3.title'] = '信任本身就是产品';
  ZH['careers.values.3.desc'] = '我们在打造信任基础设施，这意味着我们对安全、隐私和公平有着异常严格的自我要求。';
  ZH['careers.values.4.title'] = '主人翁意识';
  ZH['careers.values.4.desc'] = '在这个早期阶段，你的决定真正塑造着这家公司。我们分享的股权是实质性的，而非象征性的。';
  ZH['careers.roles.eyebrow'] = '招聘职位';
  ZH['careers.roles.title'] = '当前<span class="accent">招聘职位。</span>';
  ZH['careers.roles.empty.title'] = '目前没有空缺职位';
  ZH['careers.roles.empty.desc'] = '我们目前正全力专注于产品建设。当我们准备好扩充团队时，会第一时间在这里发布，并通知所有在下方注册的人。';
  ZH['careers.roles.notify'] = '通知我';
  ZH['careers.roles.success'] = '你已加入名单，我们会与你联系。';
  ZH['careers.perks.eyebrow'] = '我们提供的福利';
  ZH['careers.perks.title'] = '你将获得<span class="accent">什么。</span>';
  ZH['careers.perks.1.title'] = '远程优先，支持异步协作';
  ZH['careers.perks.1.desc'] = '可以在非洲任何地方办公——如果当地法律允许，也可以在非洲以外办公。我们信任你能自主管理时间。';
  ZH['careers.perks.2.title'] = '实质性的股权激励';
  ZH['careers.perks.2.desc'] = '真正的股权，4年归属期，含1年等待期，不是象征性的，而是实质性的结构安排。';
  ZH['careers.perks.3.title'] = '学习经费';
  ZH['careers.perks.3.desc'] = '每年R12,000用于课程、书籍或会议——按对你最有帮助的方式使用。';
  ZH['careers.perks.4.title'] = '居家办公补贴';
  ZH['careers.perks.4.desc'] = '设备补贴，帮你从第一天起搭建所需的办公空间。';
  ZH['careers.perks.5.title'] = '真正有意义的影响力';
  ZH['careers.perks.5.desc'] = '每一个产品决策都影响着真实年轻人的经济未来，而不是虚荣的数据指标。';
  ZH['careers.perks.6.title'] = '小团队的独特优势';
  ZH['careers.perks.6.desc'] = '直接接触创始人，没有中层管理，从第一周起就拥有真正的自主权。';

  // ---- contact.* ----
  ZH['contact.hero.breadcrumb'] = '联系我们';
  ZH['contact.form.topic.routedPrefix'] = '该消息将发送至';
  ZH['contact.sidebar.press.response'] = '2个工作日内回复';
  ZH['contact.success.refLabel'] = '你的参考编号是：';
  ZH['contact.hero.eyebrow'] = '我们通常在1个工作日内回复';
  ZH['contact.hero.title'] = '和我们聊聊。';
  ZH['contact.hero.desc'] = '无论你是有疑问、遇到问题，还是想分享一个故事——<strong>告诉我们发生了什么</strong>，我们会转达给合适的人处理。没有机器人，没有繁琐菜单。';
  ZH['contact.success.title'] = '消息已发送。';
  ZH['contact.success.desc'] = '我们已向你的邮箱发送确认信。我们的团队通常会在1个工作日内回复——紧急争议或安全问题会更快处理。';
  ZH['contact.success.btn'] = '返回首页';
  ZH['contact.form.title'] = '给我们发消息';
  ZH['contact.form.desc'] = '请填写以下表格。带 <span class="required-mark">*</span> 标记的字段为必填项。';
  ZH['contact.form.rateLimit'] = '提交次数过多，请稍后再试。';
  ZH['contact.form.topic.label'] = '这是关于什么的？<span class="required-mark">*</span>';
  ZH['contact.form.topic.general'] = '常规支持';
  ZH['contact.form.topic.general.desc'] = '账户、平台、技术支持';
  ZH['contact.form.topic.business'] = '企业咨询';
  ZH['contact.form.topic.business.desc'] = '招聘、合作、企业服务';
  ZH['contact.form.topic.dispute'] = '争议协助';
  ZH['contact.form.topic.dispute.desc'] = '任务、付款或托管问题';
  ZH['contact.form.topic.press'] = '媒体与新闻';
  ZH['contact.form.topic.press.desc'] = '采访、媒体资料包、引用';
  ZH['contact.form.topic.privacy'] = '隐私与数据';
  ZH['contact.form.topic.privacy.desc'] = '数据请求、隐私相关问题';
  ZH['contact.form.topic.other'] = '其他事项';
  ZH['contact.form.topic.other.desc'] = '上述未列出的任何内容';
  ZH['contact.form.topic.routed'] = '该消息将发送至 <strong>support@youngmerit.com</strong>';
  ZH['contact.form.name'] = '全名 <span class="required-mark">*</span>';
  ZH['contact.form.name.error'] = '请输入你的全名。';
  ZH['contact.form.email'] = '电子邮箱 <span class="required-mark">*</span>';
  ZH['contact.form.email.error'] = '请输入有效的电子邮箱地址。';
  ZH['contact.form.role'] = '我的身份是';
  ZH['contact.form.role.placeholder'] = '请选择（可选）';
  ZH['contact.form.role.worker'] = '工作者';
  ZH['contact.form.role.business'] = '企业';
  ZH['contact.form.role.guest'] = '尚未成为会员';
  ZH['contact.form.role.journalist'] = '记者或媒体';
  ZH['contact.form.role.other'] = '其他';
  ZH['contact.form.reference'] = '任务或案件编号';
  ZH['contact.form.reference.hint'] = '仅在你的消息涉及特定任务或争议时才需要填写。';
  ZH['contact.form.subject'] = '主题 <span class="required-mark">*</span>';
  ZH['contact.form.subject.error'] = '请输入主题。';
  ZH['contact.form.message'] = '你的留言 <span class="required-mark">*</span>';
  ZH['contact.form.message.error'] = '请输入消息内容（最少20个字符）。';
  ZH['contact.form.attachment'] = '附件（可选）';
  ZH['contact.form.attachment.hint'] = '点击附加截图或文件——最大10MB';
  ZH['contact.form.human'] = '我不是机器人';
  ZH['contact.form.consent'] = '我同意 YOUNGMERIT 的<a href="privacy-policy.html">隐私政策</a>，并同意通过电子邮件就此咨询联系我。';
  ZH['contact.form.cta'] = '发送消息';
  ZH['contact.sidebar.general.title'] = '常规支持';
  ZH['contact.sidebar.general.desc'] = '账户问题、平台相关疑问，以及日常事务。';
  ZH['contact.sidebar.general.response'] = '1个工作日内回复';
  ZH['contact.sidebar.business.title'] = '企业与合作';
  ZH['contact.sidebar.business.desc'] = '企业招聘、系统集成、合作提案。';
  ZH['contact.sidebar.business.response'] = '2个工作日内回复';
  ZH['contact.sidebar.dispute.title'] = '争议';
  ZH['contact.sidebar.dispute.desc'] = '进行中的争议案件及托管相关问题。';
  ZH['contact.sidebar.dispute.note'] = '或使用<a href="dispute-system.html" style="color:var(--amber);">争议系统</a>';
  ZH['contact.sidebar.press.title'] = '媒体与新闻';
  ZH['contact.sidebar.press.desc'] = '采访申请、媒体资料包、媒体咨询。';
  ZH['contact.sidebar.privacy.title'] = '隐私与数据保护';
  ZH['contact.sidebar.privacy.desc'] = '数据访问、删除请求及隐私相关问题。';
  ZH['contact.sidebar.privacy.response'] = '5个工作日内回复';
  ZH['contact.sidebar.response.title'] = '常规响应时间';
  ZH['contact.sidebar.response.general'] = '常规支持';
  ZH['contact.sidebar.response.general.time'] = '1个工作日';
  ZH['contact.sidebar.response.dispute'] = '争议案件';
  ZH['contact.sidebar.response.dispute.time'] = '1个工作日';
  ZH['contact.sidebar.response.business'] = '企业咨询';
  ZH['contact.sidebar.response.business.time'] = '2个工作日';
  ZH['contact.sidebar.response.press'] = '媒体与新闻';
  ZH['contact.sidebar.response.press.time'] = '2个工作日';
  ZH['contact.sidebar.response.privacy'] = '隐私请求';
  ZH['contact.sidebar.response.privacy.time'] = '5个工作日';
  ZH['contact.sidebar.office'] = '支持时间：周一至周五 08:00–18:00（南非标准时间）';
  ZH['contact.sidebar.languages'] = '我们支持英语、中文、法语和西班牙语回复';
  ZH['contact.faq.title'] = '在写信之前';
  ZH['contact.faq.desc'] = '一些快速解答，或许能帮你省去等待时间。';
  ZH['contact.faq.q1'] = '我有一个进行中的争议，该去哪里查看状态？';
  ZH['contact.faq.a1'] = '请使用<a href="dispute-system.html" style="color:var(--amber);">争议系统</a>页面，输入你的参考编号并点击“追踪你的案件”，即可比等待邮件回复更快获得实时状态更新。';
  ZH['contact.faq.q2'] = '我需要验证身份，这里是正确的地方吗？';
  ZH['contact.faq.a2'] = '不是——请前往<a href="identity-verification.html" style="color:var(--amber);">身份验证</a>页面直接开始该流程。如果验证失败或文件出现问题，请联系 support@youngmerit.com。';
  ZH['contact.faq.q3'] = '我到底多快能收到回复？';
  ZH['contact.faq.a3'] = '大多数消息会在1个工作日内得到回复。争议和安全事项会被优先处理。由于团队人手有限，媒体和企业咨询可能需要长达2个工作日。';
  ZH['contact.faq.q4'] = '我可以打电话给你们而不是发邮件吗？';
  ZH['contact.faq.a4'] = '我们目前以邮件为主要支持方式，以便为每个案件保留书面记录，这对处理争议和支付问题尤其有帮助。随着平台的发展，电话支持已列入我们的规划路线图。';

  // ---- resources.* ----
  ZH['resources.hero.breadcrumb'] = '资源';
  ZH['resources.filter.browse'] = '浏览：';
  ZH['resources.card.read'] = '阅读';
  ZH['resources.author.honeTeam'] = '团队';
  ZH['resources.mini1.title'] = '2026年六国最热门的5大技能';
  ZH['resources.mini1.meta'] = '5分钟 — 面向工作者';
  ZH['resources.mini2.title'] = '通过赢得的信誉获得雇佣 —— 直播问答回放';
  ZH['resources.mini2.meta'] = '48分钟 — 1,200次观看';
  ZH['resources.mini3.title'] = '企业如何更快找到可靠人才';
  ZH['resources.mini3.meta'] = '3分钟 — 面向企业';
  ZH['resources.card1.title'] = '如何在前30天建立强大的信誉';
  ZH['resources.card1.desc'] = '从档案设置到获得已验证徽章的详细步骤指南，是每位新工作者最重要的指南。';
  ZH['resources.card2.title'] = '2026年六国最热门的5大技能';
  ZH['resources.card2.desc'] = '从约翰内斯堡到北京，招聘经理们现在真正愿意为哪些技能买单。';
  ZH['resources.card3.title'] = '通过赢得的信誉获得雇佣 —— 直播问答回放';
  ZH['resources.card3.desc'] = '看看三位我们的工作者如何在不到六个月内从零任务发展到全职就业。';
  ZH['resources.card4.title'] = '5个适合新手的高薪任务，比你想象的更赚钱';
  ZH['resources.card4.desc'] = '数据录入、AI测试、社交媒体文案——这些低门槛任务需求高、评价好。';
  ZH['resources.card5.title'] = '企业如何无风险找到可靠的入门级人才';
  ZH['resources.card5.desc'] = '关于如何使用我们的信任评分、人才库和托管系统实现放心招聘的完整指南。';
  ZH['resources.card6.title'] = '中国的青年失业问题：我们为何与众不同';
  ZH['resources.card6.desc'] = '解析毕业生供过于求的危机，以及工作证明如何胜过经验要求。';
  ZH['resources.card7.title'] = '如何利用技能护照获得全职工作';
  ZH['resources.card7.desc'] = '你的技能护照比简历更有说服力，这里教你如何将它分享给雇主。';
  ZH['resources.card8.title'] = '2026年每位年轻工作者都应了解的AI工具';
  ZH['resources.card8.desc'] = 'ChatGPT、Canva AI、Gemini 和 Perplexity——哪些工具能让你更具竞争力，以及如何使用它们。';
  ZH['resources.trend1.title'] = '5个薪酬不错的新手Canva任务';
  ZH['resources.trend1.meta'] = '指南 — 6分钟';
  ZH['resources.trend2.title'] = '如何撰写一份能获得工作的档案';
  ZH['resources.trend2.meta'] = '技巧 — 3分钟';
  ZH['resources.trend3.title'] = '了解你的信任评分';
  ZH['resources.trend3.meta'] = '文章 — 4分钟';
  ZH['resources.trend4.title'] = '中国青年失业：我们如何提供帮助';
  ZH['resources.trend4.meta'] = '文章 — 7分钟';
  ZH['resources.trend5.title'] = '90天从新手到精英';
  ZH['resources.trend5.meta'] = '指南 — 10分钟';
  ZH['resources.webinar.register'] = '报名';
  ZH['resources.webinar1.title'] = '如何获得你的第一个任务（新手大师课）';
  ZH['resources.webinar1.meta'] = '10:00（南非标准时间）— 免费';
  ZH['resources.webinar2.title'] = '无风险招聘入门级人才';
  ZH['resources.webinar2.meta'] = '14:00（格林尼治标准时间）— 面向企业';
  ZH['resources.webinar3.title'] = '2026年每位年轻工作者都应了解的AI工具';
  ZH['resources.webinar3.meta'] = '11:00（中国标准时间）— 免费';
  ZH['resources.topic.careerEntry'] = '职业起步';
  ZH['resources.topic.trustScore'] = '信任评分';
  ZH['resources.topic.aiTools'] = 'AI工具';
  ZH['resources.topic.freelancing'] = '自由职业';
  ZH['resources.topic.hiringTips'] = '招聘技巧';
  ZH['resources.topic.skillPassport'] = '技能护照';
  ZH['resources.topic.dataEntry'] = '数据录入';
  ZH['resources.topic.resume'] = '简历';
  ZH['resources.topic.payments'] = '支付';
  ZH['resources.hero.eyebrow'] = '知识中心';
  ZH['resources.hero.title'] = '助你成长的<br/>指南、技巧<br/>与<span class="accent">工具。</span>';
  ZH['resources.hero.desc'] = '从获得第一个任务、建立信誉、开启职业生涯，到发现和管理优秀人才，你所需要的一切都在这里。';
  ZH['resources.search.placeholder'] = '搜索指南、技巧、网络研讨会...';
  ZH['resources.search.btn'] = '搜索';
  ZH['resources.stats.guides'] = '指南与文章';
  ZH['resources.stats.webinars'] = '网络研讨会与回放';
  ZH['resources.stats.tips'] = '技巧与快速阅读';
  ZH['resources.stats.languages'] = '语言';
  ZH['resources.filter.all'] = '全部';
  ZH['resources.filter.guides'] = '指南';
  ZH['resources.filter.articles'] = '文章';
  ZH['resources.filter.tips'] = '技巧';
  ZH['resources.filter.webinars'] = '网络研讨会';
  ZH['resources.filter.workers'] = '面向工作者';
  ZH['resources.filter.businesses'] = '面向企业';
  ZH['resources.featured.tag'] = '精选指南';
  ZH['resources.featured.title'] = '如何在前30天建立强大的信誉';
  ZH['resources.featured.desc'] = '在我们平台上的第一个月奠定了你整个职业生涯的基调。这份分步指南将带你完成档案设置、获得第一个任务，并赢得已验证徽章。';
  ZH['resources.featured.badge'] = '指南';
  ZH['resources.featured.time'] = '8分钟阅读';
  ZH['resources.featured.cta'] = '阅读指南';
  ZH['resources.sidebar.newsletter.title'] = '每周摘要';
  ZH['resources.sidebar.newsletter.desc'] = '每周一为你送上最佳指南、技巧和职业建议。';
  ZH['resources.sidebar.newsletter.cta'] = '免费订阅';
  ZH['resources.sidebar.trending.title'] = '本周热门';
  ZH['resources.sidebar.topics.title'] = '按主题浏览';
  ZH['resources.sidebar.webinars.title'] = '即将举办的网络研讨会';
  ZH['resources.cta.title'] = '准备好<br/><span class="accent">证明自己了吗？</span>';
  ZH['resources.cta.desc'] = '将你的新知识付诸实践。浏览任务，从今天开始建立你的信誉。';
  ZH['resources.cta.findWork'] = '寻找工作';
  ZH['resources.cta.hireTalent'] = '招聘人才';

  // ---- idv.* ----
  ZH['idv.hero.breadcrumb'] = '身份验证';
  ZH['idv.hero.eyebrow'] = '不到3分钟即可完成';
  ZH['idv.hero.title'] = '了解你正在<br/><span class="accent">与谁合作。</span>';
  ZH['idv.hero.desc'] = '身份验证保护我们平台上的<strong>每一个人</strong>。工作者能确认自己服务的企业是真实的，企业也能确认所雇佣的人才身份属实。整个平台因此对所有人都更安全。';
  ZH['idv.hero.ctaVerify'] = '验证我的身份';
  ZH['idv.hero.ctaLearn'] = '了解原因';
  ZH['idv.hero.trust1'] = '数据绝不出售';
  ZH['idv.hero.trust2'] = '256位加密';
  ZH['idv.hero.trust3'] = '符合GDPR与POPIA标准';
  ZH['idv.hero.trust4'] = '不到3分钟';
  ZH['idv.strip1.title'] = '不到3分钟';
  ZH['idv.strip1.desc'] = '在手机或电脑上即可完成整个流程';
  ZH['idv.strip2.title'] = '认证服务商';
  ZH['idv.strip2.desc'] = '由ISO 27001认证的身份验证合作伙伴处理';
  ZH['idv.strip3.title'] = '我们绝不留存';
  ZH['idv.strip3.desc'] = '证件图像经处理后即被删除——我们仅保留验证结果';
  ZH['idv.strip4.title'] = '一次性完成';
  ZH['idv.strip4.desc'] = '验证一次，状态即在我们整个平台生效';
  ZH['idv.why.eyebrow'] = '为何重要';
  ZH['idv.why.title'] = '信任并非<br/>与生俱来，<br/><span class="acc">而是靠建立。</span>';
  ZH['idv.why.desc'] = '一个任何人都能随意声称任何事的平台，是一个什么都无法被信任的平台。身份验证是让我们平台上每一个信任评分、每一条评价、每一笔付款都具有真实意义的基石。';
  ZH['idv.why.card1.title'] = '工作者清楚是谁在雇佣他们';
  ZH['idv.why.card1.desc'] = '每一家在我们平台上发布任务的企业都已通过身份和主体验证。工作者绝不会接受来自匿名来源的工作——他们确切地知道自己为谁工作。';
  ZH['idv.why.card2.title'] = '信任评分与真实个人绑定';
  ZH['idv.why.card2.desc'] = '没有验证，信任评分毫无意义。用户可能创建多个账户操纵系统。验证将每一条评价、每一项任务和每一个评分永久绑定到一个真实且唯一的个体身上。';
  ZH['idv.why.card3.title'] = '支付受到欺诈保护';
  ZH['idv.why.card3.desc'] = '支付欺诈、账户盗用和洗钱骡子活动是任何涉及资金流动平台的严重风险。身份验证是我们对抗这三者最强有力的防线——保护每一位工作者的收入。';
  ZH['idv.why.card4.title'] = '你的信誉专属于你';
  ZH['idv.why.card4.desc'] = '你在我们这里的信誉只属于你自己。验证确保没有人能冒充你创建账户、使用你的名字，或稀释你辛苦建立的工作履历。';
  ZH['idv.why.card5.title'] = '六国的法律合规';
  ZH['idv.why.card5.desc'] = '在六个司法辖区运营意味着我们必须满足每个市场的反洗钱（AML）与客户身份识别（KYC）义务。验证不是可选项——对于涉及资金流动的平台而言，这是法律要求。';
  ZH['idv.why.card6.title'] = '雇主对此高度重视';
  ZH['idv.why.card6.desc'] = '当经过验证的工作者与潜在雇主分享其技能护照时，雇主能确认背后的工作证明与真实且已验证的身份相绑定。这正是经过验证的信誉比简历更有价值的原因。';
  ZH['idv.check.eyebrow'] = '完全透明';
  ZH['idv.check.title'] = '我们究竟核实<br/>什么，以及<br/><span class="acc">不核实什么。</span>';
  ZH['idv.check.desc'] = '我们只核实确认你身份所必需的信息，不会收集医疗信息、财务记录、犯罪记录或以下列表之外的任何内容。';
  ZH['idv.check.weVerify'] = '我们核实的内容';
  ZH['idv.check.verify1.title'] = '你是真实存在的人';
  ZH['idv.check.verify1.desc'] = '我们会确认你的政府颁发证件真实有效且未过期，并核对自拍照与证件照片是否一致。';
  ZH['idv.check.verify2.title'] = '你年满18周岁';
  ZH['idv.check.verify2.desc'] = '我们会核实证件上的出生日期，确认你符合平台的最低年龄要求。';
  ZH['idv.check.verify3.title'] = '你的姓名与账户一致';
  ZH['idv.check.verify3.desc'] = '证件上的姓名必须与你注册时使用的姓名一致，以防止冒名顶替和账户共享。';
  ZH['idv.check.verify4.title'] = '证件未被篡改';
  ZH['idv.check.verify4.desc'] = '我们的审核人员会检查数字篡改、文字改动以及证件安全特征中的异常。';
  ZH['idv.check.verify5.title'] = '你未在其他账户下重复验证';
  ZH['idv.check.verify5.desc'] = '每个人只能拥有一个经过验证的账户，重复账户属于违反平台规定。';
  ZH['idv.check.doNotCheck'] = '我们不核实的内容';
  ZH['idv.check.not1.title'] = '犯罪记录';
  ZH['idv.check.not1.desc'] = '我们不进行犯罪背景调查。我们是一个工作平台，而非就业审查服务。';
  ZH['idv.check.not2.title'] = '信用记录或财务记录';
  ZH['idv.check.not2.desc'] = '我们无法访问你的信用评分、银行账户历史或财务状况，只核实你的身份。';
  ZH['idv.check.not3.title'] = '医疗或健康信息';
  ZH['idv.check.not3.desc'] = '整个验证流程中，我们不会请求、收集或推断任何医疗数据。';
  ZH['idv.check.not4.title'] = '社交媒体或网络活动';
  ZH['idv.check.not4.desc'] = '我们不会查看你的社交账户、在网上搜索你，也不会访问验证流程之外的任何数据。';
  ZH['idv.check.not5.title'] = '生物特征档案或面部识别数据库';
  ZH['idv.check.not5.desc'] = '你的自拍照仅用于与证件照片进行面部匹配，不会创建或存储任何面部识别档案。';
  ZH['idv.process.eyebrow'] = '分步说明';
  ZH['idv.process.title'] = '验证<br/><span class="acc">如何进行。</span>';
  ZH['idv.process.desc'] = '四个简单步骤，一切都在你的设备上完成，整个过程不到三分钟。';
  ZH['idv.process.step1.title'] = '选择你的证件';
  ZH['idv.process.step1.desc'] = '选择你将使用的证件类型——身份证、护照或驾照。不同国家支持不同的证件类型。';
  ZH['idv.process.step1.tag'] = '设备端操作';
  ZH['idv.process.step2.title'] = '扫描证件';
  ZH['idv.process.step2.desc'] = '将证件对准设备摄像头，系统会同时捕捉正反两面，并实时提供操作指引。';
  ZH['idv.process.step2.tag'] = '不到60秒';
  ZH['idv.process.step3.title'] = '拍摄自拍照';
  ZH['idv.process.step3.desc'] = '进行快速活体检测——系统会要求你眨眼或转头，以确认你本人在场，无需任何特殊设备。';
  ZH['idv.process.step3.tag'] = '活体检测';
  ZH['idv.process.step4.title'] = '即时结果';
  ZH['idv.process.step4.desc'] = '大多数验证会立即获批。如需人工审核，将在24小时内通知你，通过后档案即会解锁。';
  ZH['idv.process.step4.tag'] = '即时或24小时内';
  ZH['idv.docs.eyebrow'] = '可接受的证件';
  ZH['idv.docs.title'] = '你将<br/><span class="acc">需要什么。</span>';
  ZH['idv.docs.desc'] = '我们接受我们运营的六个国家所颁发的带照片政府证件，证件必须在有效期内。';
  ZH['idv.docs.national.title'] = '国民身份证';
  ZH['idv.docs.national.desc'] = '适用于南非（绿色身份证本及智能身份证）、法国（国民身份证）、西班牙（国民身份证）和中国（居民身份证）。';
  ZH['idv.docs.national.badge'] = '最常用';
  ZH['idv.docs.passport.title'] = '护照';
  ZH['idv.docs.passport.desc'] = '接受来自六个国家的国际护照，个人信息页和照片页必须清晰可见。全球通用——非常适合跨国工作者。';
  ZH['idv.docs.passport.badge'] = '所有国家均适用';
  ZH['idv.docs.drivers.title'] = '驾驶执照';
  ZH['idv.docs.drivers.desc'] = '适用于南非、美国、英国和法国，须包含照片及出生日期，在无法提供国民身份证时可作为辅助证件使用。';
  ZH['idv.docs.drivers.badge'] = '部分国家适用';
  ZH['idv.docs.residence.title'] = '居留许可证';
  ZH['idv.docs.residence.desc'] = '生物特征居留许可证适用于英国及部分欧盟国家，供在这些地区生活和工作的外籍人士使用。';
  ZH['idv.docs.residence.badge'] = '英国及欧盟';
  ZH['idv.docs.business.title'] = '企业注册文件';
  ZH['idv.docs.business.desc'] = '适用于企业账户：需提供公司注册证书或相应国家公司注册机构出具的同等文件，须与授权代表的身份验证同时提交。';
  ZH['idv.docs.business.badge'] = '企业账户';
  ZH['idv.docs.other.title'] = '证件未列出？';
  ZH['idv.docs.other.desc'] = '请联系我们的验证支持团队：verify@youngmerit.com。对于标准证件选择有限地区的用户，我们可能会根据具体情况接受替代证件。';
  ZH['idv.docs.other.badge'] = '联系我们';
  ZH['idv.docs.countries.label'] = '适用国家';
  ZH['idv.privacy.eyebrow'] = '你的隐私';
  ZH['idv.privacy.title'] = '你的数据。<br/>由你<span class="acc">掌控。</span>';
  ZH['idv.privacy.desc'] = '我们在每一步都认真对待隐私问题。身份验证流程的设计只收集必要的最少信息，绝不多收。以下是你的数据具体的处理方式。';
  ZH['idv.privacy.cta'] = '阅读完整隐私政策';
  ZH['idv.privacy.item1.title'] = '我们绝不存储证件图像';
  ZH['idv.privacy.item1.desc'] = '你的证件照片和自拍照将直接传送给我们的认证验证合作伙伴，用于确认身份后即被永久删除。我们仅收到验证结果：通过、拒绝或待处理。';
  ZH['idv.privacy.item2.title'] = '所有数据均端到端加密';
  ZH['idv.privacy.item2.desc'] = '验证过程中传输的所有内容均使用 TLS 1.3 加密。我们的验证合作伙伴持有 ISO 27001 认证，并根据与我们签订的具有约束力的数据处理协议来处理数据。';
  ZH['idv.privacy.item3.title'] = '符合六国合规要求';
  ZH['idv.privacy.item3.desc'] = '我们的验证流程符合 GDPR（法国和西班牙）、英国 GDPR、POPIA（南非）、PIPL（中国）以及适用的美国州级隐私法律要求。跨境数据传输采用经批准的标准合同条款。';
  ZH['idv.privacy.item4.title'] = '你可随时申请删除数据';
  ZH['idv.privacy.item4.desc'] = '根据 GDPR、POPIA 及其他适用法律，你有权要求删除个人数据。如果你注销账户，你的验证状态及相关数据将在30天内删除，但须遵守法律留存义务。';
  ZH['idv.privacy.item5.title'] = '你的数据绝不出售';
  ZH['idv.privacy.item5.desc'] = '我们不会出于商业目的向任何第三方出售、出租或共享你的个人数据。你的身份数据仅用于确认你是谁，别无他用。';
  ZH['idv.faq.eyebrow'] = '常见问题';
  ZH['idv.faq.title'] = '关于验证流程你需要了解的一切。';
  ZH['idv.faq.q1'] = '身份验证是强制性的吗？';
  ZH['idv.faq.a1'] = '是的。所有希望在我们平台上进行交易的用户——申请任务、发布任务或接收付款——都必须完成身份验证。你可以在未验证的情况下浏览平台，但在验证完成之前无法申请工作、发布任务或收发资金。这是我们运营所在各国反洗钱法规下的法律要求。';
  ZH['idv.faq.q2'] = '验证需要多长时间？';
  ZH['idv.faq.a2'] = '验证流程本身在大多数设备上耗时不到三分钟，绝大多数结果会在提交后立即返回。在某些情况下——通常是证件质量较低或需要人工审核时——你可能需要等待最多24小时。一旦状态确认，你将收到邮件通知，审核期间无需一直停留在页面上。';
  ZH['idv.faq.q3'] = '我的验证被拒绝了，该怎么办？';
  ZH['idv.faq.a3'] = '如果你的验证被拒绝，你将收到解释原因的邮件。常见原因包括：证件扫描模糊或不完整、证件已过期、证件姓名与账户不符，或你所在国家不接受该证件类型。你最多可以重试三次验证流程。如果问题仍未解决，请联系我们的验证支持团队 verify@youngmerit.com，将有专人为你提供直接协助。';
  ZH['idv.faq.q4'] = '我的证件会分享给雇佣我的企业吗？';
  ZH['idv.faq.a4'] = '绝对不会。我们平台上的企业永远看不到你的身份证件，他们只能在你的档案上看到一个验证徽章，表明你的身份已通过我们确认。你的证件类型、证件号码、出生日期及验证流程中的其他个人信息，永远不会与任何企业或平台上的其他用户共享。';
  ZH['idv.faq.q5'] = '如果我更改姓名或国家，需要重新验证吗？';
  ZH['idv.faq.a5'] = '如果你合法更改姓名，需要联系我们的支持团队更新账户信息，并可能需要重新完成验证。如果你更换居住国家，除非你更新付款信息至新的司法辖区，否则通常不需要自动重新验证。请联系我们的支持团队，获取针对你具体情况的指导。';
  ZH['idv.faq.q6'] = '我没有标准身份证件，还能进行验证吗？';
  ZH['idv.faq.a6'] = '在尝试验证之前，请先联系我们：verify@youngmerit.com。我们理解并非所有社区都能平等获取标准政府证件，我们会根据具体情况与你合作寻找合适的解决方案。我们绝不希望身份验证成为阻碍真诚、值得信赖的年轻人使用平台的障碍。';
  ZH['idv.faq.q7'] = '我的自拍照会被永久保存吗？';
  ZH['idv.faq.a7'] = '不会。你的自拍照仅用于进行活体检测并与身份证件照片进行面部匹配，由我们的验证合作伙伴处理后即被永久删除。我们不存储任何生物特征数据，不创建面部识别档案，也不保留验证流程中的任何图像。我们仅保留验证结果——通过、拒绝或待处理。';
  ZH['idv.cta.eyebrow'] = '准备好开始了吗？';
  ZH['idv.cta.title'] = '证明你就是<br/><span class="acc">你所说的那个人。</span>';
  ZH['idv.cta.desc'] = '三分钟内完成身份验证，解锁完整平台——真实工作、真实报酬、真实信誉。';
  ZH['idv.cta.verify'] = '立即验证';
  ZH['idv.cta.privacy'] = '阅读隐私政策';

  ZH['nav.pricing'] = '价格';

  // ---- pricing.* additions ----
  ZH['pricing.hero.breadcrumb'] = '价格';
  ZH['pricing.faq.title'] = '常见<span class="accent">问题。</span>';
  ZH['pricing.faq.desc'] = '关于我们的定价，你需要了解的一切。';
  ZH['pricing.faq.q1'] = '为什么要收取市场服务费？';
  ZH['pricing.faq.a1'] = '市场服务费涵盖支付处理、托管保护、防欺诈、争议解决和客户支持。只有当任务成功完成并创造价值时你才需要付费，没有隐藏费用，没有意外。';
  ZH['pricing.faq.q2'] = '我什么时候支付市场服务费？';
  ZH['pricing.faq.a2'] = '任务完成、款项从托管账户释放时，费用会自动扣除。企业将该费用计入任务成本；工作者收到的是全款减去该费用后的金额。';
  ZH['pricing.faq.q3'] = '托管机制是如何运作的？';
  ZH['pricing.faq.a3'] = '当企业发布任务时，全额款项会存入安全的托管账户。只有当企业确认工作完成后，资金才会释放给工作者。如果发生争议，我们的调解团队会审查证据并作出公正裁决。<a href="dispute-system.html" style="color:var(--amber);text-decoration:none;">了解更多 →</a>';
  ZH['pricing.faq.q4'] = '我可以随时取消订阅吗？';
  ZH['pricing.faq.a4'] = '可以。你可以随时在账户设置中取消订阅。取消后，你仍可使用至当前计费周期结束，没有锁定合约，也没有取消费用。';
  ZH['pricing.faq.q5'] = '使用 YOUNGMERIT 必须订阅吗？';
  ZH['pricing.faq.a5'] = '<strong>不需要。</strong>免费计划已能让你使用核心市场功能：发布任务、申请工作、完成交易，无需付费订阅。订阅解锁的是效率工具、数据分析和更低费率——是升级选项，而非硬性要求。';
  ZH['pricing.faq.q6'] = '你们是否为非营利组织或教育机构提供优惠？';
  ZH['pricing.faq.a6'] = '是的。我们为已注册的非营利组织、教育机构和社会企业提供特别定价。请联系我们的团队 <a href="mailto:support@growiq.co" style="color:var(--amber);text-decoration:none;">support@growiq.co</a>，讨论你的具体需求。';
  ZH['pricing.toggle.perYear'] = '/年';
  ZH['pricing.toggle.saveAmount'] = '每年节省{amount}';
  ZH['pricing.calc.savePrefix'] = '节省 ';

  // ---- pricing.* (full set) ----
  ZH['pricing.hero.eyebrow'] = '简单、透明，没有意外费用。';
  ZH['pricing.hero.title'] = '随你成长的<br/><span class="accent">定价方案。</span>';
  ZH['pricing.hero.desc'] = '<strong>免费开始使用。</strong>只有当你大规模招聘时才需付费。透明的交易费用和可预测的订阅费——没有隐藏成本。';
  ZH['pricing.hero.tag1'] = '✓ 无需信用卡';
  ZH['pricing.hero.tag2'] = '✓ 随时可取消';
  ZH['pricing.hero.tag3'] = '✓ 14天退款保障';
  ZH['pricing.toggle.monthly'] = '按月付费';
  ZH['pricing.toggle.annual'] = '按年付费';
  ZH['pricing.toggle.save'] = '节省20%';
  ZH['pricing.free.name'] = '免费版';
  ZH['pricing.free.desc'] = '适合刚起步的个人';
  ZH['pricing.free.period'] = '/月';
  ZH['pricing.free.annual'] = 'R0 /年';
  ZH['pricing.free.feat1'] = '每月最多发布3个任务';
  ZH['pricing.free.feat2'] = '基础企业档案';
  ZH['pricing.free.feat3'] = '标准支持';
  ZH['pricing.free.feat4'] = '申请任务';
  ZH['pricing.free.feat5'] = '语音发帖';
  ZH['pricing.free.feat7'] = '数据分析';
  ZH['pricing.free.cta'] = '免费开始';
  ZH['pricing.pro.name'] = '专业专业版';
  ZH['pricing.pro.desc'] = '适合建立职业生涯的专业人士';
  ZH['pricing.pro.period'] = '/月';
  ZH['pricing.pro.annual'] = 'R1,429 /年';
  ZH['pricing.pro.feat1'] = '档案数据分析';
  ZH['pricing.pro.feat2'] = '档案精选展示位';
  ZH['pricing.pro.feat5'] = '优先申请通道';
  ZH['pricing.pro.feat6'] = '技能验证';
  ZH['pricing.pro.feat7'] = '无限收藏机会';
  ZH['pricing.pro.cta'] = '开通专业版';
  ZH['pricing.biz.name'] = '企业专业版';
  ZH['pricing.biz.desc'] = '适合定期招聘的成长型团队';
  ZH['pricing.biz.period'] = '/月';
  ZH['pricing.biz.annual'] = 'R4,790 /年';
  ZH['pricing.biz.popular'] = '最受欢迎';
  ZH['pricing.biz.feat1'] = '无限任务发布';
  ZH['pricing.biz.feat3'] = '申请者筛选';
  ZH['pricing.biz.feat4'] = '5个团队成员席位';
  ZH['pricing.biz.feat5'] = '数据分析仪表盘';
  ZH['pricing.biz.feat6'] = '企业验证';
  ZH['pricing.biz.feat7'] = '优先支持';
  ZH['pricing.biz.feat8'] = '企业档案精选展示';
  ZH['pricing.biz.feat9'] = '更低市场费率（10% → 8%）';
  ZH['pricing.biz.cta'] = '开通企业专业版';
  ZH['pricing.growth.name'] = '企业成长版';
  ZH['pricing.growth.desc'] = '适合大规模招聘的企业';
  ZH['pricing.growth.period'] = '/月';
  ZH['pricing.growth.annual'] = 'R9,590 /年';
  ZH['pricing.growth.feat1'] = '包含专业版全部功能';
  ZH['pricing.growth.feat2'] = '更低市场费率（10% → 6%）';
  ZH['pricing.growth.feat5'] = '招聘流程管理';
  ZH['pricing.growth.feat6'] = '无限团队席位';
  ZH['pricing.growth.feat7'] = '精选任务展示';
  ZH['pricing.growth.feat8'] = '高级数据分析';
  ZH['pricing.growth.cta'] = '开通成长版';
  ZH['pricing.fees.eyebrow'] = '市场<span class="accent">服务费。</span>';
  ZH['pricing.fees.title'] = '透明的交易费用随交易量灵活调整，只有创造价值时才需付费。';
  ZH['pricing.fees.tier1.range'] = 'R0 – R999 <small>每个任务</small>';
  ZH['pricing.fees.tier1.desc'] = '适用于小型任务的标准费率';
  ZH['pricing.fees.tier1.badge1'] = '✓ 安全托管';
  ZH['pricing.fees.tier1.badge2'] = '✓ 争议保护';
  ZH['pricing.fees.tier2.range'] = 'R1,000 – R4,999 <small>每个任务</small>';
  ZH['pricing.fees.tier2.desc'] = '适用于中型任务的优惠费率';
  ZH['pricing.fees.tier2.badge1'] = '✓ 优先支持';
  ZH['pricing.fees.tier2.badge2'] = '✓ 更快到账';
  ZH['pricing.fees.tier3.range'] = 'R5,000+ <small>每个任务</small>';
  ZH['pricing.fees.tier3.desc'] = '大型项目的最优费率';
  ZH['pricing.fees.tier3.badge1'] = '✓ 专属客户经理';
  ZH['pricing.fees.tier3.badge2'] = '✓ 高级支持';
  ZH['pricing.fees.note'] = '🔒 所有款项均由托管机制保护。<a href="dispute-system.html" style="color:var(--amber);text-decoration:none;">了解争议解决机制 →</a>';
  ZH['pricing.calc.title'] = '你能<span style="color:var(--amber);">节省多少？</span>';
  ZH['pricing.calc.desc'] = '看看订阅能为你的市场费用带来多大差异。';
  ZH['pricing.calc.label'] = '每月任务支出';
  ZH['pricing.calc.freeFees'] = '免费版费用';
  ZH['pricing.calc.proFees'] = '企业专业版费用';
  ZH['pricing.calc.growthFees'] = '企业成长版费用';
  ZH['pricing.calc.note'] = '按平均市场费率计算：免费版10%，专业版8%，成长版6%。';
  ZH['pricing.compare.title'] = '比较<span class="accent">套餐。</span>';
  ZH['pricing.compare.desc'] = '所有信息一目了然，方便对比。';
  ZH['pricing.compare.feature'] = '功能';
  ZH['pricing.compare.free'] = '免费版';
  ZH['pricing.compare.pro'] = '专业专业版';
  ZH['pricing.compare.biz'] = '企业专业版';
  ZH['pricing.compare.growth'] = '企业成长版';
  ZH['pricing.compare.postTasks'] = '发布任务';
  ZH['pricing.compare.postTasks.free'] = '每月3个';
  ZH['pricing.compare.postTasks.biz'] = '✓ 无限';
  ZH['pricing.compare.postTasks.growth'] = '✓ 无限';
  ZH['pricing.compare.applyTasks'] = '申请任务';
  ZH['pricing.compare.applyTasks.free'] = '✓';
  ZH['pricing.compare.applyTasks.pro'] = '✓ 优先';
  ZH['pricing.compare.analytics'] = '数据分析';
  ZH['pricing.compare.analytics.free'] = '✗';
  ZH['pricing.compare.analytics.pro'] = '✓ 档案';
  ZH['pricing.compare.analytics.biz'] = '✓ 仪表盘';
  ZH['pricing.compare.analytics.growth'] = '✓ 高级';
  ZH['pricing.compare.team'] = '团队成员';
  ZH['pricing.compare.team.free'] = '✗';
  ZH['pricing.compare.team.biz'] = '5个席位';
  ZH['pricing.compare.team.growth'] = '✓ 无限';
  ZH['pricing.compare.featured'] = '精选展示位';
  ZH['pricing.compare.featured.free'] = '✗';
  ZH['pricing.compare.featured.pro'] = '✓ 档案';
  ZH['pricing.compare.featured.biz'] = '✓ 企业';
  ZH['pricing.compare.featured.growth'] = '✓ 企业+任务';
  ZH['pricing.compare.fee'] = '市场费率';
  ZH['pricing.compare.fee.free'] = '10 / 8 / 6%';
  ZH['pricing.compare.fee.biz'] = '<span style="color:var(--amber);font-weight:600;">8 / 6 / 5%</span>';
  ZH['pricing.compare.fee.growth'] = '<span style="color:var(--amber);font-weight:600;">6 / 5 / 4%</span>';
  ZH['pricing.compare.support'] = '支持';
  ZH['pricing.compare.support.free'] = '标准';
  ZH['pricing.compare.support.pro'] = '标准';
  ZH['pricing.compare.support.biz'] = '✓ 优先';
  ZH['pricing.compare.support.growth'] = '✓ 高级';

  ZH['pricing.fees.tier1.rate'] = '10%';
  ZH['pricing.fees.tier2.rate'] = '8%';
  ZH['pricing.fees.tier3.rate'] = '6%';

  // ---- waitlist.* ----
  ZH['waitlist.hero.eyebrow'] = '即将上线 — 2026年初';
  ZH['waitlist.hero.title1'] = '加入';
  ZH['waitlist.hero.title2'] = '等待';
  ZH['waitlist.hero.title3'] = '名单。';
  ZH['waitlist.hero.desc'] = '<strong>抢先体验。</strong>我们正在打造一个平台，让年轻人建立经过验证的工作履历，让企业找到值得信赖的人才。在下方注册，即可在我们上线时获得优先体验资格。';
  ZH['waitlist.hero.people'] = '等待人数';
  ZH['waitlist.hero.countries'] = '国家数量';
  ZH['waitlist.hero.launch'] = '上线年份';
  ZH['waitlist.left.title'] = '成为<br/><span class="accent">第一批。</span>';
  ZH['waitlist.left.desc'] = '创始会员将获得专属福利。我们正精心挑选第一批社区成员，共同塑造这个平台的运作方式。';
  ZH['waitlist.benefit1'] = '档案上的创始会员徽章';
  ZH['waitlist.benefit2'] = '抢先体验 — 公开上线前数天即可使用';
  ZH['waitlist.benefit3'] = '专属创始人社区频道';
  ZH['waitlist.benefit4'] = '终身免费平台使用权（创始等级）';
  ZH['waitlist.card.label'] = '加入名单';
  ZH['waitlist.card.title'] = '锁定你的名额';
  ZH['waitlist.card.desc'] = '我们上线的那一刻会立即通知你，绝无垃圾邮件，绝不啰嗦。';
  ZH['waitlist.form.name'] = '全名';
  ZH['waitlist.form.email'] = '电子邮箱';
  ZH['waitlist.form.type'] = '账户类型';
  ZH['waitlist.form.type.worker'] = '工作者 — 寻找任务';
  ZH['waitlist.form.type.business'] = '企业 — 招聘人才';
  ZH['waitlist.form.type.both'] = '两者都是 — 我对两者都感兴趣';
  ZH['waitlist.form.country'] = '国家';
  ZH['waitlist.form.country.za'] = '🇿🇦 南非';
  ZH['waitlist.form.country.cn'] = '🇨🇳 中国';
  ZH['waitlist.form.country.us'] = '🇺🇸 美国';
  ZH['waitlist.form.country.fr'] = '🇫🇷 法国';
  ZH['waitlist.form.country.es'] = '🇪🇸 西班牙';
  ZH['waitlist.form.country.gb'] = '🇬🇧 英国';
  ZH['waitlist.form.country.other'] = '🌍 其他';
  ZH['waitlist.form.consent'] = '我同意偶尔接收来自团队的更新，可随时取消订阅。<a href="privacy-policy.html">隐私政策</a>。';
  ZH['waitlist.form.cta'] = '锁定我的名额';
  ZH['waitlist.form.note'] = '即将上线 — 我们会第一时间发邮件通知你';
  ZH['waitlist.success.title'] = '你已加入名单。';
  ZH['waitlist.success.desc'] = '您已成功加入我们的上线等候名单。临近上线时，我们会通知您。';
  ZH['waitlist.success.back'] = '返回';
  ZH['waitlist.success.note'] = '请查收确认邮件，并将我们添加到你的联系人。';
  ZH['waitlist.social.text'] = '已有六国用户加入等待名单';
  ZH['waitlist.form.name.error'] = '请输入你的姓名';
  ZH['waitlist.form.email.error'] = '请输入有效的电子邮箱地址';
  ZH['waitlist.form.consent.error'] = '请同意接收更新';
  ZH['waitlist.form.errorAlert'] = '出了点问题，请重试。';
  ZH['waitlist.social.tag1'] = '创始';
  ZH['waitlist.social.tag2'] = '抢先';
  ZH['waitlist.social.tag3'] = '体验';
  ZH['waitlist.social.join'] = '加入超过{count}位未来会员';

  // ---- auth.* ----
  ZH['auth.nav.back'] = '返回网站';
  ZH['auth.left.eyebrow'] = '欢迎来到 YOUNGMERIT';
  ZH['auth.left.title'] = '你的工作。<br/>你的<span class="accent">证明。</span>';
  ZH['auth.left.desc'] = '加入年轻工作者和企业的行列，在六个国家共同建立信任、推动成果。';
  ZH['auth.left.trust1'] = '每个账户均经身份验证';
  ZH['auth.left.trust2'] = '款项由安全托管保管';
  ZH['auth.left.trust3'] = '通过每一个任务打造你的技能护照';
  ZH['auth.left.trust4'] = '活跃于全球六个国家';
  ZH['auth.mode.signup'] = '注册';
  ZH['auth.mode.login'] = '登录';
  ZH['auth.demo.tryLabel'] = '体验演示账户';
  ZH['auth.demo.worker'] = '工作者';
  ZH['auth.demo.worker.stats'] = '12项任务 &middot; 4.8分评价 &middot; 已赚R4,280';
  ZH['auth.demo.worker.cta'] = '以工作者身份登录';
  ZH['auth.demo.business'] = '企业';
  ZH['auth.demo.business.stats'] = '24项任务 &middot; 4.9分评价 &middot; 已雇佣19人';
  ZH['auth.demo.business.cta'] = '以企业身份登录';
  ZH['auth.demo.loggingIn'] = '正在以{name}身份登录…';
  ZH['auth.verify.title'] = '请查收邮件。';
  ZH['auth.verify.desc'] = '我们已向以下邮箱发送验证链接：<br/><strong id="verifyEmail" style="color:var(--dark);"></strong>';
  ZH['auth.verify.note'] = '点击邮件中的链接以激活账户。如未收到，请检查垃圾邮件文件夹。';
  ZH['auth.verify.resend'] = '重新发送验证邮件';
  ZH['auth.verify.resent'] = '邮件已成功重新发送。';
  ZH['auth.success.titleLogin'] = '欢迎回来。';
  ZH['auth.success.msgLogin'] = '你已登录，正在为你跳转至个人档案…';
  ZH['auth.success.welcomeName'] = '欢迎回来，{name}。';
  ZH['auth.success.loggingIn'] = '正在为你登录…';
  ZH['auth.signup.title'] = '创建账户';
  ZH['auth.signup.desc'] = '免费加入，无需信用卡。';
  ZH['auth.alert.generic'] = '出了点问题，请重试。';
  ZH['auth.signup.typeLabel'] = '我的注册身份是';
  ZH['auth.signup.typeWorkerDesc'] = '寻找任务、获得报酬、建立信誉';
  ZH['auth.signup.typeBusinessDesc'] = '发布任务，雇佣值得信赖的年轻人才';
  ZH['auth.signup.typeErr'] = '请选择账户类型以继续。';
  ZH['auth.signup.firstName'] = '名字';
  ZH['auth.signup.lastName'] = '姓氏';
  ZH['auth.err.required'] = '必填';
  ZH['auth.signup.bizName'] = '企业/机构名称';
  ZH['auth.signup.bizName.err'] = '企业账户必填';
  ZH['auth.signup.email'] = '电子邮箱';
  ZH['auth.err.email'] = '请输入有效的电子邮箱地址';
  ZH['auth.signup.password'] = '密码';
  ZH['auth.pw.tooShort'] = '太短';
  ZH['auth.pw.tooWeak'] = '过于薄弱';
  ZH['auth.pw.weak'] = '薄弱';
  ZH['auth.pw.fair'] = '一般';
  ZH['auth.pw.good'] = '良好';
  ZH['auth.pw.strong'] = '强';
  ZH['auth.signup.password.err'] = '密码至少需8个字符';
  ZH['auth.signup.cta'] = '创建账户';
  ZH['auth.signup.terms'] = '注册即表示你同意我们的<a href="terms.html">服务条款</a>和<a href="privacy-policy.html">隐私政策</a>。';
  ZH['auth.signup.switchPrompt'] = '已有账户？';
  ZH['auth.signup.switchLink'] = '登录';
  ZH['auth.login.title'] = '欢迎回来。';
  ZH['auth.login.desc'] = '登录以访问你的档案和任务。';
  ZH['auth.login.alertMsg'] = '邮箱或密码错误。';
  ZH['auth.login.err.email'] = '请输入你的电子邮箱';
  ZH['auth.login.err.password'] = '请输入你的密码';
  ZH['auth.login.forgot'] = '忘记密码？';
  ZH['auth.login.forgotSent'] = '密码重置邮件已发送——请查收收件箱。';
  ZH['auth.login.cta'] = '登录';
  ZH['auth.login.switchPrompt'] = '还没有账户？';
  ZH['auth.login.switchLink'] = '免费注册';
  ZH['auth.err.wentWrong'] = '出了点问题。';
  ZH['auth.err.alreadyRegistered'] = '该邮箱已注册，请尝试直接登录。';
  ZH['auth.err.passwordShort'] = '密码至少需8个字符。';
  ZH['auth.err.invalidEmail'] = '请输入有效的电子邮箱地址。';
  ZH['auth.err.connection'] = '连接错误，请检查网络后重试。';
  ZH['auth.err.loginFailed'] = '登录失败。';
  ZH['auth.err.notConfirmed'] = '请先验证你的邮箱，请查收收件箱中的确认链接。';
  ZH['auth.err.tooMany'] = '登录尝试次数过多，请稍等几分钟后重试。';
  ZH['auth.err.enterEmailFirst'] = '请先在上方输入你的电子邮箱。';
  ZH['auth.err.resetFailed'] = '无法发送重置邮件，请检查邮箱地址后重试。';

  // ---- howworks.* ----
  ZH['howworks.hero.eyebrow'] = '简单、可验证、全球化。';
  ZH['howworks.hero.title'] = '<span class="accent">我们</span><br/>如何运作。';
  ZH['howworks.hero.desc'] = '简单几步，积累经验或找到合适人才。无需学历，无需猜测，零风险。';
  ZH['howworks.hero.tabPeople'] = '面向个人';
  ZH['howworks.hero.tabBusiness'] = '面向企业';
  ZH['howworks.hero.scroll'] = '向下滚动了解更多';
  ZH['howworks.steps.tag1'] = '第一步';
  ZH['howworks.steps.tag2'] = '第二步';
  ZH['howworks.steps.tag3'] = '第三步';
  ZH['howworks.steps.tag4'] = '第四步';
  ZH['howworks.steps.people.s1.title'] = '创建你的档案';
  ZH['howworks.steps.people.s1.desc'] = '几分钟内完成注册，添加你的技能、所在地和经验水平，验证身份即可解锁完整权限。';
  ZH['howworks.steps.people.s1.d1'] = '免费加入';
  ZH['howworks.steps.people.s1.d2'] = '六个国家';
  ZH['howworks.steps.people.s1.d3'] = '5分钟内即可上线';
  ZH['howworks.steps.people.s1.d4'] = '身份已验证';
  ZH['howworks.steps.people.s2.title'] = '寻找并申请任务';
  ZH['howworks.steps.people.s2.desc'] = '浏览由认证企业发布、适合新手的付费任务，可按技能、薪酬、截止日期和等级筛选。';
  ZH['howworks.steps.people.s2.d1'] = '设计任务';
  ZH['howworks.steps.people.s2.d2'] = '数据与调研';
  ZH['howworks.steps.people.s2.d3'] = 'AI协助';
  ZH['howworks.steps.people.s2.d4'] = '客户支持';
  ZH['howworks.steps.people.s3.title'] = '出色完成工作并获得报酬';
  ZH['howworks.steps.people.s3.desc'] = '完成任务，清晰沟通，提交成果。一经确认，款项立即从托管账户释放。';
  ZH['howworks.steps.people.s3.d1'] = '托管保护';
  ZH['howworks.steps.people.s3.d2'] = '即时到账';
  ZH['howworks.steps.people.s3.d3'] = '平台内消息';
  ZH['howworks.steps.people.s3.d4'] = '安全文件传输';
  ZH['howworks.steps.people.s4.title'] = '建立你的信誉';
  ZH['howworks.steps.people.s4.desc'] = '每完成一项任务都会获得评分和工作证明记录，你的信任评分会不断提升，带来更好的机会。';
  ZH['howworks.steps.people.s4.d1'] = '经验证的评价';
  ZH['howworks.steps.people.s4.d2'] = '公开信任评分';
  ZH['howworks.steps.people.s4.d3'] = '等级晋升';
  ZH['howworks.steps.people.s4.d4'] = '技能护照更新';
  ZH['howworks.steps.biz.s1.title'] = '发布你的任务';
  ZH['howworks.steps.biz.s1.desc'] = '用简单明了的语言描述你的需求，设定预算、截止日期和所需技能等级，发布完全免费。';
  ZH['howworks.steps.biz.s1.d1'] = '免费发布';
  ZH['howworks.steps.biz.s1.d2'] = '几分钟内上线';
  ZH['howworks.steps.biz.s1.d3'] = '智能匹配';
  ZH['howworks.steps.biz.s1.d4'] = '全球人才库';
  ZH['howworks.steps.biz.s2.title'] = '审核经过验证的候选人';
  ZH['howworks.steps.biz.s2.desc'] = '浏览拥有真实信任评分、完成率和作品集的申请者，每项指标都经过验证并独立追踪。';
  ZH['howworks.steps.biz.s2.d1'] = '信任评分展示';
  ZH['howworks.steps.biz.s2.d2'] = '工作履历证明';
  ZH['howworks.steps.biz.s2.d3'] = '身份已验证的工作者';
  ZH['howworks.steps.biz.s2.d4'] = '等级徽章展示';
  ZH['howworks.steps.biz.s3.title'] = '跟踪工作并审批';
  ZH['howworks.steps.biz.s3.desc'] = '直接在平台内沟通，审核交付成果、要求修改或批准——每一分钱都有托管保护。';
  ZH['howworks.steps.biz.s3.d1'] = '平台内聊天';
  ZH['howworks.steps.biz.s3.d2'] = '安全文件传输';
  ZH['howworks.steps.biz.s3.d3'] = '修改请求';
  ZH['howworks.steps.biz.s3.d4'] = '托管保护';
  ZH['howworks.steps.biz.s4.title'] = '打造你的人才储备';
  ZH['howworks.steps.biz.s4.desc'] = '将优秀工作者收藏到私人人才库，一键重新聘用，也可直接通过我们全职雇佣杰出人才。';
  ZH['howworks.steps.biz.s4.d1'] = '私人人才库';
  ZH['howworks.steps.biz.s4.d2'] = '一键重新聘用';
  ZH['howworks.steps.biz.s4.d3'] = '全职雇佣选项';
  ZH['howworks.steps.biz.s4.d4'] = '绩效历史记录';
  ZH['howworks.trust.eyebrow'] = '为信任而生';
  ZH['howworks.trust.title'] = '从始至终<br/>安全可靠。';
  ZH['howworks.trust.desc'] = '我们平台上的每一笔交易都受到多重验证、托管和争议解决机制的保护。';
  ZH['howworks.trust.card1.title'] = '托管支付';
  ZH['howworks.trust.card1.desc'] = '资金安全保管，直至工作获批。企业确认交付前，款项不会释放。';
  ZH['howworks.trust.card2.title'] = '身份验证';
  ZH['howworks.trust.card2.desc'] = '所有工作者和企业在交易前均需完成身份验证，你始终清楚在与谁打交道。';
  ZH['howworks.trust.card4.title'] = '保密协议保护';
  ZH['howworks.trust.card4.desc'] = '敏感的企业任务可通过具有法律约束力的保密协议进行保护，机密工作始终保密。';
  ZH['howworks.trust.card5.title'] = '争议解决';
  ZH['howworks.trust.card5.desc'] = '如果出现问题，我们的调解团队会审查工作记录、消息和交付成果，以达成公正的解决方案。';
  ZH['howworks.trust.card6.title'] = '雇主验证';
  ZH['howworks.trust.card6.desc'] = '企业在发布任务前均经过验证，工作者始终清楚每份工作背后都有真实、负责任的公司。';
  ZH['howworks.rep.eyebrow'] = '晋升体系';
  ZH['howworks.rep.title'] = '提升你的<br/><span class="accent">信誉等级。</span>';
  ZH['howworks.rep.desc'] = '你完成的每一项任务都会助你晋升至更高等级——解锁更高薪酬、更多曝光和更强的雇主信任。';
  ZH['howworks.levels.rookie.name'] = '新手';
  ZH['howworks.levels.rookie.tag'] = '起始等级';
  ZH['howworks.levels.rookie.range'] = '0-4项任务';
  ZH['howworks.levels.rookie.perk1'] = '可接入门级任务';
  ZH['howworks.levels.rookie.perk2'] = '建立你的档案';
  ZH['howworks.levels.rookie.perk3'] = '获得首批评价';
  ZH['howworks.levels.verified.name'] = '已验证';
  ZH['howworks.levels.verified.tag'] = '已验证起步者';
  ZH['howworks.levels.verified.range'] = '5-19项任务';
  ZH['howworks.levels.verified.perk1'] = '显示已验证徽章';
  ZH['howworks.levels.verified.perk2'] = '解锁更高薪酬';
  ZH['howworks.levels.verified.perk3'] = '技能护照已激活';
  ZH['howworks.levels.trusted.name'] = '可信赖';
  ZH['howworks.levels.trusted.tag'] = '可靠工作者';
  ZH['howworks.levels.trusted.range'] = '20-49项任务';
  ZH['howworks.levels.trusted.perk1'] = '搜索优先展示';
  ZH['howworks.levels.trusted.perk2'] = '符合直接雇佣资格';
  ZH['howworks.levels.trusted.perk3'] = '可接保密协议任务';
  ZH['howworks.levels.elite.name'] = '精英';
  ZH['howworks.levels.elite.tag'] = '顶级人才';
  ZH['howworks.levels.elite.range'] = '50项及以上任务';
  ZH['howworks.levels.elite.perk1'] = '档案精选展示位';
  ZH['howworks.levels.elite.perk3'] = '全职招聘流程';
  ZH['howworks.passport.title'] = '你的技能护照';
  ZH['howworks.passport.desc'] = '你的技能护照是一份可携带、经过验证的记录，涵盖你完成的每项任务、获得的每条评价和证明的每项技能——可分享给全球任何雇主。';
  ZH['howworks.passport.cta1'] = '创建我的护照';
  ZH['howworks.passport.cta2'] = '查看示例';
  ZH['howworks.faq.heading'] = '有疑问？';
  ZH['howworks.faq.sub'] = '关于我们你需要了解的一切。';
  ZH['howworks.faq.tabGeneral'] = '常规';
  ZH['howworks.faq.tabWorkers'] = '面向工作者';
  ZH['howworks.faq.tabBusinesses'] = '面向企业';
  ZH['howworks.faq.general.q1'] = '什么是 YOUNGMERIT？';
  ZH['howworks.faq.general.a1'] = 'YOUNGMERIT 是一个全球平台，帮助年轻人从认证企业获得真实的付费任务。通过完成工作并获得评价，工作者可建立起经过验证的工作证明信誉，这种信誉比传统简历或学历更受雇主信赖。';
  ZH['howworks.faq.general.q2'] = 'YOUNGMERIT 支持哪些国家？';
  ZH['howworks.faq.general.a2'] = '我们目前在南非、中国、美国、法国、西班牙和英国运营，平台支持英语、中文、法语和西班牙语。';
  ZH['howworks.faq.general.q3'] = '使用 YOUNGMERIT 是免费的吗？';
  ZH['howworks.faq.general.a3'] = '是的。工作者可免费注册并申请任务，企业也可免费发布任务。我们仅在任务成功完成并支付后收取少量服务费。';
  ZH['howworks.faq.general.q4'] = 'YOUNGMERIT 与其他平台有何不同？';
  ZH['howworks.faq.general.a4'] = '我们专为初级人才而设计，我们致力于帮助几乎没有正式工作经验的人建立经过验证的工作履历。我们是一个职业起步平台，而非普通的自由职业市场。';
  ZH['howworks.faq.workers.q1'] = '加入需要经验吗？';
  ZH['howworks.faq.workers.a1'] = '不需要。我们专为几乎没有正式工作经验的人设计，新手友好的任务始终可用，你的信誉将通过在平台上完成的工作从零开始建立。';
  ZH['howworks.faq.workers.q2'] = '我何时以及如何获得报酬？';
  ZH['howworks.faq.workers.a2'] = '款项会存入托管账户，一旦企业确认你的工作即可释放。资金直接进入你的已验证账户，可通过 PayPal、银行转账或当地支付方式提现，具体取决于你所在的国家。';
  ZH['howworks.faq.workers.q3'] = '什么是技能护照？';
  ZH['howworks.faq.workers.a3'] = '技能护照是一份可携带、可公开分享的记录，涵盖你所有已完成的任务、获得的评分和已验证的技能。你可以将它分享给雇主、加入求职申请，或用来替代传统简历。';
  ZH['howworks.faq.workers.q4'] = '什么是人才等级？';
  ZH['howworks.faq.workers.a4'] = '我们共有四个等级：新手（0-4项任务）、已验证（5-19项任务）、可信赖（20-49项任务）和精英（50项及以上任务）。等级越高，可解锁薪酬更高的任务、优先搜索展示以及直接雇佣资格。';
  ZH['howworks.faq.businesses.q1'] = '如何发布任务？';
  ZH['howworks.faq.businesses.a1'] = '注册、验证企业身份，然后点击“发布任务”。描述你的需求，设定预算和截止日期，并注明所需技能等级。任务会立即上线并开始接收申请。';
  ZH['howworks.faq.businesses.q2'] = '工作者是如何被验证的？';
  ZH['howworks.faq.businesses.a2'] = '我们平台上的所有工作者在交易前都需完成身份验证。他们的信任评分、任务完成率、评价和复雇次数均经过独立追踪，无法被操纵。';
  ZH['howworks.faq.businesses.q3'] = '如果我对工作不满意怎么办？';
  ZH['howworks.faq.businesses.a3'] = '款项将由托管账户保管，直至你确认交付成果。你可以在放款前要求修改。如果发生争议，我们的调解团队会审查所有证据并作出公正裁决。';
  ZH['howworks.faq.businesses.q4'] = '我可以全职雇佣某人吗？';
  ZH['howworks.faq.businesses.a4'] = '当然可以。我们支持直接在平台上进行全职雇佣。一旦你找到一位你信任其工作质量的工作者，就可以通过我们发出正式录用邀约。';
  ZH['howworks.cta.title'] = '准备好<br/><span class="accent">开始了吗？</span>';
  ZH['howworks.cta.desc'] = '加入这个用实际工作说话、而非只看学历证书的平台。';
  ZH['howworks.cta.findWork'] = '寻找工作';
  ZH['howworks.cta.hireTalent'] = '招聘人才';
  ZH['cookies.analytics.desc'] = '帮助我们了解人们如何使用我们的平台——哪些页面被访问、用户在何处流失，以及各项功能的表现如何。数据经过汇总和匿名化处理。我们用它来改进平台，而不是为了对你进行画像。';
  ZH['cookies.hero.desc'] = '选择我们使用的Cookie。必要的Cookie始终启用——它们让网站正常运行。其他一切由你决定。';
  ZH['cookies.info.2'] = '我们按上述方式使用Cookie及类似技术。关于我们如何处理你的个人数据的完整详情，请参阅我们的<a href="privacy-policy.html">隐私政策</a>。';
  ZH['cookies.marketing.desc'] = '允许我们在其他平台上向你展示相关内容。我们不会将你的数据出售给广告商。如果你选择加入，你可能会根据你的使用习惯，在LinkedIn或Google等网站上看到我们的广告。';
  ZH['dispute.hero.desc'] = '当出现问题时，我们会介入处理。我们的调解流程公正、快速，并且在平台内具有约束力——同时保护工作者和企业双方。';
  ZH['dispute.rules.2'] = '我们的调解决定在平台内具有约束力——它决定了资金如何释放。这不是法律裁决，也不影响你通过法院或相关消费者保护机构进一步追究此事的权利。';
  ZH['terms.notice'] = '<strong>简明摘要：</strong>本条款规范你对YoungMerit的使用。工作者通过安全托管系统找到任务并获得报酬，企业发布任务并向工作者付款。我们对每笔成功完成的任务收取10%的佣金。请仔细阅读第6节（钱包与支付）和第8节（争议）。';

  I18N.es = ES;
  I18N.fr = FR;
  I18N.zh = ZH;
  // ---- fw/ht additions ----
  ZU['fw.pageTitle1'] = 'FUNA';
  ZU['fw.pageTitle2'] = 'UMSEBENZI.';
  ZU['fw.pageSub'] = 'Cinga imisebenzi yamabhizinisi aqinisekisiwe. Yiba ngowokuqala ukwakha idumela lakho lapho sethula — bhalisa manje ukuze wazi.';
  ZU['fw.search'] = 'Sesha';
  ZU['fw.searchPlaceholder'] = 'Sesha imisebenzi, amakhono, amagama abalulekile...';
  ZU['fw.filter.allCategories'] = 'Zonke Izigaba';
  ZU['fw.filter.design'] = 'Ukudizayina Nobuciko';
  ZU['fw.filter.social'] = 'Ezokuxhumana';
  ZU['fw.filter.admin'] = 'Usizo Lokuphatha';
  ZU['fw.filter.data'] = 'Ukufakwa Kwedatha';
  ZU['fw.filter.research'] = 'Ucwaningo';
  ZU['fw.filter.support'] = 'Usizo Lwamakhasimende';
  ZU['fw.filter.ai'] = 'Usizo lwe-AI';
  ZU['fw.filter.translation'] = 'Ukuhumusha';
  ZU['fw.filter.anyLevel'] = 'Noma Yiliphi Izinga';
  ZU['fw.filter.beginner'] = 'Osaqalayo';
  ZU['fw.filter.intermediate'] = 'Ophakathi';
  ZU['fw.filter.advanced'] = 'Othuthukile';
  ZU['fw.sort.newest'] = 'Okusha Kuqala';
  ZU['fw.sort.payHigh'] = 'Inkokhelo Ephezulu';
  ZU['fw.sort.payLow'] = 'Inkokhelo Ephansi';
  ZU['fw.sort.beginnerFriendly'] = 'Kufanele Abaqalayo';
  ZU['fw.pill.allTasks'] = 'Yonke Imisebenzi';
  ZU['fw.pill.design'] = 'Ukudizayina';
  ZU['fw.pill.social'] = 'Ezokuxhumana';
  ZU['fw.pill.admin'] = 'Ukuphatha';
  ZU['fw.pill.data'] = 'Ukufakwa Kwedatha';
  ZU['fw.pill.research'] = 'Ucwaningo';
  ZU['fw.pill.ai'] = 'Usizo lwe-AI';
  ZU['fw.pill.translation'] = 'Ukuhumusha';
  ZU['fw.pill.support'] = 'Usizo';
  ZU['fw.pill.writing'] = 'Ukubhala Nokuqukethwe';
  ZU['fw.pill.video'] = 'Ividiyo Nomsindo';
  ZU['fw.pill.tech'] = 'Iwebhu Nezobuchwepheshe';
  ZU['fw.pill.sales'] = 'Ukuthengisa Nokufinyelela';
  ZU['fw.pill.photography'] = 'Ukuthwebula Izithombe';
  ZU['fw.sidebar.budgetRange'] = 'Ibanga Lesabelomali';
  ZU['fw.sidebar.anyBudget'] = 'Noma yisiphi isabelomali';
  ZU['fw.sidebar.upTo'] = 'Kuze kube';
  ZU['fw.sidebar.deadline'] = 'Umnqamulajuqu';
  ZU['fw.sidebar.due1day'] = 'Kuphela ngosuku olu-1';
  ZU['fw.sidebar.due3days'] = 'Kuphela ngezinsuku ezi-3';
  ZU['fw.sidebar.due1week'] = 'Kuphela ngeviki eli-1';
  ZU['fw.sidebar.flexible'] = 'Okuguquguqukayo';
  ZU['fw.sidebar.experienceLevel'] = 'Izinga Lolwazi';
  ZU['fw.sidebar.workType'] = 'Uhlobo Lomsebenzi';
  ZU['fw.sidebar.oneOff'] = 'Umsebenzi Owenzeka Kanye';
  ZU['fw.sidebar.apprenticeship'] = 'Ukufundela Umsebenzi';
  ZU['fw.sidebar.ongoing'] = 'Iphrojekthi Eqhubekayo';
  ZU['fw.sidebar.clearAll'] = 'Susa Zonke Izihlungi';
  ZU['fw.passport.title'] = 'I-SKILL PASSPORT';
  ZU['fw.passport.desc'] = 'Wonke umsebenzi owuqedelayo uyaqinisekiswa futhi wengezwe emlandweni wakho womsebenzi ohambayo. Abaqashi bawuthemba kune-CV.';
  ZU['fw.passport.cta'] = 'Yakha I-Passport Yakho';
  ZU['fw.banner.title'] = 'Sizoqala maduze.';
  ZU['fw.banner.desc'] = 'Imisebenzi yangempela evela emabhizinisini aqinisekisiwe iyeza. Bhalisa manje ukuze wazi ngokushesha lapho isivela futhi uthole ithuba lokuqala.';
  ZU['fw.banner.cta'] = 'Thola i-early access';
  ZU['fw.results.showing'] = 'Ibonisa';
  ZU['fw.results.task'] = 'umsebenzi';
  ZU['fw.results.tasks'] = 'imisebenzi';
  ZU['fw.sortBy'] = 'Hlela nge:';
  ZU['fw.card.title'] = 'Dizayina Amathempuletu we-Instagram Post angu-5';
  ZU['fw.card.by'] = 'ngu';
  ZU['fw.card.company'] = 'Creative Co.';
  ZU['fw.card.verified'] = 'Kuqinisekisiwe';
  ZU['fw.card.tagDesign'] = 'Ukudizayina';
  ZU['fw.card.tagCanva'] = 'Canva';
  ZU['fw.card.tagSocial'] = 'Ezokuxhumana';
  ZU['fw.card.tagBeginner'] = 'Osaqalayo';
  ZU['fw.card.tagOneOff'] = 'Kanye';
  ZU['fw.card.due3days'] = 'Kuphela ngezinsuku ezi-3';
  ZU['fw.card.applicants'] = 'Abafakizicelo 0 — yiba ngowokuqala';
  ZU['fw.card.escrow'] = 'Kuvikelwe nge-escrow';
  ZU['fw.card.fixedPrice'] = 'intengo emisiwe';
  ZU['fw.card.safePay'] = 'UKUKHOKHA OKUPHEPHILE';
  ZU['fw.card.applyNow'] = 'Faka Isicelo Manje';
  ZU['fw.empty.title'] = 'AYIKHO IMISEBENZI EFANAYO';
  ZU['fw.empty.desc'] = 'Ayikho imisebenzi efanayo nezihlungi zakho zamanje.';
  ZU['fw.empty.clear'] = 'Susa zonke izihlungi';
  ZU['fw.empty.rest'] = 'ukubona umsebenzi wesibonelo, noma bhalisa ukuze wazi lapho imisebenzi yangempela isivela.';
  ZU['ht.pageTitle1'] = 'QASHA';
  ZU['ht.pageTitle2'] = 'AMATHALENTE.';
  ZU['ht.pageSub'] = 'Cinga abasebenzi abasha abaqinisekisiwe ubunikazi abalungele ukwenza imisebenzi. Yiba phakathi kwamabhizinisi okuqala ukuqasha nathi lapho sethula.';
  ZU['ht.searchPlaceholder'] = 'Sesha ngekhono, igama noma igama elibalulekile...';
  ZU['ht.filter.allSkills'] = 'Wonke Amakhono';
  ZU['ht.filter.adminVA'] = 'Ukuphatha ne-Virtual Assistant';
  ZU['ht.filter.rookie'] = 'Osaqalayo';
  ZU['ht.filter.verified'] = 'Oqinisekisiwe';
  ZU['ht.filter.trusted'] = 'Othenjwayo';
  ZU['ht.filter.elite'] = 'Elite';
  ZU['ht.pill.allTalent'] = 'Wonke Amathalente';
  ZU['ht.pill.designers'] = 'Abadizayini';
  ZU['ht.pill.socialMedia'] = 'Ezokuxhumana';
  ZU['ht.pill.admin'] = 'Ukuphatha';
  ZU['ht.pill.dataEntry'] = 'Ukufakwa Kwedatha';
  ZU['ht.pill.research'] = 'Ucwaningo';
  ZU['ht.pill.aiAssistants'] = 'Osizo lwe-AI';
  ZU['ht.pill.translators'] = 'Abahumushi';
  ZU['ht.pill.support'] = 'Usizo';
  ZU['ht.pill.writing'] = 'Ukubhala Nokuqukethwe';
  ZU['ht.pill.video'] = 'Ividiyo Nomsindo';
  ZU['ht.pill.tech'] = 'Iwebhu Nezobuchwepheshe';
  ZU['ht.pill.sales'] = 'Ukuthengisa Nokufinyelela';
  ZU['ht.pill.photography'] = 'Ukuthwebula Izithombe';
  ZU['ht.post.title'] = 'THUMELA UMSEBENZI';
  ZU['ht.post.desc'] = 'Sitshele lokho okudingayo bese uvumela amathalente aqinisekisiwe afake izicelo. Ukuthumela kumahhala, izimali zigcinwa nge-escrow kuze uvumele.';
  ZU['ht.post.cta'] = 'Thumela Umsebenzi Mahhala';
  ZU['ht.sidebar.minTrustScore'] = 'Amaphuzu Amancane Okwethenjwa';
  ZU['ht.sidebar.anyScore'] = 'Noma yiwaphi amaphuzu';
  ZU['ht.sidebar.minPrefix'] = 'Okuncane';
  ZU['ht.sidebar.starsSuffix'] = 'izinkanyezi';
  ZU['ht.sidebar.talentLevel'] = 'Izinga Lethalente';
  ZU['ht.sidebar.availability'] = 'Ukutholakala';
  ZU['ht.sidebar.availableNow'] = 'Uyatholakala Manje';
  ZU['ht.sidebar.thisWeek'] = 'Kuleli Viki';
  ZU['ht.sidebar.flexible'] = 'Okuguquguqukayo';
  ZU['ht.trust.title'] = 'Kungani Thina?';
  ZU['ht.trust.item1'] = 'Ukuvikelwa kwenkokhelo nge-escrow kukho konke ukuqasha';
  ZU['ht.trust.item2'] = 'Amaphrofayela amathalente aqinisekisiwe ubunikazi';
  ZU['ht.trust.item3'] = 'Ama-Skill Passport aqinisekisiwe kuwo wonke amaphrofayela';
  ZU['ht.trust.item4'] = 'Kufakwa nokuxazululwa kwezimpikiswano';
  ZU['ht.banner.title'] = 'Sizoqala maduze.';
  ZU['ht.banner.desc'] = 'Abasebenzi abasha abaqinisekisiwe babhalisa manje. Dala i-akhawunti yebhizinisi ukuze uthumele imisebenzi futhi ube ngowokuqala ukuqasha lapho sesethulwa.';
  ZU['ht.banner.cta'] = 'Thumela umsebenzi mahhala';
  ZU['ht.sortLabel'] = 'Hlela:';
  ZU['ht.sort.rated'] = 'Abalinganiswe Kahle Kakhulu';
  ZU['ht.sort.tasks'] = 'Abaqedele Imisebenzi Eminingi';
  ZU['ht.sort.newest'] = 'Amalungu Amasha';
  ZU['ht.results.profile'] = 'iphrofayela';
  ZU['ht.results.profiles'] = 'amaphrofayela';
  ZU['ht.card.idVerified'] = 'Ubunikazi Kuqinisekisiwe';
  ZU['ht.card.level'] = 'Othenjwayo';
  ZU['ht.card.role'] = 'Umphathi Wezokuxhumana';
  ZU['ht.card.location'] = 'eGoli, iNingizimu Afrika';
  ZU['ht.card.tagSocial'] = 'Ezokuxhumana';
  ZU['ht.card.tagCopywriting'] = 'Ukubhala Okuthengisayo';
  ZU['ht.card.tagContent'] = 'Ukudala Okuqukethwe';
  ZU['ht.card.tasksDone'] = 'Imisebenzi engu-12 eqediwe';
  ZU['ht.card.passportVerified'] = 'I-Skill Passport iqinisekisiwe';
  ZU['ht.card.availableNow'] = 'Uyatholakala manje';
  ZU['ht.card.demoProfile'] = 'Iphrofayela yesibonelo';
  ZU['ht.card.hireNow'] = 'Qasha Manje';
  ZU['ht.card.save'] = 'Londoloza';
  ZU['ht.empty.title'] = 'AYIKHO AMAPHROFAYELA AFANAYO';
  ZU['ht.empty.desc'] = 'Abekho abasebenzi abafanele izihlungi zakho zamanje.';
  ZU['ht.empty.createAccount'] = 'dala i-akhawunti yebhizinisi';
  ZU['ht.empty.rest1'] = 'ukubona iphrofayela yesibonelo, noma';
  ZU['ht.empty.rest2'] = 'ukuze wazi lapho abasebenzi bebhalisa.';
  // ---- blog.* additions ----
  ZU['blog.hero.title'] = 'Okuthunyelwe <span class="accent">Komphakathi.</span>';
  ZU['blog.hero.desc'] = 'Okuthunyelwe kombhalo nezwi okuvela kubasebenzi namabhizinisi — ulwazi lwangempela, oluqondile ohlelweni.';
  ZU['blog.guestBanner'] = 'Njengamanje uthumela njengesihambeli — <a href="auth.html" style="color:var(--dark);font-weight:600;">bhalisa</a> ukuze uthumele ngegama lakho langempela futhi wakhe idumela ngokuthunyelwe kwakho.';
  ZU['blog.search.placeholder'] = 'Sesha okuthunyelwe…';
  ZU['blog.filter.all'] = 'Konke okuthunyelwe';
  ZU['blog.filter.worker'] = 'Izindaba zabasebenzi';
  ZU['blog.filter.business'] = 'Kumabhizinisi';
  ZU['blog.filter.tips'] = 'Amathiphu Nemihlahlandlela';
  ZU['blog.filter.update'] = 'Izibuyekezo Zohlelo';
  ZU['blog.dock.label'] = 'Yabelana ngokuthile okuyiqiniso…';
  ZU['blog.dock.write'] = 'Bhala';
  ZU['blog.dock.record'] = 'Qopha';
  ZU['blog.composer.text'] = 'Umbhalo Othunyelwe';
  ZU['blog.composer.voice'] = 'Izwi Elithunyelwe';
  ZU['blog.composer.titlePlaceholder'] = 'Isihloko (akuphoqelekile)';
  ZU['blog.composer.contentPlaceholder'] = 'Yabelana ngethiphu, indaba, noma okuthile okufunde emakethe yomsebenzi…';
  ZU['blog.composer.tag.worker'] = 'Indaba yomsebenzi';
  ZU['blog.composer.tag.business'] = 'Kumabhizinisi';
  ZU['blog.composer.tag.tips'] = 'Amathiphu Nemihlahlandlela';
  ZU['blog.composer.tag.update'] = 'Isibuyekezo Sohlelo';
  ZU['blog.composer.preview'] = 'Ukubuka kuqala — yilokhu ngqo umphakathi ozokubona';
  ZU['blog.composer.publish'] = 'Thumela';
  ZU['blog.composer.voice.tapToRecord'] = 'Thepha ukuze uqophe';
  ZU['blog.composer.voice.limit'] = 'Kuze kube imizuzwana engu-30 okwamanje';
  ZU['blog.composer.voice.rerecord'] = 'Qopha Kabusha';
  ZU['blog.composer.voice.publish'] = 'Thumela';
  ZU['blog.post.helpful'] = 'Kuyasiza';
  ZU['blog.post.insightful'] = 'Kunombono';
  ZU['blog.post.agree'] = 'Ngiyavuma';
  ZU['blog.post.save'] = 'Londoloza';
  ZU['blog.post.delete'] = 'Susa';
  ZU['blog.post.readMore'] = 'Funda Kabanzi';
  ZU['blog.empty.title'] = 'Isikhala ngesakho.';
  ZU['blog.empty.desc'] = 'Akekho osethumele okuthile — yiba yizwi lokuqala emphakathini wethu. Bhala Umbhalo Othunyelwe noma uqophe Izwi Elithunyelwe ngezansi.';
  // ---- profile.* (tagged subset) ----
  ZU['profile.gate.title'] = 'IPHROFAYELA YAKHO IHLALA LAPHA.';
  ZU['profile.gate.desc'] = 'Bhalisa ukwakha i-Skill Passport yakho futhi uqale ukufuna umsebenzi — noma udale i-akhawunti yebhizinisi ukuze uthumele imisebenzi futhi uqashe amathalente.';
  ZU['profile.gate.ctaSignup'] = 'Dala i-akhawunti';
  ZU['profile.gate.ctaLogin'] = 'Ngena';
  ZU['profile.privateNotice'] = '<strong>Iphrofayela yakho iyabonakala kwamanye amalungu angene ngemvume.</strong> Noma ubani ongene ngemvume ku-YoungMerit angabona igama lakho, isithombe, umlando, iphothifoliyo nomlando womsebenzi. Imininingwane yakho yokuxhumana nolwazi lwasebhange akusoze kwaboniswa muntu ngaphandle kwakho.';
  ZU['profile.public.loading'] = 'Ilayisha iphrofayela…';
  ZU['profile.public.loginRequired'] = 'Ngena ngemvume ukuze ubone amaphrofayela abasebenzi.';
  ZU['profile.public.backToSearch'] = '← Buyela ku-Hire Talent';
  ZU['profile.public.inviteCta'] = 'Mema Kumsebenzi';
  ZU['profile.public.noPortfolio'] = 'Akukho izinto ze-portfolio okwamanje.';
  ZU['profile.public.noBio'] = 'Lo msebenzi akakafaki umlando wakhe okwamanje.';
  ZU['profile.public.notFound.title'] = 'IPHROFAYELA AYITHOLAKALANGA';
  ZU['profile.public.notFound.desc'] = 'Le phrofayela yomsebenzi ayikho noma ayisatholakali.';
  ZU['profile.worker.cover.edit'] = 'Hlela isembozo';
  ZU['profile.worker.badge.verified'] = 'Ibhizinisi Eliqinisekisiwe';
  // ---- about.* (values/team/timeline/global/press/cta) ----
  ZU['about.values.eyebrow'] = 'Okusiqhubayo';
  ZU['about.values.title'] = 'AMASIKO<br/><span class="accent">ETHU AYISISEKELO.</span>';
  ZU['about.values.desc'] = 'Lawa awamagama aphendukiswe odongeni. Yizimiso ezingemuva kwaso sonke isinqumo esisenzayo, kusukela endleleni esakha ngayo uhlelo kuya endleleni esiphatha ngayo wonke umsebenzi nebhizinisi kulo.';
  ZU['about.values.trust.title'] = 'UKWETHENJWA';
  ZU['about.values.trust.desc'] = 'Sakha ukwethenjwa ngobufakazi obuqinisekisiwe bomsebenzi. Zonke izilinganiso, ukubuyekezwa, nomsebenzi oqediwe kulandelelwa ngokuzimela, ngaphandle kokukhuphuka noma ukuphambana okungenzeka.';
  ZU['about.values.opportunity.title'] = 'ITHUBA';
  ZU['about.values.opportunity.desc'] = 'Sikholelwa ukuthi wonke umuntu ufanele ithuba elilinganayo lokubonisa lokho angakwenza, kungakhathaliseki lapho afunda khona, abantu abamaziyo, noma okushiwo yi-CV yakhe njengamanje.';
  ZU['about.values.quality.title'] = 'IKHWALITHI';
  ZU['about.values.quality.desc'] = 'Sigcina izinga eliphezulu kubo bobabili abasebenzi namabhizinisi. Umsebenzi omuhle uyagujwa futhi uyavuzwa. Izinkinga zibhekwa ngokushesha nangobulungisa ngohlelo lwethu lokuxazulula.';
  ZU['about.values.impact.title'] = 'UMTHELELA';
  ZU['about.values.impact.desc'] = 'Silinganisa umthelela wangempela ezimpilweni nasemisebenzini yabantu. Konke ukuqashwa okugcwele okuqhamuka lapha kuwukunqoba okuqondile kukho konke esasizimisele ukukwakha.';
  ZU['about.team.eyebrow'] = 'Abantu Abangemuva Kwakho';
  ZU['about.team.title'] = 'HLANGANA NEQEMBU.';
  ZU['about.team.desc'] = 'Iqembu elisabalele emhlabeni jikelele elikholelwa kulokho esikwakhayo ngoba iningi lethu belihlangabezane naleyo nkinga ngokwalo.';
  ZU['about.team.naledi.role'] = 'Umsunguli Ohlanganyele no-CEO';
  ZU['about.team.naledi.bio'] = 'Owayengumcwaningi wemisebenzi yentsha. Uchithe iminyaka eyisithupha ecwaninga inkinga yemisebenzi yezinga eliphansi kulo lonke elase-Afrika ngaphambi kokunquma ukuzakhela isixazululo ngokwakhe.';
  ZU['about.team.li.role'] = 'Umsunguli Ohlanganyele no-CTO';
  ZU['about.team.li.bio'] = 'Wayesebenza enkampanini enkulu yobuchwepheshe yaseChina. Waphothula ngo-2022 futhi wachitha izinyanga engakwazi ukuthola umsebenzi naphezu kweziqu zenyuvesi ephakathi kwezinhlanu eziphezulu. Wakha injini yethu yedumela.';
  ZU['about.team.camille.role'] = 'Inhloko Yokukhula';
  ZU['about.team.camille.bio'] = 'Uholele ukukhula emakethe ezimbili zedijithali zaseYurophu. Unothando lokusebenzisa ubuchwepheshe ukuvula amathuba omnotho entsha eFrance nangale kwayo.';
  ZU['about.team.james.role'] = 'Inhloko Yokwethenjwa Nokuphepha';
  ZU['about.team.james.bio'] = 'Uke wahola ukwethenjwa nokuphepha enkundleni enkulu yomnotho wemisebenzi emincane. Wadizayina kusukela ekuqaleni uhlelo lwethu lwe-escrow, inqubo yokuqinisekisa ubunikazi, kanye nohlaka lokuxazulula izimpikiswano.';
  ZU['about.team.joinTitle'] = 'JOYINA IQEMBU';
  ZU['about.team.joinDesc'] = 'Siqasha kwezobunjiniyela, ukudizayina, ukukhula, nokusebenza, ngokugcwele kude kuwo wonke amazwe ayisithupha. Uma le nkinga ikubalulekile ngokomuntu siqu, sifuna ukuzwa kuwe.';
  ZU['about.team.joinCta'] = 'Buka Izikhundla Ezivulekile';
  ZU['about.timeline.eyebrow'] = 'Uhambo Lwethu';
  ZU['about.timeline.title'] = 'INDLELA ESIFIKE NGAYO <span class="accent">LAPHA.</span>';
  ZU['about.timeline.t1.year'] = 'Maphakathi no-2025';
  ZU['about.timeline.t1.title'] = 'Umqondo Uyakheka';
  ZU['about.timeline.t1.desc'] = 'UNaledi noLi bahlangana engqungqutheleni yemisebenzi yentsha eNairobi futhi bathola ukuthi bebecwaninga inkinga efanayo besuka ezinhlangothini ezingafani zomhlaba. Umqondo uqala ukwakheka phezu kwamaviki amaningana ezingcingo nocwaningo olwabelwana ngalo.';
  ZU['about.timeline.t2.year'] = 'Ngasekupheleni kuka-2025';
  ZU['about.timeline.t2.title'] = 'Ukwakha Ngasese';
  ZU['about.timeline.t2.desc'] = 'Iqembu elisungulayo lihlangana. UCamille ujoyina ukuhola ukukhula futhi uJames ujoyina ukuhola ukwethenjwa nokuphepha. Kuqala izinyanga eziyisithupha zokuthuthukisa umkhiqizo ezinhlokweni ezimbili zomhlaba ngasese ngokuphelele.';
  ZU['about.timeline.t3.year'] = 'Ekuqaleni kuka-2026';
  ZU['about.timeline.t3.title'] = 'Siyaqala';
  ZU['about.timeline.t3.desc'] = 'Uhlelo lwethulwa ngesikhathi esisodwa eNingizimu Afrika naseChina ngosekelo olugcwele lwesiNgisi nesiMandarin. Uhlelo ledumela, i-Skill Passport, kanye nengqalasizinda yenkokhelo ye-escrow konke kuyasebenza kusukela osukwini lokuqala.';
  ZU['about.timeline.t4.year'] = 'Maphakathi no-2026';
  ZU['about.timeline.t4.title'] = 'Ukwandiswa Kumazwe Amane Engeziwe';
  ZU['about.timeline.t4.desc'] = 'Uhlelo luyavuleka e-United States, eFrance, eSpain, nase-United Kingdom. Usekelo lwesiFrench nesiSpanish luyaqala, luletha ukumbozwa okugcwele kwezilimi ezine emazweni ayisithupha.';
  ZU['about.timeline.t5.year'] = 'Njengamanje';
  ZU['about.timeline.t5.title'] = 'Sikhula Nsuku Zonke';
  ZU['about.timeline.t5.desc'] = 'Sifaka ngokusebenzayo abasebenzi bethu bokuqala namabhizinisi. Wonke umsebenzi othunyelwe futhi oqediwe kusukela manje ubufakazi bokuthi imodeli iyasebenza. Uhambo lokushintsha indlela umhlaba oqasha ngayo luqala manje.';
  ZU['about.timeline.t6.year'] = 'Okulandelayo';
  ZU['about.timeline.t6.title'] = 'Ukufundela Umsebenzi Namathuluzi Abaqashi';
  ZU['about.timeline.t6.desc'] = 'Ubudlelwane bokufundela umsebenzi bukahulumeni, kanye namathuluzi okuqasha ajulile kubaqashi kusesethuthukisweni okusebenzayo. Okuhle kakhulu kusesezayo.';
  ZU['about.global.eyebrow'] = 'Lapho Sisebenza Khona';
  ZU['about.global.title'] = 'SIYIZWE JIKELELE<br/><span class="accent">KUSUKELA OSUKWINI LOKUQALA.</span>';
  ZU['about.global.desc'] = 'Asizange siqale ngokwendawo bese sihlela ukwandisa kamuva. Sakhela umhlaba kusukela ekuqaleni ngoba inkinga ikhona yonke indawo futhi idinga impendulo yangempela yomhlaba wonke.';
  ZU['about.global.langCardTitle'] = 'Izilimi Zohlelo';
  ZU['about.global.live'] = 'Iyasebenza';
  ZU['about.global.foundingMarket'] = 'Imakethe esungulayo, isebenza kusukela ekuqaleni kuka-2026';
  ZU['about.global.expandedMid2026'] = 'Kwandiswe maphakathi no-2026';
  ZU['about.global.yearOneTarget'] = 'Umgomo Wonyaka Wokuqala';
  ZU['about.global.za.members'] = 'Amalungu angu-10,000';
  ZU['about.global.cn.members'] = 'Amalungu angu-15,000';
  ZU['about.global.us.members'] = 'Amalungu angu-8,000';
  ZU['about.global.fr.members'] = 'Amalungu angu-4,000';
  ZU['about.global.es.members'] = 'Amalungu angu-3,500';
  ZU['about.global.gb.members'] = 'Amalungu angu-5,000';
  ZU['about.press.title'] = 'EMAPHEPHENDABENI.';
  ZU['about.press.desc'] = 'Ukumbozwa kwezindaba nokuphawula kokuqala ngenkinga esakhelwe ukuyixazulula.';
  ZU['about.press.p1.quote'] = '"Inkinga yolwazi ingenye yezinto ezihlala njalo ukwehluleka emakethe yomsebenzi yesimanje. Izinkundla eziphula lo mjikelezo ngobufakazi bomsebenzi obungaqinisekiswa zifanele ukunakwa okukhulu."';
  ZU['about.press.p1.date'] = '2025, Isihloko Semisebenzi Yentsha';
  ZU['about.press.p2.quote'] = '"Inkinga yokungabi khona kwemisebenzi yentsha eNingizimu Afrika idinga izixazululo ezingokoqobo. Inkundla eshintsha iziqu ngomlando womsebenzi oqinisekisiwe ingaba enye yezinto ezibaluleke kakhulu ezizanyiwe kuze kube manje."';
  ZU['about.press.p2.date'] = '2025, Uchungechunge Lwekusasa Lomsebenzi';
  ZU['about.press.p3.quote'] = '"Inkinga yokungabi khona kwemisebenzi kwabaqedile isikole eChina akuyona igebe lamakhono. Yigebe lobufakazi. Intsha ingakwazi ukwenza umsebenzi. Abanayo nje indlela yokukufakazela. Yileli gebe eliqondile uhlobo lwenkundla enjena olulubhekayo."';
  ZU['about.press.p3.date'] = '2025, Umbiko Womnotho Wabaqedile Isikole';
  ZU['about.cta.eyebrow'] = 'Joyina Umkhankaso';
  ZU['about.cta.title'] = 'ISIKHATHI SAKHO SOKUKUFAKAZELA.';
  ZU['about.cta.desc'] = 'Sisaqala nje. Yiba omunye wabokuqala ukwakha idumela lakho eliqinisekisiwe futhi usize ukufakazela ukuthi imodeli iyasebenza.';
  ZU['about.cta.ctaFind'] = 'Funa Umsebenzi';
  ZU['about.cta.ctaHire'] = 'Qasha Amathalente';
  // ---- about.* (hero/promise/pillars/problem) ----
  ZU['about.hero.breadcrumb'] = 'Mayelana';
  ZU['about.hero.eyebrow'] = 'Umgomo Wethu';
  ZU['about.hero.title'] = 'SIPHISHEKELA<br/>UMGOMO WOKUVULA<br/><span class="accent">IMINYANGO.</span>';
  ZU['about.hero.desc'] = 'Sasakhiwa ngoba izigidi zentsha emhlabeni jikelele zilungele ukusebenza kodwa azikwazi ukudlula umnyango wokuqala. Sishintsha lokho, umsebenzi oqinisekisiwe ngasikhathi.';
  ZU['about.hero.ctaFind'] = 'Funa Umsebenzi';
  ZU['about.hero.ctaHow'] = 'Kusebenza Kanjani';
  ZU['about.promise.title'] = 'Isithembiso se-YOUNGMERIT';
  ZU['about.promise.quote'] = '"Umhlaba lapho ithuba <span class="accent">LIZUZWA,</span> hhayi ukudliswa."';
  ZU['about.pillar1.title'] = 'Ubufakazi Bomsebenzi Obuqinisekisiwe';
  ZU['about.pillar1.desc'] = 'Wonke umsebenzi oqediwe ulandelelwa ngokuzimela';
  ZU['about.pillar2.title'] = 'Kwakhelwe Amazwe Ayisithupha Kusukela Osukwini Lokuqala';
  ZU['about.pillar2.desc'] = 'iNingizimu Afrika, iChina, i-USA, iFrance, iSpain ne-UK';
  ZU['about.pillar3.title'] = 'Ukungena Emsebenzini Wesikhathi Eside, Hhayi Umsebenzi Nje Owenzeka Kanye';
  ZU['about.pillar3.desc'] = 'Sakha izindlela zangempela eziya emsebenzini ogcwele';
  ZU['about.problem.eyebrow'] = 'Kungani Sikhona';
  ZU['about.problem.title'] = 'INKINGA<br/>ESIYIXAZULULAYO.';
  ZU['about.problem.desc'] = 'Ukungabi khona kwemisebenzi entsha yinkinga yomhlaba jikelele kodwa isisusa sifana yonke indawo: ukungabi nolwazi kusho ukungangeni, futhi ukungangeni kusho ukungabi nolwazi. Siyawuphula lowo mjikelezo.';
  ZU['about.problem.za'] = 'iNingizimu Afrika';
  ZU['about.problem.za.rate'] = 'Cishe u-60% Wokungabi Khona Kwemisebenzi Entsha';
  ZU['about.problem.za.desc'] = 'Ukungabi khona kwemisebenzi okukhulu, ukuntuleka kwamathuba asemthethweni, kanye nokungahambisani okujulile phakathi kwamakhono nemisebenzi kushiya izigidi zentsha yaseNingizimu Afrika ivalelwe ngokuphelele emnothweni.';
  ZU['about.problem.cn'] = 'iChina';
  ZU['about.problem.cn.rate'] = 'Cishe u-20% Wokungabi Khona Kwemisebenzi Kwabaqedile Isikole';
  ZU['about.problem.cn.desc'] = 'Izigidi zabaqedile isikole zincintisana ngezikhundla ezincipha njalo. Amabhizinisi ajwayele ukufuna iminyaka emibili kuya kwemihlanu yolwazi yezikhundla zezinga eliphansi, kudala isithiyo esingenakwenzeka kwabaqedile isikole abasha.';
  ZU['about.problem.us'] = 'i-United States';
  ZU['about.problem.us.rate'] = 'Inhlekelele Yokugcwala Kweziqu';
  ZU['about.problem.us.desc'] = 'Ukukhuphuka kweziqu kanye nezikhundla zezinga eliphansi ezidinga ulwazi lwangaphambili kuwe indlela ejwayelekile evela emfundweni iya emsebenzini kwizigidi zentsha yaseMelika.';
  ZU['about.problem.fr'] = 'iFrance';
  ZU['about.problem.fr.rate'] = 'Ukuqashwa Okuqinile Okugxile Eziqwini';
  ZU['about.problem.fr.desc'] = 'Isiko lokuqashwa esisemthethweni laseFrance lenza kube nzima ikakhulukazi kwabasha abangenazo iziqu eziphambili noma ubudlelwane bomuntu siqu ukuthi bangene emhlabeni wobungcweti.';
  ZU['about.problem.es'] = 'iSpain';
  ZU['about.problem.es.rate'] = 'Cishe u-28% Wokungabi Khona Kwemisebenzi Entsha';
  ZU['about.problem.es.desc'] = 'Elinye lamazinga aphakeme kakhulu okungabi khona kwemisebenzi entsha eYurophu, okuqhutshwa ukungakhuli komnotho, ukuncika ezivumelwaneni zesikhashana, kanye namamakethe abuthaka njalo emisebenzi yezinga eliphansi.';
  ZU['about.problem.gb'] = 'i-UK';
  ZU['about.problem.gb.rate'] = 'Ukukhuphuka Okusabalele Kwezidingo Zolwazi';
  ZU['about.problem.gb.desc'] = 'Ngisho nezikhundla ezisezingeni eliphansi manje zidinga ulwazi olubanzi lwangaphambili. Abaqedile isikole abasha bavaleleke emjikelezweni lapho zonke izicelo zenqatshwa ngenxa yokuntuleka kolwazi okungenziwa kuphela ngumsebenzi.';
  // ---- profile.* (t() calls) ----
  ZU['profile.about.add'] = 'Chofoza ukwengeza i-bio.';
  ZU['profile.about.edit'] = 'Hlela';
  ZU['profile.actions.verify'] = 'Qedela ukuqinisekiswa';
  ZU['profile.actions.updateContact'] = 'Buyekeza imininingwane yoxhumano nokukhokha';
  ZU['profile.plan.title'] = 'Uhlelo lwakho';
  ZU['profile.plan.active'] = 'ISEBENZA';
  ZU['profile.plan.upgrade'] = 'Thuthukisa uhlelo';
  ZU['profile.plan.manage'] = 'Phatha uhlelo';
  ZU['profile.plan.free'] = 'Mahhala';
  ZU['profile.plan.pro'] = 'I-Professional Pro';
  ZU['profile.plan.business'] = 'I-Business Pro';
  ZU['profile.plan.growth'] = 'I-Business Growth';
  ZU['profile.plan.featuredProfile'] = 'Ukuvezwa okukhethekile kuyasebenza: iphrofayela yakho ivezwa ngokugqamile ekusesheni kwe-Hire Talent.';
  ZU['profile.plan.featuredCompany'] = 'Ukuvezwa okukhethekile kuyasebenza: iphrofayela yenkampani yakho ivela ngokugqamile kubasebenzi.';
  ZU['profile.plan.featuredCompanyTasks'] = 'Ukuvezwa okukhethekile kuyasebenza: inkampani nemisebenzi yakho kuvezwa ngokugqamile ekusesheni.';
  ZU['profile.plan.upsellWorker'] = 'Thuthukisela ku-Professional Pro ukuze uthole ukuvezwa okukhethekile futhi ugqame kubaqashi.';
  ZU['profile.plan.upsellBiz'] = 'Thuthukisela ku-Business Pro noma i-Growth ukuze uveze inkampani nemisebenzi yakho kubasebenzi.';
  ZU['profile.worker.tabs.analytics'] = 'Ukuhlaziya';
  ZU['profile.worker.analytics.title'] = 'Ukuhlaziya Kwephrofayela';
  ZU['profile.worker.analytics.subtitle'] = 'Indlela iphrofayela yakho esebenza ngayo namabhizinisi.';
  ZU['profile.worker.analytics.views'] = 'Ukubukwa kwephrofayela';
  ZU['profile.worker.analytics.viewsWeek'] = 'Ukubukwa kuleli sonto';
  ZU['profile.worker.analytics.saved'] = 'Igcinwe amabhizinisi';
  ZU['profile.worker.analytics.acceptRate'] = 'Izinga lokwamukelwa';
  ZU['profile.worker.analytics.footnote'] = 'Kususelwa ku-{accepted} okwamukelwe kwezingu-{sent} izicelo ezithunyelwe.';
  ZU['profile.worker.analytics.locked'] = 'Thuthukisela ku-Professional Pro ukuze ubone ukuthi ubani obuka iphrofayela yakho, ukuthi amabhizinisi ayigcina kangakanani, nokuthi izicelo zakho zisebenza kanjani.';
  ZU['profile.biz.about.title'] = 'Mayelana Nebhizinisi';
  ZU['profile.biz.actions.edit'] = 'Hlela Iphrofayela';
  ZU['profile.biz.actions.post'] = 'Thumela Umsebenzi';
  ZU['profile.biz.applicants.lock'] = 'Amaphrofayela agcwele avulwa lapho ukhetha umfakisicelo';
  ZU['profile.biz.history.count'] = 'imisebenzi';
  ZU['profile.biz.history.title'] = 'Imisebenzi Eqediwe';
  ZU['profile.biz.meta.hired'] = 'abasebenzi abaqashiwe';
  ZU['profile.biz.meta.member'] = 'Ilungu kusukela';
  ZU['profile.biz.meta.posted'] = 'imisebenzi ethunyelwe';
  ZU['profile.biz.postings.new'] = 'Umsebenzi Omusha';
  ZU['profile.biz.postings.title'] = 'Uhlu Lomsebenzi Osaqhubekayo';
  ZU['profile.biz.skills.title'] = 'Amalebula Emboni';
  ZU['profile.biz.stats.hired'] = 'Abasebenzi Abaqashiwe';
  ZU['profile.biz.stats.paid'] = 'Isamba Esikhokhiwe';
  ZU['profile.biz.stats.posted'] = 'Imisebenzi Ethunyelwe';
  ZU['profile.biz.stats.rating'] = 'Isilinganiso Esejwayelekile Esinikeziwe';
  ZU['profile.biz.tabs.about'] = 'Mayelana';
  ZU['profile.biz.tabs.bench'] = 'Ithimba Elithembekile';
  ZU['profile.biz.bench.title'] = 'Ithimba Elithembekile';
  ZU['profile.biz.bench.subtitle'] = 'Abasebenzi obaqashe ngaphezu kwesikhathi esisodwa — ithimba lakho eliyinsika.';
  ZU['profile.biz.bench.empty'] = 'Qasha umsebenzi ofanayo kabili bese bevela lapha ngokuzenzakalelayo, ngendlela elula yokubabuyisela emsebenzini wakho olandelayo.';
  ZU['profile.biz.bench.browseCta'] = 'Phequlula Amathalente';
  ZU['profile.biz.bench.hireCount'] = 'Uqashiwe izikhathi ezingu-{n}';
  ZU['profile.biz.bench.lastHired'] = 'okokugcina waqashwa {date}';
  ZU['profile.biz.bench.notePlaceholder'] = 'Inothi eliyimfihlo (nguwe kuphela ongalibona)';
  ZU['profile.biz.bench.viewProfile'] = 'Buka Iphrofayela';
  ZU['profile.biz.bench.rehire'] = 'Qasha Futhi';
  ZU['profile.biz.tabs.analytics'] = 'Ukuhlaziya';
  ZU['profile.biz.analytics.title'] = 'Ideshibhodi yokuhlaziya';
  ZU['profile.biz.analytics.subtitle'] = 'Indlela imisebenzi yakho eyithumelayo esebenza ngayo.';
  ZU['profile.biz.analytics.locked'] = 'Thuthukisela ohlelweni lwe-Business ukuze uvule ideshibhodi yakho yokuhlaziya: inani labafakizicelo, izinga lokuqashwa, izinga lokuqedwa komsebenzi nokunye.';
  ZU['profile.biz.analytics.applicants'] = 'Inani labafakizicelo';
  ZU['profile.biz.analytics.hireRate'] = 'Izinga lokuqashwa';
  ZU['profile.biz.analytics.completed'] = 'Imisebenzi eqediwe';
  ZU['profile.biz.analytics.completionRate'] = 'Izinga lokuqedwa';
  ZU['profile.biz.analytics.advanced'] = 'Ukuhlaziya okuthuthukisiwe';
  ZU['profile.biz.analytics.saved'] = 'Izikhathi elondolozwe abasebenzi';
  ZU['profile.biz.analytics.growthUpsell'] = 'Thuthukisela ku-Growth ukuze uvule ukuhlaziya okuthuthukisiwe njengenani lokulondolozwa.';
  ZU['profile.biz.tabs.applicants'] = 'Abafakizicelo';
  ZU['profile.biz.tabs.history'] = 'Imisebenzi Yangaphambilini';
  ZU['profile.biz.tabs.postings'] = 'Imisebenzi Esaqhubekayo';
  ZU['profile.biz.tabs.saved'] = 'Okuthunyelwe Okulondoloziwe';
  ZU['profile.cv.remove'] = 'Susa';
  ZU['profile.cv.upload'] = 'Layisha';
  ZU['profile.passport.completion'] = 'Ukuqedwa';
  ZU['profile.passport.earned'] = 'Okuholiwe';
  ZU['profile.passport.next'] = 'Qedela umsebenzi wakho wokuqala ukuze uqale';
  ZU['profile.passport.nextMilestone'] = '{n} okusalele ukufinyelela ku-{level}';
  ZU['profile.passport.maxLevel'] = 'Izinga eliphezulu kakhulu selifinyelelwe — akusekho okunye okuvulekayo';
  ZU['profile.passport.rating'] = 'Isilinganiso Esejwayelekile';
  ZU['profile.savedPosts.cta'] = 'Iya Emphakathini';
  ZU['profile.savedPosts.empty'] = 'Akukho okuthunyelwe okulondoloziwe okwamanje.<br/>Bekela okuthunyelwe ku-Community feed ukuze ukuthole lapha.';
  ZU['profile.savedPosts.title'] = 'Okuthunyelwe Okulondoloziwe';
  ZU['profile.skills.add'] = 'Engeza Ikhono';
  ZU['profile.verification.done'] = 'Kuqinisekisiwe';
  ZU['profile.verification.none'] = 'Akwengeziwe';
  ZU['profile.verification.pending'] = 'Kusalindiwe';
  ZU['profile.worker.about.title'] = 'Mayelana Nami';
  ZU['profile.worker.actions.browse'] = 'Cinga Imisebenzi';
  ZU['profile.worker.actions.edit'] = 'Hlela Iphrofayela';
  ZU['profile.worker.cv.title'] = 'I-CV';
  ZU['profile.worker.meta.member'] = 'Ilungu kusukela';
  ZU['profile.worker.meta.tasks'] = 'imisebenzi eqediwe';
  ZU['profile.worker.passport.barLabel'] = 'imisebenzi eqediwe';
  ZU['profile.worker.passport.title'] = 'I-SKILL PASSPORT';
  ZU['profile.worker.portfolio.viewLink'] = 'Buka Isixhumanisi';
  ZU['profile.worker.skills.title'] = 'Amakhono';
  ZU['profile.worker.tabs.about'] = 'Mayelana';
  ZU['profile.worker.tabs.growth'] = 'Uhambo Lokukhula';
  ZU['profile.worker.growth.title'] = 'Uhambo Lwakho Lokukhula';
  ZU['profile.worker.growth.subtitle'] = 'Umugqa wesikhathi wezigaba zangempela ku-YoungMerit.';
  ZU['profile.worker.growth.joined.title'] = 'Ujoyine i-YoungMerit';
  ZU['profile.worker.growth.joined.desc'] = 'Lapho uhambo lwakho lwaqala khona.';
  ZU['profile.worker.growth.verified.title'] = 'Ubunikazi Buqinisekisiwe';
  ZU['profile.worker.growth.verified.desc.done'] = 'Ubunikazi bakho buqinisekisiwe.';
  ZU['profile.worker.growth.verified.desc.pending'] = 'Ukuqinisekiswa kwakho kusabuyekezwa.';
  ZU['profile.worker.growth.verified.desc.locked'] = 'Qinisekisa ubunikazi bakho ukuze uvule lesi sigaba.';
  ZU['profile.worker.growth.verified.cta'] = 'Qinisekisa manje';
  ZU['profile.worker.growth.firstTask.title'] = 'Umsebenzi Wokuqala Uqediwe';
  ZU['profile.worker.growth.firstTask.desc.done'] = 'Uthumele umsebenzi wakho wokuqala.';
  ZU['profile.worker.growth.firstTask.desc.locked'] = 'Qedela umsebenzi wakho wokuqala ukuze uvule lesi sigaba.';
  ZU['profile.worker.growth.firstTask.cta'] = 'Phequlula imisebenzi';
  ZU['profile.worker.growth.portfolio.title'] = 'Umsebenzi Owuboniso Ukhonjisiwe';
  ZU['profile.worker.growth.portfolio.desc.done'] = 'Wengeze into yakho yokuqala emsebenzini owuboniso.';
  ZU['profile.worker.growth.portfolio.desc.locked'] = 'Yengeza into emsebenzini wakho owuboniso ukuze uvule lesi sigaba.';
  ZU['profile.worker.growth.portfolio.cta'] = 'Yengeza emsebenzini owuboniso';
  ZU['profile.worker.growth.levelVerified.title'] = 'Ufinyelele ku-Verified';
  ZU['profile.worker.growth.levelVerified.desc.done'] = 'Uvule ibheji le-Verified.';
  ZU['profile.worker.growth.levelTrusted.title'] = 'Ufinyelele ku-Trusted';
  ZU['profile.worker.growth.levelTrusted.desc.done'] = 'Uvule ibheji le-Trusted.';
  ZU['profile.worker.growth.levelElite.title'] = 'Ufinyelele ku-Elite';
  ZU['profile.worker.growth.levelElite.desc.done'] = 'Ufinyelele ezingeni eliphezulu kakhulu ku-YoungMerit.';
  ZU['profile.worker.growth.level.progress'] = '{current}/{target} imisebenzi eqediwe';
  ZU['profile.worker.tabs.portfolio'] = 'Umsebenzi Owuboniso';
  ZU['profile.worker.tabs.saved'] = 'Okuthunyelwe Okulondoloziwe';
  ZU['profile.worker.tabs.tasks'] = 'Umlando Womsebenzi';
  ZU['profile.worker.tasks.count'] = 'imisebenzi';
  ZU['profile.worker.tasks.title'] = 'Imisebenzi Eqediwe';
  ZU['profile.biz.about.empty'] = 'Chofoza ukwengeza incazelo yebhizinisi.';
  ZU['profile.biz.applicants.empty'] = 'Abafakizicelo bavela lapha uma usunohlu lomsebenzi olusaqhubekayo.';
  ZU['profile.biz.applicants.shortlist'] = 'Khetha';
  ZU['profile.biz.history.empty'] = 'Awukho umsebenzi oqediwe okwamanje.';
  ZU['profile.biz.postings.actions.close'] = 'Vala';
  ZU['profile.biz.postings.actions.edit'] = 'Hlela';
  ZU['profile.biz.postings.actions.viewApplicants'] = 'Buka Abafakizicelo';
  ZU['profile.biz.postings.browse'] = 'Thumela Umsebenzi Wakho Wokuqala';
  ZU['profile.biz.postings.empty'] = 'Awukho uhlu olusebenzayo.';
  ZU['profile.biz.postings.status.closed'] = 'Kuvaliwe';
  ZU['profile.biz.postings.status.live'] = 'Kuyasebenza';
  ZU['profile.biz.postings.status.review'] = 'Kuyabuyekezwa';
  ZU['profile.biz.sidebar.details.industry'] = 'Imboni';
  ZU['profile.biz.sidebar.details.location'] = 'Indawo';
  ZU['profile.biz.sidebar.details.size'] = 'Usayizi Wenkampani';
  ZU['profile.biz.sidebar.details.title'] = 'Imininingwane Yenkampani';
  ZU['profile.biz.sidebar.details.website'] = 'Iwebhusayithi';
  ZU['profile.biz.sidebar.post.cta'] = 'Thumela Umsebenzi Omusha';
  ZU['profile.biz.sidebar.post.desc'] = 'Thola umuntu ofanele iphrojekthi yakho elandelayo. Izimali zigcinwa nge-escrow kuze uvumele.';
  ZU['profile.biz.sidebar.post.title'] = 'THUMELA UMSEBENZI';
  ZU['profile.biz.sidebar.verification.company'] = 'Ukubhaliswa Kwenkampani';
  ZU['profile.biz.sidebar.verification.email'] = 'I-imeyili';
  ZU['profile.biz.sidebar.verification.identity'] = 'Ubunikazi';
  ZU['profile.biz.sidebar.verification.payment'] = 'Indlela Yokukhokha';
  ZU['profile.biz.sidebar.verification.title'] = 'Isimo Sokuqinisekiswa';
  ZU['profile.biz.sidebar.wallet.available'] = 'Okutholakalayo Ukusetshenziswa';
  ZU['profile.biz.sidebar.wallet.balance'] = 'Ibhalansi Yesikhwama';
  ZU['profile.biz.sidebar.wallet.escrow'] = 'nge-escrow';
  ZU['profile.biz.sidebar.wallet.history'] = 'Umlando';
  ZU['profile.biz.sidebar.wallet.topup'] = 'Faka Imali';
  ZU['profile.biz.skills.add'] = 'Engeza Ilebula';
  ZU['profile.worker.about.empty'] = 'Chofoza ukwengeza i-bio.';
  ZU['profile.worker.applications.browse'] = 'Cinga Imisebenzi';
  ZU['profile.worker.applications.empty'] = 'Azikho izicelo ezisebenzayo.';
  ZU['profile.worker.applications.status.review'] = 'Kuyabuyekezwa';
  ZU['profile.worker.applications.status.shortlisted'] = 'Ukhethiwe';
  ZU['profile.worker.cv.note'] = 'I-PDF, DOC noma DOCX · Okuphakeme kungu-5MB · Akuphoqelekile kodwa kwandisa izinga lokuqashwa';
  ZU['profile.worker.cv.zone'] = 'Layisha i-CV yakho';
  ZU['profile.worker.portfolio.add'] = 'Engeza izixhumanisi noma izithombe ukukhombisa umsebenzi wakho kubaqashi.';
  ZU['profile.worker.portfolio.cta'] = 'Engeza Into Yomsebenzi Owuboniso';
  ZU['profile.worker.portfolio.empty'] = 'Azikho izinto zomsebenzi owuboniso okwamanje.';
  ZU['profile.worker.sidebar.applications'] = 'Izicelo Ezisebenzayo';
  ZU['profile.worker.sidebar.details.age'] = 'Iminyaka';
  ZU['profile.worker.sidebar.details.education'] = 'Imfundo';
  ZU['profile.worker.sidebar.details.languages'] = 'Izilimi';
  ZU['profile.worker.sidebar.details.location'] = 'Indawo';
  ZU['profile.worker.sidebar.details.title'] = 'Imininingwane Yephrofayela';
  ZU['profile.worker.sidebar.verification.bank'] = 'I-akhawunti Yasebhange';
  ZU['profile.worker.sidebar.verification.email'] = 'I-imeyili';
  ZU['profile.worker.sidebar.verification.identity'] = 'Ubunikazi';
  ZU['profile.worker.sidebar.verification.phone'] = 'Ucingo';
  ZU['profile.worker.sidebar.verification.title'] = 'Isimo Sokuqinisekiswa';
  ZU['profile.worker.sidebar.wallet.available'] = 'Okutholakalayo Ukukhishwa';
  ZU['profile.worker.sidebar.wallet.balance'] = 'Ibhalansi Yesikhwama';
  ZU['profile.worker.sidebar.wallet.history'] = 'Umlando';
  ZU['profile.worker.sidebar.wallet.withdraw'] = 'Khipha';
  ZU['profile.worker.skills.add'] = 'Engeza Ikhono';
  ZU['profile.worker.tasks.browse'] = 'Cinga Imisebenzi Etholakalayo';
  ZU['profile.worker.tasks.empty'] = 'Awukho umsebenzi oqediwe okwamanje.';
  // ---- careers.* ----
  ZU['careers.hero.breadcrumb'] = 'Imisebenzi';
  ZU['careers.hero.eyebrow'] = 'Joyina Iqembu';
  ZU['careers.hero.title'] = 'YAKHA IKUSASA LOMSEBENZI<br/><span class="accent">WASE-AFRICA.</span>';
  ZU['careers.hero.desc'] = 'Siyiqembu elincane elinemigomo emikhulu — sixhumanisa izigidi zentsha namathuba angempela omnotho emazweni ayisithupha. Woza usisize sikwakhe.';
  ZU['careers.stats.countries'] = 'Amazwe Asebenzayo';
  ZU['careers.stats.team'] = 'Usayizi Weqembu';
  ZU['careers.stats.remote'] = 'Ukusebenza Kude Kuqala';
  ZU['careers.stats.earlyVal'] = 'Kusekuqaleni';
  ZU['careers.stats.ownership'] = 'Ubunikazi Bangempela';
  ZU['careers.values.eyebrow'] = 'Indlela Esisebenza Ngayo';
  ZU['careers.values.title'] = 'INDLELA <span class="accent">ESISEBENZA NGAYO.</span>';
  ZU['careers.values.1.title'] = 'Ukucabanga Kokuqala i-Africa';
  ZU['careers.values.1.desc'] = 'Sakhela izimo zangempela — ukuxhumana okuguquguqukayo, abasebenzisi bocingo abaqavile, kanye nezimo zomthetho ezahlukene emazweni ayi-6.';
  ZU['careers.values.2.title'] = 'Abakhi, Hhayi Abasebenzi Bomshuwalense';
  ZU['careers.values.2.desc'] = 'Iqembu elincane, isikhala esikhulu. Wonke umuntu uyaletha. Azikho izigaba zemvume phakathi komqondo nomsebenzisi.';
  ZU['careers.values.3.title'] = 'Ukwethenjwa Njengomkhiqizo';
  ZU['careers.values.3.desc'] = 'Sakha ingqalasizinda yokwethenjwa. Lokho kusho ukuthi sizibeka izinga eliphezulu ngokungajwayelekile ekuphephiseni, ubumfihlo, nobulungisa.';
  ZU['careers.values.4.title'] = 'Umqondo Wobunikazi';
  ZU['careers.values.4.desc'] = 'Esigabeni sokuqala, izinqumo zakho zibumba inkampani ngempela. Sabelana ngobunikazi ngendlela ebalulekile, hhayi nje ngophawu.';
  ZU['careers.roles.eyebrow'] = 'Izikhundla Ezivulekile';
  ZU['careers.roles.title'] = 'IZIKHUNDLA <span class="accent">ZAMANJE.</span>';
  ZU['careers.roles.empty.title'] = 'AZIKHO IZIKHUNDLA EZIVULEKILE NJENGAMANJE';
  ZU['careers.roles.empty.desc'] = 'Sigxile ngokuphelele ekwakheni. Lapho sesilungele ukukhulisa iqembu, sizoyithumela lapha kuqala — futhi sithumele i-imeyili kubo bonke ababhalisile ngezansi.';
  ZU['careers.roles.notify'] = 'Ngazise';
  ZU['careers.roles.success'] = 'Usohlwini. Sizoxhumana nawe.';
  ZU['careers.perks.eyebrow'] = 'Esikunikezayo';
  ZU['careers.perks.title'] = 'OKUZOTHOLA.';
  ZU['careers.perks.1.title'] = 'Ukusebenza Kude Kuqala, Kuhambisana Nesikhathi Esahlukene';
  ZU['careers.perks.1.desc'] = 'Sebenza noma yikuphi e-Afrika — noma ngale kwayo lapho kusemthethweni. Sikwethemba ukuphatha isikhathi sakho.';
  ZU['careers.perks.2.title'] = 'Ubunikazi Obubalulekile';
  ZU['careers.perks.2.desc'] = 'Ubunikazi bangempela, obuvela phezu kweminyaka emine ngesikhathi sonyaka owodwa sokulinda. Hhayi uphawu — kwakhelwe.';
  ZU['careers.perks.3.title'] = 'Isabelomali Sokufunda';
  ZU['careers.perks.3.desc'] = 'I-R12,000 ngonyaka wezifundo, izincwadi, noma izingqungquthela — kusebenzise ngendlela ekusiza kakhulu.';
  ZU['careers.perks.4.title'] = 'Isabelomali Sehhovisi Lasekhaya';
  ZU['careers.perks.4.desc'] = 'Imali yokuxhasa impahla ukwakha isikhala somsebenzi osidingayo kusukela osukwini lokuqala.';
  ZU['careers.perks.5.title'] = 'Umthelela Oyiqiniso';
  ZU['careers.perks.5.desc'] = 'Sonke isinqumo somkhiqizo sithinta intsha yangempela nekusasa layo lomnotho — hhayi izibalo zokuziqhenya.';
  ZU['careers.perks.6.title'] = 'Inzuzo Yeqembu Elincane';
  ZU['careers.perks.6.desc'] = 'Ukufinyelela ngqo kubasunguli, akukho ukuphathwa okuphakathi, inkululeko yangempela kusukela ngeviki lokuqala.';
  // ---- contact.* ----
  ZU['contact.hero.breadcrumb'] = 'Xhumana Nathi';
  ZU['contact.form.topic.routedPrefix'] = 'Lokhu kuzothunyelwa ku';
  ZU['contact.sidebar.press.response'] = 'Impendulo phakathi kwezinsuku ezimbili zebhizinisi';
  ZU['contact.success.refLabel'] = 'Inombolo yakho yereferensi ithi:';
  ZU['contact.hero.eyebrow'] = 'Ngokuvamile siphendula ngosuku olulodwa lwebhizinisi';
  ZU['contact.hero.title'] = 'ASIXOXE.';
  ZU['contact.hero.desc'] = 'Noma unombuzo, inkinga, noma indaba ongafuna ukwabelana ngayo — <strong>sitshele ukuthi kwenzekani</strong> futhi sizoyithumela kumuntu ofanele. Azikho ama-bot, azikho izinhlu ezingapheli.';
  ZU['contact.success.title'] = 'UMLAYEZO UTHUNYELWE.';
  ZU['contact.success.desc'] = 'Sithumele isiqinisekiso ku-imeyili yakho. Ithimba lethu ngokuvamile liphendula phakathi kosuku olulodwa lwebhizinisi — ngokushesha ezindabeni eziphuthumayo zempikiswano noma zokuphepha.';
  ZU['contact.success.btn'] = 'Buyela Ekhaya';
  ZU['contact.form.title'] = 'SITHUMELELE UMLAYEZO';
  ZU['contact.form.desc'] = 'Gcwalisa ifomu elingezansi. Amasimu abekwe uphawu <span class="required-mark">*</span> ayadingeka.';
  ZU['contact.form.rateLimit'] = 'Ukuthunyelwa okuningi kakhulu. Sicela ulinde ngaphambi kokuzama futhi.';
  ZU['contact.form.topic.label'] = 'Kumayelana nani lokhu? <span class="required-mark">*</span>';
  ZU['contact.form.topic.general'] = 'Usizo Oluvamile';
  ZU['contact.form.topic.general.desc'] = 'I-akhawunti, uhlelo, usizo lobuchwepheshe';
  ZU['contact.form.topic.business'] = 'Umbuzo Wamabhizinisi';
  ZU['contact.form.topic.business.desc'] = 'Ukuqasha, ubudlelwane, ibhizinisi';
  ZU['contact.form.topic.dispute'] = 'Usizo Lwempikiswano';
  ZU['contact.form.topic.dispute.desc'] = 'Inkinga yomsebenzi, inkokhelo noma i-escrow';
  ZU['contact.form.topic.press'] = 'Amaphephandaba Nemidiya';
  ZU['contact.form.topic.press.desc'] = 'Izingxoxo, ithuluzi lamaphephandaba, izingcaphuno';
  ZU['contact.form.topic.privacy'] = 'Ubumfihlo Nedatha';
  ZU['contact.form.topic.privacy.desc'] = 'Izicelo zedatha, imibuzo yobumfihlo';
  ZU['contact.form.topic.other'] = 'Okunye';
  ZU['contact.form.topic.other.desc'] = 'Noma yini engekho ohlwini olungenhla';
  ZU['contact.form.topic.routed'] = 'Lokhu kuzothunyelwa ku-<strong>support@youngmerit.com</strong>';
  ZU['contact.form.name'] = 'Igama Eliphelele <span class="required-mark">*</span>';
  ZU['contact.form.name.error'] = 'Sicela ufake igama lakho eliphelele.';
  ZU['contact.form.email'] = 'Ikheli Le-imeyili <span class="required-mark">*</span>';
  ZU['contact.form.email.error'] = 'Sicela ufake ikheli le-imeyili elisebenzayo.';
  ZU['contact.form.role'] = 'Ngingu';
  ZU['contact.form.role.placeholder'] = 'Khetha okukodwa (akuphoqelekile)';
  ZU['contact.form.role.worker'] = 'Umsebenzi';
  ZU['contact.form.role.business'] = 'Ibhizinisi';
  ZU['contact.form.role.guest'] = 'Angikabi yilungu';
  ZU['contact.form.role.journalist'] = 'Intatheli noma umculi wezindaba';
  ZU['contact.form.role.other'] = 'Okunye';
  ZU['contact.form.reference'] = 'Ireferensi Yomsebenzi Noma Yecala';
  ZU['contact.form.reference.hint'] = 'Kudingeka kuphela uma umlayezo wakho uhlobene nomsebenzi othile noma impikiswano.';
  ZU['contact.form.subject'] = 'Isihloko <span class="required-mark">*</span>';
  ZU['contact.form.subject.error'] = 'Sicela ufake isihloko.';
  ZU['contact.form.message'] = 'Umlayezo Wakho <span class="required-mark">*</span>';
  ZU['contact.form.message.error'] = 'Sicela ufake umlayezo (okungenani izinhlamvu ezingu-20).';
  ZU['contact.form.attachment'] = 'Isithasiselo (Akuphoqelekile)';
  ZU['contact.form.attachment.hint'] = 'Chofoza ukuze uhlanganise isithombe se-screenshot noma ifayela — okuphakeme kungu-10MB';
  ZU['contact.form.human'] = 'Angisiyo iroboti';
  ZU['contact.form.consent'] = 'Ngiyavuma ku-<a href="privacy-policy.html">Inqubomgomo Yobumfihlo</a> ye-YOUNGMERIT futhi ngivumela ukuxhunyaniswa mayelana nalo mbuzo nge-imeyili.';
  ZU['contact.form.cta'] = 'Thumela Umlayezo';
  ZU['contact.sidebar.general.title'] = 'Usizo Oluvamile';
  ZU['contact.sidebar.general.desc'] = 'Izinkinga ze-akhawunti, imibuzo yohlelo, noma yini yansuku zonke.';
  ZU['contact.sidebar.general.response'] = 'Impendulo phakathi kosuku olulodwa lwebhizinisi';
  ZU['contact.sidebar.business.title'] = 'Amabhizinisi Nobudlelwane';
  ZU['contact.sidebar.business.desc'] = 'Ukuqasha kwamabhizinisi, ukuhlanganiswa, iziphakamiso zobudlelwano.';
  ZU['contact.sidebar.business.response'] = 'Impendulo phakathi kwezinsuku ezimbili zebhizinisi';
  ZU['contact.sidebar.dispute.title'] = 'Izimpikiswano';
  ZU['contact.sidebar.dispute.desc'] = 'Amacala empikiswano asebenzayo nezinkinga ezihlobene ne-escrow.';
  ZU['contact.sidebar.dispute.note'] = 'Noma sebenzisa i-<a href="dispute-system.html" style="color:var(--amber);">Uhlelo Lwezimpikiswano</a>';
  ZU['contact.sidebar.press.title'] = 'Amaphephandaba Nemidiya';
  ZU['contact.sidebar.press.desc'] = 'Izicelo zezingxoxo, ithuluzi lamaphephandaba, imibuzo yemidiya.';
  ZU['contact.sidebar.privacy.title'] = 'Ubumfihlo Nokuvikelwa Kwedatha';
  ZU['contact.sidebar.privacy.desc'] = 'Ukufinyelela kwedatha, izicelo zokususa, nemibuzo yobumfihlo.';
  ZU['contact.sidebar.privacy.response'] = 'Impendulo phakathi kwezinsuku ezinhlanu zebhizinisi';
  ZU['contact.sidebar.response.title'] = 'Izikhathi Zempendulo Ezivamile';
  ZU['contact.sidebar.response.general'] = 'Usizo Oluvamile';
  ZU['contact.sidebar.response.general.time'] = 'Usuku olulodwa lwebhizinisi';
  ZU['contact.sidebar.response.dispute'] = 'Amacala Empikiswano';
  ZU['contact.sidebar.response.dispute.time'] = 'Usuku olulodwa lwebhizinisi';
  ZU['contact.sidebar.response.business'] = 'Imibuzo Yamabhizinisi';
  ZU['contact.sidebar.response.business.time'] = 'Izinsuku ezimbili zebhizinisi';
  ZU['contact.sidebar.response.press'] = 'Amaphephandaba Nemidiya';
  ZU['contact.sidebar.response.press.time'] = 'Izinsuku ezimbili zebhizinisi';
  ZU['contact.sidebar.response.privacy'] = 'Izicelo Zobumfihlo';
  ZU['contact.sidebar.response.privacy.time'] = 'Izinsuku ezinhlanu zebhizinisi';
  ZU['contact.sidebar.office'] = 'Usizo lutholakala uMsombuluko kuya kuLwesihlanu, kusukela ngo-08:00 kuya ku-18:00 SAST';
  ZU['contact.sidebar.languages'] = 'Siphendula ngesiNgisi, isiMandarin, isiFrench, nesiSpanish';
  ZU['contact.faq.title'] = 'NGAPHAMBI KOKUBHALA';
  ZU['contact.faq.desc'] = 'Izimpendulo ezimbalwa ezisheshayo ezingakusindisa ekulindeni.';
  ZU['contact.faq.q1'] = 'Nginempikiswano esebenzayo. Ngihlola kuphi isimo sayo?';
  ZU['contact.faq.a1'] = 'Sebenzisa ikhasi le-<a href="dispute-system.html" style="color:var(--amber);">Uhlelo Lwezimpikiswano</a> bese uchofoza "Landelela Icala Lakho" ngenombolo yakho yereferensi. Lokhu kukunikeza isibuyekezo sesimo esiphilayo ngokushesha kunokulinda impendulo ye-imeyili.';
  ZU['contact.faq.q2'] = 'Ngidinga ukuqinisekisa ubunikazi bami. Yileli yini indawo efanele?';
  ZU['contact.faq.a2'] = 'Cha — iya ekhasini le-<a href="identity-verification.html" style="color:var(--amber);">Ukuqinisekiswa Kobunikazi</a> ukuze uqale leyo nqubo ngokuqondile. Uma ukuqinisekiswa kwehluleka noma unenkinga nedokhumenti, xhumana ne-support@youngmerit.com.';
  ZU['contact.faq.q3'] = 'Ngizoyithola ngokushesha kanjani ngempela impendulo?';
  ZU['contact.faq.a3'] = 'Iningi lemilayezo liphendulwa phakathi kosuku olulodwa lwebhizinisi. Izindaba zempikiswano nezokuphepha zibekwa phambili. Imibuzo yamaphephandaba namabhizinisi ingathatha izinsuku ezimbili zebhizinisi ngenxa yabasebenzi abambalwa kulawo mathimba.';
  ZU['contact.faq.q4'] = 'Ngingakwazi ukunishayela esikhundleni sokuthumela i-imeyili?';
  ZU['contact.faq.a4'] = 'Njengamanje siyithimba losizo oluqala nge-imeyili ukugcina irekhodi elibhaliwe lalo lonke icala, okusiza ikakhulukazi nezimpikiswano nezinkinga zenkokhelo. Usizo locingo lusohlelweni lwethu njengoba uhlelo lukhula.';
  // ---- resources.* ----
  ZU['resources.hero.breadcrumb'] = 'Izinsiza';
  ZU['resources.filter.browse'] = 'Cinga:';
  ZU['resources.card.read'] = 'Funda';
  ZU['resources.author.honeTeam'] = 'Ithimba';
  ZU['resources.mini1.title'] = 'Amakhono Amahlanu Adingekayo Kakhulu Emazweni Ayisithupha ngo-2026';
  ZU['resources.mini1.meta'] = '5 imizuzu — Kwabasebenzi';
  ZU['resources.mini2.title'] = 'Ukuqashwa Ngedumela Elizuziwe — Ukuphindwa Kwe-Q&A Ephilayo';
  ZU['resources.mini2.meta'] = '48 imizuzu — Ukubukwa okungu-1.2k';
  ZU['resources.mini3.title'] = 'Amabhizinisi Angathola Kanjani Amathalente Athembekile Ngokushesha';
  ZU['resources.mini3.meta'] = '3 imizuzu — Kumabhizinisi';
  ZU['resources.card1.title'] = 'Ukwakha Idumela Eliqinile Ezinsukwini Zakho Ezingu-30 Zokuqala';
  ZU['resources.card1.desc'] = 'Isinyathelo ngesinyathelo kusukela ekusetheni iphrofayela kuya kuphawu lakho Oliqinisekisiwe. Umhlahlandlela obaluleke kakhulu kuwo wonke umsebenzi omusha.';
  ZU['resources.card2.title'] = 'Amakhono Amahlanu Adingekayo Kakhulu Emazweni Ayisithupha ngo-2026';
  ZU['resources.card2.desc'] = 'Yimaphi amakhono abaphathi bokuqasha abawakhokhelayo ngempela njengamanje, kusukela eGoli kuya eBeijing.';
  ZU['resources.card3.title'] = 'Ukuqashwa Ngedumela Elizuziwe — Ukuphindwa Kwe-Q&A Ephilayo';
  ZU['resources.card3.desc'] = 'Buka indlela abasebenzi bethu abathathu abasuka ku-0 lemisebenzi baya emsebenzini ogcwele ngaphansi kwezinyanga eziyisithupha.';
  ZU['resources.card4.title'] = 'Imisebenzi Emihlanu Efanele Osaqalayo Ekhokha Ngcono Kunalokho Ocabangayo';
  ZU['resources.card4.desc'] = 'Ukufakwa kwedatha, ukuhlolwa kwe-AI, imibhalo yezokuxhumana — le misebenzi enesithiyo esiphansi inesidingo esikhulu nezilinganiso ezinhle.';
  ZU['resources.card5.title'] = 'Amabhizinisi Angathola Kanjani Amathalente Ezinga Eliphansi Athembekile Ngaphandle Kwengozi';
  ZU['resources.card5.desc'] = 'Umhlahlandlela ogcwele wokusebenzisa Amaphuzu Okwethenjwa ethu, izinqolobane zamathalente, kanye nohlelo lwe-escrow ukuqasha ngokuzethemba okugcwele.';
  ZU['resources.card6.title'] = 'Ukungabi Khona Kwemisebenzi Entsha eChina: Kungani Sihlukile';
  ZU['resources.card6.desc'] = 'Inhlekelele yokweqisa kwabaqedile isikole ichazwe kanye nendlela ubufakazi bomsebenzi obunqoba ngayo izidingo zolwazi.';
  ZU['resources.card7.title'] = 'Ukusebenzisa I-Skill Passport Yakho Ukuthola Umsebenzi Ogcwele';
  ZU['resources.card7.desc'] = 'I-Skill Passport yakho inamandla kune-CV. Nampa kanjani ukuyabelana nabaqashi.';
  ZU['resources.card8.title'] = 'Amathuluzi e-AI Wonke Umsebenzi Osemusha Okufanele Awazi ngo-2026';
  ZU['resources.card8.desc'] = 'I-ChatGPT, i-Canva AI, i-Gemini ne-Perplexity — yimaphi amathuluzi akwenza ukhangeleke kangcono nokuthi uwasebenzise kanjani.';
  ZU['resources.trend1.title'] = 'Imisebenzi Emihlanu ye-Canva Yosaqalayo Ekhokha Kahle';
  ZU['resources.trend1.meta'] = 'Umhlahlandlela — imizuzu emi-6';
  ZU['resources.trend2.title'] = 'Ukubhala Iphrofayela Ekuthola Umsebenzi';
  ZU['resources.trend2.meta'] = 'Ithiphu — imizuzu emi-3';
  ZU['resources.trend3.title'] = 'Ukuqonda Amaphuzu Akho Okwethenjwa';
  ZU['resources.trend3.meta'] = 'Isihloko — imizuzu emi-4';
  ZU['resources.trend4.title'] = 'Ukungabi Khona Kwemisebenzi Entsha eChina: Ukuthi Sisiza Kanjani';
  ZU['resources.trend4.meta'] = 'Isihloko — imizuzu emi-7';
  ZU['resources.trend5.title'] = 'Kusuka ku-Rookie Uye ku-Elite Ezinsukwini Ezingu-90';
  ZU['resources.trend5.meta'] = 'Umhlahlandlela — imizuzu emi-10';
  ZU['resources.webinar.register'] = 'BHALISA';
  ZU['resources.webinar1.title'] = 'Ukuthola Umsebenzi Wakho Wokuqala (I-Masterclass Yosaqalayo)';
  ZU['resources.webinar1.meta'] = '10:00 SAST — Mahhala';
  ZU['resources.webinar2.title'] = 'Ukuqasha Amathalente Ezinga Eliphansi Ngaphandle Kwengozi';
  ZU['resources.webinar2.meta'] = '14:00 GMT — Kumabhizinisi';
  ZU['resources.webinar3.title'] = 'Amathuluzi e-AI Wonke Umsebenzi Osemusha Okufanele Awazi ngo-2026';
  ZU['resources.webinar3.meta'] = '11:00 CST — Mahhala';
  ZU['resources.topic.careerEntry'] = 'Ukungena Emsebenzini';
  ZU['resources.topic.trustScore'] = 'Amaphuzu Okwethenjwa';
  ZU['resources.topic.aiTools'] = 'Amathuluzi e-AI';
  ZU['resources.topic.freelancing'] = 'Ukusebenza Ngokuzimela';
  ZU['resources.topic.hiringTips'] = 'Amathiphu Okuqasha';
  ZU['resources.topic.skillPassport'] = 'I-Skill Passport';
  ZU['resources.topic.dataEntry'] = 'Ukufakwa Kwedatha';
  ZU['resources.topic.resume'] = 'I-Resume';
  ZU['resources.topic.payments'] = 'Izinkokhelo';
  ZU['resources.hero.eyebrow'] = 'Isikhungo Solwazi';
  ZU['resources.hero.title'] = 'IMIHLAHLANDLELA, AMATHIPHU<br/>NAMATHULUZI OKUKHULA.';
  ZU['resources.hero.desc'] = 'Konke okudingayo ukuthola umsebenzi wakho wokuqala, wakhe idumela lakho futhi uqalise umsebenzi wakho wesikhathi eside — noma uthole futhi uphathe amathalente amahle.';
  ZU['resources.search.placeholder'] = 'Sesha imihlahlandlela, amathiphu, ama-webinar...';
  ZU['resources.search.btn'] = 'Sesha';
  ZU['resources.stats.guides'] = 'Imihlahlandlela Nezihloko';
  ZU['resources.stats.webinars'] = 'Ama-Webinar Nokuphindwa';
  ZU['resources.stats.tips'] = 'Amathiphu Nokufunda Okusheshayo';
  ZU['resources.stats.languages'] = 'Izilimi';
  ZU['resources.filter.all'] = 'Konke';
  ZU['resources.filter.guides'] = 'Imihlahlandlela';
  ZU['resources.filter.articles'] = 'Izihloko';
  ZU['resources.filter.tips'] = 'Amathiphu';
  ZU['resources.filter.webinars'] = 'Ama-Webinar';
  ZU['resources.filter.workers'] = 'Kwabasebenzi';
  ZU['resources.filter.businesses'] = 'Kumabhizinisi';
  ZU['resources.featured.tag'] = 'Umhlahlandlela Oqavile';
  ZU['resources.featured.title'] = 'UKWAKHA IDUMELA ELIQINILE EZINSUKWINI ZAKHO EZINGU-30 ZOKUQALA';
  ZU['resources.featured.desc'] = 'Inyanga yokuqala enkundleni yethu ibeka indlela yomsebenzi wakho wonke lapha. Lo mhlahlandlela wesinyathelo ngesinyathelo ukuhambisa ekusetheni iphrofayela, ukuthola umsebenzi wakho wokuqala, nokuzuza uphawu lwakho Oliqinisekisiwe.';
  ZU['resources.featured.badge'] = 'Umhlahlandlela';
  ZU['resources.featured.time'] = 'Ukufunda kwemizuzu emi-8';
  ZU['resources.featured.cta'] = 'Funda Umhlahlandlela';
  ZU['resources.sidebar.newsletter.title'] = 'Isifinyezo Sesonto';
  ZU['resources.sidebar.newsletter.desc'] = 'Thola imihlahlandlela emihle, amathiphu, nezeluleko zomsebenzi wesikhathi eside ngoMsombuluko.';
  ZU['resources.sidebar.newsletter.cta'] = 'Bhalisela Mahhala';
  ZU['resources.sidebar.trending.title'] = 'Okuthandwa Kuleli Viki';
  ZU['resources.sidebar.topics.title'] = 'Cinga Ngesihloko';
  ZU['resources.sidebar.webinars.title'] = 'Ama-Webinar Azayo';
  ZU['resources.cta.title'] = 'USULUNGELE<br/><span class="accent">UKUKUFAKAZELA?</span>';
  ZU['resources.cta.desc'] = 'Sebenzisa ulwazi lwakho olusha. Cinga imisebenzi futhi uqale ukwakha idumela lakho namuhla.';
  ZU['resources.cta.findWork'] = 'Funa Umsebenzi';
  ZU['resources.cta.hireTalent'] = 'Qasha Amathalente';
  // ---- idv.* ----
  ZU['idv.hero.breadcrumb'] = 'Ukuqinisekiswa Kobunikazi';
  ZU['idv.hero.eyebrow'] = 'Kuthatha ngaphansi kwemizuzu emi-3';
  ZU['idv.hero.title'] = 'AZI UBANI<br/>OSEBENZA<br/><span class="accent">NAYE.</span>';
  ZU['idv.hero.desc'] = 'Ukuqinisekiswa kobunikazi kuvikela <strong>wonke umuntu</strong> enkundleni yethu. Abasebenzi bayazi ukuthi amabhizinisi abasebenzela wona angempela. Amabhizinisi ayazi ukuthi amathalente awaqashayo angobani abathi bangobo. Uhlelo luhlala luphephile kubo bonke.';
  ZU['idv.hero.ctaVerify'] = 'Qinisekisa Ubunikazi Bami';
  ZU['idv.hero.ctaLearn'] = 'Funda Ukuthi Kungani';
  ZU['idv.hero.trust1'] = 'Idatha ayithengiswa';
  ZU['idv.hero.trust2'] = 'Kubethelwe nge-256-bit';
  ZU['idv.hero.trust3'] = 'Kuhambisana ne-GDPR ne-POPIA';
  ZU['idv.hero.trust4'] = 'Ngaphansi kwemizuzu emi-3';
  ZU['idv.strip1.title'] = 'Ngaphansi Kwemizuzu Emi-3';
  ZU['idv.strip1.desc'] = 'Qedela inqubo egcwele ngefoni yakho noma ikhompyutha';
  ZU['idv.strip2.title'] = 'Umhlinzeki Oqinisekisiwe';
  ZU['idv.strip2.desc'] = 'Kucutshungulwa ngumlingani wokuqinisekiswa kobunikazi oqinisekiswe yi-ISO 27001';
  ZU['idv.strip3.title'] = 'Akugcinwa Yithi';
  ZU['idv.strip3.desc'] = 'Izithombe zedokhumenti zicutshungulwa bese zisulwa — sigcina kuphela umphumela oqinisekisiwe';
  ZU['idv.strip4.title'] = 'Inqubo Yesikhathi Esisodwa';
  ZU['idv.strip4.desc'] = 'Qinisekisa kanye futhi isimo sakho sihamba kulo lonke uhlelo lwethu';
  ZU['idv.why.eyebrow'] = 'Kungani Kubalulekile';
  ZU['idv.why.title'] = 'UKWETHENJWA<br/>AKUCATSHANGELWA.<br/><span class="acc">KUYAKHIWA.</span>';
  ZU['idv.why.desc'] = 'Inkundla lapho noma ubani engathi ubani unganamba noma yini iyinkundla lapho okungeke kwethenjwe khona lutho. Ukuqinisekiswa kobunikazi kuyisisekelo esenza wonke amaphuzu okwethenjwa, konke ukubuyekezwa, nayo yonke inkokhelo enkundleni yethu kube nencazelo yangempela.';
  ZU['idv.why.card1.title'] = 'Abasebenzi Bayazi Ukuthi Ubani Obaqashayo';
  ZU['idv.why.card1.desc'] = 'Wonke umuntu webhizinisi othumela imisebenzi enkundleni yethu udlule ekuqinisekisweni kobunikazi nokuba yinhlangano. Abasebenzi abasoze bemukela umsebenzi ovela emthonjeni ongaziwa — bayazi kahle ukuthi basebenzela bani.';
  ZU['idv.why.card2.title'] = 'Amaphuzu Okwethenjwa Ahlobene Nabantu Bangempela';
  ZU['idv.why.card2.desc'] = 'Ngaphandle kokuqinisekiswa, amaphuzu okwethenjwa awanancazelo. Umsebenzisi angadala ama-akhawunti amaningi futhi aphambanise uhlelo. Ukuqinisekiswa kuhlanganisa konke ukubuyekezwa, wonke umsebenzi, kanye nazo zonke izilinganiso unomphela kumuntu oyedwa wangempela ohlukile.';
  ZU['idv.why.card3.title'] = 'Izinkokhelo Zivikelwe Kwiqili';
  ZU['idv.why.card3.desc'] = 'Iqili lokukhokha, ukuthathwa kwe-akhawunti, kanye nomsebenzi wezimbongolo zemali kuyizingozi ezinkulu kunoma iyiphi inkundla ehambisa imali. Ukuqinisekiswa kobunikazi kuyisivikelo sethu esinamandla kakhulu kuzo zontathu — kuvikela imali ehola wonke umsebenzi.';
  ZU['idv.why.card4.title'] = 'Idumela Lakho Ngelakho Wedwa';
  ZU['idv.why.card4.desc'] = 'Idumela lakho nathi ngelakho wena kuphela. Ukuqinisekiswa kuqinisekisa ukuthi akekho omunye ongadala i-akhawunti ethi ungubani wena, asebenzise igama lakho, noma acekele phansi umlando womsebenzi owakhile.';
  ZU['idv.why.card5.title'] = 'Ukuhambisana Nomthetho Emazweni Ayisithupha';
  ZU['idv.why.card5.desc'] = 'Ukusebenza emazweni ayisithupha kusho ukuthi kufanele sihlangabezane nezibopho ze-Anti-Money Laundering (AML) ne-Know Your Customer (KYC) kuwo wonke amakethe. Ukuqinisekiswa akukona ukukhetha — kuyisidingo somthetho enkundleni ehambisa imali.';
  ZU['idv.why.card6.title'] = 'Abaqashi Bakuthatha Njengento Ebalulekile';
  ZU['idv.why.card6.desc'] = 'Lapho umsebenzi oqinisekisiwe ehlanganyela i-Skill Passport yakhe nomqashi ozokuba khona, lowo mqashi uyazi ukuthi ubufakazi bomsebenzi obungemuva bunamathele ebunikazini bangempela, obuqinisekisiwe. Yilokho okwenza idumela eliqinisekisiwe libe nenani elingaphezu kwe-CV.';
  ZU['idv.check.eyebrow'] = 'Ukuvuleleka Okuphelele';
  ZU['idv.check.title'] = 'OKUCACILE<br/>ESIKUHLOLAYO<br/><span class="acc">NALOKHO ESINGAKUHLOLI.</span>';
  ZU['idv.check.desc'] = 'Sihlola kuphela lokho okudingekayo ukuqinisekisa ubunikazi bakho. Asiqoqi ulwazi lwezokwelapha, umlando wezezimali, amarekhodi obugebengu noma noma yini engaphezu kwalokho okuboniswe ngezansi.';
  ZU['idv.check.weVerify'] = 'Esikuqinisekisayo';
  ZU['idv.check.verify1.title'] = 'Ungumuntu wangempela';
  ZU['idv.check.verify1.desc'] = 'Siqinisekisa ukuthi idokhumenti yakho ekhishwe uhulumeni iyiqiniso futhi ayiphelelwanga isikhathi, nokuthi i-selfie iyafana nesithombe esikudokhumenti.';
  ZU['idv.check.verify2.title'] = 'Uneminyaka engu-18 noma ngaphezulu';
  ZU['idv.check.verify2.desc'] = 'Siqinisekisa ukuthi usuku lwakho lokuzalwa oludokhumenti luqinisekisa ukuthi uhlangabezana nesidingo seminyaka esincane sohlelo.';
  ZU['idv.check.verify3.title'] = 'Igama lakho liyafana ne-akhawunti yakho';
  ZU['idv.check.verify3.desc'] = 'Igama elikudokhumenti lakho kufanele lifane negama obhalise ngalo. Lokhu kuvimbela ukuzenza omunye umuntu nokwabelana nge-akhawunti.';
  ZU['idv.check.verify4.title'] = 'Idokhumenti ayishintshwanga';
  ZU['idv.check.verify4.desc'] = 'Ababuyekezi bethu bahlola ukuphambana kwedijithali, umbhalo oshintshiwe, kanye nokungahambisani ezicini zokuphepha zedokhumenti.';
  ZU['idv.check.verify5.title'] = 'Awukaqinisekiswa ngaphansi kwenye i-akhawunti';
  ZU['idv.check.verify5.desc'] = 'Umuntu ngamunye angaba ne-akhawunti eyodwa kuphela eqinisekisiwe. Ama-akhawunti aphindwe kabili kuwukwephula uhlelo.';
  ZU['idv.check.doNotCheck'] = 'Esingakuhloli';
  ZU['idv.check.not1.title'] = 'Irekhodi lobugebengu';
  ZU['idv.check.not1.desc'] = 'Asenzi ukuhlolwa kwemilando yobugebengu. Siyinkundla yomsebenzi, hhayi inkonzo yokuhlungwa kwabaqashwa.';
  ZU['idv.check.not2.title'] = 'Umlando wesikweletu noma amarekhodi ezezimali';
  ZU['idv.check.not2.desc'] = 'Asinakho ukufinyelela kumaphuzu akho esikweletu, umlando we-akhawunti yasebhange, noma isimo sezimali. Siqinisekisa kuphela ukuthi ungubani.';
  ZU['idv.check.not3.title'] = 'Ulwazi lwezokwelapha noma lwempilo';
  ZU['idv.check.not3.desc'] = 'Akukho idatha yezokwelapha ecelwa, iqoqwa, noma iqondaniswa nanoma yisiphi isikhathi ngesikhathi senqubo yokuqinisekiswa.';
  ZU['idv.check.not4.title'] = 'Ezokuxhumana noma ubukhona bku-inthanethi';
  ZU['idv.check.not4.desc'] = 'Asibheki ama-akhawunti akho ezokuxhumana, asikuseshi ku-inthanethi, futhi asifinyeleli kunoma iyiphi idatha ngale kwenqubo yokuqinisekiswa.';
  ZU['idv.check.not5.title'] = 'Amaphrofayela ebhayomethriki noma izizinda zedatha zokubona ubuso';
  ZU['idv.check.not5.desc'] = 'I-selfie yakho isetshenziselwa kuphela ukufaniswa ubuso bakho nesithombe esikudokhumenti lakho. Alukho uphrofayela lokubona ubuso oludalwa noma olugcinwa.';
  ZU['idv.process.eyebrow'] = 'Isinyathelo Ngesinyathelo';
  ZU['idv.process.title'] = 'UKUQINISEKISWA<br/><span class="acc">KUSEBENZA KANJANI.</span>';
  ZU['idv.process.desc'] = 'Izinyathelo ezine ezisheshayo. Konke kwenzeka kudivayisi yakho. Inqubo yonke ithatha ngaphansi kwemizuzu emithathu.';
  ZU['idv.process.step1.title'] = 'Khetha Idokhumenti Yakho';
  ZU['idv.process.step1.desc'] = 'Khetha uhlobo lwesitifiketi ozosisebenzisa — ikhadi lobunikazi bezwe, ipasi, noma ilayisensi yokushayela. Amadokhumenti ahlukene asekelwa ngamazwe.';
  ZU['idv.process.step1.tag'] = 'Kudivayisi';
  ZU['idv.process.step2.title'] = 'Skena Idokhumenti';
  ZU['idv.process.step2.desc'] = 'Bamba idokhumenti yakho phambi kwekhamera yedivayisi yakho. Uhlelo lwethu luthwebula ngaphambili nangemuva. Isiqondiso sinikezwa ngesikhathi sangempela.';
  ZU['idv.process.step2.tag'] = 'Ngaphansi Kwemizuzwana Engu-60';
  ZU['idv.process.step3.title'] = 'Thatha i-Selfie';
  ZU['idv.process.step3.desc'] = 'Ukuhlolwa okusheshayo kokuphila — uzocelwa uphaqaze noma uphendule ikhanda ukuqinisekisa ukuthi ukhona ngokomzimba. Akudingeki impahla ekhethekile.';
  ZU['idv.process.step3.tag'] = 'Ukuhlolwa Kokuphila';
  ZU['idv.process.step4.title'] = 'Isinqumo Esisheshayo';
  ZU['idv.process.step4.desc'] = 'Iningi lokuqinisekiswa livunyelwa ngokushesha. Uma kudingeka ukubuyekezwa okwenziwa ngumuntu, uzokwaziswa phakathi kwamahora angu-24. Iphrofayela yakho iyavulwa uma ivunyelwe.';
  ZU['idv.process.step4.tag'] = 'Ngokushesha noma amahora angu-24';
  ZU['idv.docs.eyebrow'] = 'Amadokhumenti Amukelwayo';
  ZU['idv.docs.title'] = 'OZOKUDINGA.';
  ZU['idv.docs.desc'] = 'Samukela izitifiketi ezinesithombe ezikhishwe uhulumeni kuwo wonke amazwe ayisithupha lapho sisebenza khona. Amadokhumenti kufanele abe amasha futhi angaphelelwanga isikhathi.';
  ZU['idv.docs.national.title'] = 'Ikhadi Lobunikazi Bezwe';
  ZU['idv.docs.national.desc'] = 'Kwamukelwa eNingizimu Afrika (Incwadi Ye-ID Eluhlaza kanye Nekhadi Le-Smart ID), eFrance (Carte Nationale d\'Identite), eSpain (Documento Nacional de Identidad), naseChina (Ikhadi Lobunikazi Lomhlali).';
  ZU['idv.docs.national.badge'] = 'Okuvame Kakhulu';
  ZU['idv.docs.passport.title'] = 'Ipasi';
  ZU['idv.docs.passport.desc'] = 'Amapasi omhlaba avunyelwa kuwo wonke amazwe ayisithupha. Ikhasi ledatha yomlando kanye nekhasi lesithombe kufanele kubonakale kahle kokubili. Kuvunyelwe emhlabeni wonke — kufanele kakhulu kubasebenzi bamazwe ngamazwe.';
  ZU['idv.docs.passport.badge'] = 'Kwamukelwa Kuwo Wonke Amazwe';
  ZU['idv.docs.drivers.title'] = 'Ilayisensi Yokushayela';
  ZU['idv.docs.drivers.desc'] = 'Kwamukelwa eNingizimu Afrika, e-United States, e-United Kingdom, naseFrance. Kufanele kufake isithombe nosuku lokuzalwa. Kwamukelwa njengedokhumenti yesibili lapho i-ID yezwe ingatholakali.';
  ZU['idv.docs.drivers.badge'] = 'Amazwe Akhethiwe';
  ZU['idv.docs.residence.title'] = 'Imvume Yokuhlala';
  ZU['idv.docs.residence.desc'] = 'Izimvume zokuhlala ze-biometric zamukelwa e-United Kingdom nasemazweni akhethiwe e-European Union kwabezizwe abahlala futhi basebenza kuleyo mikhawulo yezwe.';
  ZU['idv.docs.residence.badge'] = 'i-UK ne-EU';
  ZU['idv.docs.business.title'] = 'Idokhumenti Yokubhaliswa Kwebhizinisi';
  ZU['idv.docs.business.desc'] = 'Ama-akhawunti ebhizinisi: isitifiketi sokubhaliswa kwenkampani noma idokhumenti elilinganayo kusuka embhalweni wenkampani yesizwe efanele. Kudingeka kanye nokuqinisekiswa kobunikazi bommeleli ogunyaziwe.';
  ZU['idv.docs.business.badge'] = 'Ama-akhawunti Ebhizinisi';
  ZU['idv.docs.other.title'] = 'Idokhumenti Engekho Ohlwini?';
  ZU['idv.docs.other.desc'] = 'Xhumana neqembu lethu losizo lokuqinisekiswa ku-verify@youngmerit.com. Singaba nokwamukela amadokhumenti amanye ngokwecala ngalinye kubasebenzisi asemikhawulweni yezwe enokukhethwa okulinganiselwe kwe-ID ejwayelekile.';
  ZU['idv.docs.other.badge'] = 'Sithinte';
  ZU['idv.docs.countries.label'] = 'Kwamukelwa kusukela';
  ZU['idv.privacy.eyebrow'] = 'Ubumfihlo Bakho';
  ZU['idv.privacy.title'] = 'IDATHA YAKHO.<br/>UKULAWULA <span class="acc">KWAKHO.</span>';
  ZU['idv.privacy.desc'] = 'Sithatha ubumfihlo njengento ebalulekile kuso sonke isinyathelo. Inqubo yokuqinisekiswa kobunikazi yakhelwe ukuqoqa ulwazi oluncane oludingekayo futhi akukho okunye. Nayi indlela ngqo idatha yakho ephathwa ngayo.';
  ZU['idv.privacy.cta'] = 'Funda Inqubomgomo Yobumfihlo Ephelele';
  ZU['idv.privacy.item1.title'] = 'Izithombe zedokhumenti azigcinwa yithi';
  ZU['idv.privacy.item1.desc'] = 'Izithombe zakho ze-ID kanye ne-selfie zithunyelwa ngqo kumlingani wethu wokuqinisekiswa oqinisekisiwe, kucutshungulwe ukuqinisekisa ubunikazi bakho bese kususwa unomphela. Sithola kuphela umphumela wokuqinisekiswa: kuvunyelwe, kwenqatshiwe, noma kusalindiwe.';
  ZU['idv.privacy.item2.title'] = 'Yonke idatha ibethelwe kusukela ekuqaleni kuya ekugcineni';
  ZU['idv.privacy.item2.desc'] = 'Konke okudluliswayo ngesikhathi sokuqinisekiswa kubethelwe kusetshenziswa i-TLS 1.3. Umlingani wethu wokuqinisekiswa unesitifiketi se-ISO 27001 futhi ucubungula idatha ngaphansi kwesivumelwano esibophezelayo sokucutshungulwa kwedatha nathi.';
  ZU['idv.privacy.item3.title'] = 'Kuhambisana Emazweni Ayisithupha';
  ZU['idv.privacy.item3.desc'] = 'Inqubo yethu yokuqinisekiswa ihlangabezana nezidingo ze-GDPR (France neSpain), UK GDPR, POPIA (South Africa), PIPL (China), kanye nemithetho yobumfihlo yezifundazwe zase-US esebenzayo. Ukudluliswa kwedatha ephesheya kusebenzisa Ama-Standard Contractual Clauses avunyelwe.';
  ZU['idv.privacy.item4.title'] = 'Ungacela ukususwa noma nini';
  ZU['idv.privacy.item4.desc'] = 'Ngaphansi kwe-GDPR, i-POPIA, nemithetho enye esebenzayo, unelungelo lokucela ukususwa kwedatha yakho yomuntu siqu. Uma uvala i-akhawunti yakho, isimo sakho sokuqinisekiswa nedatha ehambisana nakho kususwa ngaphakathi kwezinsuku ezingu-30, kuya ngezibopho zomthetho zokugcina.';
  ZU['idv.privacy.item5.title'] = 'Idatha yakho ayithengiswa';
  ZU['idv.privacy.item5.desc'] = 'Asithengisi, siqashise, noma sabelane ngedatha yakho yomuntu siqu naye noma yiliphi iqembu lesithathu ngenhloso yezentengiselwano. Idatha yakho yobunikazi isetshenziselwa kuphela ukuqinisekisa ukuthi ungubani — akukho okunye.';
  ZU['idv.faq.eyebrow'] = 'IMIBUZO EJWAYELEKILE';
  ZU['idv.faq.title'] = 'Konke okudingayo ukwazi ngenqubo yokuqinisekiswa.';
  ZU['idv.faq.q1'] = 'Ukuqinisekiswa kobunikazi kuyaphoqeleka?';
  ZU['idv.faq.a1'] = 'Yebo. Bonke abasebenzisi abafuna ukwenza ukuthengiselana enkundleni yethu — ukufaka isicelo semisebenzi, ukuthumela imisebenzi, noma ukuthola izinkokhelo — kufanele baqedele ukuqinisekiswa kobunikazi. Ungacinga uhlelo ngaphandle kokuqinisekisa, kodwa awukwazi ukufaka isicelo somsebenzi, ukuthumela imisebenzi, noma ukuthumela/ukuthola imali kuze kuqedelwe ukuqinisekiswa. Lesi yisidingo somthetho ngaphansi kwemithetho yokulwa nokugezwa kwemali esebenza kulo lonke izwe lapho sisebenza khona.';
  ZU['idv.faq.q2'] = 'Ukuqinisekiswa kuthatha isikhathi esingakanani?';
  ZU['idv.faq.a2'] = 'Inqubo yokuqinisekiswa ngokwayo ithatha ngaphansi kwemizuzu emithathu kwiziningi zamadivayisi. Iningi lezinqumo libuyiselwa ngokushesha ngemva kokuthunyelwa. Ezinye izikhathi — ngokuvamile lapho ikhwalithi yedokhumenti iphansi noma lapho kudingeka ukubuyekezwa okwenziwa ngumuntu — ungase ulinde kuze kufike amahora angu-24. Uzothola isaziso se-imeyili ngokushesha uma isimo sakho siqinisekisiwe. Awudingi ukuhlala ekhasini ngesikhathi ukubuyekezwa kucutshungulwa.';
  ZU['idv.faq.q3'] = 'Ukuqinisekiswa kwami kwenqatshiwe. Ngenzenjani?';
  ZU['idv.faq.a3'] = 'Uma ukuqinisekiswa kwakho kunqatshiwe, uzothola i-imeyili echaza isizathu. Izizathu ezivamile zihlanganisa: ukuskena kwedokhumenti okungacacile noma okungaphelele, idokhumenti ephelelwe isikhathi, ukungahambisani phakathi kwegama elikudokhumenti ne-akhawunti, noma idokhumenti engamukelwa ezweni lakho. Ungazama futhi inqubo yokuqinisekiswa kuze kufike kathathu. Uma usaqhubeka nezinkinga, xhumana neqembu lethu losizo lokuqinisekiswa ku-verify@youngmerit.com futhi umuntu uzokusiza ngqo.';
  ZU['idv.faq.q4'] = 'Amadokhumenti ami azoabelwana namabhizinisi engiwasebenzelayo?';
  ZU['idv.faq.a4'] = 'Ngeqiniso cha. Amabhizinisi enkundleni yethu awabuboni nanini amadokhumenti akho obunikazi. Abona kuphela uphawu lokuqinisekiswa kuphrofayela yakho olubonisa ukuthi ubunikazi bakho buqinisekiswe yithi. Uhlobo lwedokhumenti yakho, inombolo yedokhumenti, usuku lokuzalwa, nayo yonke enye imininingwane yomuntu siqu evela enqubweni yokuqinisekiswa akulokothi kwabelwane nanoma yibuphi ibhizinisi noma omunye umsebenzisi ohlelweni.';
  ZU['idv.faq.q5'] = 'Ngidinga ukuqinisekisa futhi uma ngishintsha igama lami noma izwe?';
  ZU['idv.faq.a5'] = 'Uma ushintsha igama lakho ngokomthetho, uzodinga ukuxhumana neqembu lethu losizo ukubuyekeza i-akhawunti yakho futhi ungadinga ukuqedela ukuqinisekiswa okusha. Uma uthuthela kwelinye izwe, ukuqinisekiswa kabusha akudingekeli ngokuzenzakalelayo ngaphandle uma ubuyekeza imininingwane yakho yenkokhelo iye emkhawulweni omusha wezwe. Xhumana neqembu lethu losizo ukuze uthole isiqondiso ngesimo sakho esithize.';
  ZU['idv.faq.q6'] = 'Anginayo idokhumenti ye-ID evamile. Ngingakwazi ukuqinisekisa nokho?';
  ZU['idv.faq.a6'] = 'Sithinte ku-verify@youngmerit.com ngaphambi kokuzama ukuqinisekiswa. Siyaqonda ukuthi ukufinyelela kwe-ID evamile ekhishwe uhulumeni akulingani kuyo yonke imiphakathi futhi sizosebenza nawe ngokwecala ngalinye ukuthola isixazululo esifanele. Asifuni ukuthi ukuqinisekiswa kobunikazi kube yisithiyo esivimbela intsha yangempela nefanelekile ekutholeni uhlelo.';
  ZU['idv.faq.q7'] = 'I-selfie yami igcinwa unomphela?';
  ZU['idv.faq.a7'] = 'Cha. I-selfie yakho isetshenziselwa kuphela ukwenza ukuhlolwa kokuphila nokufanisa ubuso bakho nesithombe sedokhumenti yakho yobunikazi. Icutshungulwa umlingani wethu wokuqinisekiswa bese isulwa unomphela. Asigcini noma iyiphi idatha ye-biometric, asidali uphrofayela lokubona ubuso, futhi asigcini noma isiphi isithombe senqubo yokuqinisekiswa. Umphumela wokuqinisekiswa kuphela — kuvunyelwe, kwenqatshiwe, noma kusalindiwe — ogcinwa yithi.';
  ZU['idv.cta.eyebrow'] = 'Usulungele ukuqala?';
  ZU['idv.cta.title'] = 'FAKAZELA UKUTHI UNGUBANI<br/>OTHI <span class="acc">UNGUYE.</span>';
  ZU['idv.cta.desc'] = 'Qedela ukuqinisekiswa kobunikazi ngaphansi kwemizuzu emithathu bese uvula uhlelo oluphelele — umsebenzi wangempela, imali yangempela, idumela langempela.';
  ZU['idv.cta.verify'] = 'Qinisekisa Manje';
  ZU['idv.cta.privacy'] = 'Funda Inqubomgomo Yobumfihlo';
  ZU['nav.pricing'] = 'Amanani';
  // ---- pricing.* additions ----
  ZU['pricing.hero.breadcrumb'] = 'Amanani';
  ZU['pricing.faq.title'] = 'IMIBUZO <span class="accent">EJWAYELEKILE.</span>';
  ZU['pricing.faq.desc'] = 'Konke okudingayo ukwazi ngamanani ethu.';
  ZU['pricing.faq.q1'] = 'Kungani nikhokhisa imali yemakethe?';
  ZU['pricing.faq.a1'] = 'Imali yemakethe ihlanganisa ukucutshungulwa kwenkokhelo, ukuvikelwa kwe-escrow, ukuvimbela iqili, ukuxazululwa kwezimpikiswano, kanye nosizo lwamakhasimende. Ukhokha kuphela lapho umsebenzi uqedelwa ngempumelelo futhi kudalwe inani. Azikho izindleko ezifihliwe, azikho izimanga.';
  ZU['pricing.faq.q2'] = 'Ngiyikhokha nini imali yemakethe?';
  ZU['pricing.faq.a2'] = 'Imali ikhishwa ngokuzenzakalelayo lapho umsebenzi uqedelwa futhi inkokhelo ikhishwa ku-escrow. Amabhizinisi akhokha imali njengengxenye yezindleko zomsebenzi. Abasebenzi bathola inkokhelo yabo egcwele kususwa imali.';
  ZU['pricing.faq.q3'] = 'I-escrow isebenza kanjani?';
  ZU['pricing.faq.a3'] = 'Lapho ibhizinisi lithumela umsebenzi, inkokhelo egcwele igcinwa ku-akhawunti ye-escrow ephephile. Imali ikhishelwa kuphela umsebenzi uma ibhizinisi selivumele umsebenzi oqediwe. Uma kunempikiswano, ithimba lethu lokuxazulula liyabuyekeza ubufakazi futhi lenze isinqumo esifanele. <a href="dispute-system.html" style="color:var(--amber);text-decoration:none;">Funda kabanzi →</a>';
  ZU['pricing.faq.q4'] = 'Ngingakhansela ukubhalisa kwami noma nini?';
  ZU['pricing.faq.a4'] = 'Yebo. Ungakhansela ukubhalisa kwakho noma nini kusukela ezilungiselelweni ze-akhawunti yakho. Uma ukhansela, uzoqhubeka nokufinyelela kuze kube sekupheleni kwesikhathi sakho sokubhilidi samanje. Azikho izinkontileka zokubophezela, azikho izindleko zokukhansela.';
  ZU['pricing.faq.q5'] = 'Ukubhalisa kuyadingeka ukusebenzisa i-YOUNGMERIT?';
  ZU['pricing.faq.a5'] = '<strong>Cha.</strong> Uhlelo Lwamahhala lukunikeza ukufinyelela emakethe eyisisekelo. Ungathumela imisebenzi, ufake izicelo zomsebenzi, futhi uqedele ukuthengiselana ngaphandle kokukhokha ukubhalisa. Ukubhalisa kuvula izici zokusebenza, ukuhlaziya, kanye nezindleko eziphansi — kuwukuthuthukiswa, hhayi isidingo.';
  ZU['pricing.faq.q6'] = 'Ninikeza izaphulelo kunhlangano ezingenzi nzuzo noma izikhungo zemfundo?';
  ZU['pricing.faq.a6'] = 'Yebo. Sinikeza amanani akhethekile kunhlangano ezibhalisiwe ezingenzi nzuzo, izikhungo zemfundo, namabhizinisi omphakathi. Xhumana neqembu lethu ku-<a href="mailto:support@growiq.co" style="color:var(--amber);text-decoration:none;">support@growiq.co</a> ukuxoxa ngezidingo zakho ezithize.';
  ZU['pricing.toggle.perYear'] = '/unyaka';
  ZU['pricing.toggle.saveAmount'] = 'Onga {amount}/unyaka';
  ZU['pricing.calc.savePrefix'] = 'Onga ';
  // ---- pricing.* (full set) ----
  ZU['pricing.hero.eyebrow'] = 'Kulula. Kucacile. Azikho izimanga.';
  ZU['pricing.hero.title'] = 'AMANANI<br/><span class="accent">AKHULA NAWE.</span>';
  ZU['pricing.hero.desc'] = '<strong>Mahhala ukuqala.</strong> Khokha kuphela lapho uqasha ngesikali esikhulu. Izindleko zokuthengiselana ezicacile nokubhaliswa okuqagelekayo — akukho izindleko ezifihliwe.';
  ZU['pricing.hero.tag1'] = '✓ Akudingeki ikhadi lesikweletu';
  ZU['pricing.hero.tag2'] = '✓ Khansela noma nini';
  ZU['pricing.hero.tag3'] = '✓ Isiqinisekiso sokubuyiselwa kwemali sezinsuku ezingu-14';
  ZU['pricing.toggle.monthly'] = 'Ngenyanga';
  ZU['pricing.toggle.annual'] = 'Ngonyaka';
  ZU['pricing.toggle.save'] = 'Onga u-20%';
  ZU['pricing.free.name'] = 'Mahhala';
  ZU['pricing.free.desc'] = 'Kubantu abaqalayo';
  ZU['pricing.free.period'] = '/inyanga';
  ZU['pricing.free.annual'] = 'R0 /unyaka';
  ZU['pricing.free.feat1'] = 'Thumela imisebenzi engaphansi kwe-3/ngenyanga';
  ZU['pricing.free.feat2'] = 'Iphrofayela eyisisekelo yenkampani';
  ZU['pricing.free.feat3'] = 'Usizo olujwayelekile';
  ZU['pricing.free.feat4'] = 'Faka izicelo zemisebenzi';
  ZU['pricing.free.feat5'] = 'Okuthunyelwe kwezwi';
  ZU['pricing.free.feat7'] = 'Ukuhlaziywa';
  ZU['pricing.free.cta'] = 'Qala Mahhala';
  ZU['pricing.pro.name'] = 'I-Professional Pro';
  ZU['pricing.pro.desc'] = 'Kongoti abakha umsebenzi wabo wesikhathi eside';
  ZU['pricing.pro.period'] = '/inyanga';
  ZU['pricing.pro.annual'] = 'R1,429 /unyaka';
  ZU['pricing.pro.feat1'] = 'Ukuhlaziywa kwephrofayela';
  ZU['pricing.pro.feat2'] = 'Indawo eqavile yephrofayela';
  ZU['pricing.pro.feat5'] = 'Izicelo eziphambili';
  ZU['pricing.pro.feat6'] = 'Ukuqinisekiswa kwamakhono';
  ZU['pricing.pro.feat7'] = 'Amathuba alondoloziwe angenamkhawulo';
  ZU['pricing.pro.cta'] = 'Qala Pro';
  ZU['pricing.biz.name'] = 'I-Business Pro';
  ZU['pricing.biz.desc'] = 'Kumaqembu akhulayo aqasha njalo';
  ZU['pricing.biz.period'] = '/inyanga';
  ZU['pricing.biz.annual'] = 'R4,790 /unyaka';
  ZU['pricing.biz.popular'] = 'Okuthandwa Kakhulu';
  ZU['pricing.biz.feat1'] = 'Imisebenzi engenamkhawulo';
  ZU['pricing.biz.feat3'] = 'Ukuhlungwa kwabafakizicelo';
  ZU['pricing.biz.feat4'] = 'Amalungu eqembu angu-5';
  ZU['pricing.biz.feat5'] = 'Ideshibhodi Yokuhlaziya';
  ZU['pricing.biz.feat6'] = 'Ukuqinisekiswa kwenkampani';
  ZU['pricing.biz.feat7'] = 'Usizo oluphambili';
  ZU['pricing.biz.feat8'] = 'Iphrofayela yenkampani eqavile';
  ZU['pricing.biz.feat9'] = 'Imali yemakethe ephansi (10% → 8%)';
  ZU['pricing.biz.cta'] = 'Qala i-Business Pro';
  ZU['pricing.growth.name'] = 'I-Business Growth';
  ZU['pricing.growth.desc'] = 'Kumabhizinisi aqasha ngesikali esikhulu';
  ZU['pricing.growth.period'] = '/inyanga';
  ZU['pricing.growth.annual'] = 'R9,590 /unyaka';
  ZU['pricing.growth.feat1'] = 'Konke okuku-Pro';
  ZU['pricing.growth.feat2'] = 'Imali yemakethe ephansi (10% → 6%)';
  ZU['pricing.growth.feat5'] = 'Uchungechunge Lokuqasha';
  ZU['pricing.growth.feat6'] = 'Izikhundla zeqembu ezingenamkhawulo';
  ZU['pricing.growth.feat7'] = 'Imisebenzi eqavile';
  ZU['pricing.growth.feat8'] = 'Ukuhlaziywa Okuthuthukile';
  ZU['pricing.growth.cta'] = 'Qala i-Growth';
  ZU['pricing.fees.eyebrow'] = 'IZINDLEKO <span class="accent">ZEMAKETHE.</span>';
  ZU['pricing.fees.title'] = 'Izindleko zokuthengiselana ezicacile ezikhula ngokusho kwevolumu yakho. Khokha kuphela lapho kudalwa inani.';
  ZU['pricing.fees.tier1.range'] = 'R0 – R999 <small>ngomsebenzi</small>';
  ZU['pricing.fees.tier1.desc'] = 'Izinga elivamile lemisebenzi emincane';
  ZU['pricing.fees.tier1.badge1'] = '✓ I-escrow ephephile';
  ZU['pricing.fees.tier1.badge2'] = '✓ Ukuvikelwa kwempikiswano';
  ZU['pricing.fees.tier2.range'] = 'R1,000 – R4,999 <small>ngomsebenzi</small>';
  ZU['pricing.fees.tier2.desc'] = 'Izinga elincishisiwe lemisebenzi ephakathi';
  ZU['pricing.fees.tier2.badge1'] = '✓ Usizo oluphambili';
  ZU['pricing.fees.tier2.badge2'] = '✓ Izinkokhelo ezisheshayo';
  ZU['pricing.fees.tier3.range'] = 'R5,000+ <small>ngomsebenzi</small>';
  ZU['pricing.fees.tier3.desc'] = 'Izinga elingcono lamaphrojekthi amakhulu';
  ZU['pricing.fees.tier3.badge1'] = '✓ Umphathi we-akhawunti ozinikele';
  ZU['pricing.fees.tier3.badge2'] = '✓ Usizo Oluphakeme';
  ZU['pricing.fees.note'] = '🔒 Zonke izinkokhelo zivikelwe yi-escrow. <a href="dispute-system.html" style="color:var(--amber);text-decoration:none;">Funda ngokuxazululwa kwezimpikiswano →</a>';
  ZU['pricing.calc.title'] = 'UNGONGA <span style="color:var(--amber);">MALINI?</span>';
  ZU['pricing.calc.desc'] = 'Bona umehluko okwenzayo ukubhalisa ezindlekweni zakho zemakethe.';
  ZU['pricing.calc.label'] = 'Isamba semali sezinyanga zemisebenzi';
  ZU['pricing.calc.freeFees'] = 'Izindleko Zohlelo Lwamahhala';
  ZU['pricing.calc.proFees'] = 'Izindleko ze-Business Pro';
  ZU['pricing.calc.growthFees'] = 'Izindleko ze-Business Growth';
  ZU['pricing.calc.note'] = 'Kubalwe kususelwa emalini yemakethe ejwayelekile engu-10% ye-Free, u-8% we-Pro, no-6% we-Growth.';
  ZU['pricing.compare.title'] = 'QHATHANISA <span class="accent">IZINHLELO.</span>';
  ZU['pricing.compare.desc'] = 'Konke okudingayo ukwazi, ecaleni komunye.';
  ZU['pricing.compare.feature'] = 'Isici';
  ZU['pricing.compare.free'] = 'Mahhala';
  ZU['pricing.compare.pro'] = 'I-Professional Pro';
  ZU['pricing.compare.biz'] = 'I-Business Pro';
  ZU['pricing.compare.growth'] = 'I-Business Growth';
  ZU['pricing.compare.postTasks'] = 'Ukuthumela imisebenzi';
  ZU['pricing.compare.postTasks.free'] = '3/inyanga';
  ZU['pricing.compare.postTasks.biz'] = '✓ Ngenamkhawulo';
  ZU['pricing.compare.postTasks.growth'] = '✓ Ngenamkhawulo';
  ZU['pricing.compare.applyTasks'] = 'Ukufaka isicelo semisebenzi';
  ZU['pricing.compare.applyTasks.free'] = '✓';
  ZU['pricing.compare.applyTasks.pro'] = '✓ Okuphambili';
  ZU['pricing.compare.analytics'] = 'Ukuhlaziywa';
  ZU['pricing.compare.analytics.free'] = '✗';
  ZU['pricing.compare.analytics.pro'] = '✓ Iphrofayela';
  ZU['pricing.compare.analytics.biz'] = '✓ Ideshibhodi';
  ZU['pricing.compare.analytics.growth'] = '✓ Okuthuthukile';
  ZU['pricing.compare.team'] = 'Amalungu eqembu';
  ZU['pricing.compare.team.free'] = '✗';
  ZU['pricing.compare.team.biz'] = 'izikhundla ezi-5';
  ZU['pricing.compare.team.growth'] = '✓ Ngenamkhawulo';
  ZU['pricing.compare.featured'] = 'Indawo eqavile';
  ZU['pricing.compare.featured.free'] = '✗';
  ZU['pricing.compare.featured.pro'] = '✓ Iphrofayela';
  ZU['pricing.compare.featured.biz'] = '✓ Inkampani';
  ZU['pricing.compare.featured.growth'] = '✓ Inkampani + imisebenzi';
  ZU['pricing.compare.fee'] = 'Imali yemakethe';
  ZU['pricing.compare.fee.free'] = '10 / 8 / 6%';
  ZU['pricing.compare.fee.biz'] = '<span style="color:var(--amber);font-weight:600;">8 / 6 / 5%</span>';
  ZU['pricing.compare.fee.growth'] = '<span style="color:var(--amber);font-weight:600;">6 / 5 / 4%</span>';
  ZU['pricing.compare.support'] = 'Usizo';
  ZU['pricing.compare.support.free'] = 'Okuvamile';
  ZU['pricing.compare.support.pro'] = 'Okuvamile';
  ZU['pricing.compare.support.biz'] = '✓ Okuphambili';
  ZU['pricing.compare.support.growth'] = '✓ Okuphakeme';
  ZU['pricing.fees.tier1.rate'] = '10%';
  ZU['pricing.fees.tier2.rate'] = '8%';
  ZU['pricing.fees.tier3.rate'] = '6%';
  // ---- waitlist.* ----
  ZU['waitlist.hero.eyebrow'] = 'Kuyeza — ekuqaleni kuka-2026';
  ZU['waitlist.hero.title1'] = 'JOYINA';
  ZU['waitlist.hero.title2'] = 'UHLU';
  ZU['waitlist.hero.title3'] = 'LOKULINDA.';
  ZU['waitlist.hero.desc'] = '<strong>Yiba ngowokuqala ukufinyelela.</strong> Sakha uhlelo lapho intsha yakha khona imilando yomsebenzi eqinisekisiwe futhi amabhizinisi athola khona amathalente athembekile. Bhalisa ngezansi ukuze uthole ithuba lokuqala lapho sethula.';
  ZU['waitlist.hero.people'] = 'Abantu Abalindile';
  ZU['waitlist.hero.countries'] = 'Amazwe';
  ZU['waitlist.hero.launch'] = 'Unyaka Wokwethulwa';
  ZU['waitlist.left.title'] = 'YIBA PHAKATHI<br/><span class="accent">KWABOKUQALA.</span>';
  ZU['waitlist.left.desc'] = 'Amalungu asungulayo athola izinzuzo ezikhethekile. Sikhetha ngokucophelela umphakathi wokuqala ukubumba indlela uhlelo olusebenza ngayo.';
  ZU['waitlist.benefit1'] = 'Uphawu lwelungu elisungulayo kuphrofayela yakho';
  ZU['waitlist.benefit2'] = 'Ukufinyelela kwangaphambili — izinsuku ngaphambi kokwethulwa komphakathi';
  ZU['waitlist.benefit3'] = 'Isiteshi somphakathi esikhethekile sabasunguli kuphela';
  ZU['waitlist.benefit4'] = 'Ukufinyelela kohlelo mahhala impilo yonke (izinga elisungulayo)';
  ZU['waitlist.card.label'] = 'Ngena Ohlwini';
  ZU['waitlist.card.title'] = 'QINISEKISA INDAWO YAKHO';
  ZU['waitlist.card.desc'] = 'Sizokwazisa ngomzuzu esiphila ngawo. Ayikho i-spam, ayikho into engelutho.';
  ZU['waitlist.form.name'] = 'Igama Eliphelele';
  ZU['waitlist.form.email'] = 'Ikheli Le-imeyili';
  ZU['waitlist.form.type'] = 'Uhlobo Lwe-akhawunti';
  ZU['waitlist.form.type.worker'] = 'Umsebenzi — funa imisebenzi';
  ZU['waitlist.form.type.business'] = 'Ibhizinisi — qasha amathalente';
  ZU['waitlist.form.type.both'] = 'Kokubili — nginentshisekelo kukho kokubili';
  ZU['waitlist.form.country'] = 'Izwe';
  ZU['waitlist.form.country.za'] = '🇿🇦 iNingizimu Afrika';
  ZU['waitlist.form.country.cn'] = '🇨🇳 iChina';
  ZU['waitlist.form.country.us'] = '🇺🇸 i-United States';
  ZU['waitlist.form.country.fr'] = '🇫🇷 iFrance';
  ZU['waitlist.form.country.es'] = '🇪🇸 iSpain';
  ZU['waitlist.form.country.gb'] = '🇬🇧 i-United Kingdom';
  ZU['waitlist.form.country.other'] = '🌍 Okunye';
  ZU['waitlist.form.consent'] = 'Ngiyavuma ukuthola izibuyekezo ezikhathi ngezikhathi ezivela ethimbeni. Ngingakhansela noma nini. <a href="privacy-policy.html">Inqubomgomo Yobumfihlo</a>.';
  ZU['waitlist.form.cta'] = 'Qinisekisa Indawo Yami';
  ZU['waitlist.form.note'] = 'Sizoqala maduze — sizokuthumelela i-imeyili kuqala';
  ZU['waitlist.success.title'] = 'USUSOHLU.';
  ZU['waitlist.success.desc'] = 'Wengezwe ngempumelelo ohlwini lokulinda lokwethulwa kwethu. Uma isikhathi sesisondele, sizokwazisa.';
  ZU['waitlist.success.back'] = 'Emuva';
  ZU['waitlist.success.note'] = 'Hlola i-imeyili yakho ukuthola isiqinisekiso. Sengeze kubathintwa bakho.';
  ZU['waitlist.social.text'] = 'Sebesohlwini lokulinda emazweni ayisithupha';
  ZU['waitlist.form.name.error'] = 'Sicela ufake igama lakho';
  ZU['waitlist.form.email.error'] = 'Sicela ufake ikheli le-imeyili elisebenzayo';
  ZU['waitlist.form.consent.error'] = 'Sicela uvume ukuthola izibuyekezo';
  ZU['waitlist.form.errorAlert'] = 'Kukhona okungahambanga kahle. Sicela uzame futhi.';
  ZU['waitlist.social.tag1'] = 'OKUSUNGULAYO';
  ZU['waitlist.social.tag2'] = 'UKUFINYELELA';
  ZU['waitlist.social.tag3'] = 'KWANGAPHAMBILI';
  ZU['waitlist.social.join'] = 'Joyina abangaphezu kwe-{count} amalungu ezayo';
  // ---- auth.* ----
  ZU['auth.nav.back'] = 'Buyela Esayithini';
  ZU['auth.left.eyebrow'] = 'Wamukelekile ku-YOUNGMERIT';
  ZU['auth.left.title'] = 'UMSEBENZI WAKHO.<br/>UBUFAKAZI <span class="accent">BAKHO.</span>';
  ZU['auth.left.desc'] = 'Joyina abasebenzi abasha namabhizinisi akha ukwethenjwa futhi enza izinto zenzeke emazweni ayisithupha.';
  ZU['auth.left.trust1'] = 'Ubunikazi buqinisekiswe kuwo wonke ama-akhawunti';
  ZU['auth.left.trust2'] = 'Izinkokhelo zigcinwa nge-escrow ephephile';
  ZU['auth.left.trust3'] = 'Yakha i-Skill Passport yakho nomsebenzi ngamunye';
  ZU['auth.left.trust4'] = 'Kuyasebenza emazweni ayisithupha emhlabeni jikelele';
  ZU['auth.mode.signup'] = 'Bhalisa';
  ZU['auth.mode.login'] = 'Ngena';
  ZU['auth.demo.tryLabel'] = 'Zama i-akhawunti yesibonelo';
  ZU['auth.demo.worker'] = 'Umsebenzi';
  ZU['auth.demo.worker.stats'] = 'Imisebenzi engu-12 &middot; isilinganiso 4.8 &middot; R4,280 eholiwe';
  ZU['auth.demo.worker.cta'] = 'Ngena Njengomsebenzi';
  ZU['auth.demo.business'] = 'Ibhizinisi';
  ZU['auth.demo.business.stats'] = 'Imisebenzi engu-24 &middot; isilinganiso 4.9 &middot; abangu-19 abaqashiwe';
  ZU['auth.demo.business.cta'] = 'Ngena Njengebhizinisi';
  ZU['auth.demo.loggingIn'] = 'Ingena njenge-{name}…';
  ZU['auth.verify.title'] = 'HLOLA I-IMEYILI YAKHO.';
  ZU['auth.verify.desc'] = 'Sithumele isixhumanisi sokuqinisekiswa ku-<br/><strong id="verifyEmail" style="color:var(--dark);"></strong>';
  ZU['auth.verify.note'] = 'Chofoza isixhumanisi ku-imeyili ukuvusa i-akhawunti yakho. Hlola ifolda ye-spam uma ungasiboni.';
  ZU['auth.verify.resend'] = 'Thumela Kabusha I-imeyili Yokuqinisekiswa';
  ZU['auth.verify.resent'] = 'I-imeyili ithunyelwe kabusha ngempumelelo.';
  ZU['auth.success.titleLogin'] = 'WAMUKELEKILE FUTHI.';
  ZU['auth.success.msgLogin'] = 'Manje usungenile. Sikuyisa ephrofayeleni yakho…';
  ZU['auth.success.welcomeName'] = 'WAMUKELEKILE FUTHI, {name}.';
  ZU['auth.success.loggingIn'] = 'Kuyakungenisa…';
  ZU['auth.signup.title'] = 'DALA I-AKHAWUNTI YAKHO';
  ZU['auth.signup.desc'] = 'Mahhala ukujoyina. Akudingeki ikhadi lesikweletu.';
  ZU['auth.alert.generic'] = 'Kukhona okungahambanga kahle. Sicela uzame futhi.';
  ZU['auth.signup.typeLabel'] = 'Ngijoyina njengo';
  ZU['auth.signup.typeWorkerDesc'] = 'Funa imisebenzi, uholele, wakhe idumela lakho';
  ZU['auth.signup.typeBusinessDesc'] = 'Thumela imisebenzi futhi uqashe amathalente amasha athembekile';
  ZU['auth.signup.typeErr'] = 'Sicela ukhethe uhlobo lwe-akhawunti ukuze uqhubeke.';
  ZU['auth.signup.firstName'] = 'Igama Lokuqala';
  ZU['auth.signup.lastName'] = 'Isibongo';
  ZU['auth.err.required'] = 'Kuyadingeka';
  ZU['auth.signup.bizName'] = 'Igama Lebhizinisi/Inhlangano';
  ZU['auth.signup.bizName.err'] = 'Kuyadingeka kuma-akhawunti ebhizinisi';
  ZU['auth.signup.email'] = 'Ikheli Le-imeyili';
  ZU['auth.err.email'] = 'Faka ikheli le-imeyili elisebenzayo';
  ZU['auth.signup.password'] = 'Iphasiwedi';
  ZU['auth.pw.tooShort'] = 'Kufushane kakhulu';
  ZU['auth.pw.tooWeak'] = 'Buthaka kakhulu';
  ZU['auth.pw.weak'] = 'Buthaka';
  ZU['auth.pw.fair'] = 'Kulinganiselwe';
  ZU['auth.pw.good'] = 'Kuhle';
  ZU['auth.pw.strong'] = 'Kuqinile';
  ZU['auth.signup.password.err'] = 'Iphasiwedi kufanele ibe nezinhlamvu ezingenani ezingu-8';
  ZU['auth.signup.cta'] = 'Dala i-akhawunti';
  ZU['auth.signup.terms'] = 'Ngokubhalisa uyavuma <a href="terms.html">Imigomo Yesevisi</a> yethu kanye <a href="privacy-policy.html">Nenqubomgomo Yobumfihlo</a>.';
  ZU['auth.signup.switchPrompt'] = 'Usunayo i-akhawunti?';
  ZU['auth.signup.switchLink'] = 'Ngena';
  ZU['auth.login.title'] = 'WAMUKELEKILE FUTHI.';
  ZU['auth.login.desc'] = 'Ngena ukuze ufinyelele ephrofayeleni yakho nemisebenzi.';
  ZU['auth.login.alertMsg'] = 'I-imeyili noma iphasiwedi ayilungile.';
  ZU['auth.login.err.email'] = 'Faka ikheli lakho le-imeyili';
  ZU['auth.login.err.password'] = 'Faka iphasiwedi yakho';
  ZU['auth.login.forgot'] = 'Ukhohliwe iphasiwedi?';
  ZU['auth.login.forgotSent'] = 'I-imeyili yokusetha kabusha ithunyelwe — hlola ibhokisi lakho lokungena.';
  ZU['auth.login.cta'] = 'Ngena';
  ZU['auth.login.switchPrompt'] = 'Awunayo i-akhawunti?';
  ZU['auth.login.switchLink'] = 'Bhalisa Mahhala';
  ZU['auth.err.wentWrong'] = 'Kukhona okungahambanga kahle.';
  ZU['auth.err.alreadyRegistered'] = 'Le-imeyili isivele ibhalisiwe. Zama ukungena esikhundleni salokho.';
  ZU['auth.err.passwordShort'] = 'Iphasiwedi kufanele ibe nezinhlamvu ezingenani ezingu-8.';
  ZU['auth.err.invalidEmail'] = 'Sicela ufake ikheli le-imeyili elisebenzayo.';
  ZU['auth.err.connection'] = 'Iphutha lokuxhumana. Hlola i-inthanethi yakho bese uzama futhi.';
  ZU['auth.err.loginFailed'] = 'Ukungena kwehlulekile.';
  ZU['auth.err.notConfirmed'] = 'Sicela uqinisekise i-imeyili yakho kuqala. Hlola ibhokisi lakho lokungena isixhumanisi sokuqinisekisa.';
  ZU['auth.err.tooMany'] = 'Imizamo eminingi kakhulu yokungena. Sicela ulinde imizuzu embalwa bese uzama futhi.';
  ZU['auth.err.enterEmailFirst'] = 'Faka ikheli lakho le-imeyili ngenhla kuqala.';
  ZU['auth.err.resetFailed'] = 'Ayikwazanga ukuthumela i-imeyili yokusetha kabusha. Hlola ikheli bese uzama futhi.';
  // ---- howworks.* ----
  ZU['howworks.hero.eyebrow'] = 'Kulula. Kuqinisekisiwe. Emhlabeni wonke.';
  ZU['howworks.hero.title'] = 'INDLELA<br/><span class="accent">ESISEBENZA</span><br/>NGAYO.';
  ZU['howworks.hero.desc'] = 'Izinyathelo ezilula zokwakha ulwazi noma ukuthola ithalente elifanele. Aziqu, akukho ukuqagela, akukho ingozi.';
  ZU['howworks.hero.tabPeople'] = 'Kwabantu';
  ZU['howworks.hero.tabBusiness'] = 'Kumabhizinisi';
  ZU['howworks.hero.scroll'] = 'Skrola ukuze uhlole';
  ZU['howworks.steps.tag1'] = 'Isinyathelo Sokuqala';
  ZU['howworks.steps.tag2'] = 'Isinyathelo Sesibili';
  ZU['howworks.steps.tag3'] = 'Isinyathelo Sesithathu';
  ZU['howworks.steps.tag4'] = 'Isinyathelo Sesine';
  ZU['howworks.steps.people.s1.title'] = 'DALA IPHROFAYELA YAKHO';
  ZU['howworks.steps.people.s1.desc'] = 'Bhalisa ngemizuzu. Engeza amakhono akho, indawo, nezinga lolwazi. Qinisekisa ubunikazi bakho ukuvula ukufinyelela okugcwele.';
  ZU['howworks.steps.people.s1.d1'] = 'Mahhala ukujoyina';
  ZU['howworks.steps.people.s1.d2'] = 'Amazwe ayisithupha';
  ZU['howworks.steps.people.s1.d3'] = 'Kuyaphila ngaphansi kwemizuzu emi-5';
  ZU['howworks.steps.people.s1.d4'] = 'Ubunikazi buqinisekisiwe';
  ZU['howworks.steps.people.s2.title'] = 'FUNA UFAKE ISICELO SEMISEBENZI';
  ZU['howworks.steps.people.s2.desc'] = 'Cinga imisebenzi ekhokhelwayo efanele osaqalayo ethunyelwe amabhizinisi aqinisekisiwe. Hlunga ngekhono, inkokhelo, umnqamulajuqu, nezinga.';
  ZU['howworks.steps.people.s2.d1'] = 'Imisebenzi yokudizayina';
  ZU['howworks.steps.people.s2.d2'] = 'Idatha Nocwaningo';
  ZU['howworks.steps.people.s2.d3'] = 'Usizo lwe-AI';
  ZU['howworks.steps.people.s2.d4'] = 'Usizo Lwamakhasimende';
  ZU['howworks.steps.people.s3.title'] = 'YENZA UMSEBENZI OMUHLE UHOLE';
  ZU['howworks.steps.people.s3.desc'] = 'Qedela umsebenzi, uxhumane ngokucacile futhi uthumele umsebenzi wakho. Inkokhelo ikhishwa ngokushesha ku-escrow uma isivunyelwe.';
  ZU['howworks.steps.people.s3.d1'] = 'Kuvikelwe nge-escrow';
  ZU['howworks.steps.people.s3.d2'] = 'Inkokhelo esheshayo';
  ZU['howworks.steps.people.s3.d3'] = 'Ukuxhumana ngaphakathi kohlelo';
  ZU['howworks.steps.people.s3.d4'] = 'Ukulethwa okuphephile kwamafayela';
  ZU['howworks.steps.people.s4.title'] = 'YAKHA IDUMELA LAKHO';
  ZU['howworks.steps.people.s4.desc'] = 'Wonke umsebenzi oqediwe uzuza isilinganiso kanye nerekhodi lobufakazi bomsebenzi. Amaphuzu Akho Okwethenjwa ayakhula futhi amathuba angcono ayalandela.';
  ZU['howworks.steps.people.s4.d1'] = 'Ukubuyekezwa okuqinisekisiwe';
  ZU['howworks.steps.people.s4.d2'] = 'Amaphuzu okwethenjwa aphelele';
  ZU['howworks.steps.people.s4.d3'] = 'Ukukhula kwezinga';
  ZU['howworks.steps.people.s4.d4'] = 'Ukubuyekezwa kwe-Skill Passport';
  ZU['howworks.steps.biz.s1.title'] = 'THUMELA UMSEBENZI WAKHO';
  ZU['howworks.steps.biz.s1.desc'] = 'Chaza lokho okudingayo ngolimi olulula. Beka isabelomali sakho, umnqamulajuqu, nezinga lekhono elidingekayo. Ukuthumela kumahhala ngokuphelele.';
  ZU['howworks.steps.biz.s1.d1'] = 'Mahhala ukuthumela';
  ZU['howworks.steps.biz.s1.d2'] = 'Kuyaphila ngemizuzu';
  ZU['howworks.steps.biz.s1.d3'] = 'Ukufaniswa okuhlakaniphile';
  ZU['howworks.steps.biz.s1.d4'] = 'Inqolobane yamathalente yomhlaba';
  ZU['howworks.steps.biz.s2.title'] = 'BUYEKEZA ABAFAKIZICELO ABAQINISEKISIWE';
  ZU['howworks.steps.biz.s2.desc'] = 'Cinga abafakizicelo abanamaphuzu okwethenjwa angempela, izinga lokuqedela, nemisebenzi eyisibonelo. Sonke isibalo siqinisekisiwe futhi silandelelwa ngokuzimela.';
  ZU['howworks.steps.biz.s2.d1'] = 'Amaphuzu okwethenjwa ayaboniswa';
  ZU['howworks.steps.biz.s2.d2'] = 'Ubufakazi bomlando womsebenzi';
  ZU['howworks.steps.biz.s2.d3'] = 'Abasebenzi abaqinisekiswe i-ID';
  ZU['howworks.steps.biz.s2.d4'] = 'Izibonakaliso zezinga ziyaboniswa';
  ZU['howworks.steps.biz.s3.title'] = 'LANDELELA UMSEBENZI UVUMELE';
  ZU['howworks.steps.biz.s3.desc'] = 'Xhumana ngqo ohlelweni. Buyekeza okulethiwe, cela ukubuyekezwa, futhi uvumele — konke nge-escrow evikela yonke isenti.';
  ZU['howworks.steps.biz.s3.d1'] = 'Ingxoxo ngaphakathi kohlelo';
  ZU['howworks.steps.biz.s3.d2'] = 'Ukudluliselwa okuphephile kwamafayela';
  ZU['howworks.steps.biz.s3.d3'] = 'Izicelo zokubuyekezwa';
  ZU['howworks.steps.biz.s3.d4'] = 'Ukuvikelwa kwe-escrow';
  ZU['howworks.steps.biz.s4.title'] = 'YAKHA UMGUDU WAKHO WAMATHALENTE';
  ZU['howworks.steps.biz.s4.desc'] = 'Londoloza abasebenzi bakho abahle kakhulu ezinqolobaneni zangasese zamathalente. Qasha kabusha ngokuchofoza kanye. Qasha abasebenzi abakhethekile isikhathi esigcwele ngokuqondile ngathi.';
  ZU['howworks.steps.biz.s4.d1'] = 'Izinqolobane zangasese zamathalente';
  ZU['howworks.steps.biz.s4.d2'] = 'Ukuqasha kabusha ngokuchofoza kanye';
  ZU['howworks.steps.biz.s4.d3'] = 'Inketho yokuqasha isikhathi esigcwele';
  ZU['howworks.steps.biz.s4.d4'] = 'Umlando wokusebenza';
  ZU['howworks.trust.eyebrow'] = 'Kwakhelwe Ukwethenjwa';
  ZU['howworks.trust.title'] = 'KUPHEPHILE KUSUKELA EKUQALENI<br/>KUYA EKUPHELENI.';
  ZU['howworks.trust.desc'] = 'Konke ukuthengiselana enkundleni yethu kuvikelwe izingqimba zokuqinisekiswa, i-escrow, kanye nokuxazululwa kwezimpikiswano.';
  ZU['howworks.trust.card1.title'] = 'Izinkokhelo Ze-escrow';
  ZU['howworks.trust.card1.desc'] = 'Izimali zigcinwa ziphephile kuze kuvunyelwane ngomsebenzi. Ayikho inkokhelo ekhishwayo kuze ibhizinisi liqinisekise ukulethwa.';
  ZU['howworks.trust.card2.title'] = 'Ukuqinisekiswa Kobunikazi';
  ZU['howworks.trust.card2.desc'] = 'Bonke abasebenzi namabhizinisi baqedela ukuqinisekiswa kwe-ID ngaphambi kokuthengiselana. Uhlala wazi ukuthi ubhekene nobani.';
  ZU['howworks.trust.card4.title'] = 'Ukuvikelwa nge-NDA';
  ZU['howworks.trust.card4.desc'] = 'Imisebenzi yamabhizinisi ebucayi ingamboziwa yizivumelwano ze-NDA ezibophezelayo ngokomthetho. Umsebenzi oyimfihlo uhlala uyimfihlo.';
  ZU['howworks.trust.card5.title'] = 'Ukuxazululwa Kwezimpikiswano';
  ZU['howworks.trust.card5.desc'] = 'Uma kukhona okungahambi kahle, ithimba lethu lokuxazulula libuyekeza umlando womsebenzi, imilayezo, nokulethiwe ukuze kutholakale isixazululo esifanele.';
  ZU['howworks.trust.card6.title'] = 'Ukuqinisekiswa Komqashi';
  ZU['howworks.trust.card6.desc'] = 'Amabhizinisi ayaqinisekiswa ngaphambi kokuthumela imisebenzi. Abasebenzi bahlala bazi ukuthi inkampani yangempela, ezibophezelayo ikhona ngemuva komsebenzi ngamunye.';
  ZU['howworks.rep.eyebrow'] = 'Uhlelo Lokukhula';
  ZU['howworks.rep.title'] = 'KHUPHUKA<br/><span class="accent">IDUMELA LAKHO.</span>';
  ZU['howworks.rep.desc'] = 'Wonke umsebenzi owuqedelayo wakhela izinga eliphakeme — uvula inkokhelo engcono, ukubonakala okwengeziwe, nokwethenjwa okukhulu ngabaqashi.';
  ZU['howworks.levels.rookie.name'] = 'ROOKIE';
  ZU['howworks.levels.rookie.tag'] = 'Izinga lokuqala';
  ZU['howworks.levels.rookie.range'] = '0 kuya ku-4 imisebenzi';
  ZU['howworks.levels.rookie.perk1'] = 'Ukufinyelela imisebenzi yosaqalayo';
  ZU['howworks.levels.rookie.perk2'] = 'Yakha iphrofayela yakho';
  ZU['howworks.levels.rookie.perk3'] = 'Zuza ukubuyekezwa kwakho kokuqala';
  ZU['howworks.levels.verified.name'] = 'VERIFIED';
  ZU['howworks.levels.verified.tag'] = 'Osaqalayo ofakazelwe';
  ZU['howworks.levels.verified.range'] = '5 kuya ku-19 imisebenzi';
  ZU['howworks.levels.verified.perk1'] = 'Uphawu oluqinisekisiwe luyaboniswa';
  ZU['howworks.levels.verified.perk2'] = 'Inkokhelo ephakeme ivuliwe';
  ZU['howworks.levels.verified.perk3'] = 'I-Skill Passport isebenza';
  ZU['howworks.levels.trusted.name'] = 'TRUSTED';
  ZU['howworks.levels.trusted.tag'] = 'Umsebenzi othembekile';
  ZU['howworks.levels.trusted.range'] = '20 kuya ku-49 imisebenzi';
  ZU['howworks.levels.trusted.perk1'] = 'Okuphambili osesearch';
  ZU['howworks.levels.trusted.perk2'] = 'Ufaneleka ukuqashwa ngqo';
  ZU['howworks.levels.trusted.perk3'] = 'Ukufinyelela imisebenzi ye-NDA';
  ZU['howworks.levels.elite.name'] = 'ELITE';
  ZU['howworks.levels.elite.tag'] = 'Ithalente lezinga eliphezulu';
  ZU['howworks.levels.elite.range'] = 'Imisebenzi engu-50 noma ngaphezulu';
  ZU['howworks.levels.elite.perk1'] = 'Indawo eqavile yephrofayela';
  ZU['howworks.levels.elite.perk3'] = 'Uchungechunge lokuqashwa isikhathi esigcwele';
  ZU['howworks.passport.title'] = 'I-SKILL PASSPORT YAKHO';
  ZU['howworks.passport.desc'] = 'I-Skill Passport yakho iyirekhodi elihambayo, eliqinisekisiwe lawo wonke umsebenzi oqediwe, konke ukubuyekezwa okuzuziwe, nalo lonke ikhono elifakazelwe — elingahlanganyelwa noma yimuphi umqashi, noma kuphi emhlabeni.';
  ZU['howworks.passport.cta1'] = 'Yakha Owami';
  ZU['howworks.passport.cta2'] = 'Bona Isibonelo';
  ZU['howworks.faq.heading'] = 'IMIBUZO?';
  ZU['howworks.faq.sub'] = 'Konke okudingayo ukwazi ngathi.';
  ZU['howworks.faq.tabGeneral'] = 'Okuvamile';
  ZU['howworks.faq.tabWorkers'] = 'Kwabasebenzi';
  ZU['howworks.faq.tabBusinesses'] = 'Kumabhizinisi';
  ZU['howworks.faq.general.q1'] = 'Iyini i-YOUNGMERIT?';
  ZU['howworks.faq.general.a1'] = 'I-YOUNGMERIT iyinkundla yomhlaba jikelele exhumanisa intsha nemisebenzi yangempela ekhokhelwayo evela emabhizinisini aqinisekisiwe. Ngokuqedela umsebenzi nokuzuza ukubuyekezwa, abasebenzi bakha idumela eliqinisekisiwe lobufakazi bomsebenzi abaqashi abalithembayo kune-CV noma iziqu ezijwayelekile.';
  ZU['howworks.faq.general.q2'] = 'Yimaphi amazwe i-YOUNGMERIT esekelayo?';
  ZU['howworks.faq.general.a2'] = 'Njengamanje sisebenza eNingizimu Afrika, eChina, e-United States, eFrance, eSpain, nase-United Kingdom. Uhlelo lusekela isiNgisi, isiMandarin, isiFrench, nesiSpanish.';
  ZU['howworks.faq.general.q3'] = 'I-YOUNGMERIT imahhala ukusetshenziswa?';
  ZU['howworks.faq.general.a3'] = 'Yebo. Abasebenzi bangabhalisa futhi bafake izicelo zemisebenzi mahhala. Amabhizinisi angathumela imisebenzi mahhala. Sithatha imali encane yesevisi kuphela lapho umsebenzi uqedelwa ngempumelelo futhi ukhokhelwe.';
  ZU['howworks.faq.general.q4'] = 'I-YOUNGMERIT ihluke kanjani kwezinye izinkundla?';
  ZU['howworks.faq.general.a4'] = 'Sakhelwe ngokukhethekile amathalente ezinga eliphansi. Ukugxila kwethu ekusizeni abantu abanolwazi oluncane noma abangenalo ukwakha imilando yomsebenzi eqinisekisiwe. Siyinkundla yokungena emsebenzini, hhayi imakethe evamile yokusebenza ngokuzimela.';
  ZU['howworks.faq.workers.q1'] = 'Ngidinga ulwazi ukuze ngijoyine?';
  ZU['howworks.faq.workers.a1'] = 'Cha. Sakhelwe ngokukhethekile abantu abanolwazi oluncane noma abangenalo lomsebenzi osemthethweni. Imisebenzi efanele osaqalayo ihlala itholakala futhi idumela lakho lakhiwa kusukela ekuqaleni ngomsebenzi owenzayo ohlelweni.';
  ZU['howworks.faq.workers.q2'] = 'Ngikhokhelwa kanjani nini?';
  ZU['howworks.faq.workers.a2'] = 'Izinkokhelo zigcinwa nge-escrow futhi zikhishwa ngokushesha ibhizinisi livumele umsebenzi wakho. Izimali ziya ngqo ku-akhawunti yakho eqinisekisiwe futhi zingakhishwa nge-PayPal, ukudluliselwa kwebhange, noma izindlela zenkokhelo zendawo kuye ngezwe lakho.';
  ZU['howworks.faq.workers.q3'] = 'Iyini i-Skill Passport?';
  ZU['howworks.faq.workers.a3'] = 'I-Skill Passport iyirekhodi elihambayo, elingabelwana nomphakathi lawo wonke umsebenzi wakho oqediwe, izilinganiso ezizuziwe, namakhono aqinisekisiwe. Ungahlanganyela nabaqashi, uyifake ezicelweni zomsebenzi, noma uyisebenzise esikhundleni se-CV evamile.';
  ZU['howworks.faq.workers.q4'] = 'Yiziphi Izinga Zamathalente?';
  ZU['howworks.faq.workers.a4'] = 'Sinezinga ezine: Rookie (0 kuya ku-4 imisebenzi), Verified (5 kuya ku-19), Trusted (20 kuya ku-49), ne-Elite (50 noma ngaphezulu). Izinga eliphakeme livula imisebenzi ekhokha kangcono, indawo yokuqala osesearch, kanye nokufaneleka ukuqashwa ngqo.';
  ZU['howworks.faq.businesses.q1'] = 'Ngithumela kanjani umsebenzi?';
  ZU['howworks.faq.businesses.a1'] = 'Bhalisa, uqinisekise ibhizinisi lakho bese uchofoza Thumela Umsebenzi. Chaza lokho okudingayo, beka isabelomali nomnqamulajuqu, futhi ucacise izinga lekhono elidingekayo. Umsebenzi wakho uyavela ngokushesha futhi uqala ukuthola izicelo.';
  ZU['howworks.faq.businesses.q2'] = 'Abasebenzi baqinisekiswa kanjani?';
  ZU['howworks.faq.businesses.a2'] = 'Bonke abasebenzi enkundleni yethu baqedela ukuqinisekiswa kobunikazi ngaphambi kokuthengiselana. Amaphuzu abo Okwethenjwa, izinga lokuqedela umsebenzi, ukubuyekezwa, kanye nenani lokuqashwa kabusha kulandelelwa ngokuzimela futhi akunakuphathwa ngephutha.';
  ZU['howworks.faq.businesses.q3'] = 'Kuthiwani uma ngingajabuli ngomsebenzi?';
  ZU['howworks.faq.businesses.a3'] = 'Izinkokhelo zigcinwa nge-escrow kuze uvumele okulethiwe. Ungacela ukubuyekezwa ngaphambi kokukhipha izimali. Uma kuvela impikiswano, ithimba lethu lokuxazulula libuyekeza bonke ubufakazi futhi lifinyelele isixazululo esifanele.';
  ZU['howworks.faq.businesses.q4'] = 'Ngingakwazi ukuqasha othile isikhathi esigcwele?';
  ZU['howworks.faq.businesses.a4'] = 'Ngempela. Sisekela ukuqashwa ngqo isikhathi esigcwele kusuka ohlelweni. Uma usutholile umsebenzi omethembayo ngekhwalithi, ungenza umbono osemthethweni womsebenzi ngathi.';
  ZU['howworks.cta.title'] = 'USULUNGELE<br/><span class="accent">UKUQALA?</span>';
  ZU['howworks.cta.desc'] = 'Joyina inkundla lapho umsebenzi ukhuluma ngamandla kunezimfanelo.';
  ZU['howworks.cta.findWork'] = 'Funa Umsebenzi';
  ZU['howworks.cta.hireTalent'] = 'Qasha Amathalente';
  // ==================== COUNTRY PAGES — ZULU ====================
  ZU['country.common.backToHone'] = 'Buyela Ekhaya';
  ZU['country.common.byTheNumbers'] = 'Ngezibalo';
  ZU['country.common.rootCauses'] = 'Izimbangela Eziyisisekelo';
  ZU['country.common.honeTake'] = 'Umbono wethu';
  ZU['country.common.exploreOthers'] = 'Hlola amanye amazwe amahlanu';
  ZU['country.common.china'] = 'iChina';
  ZU['country.common.us'] = 'i-United States';
  ZU['country.common.france'] = 'iFrance';
  ZU['country.common.spain'] = 'iSpain';
  ZU['country.common.uk'] = 'i-United Kingdom';
  ZU['country.common.southAfrica'] = 'iNingizimu Afrika';

  ZU['country.za.hero.title'] = 'ININGIZIMU<br/><span class="acc">AFRIKA</span>';
  ZU['country.za.hero.quote'] = 'Cishe uhhafu wentsha yaseNingizimu Afrika awukwazi ukuthola umsebenzi. Nayi idatha esemuva kwale nkinga — nokuthi kungani ubufakazi bomsebenzi, hhayi iziqu ephepheni, kuyindlela yokuphuma.';
  ZU['country.za.stats.s1.lbl'] = 'Izinga lokungabi khona kwemisebenzi entsha (iminyaka engu-15–34), Ikota 1 ka-2026';
  ZU['country.za.stats.s2.lbl'] = 'Ukungabi khona kwemisebenzi phakathi kweminyaka engu-15–24, Ikota 1 ka-2026';
  ZU['country.za.stats.s3.lbl'] = 'Intsha engekho emsebenzini, emfundweni noma ekuqeqeshweni';
  ZU['country.za.stats.s4.lbl'] = 'Ukukhula okuphelele kwe-GDP yaseNingizimu Afrika ngo-2025';
  ZU['country.za.stats.title'] = 'IDATHA ESEMUVA<br/>KWENKINGA YEMISEBENZI YENTSHA <span class="acc">YASENINGIZIMU AFRIKA</span>';
  ZU['country.za.causes.title'] = 'KUNGANI KUNZIMA KANGAKA UKUTHI INTSHA<br/>IQASHWE <span class="acc">ENINGIZIMU AFRIKA?</span>';
  ZU['country.za.causes.c1.title'] = 'Ukukhula okubuthaka komnotho';
  ZU['country.za.causes.c1.desc'] = 'I-GDP ikhule ngo-1.1% kuphela ngo-2025 kuyilapho amakhulu ezinkulungwane zentsha eyengeziwe ingena emakethe yomsebenzi — umnotho ngokwawo awudali imisebenzi emisha eyanele ukubamukela.';
  ZU['country.za.causes.c2.title'] = 'Igebe phakathi kwemfundo nomsebenzi';
  ZU['country.za.causes.c2.desc'] = 'Izikole namanyuvesi awakhiqizi ngokuqhubekayo abaqedile isikole abanamakhono aqondile, alungele umsebenzi abaqashi abathi bayawadinga, okushiya ukungahambisani okuqhubekayo phakathi kweziqu nemisebenzi.';
  ZU['country.za.causes.c3.title'] = 'Inkinga yolwazi';
  ZU['country.za.causes.c3.desc'] = 'Izikhundla zezinga eliphansi zidinga kakhulu ulwazi lwangaphambili, okuvala abafuna umsebenzi okokuqala ekutholeni imisebenzi ebifanele ukubanika ithuba labo lokuqala.';
  ZU['country.za.causes.c4.title'] = 'Ukudumala okukhulayo';
  ZU['country.za.causes.c4.desc'] = 'Cishe izigidi ezingu-3.9 zabantu ziyekile ukufuna umsebenzi ngokusebenzayo, okusho ukuthi izinga elisemthethweni lokungabi khona kwemisebenzi cishe lehlisa isilinganiso sangempela sokungabi khona kwemisebenzi.';
  ZU['country.za.insight'] = 'INingizimu Afrika ayinabo abasebenzi abangafuni ukusebenza — inabo abangakaze <strong>bafakazele</strong> ikhono labo. Izigidi zentsha enekhono zivalelwe ngemuva komnyango ofanayo ovaliwe: yonke imisebenzi yezinga eliphansi idinga ulwazi okungenakwenzeka ukuluthola ngaphandle komsebenzi kuqala. Siyawuphula lowo mjikelezo ngokuvumela intsha yaseNingizimu Afrika ukuthi iqedele imisebenzi yangempela ekhokhelwayo yamabhizinisi angempela futhi yakhe umlando oqinisekisiwe kusukela osukwini lokuqala — ngaphandle kweziqu noma ubudlelwane.';
  ZU['blog.hero.live'] = 'Ku-Live';
  ZU['blog.post.voice'] = 'Izwi';
  ZU['blog.empty.none'] = 'Awekho amaposti ahambisana nokusesha kwakho.';
  ZU['cookieBanner.title'] = 'Sisebenzisa amakhukhi';
  ZU['cookieBanner.desc'] = 'Sisebenzisa amakhukhi adingekayo ukwenza izinto zisebenze. Ngemvume yakho, singathanda futhi ukusebenzisa amakhukhi okuhlaziya nawentando ukuze sithuthukise ulwazi lwakho.';
  ZU['cookieBanner.acceptAll'] = 'Yamukela konke';
  ZU['cookieBanner.rejectAll'] = 'Yenqaba okungadingekile';
  ZU['cookieBanner.manage'] = 'Phatha izinkambiso';
  ZU['waitlist.form.email.duplicate'] = 'Le email selivele likuhlu lokulinda — sizoxhumana nawe maduze.';
  ZU['waitlist.form.error.generic'] = 'Kukhona okungahambanga kahle. Sicela uzame futhi.';
  ZU['contact.form.error.generic'] = 'Kube nephutha lokuthumela umlayezo wakho. Sicela uzame futhi noma usithumele i-imeyili ngokuqondile.';
  ZU['blog.post.sample'] = 'Isibonelo';
  ZU['blog.post.deleteConfirm'] = 'Susa lokhu okuthunyelwe? Lokhu ngeke kuhlehliswe.';
  ZU['blog.post.deleted'] = 'Okuthunyelwe kususiwe';
  ZU['blog.post.saved'] = 'Kulondoloziwe kuphrofayela yakho';
  ZU['blog.post.unsaved'] = 'Kususiwe kokulondoloziwe';
  ZU['blog.post.published'] = 'Kushicilelwe ku-feed yomphakathi';
  ZU['blog.voice.micError'] = 'Ayikwazanga ukufinyelela kumakrofoni. Zama futhi noma uhlole izilungiselelo zebrawuza yakho.';
  ZU['blog.voice.httpsNeeded'] = 'Ukufinyelela kumakrofoni kudinga i-HTTPS — lokhu kuzosebenza uma ikhasi selifakwe online, hhayi livuliwe njengefayela lendawo.';
  ZU['blog.voice.limitReached'] = 'Umkhawulo wamasekhondi angu-30 ufinyelelwe okwamanje';
  ZU['blog.voice.permissionDenied'] = 'Ukufinyelela kumakrofoni kuvinjiwe. Hlola izimvume zesayithi kubrawuza yakho, uvumele imakrofoni, bese uzama futhi.';
  ZU['blog.voice.noMic'] = 'Ayikho imakrofoni etholakele kule divayisi';
  ZU['blog.voice.recordFirst'] = 'Qopha inothi lezwi kuqala';
  ZU['blog.voice.published'] = 'Inothi Lezwi lishicilelwe';
  ZU['profile.toast.saved'] = 'Kulondoloziwe';
  ZU['profile.toast.portfolioAdded'] = 'Into yephothifoliyo yengeziwe';
  ZU['profile.toast.profileUpdated'] = 'Iphrofayela ibuyekeziwe';
  ZU['profile.toast.bioUpdated'] = 'I-bio ibuyekeziwe';
  ZU['profile.toast.detailsSaved'] = 'Imininingwane ilondoloziwe';
  ZU['profile.toast.coverUpdated'] = 'Isivikelo sibuyekeziwe';
  ZU['profile.toast.photoUpdated'] = 'Isithombe sibuyekeziwe';
  ZU['profile.toast.coverUploaded'] = 'Isivikelo silayishiwe — chofoza u-Londoloza';
  ZU['profile.toast.cvUploaded'] = 'I-CV ilayishiwe';
  ZU['profile.toast.removed'] = 'Kususiwe';
  ZU['legal.englishOnlyNotice'] = 'Lolu daokhwenti lunikezwa ngesiNgisi kuphela. Uma unemibuzo, sicela <a href="contact.html" style="color:inherit;text-decoration:underline;">uxhumane nethimba lethu lokusekela</a> ngolimi olukhethayo.';
  ZU['auth.reset.title'] = 'BEKA IPHASIWEDI ENTSHA.';
  ZU['auth.reset.desc'] = 'Khetha iphasiwedi entsha ye-akhawunti yakho.';
  ZU['auth.reset.newPassword'] = 'Iphasiwedi entsha';
  ZU['auth.reset.confirmPassword'] = 'Qinisekisa iphasiwedi entsha';
  ZU['auth.reset.err.mismatch'] = 'Amaphasiwedi awafani';
  ZU['auth.reset.err.generic'] = 'Kukhona okungahambanga kahle. Sicela uzame futhi.';
  ZU['auth.reset.cta'] = 'Beka iphasiwedi entsha';
  ZU['auth.reset.successTitle'] = 'IPHASIWEDI IBUYEKEZIWE.';
  ZU['auth.reset.successMsg'] = 'Sikuyisa kuphrofayela yakho…';
  ZU['country.za.sources'] = '<strong>Imithombo:</strong> i-Statistics South Africa (Stats SA) Inhlolovo Yamasonto Amane Yamandla Omsebenzi, Ikota 1 ka-2026 · i-Harambee Youth Employment Accelerator, umbiko iBreaking Barriers, 2026 · i-Youth Employment Service (YES).';

  ZU['country.cn.hero.title'] = 'ICHINA<br/><span class="acc"></span>';
  ZU['country.cn.hero.quote'] = 'Amaqembu abaqedile isikole aphakeme ngezinga elingakaze libonwe ashayisana nomnotho ohamba kancane. Nayi indlela intsha eminingi kangaka yaseChina eqedile isikole engakwazi ukuthola imisebenzi eziqu zayo ebeziyithembise yona.';
  ZU['country.cn.stats.s1.lbl'] = 'Izinga lokungabi khona kwemisebenzi entsha yasedolobheni (16–24, ngaphandle kwabafundi), kuFebhuwari 2026';
  ZU['country.cn.stats.s2.lbl'] = 'Izinga eliphakeme ngazo zonke izikhathi elifinyelelwe ngoJuni 2023';
  ZU['country.cn.stats.s3.lbl'] = 'Iqembu labaqedile isikole elikhulu kunazo zonke onyakeni owodwa';
  ZU['country.cn.stats.s4.lbl'] = 'Ukungabi khona kwemisebenzi jikelele yasedolobheni kuzwelonke, njengokuqhathanisa';
  ZU['country.cn.stats.title'] = 'IDATHA ESEMUVA<br/>KWENKINGA YEMISEBENZI YENTSHA <span class="acc">YASECHINA</span>';
  ZU['country.cn.causes.title'] = 'KUNGANI KUNZIMA KANGAKA UKUTHI INTSHA<br/>IQASHWE <span class="acc">ECHINA?</span>';
  ZU['country.cn.causes.c1.title'] = 'Inani eliphakeme ngazo zonke izikhathi labaqedile isikole';
  ZU['country.cn.causes.c1.desc'] = 'Amaqembu alandelanayo aphakeme ngazo zonke izikhathi abaqedile amanyuvesi — ngaphezu kwezigidi ezingu-12 onyakeni owodwa — angena emakethe yomsebenzi engakhuli ngokushesha okwanele ukubamukela.';
  ZU['country.cn.causes.c2.title'] = 'Ukwehla kwezakhiwo nokukhiqiza';
  ZU['country.cn.causes.c2.desc'] = 'Ukwehla okude ezakhiweni kanye nesidingo esibuthaka sokukhiqiza nokuthumela ngaphandle kuphozise ukuqashwa emikhakheni ejwayele ukwamukela abasebenzi abasha.';
  ZU['country.cn.causes.c3.title'] = 'Ukungahambisani kwamakhono okukhulayo';
  ZU['country.cn.causes.c3.desc'] = 'Abaqedile isikole abaningi baqeqeshelwe imisebenzi yasedolobheni yamahhovisi, kodwa izikhala ezikhona zikhula zisemikhakheni ehlukile noma zidinga amakhono ahlukile, asebenzayo ngokwengeziwe.';
  ZU['country.cn.causes.c4.title'] = 'Isikweletu esiqinile kubaqashi abancane';
  ZU['country.cn.causes.c4.desc'] = 'Amabhizinisi amancane naphakathi, ngokomlando okhulu abaqashi bentsha eChina, abhekene nezimo eziqinile zezezimali futhi aqasha ngokucophelela okwengeziwe.';
  ZU['country.cn.insight'] = 'Emakethe encintisana kangaka, iziqu ngokwazo azisavuli iminyango — <strong>ubufakazi balokho ongakwenza ngempela</strong> yikho okwenzayo. Sinikeza intsha eChina indlela yokwakha umlando oqinisekisiwe womsebenzi wangempela oqediwe, ukuze abaqashi babone ikhono ngqo esikhundleni sokuncika kuphela eziqwini enqolobaneni yabaqedile isikole egcwele kakhulu.';
  ZU['country.cn.sources'] = '<strong>Imithombo:</strong> i-National Bureau of Statistics of China (NBS), idatha yenyanga ngenyanga yokungabi khona kwemisebenzi yasedolobheni, 2025–2026 · i-Asia Society Policy Institute · umbiko ojulile we-Nippon.com.';

  ZU['country.fr.hero.title'] = 'IFRANCE<br/><span class="acc"></span>';
  ZU['country.fr.hero.quote'] = 'Izinga lokungabi khona kwemisebenzi entsha eFrance liphindwe kabili kunesilinganiso sikazwelonke. Isithiyo akulona ikhono — kuwuhlelo lwemakethe yomsebenzi elakhelwe ngeziqu nokuqaphela.';
  ZU['country.fr.stats.s1.lbl'] = 'Izinga lokungabi khona kwemisebenzi entsha (iminyaka engu-15–24), ekuqaleni kuka-2026';
  ZU['country.fr.stats.s2.lbl'] = 'Izinga lokungabi khona kwemisebenzi jikelele kuzwelonke, njengokuqhathanisa';
  ZU['country.fr.stats.s3.lbl'] = 'Ingozi ephakeme yokungabi khona kwemisebenzi kwabanezitifiketi zesisekelo kuphela';
  ZU['country.fr.stats.s4.lbl'] = 'Izinga eliphakeme ngazo zonke izikhathi lokungabi khona kwemisebenzi entsha elifinyelelwe ngo-2013';
  ZU['country.fr.stats.title'] = 'IDATHA ESEMUVA<br/>KWENKINGA YEMISEBENZI YENTSHA <span class="acc">YASEFRANCE</span>';
  ZU['country.fr.causes.title'] = 'KUNGANI KUNZIMA KANGAKA UKUTHI INTSHA<br/>IQASHWE <span class="acc">EFRANCE?</span>';
  ZU['country.fr.causes.c1.title'] = 'Isitebhisi esiqinile seziqu';
  ZU['country.fr.causes.c1.desc'] = 'Imakethe yomsebenzi yaseFrance ibeka isisindo esikhulu eziqwini ezisemthethweni nasesithunzini sezikhungo, okusho ukuthi uhlobo nesithunzi sesitifiketi kungabaluleka njengekhono elibonisiwe.';
  ZU['country.fr.causes.c2.title'] = 'Imithetho eqinile yokuqasha nokuxosha';
  ZU['country.fr.causes.c2.desc'] = 'Ukuvikelwa kwemisebenzi okuqinile kwenza abaqashi baqaphele ukuqasha kokuqala, njengoba ukususa umsebenzi omusha ongasebenzi kahle kamuva kubiza kakhulu futhi kuhamba kancane.';
  ZU['country.fr.causes.c3.title'] = 'Uchungechunge lokufundela umsebenzi olungahambisani';
  ZU['country.fr.causes.c3.desc'] = 'Izindlela zokufunda umsebenzi nokufundela umsebenzi zikhona kodwa azinaso isithunzi esifanayo nezindlela zezemfundo, okuhambisa iningi lokuncintisana ezindleleni ezijwayelekile ezimbalwa.';
  ZU['country.fr.causes.c4.title'] = 'Izikhala zezifunda nezomkhakha';
  ZU['country.fr.causes.c4.desc'] = 'Ukungabi khona kwemisebenzi entsha kuphakeme kakhulu kwezinye izifunda naphakathi kwabangenazo neziqu ngqo, okubonisa ukuthi umthwalo wale nkinga awusatshalaliswa ngokulinganayo ezweni lonke.';
  ZU['country.fr.insight'] = 'Uhlelo lwaseFrance luvuza <strong>iphepha elifanele</strong> kunekhono elibonisiwe. Sinikeza intsha indlela yesibili: ukuqedela umsebenzi wangempela okhokhelwayo wamabhizinisi angempela, ukwakha idumela eliqinisekisiwe, futhi sivumele ikhono elibonisiwe — hhayi nje isithunzi sesitifiketi — ukuvula umnyango womsebenzi ogcwele.';
  ZU['country.fr.sources'] = '<strong>Imithombo:</strong> i-Eurostat, izinga lokungabi khona kwemisebenzi entsha (15–24), 2025–2026 · i-Trading Economics · uMnyango Wezemfundo Kazwelonke, Imfundo Ephakeme Nocwaningo waseFrance.';

  ZU['country.es.hero.title'] = 'ISPAIN<br/><span class="acc"></span>';
  ZU['country.es.hero.quote'] = 'ISpain isanezinga eliphakeme kunawo wonke lokungabi khona kwemisebenzi entsha ku-EU. Imakethe yomsebenzi ehlukanisiwe futhi ehambisana nezinkathi zonyaka igcina abasebenzi abasha bevalelwe ngaphandle kwezikhundla eziqinile nezisikhathi eside.';
  ZU['country.es.stats.s1.lbl'] = 'Izinga lokungabi khona kwemisebenzi entsha (ngaphansi kweminyaka engu-25), Januwari 2026';
  ZU['country.es.stats.s2.lbl'] = 'Izinga eliphakeme ngazo zonke izikhathi elifinyelelwe ngo-2013, njengesizinda somlando';
  ZU['country.es.stats.s3.lbl'] = 'Isilinganiso sokungabi khona kwemisebenzi entsha ku-EU yonke, njengokuqhathanisa';
  ZU['country.es.stats.s4.lbl'] = 'Abangenamsebenzi ababhalisiwe abangaphansi kweminyaka engu-25 ekupheleni kuka-2025 — izinga eliphansi ngazo zonke izikhathi';
  ZU['country.es.stats.title'] = 'IDATHA ESEMUVA<br/>KWENKINGA YEMISEBENZI YENTSHA <span class="acc">YASESPAIN</span>';
  ZU['country.es.causes.title'] = 'KUNGANI KUNZIMA KANGAKA UKUTHI INTSHA<br/>IQASHWE <span class="acc">ESPAIN?</span>';
  ZU['country.es.causes.c1.title'] = 'Imakethe yomsebenzi ehlukanisiwe';
  ZU['country.es.causes.c1.desc'] = 'Ukwahlukana kwesikhathi eside phakathi kwezivumelwano zesikhathi eside ezivikelwe kakhulu kanye nezesikhashana ezingaqinile kakhulu kugcina umsebenzi ongaqinile, wesikhashana ugxile entsha.';
  ZU['country.es.causes.c2.title'] = 'Umnotho ohambisana nezinkathi zonyaka, ogxile kakhulu kwezokuvakasha';
  ZU['country.es.causes.c2.desc'] = 'Izingxenye ezinkulu zomnotho waseSpain — ezokuvakasha, ukwamukela izivakashi, ezolimo — zihambisana nezinkathi zonyaka ngokwemvelo, zidale ukuguquguquka esikhundleni semisebenzi eqinile, yesikhathi eside yezinga eliphansi.';
  ZU['country.es.causes.c3.title'] = 'Umehluko omkhulu wezifunda';
  ZU['country.es.causes.c3.desc'] = 'Ukungabi khona kwemisebenzi kuphakeme kakhulu eningizimu, njengase-Andalusia, kunesilinganiso sikazwelonke, okubonisa ukungalingani okujulile nokuqhubekayo kwezifunda.';
  ZU['country.es.causes.c4.title'] = 'Ukungahambisani phakathi kwemfundo nemakethe';
  ZU['country.es.causes.c4.desc'] = 'Izikhala eziqhubekayo phakathi kwalokho izikole namanyuvesi akufundisayo nalokho abaqashi abakudingayo ngempela kubangela ukusesha komsebenzi okude nokunzima kubaqedile isikole abasha.';
  ZU['country.es.insight'] = 'Izinga lokungabi khona kwemisebenzi entsha yaseSpain seliphungukile ngaphezu kohhafu kusukela esikhathini sokuphakama kwalo ngo-2013 — kodwa lisahlala <strong>liphakeme kakhulu ku-EU</strong>. Sinikeza intsha yaseSpain indlela yokwakha ubufakazi bomsebenzi obuqhubekayo emakethe yomsebenzi ehlukene, ehambisana nezinkathi zonyaka, iguqula imisebenzi yesikhashana ibe idumela eliqinisekisiwe abaqashi abangalithemba ngezikhundla eziphakade.';
  ZU['country.es.sources'] = '<strong>Imithombo:</strong> i-Instituto Nacional de Estadística (INE), Inhlolovo Yesibalo Somsebenzi · i-Eurostat, izinga lokungabi khona kwemisebenzi entsha · i-Trading Economics.';

  ZU['country.gb.hero.title'] = 'I-UNITED<br/><span class="acc">KINGDOM</span>';
  ZU['country.gb.hero.quote'] = 'Ukungabi khona kwemisebenzi entsha e-UK kusanda kufinyelela izinga eliphakeme kuneminyaka engu-11 edlule. Iziqu ziqhubeka nokujwayeleka — futhi, ngokuphambana, kunzima kakhulu ukuziguqula zibe umsebenzi wokuqala.';
  ZU['country.gb.stats.s1.lbl'] = 'Izinga lokungabi khona kwemisebenzi entsha (16–24), Julayi 2026 — eliphakeme kuneminyaka engu-11';
  ZU['country.gb.stats.s2.lbl'] = 'Isabelo sabaqedile isikole abasebenza ezikhundleni ezingadingi iziqu';
  ZU['country.gb.stats.s3.lbl'] = 'Intsha engekho emfundweni, emsebenzini noma ekuqeqeshweni (i-NEET) — irekhodi loshungechunge';
  ZU['country.gb.stats.s4.lbl'] = 'Abafuna umsebenzi abasha abangasebenzi isikhathi esingaphezu konyaka';
  ZU['country.gb.stats.title'] = 'IDATHA ESEMUVA<br/>KWENKINGA YEMISEBENZI YENTSHA <span class="acc">YE-UNITED KINGDOM</span>';
  ZU['country.gb.causes.title'] = 'KUNGANI KUNZIMA KANGAKA UKUTHI INTSHA<br/>IQASHWE E-<span class="acc">UNITED KINGDOM?</span>';
  ZU['country.gb.causes.c1.title'] = 'Ukukhuphuka kwezidingo zeziqu';
  ZU['country.gb.causes.c1.desc'] = 'Njengoba abantu abaningi bezuza iziqu, abaqashi baye baphakamisa ngokuthula izidingo zokungena ngaphandle kokuthi ubunkimbinkimbi bomsebenzi buyakhuphuka ngempela, kuphendula iziqu zibe yisihlungi sokuhlungwa kunokuba yisibonakaliso sangempela sekhono.';
  ZU['country.gb.causes.c2.title'] = 'Ukunyamalala kwezikhundla zezinga eliphansi';
  ZU['country.gb.causes.c2.desc'] = 'Izikhundla zomsebenzi wokuqala ziwe kwelinye lamazinga aphansi kakhulu eminyakeni engaphezu kweishumi ngaphandle kobhubhane, kunciphisa inani lezinyathelo zokuqala esitebhisini somsebenzi.';
  ZU['country.gb.causes.c3.title'] = 'Izindleko ezikhulayo zokuqasha kokuqala';
  ZU['country.gb.causes.c3.desc'] = 'Intela ephakeme yeholo labaqashi kanye nokukhuphuka kweholo eliphansi kwenze ukuqashwa kwabasha kubize kakhulu ngesikhathi isidingo sabaqashi sibuthaka.';
  ZU['country.gb.causes.c4.title'] = 'Umphumela wesikhathi eside';
  ZU['country.gb.causes.c4.desc'] = 'Ngaphezu kwengxenye yesihlanu yabafuna umsebenzi abasha abangasebenzi unyaka noma ngaphezulu, ukungabi khona kwemisebenzi okude ngokwako kuba yisithiyo, njengoba abaqashi bekhula ukuqaphela ngezikhala ezikhulayo zomsebenzi.';
  ZU['country.gb.insight'] = 'Iziqu e-UK zikhuphuka ngokuqinisekisa ukuthi ungakwazi <strong>ukufunda</strong> — hhayi ukuthi ungakwazi <strong>ukwenza umsebenzi</strong>. Sivala leyo gebe ngokuvumela intsha ukuthi iqedele imisebenzi yangempela ekhokhelwayo futhi yakhe irekhodi lamakhono aqinisekisiwe kusukela osukwini lokuqala, sinikeza abaqashi isibonakaliso esisheshayo, esithembekile kunezeziqu kuphela.';
  ZU['country.gb.sources'] = '<strong>Imithombo:</strong> i-Office for National Statistics (ONS), Izibalo Zemakethe Yomsebenzi, Julayi 2026 · i-Institute for the Future of Work (IFOW) · i-Work Foundation, Inyuvesi yaseLancaster.';

  ZU['country.us.hero.title'] = 'I-UNITED<br/><span class="acc">STATES</span>';
  ZU['country.us.hero.quote'] = 'Okokuqala eminyakeni engamashumi, abaqedile amanyuvesi kamuva babhekene nokungabi khona kwemisebenzi okuphakeme kunesilinganiso sikazwelonke. Iziqu azizona inkinga — isitebhisi sezinga eliphansi yisona esingekho.';
  ZU['country.us.stats.s1.lbl'] = 'Ukungabi khona kwemisebenzi kwabaqedile kamuva abaneminyaka engu-22–27, Ikota 1 ka-2026';
  ZU['country.us.stats.s2.lbl'] = 'Isabelo sabaqedile kamuva abasebenza imisebenzi engadingi iziqu';
  ZU['country.us.stats.s3.lbl'] = 'Ukungabi khona kwemisebenzi kwabanezitifiketi abaneminyaka engu-25+, njengokuqhathanisa';
  ZU['country.us.stats.s4.lbl'] = 'Ukwehla konyaka nonyaka kwezikhundla zomsebenzi zezinga eliphansi emakampasini';
  ZU['country.us.stats.title'] = 'IDATHA ESEMUVA<br/>KWENKINGA YEMISEBENZI YENTSHA <span class="acc">YASE-UNITED STATES</span>';
  ZU['country.us.causes.title'] = 'KUNGANI KUNZIMA KANGAKA UKUTHI INTSHA<br/>IQASHWE E-<span class="acc">UNITED STATES?</span>';
  ZU['country.us.causes.c1.title'] = 'Ukungabi khona kwemisebenzi kwabaqedile manje sekudlula izinga likazwelonke';
  ZU['country.us.causes.c1.desc'] = 'Iminyaka emihlanu elandelanayo, ukungabi khona kwemisebenzi kwabaqedile amanyuvesi kamuva kudlule izinga likazwelonke jikelele — okuyinto engakaze izwakale phakathi kuka-1990 no-2018.';
  ZU['country.us.causes.c2.title'] = 'Izikhundla zezinga eliphansi ezimbalwa';
  ZU['country.us.causes.c2.desc'] = 'Imikhakha ejwayele ukwamukela abaqedile abasha ibincishisa imisebenzi, futhi izikhundla ezigxile emakampasini zehle kakhulu unyaka nonyaka nakuba izicelo ngasikhundla ngasinye ziqhubeka nokukhuphuka.';
  ZU['country.us.causes.c3.title'] = 'Igebe lokuqeqeshwa emsebenzini wokusebenza kude';
  ZU['country.us.causes.c3.desc'] = 'Ucwaningo lukhomba ukuthi abaqashi bayaqaphela ukuqasha abantu abangenalwazi ezikhundleni ezigxile ekusebenzeni kude, lapho ukuqeqeshwa okungahleliwe emsebenzini okuphendula umqedile omusha abe umsebenzi okhiqizayo kunzima ukukunikeza.';
  ZU['country.us.causes.c4.title'] = 'Imiphumela ihluke kakhulu ngokwesifundo';
  ZU['country.us.causes.c4.desc'] = 'Ukusetshenziswa okuncane komsebenzi kusuka ngaphansi kuka-20% emikhakheni efana nobuhlengikazi nesayensi yamakhompyutha kuya ngaphezu kuka-60% kwezinye izifundo zobuntu nesayensi yomphakathi, okubonisa ukuthi le yinkinga yezinga eliphansi, hhayi ubufakazi bokuthi iziqu azisakhokhi.';
  ZU['country.us.insight'] = 'Idatha icacile: akusikho ukuthi iziqu azisabalulekile, kodwa akukho indlela ethembekile yokufakazela ukuthi <strong>usulungele umsebenzi</strong> ngaphambi kokuba umuntu akunikeze wona. Sivumela intsha yaseMelika ukuthi iqedele imisebenzi yangempela ekhokhelwayo futhi yakhe umlando womsebenzi oqinisekisiwe okhuluma ngamandla kune-GPA — sivala kanye lelo gebe lezinga eliphansi eliholele ukungabi khona kwemisebenzi kwabaqedile ngaphezu kwesilinganiso sikazwelonke.';
  ZU['country.us.sources'] = '<strong>Imithombo:</strong> i-Federal Reserve Bank of New York, The Labor Market for Recent College Graduates, Ikota 1 ka-2026 · i-National Association of Colleges and Employers (NACE) · i-Economic Policy Institute (EPI).';
  ZU['cookies.analytics.desc'] = 'Sisize ukuqonda indlela abantu abasebenzisa ngayo inkundla yethu — yiziphi amakhasi avakashelwayo, lapho abasebenzisi bewa khona, nendlela izici ezisebenza kahle ngayo. Idatha ihlanganiswa futhi ayaziwa. Sisebenzisa lokhu ukuthuthukisa iNkundla, hhayi ukukubukela.';
  ZU['cookies.hero.desc'] = 'Khetha amakhukhi esiwasebenzisayo. Amakhukhi adingekayo ahlala esebenza — enza isayithi lisebenze. Konke okunye kuya ngawe.';
  ZU['cookies.info.2'] = 'Sisebenzisa amakhukhi nobuchwepheshe obufanayo njengoba kuchaziwe ngenhla. Ukuze uthole imininingwane egcwele ukuthi siphatha kanjani idatha yakho yomuntu siqu, bheka i-<a href="privacy-policy.html">Inqubomgomo Yobumfihlo</a> yethu.';
  ZU['cookies.marketing.desc'] = 'Sivumele ukukukhombisa okuqukethwe okufanele kwezinye izinkundla. Asiwadayisi amadatha akho kubakhangisi. Uma ukhetha ukungenela, ungase ubone izikhangiso zethu kumasayithi afana ne-LinkedIn noma i-Google ngokuya ngendlela osebenzisa ngayo.';
  ZU['dispute.hero.desc'] = 'Uma kukhona okungahambi kahle, siyangenelela. Inqubo yethu yokuxazulula izingxabano iyafaneleka, isheshayo, futhi ibopha ngaphakathi kohlelo — ivikela abasebenzi namabhizinisi ngokulinganayo.';
  ZU['dispute.rules.2'] = 'Isinqumo sethu sokuxazulula sibopha ngaphakathi kohlelo — sinquma ukuthi imali ikhishwa kanjani. Akusona isinqumo somthetho futhi asithinti ilungelo lakho lokuphishekela lolu daba ngezinkantolo noma inhlangano evikela abathengi efanele.';
  ZU['terms.notice'] = '<strong>Isifinyezo ngolimi olulula:</strong> Le mibandela ilawula ukusetshenziswa kwakho kwe-YoungMerit. Abasebenzi bathola imisebenzi futhi bakhokhelwe nge-escrow ephephile. Amabhizinisi athumela imisebenzi futhi akhokhele abasebenzi. Sithatha inkomishini engu-10% kuwo wonke umsebenzi oqedelwe. Funda iSigaba 6 (Isikhwama Nezinkokhelo) neSigaba 8 (Izimpikiswano) ngokucophelela.';

  I18N.zu = ZU;

  // ==================== EXPOSE GLOBALLY ====================
  window.HONEI18N = window.HONEI18N || {};
  window.HONEI18N.dict = I18N;

  function getLang() {
    var saved = localStorage.getItem('YOUNGMERIT_lang');
    return (saved && LANGS.indexOf(saved) !== -1) ? saved : 'en';
  }

  function t(key) {
    var lang = getLang();
    var dict = I18N[lang] || I18N.en;
    if (dict[key] != null) return dict[key];
    if (I18N.en[key] != null) return I18N.en[key];
    return key;
  }
  window.HONEI18N.t = t;

  function applyTranslations() {
    var lang = getLang();
    document.documentElement.lang = lang;
    document.documentElement.classList.toggle('lang-zh', lang === 'zh');

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      var attr = el.getAttribute('data-i18n-attr');
      if (attr) el.setAttribute(attr, val);
      else if (el.hasAttribute('data-i18n-html')) el.innerHTML = val;
      else el.textContent = val;
    });

    document.querySelectorAll('.nav-lang-label').forEach(function (el) { el.textContent = LANG_CODE[lang]; });
    document.querySelectorAll('.nav-lang-item').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    document.querySelectorAll('.cdd').forEach(function (cddEl) {
      var active = cddEl.querySelector('.cdd-item.active');
      var labelSpan = cddEl.querySelector('.cdd-btn span');
      if (active && labelSpan) labelSpan.textContent = active.textContent;
    });

    // Re-render any dynamic content on profile pages
    if (typeof reRender === 'function') reRender();
    if (typeof renderSavedPosts === 'function') renderSavedPosts();
  }
  window.HONEI18N.apply = applyTranslations;

  function setLang(lang) {
    if (LANGS.indexOf(lang) === -1) return;
    localStorage.setItem('YOUNGMERIT_lang', lang);
    applyTranslations();
    document.querySelectorAll('.nav-lang-menu.open').forEach(function (m) { m.classList.remove('open'); });
    document.querySelectorAll('.nav-lang-btn.open').forEach(function (b) { b.classList.remove('open'); });
    if (typeof window.onYOUNGMERITLangChange === 'function') window.onYOUNGMERITLangChange(lang);
  }
  window.setLang = setLang;

  window.toggleNavLang = function (btn) {
    var wrap = btn.closest('.nav-lang-wrap');
    if (!wrap) return;
    wrap.querySelector('.nav-lang-menu').classList.toggle('open');
    btn.classList.toggle('open');
  };

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-lang-wrap')) {
      document.querySelectorAll('.nav-lang-menu.open').forEach(function (m) { m.classList.remove('open'); });
      document.querySelectorAll('.nav-lang-btn.open').forEach(function (b) { b.classList.remove('open'); });
    }
    if (!e.target.closest('.nav-profile-wrap')) {
      document.querySelectorAll('.nav-profile-menu.open').forEach(function (m) { m.classList.remove('open'); });
      document.querySelectorAll('.nav-profile-avatar-btn.open').forEach(function (b) { b.classList.remove('open'); });
    }
  });

  var style = document.createElement('style');
  style.textContent =
    '.nav-lang-wrap{position:relative;display:inline-block;}' +
    '.nav-lang-btn{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,0.07);border:1.5px solid rgba(255,255,255,0.12);color:var(--cream);font-family:"DM Sans",sans-serif;font-size:13px;font-weight:600;padding:7px 10px;border-radius:8px;cursor:pointer;transition:all 0.2s;}' +
    '.nav-lang-btn:hover,.nav-lang-btn.open{border-color:var(--amber);background:rgba(255,255,255,0.12);}' +
    '.nav-lang-btn svg{transition:transform 0.2s;flex-shrink:0;}' +
    '.nav-lang-btn.open svg{transform:rotate(180deg);}' +
    '.nav-end{margin-left:auto;display:flex;align-items:center;gap:14px;}' +
    '.nav-end .nav-right,.nav-end #navRight{margin-left:0;}' +
    '.nav-lang-menu{position:absolute;top:calc(100% + 8px);right:0;background:var(--white,#FDFAF5);border:1.5px solid var(--stone-light,#D4C9B8);border-radius:12px;box-shadow:0 16px 40px rgba(26,18,8,0.22);padding:6px;display:none;flex-direction:column;gap:1px;z-index:1100;min-width:150px;opacity:0;transform:translateY(-6px);transition:opacity 0.18s ease,transform 0.18s ease;}' +
    '.nav-lang-menu.open{display:flex;opacity:1;transform:translateY(0);}' +
    '.nav-lang-item{background:transparent;border:none;text-align:left;padding:9px 11px;border-radius:8px;font-size:13.5px;font-weight:500;color:var(--brown,#3D2B0F);cursor:pointer;font-family:"DM Sans",sans-serif;display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;}' +
    '.nav-lang-item:hover{background:var(--card,#EDE8DE);color:var(--dark,#1A1208);}' +
    '.nav-lang-item.active{background:rgba(196,134,26,0.12);color:var(--dark,#1A1208);font-weight:700;}' +
    '.nav-lang-item .check{opacity:0;color:var(--amber,#C4861A);}' +
    '.nav-lang-item.active .check{opacity:1;}' +
    'html.lang-zh body,html.lang-zh input,html.lang-zh textarea,html.lang-zh button,html.lang-zh select{font-family:"PingFang SC","Microsoft YaHei","Noto Sans SC","Helvetica Neue",Arial,sans-serif;}' +
    'html.lang-zh h1,html.lang-zh h2,html.lang-zh h3,html.lang-zh .logo{font-family:"PingFang SC","Microsoft YaHei","Noto Sans SC",sans-serif;letter-spacing:0;}' +
    '@media(max-width:640px){.nav-lang-label{display:none;}}' +
    // ── Profile menu (avatar-only trigger, holds language + account links) ──
    '.nav-profile-wrap{position:relative;display:inline-block;}' +
    '.nav-profile-avatar-btn{display:flex;align-items:center;justify-content:center;width:46px;height:46px;border-radius:50%;background:var(--amber,#C4861A);color:var(--dark,#1A1208);border:1.5px solid rgba(255,255,255,0.15);font-family:"Archivo Black",sans-serif;font-size:18px;cursor:pointer;transition:all 0.2s;padding:0;overflow:hidden;flex-shrink:0;position:relative;}' +
    '.nav-notif-badge-dot{position:absolute;top:-2px;right:-2px;width:15px;height:15px;border-radius:50%;background:#B23A3A;border:2px solid var(--dark,#0E0906);display:none;}' +
    '.nav-notif-badge-dot.show{display:block;}' +
    '.nav-profile-avatar-btn:hover,.nav-profile-avatar-btn.open{border-color:var(--cream,#FDFAF5);transform:translateY(-1px);}' +
    '.nav-profile-avatar-btn img{width:100%;height:100%;object-fit:cover;}' +
    '.nav-profile-menu{position:absolute;top:calc(100% + 10px);right:0;background:var(--white,#FDFAF5);border:1.5px solid var(--stone-light,#D4C9B8);border-radius:14px;box-shadow:0 16px 40px rgba(26,18,8,0.22);padding:8px;display:none;flex-direction:column;gap:1px;z-index:1100;min-width:200px;opacity:0;transform:translateY(-6px);transition:opacity 0.18s ease,transform 0.18s ease;}' +
    '.nav-profile-menu.open{display:flex;opacity:1;transform:translateY(0);}' +
    '.nav-profile-menu-item{background:transparent;border:none;text-align:left;padding:10px 12px;border-radius:9px;font-size:14px;font-weight:500;color:var(--brown,#3D2B0F);cursor:pointer;font-family:"DM Sans",sans-serif;display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;text-decoration:none;box-sizing:border-box;}' +
    '.nav-profile-menu-item:hover{background:var(--card,#EDE8DE);color:var(--dark,#1A1208);}' +
    '.nav-profile-menu-item.danger{color:#8B2020;}' +
    '.nav-profile-menu-item.danger:hover{background:#F5E8E8;}' +
    '.nav-profile-divider{height:1px;background:var(--stone-light,#D4C9B8);margin:6px 4px;}' +
    '.nav-profile-lang-sub{display:none;flex-direction:column;gap:1px;padding-left:10px;margin:2px 0 4px;border-left:2px solid var(--card,#EDE8DE);margin-left:12px;}' +
    '.nav-profile-lang-sub.open{display:flex;}' +
    '.nav-profile-lang-sub .nav-lang-item{padding:8px 11px;font-size:13.5px;}' +
    '.nav-profile-currency-sub{display:none;flex-direction:column;gap:1px;padding-left:10px;margin:2px 0 4px;border-left:2px solid var(--card,#EDE8DE);margin-left:12px;}' +
    '.nav-profile-currency-sub.open{display:flex;}' +
    '.nav-profile-currency-sub .nav-lang-item{padding:8px 11px;font-size:13.5px;}' +
    '.nav-profile-notifs-sub{display:none;flex-direction:column;gap:2px;padding:8px 12px;margin:2px 0 4px;border-left:2px solid var(--card,#EDE8DE);margin-left:12px;}' +
    '.nav-profile-notifs-sub.open{display:flex;}' +
    '.nav-notif-row{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:6px 0;font-size:13px;color:var(--brown,#3D2B0F);}' +
    '.nav-notif-toggle{width:36px;height:20px;border-radius:10px;background:var(--stone-light,#D4C9B8);border:none;position:relative;cursor:pointer;flex-shrink:0;transition:background 0.2s;padding:0;}' +
    '.nav-notif-toggle.on{background:var(--amber,#C4861A);}' +
    '.nav-notif-toggle .dot{position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:#fff;transition:transform 0.2s;}' +
    '.nav-notif-toggle.on .dot{transform:translateX(16px);}' +
    '.nav-profile-menu-item .chev{transition:transform 0.2s;opacity:0.5;}' +
    '.nav-current-currency{color:var(--stone,#8A7560);font-size:12.5px;}' +
    '.nav-profile-menu-item .chev.open{transform:rotate(180deg);}';
  document.head.appendChild(style);

  function buildProfileMenu(mount, user) {
    var initial = (user.name || 'U').charAt(0).toUpperCase();
    var avatarInner = user.photoUrl
      ? '<img src="' + user.photoUrl + '" alt="" onerror="this.style.display=\'none\';var s=document.getElementById(\'navAvatarInitial\');if(s)s.style.display=\'flex\';"/><span id="navAvatarInitial" style="display:none;align-items:center;justify-content:center;width:100%;height:100%;">' + initial + '</span>'
      : initial;
    var currentLangName = { en: 'English', es: 'Español', fr: 'Français', zh: '中文', zu: 'isiZulu' }[getLang()] || 'English';
    var activeCurrency = getUserCurrency();
    var rawUserForCurrency = null;
    try { rawUserForCurrency = JSON.parse(localStorage.getItem('growiq_user')); } catch (e) {}
    var hasManualCurrency = !!(rawUserForCurrency && rawUserForCurrency.preferredCurrency);
    var currencyOptionsHtml =
      '<button type="button" class="nav-lang-item' + (!hasManualCurrency ? ' active' : '') + '" onclick="resetCurrencyToAutomatic()">Automatic (based on your country)</button>' +
      ['ZAR','EUR','USD','GBP','CNY'].map(function(code){
        return '<button type="button" class="nav-lang-item' + (hasManualCurrency && code === activeCurrency ? ' active' : '') + '" onclick="selectCurrency(\'' + code + '\')">' + CURRENCY_LABELS[code] + '</button>';
      }).join('');
    mount.innerHTML =
      '<div class="nav-profile-wrap">' +
        '<button type="button" class="nav-profile-avatar-btn" onclick="toggleNavProfile(this)" aria-label="Account menu">' + avatarInner + '<span class="nav-notif-badge-dot" id="navNotifBadgeDot"></span></button>' +
        '<div class="nav-profile-menu">' +
          '<a href="profile.html" class="nav-profile-menu-item" data-i18n="nav.profileMenu.profile">Profile</a>' +
          '<button type="button" class="nav-profile-menu-item" onclick="toggleNavProfileNotifs(this, \'' + (user.supabaseId||'') + '\')">' +
            '<span data-i18n="nav.profileMenu.notifications">Notification Settings</span>' +
            '<svg class="chev" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 9-7 7-7-7"/></svg>' +
          '</button>' +
          '<div class="nav-profile-notifs-sub">' +
            '<div class="nav-notif-row"><span>New invites</span><button type="button" class="nav-notif-toggle" id="navNotifInvitesToggle" onclick="setNotifPref(\'invites_enabled\', this)"><span class="dot"></span></button></div>' +
            '<div class="nav-notif-row"><span>Show badge on my avatar</span><button type="button" class="nav-notif-toggle" id="navNotifBadgeToggle" onclick="setNotifPref(\'show_nav_badge\', this)"><span class="dot"></span></button></div>' +
          '</div>' +
          '<button type="button" class="nav-profile-menu-item" onclick="toggleNavProfileCurrency(this, \'' + (user.supabaseId||'') + '\')">' +
            '<span>Currency</span>' +
            '<span style="display:flex;align-items:center;gap:6px;">' +
              '<span class="nav-current-currency" id="navCurrentCurrencyLabel">' + (CURRENCY_SYMBOLS[activeCurrency] || 'R') + '</span>' +
              '<svg class="chev" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 9-7 7-7-7"/></svg>' +
            '</span>' +
          '</button>' +
          '<div class="nav-profile-currency-sub" id="navProfileCurrencySub">' +
            currencyOptionsHtml +
          '</div>' +
          '<button type="button" class="nav-profile-menu-item" onclick="toggleNavProfileLang(this)">' +
            '<span data-i18n="nav.profileMenu.language">Language</span>' +
            '<span style="display:flex;align-items:center;gap:6px;opacity:0.6;font-size:12.5px;font-weight:400;">' + currentLangName +
              '<svg class="chev" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 9-7 7-7-7"/></svg>' +
            '</span>' +
          '</button>' +
          '<div class="nav-profile-lang-sub">' +
            '<button type="button" class="nav-lang-item" data-lang="en" onclick="setLang(\'en\')">English<span class="check">&#10003;</span></button>' +
            '<button type="button" class="nav-lang-item" data-lang="es" onclick="setLang(\'es\')">Español<span class="check">&#10003;</span></button>' +
            '<button type="button" class="nav-lang-item" data-lang="fr" onclick="setLang(\'fr\')">Français<span class="check">&#10003;</span></button>' +
            '<button type="button" class="nav-lang-item" data-lang="zh" onclick="setLang(\'zh\')">中文<span class="check">&#10003;</span></button>' +
            '<button type="button" class="nav-lang-item" data-lang="zu" onclick="setLang(\'zu\')">isiZulu<span class="check">&#10003;</span></button>' +
          '</div>' +
          '<a href="privacy-policy.html" class="nav-profile-menu-item" data-i18n="nav.profileMenu.privacy">Privacy Policy</a>' +
          '<a href="terms.html" class="nav-profile-menu-item" data-i18n="nav.profileMenu.terms">Terms</a>' +
          '<div class="nav-profile-divider"></div>' +
          '<button type="button" class="nav-profile-menu-item danger" onclick="growiqLogout()" data-i18n="nav.logOut">Sign Out</button>' +
        '</div>' +
      '</div>';
    applyTranslations();
    if (user.supabaseId && !user.isDemo) checkUnreadInviteBadge(user.supabaseId);
  }

  async function checkUnreadInviteBadge(userId){
    var client = getPageSupabaseClient();
    if (!client) return; // this page hasn't loaded a real Supabase client -- badge just won't show here, no harm done
    try {
      var prefRes = await client.from('notification_preferences').select('show_nav_badge').eq('user_id', userId).maybeSingle();
      var showBadge = !prefRes || !prefRes.data || prefRes.data.show_nav_badge !== false; // defaults to true if no row yet
      if (!showBadge) return;
      var countRes = await client.from('notifications').select('id', { count: 'exact', head: true }).eq('user_id', userId).eq('type', 'invite').eq('is_read', false);
      var dot = document.getElementById('navNotifBadgeDot');
      if (dot && countRes && countRes.count > 0) dot.classList.add('show');
    } catch (e) {
      console.error('YoungMerit: failed to check unread invites', e);
    }
  }

  window.toggleNavProfile = function (btn) {
    var wrap = btn.closest('.nav-profile-wrap');
    if (!wrap) return;
    wrap.querySelector('.nav-profile-menu').classList.toggle('open');
    btn.classList.toggle('open');
  };

  window.toggleNavProfileLang = function (btn) {
    var sub = btn.parentElement.querySelector('.nav-profile-lang-sub');
    var chev = btn.querySelector('.chev');
    if (sub) sub.classList.toggle('open');
    if (chev) chev.classList.toggle('open');
  };

  var currentNotifUserId = null;

  // ==================== CURRENCY ====================
  // Rates are approximate mid-market rates (checked Sept 2026), not a live
  // feed -- good enough for showing a sensible price in someone's own
  // currency, not precise enough for anything that needs to settle real
  // money. The site's own prices are all denominated in ZAR; everything
  // else is derived from that at display time.
  var CURRENCY_RATES_FROM_ZAR = { ZAR: 1, EUR: 0.0538, USD: 0.0625, GBP: 0.0458, CNY: 0.411 };
  var CURRENCY_SYMBOLS = { ZAR: 'R', EUR: '€', USD: '$', GBP: '£', CNY: '¥' };
  var CURRENCY_LABELS = { ZAR: 'Rand (R)', EUR: 'Euro (€)', USD: 'Dollar ($)', GBP: 'Pound (£)', CNY: 'Yuan (¥)' };
  var COUNTRY_NAME_TO_CURRENCY = { 'South Africa': 'ZAR', 'Spain': 'EUR', 'France': 'EUR', 'China': 'CNY', 'United Kingdom': 'GBP', 'United States': 'USD' };

  function getUserCurrency(){
    var u = null;
    try { u = JSON.parse(localStorage.getItem('growiq_user')); } catch (e) {}
    console.log('YoungMerit currency debug -- raw growiq_user.country:', JSON.stringify(u && u.country), '| preferredCurrency:', JSON.stringify(u && u.preferredCurrency), '| country lookup match:', u && u.country ? COUNTRY_NAME_TO_CURRENCY[u.country] : 'n/a (no country set)');
    if (u && u.preferredCurrency && CURRENCY_RATES_FROM_ZAR[u.preferredCurrency]) return u.preferredCurrency;
    if (u && u.country && COUNTRY_NAME_TO_CURRENCY[u.country]) return COUNTRY_NAME_TO_CURRENCY[u.country];
    return 'ZAR'; // the site's own default for guests and anyone without a set country
  }

  function formatZAR(zarAmount){
    var currency = getUserCurrency();
    var symbol = CURRENCY_SYMBOLS[currency] || 'R';
    var converted = (parseFloat(zarAmount) || 0) * (CURRENCY_RATES_FROM_ZAR[currency] || 1);
    var rounded = converted >= 100 ? Math.round(converted) : Math.round(converted * 100) / 100;
    return symbol + rounded.toLocaleString();
  }

  window.HONEI18N.getCurrency = getUserCurrency;
  console.log('YoungMerit I18n.js loaded -- BUILD v2026-09-07-currency-debug');
  window.HONEI18N.formatZAR = formatZAR;
  window.HONEI18N.CURRENCY_SYMBOLS = CURRENCY_SYMBOLS;
  window.HONEI18N.CURRENCY_RATES_FROM_ZAR = CURRENCY_RATES_FROM_ZAR;
  window.HONEI18N.convertZAR = function(zarAmount){
    var currency = getUserCurrency();
    var converted = (parseFloat(zarAmount) || 0) * (CURRENCY_RATES_FROM_ZAR[currency] || 1);
    return converted >= 100 ? Math.round(converted) : Math.round(converted * 100) / 100;
  };


  function getPageSupabaseClient(){
    if (typeof ymSupabaseClient !== 'undefined') return ymSupabaseClient;
    if (typeof supabase !== 'undefined' && supabase && typeof supabase.from === 'function') return supabase;
    return null;
  }

  window.toggleNavProfileNotifs = async function (btn, userId) {
    var sub = btn.parentElement.querySelector('.nav-profile-notifs-sub');
    var chev = btn.querySelector('.chev');
    if (sub) sub.classList.toggle('open');
    if (chev) chev.classList.toggle('open');
    if (!userId || !sub || !sub.classList.contains('open')) return;
    currentNotifUserId = userId;
    var client = getPageSupabaseClient();
    if (!client) return; // this page hasn't loaded a real Supabase client -- toggles still show, just can't load/save until a page with one is used
    try {
      var res = await client.from('notification_preferences').select('invites_enabled, show_nav_badge').eq('user_id', userId).maybeSingle();
      var prefs = (res && res.data) || { invites_enabled: true, show_nav_badge: true };
      document.getElementById('navNotifInvitesToggle').classList.toggle('on', prefs.invites_enabled !== false);
      document.getElementById('navNotifBadgeToggle').classList.toggle('on', prefs.show_nav_badge !== false);
    } catch (e) {
      console.error('YoungMerit: failed to load notification preferences', e);
    }
  };

  window.setNotifPref = async function (field, btnEl) {
    var newValue = !btnEl.classList.contains('on');
    btnEl.classList.toggle('on', newValue);
    if (!currentNotifUserId) return;
    var client = getPageSupabaseClient();
    if (!client) return;
    try {
      var body = { user_id: currentNotifUserId };
      body[field] = newValue;
      var res = await client.from('notification_preferences').upsert([body]);
      if (res && res.error) throw res.error;
    } catch (e) {
      console.error('YoungMerit: failed to save notification preference', e);
      btnEl.classList.toggle('on', !newValue); // revert the visual toggle since saving failed
    }
  };

  var currentCurrencyUserId = null;
  window.toggleNavProfileCurrency = function (btn, userId) {
    currentCurrencyUserId = userId || null;
    var sub = document.getElementById('navProfileCurrencySub');
    var chev = btn.querySelector('.chev');
    if (sub) sub.classList.toggle('open');
    if (chev) chev.classList.toggle('open');
  };

  window.selectCurrency = async function (code) {
    var u = null;
    try { u = JSON.parse(localStorage.getItem('growiq_user')); } catch (e) {}
    if (u) {
      u.preferredCurrency = code;
      localStorage.setItem('growiq_user', JSON.stringify(u));
    }
    document.querySelectorAll('#navProfileCurrencySub .nav-lang-item').forEach(function (b) { b.classList.remove('active'); });
    if (window.event && window.event.currentTarget) window.event.currentTarget.classList.add('active');
    var labelEl = document.getElementById('navCurrentCurrencyLabel');
    if (labelEl) labelEl.textContent = CURRENCY_SYMBOLS[code] || 'R';

    if (currentCurrencyUserId) {
      var client = getPageSupabaseClient();
      if (client) {
        try {
          var res = await client.from('profiles').update({ preferred_currency: code }).eq('id', currentCurrencyUserId);
          if (res && res.error) throw res.error;
        } catch (e) {
          console.error('YoungMerit: failed to save currency preference', e);
        }
      }
    }
    // Currency-formatted text on the current page won't update itself
    // retroactively -- a reload is the simplest correct way to see it
    // reflected everywhere consistently.
    window.location.reload();
  };

  window.resetCurrencyToAutomatic = async function () {
    var u = null;
    try { u = JSON.parse(localStorage.getItem('growiq_user')); } catch (e) {}
    if (u) {
      delete u.preferredCurrency;
      localStorage.setItem('growiq_user', JSON.stringify(u));
    }
    if (currentCurrencyUserId) {
      var client = getPageSupabaseClient();
      if (client) {
        try {
          var res = await client.from('profiles').update({ preferred_currency: null }).eq('id', currentCurrencyUserId);
          if (res && res.error) throw res.error;
        } catch (e) {
          console.error('YoungMerit: failed to reset currency preference', e);
        }
      }
    }
    window.location.reload();
  };

  // The default logout behaviour. A page can define its own window.growiqLogout
  // before this script runs to override it, but every page gets a working one
  // for free now instead of needing to duplicate this itself.
  if (typeof window.growiqLogout !== 'function') {
    window.growiqLogout = async function () {
      if (await window.HONEI18N.confirm('Log out?')) {
        localStorage.removeItem('growiq_user');
        // Clearing the local flag alone leaves the real Supabase session
        // active -- without this, Auth.html's own "already signed in, skip
        // to profile" check would silently redirect straight back to the
        // profile page the next time the user tries to sign up or log in.
        try { if (typeof supabase !== 'undefined') await supabase.auth.signOut(); } catch(e) {}
        window.location.href = 'index.html';
      }
    };
  }

  function buildSwitcher(mount) {
    mount.innerHTML =
      '<div class="nav-lang-wrap">' +
        '<button type="button" class="nav-lang-btn" onclick="toggleNavLang(this)">' +
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>' +
          '<span class="nav-lang-label">EN</span>' +
          '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 9-7 7-7-7"/></svg>' +
        '</button>' +
        '<div class="nav-lang-menu">' +
          '<button type="button" class="nav-lang-item" data-lang="en" onclick="setLang(\'en\')">English<span class="check">&#10003;</span></button>' +
          '<button type="button" class="nav-lang-item" data-lang="es" onclick="setLang(\'es\')">Español<span class="check">&#10003;</span></button>' +
          '<button type="button" class="nav-lang-item" data-lang="fr" onclick="setLang(\'fr\')">Français<span class="check">&#10003;</span></button>' +
          '<button type="button" class="nav-lang-item" data-lang="zh" onclick="setLang(\'zh\')">中文<span class="check">&#10003;</span></button>' +
          '<button type="button" class="nav-lang-item" data-lang="zu" onclick="setLang(\'zu\')">isiZulu<span class="check">&#10003;</span></button>' +
        '</div>' +
      '</div>';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var user = null;
    try { user = JSON.parse(localStorage.getItem('growiq_user')); } catch (e) {}
    var isLoggedIn = !!(user && user.loggedIn);

    if (isLoggedIn) {
      // Logged-in visitors get one combined avatar menu (profile, language,
      // legal links, sign out) instead of a separate standalone language
      // switcher -- the standalone .nav-lang-mount stays empty in this case.
      var navRight = document.getElementById('navRight') || document.querySelector('.nav-right');
      if (navRight) buildProfileMenu(navRight, user);
    } else {
      document.querySelectorAll('.nav-lang-mount').forEach(buildSwitcher);
    }

    // Lets a page that fetches fresher account data after this file's own
    // DOMContentLoaded already painted the nav once (e.g. profile.html
    // pulling the real avatar_url from Supabase in the background) ask the
    // nav to redraw itself from whatever's in localStorage right now,
    // instead of the avatar being stuck until the next full page reload.
    window.HONEI18N.refreshNavProfile = function () {
      var freshUser = null;
      try { freshUser = JSON.parse(localStorage.getItem('growiq_user')); } catch (e) {}
      if (!freshUser || !freshUser.loggedIn) return;
      var mount = document.getElementById('navRight') || document.querySelector('.nav-right');
      if (mount) buildProfileMenu(mount, freshUser);
    };

    // The hamburger menu's "Sign Up Free" button only makes sense for
    // visitors who don't have an account yet -- hide it once logged in.
    var menuCta = document.getElementById('menuCta');
    if (menuCta) menuCta.style.display = isLoggedIn ? 'none' : '';

    applyTranslations();
  });

  // ==================== COOKIE CONSENT ====================
  var CONSENT_KEY = 'growiq_cookie_prefs';
  var consentScriptQueue = [];

  function getConsentPrefs() {
    try { return JSON.parse(localStorage.getItem(CONSENT_KEY) || '{}'); } catch (e) { return {}; }
  }

  function hasConsent(category) {
    if (category === 'essential') return true;
    var prefs = getConsentPrefs();
    if (!prefs.saved) return false;
    return !!prefs[category];
  }

  function runConsentQueue() {
    consentScriptQueue = consentScriptQueue.filter(function (item) {
      if (!hasConsent(item.category)) return true;
      var s = document.createElement('script');
      if (item.src) s.src = item.src;
      if (item.inline) s.textContent = item.inline;
      document.head.appendChild(s);
      return false;
    });
  }

  function loadConsentedScript(opts) {
    opts = opts || {};
    if (hasConsent(opts.category)) {
      var s = document.createElement('script');
      if (opts.src) s.src = opts.src;
      if (opts.inline) s.textContent = opts.inline;
      document.head.appendChild(s);
    } else {
      consentScriptQueue.push(opts);
    }
  }

  function saveConsentPrefs(prefs) {
    var full = {
      analytics: !!prefs.analytics,
      preferences: !!prefs.preferences,
      marketing: !!prefs.marketing,
      saved: true,
      savedAt: new Date().toISOString()
    };
    try { localStorage.setItem(CONSENT_KEY, JSON.stringify(full)); } catch (e) {}
    hideConsentBanner();
    runConsentQueue();
    document.dispatchEvent(new CustomEvent('honeconsentchange', { detail: full }));
    return full;
  }

  function hideConsentBanner() {
    var b = document.getElementById('honeCookieBanner');
    if (b) b.remove();
  }

  function buildConsentBanner() {
    if (document.getElementById('honeCookieBanner')) return;
    if (/cookies\.html$/.test(window.location.pathname)) return; // settings page handles its own UI
    var prefs = getConsentPrefs();
    if (prefs.saved) { runConsentQueue(); return; }

    var banner = document.createElement('div');
    banner.id = 'honeCookieBanner';
    banner.innerHTML =
      '<div class="hcb-inner">' +
        '<div class="hcb-text">' +
          '<strong data-i18n="cookieBanner.title">We use cookies</strong>' +
          '<span data-i18n="cookieBanner.desc">We use essential cookies to make YOUNGMERIT work. With your consent, we\'d also like to use analytics and preference cookies to improve your experience.</span>' +
        '</div>' +
        '<div class="hcb-btns">' +
          '<a href="cookies.html" class="hcb-manage" data-i18n="cookieBanner.manage">Manage Preferences</a>' +
          '<button type="button" class="hcb-reject" onclick="window.HONEConsent.rejectAll()" data-i18n="cookieBanner.rejectAll">Reject Non-Essential</button>' +
          '<button type="button" class="hcb-accept" onclick="window.HONEConsent.acceptAll()" data-i18n="cookieBanner.acceptAll">Accept All</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(banner);
    applyTranslations();
    requestAnimationFrame(function () { banner.classList.add('show'); });
  }

  var consentStyle = document.createElement('style');
  consentStyle.textContent =
    '#honeCookieBanner{position:fixed;left:0;right:0;bottom:0;z-index:2000;background:#0E0906;border-top:1px solid rgba(255,255,255,0.1);' +
      'transform:translateY(100%);transition:transform 0.35s cubic-bezier(0.4,0,0.2,1);box-shadow:0 -8px 30px rgba(0,0,0,0.25);}' +
    '#honeCookieBanner.show{transform:translateY(0);}' +
    '.hcb-inner{max-width:1200px;margin:0 auto;padding:20px 32px;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;}' +
    '.hcb-text{display:flex;flex-direction:column;gap:4px;max-width:640px;}' +
    '.hcb-text strong{color:#FDFAF5;font-size:14px;font-weight:700;}' +
    '.hcb-text span{color:rgba(253,250,245,0.55);font-size:13px;line-height:1.6;}' +
    '.hcb-btns{display:flex;align-items:center;gap:10px;flex-wrap:wrap;}' +
    '.hcb-manage{font-size:13px;color:rgba(253,250,245,0.6);text-decoration:underline;white-space:nowrap;}' +
    '.hcb-manage:hover{color:#FDFAF5;}' +
    '.hcb-reject{background:transparent;border:1px solid rgba(253,250,245,0.25);color:#FDFAF5;padding:9px 16px;border-radius:8px;font-family:inherit;font-size:13px;font-weight:600;cursor:pointer;white-space:nowrap;transition:all 0.2s;}' +
    '.hcb-reject:hover{border-color:rgba(253,250,245,0.5);}' +
    '.hcb-accept{background:#C4861A;border:none;color:#1A1208;padding:9px 18px;border-radius:8px;font-family:inherit;font-size:13px;font-weight:700;cursor:pointer;white-space:nowrap;transition:all 0.2s;}' +
    '.hcb-accept:hover{background:#D89A2E;}' +
    '@media(max-width:640px){.hcb-inner{padding:16px 20px;}.hcb-btns{width:100%;}.hcb-reject,.hcb-accept{flex:1;text-align:center;}}';
  document.head.appendChild(consentStyle);

  window.HONEConsent = {
    has: hasConsent,
    getPrefs: getConsentPrefs,
    save: saveConsentPrefs,
    loadScript: loadConsentedScript,
    acceptAll: function () { saveConsentPrefs({ analytics: true, preferences: true, marketing: true }); },
    rejectAll: function () { saveConsentPrefs({ analytics: false, preferences: false, marketing: false }); }
  };

  document.addEventListener('DOMContentLoaded', buildConsentBanner);

  // ==================== RATE US ====================
  // Adds a "Rate Us" entry to the hamburger menu on every page (skips
  // Auth.html, which has no hamburger menu at all). Uses a direct REST
  // call rather than the full Supabase SDK, since most pages don't load
  // that library at all and it would be wasteful to add it site-wide just
  // for this one small form.
  var FEEDBACK_URL = 'https://asireievwpaijfdzdcxm.supabase.co/rest/v1/feedback';
  var FEEDBACK_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzaXJlaWV2d3BhaWpmZHpkY3htIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ5OTMyMjcsImV4cCI6MjEwMDU2OTIyN30.nd9dhJ388XZhwTgyFcgcZ4b4msypf4pDzz6IX0_27Hk';
  var selectedRating = 0;

  function buildRateUsButton() {
    var menuBottom = document.querySelector('.menu-bottom');
    if (!menuBottom) return; // Auth.html has no hamburger menu at all

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.onclick = function () { window.HONEI18N.openRateUs(); };
    btn.style.cssText = 'display:flex;align-items:center;justify-content:center;gap:8px;width:100%;background:#C4861A;color:#1A1208;border:none;padding:13px 20px;border-radius:10px;font-family:"DM Sans",sans-serif;font-size:14.5px;font-weight:700;cursor:pointer;margin-bottom:10px;transition:all 0.2s;';
    btn.onmouseenter = function () { btn.style.background = '#E8A83A'; btn.style.transform = 'translateY(-2px)'; };
    btn.onmouseleave = function () { btn.style.background = '#C4861A'; btn.style.transform = 'none'; };
    btn.innerHTML =
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>' +
      '<span data-i18n="nav.rateUs">Rate Us</span>';
    menuBottom.insertBefore(btn, menuBottom.firstChild);
  }

  function buildRateUsModal() {
    if (document.getElementById('rateUsBackdrop')) return;

    var backdrop = document.createElement('div');
    backdrop.id = 'rateUsBackdrop';
    backdrop.style.cssText = 'position:fixed;inset:0;background:rgba(26,18,8,0.55);z-index:3000;display:none;align-items:center;justify-content:center;padding:20px;';
    backdrop.onclick = function (e) { if (e.target === backdrop) closeRateUs(); };

    var stars = '';
    for (var i = 1; i <= 5; i++) {
      stars += '<button type="button" class="rate-us-star" data-star="' + i + '" onclick="window.HONEI18N.setRateUsStar(' + i + ')" style="background:none;border:none;cursor:pointer;padding:2px;color:#D4C9B8;">' +
        '<svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>' +
      '</button>';
    }

    backdrop.innerHTML =
      '<div style="background:#FDFAF5;border-radius:18px;width:100%;max-width:420px;padding:28px;box-shadow:0 24px 80px rgba(26,18,8,0.22);">' +
        '<div id="rateUsStep1">' +
          '<div style="font-family:\'Archivo Black\',sans-serif;font-size:22px;letter-spacing:1px;color:#1A1208;margin-bottom:6px;">RATE YOUR EXPERIENCE</div>' +
          '<div style="font-size:13.5px;color:#8A7560;margin-bottom:18px;">Your feedback genuinely shapes what we build next.</div>' +
          '<div style="display:flex;gap:4px;margin-bottom:16px;" id="rateUsStars">' + stars + '</div>' +
          '<textarea id="rateUsComment" rows="3" placeholder="Anything you want to tell us? (optional)" style="width:100%;padding:11px 14px;border:1.5px solid #D4C9B8;border-radius:8px;background:#F5F0E8;font-family:inherit;font-size:14px;color:#1A1208;outline:none;resize:vertical;box-sizing:border-box;margin-bottom:18px;"></textarea>' +
          '<div style="display:flex;gap:10px;justify-content:flex-end;">' +
            '<button type="button" onclick="window.HONEI18N.closeRateUs()" style="padding:10px 18px;border-radius:8px;border:1.5px solid #D4C9B8;background:none;font-family:inherit;font-size:14px;font-weight:600;color:#3D2B0F;cursor:pointer;">Cancel</button>' +
            '<button type="button" id="rateUsSubmitBtn" onclick="window.HONEI18N.submitRateUs()" style="padding:10px 18px;border-radius:8px;border:none;background:#1A1208;color:#FDFAF5;font-family:inherit;font-size:14px;font-weight:700;cursor:pointer;">Submit</button>' +
          '</div>' +
        '</div>' +
        '<div id="rateUsStep2" style="display:none;text-align:center;">' +
          '<div style="font-family:\'Archivo Black\',sans-serif;font-size:22px;letter-spacing:1px;color:#1A1208;margin-bottom:8px;">THANK YOU!</div>' +
          '<div id="rateUsThankYouBody" style="font-size:13.5px;color:#8A7560;margin-bottom:20px;"></div>' +
          '<button type="button" onclick="window.HONEI18N.closeRateUs()" style="padding:10px 24px;border-radius:8px;border:none;background:#1A1208;color:#FDFAF5;font-family:inherit;font-size:14px;font-weight:700;cursor:pointer;">Close</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(backdrop);
  }

  function openRateUs() {
    buildRateUsModal();
    selectedRating = 0;
    updateRateUsStars();
    document.getElementById('rateUsComment').value = '';
    document.getElementById('rateUsStep1').style.display = '';
    document.getElementById('rateUsStep2').style.display = 'none';
    document.getElementById('rateUsBackdrop').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (typeof closeMenu === 'function') closeMenu();
  }
  function closeRateUs() {
    var b = document.getElementById('rateUsBackdrop');
    if (b) b.style.display = 'none';
    document.body.style.overflow = '';
  }
  function setRateUsStar(n) {
    selectedRating = n;
    updateRateUsStars();
  }
  function updateRateUsStars() {
    var starEls = document.querySelectorAll('.rate-us-star');
    starEls.forEach(function (el) {
      var n = parseInt(el.getAttribute('data-star'), 10);
      el.style.color = n <= selectedRating ? '#C4861A' : '#D4C9B8';
    });
  }
  async function submitRateUs() {
    if (selectedRating < 1) { window.HONEI18N.toast('Please choose a star rating.', 'error'); return; }
    var comment = document.getElementById('rateUsComment').value.trim();
    var btn = document.getElementById('rateUsSubmitBtn');
    btn.disabled = true;
    var originalText = btn.textContent;
    btn.textContent = 'Submitting...';
    try {
      var res = await fetch(FEEDBACK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': FEEDBACK_KEY,
          'Authorization': 'Bearer ' + FEEDBACK_KEY
        },
        body: JSON.stringify({ rating: selectedRating, comment: comment || null, page_url: window.location.pathname })
      });
      if (!res.ok) throw new Error('Feedback request failed: ' + res.status);

      var thankYouBody = document.getElementById('rateUsThankYouBody');
      if (selectedRating >= 4) {
        // TODO: replace with a real Google Business Profile / Trustpilot
        // link once one exists -- this is a real, working placeholder
        // encouraging a public review from happy raters specifically.
        thankYouBody.innerHTML = 'So glad to hear it! Would you mind also leaving us a public review? It genuinely helps other young people find us.<br><br><a href="#" onclick="window.HONEI18N.toast(\'Add your real Google Business Profile or Trustpilot link here once one exists.\'); return false;" style="color:#C4861A;font-weight:600;">Leave a public review &rarr;</a>';
      } else {
        thankYouBody.textContent = 'We read every response — this helps us fix what\'s not working yet.';
      }
      document.getElementById('rateUsStep1').style.display = 'none';
      document.getElementById('rateUsStep2').style.display = '';
    } catch (err) {
      console.error('YoungMerit: failed to submit feedback', err);
      window.HONEI18N.toast('Something went wrong submitting your feedback. Please try again.', 'error');
    } finally {
      btn.disabled = false;
      btn.textContent = originalText;
    }
  }

  document.addEventListener('DOMContentLoaded', buildRateUsButton);

  window.HONEI18N.openRateUs = openRateUs;
  window.HONEI18N.closeRateUs = closeRateUs;
  window.HONEI18N.setRateUsStar = setRateUsStar;
  window.HONEI18N.submitRateUs = submitRateUs;

  // ==================== TOAST + CONFIRM (replaces native alert/confirm) ====================
  // Centralized here since every page already loads this file -- no need
  // for each page to build its own toast/confirm system separately.
  function ensureToastContainer(){
    var c = document.getElementById('honeToastContainer');
    if(c) return c;
    c = document.createElement('div');
    c.id = 'honeToastContainer';
    c.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:5000;display:flex;flex-direction:column;gap:8px;align-items:center;pointer-events:none;';
    document.body.appendChild(c);
    return c;
  }

  function honeToast(message, type){
    var container = ensureToastContainer();
    var el = document.createElement('div');
    var isError = type === 'error';
    el.style.cssText = 'pointer-events:auto;background:'+(isError ? '#B23A3A' : '#1A1208')+';color:#FDFAF5;padding:13px 22px;border-radius:10px;font-family:"DM Sans",sans-serif;font-size:14px;font-weight:600;box-shadow:0 12px 32px rgba(26,18,8,0.25);opacity:0;transform:translateY(8px);transition:opacity 0.25s ease,transform 0.25s ease;max-width:90vw;text-align:center;';
    el.textContent = message;
    container.appendChild(el);
    requestAnimationFrame(function(){ el.style.opacity = '1'; el.style.transform = 'translateY(0)'; });
    setTimeout(function(){
      el.style.opacity = '0';
      el.style.transform = 'translateY(8px)';
      setTimeout(function(){ el.remove(); }, 300);
    }, 3200);
  }

  function ensureConfirmModal(){
    if(document.getElementById('honeConfirmBackdrop')) return;
    var backdrop = document.createElement('div');
    backdrop.id = 'honeConfirmBackdrop';
    backdrop.style.cssText = 'position:fixed;inset:0;background:rgba(26,18,8,0.55);z-index:5100;display:none;align-items:center;justify-content:center;padding:20px;';
    backdrop.innerHTML =
      '<div style="background:#FDFAF5;border-radius:16px;width:100%;max-width:420px;padding:26px;box-shadow:0 24px 80px rgba(26,18,8,0.22);">' +
        '<div id="honeConfirmMessage" style="font-size:14.5px;color:#1A1208;line-height:1.6;margin-bottom:22px;"></div>' +
        '<div style="display:flex;gap:10px;justify-content:flex-end;">' +
          '<button type="button" id="honeConfirmCancelBtn" style="padding:10px 18px;border-radius:8px;border:1.5px solid #D4C9B8;background:none;font-family:inherit;font-size:14px;font-weight:600;color:#3D2B0F;cursor:pointer;">Cancel</button>' +
          '<button type="button" id="honeConfirmOkBtn" style="padding:10px 18px;border-radius:8px;border:none;background:#1A1208;color:#FDFAF5;font-family:inherit;font-size:14px;font-weight:700;cursor:pointer;">Confirm</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(backdrop);
  }

  function honeConfirm(message){
    ensureConfirmModal();
    var backdrop = document.getElementById('honeConfirmBackdrop');
    document.getElementById('honeConfirmMessage').textContent = message;
    backdrop.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    return new Promise(function(resolve){
      function cleanup(result){
        backdrop.style.display = 'none';
        document.body.style.overflow = '';
        okBtn.removeEventListener('click', onOk);
        cancelBtn.removeEventListener('click', onCancel);
        backdrop.removeEventListener('click', onOutside);
        resolve(result);
      }
      function onOk(){ cleanup(true); }
      function onCancel(){ cleanup(false); }
      function onOutside(e){ if(e.target === backdrop) cleanup(false); }
      var okBtn = document.getElementById('honeConfirmOkBtn');
      var cancelBtn = document.getElementById('honeConfirmCancelBtn');
      okBtn.addEventListener('click', onOk);
      cancelBtn.addEventListener('click', onCancel);
      backdrop.addEventListener('click', onOutside);
    });
  }

  window.HONEI18N.toast = honeToast;
  window.HONEI18N.confirm = honeConfirm;

})();