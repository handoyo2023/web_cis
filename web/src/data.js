import {
  BarChart3,
  Blocks,
  BrainCircuit,
  Building2,
  CalendarDays,
  ClipboardCheck,
  Cpu,
  Factory,
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

export const serviceBlocks = [
  {
    eyebrow: "",
    title: "Transforming Operations Through Intelligent Robotics",
    description:
      "CIS mengorkestrasi pemanfaatan robotik sebagai bagian dari transformasi operasional untuk menghasilkan kinerja bisnis yang lebih optimal dan berkelanjutan.",
    image: "/assets/robotics-scene-rev6.png",
    imagePosition: "object-center",
    imageFit: "object-cover",
    approachLabel: "Our Consulting Approach",
    approach: [
      {
        number: "01",
        title: "ASSESS & UNDERSTAND",
        description:
          "Memahami tujuan bisnis, proses operasional, dan tantangan untuk mengidentifikasi peluang transformasi.",
        icon: ClipboardCheck,
      },
      {
        number: "02",
        title: "STRATEGIZE & PRIORITIZE",
        description:
          "Menyusun strategi robotik yang selaras dengan prioritas bisnis dan nilai yang ingin dicapai.",
        icon: Target,
      },
      {
        number: "03",
        title: "ORCHESTRATE THE SOLUTION",
        description:
          "Mengorkestrasi ekosistem, kapabilitas, dan teknologi yang tepat untuk mendukung keberhasilan inisiatif.",
        icon: Workflow,
      },
      {
        number: "04",
        title: "GUIDE EXECUTION",
        description:
          "Mengawal proses pelaksanaan inisiatif agar berjalan efektif, terintegrasi, dan sesuai tujuan bisnis.",
        icon: Users,
      },
      {
        number: "05",
        title: "DRIVE VALUE CONTINUOUSLY",
        description:
          "Memastikan manfaat berkelanjutan melalui monitoring, evaluasi, dan perbaikan berkelanjutan.",
        icon: TrendingUp,
      },
    ],
    secondaryLabel: "Industries We Serve",
    secondaryItems: [
      "Healthcare & Hospitality",
      "Warehouse, Retail & E-Commerce",
      "Automotive & Manufacturing",
      "Foundry",
      "Mining, Energy & Heavy Industry",
      "Food & Beverage",
      "Electronic & High-Tech",
    ],
    impactLabel: "Business Impact We Deliver",
    impactItems: [
      "Efisiensi operasional lebih tinggi",
      "Biaya lebih terkendali",
      "Throughput & produktivitas meningkat",
      "Kualitas lebih konsisten",
      "Operasi lebih stabil, scalable & future-ready",
    ],
    icon: Cpu,
  },
  {
    eyebrow: "Digital Transformation",
    title: "Digital Transformation for Smarter Decisions",
    description:
      "Kami membantu organisasi mentransformasi cara pengambilan keputusan melalui integrasi strategi, sistem, dan data secara menyeluruh untuk meningkatkan kecepatan, akurasi, dan dampak bisnis.",
    image: "/assets/digital-scene-rev6.png",
    imagePosition: "object-center",
    imageFit: "object-cover",
    focusLabel: "Core Principles",
    principles: [
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
    ],
    capabilityLabel: "Our Expertise & Capabilities",
    capabilityCards: [
      {
        title: "INTEGRATED BUSINESS SYSTEMS",
        description: "Membangun fondasi sistem bisnis terintegrasi untuk visibilitas dan kontrol yang lebih baik.",
        bullets: ["ERP", "CRM", "Data Platform"],
        image: "/assets/service-digital-systems-rev6.png",
        icon: BarChart3,
        color: "#0b2a66",
      },
      {
        title: "INTELLIGENT AUTOMATION",
        description: "Mengurangi ketergantungan pada proses manual melalui automation yang scalable.",
        bullets: ["RPA", "Workflow Automation", "AI-assisted Processes"],
        image: "/assets/service-digital-automation-rev6.png",
        icon: Cpu,
        color: "#0d98a5",
      },
      {
        title: "DIGITAL SOLUTION & APPLICATIONS",
        description: "Mengembangkan solusi digital yang mendukung proses bisnis end-to-end.",
        bullets: ["Custom Applications", "System Integration", "Cloud Solutions"],
        image: "/assets/service-digital-solutions-rev6.png",
        icon: LayoutPanelLeft,
        color: "#1d4fa8",
      },
      {
        title: "STRATEGY & TRANSFORMATION ADVISORY",
        description: "Menyusun roadmap transformasi yang selaras dengan prioritas bisnis.",
        bullets: ["Digital Strategy", "Process Optimization", "Change Management"],
        image: "/assets/service-digital-strategy-rev6.png",
        icon: Handshake,
        color: "#d39a17",
      },
      {
        title: "DATA & ANALYTICS",
        description: "Mengubah data menjadi insight untuk keputusan yang lebih cepat dan akurat.",
        bullets: ["Data Governance", "Advanced Analytics", "Decision Support"],
        image: "/assets/service-digital-analytics-rev6.png",
        icon: TrendingUp,
        color: "#6d34d7",
      },
    ],
    statement: "FROM SYSTEMS TO DECISIONS. FROM DECISIONS TO RESULTS.",
    icon: ClipboardCheck,
  },
  {
    eyebrow: "Human Capital Transformation",
    title: "Human Capital Transformation for Business Performance",
    description:
      "Memastikan transformasi digital dan operasional benar-benar dijalankan, diadopsi, dan dioptimalkan oleh manusia di dalam organisasi.",
    quote:
      "CIS mengorkestrasi transformasi human capital untuk memastikan setiap inisiatif bisnis, digital, dan automation menghasilkan dampak yang nyata dan berkelanjutan.",
    image: "/assets/service-human-scene-rev6.png",
    imagePosition: "object-right",
    imageFit: "object-contain",
    focusLabel: "Transformation Pillars",
    principles: [
      {
        number: "01",
        title: "WORKFORCE & CAPABILITY TRANSFORMATION",
        description:
          "Membangun kapabilitas organisasi agar siap menjalankan transformasi dan menghadapi tuntutan bisnis masa depan.",
        bullets: [
          "Strategic Workforce Planning",
          "Capability & Skills Development",
          "Leadership Acceleration",
          "Future Talent Readiness",
        ],
        image: "/assets/service-human-workforce-rev6.png",
        icon: TrendingUp,
        color: "#0b2a66",
      },
      {
        number: "02",
        title: "ORGANIZATION & CULTURE TRANSFORMATION",
        description:
          "Menyelaraskan struktur, budaya, dan cara kerja agar transformasi dapat berjalan efektif dan berkelanjutan.",
        bullets: [
          "Organization Design & Effectiveness",
          "Culture & Mindset Transformation",
          "Change Management",
          "Performance Alignment",
        ],
        image: "/assets/service-human-culture-rev6.png",
        icon: Handshake,
        color: "#d39a17",
      },
      {
        number: "03",
        title: "DIGITAL HR & INTELLIGENT WORKFORCE",
        description:
          "Mengintegrasikan teknologi dalam pengelolaan SDM untuk meningkatkan efisiensi, visibilitas, dan kualitas pengambilan keputusan.",
        bullets: [
          "HR Digital Transformation",
          "Workforce Analytics & Insight",
          "AI & Automation Enablement",
          "Digital Employee Experience",
        ],
        image: "/assets/service-human-digitalhr-rev6.png",
        icon: LayoutPanelLeft,
        color: "#0d98a5",
      },
    ],
    impactLabel: "Business Impact",
    impactItems: [
      "Peningkatan produktivitas dan kinerja organisasi",
      "Percepatan adopsi digital & automation",
      "Pengurangan resistensi terhadap perubahan",
      "Pengambilan keputusan berbasis data",
      "Optimalisasi ROI dari investasi teknologi",
      "Organisasi lebih agile, adaptif, dan scalable",
    ],
    icon: Users,
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
  { name: "H Wibowo, A.Md.T" ,    role: "President Direktor", },
 { name: "S Bratakusuma SE, MAk. CRP, CAFM"  ,    role: "Director of Finance Risk and Audit Governance", },
  { name: "Edy San Long Lest, Aj. Ak, SE, MM"  ,    role: "Finance Accounting & Tax Director", },
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
];
