import {
  BarChart3,
  Blocks,
  BrainCircuit,
  Building2,
  CalendarDays,
  CircleArrowDown,
  ClipboardCheck,
  Cpu,
  Expand,
  Factory,
  Gauge,
  GraduationCap,
  Handshake,
  HeartPulse,
  Landmark,
  LayoutPanelLeft,
  PackageCheck,
  Radar,
  Rocket,
  ShieldCheck,
  Target,
  TrendingUp,
  Truck,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";

export const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Nilai", href: "#nilai" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "Industri", href: "#industri" },
  { label: "Layanan", href: "#layanan" },
  { label: "Tim", href: "#tim" },
  { label: "Kontak", href: "#kontak" },
];

export const heroCards = [
  { title: "Strategy", subtitle: "Business planning & execution", icon: Target },
  { title: "Technology", subtitle: "Systems, automation, and AI", icon: Cpu },
  { title: "People", subtitle: "Capability and culture alignment", icon: Users },
  { title: "Data", subtitle: "Insight for smarter decisions", icon: BarChart3 },
];

export const overviewCards = [
  {
    title: "Philosophy",
    icon: BrainCircuit,
    content:
      "Kami percaya setiap organisasi memiliki tantangan dan peluang yang unik. Filosofi kami berakar pada kolaborasi, integritas, dan perbaikan berkelanjutan.",
  },
  {
    title: "Vision",
    icon: Radar,
    content:
      "Menjadi mitra terpercaya dan perusahaan konsultansi terdepan untuk memberdayakan organisasi dalam mencapai keunggulan dan menciptakan dampak jangka panjang melalui solusi yang inovatif, terintegrasi, dan berkelanjutan.",
  },
  {
    title: "Mission",
    icon: Rocket,
    list: [
      "Menghadirkan solusi berkualitas tinggi, inovatif, dan disesuaikan untuk menjawab tantangan klien.",
      "Membangun hubungan kolaboratif yang kuat berdasarkan kepercayaan, transparansi, dan kesuksesan bersama.",
      "Memberdayakan sumber daya manusia untuk berkembang, berinovasi, dan memberikan yang terbaik setiap hari.",
      "Mendorong dampak berkelanjutan melalui integrasi teknologi, data, dan wawasan strategis.",
      "Menjunjung standar tertinggi dalam integritas, profesionalisme, dan akuntabilitas.",
    ],
  },
];

export const coreValues = [
  {
    number: "01",
    title: "Strategic Integration",
    icon: Blocks,
    accent: "from-[#0b2a66] to-[#1d66d1]",
    description:
      "Integrasi strategi bisnis, proses, teknologi, dan manusia secara menyeluruh untuk menciptakan solusi yang terhubung dan berdampak nyata.",
  },
  {
    number: "02",
    title: "Business Relevance",
    icon: Target,
    accent: "from-[#d39a17] to-[#f1bc47]",
    description:
      "Solusi kami relevan terhadap kebutuhan bisnis dan memberikan dampak nyata yang terukur.",
  },
  {
    number: "03",
    title: "Human-Centered Transformation",
    icon: Users,
    accent: "from-[#0d6e7d] to-[#21a9bd]",
    description:
      "Manusia tetap menjadi pusat dari keberhasilan transformasi organisasi.",
  },
  {
    number: "04",
    title: "Sustainable Growth",
    icon: TrendingUp,
    accent: "from-[#123a74] to-[#204e98]",
    description:
      "Kami membantu perusahaan membangun pertumbuhan jangka panjang yang adaptif, scalable, dan berkelanjutan.",
  },
  {
    number: "05",
    title: "Collaborative Partnership",
    icon: Handshake,
    accent: "from-[#b77d0f] to-[#d6a430]",
    description:
      "Kami hadir sebagai partner strategis yang mengakselerasi proses transformasi dan pertumbuhan bisnis bersama.",
  },
];

export const expertiseItems = [
  {
    title: "Business & Strategic Advisory",
    icon: Handshake,
    items: [
      "Strategy & Business Planning",
      "Organization & Process Excellence",
      "Market & Competitive Intelligence",
      "Change Management",
    ],
  },
  {
    title: "Intelligent Automation & Robotics",
    icon: Cpu,
    items: [
      "Robotics & RPA",
      "Industrial Automation",
      "Smart Manufacturing",
      "Engineering Solutions",
      "Emerging Technology",
    ],
  },
  {
    title: "Digital Systems & Data",
    icon: LayoutPanelLeft,
    items: [
      "Digital Strategy",
      "Application Development & Integration",
      "Data Management & Analytics",
      "AI & Advanced Analytics",
      "System Integration",
    ],
  },
  {
    title: "Governance & Performance",
    icon: ShieldCheck,
    items: [
      "Corporate Governance",
      "Risk Management",
      "Audit & Compliance",
      "Performance Management",
      "Financial Advisory",
    ],
  },
  {
    title: "People & Transformation",
    icon: Users,
    items: [
      "Leadership Development",
      "Talent & Organization Development",
      "Culture Transformation",
      "Learning & Capability Building",
    ],
  },
];

export const whyCards = [
  {
    title: "Multi-disciplinary Experts",
    icon: Users,
    description:
      "Kami menghadirkan kombinasi expert dari berbagai bidang untuk memberikan solusi yang komprehensif dan tepat sasaran.",
  },
  {
    title: "Orchestrated Transformation",
    icon: Workflow,
    description:
      "Kami mengintegrasikan strategi, teknologi, proses, dan manusia ke dalam satu pendekatan yang terarah dan dapat dieksekusi.",
  },
  {
    title: "Accountable Business Impact",
    icon: TrendingUp,
    description:
      "Fokus kami bukan hanya pada output, tetapi pada hasil bisnis yang terukur dan berkelanjutan.",
  },
];

export const ecosystemItems = [
  {
    number: "01",
    title: "Independent Experts",
    description: "Expert lintas disiplin dengan pengalaman praktis di berbagai industri.",
    icon: Users,
    titleColor: "#0b2a66",
    iconFrom: "#0b2a66",
    iconTo: "#1749a1",
  },
  {
    number: "02",
    title: "Technology Partners",
    description: "Penyedia teknologi untuk solusi yang scalable dan future-ready.",
    icon: Cpu,
    titleColor: "#1487a4",
    iconFrom: "#1490ae",
    iconTo: "#22b5cb",
  },
  {
    number: "03",
    title: "Academic & Research",
    description: "Insight berbasis riset dan pendekatan ilmiah.",
    icon: GraduationCap,
    titleColor: "#1d58d6",
    iconFrom: "#1e57d6",
    iconTo: "#2b6fff",
  },
  {
    number: "04",
    title: "Industry & Domain Partners",
    description: "Pemahaman mendalam terhadap kebutuhan dan dinamika industri.",
    icon: Factory,
    titleColor: "#5d7e11",
    iconFrom: "#6f9615",
    iconTo: "#8cb92a",
  },
  {
    number: "05",
    title: "Implementation Partners",
    description: "Eksekusi solusi secara efektif dan terstandarisasi.",
    icon: Wrench,
    titleColor: "#d18c06",
    iconFrom: "#d89409",
    iconTo: "#f0ae22",
  },
  {
    number: "06",
    title: "Government & Regulatory",
    description: "Kepatuhan, governance, dan mitigasi risiko.",
    icon: Landmark,
    titleColor: "#5b2bc0",
    iconFrom: "#5f2dc7",
    iconTo: "#7b3ff1",
  },
  {
    number: "07",
    title: "Clients & Business Partners",
    description: "Kolaborasi strategis untuk menciptakan nilai bisnis yang nyata.",
    icon: Building2,
    titleColor: "#1a55d1",
    iconFrom: "#1b56d4",
    iconTo: "#2b72ff",
  },
];

export const stats = [
  { value: 50, suffix: "+", label: "Transformation Initiatives", icon: BarChart3 },
  { value: 20, suffix: "+", label: "Industries Served", icon: Building2 },
  { value: 50, suffix: "+", label: "Multidisciplinary Experts", icon: Users },
  { value: 20, suffix: "+", label: "Years of Collective Experience", icon: CalendarDays },
];

export const industries = [
  {
    title: "Manufacturing",
    image: "/assets/industry-manufacturing-rev6.png",
    alt: "Manufacturing industry card from CIS COMPRO rev 6",
    icon: Factory,
  },
  {
    title: "Mining & Resources",
    image: "/assets/industry-mining-rev6.png",
    alt: "Mining and resources industry card from CIS COMPRO rev 6",
    icon: Wrench,
  },
  {
    title: "Healthcare",
    image: "/assets/industry-healthcare-rev6.png",
    alt: "Healthcare industry card from CIS COMPRO rev 6",
    icon: HeartPulse,
  },
  {
    title: "Government & Public Services",
    image: "/assets/industry-government-rev6.png",
    alt: "Government and public services industry card from CIS COMPRO rev 6",
    icon: Landmark,
  },
  {
    title: "Logistics & Supply Chain",
    image: "/assets/industry-logistics-rev6.png",
    alt: "Logistics and supply chain industry card from CIS COMPRO rev 6",
    icon: Truck,
  },
];

export const impacts = [
  {
    title: "Efficiency Improvement",
    value: "20% - 40%",
    icon: TrendingUp,
    accent: "#0b2a66",
    iconFrom: "#0b2a66",
    iconTo: "#1b56d4",
  },
  {
    title: "Cost Reduction",
    value: "15% - 30%",
    icon: BarChart3,
    accent: "#11708f",
    iconFrom: "#11708f",
    iconTo: "#1aa6c8",
  },
  {
    title: "Faster Process Cycle",
    value: "25% - 50%",
    icon: PackageCheck,
    accent: "#6b9711",
    iconFrom: "#6b9711",
    iconTo: "#8fbe26",
  },
  {
    title: "Productivity & Performance Improvement",
    value: "",
    icon: Users,
    accent: "#5d2fc0",
    iconFrom: "#5d2fc0",
    iconTo: "#7b45ef",
  },
  {
    title: "Sustainable Business Growth",
    value: "",
    icon: Rocket,
    accent: "#d18c06",
    iconFrom: "#d18c06",
    iconTo: "#f0b126",
  },
];

export const deliverItems = [
  {
    title: "BUSINESS TRANSFORMATION",
    description: "Menyelaraskan strategi hingga eksekusi untuk mendorong kinerja berkelanjutan.",
    image: "/assets/business-transformation-icon.png",
    color: "#092b83",
  },
  {
    title: "OPERATIONAL EXCELLENCE",
    description: "Meningkatkan efisiensi, produktivitas, dan kualitas melalui proses terbaik.",
    image: "/assets/operational-excellence-icon.png",
    color: "#006f88",
  },
  {
    title: "DIGITAL & TECHNOLOGY ENABLEMENT",
    description: "Mempercepat keputusan dan performa bisnis melalui teknologi dan data.",
    image: "/assets/digital-technology-enablement-icon.png",
    color: "#5d8f18",
  },
];

export const digitalCorePrinciples = [
  {
    title: "BUSINESS-DRIVEN TRANSFORMATION",
    description: "Transformasi digital yang dimulai dari kebutuhan bisnis, bukan dari teknologi.",
    icon: Target,
    color: "#0b2a66",
  },
  {
    title: "END-TO-END INTEGRATION",
    description: "Menghubungkan sistem, data, dan proses menjadi satu kesatuan yang terintegrasi.",
    icon: Workflow,
    color: "#0d98a5",
  },
  {
    title: "DECISION-ORIENTED IMPACT",
    description: "Meningkatkan kualitas dan kecepatan pengambilan keputusan berbasis data.",
    icon: TrendingUp,
    color: "#d39a17",
  },
];

export const digitalStatement = "FROM SYSTEMS TO DECISIONS. FROM DECISIONS TO RESULTS.";

export const humanCapitalImpactItems = [
  {
    title: "Peningkatan Produktivitas dan Kinerja Organisasi",
    icon: TrendingUp,
  },
  {
    title: "Percepatan Adopsi Digital & Automation",
    icon: Rocket,
  },
  {
    title: "Pengurangan Resistensi terhadap Perubahan",
    icon: Users,
  },
  {
    title: "Pengambilan Keputusan Berbasis Data",
    icon: BarChart3,
  },
  {
    title: "Optimalisasi ROI dari Investasi Teknologi",
    icon: CircleArrowDown,
  },
  {
    title: "Organisasi Lebih Agile, Adaptif, dan Scalable",
    icon: Expand,
  },
];

export const humanCapitalFooter = {
  image: "/assets/orghr.png",
  imageAlt: "Visual human capital transformation CIS",
  text:
    "Tanpa kesiapan manusia, investasi pada teknologi dan automation tidak akan menghasilkan dampak optimal. CIS memastikan manusia menjadi penggerak utama keberhasilan transformasi.",
};

export const serviceBlocks = [
  {
    eyebrow: "",
    title: "Transforming Operations Through Intelligent Robotics",
    description:
      "CIS mengorkestrasi pemanfaatan robotik sebagai bagian dari transformasi operasional untuk menghasilkan kinerja bisnis yang lebih optimal dan berkelanjutan.",
    image: "/assets/robotics-scene-rev6.png",
    imagePosition: "object-center",
    imageFit: "object-cover",
    capabilityLabel: "ROBOTICS & INDUSTRY 4.0 ADVISORY",
    capabilityHref: "#/robotics/robotics-industry-4-advisory",
    points: [
      {
        title: "Autonomous Mobile Robot (AMR)",
        description: "Transportasi internal dan material handling yang lebih adaptif dan scalable.",
        icon: Truck,
        href: "#/robotics/amr-material-handling",
      },
      {
        title: "Industrial Robotics",
        description: "Otomasi produksi, perakitan, handling, dan quality support di lini industri.",
        icon: Factory,
        href: "#/robotics/industrial-robotics",
      },
      {
        title: "Smart Intralogistics Solutions",
        description: "Sistem pergudangan dan distribusi cerdas untuk throughput dan akurasi yang lebih baik.",
        icon: Workflow,
        href: "#/robotics/smart-intralogistics-solutions",
      },
      {
        title: "AI-based Vision & Intelligent Automation",
        description: "Machine vision, automation cerdas, dan orchestration digital untuk proses yang presisi.",
        icon: Cpu,
        href: "#/robotics/ai-vision-intelligent-automation",
      },
    ],
    secondaryLabel: "Industries We Serve",
    secondaryItems: [
      {
        title: "Healthcare & Hospitality",
        icon: HeartPulse,
        href: "#/robotics/healthcare-hospitality",
      },
      {
        title: "Warehouse, Retail & E-Commerce",
        icon: Truck,
        href: "#/robotics/warehouse-retail-ecommerce",
      },
      {
        title: "Automotive & Manufacturing",
        icon: Factory,
        href: "#/robotics/automotive-manufacturing",
      },
      {
        title: "Foundry",
        icon: Wrench,
        href: "#/robotics/foundry",
      },
      {
        title: "Mining, Energy & Heavy Industry",
        icon: Wrench,
        href: "#/robotics/mining-energy-heavy-industry",
      },
      {
        title: "Food & Beverage",
        icon: PackageCheck,
        href: "#/robotics/food-beverage",
      },
      {
        title: "Electronic & High-Tech",
        icon: Cpu,
        href: "#/robotics/electronic-high-tech",
      },
    ],
    impactLabel: "Business Impact We Deliver",
    impactItems: [
      {
        title: "Efisiensi Operasional Lebih Tinggi",
        icon: Gauge,
      },
      {
        title: "Biaya Lebih Terkendali",
        icon: CircleArrowDown,
      },
      {
        title: "Throughput & Produktivitas Meningkat",
        icon: BarChart3,
      },
      {
        title: "Kualitas Lebih Konsisten",
        icon: ShieldCheck,
      },
      {
        title: "Operasi Lebih Stabil, Scalable & Future-Ready",
        icon: Expand,
      },
    ],
    icon: Cpu,
  },
  {
    eyebrow: "",
    title: "Digital Transformation for Smarter Decisions",
    description:
      "Integrasi strategi, sistem, dan data untuk keputusan yang lebih cepat, akurat, dan relevan bagi bisnis.",
    image: "/assets/meeting.png",
    imagePosition: "object-top",
    imageFit: "object-contain",
    imageHeightClass: "h-[300px] md:h-[390px]",
    capabilityLabel: "Our Expertise & Capabilities",
    points: [
      {
        title: "Integrated Business Systems",
        href: "#/digital/integrated-business-systems",
        hideIcon: true,
      },
      {
        title: "Intelligent Automation",
        href: "#/digital/intelligent-automation",
        hideIcon: true,
      },
      {
        title: "Digital Solution & Applications",
        href: "#/digital/digital-solution-applications",
        hideIcon: true,
      },
      {
        title: "Strategy & Transformation Advisory",
        href: "#/digital/strategy-transformation-advisory",
        hideIcon: true,
      },
      {
        title: "Data & Analytics",
        href: "#/digital/data-analytics",
        hideIcon: true,
      },
    ],
    statement: digitalStatement,
    icon: ClipboardCheck,
  },
  {
    eyebrow: "",
    title: "Human Capital Transformation for Business Performance",
    description:
      "Memastikan transformasi digital dan operasional benar-benar dijalankan, diadopsi, dan dioptimalkan oleh manusia di dalam organisasi.",
    image: "/assets/service-human-scene-rev6.png",
    imagePosition: "object-right",
    imageFit: "object-contain",
    capabilityLabel: "Transformation Pillars",
    points: [
      {
        title: "WORKFORCE & CAPABILITY TRANSFORMATION",
        href: "#/human-capital/workforce-capability-transformation",
        hideIcon: true,
      },
      {
        title: "ORGANIZATION & CULTURE TRANSFORMATION",
        href: "#/human-capital/organization-culture-transformation",
        hideIcon: true,
      },
      {
        title: "DIGITAL HR & INTELLIGENT WORKFORCE",
        href: "#/human-capital/digital-hr-intelligent-workforce",
        hideIcon: true,
      },
    ],
    impactLabel: "Business Impact",
    impactItems: humanCapitalImpactItems,
    icon: Users,
  },
];

export const servicesClosing = {
  image: "/assets/closing-quote.jpg",
  imageAlt: "Closing visual layanan CIS",
  eyebrow: "Transform Today. Grow Tomorrow.",
  title: "Transforming Business Through Technology, Systems & Human Capital.",
  note:
    "Menunda transformasi bukan menghemat biaya, melainkan mengorbankan keunggulan kompetitif setiap hari.",
  ctaTitle: "Mulai Business Process Diagnostic Anda Sekarang.",
  ctaDescription:
    "Dapatkan insight strategis, temukan peluang efisiensi, dan tingkatkan kinerja bisnis Anda dalam waktu singkat.",
  ctaHref: "#kontak",
  ctaLabel: "Jadwalkan Sekarang",
  ctaNote: "Keputusan hari ini menentukan keunggulan bisnis Anda esok hari.",
  pillars: [
    {
      title: "Expert-Led",
      description: "Berpengalaman lintas industri.",
      icon: Users,
    },
    {
      title: "Confidential",
      description: "Aman, profesional, dan dapat dipercaya.",
      icon: ShieldCheck,
    },
    {
      title: "Result-Focused",
      description: "Berbasis hasil nyata, bukan sekadar laporan.",
      icon: Target,
    },
    {
      title: "Measurable Impact",
      description: "Dampak terukur untuk kinerja bisnis yang lebih baik.",
      icon: BarChart3,
    },
  ],
};

export const roboticsIndustryPages = [
  {
    slug: "healthcare-hospitality",
    eyebrow: "Robotics Industry Detail",
    title: "Healthcare & Hospitality Robotics",
    icon: HeartPulse,
    heroImage: "/assets/healthcare.png",
    heroAlt: "Contoh use case robotik pada lingkungan healthcare",
    supportImages: [
      "/assets/hospitality.png",
      "/assets/amr-agv.png",
    ],
    overview: [
      "Robot pengantar, robot pembawa, dan robot pengangkut membantu material movement di area rumah sakit, hotel, dan fasilitas layanan.",
      "Robot resepsionis, robot informasi, dan robot service meningkatkan pengalaman tamu serta membantu beban kerja frontliner.",
      "UVC robot, robot pembersih, dan robot monitoring pasien mendukung standardisasi layanan dan keselamatan operasional.",
    ],
    useCases: [
      "Material delivery, linen delivery, dan pengantaran makanan/obat",
      "Front desk assistance, guest information, dan patient guidance",
      "Cleaning automation, UV disinfection, dan repetitive facility support",
      "Monitoring area, support nursing workflow, dan service escalation",
    ],
    solutionStack: [
      "AMR untuk pergerakan barang dan peralatan",
      "Service robot untuk resepsionis, concierge, dan delivery",
      "Facility robot untuk cleaning dan disinfection",
    ],
    businessValue: [
      "Response time lebih cepat pada layanan internal",
      "Service quality lebih konsisten pada jam sibuk",
      "Pemanfaatan SDM lebih fokus ke interaksi bernilai tinggi",
      "Operational hygiene dan traceability lebih baik",
    ],
  },
  {
    slug: "warehouse-retail-ecommerce",
    eyebrow: "Robotics Industry Detail",
    title: "Warehouse, Retail & E-Commerce Robotics",
    icon: Truck,
    heroImage: "/assets/retail-logistics.png",
    heroAlt: "Contoh AMR dan robot logistik pada warehouse dan retail",
    supportImages: [
      "/assets/amr-agv.png",
      "/assets/rpa.png",
    ],
    overview: [
      "AMR forklift, pallet jack, picking AMR, dan sorting robot membantu pergerakan material yang cepat dan terukur.",
      "Robot inventory scanning dan mobile racking meningkatkan akurasi stok dan visibilitas area penyimpanan.",
      "RPA dapat melengkapi sisi digital untuk order processing, reconciliation, dan administrasi fulfillment.",
    ],
    useCases: [
      "Inbound pallet movement, replenishment, dan storage relocation",
      "Goods-to-person picking dan collaborative order fulfillment",
      "Automated sorting, inventory scan, dan shelf visibility",
      "Back-office order validation, reporting, dan customer case routing",
    ],
    solutionStack: [
      "AMR/AGV untuk intralogistics",
      "Picking dan sorting workflow automation",
      "RPA untuk order-to-cash dan warehouse administration",
    ],
    businessValue: [
      "Picking cycle lebih cepat",
      "Akurasi inventory dan order handling meningkat",
      "Pemakaian ruang dan manpower lebih optimal",
      "Scalability lebih baik saat peak season",
    ],
  },
  {
    slug: "automotive-manufacturing",
    eyebrow: "Robotics Industry Detail",
    title: "Automotive & Manufacturing Robotics",
    icon: Factory,
    heroImage: "/assets/manufacturing-arm.png",
    heroAlt: "Contoh robot arm pada industri manufaktur",
    supportImages: [
      "/assets/manufacturing-scara.png",
      "/assets/cobot.png",
    ],
    overview: [
      "Industrial robot mendukung picking, dispensing, welding, assembly, palletizing, dan material handling.",
      "Scara, delta, dan cobot cocok untuk kebutuhan presisi, cycle time ketat, dan area kolaboratif tertentu.",
      "Integrasi robotik dapat dipasangkan dengan quality control, line balancing, dan traceability digital.",
    ],
    useCases: [
      "Welding, assembly, dan part handling",
      "Dispensing, trimming, polishing, dan finishing",
      "Palletizing, packaging, dan end-of-line automation",
      "Collaborative workstation untuk sub-assembly dan inspection support",
    ],
    solutionStack: [
      "Industrial robot untuk repetitive heavy-duty operation",
      "Cobot untuk area kolaboratif dan flexible cell",
      "Line integration dengan sensor, vision, dan performance monitoring",
    ],
    businessValue: [
      "Output lebih stabil dan repeatable",
      "Reject rate dan rework dapat ditekan",
      "Keselamatan dan ergonomi kerja meningkat",
      "Manufacturing cell lebih scalable untuk demand shift",
    ],
  },
  {
    slug: "foundry",
    eyebrow: "Robotics Industry Detail",
    title: "Foundry Robotics",
    icon: Wrench,
    heroImage: "/assets/manufacturing-scara.png",
    heroAlt: "Contoh otomasi robotik yang relevan untuk area foundry",
    supportImages: [
      "/assets/industry-types.png",
      "/assets/physical-categories.png",
    ],
    overview: [
      "Foundry membutuhkan robotik yang tangguh untuk handling, finishing, transfer material, dan support inspection.",
      "Robot membantu memindahkan proses berisiko dari operator ke cell otomatis yang lebih terkendali.",
      "Pemilihan solusi perlu menimbang temperatur, kontaminasi, payload, dan integrasi keselamatan.",
    ],
    useCases: [
      "Part transfer dan heavy material handling",
      "Deburring, polishing, dan finishing pasca-casting",
      "Inspection support pada area kualitas dan dimensi",
      "Semi-automatic workcell dengan guarding dan safety interlock",
    ],
    solutionStack: [
      "Heavy-duty industrial robot dengan tooling khusus",
      "Safety cell dan process enclosure",
      "Monitoring performa cell dan preventive maintenance visibility",
    ],
    businessValue: [
      "Risiko operator pada area panas dan repetitif menurun",
      "Cycle time lebih konsisten",
      "Produktivitas naik pada proses yang sebelumnya manual",
      "Stabilitas kualitas lebih mudah dijaga",
    ],
  },
  {
    slug: "mining-energy-heavy-industry",
    eyebrow: "Robotics Industry Detail",
    title: "Mining, Energy & Heavy Industry Robotics",
    icon: Wrench,
    heroImage: "/assets/military-defense.png",
    heroAlt: "Contoh visual robotik untuk lingkungan operasi berat dan berisiko tinggi",
    supportImages: [
      "/assets/transformation.png",
      "/assets/amr-agv.png",
    ],
    overview: [
      "Industri berat memerlukan kombinasi robot fisik, mobile robot, dan digital automation untuk operasi yang menuntut keselamatan tinggi.",
      "Robotik relevan untuk area transport internal, inspection route, sampling support, dan repetitive heavy handling.",
      "Arsitektur solusi perlu memperhatikan ruggedization, connectivity, dan interoperability dengan sistem operasi eksisting.",
    ],
    useCases: [
      "Autonomous transport pada area logistik internal",
      "Inspection route dan monitoring area kritikal",
      "Support handling pada workshop, warehouse, dan spare parts",
      "Digital automation untuk reporting, validation, dan work order administration",
    ],
    solutionStack: [
      "AMR/AGV untuk pergerakan material internal",
      "Robot fisik untuk handling dan support inspection",
      "Digital integration untuk visibility dan decision support",
    ],
    businessValue: [
      "Operasi lebih aman dan terdokumentasi",
      "Downtime akibat bottleneck manual berkurang",
      "Pengawasan area kritikal lebih konsisten",
      "Keputusan operasional lebih cepat melalui integrasi data",
    ],
  },
  {
    slug: "food-beverage",
    eyebrow: "Robotics Industry Detail",
    title: "Food & Beverage Robotics",
    icon: PackageCheck,
    heroImage: "/assets/hospitality.png",
    heroAlt: "Contoh service robot pada restoran dan acara",
    supportImages: [
      "/assets/cobot.png",
      "/assets/amr-agv.png",
    ],
    overview: [
      "Service robot dapat mendukung food delivery, bussing, guest assistance, dan event operation.",
      "Cobot dan mobile robot juga relevan untuk packaging support, internal movement, dan repetitive preparation task.",
      "Penerapan perlu mempertimbangkan layout service area, food safety, dan experience pelanggan.",
    ],
    useCases: [
      "Pengantaran makanan, tray return, dan table support",
      "Transport internal untuk bahan, packaging, dan supplies",
      "Assistance pada event, banquet, dan hospitality activation",
      "Automation support pada packing, sorting, dan routine task tertentu",
    ],
    solutionStack: [
      "Service robot untuk area customer-facing",
      "Mobile robot untuk internal logistics",
      "Selected workstation automation untuk proses repetitif",
    ],
    businessValue: [
      "Service speed lebih konsisten",
      "Beban operasional tim frontliner berkurang",
      "Guest experience lebih modern dan terukur",
      "Operasi outlet atau event lebih scalable",
    ],
  },
  {
    slug: "electronic-high-tech",
    eyebrow: "Robotics Industry Detail",
    title: "Electronic & High-Tech Robotics",
    icon: Cpu,
    heroImage: "/assets/cobot.png",
    heroAlt: "Contoh cobot pada lini elektronik dan high-tech",
    supportImages: [
      "/assets/rpa.png",
      "/assets/manufacturing-scara.png",
    ],
    overview: [
      "Cobot, scara, dan workstation automation cocok untuk assembly presisi, inspection, dan handling komponen sensitif.",
      "RPA membantu mempercepat sisi administratif seperti traceability, reconciliation, dan pelaporan kualitas.",
      "Kombinasi robot fisik dan digital automation menciptakan alur end-to-end yang lebih stabil.",
    ],
    useCases: [
      "Precision assembly dan component handling",
      "Inline inspection dan support quality verification",
      "Packaging dan traceability station",
      "RPA untuk dokumentasi, reporting, dan data validation",
    ],
    solutionStack: [
      "Cobot/scara untuk operasi presisi dan fleksibel",
      "Vision-assisted quality workflow",
      "RPA untuk digital back-office dan data orchestration",
    ],
    businessValue: [
      "Presisi dan konsistensi proses meningkat",
      "Kesalahan input/data berkurang",
      "Traceability lebih kuat untuk audit dan kualitas",
      "Produktivitas naik tanpa mengorbankan kontrol proses",
    ],
  },
];

export const roboticsDetailPages = [
  {
    slug: "robotics-industry-4-advisory",
    eyebrow: "Robotics & Industry 4.0 Advisory",
    title: "Robotics & Industry 4.0 Advisory",
    icon: ClipboardCheck,
    heroImage: "/assets/revolution-4.png",
    heroAlt: "Peta revolusi industri 4.0 dan transformasi robotik",
    supportImages: [
      "/assets/revolution-1-4.png",
      "/assets/transformation.png",
    ],
    overview: [
      "Transformasi digital membangun fondasi visibilitas dan data untuk operasi yang lebih responsif.",
      "Otomasi dan robotik mempercepat efisiensi, fleksibilitas produksi, dan kualitas keputusan operasional.",
      "Pendekatan advisory CIS membantu memilih prioritas, use case, dan tahapan implementasi yang realistis.",
    ],
    useCases: [
      "Diagnostic readiness untuk roadmap industri 4.0",
      "Identifikasi quick wins dan high-impact automation use case",
      "Perencanaan integrasi robotik dengan proses operasional dan sistem eksisting",
      "Governance transformasi untuk scale-up implementation",
    ],
    solutionStack: [
      "Business process diagnostic",
      "Transformation roadmap dan orchestration model",
      "Integration blueprint untuk data, system, dan robotics",
    ],
    businessValue: [
      "Prioritas transformasi lebih jelas",
      "Investasi automation lebih terarah",
      "Organisasi lebih siap untuk scaling digital operation",
      "Keputusan teknologi lebih relevan dengan tujuan bisnis",
    ],
  },
  {
    slug: "amr-material-handling",
    eyebrow: "Robotics & Industry 4.0 Advisory",
    title: "Autonomous Mobile Robot (AMR)",
    icon: Truck,
    heroImage: "/assets/amr-agv.png",
    heroAlt: "Contoh AMR dan AGV untuk material handling",
    supportImages: [
      "/assets/physical-categories.png",
      "/assets/retail-logistics.png",
    ],
    overview: [
      "AMR cocok untuk perpindahan pallet, box, trolley, dan internal replenishment.",
      "Perangkat ini lebih fleksibel dibanding fixed conveyor pada area yang sering berubah.",
      "AMR dapat digabungkan dengan WMS, MES, atau workflow manual yang ingin ditingkatkan bertahap.",
    ],
    useCases: [
      "Pallet movement dan replenishment",
      "Goods-to-person support",
      "Hospital delivery dan internal service transport",
      "Inventory scan dan route-based material movement",
    ],
    solutionStack: [
      "AMR/AGV fleet",
      "Traffic orchestration dan route control",
      "Integrasi dengan layout, dispatch, dan operational dashboard",
    ],
    businessValue: [
      "Internal movement lebih cepat dan konsisten",
      "Bottleneck logistik berkurang",
      "Scalability lebih baik dibanding penambahan manpower murni",
      "Traceability transport internal meningkat",
    ],
  },
  {
    slug: "industrial-robotics",
    eyebrow: "Robotics & Industry 4.0 Advisory",
    title: "Industrial Robotics",
    icon: Factory,
    heroImage: "/assets/manufacturing-arm.png",
    heroAlt: "Contoh articulated robot untuk manufaktur",
    supportImages: [
      "/assets/industry-types.png",
      "/assets/transformation.png",
    ],
    overview: [
      "Industrial robot umum dipakai untuk pekerjaan repetitif, presisi, dan high-cycle yang menuntut konsistensi tinggi.",
      "Pemilihan tipe robot bergantung pada payload, reach, speed, accuracy, dan kebutuhan integration cell.",
      "Halaman detail ini mengikuti pola PPT: list utama ringkas, detail dibuka terpisah dengan visual penerapan yang lebih spesifik.",
    ],
    useCases: [
      "Welding dan part joining",
      "Dispensing dan precision handling",
      "Assembly serta end-of-line packaging",
      "Inspection support dan repetitive cell operation",
    ],
    solutionStack: [
      "Articulated / scara / delta / cartesian robot",
      "Safety cell dan end-effector selection",
      "Integration dengan PLC, sensor, dan quality workflow",
    ],
    businessValue: [
      "Cycle time lebih stabil",
      "Kualitas hasil lebih repeatable",
      "Keselamatan area kerja meningkat",
      "Kapasitas produksi lebih mudah diskalakan",
    ],
  },
  {
    slug: "smart-intralogistics-solutions",
    eyebrow: "Robotics & Industry 4.0 Advisory",
    title: "Smart Intralogistics Solutions",
    icon: Workflow,
    heroImage: "/assets/retail-logistics.png",
    heroAlt: "Contoh solusi intralogistics dan distribusi cerdas",
    supportImages: [
      "/assets/amr-agv.png",
      "/assets/physical-categories.png",
    ],
    overview: [
      "Fokus utamanya adalah memastikan flow barang tidak tersendat dari inbound sampai outbound.",
      "Solusi intralogistics dapat bertahap, mulai dari movement sederhana sampai orchestration picking yang lebih kompleks.",
      "Pola detail page ini sengaja image-led seperti arahan PPT, bukan daftar panjang di halaman utama.",
    ],
    useCases: [
      "Receiving dan putaway support",
      "Picking, sorting, dan packing flow",
      "Cross-zone replenishment",
      "Inventory visibility dan internal distribution",
    ],
    solutionStack: [
      "AMR orchestration",
      "Picking support dan mobile racking",
      "Integration dengan warehouse workflow dan dashboard",
    ],
    businessValue: [
      "Throughput gudang meningkat",
      "Akurasi picking lebih baik",
      "Idle movement berkurang",
      "Warehouse lebih siap untuk scale dan peak load",
    ],
  },
  {
    slug: "ai-vision-intelligent-automation",
    eyebrow: "Robotics & Industry 4.0 Advisory",
    title: "AI-based Vision & Intelligent Automation",
    icon: Cpu,
    heroImage: "/assets/rpa.png",
    heroAlt: "Contoh RPA dan intelligent automation",
    supportImages: [
      "/assets/cobot.png",
      "/assets/transformation.png",
    ],
    overview: [
      "Use case dapat bergerak dari robot non-fisik seperti RPA hingga computer vision untuk inspection dan recognition.",
      "Automation cerdas bermanfaat saat proses membutuhkan kombinasi rule-based execution dan contextual decision support.",
      "Pendekatan CIS adalah menghubungkan automation digital dan automation fisik agar dampaknya terasa end-to-end.",
    ],
    useCases: [
      "Data reconciliation dan validation",
      "Routine reporting dan back-office processing",
      "Vision-assisted inspection",
      "Workflow orchestration untuk service dan operation support",
    ],
    solutionStack: [
      "RPA dan workflow automation",
      "Machine vision / intelligent recognition",
      "Integration dengan business systems dan operational workflow",
    ],
    businessValue: [
      "Error input dan repetitive delay berkurang",
      "Proses inspeksi lebih konsisten",
      "Kecepatan administrasi operasional meningkat",
      "Data lebih siap dipakai untuk decision support",
    ],
  },
  ...roboticsIndustryPages,
];

export const digitalDetailPages = [
  {
    slug: "integrated-business-systems",
    eyebrow: "Digital Transformation",
    title: "Integrated Business Systems",
    icon: BarChart3,
    heroImage: "/assets/service-digital-systems-rev6.png",
    heroAlt: "Visual integrated business systems untuk transformasi digital CIS",
    description: "Membangun fondasi sistem bisnis terintegrasi untuk visibilitas dan kontrol yang lebih baik.",
    bullets: ["ERP", "CRM", "Data Platform"],
  },
  {
    slug: "intelligent-automation",
    eyebrow: "Digital Transformation",
    title: "Intelligent Automation",
    icon: Cpu,
    heroImage: "/assets/service-digital-automation-rev6.png",
    heroAlt: "Visual intelligent automation untuk transformasi digital CIS",
    description: "Mengurangi ketergantungan pada proses manual melalui automation yang scalable.",
    bullets: ["RPA", "Workflow Automation", "AI-assisted Processes"],
  },
  {
    slug: "digital-solution-applications",
    eyebrow: "Digital Transformation",
    title: "Digital Solution & Applications",
    icon: LayoutPanelLeft,
    heroImage: "/assets/service-digital-solutions-rev6.png",
    heroAlt: "Visual digital solution dan applications CIS",
    description: "Mengembangkan solusi digital yang mendukung proses bisnis end-to-end.",
    bullets: ["Custom Applications", "System Integration", "Cloud Solutions"],
  },
  {
    slug: "strategy-transformation-advisory",
    eyebrow: "Digital Transformation",
    title: "Strategy & Transformation Advisory",
    icon: Handshake,
    heroImage: "/assets/service-digital-strategy-rev6.png",
    heroAlt: "Visual strategy dan transformation advisory CIS",
    description: "Menyusun roadmap transformasi yang selaras dengan prioritas bisnis.",
    bullets: ["Digital Strategy", "Process Optimization", "Change Management"],
  },
  {
    slug: "data-analytics",
    eyebrow: "Digital Transformation",
    title: "Data & Analytics",
    icon: TrendingUp,
    heroImage: "/assets/service-digital-analytics-rev6.png",
    heroAlt: "Visual data dan analytics untuk keputusan bisnis CIS",
    description: "Mengubah data menjadi insight untuk keputusan yang lebih cepat dan akurat.",
    bullets: ["Data Governance", "Advanced Analytics", "Decision Support"],
  },
];

export const humanCapitalDetailPages = [
  {
    slug: "workforce-capability-transformation",
    eyebrow: "Human Capital Transformation",
    title: "Workforce & Capability Transformation",
    icon: TrendingUp,
    heroImage: "/assets/service-human-workforce-rev6.png",
    heroAlt: "Visual workforce dan capability transformation CIS",
    description:
      "Membangun kapabilitas organisasi agar siap menjalankan transformasi dan menghadapi tuntutan bisnis masa depan.",
    bullets: [
      "Strategic Workforce Planning",
      "Capability & Skills Development",
      "Leadership Acceleration",
      "Future Talent Readiness",
    ],
  },
  {
    slug: "organization-culture-transformation",
    eyebrow: "Human Capital Transformation",
    title: "Organization & Culture Transformation",
    icon: Handshake,
    heroImage: "/assets/service-human-culture-rev6.png",
    heroAlt: "Visual organization dan culture transformation CIS",
    description:
      "Menyelaraskan struktur, budaya, dan cara kerja agar transformasi dapat berjalan efektif dan berkelanjutan.",
    bullets: [
      "Organization Design & Effectiveness",
      "Culture & Mindset Transformation",
      "Change Management",
      "Performance Alignment",
    ],
  },
  {
    slug: "digital-hr-intelligent-workforce",
    eyebrow: "Human Capital Transformation",
    title: "Digital HR & Intelligent Workforce",
    icon: LayoutPanelLeft,
    heroImage: "/assets/service-human-digitalhr-rev6.png",
    heroAlt: "Visual digital HR dan intelligent workforce CIS",
    description:
      "Mengintegrasikan teknologi dalam pengelolaan SDM untuk meningkatkan efisiensi, visibilitas, dan kualitas pengambilan keputusan.",
    bullets: [
      "HR Digital Transformation",
      "Workforce Analytics & Insight",
      "AI & Automation Enablement",
      "Digital Employee Experience",
    ],
  },
];

export const footerLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "Layanan", href: "#layanan" },
  { label: "Tim", href: "#tim" },
  { label: "Kontak", href: "#kontak" },
];

export const floatingBadges = [
  { icon: Workflow, label: "Integrated Delivery" },
  { icon: ShieldCheck, label: "Accountable Impact" },
  { icon: Building2, label: "Enterprise Ready" },
];

export const teamMembers = [
  {
    name: "Dr. Ronald Listio, M.Si., MM., MH., C.Med., CIRP., CILC., CIERM., CIGS., CIFM.",
    role: "Chairman of the Board",
  },
  { name: "H Wibowo, A.Md.T" ,    role: "President Director", },
 { name: "S Bratakusuma SE, MAk. CRP, CAFM"  ,    role: "Director of Finance Risk and Audit Governance", },
  { name: "Edy San Long Lest, Aj. Ak, SE, MM"  ,    role: "Director of Finance, Accounting & Tax", },
    { name: "H. Gunawan, MMktg" ,    role: "Director of Strategic Communication",  },
      { name: "Iwan Kurniawan, A.Md.T , COP" ,    role: "Director of Industrial Automation & Technology Transformation",  },
  { name: "Helmi F Wandara, S.Mn., Askom, CMT BNSP, CPHCM, HRBP, CCP, CFP" ,    role: "Director of Learning & Business Transformation",  },
 
  { name: "A Kusuma L, S.Kom, FLMI, AFSI, ACS, ARA" ,    role: "Application & Control General Manager",  },
  {
    name: "H Muamar, A.Md.T ,PRG BNSP, CCNA",
    role: "IT & Cyber Dev General Manager", 
  },
  { name: "Cynthia, S.I.Kom"  ,    role: "Business Operations General Manager", },
  { name: "Atika, S.I.Kom"  ,    role: "Head of Operational Excellence", },
  { name: "Michella, S.H"  ,    role: "Head of Integrated Operations", },
  { name: "Vena Pratiwi Eka Putri, A.Md.T., SAP Cert.", role: "Operation & Consulting Analyst", },
];
