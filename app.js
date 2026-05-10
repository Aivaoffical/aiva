/* ═══════════════════════════════════════════════
   AIVA — Complete JavaScript
   30+ Tools · 3 Languages · Search + Filter
═══════════════════════════════════════════════ */

// ── TOOLS DATA ────────────────────────────────
const TOOLS = [
  // CHAT
  {name:"Claude",         maker:"Anthropic",      cat:"chat",     icon:"◆",  bg:"#1a0828", ic:"#c084fc", badge:"freemium", bl:"Free + Pro",  desc:{en:"Most intelligent AI for writing, analysis & coding. Free tier with generous daily messages.",fa:"هوشمندترین هوش مصنوعی برای نوشتن، تحلیل و کدنویسی. نسخه رایگان با پیام‌های روزانه کافی.",ps:"د لیکلو، تحلیل او کوډنویسۍ لپاره هوشمندترین هوش مصنوعي. وړیا نسخه."}, tag:"Best Quality", url:"https://claude.ai"},
  {name:"ChatGPT",        maker:"OpenAI",          cat:"chat",     icon:"◉",  bg:"#001a0f", ic:"#10a37f", badge:"freemium", bl:"Free + Plus", desc:{en:"World's most popular AI. GPT-4o mini free. Great for almost any task you can think of.",fa:"محبوب‌ترین هوش مصنوعی جهان. GPT-4o mini رایگان. برای تقریباً هر کاری عالی است.",ps:"د نړۍ ترټولو مشهور هوش مصنوعي. GPT-4o mini وړیا. د هر کار لپاره."}, tag:"Most Popular", url:"https://chat.openai.com"},
  {name:"Gemini",         maker:"Google",          cat:"chat",     icon:"♊",  bg:"#001428", ic:"#4a8aff", badge:"free",     bl:"100% Free",   desc:{en:"Google's powerful AI. Free with any Google account. Has real-time internet access for current info.",fa:"هوش مصنوعی قدرتمند گوگل. با هر حساب گوگل رایگان. دسترسی به اینترنت در زمان واقعی.",ps:"د ګوګل قوي هوش مصنوعي. د ګوګل اکاونټ سره وړیا. ریال-ټایم انټرنټ لاسرسی."}, tag:"Has Internet", url:"https://gemini.google.com"},
  {name:"Copilot",        maker:"Microsoft",       cat:"chat",     icon:"🪟", bg:"#000f28", ic:"#0078d4", badge:"free",     bl:"100% Free",   desc:{en:"Microsoft's AI powered by GPT-4. Completely free with a Microsoft account. Has Bing web access.",fa:"هوش مصنوعی مایکروسافت با GPT-4. کاملاً رایگان با حساب مایکروسافت.",ps:"د مایکروسافټ هوش مصنوعي د GPT-4 سره. بالکل وړیا د مایکروسافټ اکاونټ سره."}, tag:"Free GPT-4",  url:"https://copilot.microsoft.com"},
  {name:"Grok",           maker:"xAI",             cat:"chat",     icon:"✦",  bg:"#0a0a0a", ic:"#e0e0e0", badge:"freemium", bl:"Free on X",   desc:{en:"Elon Musk's AI on X (Twitter). Real-time internet access. Fewer restrictions than most AIs.",fa:"هوش مصنوعی ایلان ماسک در X. دسترسی به اینترنت واقعی. محدودیت کمتر.",ps:"د ایلان ماسک هوش مصنوعي X کې. ریال-ټایم انټرنټ. لږ محدودیتونه."}, tag:"Real-time",   url:"https://x.com/i/grok"},
  {name:"Meta AI",        maker:"Meta",            cat:"chat",     icon:"∞",  bg:"#001a28", ic:"#0082fb", badge:"free",     bl:"100% Free",   desc:{en:"Meta's free AI built into WhatsApp, Instagram and Facebook. No separate app or account needed.",fa:"هوش مصنوعی رایگان متا داخل واتس‌اپ، اینستاگرام و فیسبوک. بدون اپ جداگانه.",ps:"د میټا وړیا هوش مصنوعي واټسپ، انسټاګرام او فیسبوک کې. جدا اپ ته اړتیا نشته."}, tag:"On WhatsApp", url:"https://www.meta.ai"},
  {name:"Mistral",        maker:"Mistral AI",      cat:"chat",     icon:"🌀", bg:"#0a0018", ic:"#7c3aed", badge:"free",     bl:"100% Free",   desc:{en:"European AI. Strong multilingual support including Dari. Privacy-friendly. Completely free.",fa:"هوش مصنوعی اروپایی. پشتیبانی چندزبانه قوی شامل دری. حریم خصوصی. کاملاً رایگان.",ps:"د اروپا هوش مصنوعي. قوي ملټي لینګوال ملاتړ. د محرمیت دوستانه. بالکل وړیا."}, tag:"Multilingual", url:"https://chat.mistral.ai"},
  {name:"Character.AI",  maker:"Character.AI",    cat:"chat",     icon:"👤", bg:"#0f0a20", ic:"#a78bfa", badge:"freemium", bl:"Free + Plus", desc:{en:"Chat with AI characters and personas. Fun, creative conversations. Very popular especially among young people.",fa:"با شخصیت‌های هوش مصنوعی چت کنید. مکالمات سرگرم‌کننده و خلاقانه.",ps:"د هوش مصنوعي شخصیتونو سره چټ وکړئ. تفریحي او خلاقانه خبرې اترې."}, tag:"Fun Chats",  url:"https://character.ai"},
  {name:"Pi",             maker:"Inflection AI",   cat:"chat",     icon:"π",  bg:"#001020", ic:"#38bdf8", badge:"free",     bl:"100% Free",   desc:{en:"Friendly, caring AI assistant. Great for personal conversations, emotional support, and life advice.",fa:"دستیار هوش مصنوعی دوستانه و مهربان. برای مکالمات شخصی و پشتیبانی عاطفی.",ps:"دوستانه او مهربانه هوش مصنوعي مرستیال. د شخصي خبرو او عاطفي ملاتړ لپاره."}, tag:"Kind & Caring", url:"https://pi.ai"},

  // RESEARCH
  {name:"Perplexity",     maker:"Perplexity AI",   cat:"research", icon:"🔬", bg:"#001428", ic:"#00c8e0", badge:"freemium", bl:"Free + Pro",  desc:{en:"AI search engine that shows cited sources. Perfect for research. Every answer has proof and links.",fa:"موتور جستجوی هوش مصنوعی با منابع ذکرشده. برای تحقیق عالی. هر پاسخ با منابع.",ps:"د منابعو سره د هوش مصنوعي لټون انجن. د تحقیق لپاره عالي."}, tag:"Cites Sources", url:"https://www.perplexity.ai"},
  {name:"NotebookLM",     maker:"Google",          cat:"research", icon:"📓", bg:"#001a0a", ic:"#34d399", badge:"free",     bl:"100% Free",   desc:{en:"Upload your documents and chat with them. AI reads your PDFs, notes, and files and answers questions about them.",fa:"اسناد خود را آپلود کنید و با آن‌ها چت کنید. هوش مصنوعی PDFهای شما را می‌خواند.",ps:"خپل اسناد اپلوډ کړئ او ورسره چټ وکړئ. هوش مصنوعي ستاسو PDF فایلونه لولي."}, tag:"Upload & Chat", url:"https://notebooklm.google.com"},
  {name:"You.com",        maker:"You.com",         cat:"research", icon:"🔭", bg:"#001420", ic:"#00c8a0", badge:"free",     bl:"100% Free",   desc:{en:"AI search with multiple AI models. Shows sources alongside answers. Great for fact-finding.",fa:"جستجوی هوش مصنوعی با چندین مدل. منابع را کنار پاسخ‌ها نشان می‌دهد.",ps:"د ډیرو هوش مصنوعي ماډلونو سره لټون. منابع د ځوابونو سره ښکاره کوي."}, tag:"Free Search", url:"https://you.com"},

  // IMAGE
  {name:"Bing Image Creator", maker:"Microsoft",  cat:"image",   icon:"🖼️", bg:"#000f28", ic:"#0078d4", badge:"free",     bl:"100% Free",   desc:{en:"DALL-E 3 image generation completely free. 15 fast credits daily. Just describe what you want to see.",fa:"تولید تصویر DALL-E 3 کاملاً رایگان. ۱۵ اعتبار سریع روزانه. فقط توضیح دهید.",ps:"DALL-E 3 انځور جوړول بالکل وړیا. ورځني ۱۵ چټک کریډیټونه."}, tag:"DALL-E 3 Free", url:"https://www.bing.com/images/create"},
  {name:"Adobe Firefly",  maker:"Adobe",           cat:"image",   icon:"🔥", bg:"#1a0800", ic:"#ff4400", badge:"freemium", bl:"25 Free/mo",  desc:{en:"Adobe's AI image generator. 25 free monthly generations. Commercial use is allowed. Professional quality.",fa:"مولد تصویر ادوبی. ۲۵ نسل رایگان ماهانه. استفاده تجاری مجاز. کیفیت حرفه‌ای.",ps:"د ادوبي هوش مصنوعي انځور جوړوونکی. ۲۵ وړیا ماهانه جنریشنونه."}, tag:"Commercial OK", url:"https://firefly.adobe.com"},
  {name:"Canva AI",       maker:"Canva",           cat:"image",   icon:"✏️", bg:"#00141a", ic:"#00c4cc", badge:"freemium", bl:"Free + Pro",  desc:{en:"Design and AI in one place. Free tier includes image generation. Best for social media graphics and posts.",fa:"طراحی و هوش مصنوعی در یک مکان. تولید تصویر رایگان. برای گرافیک شبکه اجتماعی.",ps:"ډیزاین + هوش مصنوعي یو ځای کې. وړیا انځور جوړول. د سوشل میډیا لپاره."}, tag:"Design + AI", url:"https://www.canva.com"},
  {name:"Ideogram",       maker:"Ideogram AI",     cat:"image",   icon:"💡", bg:"#140014", ic:"#c084fc", badge:"freemium", bl:"10 Free/day", desc:{en:"10 free AI images per day. The best AI for text inside images. Great for posters and graphics with words.",fa:"۱۰ تصویر هوش مصنوعی رایگان در روز. بهترین برای متن داخل تصویر.",ps:"ورځني ۱۰ وړیا هوش مصنوعي انځورونه. د انځورونو دننه د متن لپاره غوره."}, tag:"Best Text AI", url:"https://ideogram.ai"},
  {name:"Leonardo AI",    maker:"Leonardo.AI",     cat:"image",   icon:"🎭", bg:"#0a0020", ic:"#8b5cf6", badge:"freemium", bl:"150 Free/day",desc:{en:"150 free AI image generations per day. High quality artistic outputs. Many styles and models to choose from.",fa:"۱۵۰ تولید تصویر رایگان در روز. خروجی‌های هنری با کیفیت بالا. سبک‌های متعدد.",ps:"ورځني ۱۵۰ وړیا هوش مصنوعي انځورونه. لوړ کیفیت هنري محصولات."}, tag:"150/Day Free", url:"https://leonardo.ai"},
  {name:"Playground AI", maker:"Playground",      cat:"image",   icon:"🌈", bg:"#080018", ic:"#a78bfa", badge:"free",     bl:"100 Free/day",desc:{en:"100 free AI images every day. No credit card required. Multiple artistic styles to choose from freely.",fa:"۱۰۰ تصویر هوش مصنوعی رایگان هر روز. بدون کارت اعتباری. سبک‌های هنری متعدد.",ps:"هره ورځ ۱۰۰ وړیا هوش مصنوعي انځورونه. د کریډیټ کارتو پرته."}, tag:"100/Day Free", url:"https://playground.com"},

  // WRITING
  {name:"Grammarly",      maker:"Grammarly",       cat:"write",   icon:"✅", bg:"#001a08", ic:"#15c39a", badge:"freemium", bl:"Free + Pro",  desc:{en:"Grammar checker and writing assistant. Free tier covers all basic corrections. Works in your browser automatically.",fa:"بررسی گرامر و دستیار نوشتاری. نسخه رایگان تمام اصلاحات اساسی را پوشش می‌دهد.",ps:"ګرامر چیکر او د لیکلو مرستیال. وړیا نسخه ټولې اساسي سمونې پوښي."}, tag:"Grammar Fix", url:"https://www.grammarly.com"},
  {name:"QuillBot",       maker:"QuillBot",        cat:"write",   icon:"🪶", bg:"#001428", ic:"#4a7aff", badge:"freemium", bl:"Free + Pro",  desc:{en:"Paraphrasing tool and text summarizer. Great for non-native English writers and students.",fa:"ابزار بازنویسی و خلاصه‌ساز متن. برای غیرانگلیسی‌زبانان و دانشجویان عالی.",ps:"پارافریزینګ وسیله او متن لنډیز جوړوونکی. د غیر انګلیسي لیکوالانو لپاره."}, tag:"Paraphrase",  url:"https://quillbot.com"},
  {name:"DeepL",          maker:"DeepL",           cat:"write",   icon:"🌍", bg:"#000a1a", ic:"#0a63c2", badge:"free",     bl:"100% Free",   desc:{en:"Best AI translation tool. Supports Dari (Persian) and many languages. Much more accurate than Google Translate.",fa:"بهترین ابزار ترجمه هوش مصنوعی. از دری پشتیبانی می‌کند. دقیق‌تر از گوگل ترنسلیت.",ps:"د ترجمې لپاره غوره هوش مصنوعي. د دري ملاتړ کوي. د ګوګل ترجمه نه دقیق‌تر."}, tag:"Best Translate", url:"https://www.deepl.com"},
  {name:"Gamma",          maker:"Gamma App",       cat:"write",   icon:"📊", bg:"#0a0820", ic:"#8b5cf6", badge:"freemium", bl:"Free + Plus", desc:{en:"Create professional presentations and slides using AI. Just describe your topic and Gamma builds the slides.",fa:"ایجاد ارائه‌های حرفه‌ای با هوش مصنوعی. فقط موضوع خود را توضیح دهید.",ps:"د هوش مصنوعي سره مسلکي پریزنټیشنونه جوړ کړئ. یوازې موضوع توضیح کړئ."}, tag:"AI Slides", url:"https://gamma.app"},

  // CODE
  {name:"GitHub Copilot", maker:"GitHub",          cat:"code",    icon:"🐙", bg:"#080808", ic:"#e0e0e0", badge:"freemium", bl:"Free Tier",   desc:{en:"AI code completion inside VS Code. Free tier now available. Suggests entire functions as you type code.",fa:"تکمیل کد هوش مصنوعی در VS Code. نسخه رایگان موجود. توابع کامل پیشنهاد می‌دهد.",ps:"د VS Code دننه هوش مصنوعي کوډ بشپړول. وړیا نسخه. بشپړ دندې وړاندې کوي."}, tag:"In VS Code", url:"https://github.com/features/copilot"},
  {name:"Replit AI",      maker:"Replit",          cat:"code",    icon:"💻", bg:"#000a14", ic:"#f26207", badge:"freemium", bl:"Free + Core", desc:{en:"Code in your browser with AI assistance. Free account includes AI features. Zero installation required.",fa:"کدنویسی در مرورگر با کمک هوش مصنوعی. حساب رایگان شامل ویژگی‌های AI. بدون نصب.",ps:"د براوزر کې د هوش مصنوعي مرسته سره کوډنویسي. وړیا اکاونټ. نصب ته اړتیا نشته."}, tag:"No Install", url:"https://replit.com"},
  {name:"Phind",          maker:"Phind",           cat:"code",    icon:"⌨️", bg:"#001428", ic:"#4a7aff", badge:"free",     bl:"100% Free",   desc:{en:"AI search engine built for developers and programmers. Free. Excellent answers with real code examples.",fa:"موتور جستجوی هوش مصنوعی برای توسعه‌دهندگان. رایگان. پاسخ‌های عالی با مثال کد.",ps:"د پرمهالونو لپاره هوش مصنوعي لټون انجن. وړیا. د کوډ مثالونو سره ښه ځوابونه."}, tag:"For Developers", url:"https://www.phind.com"},

  // VIDEO
  {name:"Kling AI",       maker:"Kuaishou",        cat:"video",   icon:"🎬", bg:"#140000", ic:"#f87171", badge:"freemium", bl:"Free Credits",desc:{en:"Powerful AI video generator. Create realistic videos from text or image. Free daily credits available.",fa:"مولد ویدیوی قدرتمند هوش مصنوعی. ویدیوهای واقعی از متن یا تصویر. اعتبار روزانه رایگان.",ps:"قوي هوش مصنوعي ویډیو جوړوونکی. د متن یا انځور نه واقعي ویډیوګانې. وړیا ورځني کریډیټونه."}, tag:"Top Video AI", url:"https://klingai.com"},
  {name:"Runway Gen-3",   maker:"Runway",          cat:"video",   icon:"🎞️", bg:"#0a0010", ic:"#a855f7", badge:"freemium", bl:"125 Free Cr.",desc:{en:"Professional AI video generation. 125 free credits on signup. Generate short videos from text or images.",fa:"تولید ویدیوی حرفه‌ای با هوش مصنوعی. ۱۲۵ اعتبار رایگان هنگام ثبت‌نام.",ps:"مسلکي هوش مصنوعي ویډیو جنریشن. د ثبت‌نام پر مهال ۱۲۵ وړیا کریډیټونه."}, tag:"Video Gen", url:"https://app.runwayml.com"},
  {name:"Pika Labs",      maker:"Pika",            cat:"video",   icon:"⚡", bg:"#0a0820", ic:"#f59e0b", badge:"freemium", bl:"Free Tier",   desc:{en:"AI video creator from text or image. Free tier includes daily video generations. Easy and fun to use.",fa:"سازنده ویدیوی هوش مصنوعی از متن یا تصویر. تولید ویدیوی روزانه رایگان.",ps:"د متن یا انځور نه هوش مصنوعي ویډیو جوړوونکی. وړیا ورځني ویډیو جنریشنونه."}, tag:"Easy Video", url:"https://pika.art"},
  {name:"CapCut",         maker:"ByteDance",       cat:"video",   icon:"🎥", bg:"#000a14", ic:"#00c8e0", badge:"free",     bl:"100% Free",   desc:{en:"Video editor with powerful AI features. Free. Auto-subtitles, background removal, AI effects and templates.",fa:"ویرایشگر ویدیو با ویژگی‌های هوش مصنوعی. رایگان. زیرنویس خودکار، حذف پس‌زمینه.",ps:"د هوش مصنوعي ځانګړتیاوو سره ویډیو ایډیټر. وړیا. اتوماتیک ساب ټایټلونه."}, tag:"Video Edit", url:"https://www.capcut.com"},

  // VOICE & MUSIC
  {name:"ElevenLabs",    maker:"ElevenLabs",      cat:"voice",   icon:"🎙️", bg:"#0a0a00", ic:"#f0c040", badge:"freemium", bl:"10K Free/mo", desc:{en:"AI voice generation. 10,000 free characters per month. Create natural-sounding speech in any language.",fa:"تولید صدای هوش مصنوعی. ۱۰,۰۰۰ کاراکتر رایگان در ماه. گفتار طبیعی به هر زبانی.",ps:"د هوش مصنوعي غږ جوړول. ماهانه ۱۰,۰۰۰ وړیا حروف. د هرې ژبې لپاره طبیعي غږ."}, tag:"Voice Clone", url:"https://elevenlabs.io"},
  {name:"Suno AI",       maker:"Suno",            cat:"voice",   icon:"🎵", bg:"#0a0020", ic:"#c084fc", badge:"freemium", bl:"50 Free/day", desc:{en:"Create full songs with lyrics using AI. 50 free songs per day. Just describe the music style you want.",fa:"ساخت آهنگ کامل با کلمات با هوش مصنوعی. ۵۰ آهنگ رایگان در روز.",ps:"د هوش مصنوعي سره بشپړ سندرې جوړول. ورځني ۵۰ وړیا سندرې."}, tag:"Make Music", url:"https://suno.com"},
  {name:"Udio",          maker:"Udio",            cat:"voice",   icon:"🎶", bg:"#0a000f", ic:"#e879f9", badge:"freemium", bl:"Free Tier",   desc:{en:"AI music generator. High quality song creation with detailed control. Free tier available to all users.",fa:"مولد موسیقی هوش مصنوعی. ساخت آهنگ با کیفیت بالا. نسخه رایگان موجود.",ps:"د هوش مصنوعي موسیقي جوړوونکی. لوړ کیفیت سندرې جوړول. وړیا نسخه."}, tag:"High Quality", url:"https://www.udio.com"},
];

// ── AFGHAN DIASPORA FLAGS ─────────────────────
const FLAGS = [
  {flag:"🇦🇫",name:""},
  {flag:"🇵🇰",name:""},
  {flag:"🇮🇷",name:""},
  {flag:"🇩🇪",name:""},
  {flag:"🇺🇸",name:""},
  {flag:"🇬🇧",name:""},
  {flag:"🇨🇦",name:""},
  {flag:"🇦🇺",name:""},
  {flag:"🇦🇪",name:""},
  {flag:"🇸🇪",name:""},
  {flag:"🇳🇱",name:""},
  {flag:"🇳🇴",name:""},
  {flag:"🇹🇷",name:""},
  {flag:"🇩🇰",name:""},
  {flag:"🇨🇭",name:""},
];

// ── LANGUAGE DATA ─────────────────────────────
const LANGS = {
  en:{
    dir:"ltr",
    langBarText:'🇦🇫 Built for <span>Afghan communities</span> worldwide',
    navTagline:"Afghanistan's First AI Hub",
    nl1:"All Tools", nl2:"About", nl3:"Contact",
    navCta:"Browse Free Tools →",
    heroBadge:"🇦🇫 Afghanistan's First AI Website — Launched with Love",
    heroLine1:"All AI,", heroLine2:"One Place",
    heroDari:"Claude · Gemini · ChatGPT · NotebookLM · Kling AI · and more",
    heroSub:'<em>No download. No storage. No searching around.</em><br/>Every AI you need — <strong>right here, right now.</strong><br/><strong>Free forever.</strong> Built with love for every Afghan, everywhere.',
    pill1:"No app download needed", pill2:"No phone storage used", pill3:"No searching other platforms", pill4:"100% Free to use",
    heroCta1:"Browse All Free Tools →", heroCta2:"About AIVA",
    stat1:"Free AI Tools", stat2:"To Use", stat3:"Languages", stat4:"Afghan Speakers",
    flagsTitle:"Built for Afghans Living Around the World",
    toolsEyebrow:"30+ Free Tools", toolsTitle:"Every Free AI Tool",
    toolsSub:"Click any card — opens directly in a new tab. No account needed here.",
    searchPh:"Search AI tools...",
    f0:"All", f1:"💬 Chat AI", f2:"🎨 Image AI", f3:"✍️ Writing", f4:"💻 Coding", f5:"🎬 Video", f6:"🎵 Music & Voice", f7:"🔬 Research",
    openTxt:"Open free →",
    aboutEyebrow:"About AIVA", aboutTitle:"Afghanistan's First AI Hub",
    aboutLead:"AIVA was created with one simple mission: <strong>give every Afghan access to the world's best AI tools</strong> — without barriers, without cost, without confusion.",
    aboutHighlight:"🇦🇫 No download. No storage. No searching around.<br/>Every AI you need — right here. Click and use. Free forever.",
    af1t:"Built for the Afghan Diaspora", af1d:"Whether you live in Kabul, Berlin, Toronto, Dubai, or Sydney — AIVA is yours. All in Dari, Pashto, and English.",
    af2t:"No App Downloads Needed", af2d:"Your phone storage is precious. AIVA sends you straight to each AI tool online — no app, no storage, no hassle.",
    af3t:"Always Updated", af3d:"We add the newest and best AI tools regularly so you never miss what's new in the world of AI.",
    af4t:"No Registration on AIVA", af4d:"You don't need to sign up on AIVA. Just visit, click a tool, and use it. Simple as that.",
    acardTitle:"What is AIVA?",
    acardDesc:"AIVA is a free directory website. We don't build AI — we bring the world's best AI tools to one page, so Afghans everywhere can access them easily.",
    astat1:"AI Tools", astat2:"Cost", astat3:"Speakers", astat4:"Languages",
    aLangTitle:"Available Languages",
    contactEyebrow:"Get in Touch", contactTitle:"Contact Us",
    contactSub:"Have a question, suggestion, or want to report an issue? We would love to hear from you.",
    ctitle:"We're Here for You",
    csub:"AIVA is built by Afghans, for Afghans. If you have suggestions for new AI tools, found a broken link, or simply want to say salam — reach out anytime.",
    ci1t:"Suggest a New AI Tool", ci1d:"Know a great free AI tool we missed? Tell us and we'll add it.",
    ci2t:"Report a Broken Link", ci2d:"If any tool link doesn't work, let us know and we'll fix it quickly.",
    ci3t:"Partnership & Feedback", ci3d:"For community feedback, partnerships, or general questions.",
    fc1:"Categories", fc2:"Top AI Tools",
    footerDesc:"Free AI tools directory for Afghan communities worldwide. All tools in one place.",
    footerTagline:"AIVA — AI for Every Afghan ❤️",
    footerCopy:"© 2025 AIVA · Afghanistan's First AI Hub · Free Forever",
    footerLove:"Made with ❤️ for 50M+ Afghan speakers worldwide",
    noResultsText:"No tools found", noResultsSub:"Try a different search term or category",
  },
  fa:{
    dir:"rtl",
    langBarText:'🇦🇫 برای <span>جامعه افغان</span> در سراسر جهان',
    navTagline:"اولین مرکز هوش مصنوعی افغانستان",
    nl1:"همه ابزارها", nl2:"درباره ما", nl3:"تماس",
    navCta:"→ مشاهده ابزارهای رایگان",
    heroBadge:"🇦🇫 اولین وب‌سایت هوش مصنوعی افغانستان — با محبت ساخته شده",
    heroLine1:"همه هوش مصنوعی،", heroLine2:"یک مکان",
    heroDari:"کلود · جمینای · چت‌جی‌پی‌تی · نوت‌بوک‌ال‌ام · کلینگ AI · و بیشتر",
    heroSub:'<em>بدون دانلود. بدون فضای ذخیره‌سازی. بدون جستجو.</em><br/>هر هوش مصنوعی که نیاز دارید — <strong>همین‌جا، همین‌الان.</strong><br/><strong>همیشه رایگان.</strong> با محبت برای هر افغان.',
    pill1:"بدون دانلود اپ", pill2:"فضای گوشی مصرف نمی‌شود", pill3:"نیاز به جستجو نیست", pill4:"۱۰۰٪ رایگان",
    heroCta1:"→ مشاهده همه ابزارهای رایگان", heroCta2:"درباره AIVA",
    stat1:"ابزار رایگان", stat2:"برای استفاده", stat3:"زبان", stat4:"افغانی‌زبان",
    flagsTitle:"برای افغانان ساکن در سراسر دنیا",
    toolsEyebrow:"۳۰+ ابزار رایگان", toolsTitle:"هر ابزار هوش مصنوعی رایگان",
    toolsSub:"روی هر کارت کلیک کنید — مستقیم در تب جدید باز می‌شود. نیازی به حساب اینجا نیست.",
    searchPh:"جستجوی ابزارهای هوش مصنوعی...",
    f0:"همه", f1:"💬 چت هوش مصنوعی", f2:"🎨 تصویر", f3:"✍️ نوشتار", f4:"💻 کدنویسی", f5:"🎬 ویدیو", f6:"🎵 موسیقی و صدا", f7:"🔬 تحقیق",
    openTxt:"→ باز کردن رایگان",
    aboutEyebrow:"درباره AIVA", aboutTitle:"اولین مرکز هوش مصنوعی افغانستان",
    aboutLead:"AIVA با یک ماموریت ساده ایجاد شد: <strong>دسترسی همه افغانان به بهترین ابزارهای هوش مصنوعی جهان</strong> — بدون موانع، بدون هزینه، بدون سردرگمی.",
    aboutHighlight:"🇦🇫 بدون دانلود. بدون فضای ذخیره. بدون جستجو.<br/>هر هوش مصنوعی که نیاز دارید — همین‌جا. کلیک و استفاده کنید. همیشه رایگان.",
    af1t:"برای دیاسپورای افغان", af1d:"چه در کابل، برلین، تورنتو، دبی یا سیدنی باشید — AIVA مال شماست.",
    af2t:"نیازی به دانلود اپ نیست", af2d:"فضای گوشی شما ارزشمند است. AIVA شما را مستقیم به هر ابزار آنلاین می‌برد.",
    af3t:"همیشه به‌روز", af3d:"ما ابزارهای جدید و بهترین هوش مصنوعی را مرتباً اضافه می‌کنیم.",
    af4t:"ثبت‌نام در AIVA نیازی نیست", af4d:"نیازی به ثبت‌نام در AIVA ندارید. فقط بازدید کنید، روی ابزار کلیک کنید و استفاده کنید.",
    acardTitle:"AIVA چیست؟",
    acardDesc:"AIVA یک وب‌سایت دایرکتوری رایگان است. ما هوش مصنوعی نمی‌سازیم — بهترین ابزارها را در یک صفحه جمع‌آوری می‌کنیم.",
    astat1:"ابزار", astat2:"هزینه", astat3:"گویندگان", astat4:"زبان‌ها",
    aLangTitle:"زبان‌های موجود",
    contactEyebrow:"تماس با ما", contactTitle:"ارتباط با ما",
    contactSub:"سوال، پیشنهاد یا می‌خواهید مشکلی را گزارش دهید؟ خوشحال می‌شویم از شما بشنویم.",
    ctitle:"اینجا برای شما هستیم",
    csub:"AIVA توسط افغانان، برای افغانان ساخته شده. اگر پیشنهاد دارید یا لینک شکسته‌ای دیدید — هر زمان تماس بگیرید.",
    ci1t:"پیشنهاد ابزار جدید", ci1d:"ابزار هوش مصنوعی رایگان خوبی می‌شناسید؟ به ما بگویید اضافه کنیم.",
    ci2t:"گزارش لینک خراب", ci2d:"اگر لینکی کار نمی‌کند، اطلاع دهید سریع برطرف کنیم.",
    ci3t:"مشارکت و بازخورد", ci3d:"برای بازخورد، مشارکت یا سوالات کلی.",
    fc1:"دسته‌بندی‌ها", fc2:"ابزارهای برتر",
    footerDesc:"دایرکتوری رایگان ابزارهای هوش مصنوعی برای جوامع افغان در سراسر جهان.",
    footerTagline:"وا — هوش مصنوعی برای همه ❤️",
    footerCopy:"© ۲۰۲۵ AIVA · اولین مرکز هوش مصنوعی افغانستان · همیشه رایگان",
    footerLove:"با ❤️ برای ۵۰ میلیون افغانی‌زبان در سراسر دنیا",
    noResultsText:"ابزاری پیدا نشد", noResultsSub:"عبارت یا دسته دیگری را جستجو کنید",
  },
  ps:{
    dir:"rtl",
    langBarText:'🇦🇫 د <span>افغان ټولنو</span> لپاره نړۍ کې',
    navTagline:"د افغانستان لومړی هوش مصنوعي مرکز",
    nl1:"ټولې وسیلې", nl2:"زموږ په اړه", nl3:"اړیکه",
    navCta:"→ وړیا وسیلې وګورئ",
    heroBadge:"🇦🇫 د افغانستان لومړی هوش مصنوعي ویبسایټ — د مینې سره جوړ شوی",
    heroLine1:"ټول هوش مصنوعي،", heroLine2:"یو ځای",
    heroDari:"کلود · جمینای · چټ جي پي ټي · نوټ‌بوک‌ال‌ام · کلینګ AI · او نور",
    heroSub:'<em>ډاونلوډ نه. فون سټوریج نه. د نورو پلاتفارمونو لټون نه.</em><br/>ستاسو اړین هر هوش مصنوعي — <strong>دلته، اوس.</strong><br/><strong>تل وړیا.</strong> د هر افغان لپاره د مینې سره جوړ شوی.',
    pill1:"د اپ ډاونلوډ ته اړتیا نشته", pill2:"د فون سټوریج مصرف نه کیږي", pill3:"د نورو پلاتفارمونو لټون ته اړتیا نشته", pill4:"۱۰۰٪ وړیا",
    heroCta1:"→ ټولې وړیا وسیلې وګورئ", heroCta2:"د AIVA په اړه",
    stat1:"وړیا هوش مصنوعي وسیلې", stat2:"د کارولو لپاره", stat3:"ژبې", stat4:"افغاني ویونکي",
    flagsTitle:"د نړۍ د افغانانو لپاره جوړ شوی",
    toolsEyebrow:"۳۰+ وړیا وسیلې", toolsTitle:"هره وړیا هوش مصنوعي وسیله",
    toolsSub:"د هر کارت کلیک کولو سره — مستقیم نوي ټب کې خلاصیږي. دلته حساب ته اړتیا نشته.",
    searchPh:"د هوش مصنوعي وسیلو لټون...",
    f0:"ټول", f1:"💬 چټ هوش مصنوعي", f2:"🎨 انځور", f3:"✍️ لیکل", f4:"💻 کوډنویسي", f5:"🎬 ویډیو", f6:"🎵 موسیقي او غږ", f7:"🔬 تحقیق",
    openTxt:"→ وړیا خلاص کړئ",
    aboutEyebrow:"د AIVA په اړه", aboutTitle:"د افغانستان لومړی هوش مصنوعي مرکز",
    aboutLead:"AIVA د یو ساده مأموریت سره جوړ شو: <strong>د نړۍ د غوره هوش مصنوعي وسیلو ته د هر افغان لاسرسی</strong> — پرته له خنډونو، پرته له لګښته.",
    aboutHighlight:"🇦🇫 ډاونلوډ نه. سټوریج نه. لټون نه.<br/>ستاسو اړین هر هوش مصنوعي — دلته. کلیک وکړئ او وکاروئ. تل وړیا.",
    af1t:"د افغان دیاسپورا لپاره", af1d:"که تاسو کابل، برلین، تورنتو، دبۍ، یا سیدني کې اوسئ — AIVA ستاسو دی.",
    af2t:"د اپ ډاونلوډ ته اړتیا نشته", af2d:"ستاسو د فون سټوریج ارزښتناک دی. AIVA تاسو مستقیم هرې آنلاین وسیلې ته وړي.",
    af3t:"تل تازه", af3d:"موږ نوې او غوره هوش مصنوعي وسیلې منظمه اضافه کوو.",
    af4t:"د AIVA کې ثبت‌نام ته اړتیا نشته", af4d:"تاسو اړتیا نشته AIVA کې ثبت‌نام وکړئ. یوازې راشئ، کلیک وکړئ، وکاروئ.",
    acardTitle:"AIVA څه دی؟",
    acardDesc:"AIVA یو وړیا لارښود ویبسایټ دی. موږ هوش مصنوعي نه جوړوو — موږ د نړۍ غوره وسیلې یو ځای راټولوو.",
    astat1:"وسیلې", astat2:"لګښت", astat3:"ویونکي", astat4:"ژبې",
    aLangTitle:"شتې ژبې",
    contactEyebrow:"د موږ سره اړیکه", contactTitle:"اړیکه ونیسئ",
    contactSub:"پوښتنه، وړاندیز، یا د مشکل راپور؟ موږ ستاسو نه اورو خوشحالیږو.",
    ctitle:"موږ ستاسو لپاره دلته یو",
    csub:"AIVA د افغانانو لخوا، د افغانانو لپاره جوړ شوی. که وړاندیز لرئ یا مات لینک مو وموند — هر وخت اړیکه ونیسئ.",
    ci1t:"د نوې وسیلې وړاندیز", ci1d:"کوم ښه وړیا هوش مصنوعي وسیله پیژنئ؟ راته ووایئ اضافه کوو.",
    ci2t:"د مات لینک راپور", ci2d:"که کوم لینک کار نه کوي، راخبر کړئ چې ژر سم کړو.",
    ci3t:"شراکت او بازخورد", ci3d:"د ټولنیز بازخورد، شراکت، یا عمومي پوښتنو لپاره.",
    fc1:"کټاګورۍ", fc2:"غوره هوش مصنوعي وسیلې",
    footerDesc:"د نړۍ د افغان ټولنو لپاره د وړیا هوش مصنوعي وسیلو لارښود.",
    footerTagline:"وا — د ټولو لپاره هوش مصنوعي ❤️",
    footerCopy:"© ۲۰۲۵ AIVA · د افغانستان لومړی هوش مصنوعي مرکز · تل وړیا",
    footerLove:"د ❤️ سره د ۵۰ میلیون افغاني ویونکو لپاره",
    noResultsText:"هیڅ وسیله ونه موندل شوه", noResultsSub:"بله لټون عبارت یا کټاګوري هڅه وکړئ",
  },
  uz:{
    dir:"ltr",
    langBarText:"🇺🇿 Butun dunyo bo'ylab <span>afg'on jamoalari</span> uchun",
    navTagline:"Afg'onistonning birinchi AI markazi",
    nl1:"Barcha vositalar", nl2:"Biz haqimizda", nl3:"Aloqa",
    navCta:"Bepul vositalarni ko'rish →",
    heroBadge:"🇦🇫 Afg'onistonning birinchi AI sayti — Muhabbat bilan yaratilgan",
    heroLine1:"Barcha AI,", heroLine2:"Bir joyda",
    heroDari:"Claude · Gemini · ChatGPT · NotebookLM · Kling AI · va boshqalar",
    heroSub:"<em>Yuklab olish yo'q. Xotira kerak emas. Boshqa joylarda qidirish yo'q.</em><br/>Kerakli barcha AI — <strong>shu yerda, hozir.</strong><br/><strong>Abadiy bepul.</strong> Har bir afg'on uchun sevgi bilan.",
    pill1:"Ilova yuklab olish shart emas", pill2:"Telefon xotirasi sarflanmaydi", pill3:"Boshqa platformada qidirish yo'q", pill4:"100% bepul",
    heroCta1:"Barcha bepul vositalarni ko'rish →", heroCta2:"AIVA haqida",
    stat1:"Bepul AI vositalar", stat2:"Foydalanish uchun", stat3:"Tillar", stat4:"Afg'on so'zlashuvchilar",
    flagsTitle:"Dunyo bo'ylab afg'onlar uchun yaratilgan",
    toolsEyebrow:"30+ bepul vosita", toolsTitle:"Barcha bepul AI vositalar",
    toolsSub:"Istalgan kartani bosing — yangi yorliqda ochiladi. Bu yerda hisob kerak emas.",
    searchPh:"AI vositalarni qidiring...",
    f0:"Barchasi", f1:"💬 Chat AI", f2:"🎨 Rasm AI", f3:"✍️ Yozish", f4:"💻 Dasturlash", f5:"🎬 Video", f6:"🎵 Musiqa & Ovoz", f7:"🔬 Tadqiqot",
    openTxt:"Bepul ochish →",
    aboutEyebrow:"AIVA haqida", aboutTitle:"Afg'onistonning birinchi AI markazi",
    aboutLead:"AIVA bitta sodda maqsad bilan yaratilgan: <strong>har bir afg'onga dunyoning eng yaxshi AI vositalaridan foydalanish imkonini berish</strong> — to'siqlarsiz, xarajatsiz, chalkashmasdan.",
    aboutHighlight:"🇦🇫 Yuklab olish yo'q. Xotira kerak emas. Qidirish shart emas.<br/>Kerakli barcha AI — shu yerda. Bosing va foydalaning. Abadiy bepul.",
    af1t:"Afg'on diasporas uchun yaratilgan", af1d:"Kobul, Berlin, Toronto, Dubay yoki Sidneydami — AIVA sizniki. Dari, Pushtu va ingliz tillarida.",
    af2t:"Ilova yuklab olish shart emas", af2d:"Telefon xotirangiz qimmatli. AIVA sizni to'g'ridan-to'g'ri har bir AI vositasiga yuboradi.",
    af3t:"Har doim yangilanib turadi", af3d:"Biz muntazam ravishda eng yangi va eng yaxshi AI vositalarini qo'shamiz.",
    af4t:"AIVA da ro'yxatdan o'tish shart emas", af4d:"AIVA da ro'yxatdan o'tishingiz shart emas. Kiring, vositani bosing va foydalaning.",
    acardTitle:"AIVA nima?",
    acardDesc:"AIVA bepul katalog saytidir. Biz AI yaratmaymiz — dunyoning eng yaxshi AI vositalarini bir sahifaga to'playmiz, afg'onlar osongina foydalana olsinlar.",
    astat1:"AI Vositalar", astat2:"Narx", astat3:"So'zlashuvchilar", astat4:"Tillar",
    aLangTitle:"Mavjud tillar",
    contactEyebrow:"Bog'lanish", contactTitle:"Biz bilan bog'laning",
    contactSub:"Savol, taklif yoki muammo haqida xabar berishni xohlaysizmi? Sizdan eshitishdan xursand bo'lamiz.",
    ctitle:"Biz siz uchun bu yerdamiz",
    csub:"AIVA afg'onlar tomonidan, afg'onlar uchun yaratilgan. Yangi vosita taklif qilmoqchi bo'lsangiz yoki buzilgan havola topsangiz — istalgan vaqt murojaat qiling.",
    ci1t:"Yangi AI vositasini taklif qiling", ci1d:"Ajoyib bepul AI vositani bilasizmi? Bizga ayting, qo'shamiz.",
    ci2t:"Buzilgan havolani xabar qiling", ci2d:"Biror havola ishlamasa, xabar bering, tezda tuzatamiz.",
    ci3t:"Hamkorlik va fikr-mulohaza", ci3d:"Jamoa fikr-mulohazasi, hamkorlik yoki umumiy savollar uchun.",
    fc1:"Toifalar", fc2:"Eng yaxshi AI vositalar",
    footerDesc:"Dunyo bo'ylab afg'on jamoalari uchun bepul AI vositalar katalogi.",
    footerTagline:"AIVA — Har bir afg'on uchun AI ❤️",
    footerCopy:"© 2025 AIVA · Afg'onistonning birinchi AI markazi · Abadiy bepul",
    footerLove:"Dunyo bo'ylab 50M+ afg'on so'zlashuvchilari uchun ❤️ bilan",
    noResultsText:"Hech qanday vosita topilmadi", noResultsSub:"Boshqa so'z yoki toifani sinab ko'ring",
  }
};

// ── STATE ─────────────────────────────────────
let currentLang = 'en';
let currentFilter = 'all';

// ── RENDER FLAGS ──────────────────────────────
function renderFlags() {
  const row = document.getElementById('flagsRow');
  if (!row) return;
  row.innerHTML =
    `<div class="flag-item flag-home"><span class="flag-emoji">🇦🇫</span><span class="flag-direction">→</span></div>` +
    FLAGS.slice(1).map(f =>
      `<div class="flag-item"><span class="flag-emoji">${f.flag}</span></div>`
    ).join('');
}

// ── SET LANGUAGE ──────────────────────────────
function setLang(lang) {
  currentLang = lang;
  const L = LANGS[lang];
  document.documentElement.dir = L.dir;
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`[onclick="setLang('${lang}')"]`);
  if (btn) btn.classList.add('active');

  const set = (id, html) => { const el = document.getElementById(id); if(el) el.innerHTML = html; };
  const txt = (id, t) => { const el = document.getElementById(id); if(el) el.textContent = t; };

  set('langBarText', L.langBarText);
  txt('navTagline', L.navTagline);
  txt('nl1', L.nl1); txt('nl2', L.nl2); txt('nl3', L.nl3);
  txt('navCta', L.navCta);
  txt('heroBadge', L.heroBadge);
  txt('heroLine1', L.heroLine1); txt('heroLine2', L.heroLine2);
  txt('heroDari', L.heroDari);
  set('heroSub', L.heroSub);
  txt('pill1', L.pill1); txt('pill2', L.pill2); txt('pill3', L.pill3); txt('pill4', L.pill4);
  txt('heroCta1', L.heroCta1); txt('heroCta2', L.heroCta2);
  txt('stat1', L.stat1); txt('stat2', L.stat2); txt('stat3', L.stat3); txt('stat4', L.stat4);
  txt('flagsTitle', L.flagsTitle);
  txt('toolsEyebrow', L.toolsEyebrow); txt('toolsTitle', L.toolsTitle); txt('toolsSub', L.toolsSub);
  const si = document.getElementById('searchInput'); if(si) si.placeholder = L.searchPh;
  ['f0','f1','f2','f3','f4','f5','f6','f7'].forEach(id => txt(id, L[id]));
  set('aboutEyebrow', L.aboutEyebrow); txt('aboutTitle', L.aboutTitle);
  set('aboutLead', L.aboutLead);
  set('aboutHighlight', L.aboutHighlight);
  txt('af1t', L.af1t); txt('af1d', L.af1d);
  txt('af2t', L.af2t); txt('af2d', L.af2d);
  txt('af3t', L.af3t); txt('af3d', L.af3d);
  txt('af4t', L.af4t); txt('af4d', L.af4d);
  txt('acardTitle', L.acardTitle); txt('acardDesc', L.acardDesc);
  txt('astat1', L.astat1); txt('astat2', L.astat2); txt('astat3', L.astat3); txt('astat4', L.astat4);
  txt('aLangTitle', L.aLangTitle);
  txt('contactEyebrow', L.contactEyebrow); txt('contactTitle', L.contactTitle); txt('contactSub', L.contactSub);
  txt('ctitle', L.ctitle); set('csub', L.csub);
  txt('ci1t', L.ci1t); txt('ci1d', L.ci1d);
  txt('ci2t', L.ci2t); txt('ci2d', L.ci2d);
  txt('ci3t', L.ci3t); txt('ci3d', L.ci3d);
  txt('fc1', L.fc1); txt('fc2', L.fc2);
  txt('footerDesc', L.footerDesc); txt('footerTagline', L.footerTagline);
  txt('footerCopy', L.footerCopy); txt('footerLove', L.footerLove);

  renderTools();
}

// ── FILTER ────────────────────────────────────
function setFilter(btn, cat) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentFilter = cat;
  renderTools();
}

// ── RENDER TOOLS ──────────────────────────────
function renderTools() {
  const L = LANGS[currentLang];
  const q = (document.getElementById('searchInput').value || '').toLowerCase();
  const grid = document.getElementById('toolsGrid');

  const filtered = TOOLS.filter(t => {
    const matchCat = currentFilter === 'all' || t.cat === currentFilter;
    const desc = t.desc[currentLang] || t.desc.en;
    const matchQ = !q || t.name.toLowerCase().includes(q) || t.maker.toLowerCase().includes(q) || desc.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  if (!filtered.length) {
    grid.innerHTML = `<div class="no-results">
      <div class="no-results-icon">🔍</div>
      <div class="no-results-text">${L.noResultsText}</div>
      <div class="no-results-sub">${L.noResultsSub}</div>
    </div>`;
    return;
  }

  grid.innerHTML = filtered.map(t => {
    const desc = t.desc[currentLang] || t.desc.en;
    return `<a class="tool-card" href="${t.url}" target="_blank" rel="noopener noreferrer" style="--ac:${t.ic}">
      <div class="card-top">
        <div class="card-icon" style="background:${t.bg};border-color:${t.ic}25">
          <span style="color:${t.ic};font-size:20px">${t.icon}</span>
        </div>
        <span class="card-badge badge-${t.badge}">${t.bl}</span>
      </div>
      <div class="card-name">${t.name}</div>
      <div class="card-maker">by ${t.maker}</div>
      <div class="card-desc">${desc}</div>
      <div class="card-footer">
        <span class="card-tag" style="background:${t.ic}15;color:${t.ic};border:1px solid ${t.ic}25">${t.tag}</span>
        <span class="card-open"><span>${L.openTxt}</span><span class="card-arrow">→</span></span>
      </div>
    </a>`;
  }).join('');
}

// ── UPLOAD ────────────────────────────────────
let uploadedFiles = [];

function formatFileSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function getFileIcon(name) {
  const ext = name.split('.').pop().toLowerCase();
  const icons = {pdf:'📄',doc:'📝',docx:'📝',txt:'📃',jpg:'🖼️',jpeg:'🖼️',png:'🖼️',gif:'🎞️',mp4:'🎬',zip:'📦'};
  return icons[ext] || '📎';
}

function renderUploadPreview() {
  const preview = document.getElementById('uploadPreview');
  const status = document.getElementById('uploadStatus');
  if (!uploadedFiles.length) {
    preview.classList.remove('show');
    status.textContent = '';
    return;
  }
  preview.classList.add('show');
  status.textContent = `✅ ${uploadedFiles.length} file${uploadedFiles.length>1?'s':''} ready`;
  preview.innerHTML = uploadedFiles.map((f,i) =>
    `<div class="upload-file-item">
      <span class="upload-file-icon">${getFileIcon(f.name)}</span>
      <span class="upload-file-name">${f.name}</span>
      <span class="upload-file-size">${formatFileSize(f.size)}</span>
      <button class="upload-file-remove" onclick="removeFile(${i})" title="Remove">✕</button>
    </div>`
  ).join('');
}

function handleFileSelect(e) {
  const files = Array.from(e.target.files);
  addFiles(files);
  e.target.value = '';
}

function addFiles(files) {
  files.forEach(f => {
    if (!uploadedFiles.find(x => x.name === f.name && x.size === f.size)) {
      uploadedFiles.push(f);
    }
  });
  renderUploadPreview();
}

function removeFile(i) {
  uploadedFiles.splice(i, 1);
  renderUploadPreview();
}

function handleDragOver(e) {
  e.preventDefault();
  document.getElementById('uploadZone').classList.add('drag-over');
}

function handleDragLeave(e) {
  document.getElementById('uploadZone').classList.remove('drag-over');
}

function handleDrop(e) {
  e.preventDefault();
  document.getElementById('uploadZone').classList.remove('drag-over');
  addFiles(Array.from(e.dataTransfer.files));
}

// ── SCROLL ────────────────────────────────────
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
}

// ── NAV SCROLL ────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
  document.querySelectorAll('.fade-up:not(.show)').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) el.classList.add('show');
  });
});

// ── HAMBURGER ────────────────────────────────
function toggleMenu() {
  const nl = document.getElementById('navLinks');
  const isShown = nl.style.display === 'flex';
  nl.style.display = isShown ? 'none' : 'flex';
  if (!isShown) {
    nl.style.flexDirection = 'column';
    nl.style.position = 'absolute';
    nl.style.top = '98px';
    nl.style.left = '0'; nl.style.right = '0';
    nl.style.background = 'rgba(3,4,10,.98)';
    nl.style.padding = '14px';
    nl.style.borderBottom = '1px solid var(--border)';
    nl.style.backdropFilter = 'blur(20px)';
    nl.style.zIndex = '99';
  }
}

// ── SCROLL ANIMATION ─────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
}, {threshold: 0.06});

// ── INIT ─────────────────────────────────────
setLang('en');
renderFlags();
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));