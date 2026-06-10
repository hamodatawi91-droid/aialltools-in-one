export const CATEGORIES = [
  { id: 'all', name: 'الكل' },
  { id: 'fashion', name: 'الفاشن والموضة' },
  { id: 'image-gen', name: 'توليد الصور والإعلانات' },
  { id: 'video-gen', name: 'إنتاج الفيديو والسينما' },
  { id: 'shorts', name: 'محتوى الـ Shorts والتيك توك' },
  { id: 'coding', name: 'البرمجة وبناء المواقع' },
  { id: 'avatar', name: 'الأفاتار والاستنساخ الصوتي' },
  { id: 'image-processing', name: 'معالجة ومسح الخلفيات' },
  { id: 'prompts', name: 'مكتبات البرومبت الجاهزة' }
];

export const TOOLS = [
  // --- قسم الفاشن والموضة ---
  {
    id: 1,
    name: "Lalaland AI",
    category: "fashion",
    pricing: "freemium",
    type: "external",
    url: "https://lalaland.ai",
    badge: "خيارين",
    description: "المنصة الرائدة عالمياً لتوليد عارضي أزياء (AI Models) مخصصين بالكامل. تتيح لك اختيار العرق، العمر، وحجم الجسم للموديل لتلبيسهم ملابسك الرقمية وتوفير تكاليف جلسات التصوير الحقيقية."
  },
  {
    id: 2,
    name: "Zmo AI (Fashion Model)",
    category: "fashion",
    pricing: "freemium",
    type: "external",
    url: "https://www.zmo.ai",
    badge: "خيارين",
    description: "ارفع صورة قطعة الملابس وهي معلقة أو مسطحة، واصنع جلسة تصوير احترافية على عارضي أزياء حقيقيين وفي خلفيات سينمائية جاهزة للسوشيال ميديا خلال ثوانٍ."
  },
  {
    id: 3,
    name: "The New Black",
    category: "fashion",
    pricing: "freemium",
    type: "external",
    url: "https://www.thenewblack.ai",
    badge: "خيارين",
    description: "مصمم خصيصاً لمصممي الأزياء والبراندات الناشئة لتوليد أفكار ملابس فريدة (جاكيتات، أحذية، حقائب) من الأوامر النصية فقط لتسهيل ابتكار المجموعات الجديدة."
  },

  // --- قسم توليد الصور والإعلانات ---
  {
    id: 4,
    name: "Flux.1 (Schnell)",
    category: "image-gen",
    pricing: "free",
    type: "external",
    url: "https://blackforestlabs.ai",
    badge: "مجاني بالكامل",
    description: "أحدث وأقوى نموذج لتوليد الصور يتفوق على Midjourney. يتميز بقدرته الخارقة على كتابة النصوص واللافتات الإعلانية داخل الصور بدقة إملائية مذهلة وبدون أي تشويه."
  },
  {
    id: 5,
    name: "Flair AI",
    category: "image-gen",
    pricing: "freemium",
    type: "external",
    url: "https://flair.ai",
    badge: "خيارين",
    description: "أداة تصوير المنتجات الإعلانية الأولى؛ اسحب وأفلت عناصر الديكور المحيطة بمنتجك ليقوم النظام بدمجها وإضاءتها كأنها في استوديو تصوير حقيقي لتوليد بنرات فاخرة."
  },

  // --- قسم إنتاج الفيديو ---
  {
    id: 6,
    name: "Luma Dream Machine",
    category: "video-gen",
    pricing: "freemium",
    type: "external",
    url: "https://lumalabs.ai/dream-machine",
    badge: "خيارين",
    description: "يولد فيديوهات سينمائية حركية واقعية مدتها 5 ثوانٍ من النصوص أو الصور مع فهم فيزيائي عميق لحركات الكاميرا والإضاءة."
  },
  {
    id: 7,
    name: "Kling AI",
    category: "video-gen",
    pricing: "freemium",
    type: "external",
    url: "https://klingai.com",
    badge: "خيارين",
    description: "عملاق توليد الفيديو الذي يعطي نقاطاً مجانية يومية، ويمتاز بقدرته الفائقة على إنتاج حركات جسدية معقدة ومشاهد سينمائية طويلة ونقية للوجوه والطبيعة."
  },

  // --- قسم صناعة المحتوى القصير ---
  {
    id: 8,
    name: "Opus Clip",
    category: "shorts",
    pricing: "freemium",
    type: "external",
    url: "https://www.opus.pro",
    badge: "خيارين",
    description: "أداة خرافية تأخذ الفيديوهات الطويلة من يوتيوب وتقوم بتقطيعها تلقائياً بالذكاء الاصطناعي لتستخرج أفضل مقاطع Shorts جاهزة بالترجمة والـ Viral Score."
  },
  {
    id: 9,
    name: "CapCut Web (AI Tools)",
    category: "shorts",
    pricing: "free",
    type: "external",
    url: "https://www.capcut.com",
    badge: "مجاني ومميز",
    description: "النسخة السحابية من كاب كات؛ تحتوي على ميزات تحويل النص إلى فيديو، وكتابة الترجمة التلقائية الذكية على الفيديوهات باللغة العربية، وتغيير الأصوات."
  },

  // --- قسم البرمجة وبناء المواقع ---
  {
    id: 10,
    name: "v0 by Vercel",
    category: "coding",
    pricing: "freemium",
    type: "external",
    url: "https://v0.dev",
    badge: "خيارين",
    description: "اكتب لها باللغة العادية وصف للواجهة أو الموقع الذي تريده (مثال: متجر ملابس أسود فاخر)، وستقوم بتوليد الكود البرمجي الكامل والواجهة الجاهزة أمامك خلال ثوانٍ."
  },
  {
    id: 11,
    name: "Bolt.new",
    category: "coding",
    pricing: "freemium",
    type: "external",
    url: "https://bolt.new",
    badge: "خيارين",
    description: "منصة تتيح لك بناء، تشغيل، وتثبيت تطبيقات وموقع ويب متكاملة مباشرة داخل المتصفح من خلال الأوامر النصية والشات فقط."
  },

  // --- قسم الأفاتار والاستنساخ الصوتي ---
  {
    id: 12,
    name: "HeyGen",
    category: "avatar",
    pricing: "freemium",
    type: "external",
    url: "https://www.heygen.com",
    badge: "خيارين",
    description: "المنصة الأقوى لإنشاء أفاتار رقمي (متحدث افتراضي) فائق الواقعية. اكتب النص بالعربية ليقوم الشخص الافتراضي بنطقه بحركات شفايف متطابقة بشرية 100%."
  },
  {
    id: 13,
    name: "ElevenLabs (Voice Lab)",
    category: "avatar",
    pricing: "freemium",
    type: "external",
    url: "https://elevenlabs.io",
    badge: "خيارين",
    description: "الأداة الأولى عالمياً لتحويل النصوص إلى أصوات بشرية انفعالية، مع ميزة استنساخ أي صوت بشري بدقة فائقة من خلال عينة مدتها دقيقة واحدة."
  },

  // --- قسم معالجة ومسح الخلفيات ---
  {
    id: 14,
    name: "RMBG 1.4 Background Remover",
    category: "image-processing",
    pricing: "free",
    type: "internal",
    url: "#",
    badge: "مدمج ومجاني",
    description: "أداة مدمجة داخل منصتنا؛ نموذج ذكاء اصطناعي فائق السرعة لإزالة خلفيات الصور بدقة مذهلة خلال أقل من ثانيتين وبشكل مجاني وغير محدود بدون مغادرة الموقع."
  },

  // --- قسم مكتبات البرومبت الجاهزة ---
  {
    id: 15,
    name: "Lexica Art",
    category: "prompts",
    pricing: "free",
    type: "external",
    url: "https://lexica.art",
    badge: "مجاني بالكامل",
    description: "أضخم محرك بحث ومكتبة لصور الذكاء الاصطناعي؛ يتيح للمستخدم تصفح ملايين الصور واقتباس البرومبت الدقيق الذي أنتجها وإعداداتها بضغطة زر واحدة."
  }
];
