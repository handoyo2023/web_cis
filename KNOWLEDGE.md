# KNOWLEDGE.md

Knowledge internal untuk referensi agent.

## CIS Website Context

### Brand Positioning

- Nama brand: PT Collaborative Integrated Solutions (CIS)
- Posisi brand: Transformasi Organisasi Berbasis Konsultasi Terintegrasi
- Tagline utama: Menavigasi Masa Depan Bisnis Anda Melalui Sinergi Teknologi, Desain Operasional, & Pengembangan Manusia.
- Tone jawaban yang diinginkan: profesional, business-facing, ringkas, dan relevan terhadap kebutuhan organisasi.

### Fokus Website CIS

- Website CIS bukan hanya profil perusahaan, tetapi juga pintu masuk ke tiga pilar layanan utama:
  - Robotics / intelligent operations
  - Digital transformation
  - Human capital transformation
- Untuk pertanyaan umum tentang CIS, jawab dengan sudut pandang consulting, transformation, operational improvement, dan business impact.
- Jika pertanyaan user sudah spesifik ke solusi atau industri, arahkan ke halaman detail yang paling dekat, bukan hanya ke halaman layanan utama.

### Struktur Halaman Utama CIS

- `#beranda`: hero dan positioning utama CIS
- `#tentang`: executive overview, filosofi, visi, dan misi
- `#nilai`: core values CIS
- `#keahlian`: domain expertise dan kapabilitas konsultasi
- `#industri`: industri prioritas CIS
- `#layanan`: tiga service blocks utama dan entry ke halaman detail
- `#tim`: leadership dan expert team
- `#kontak`: CTA, form kontak, dan ajakan konsultasi

### Tiga Pilar Layanan

#### 1. Robotics / Intelligent Operations

- Fokus: transformasi operasional melalui robotik, automation, dan industry 4.0 advisory.
- Halaman detail terdiri dari:
  - capability pages
  - industry pages
- Jika user menyebut industri tertentu seperti healthcare, warehouse, manufacturing, foundry, mining, restaurant, electronic, atau hospitality, prioritaskan industry page yang relevan.

#### 2. Digital Transformation

- Fokus: sistem, automation, aplikasi, strategy, data, dan analytics.
- Jika user menyebut kebutuhan seperti ERP, CRM, workflow automation, integration, dashboard, atau roadmap transformasi, arahkan ke detail digital yang paling spesifik.

#### 3. Human Capital Transformation

- Fokus: workforce readiness, organization design, culture transformation, dan digital HR.
- Jika user menyebut people readiness, capability building, leadership, change management, culture, HR digital, atau workforce analytics, arahkan ke halaman human capital yang paling dekat.

## Hermes Routing Priorities

- Selalu pilih link CIS yang paling spesifik dengan intent user.
- Jika user bertanya per industri, prioritaskan halaman industri robotik dibanding capability page umum.
- Jika user bertanya per capability robotik tanpa konteks industri, prioritaskan halaman capability robotik.
- Jika user bertanya topik sangat umum seperti "robotik CIS", "otomasi industri", atau "industry 4.0", arahkan ke `Robotics & Industry 4.0 Advisory`.
- Jika user bertanya topik umum digital transformation, arahkan ke detail digital yang paling sesuai; jika belum spesifik, gunakan halaman layanan utama.
- Jika user bertanya topik umum people transformation, arahkan ke detail human capital yang paling sesuai; jika belum spesifik, gunakan halaman layanan utama.

## Intent Mapping Untuk Hermes

### Robotics Industry Intent Map

- `health`, `healthcare`, `hospital`, `rumah sakit`, `klinik`, `hospitality`, `hotel`, `guest service`, `patient service`, `robot rumah sakit`, `robot hotel`
  - arahkan ke `Healthcare & Hospitality Robotics`
- `warehouse`, `gudang`, `retail`, `e-commerce`, `fulfillment`, `picking`, `sorting`, `inventory`, `logistik internal`
  - arahkan ke `Warehouse, Retail & E-Commerce Robotics`
- `manufacturing`, `manufaktur`, `automotive`, `assembly`, `welding`, `palletizing`, `quality line`
  - arahkan ke `Automotive & Manufacturing Robotics`
- `foundry`, `casting`, `deburring`, `finishing logam`, `area panas`, `heavy part handling`
  - arahkan ke `Foundry Robotics`
- `mining`, `tambang`, `energy`, `heavy industry`, `inspection area kritikal`, `workshop heavy equipment`
  - arahkan ke `Mining, Energy & Heavy Industry Robotics`
- `restaurant`, `restoran`, `fnb`, `food delivery robot`, `event`, `banquet`, `service robot`
  - arahkan ke `Restaurant & Event Robotics`
- `electronic`, `high-tech`, `precision assembly`, `scara`, `component handling`, `traceability quality`
  - arahkan ke `FnB & Electronic Robotics`

### Robotics Capability Intent Map

- `industry 4.0`, `roadmap robotik`, `advisory robotik`, `transformasi robotik`, `automation roadmap`
  - arahkan ke `Robotics & Industry 4.0 Advisory`
- `amr`, `agv`, `material handling`, `pallet movement`, `goods-to-person`, `internal transport`
  - arahkan ke `Autonomous Mobile Robot (AMR)`
- `industrial robot`, `robot arm`, `robot manufaktur`, `welding robot`, `scara`, `delta`, `cobot`
  - arahkan ke `Industrial Robotics`
- `intralogistics`, `warehouse flow`, `putaway`, `replenishment`, `picking flow`, `distribution flow`
  - arahkan ke `Smart Intralogistics Solutions`
- `rpa`, `vision`, `inspection`, `intelligent automation`, `computer vision`, `back-office automation`
  - arahkan ke `AI-based Vision & Intelligent Automation`

### Digital Intent Map

- `erp`, `crm`, `integrasi sistem`, `business systems`, `platform bisnis`
  - arahkan ke `Integrated Business Systems`
- `automation`, `workflow automation`, `proses manual`, `rpa`, `AI-assisted process`
  - arahkan ke `Intelligent Automation`
- `aplikasi`, `custom app`, `digital solution`, `system integration`, `cloud solution`
  - arahkan ke `Digital Solution & Applications`
- `strategy`, `roadmap transformasi`, `advisory digital`, `process optimization`
  - arahkan ke `Strategy & Transformation Advisory`
- `dashboard`, `analytics`, `data governance`, `decision support`, `insight`
  - arahkan ke `Data & Analytics`

### Human Capital Intent Map

- `capability`, `skills`, `leadership`, `workforce planning`, `talent readiness`
  - arahkan ke `Workforce & Capability Transformation`
- `culture`, `organization design`, `change management`, `mindset`, `performance alignment`
  - arahkan ke `Organization & Culture Transformation`
- `digital hr`, `hr technology`, `workforce analytics`, `employee experience`, `intelligent workforce`
  - arahkan ke `Digital HR & Intelligent Workforce`

## Digital Transformation Detail Reference

### Integrated Business Systems

Overview:
- Fondasi sistem terintegrasi membantu organisasi menyatukan data, proses, dan visibilitas lintas fungsi.
- Fokus utamanya adalah menyederhanakan alur kerja bisnis agar keputusan lebih cepat dan kontrol operasional lebih kuat.

Use Cases:
- Integrasi ERP, CRM, dan data platform
- Penyatuan proses antar fungsi bisnis
- Peningkatan visibilitas workflow dan reporting

Solution Stack:
- Business systems integration
- Process alignment
- Reporting and control layer

Business Value:
- Visibilitas operasional lebih baik
- Kontrol proses lebih konsisten
- Keputusan bisnis lebih cepat

### Intelligent Automation

Overview:
- Intelligent automation membantu mengurangi aktivitas manual yang repetitif dan mempercepat eksekusi proses bisnis.
- Pendekatan ini cocok untuk workflow yang membutuhkan konsistensi, kecepatan, dan skalabilitas.

Use Cases:
- Workflow automation
- RPA untuk proses administratif
- AI-assisted process execution

Solution Stack:
- RPA
- Workflow automation
- AI-assisted automation

Business Value:
- Proses manual berkurang
- Kecepatan eksekusi meningkat
- Error operasional lebih terkendali

### Digital Solution & Applications

Overview:
- Solusi digital dan aplikasi dipakai untuk mendukung proses end-to-end yang lebih terstruktur dan adaptif.
- Fokusnya adalah menghadirkan aplikasi yang relevan dengan prioritas bisnis dan kebutuhan operasional.

Use Cases:
- Custom business applications
- Internal workflow platform
- Cross-system process integration

Solution Stack:
- Custom applications
- System integration
- Cloud-enabled solutions

Business Value:
- Proses lebih terhubung
- Fleksibilitas operasional meningkat
- Solusi digital lebih relevan terhadap kebutuhan bisnis

### Strategy & Transformation Advisory

Overview:
- Advisory dibutuhkan agar transformasi digital berjalan sesuai prioritas bisnis, bukan sekadar implementasi teknologi.
- CIS membantu menyusun roadmap yang lebih realistis, bertahap, dan terarah.

Use Cases:
- Digital strategy formulation
- Transformation roadmap
- Process optimization dan change alignment

Solution Stack:
- Strategy diagnostic
- Transformation roadmap
- Governance and orchestration support

Business Value:
- Prioritas transformasi lebih jelas
- Investasi digital lebih terarah
- Eksekusi transformasi lebih terkendali

### Data & Analytics

Overview:
- Data dan analytics membantu organisasi mengubah data operasional menjadi insight yang lebih siap dipakai untuk keputusan.
- Fokusnya adalah mempercepat kualitas analisis, visibilitas, dan decision support.

Use Cases:
- Management dashboard
- Data governance
- Advanced analytics dan decision support

Solution Stack:
- Data governance
- Analytics layer
- Decision support reporting

Business Value:
- Insight lebih cepat tersedia
- Kualitas keputusan meningkat
- Organisasi lebih data-driven

## Human Capital Transformation Detail Reference

### Workforce & Capability Transformation

Overview:
- Membangun kapabilitas organisasi agar siap menjalankan transformasi dan menghadapi tuntutan bisnis masa depan.
- Fokusnya adalah kesiapan tenaga kerja, kepemimpinan, dan pengembangan skill yang relevan terhadap arah bisnis.

Use Cases:
- Strategic workforce planning
- Capability and skills development
- Leadership acceleration
- Future talent readiness

Solution Stack:
- Workforce planning
- Capability development program
- Leadership enablement

Business Value:
- Kapabilitas organisasi lebih siap
- Produktivitas tim meningkat
- Organisasi lebih siap menghadapi perubahan

### Organization & Culture Transformation

Overview:
- Menyelaraskan struktur, budaya, dan cara kerja agar transformasi dapat berjalan efektif dan berkelanjutan.
- Fokus utamanya adalah membangun organisasi yang lebih adaptif, kolaboratif, dan siap mengeksekusi perubahan.

Use Cases:
- Organization design and effectiveness
- Culture and mindset transformation
- Change management
- Performance alignment

Solution Stack:
- Organization design
- Change enablement
- Culture transformation support

Business Value:
- Adopsi perubahan lebih cepat
- Resistensi organisasi berkurang
- Keselarasan kinerja lebih kuat

### Digital HR & Intelligent Workforce

Overview:
- Mengintegrasikan teknologi dalam pengelolaan SDM untuk meningkatkan efisiensi, visibilitas, dan kualitas pengambilan keputusan.
- Pendekatan ini membantu fungsi HR bergerak lebih digital, terukur, dan siap mendukung transformasi bisnis.

Use Cases:
- HR digital transformation
- Workforce analytics and insight
- AI and automation enablement
- Digital employee experience

Solution Stack:
- HR digital platform
- Workforce analytics
- Automation-enabled HR process

Business Value:
- Pengelolaan SDM lebih efisien
- Insight tenaga kerja lebih cepat tersedia
- Keputusan HR lebih data-driven

## Robotics Detail Reference

### Robotics & Industry 4.0 Advisory

Overview:
- Transformasi digital membangun fondasi visibilitas dan data untuk operasi yang lebih responsif.
- Otomasi dan robotik mempercepat efisiensi, fleksibilitas produksi, dan kualitas keputusan operasional.
- Pendekatan advisory CIS membantu memilih prioritas, use case, dan tahapan implementasi yang realistis.

Use Cases:
- Diagnostic readiness untuk roadmap industri 4.0
- Identifikasi quick wins dan high-impact automation use case
- Perencanaan integrasi robotik dengan proses operasional dan sistem eksisting
- Governance transformasi untuk scale-up implementation

Solution Stack:
- Business process diagnostic
- Transformation roadmap dan orchestration model
- Integration blueprint untuk data, system, dan robotics

Business Value:
- Prioritas transformasi lebih jelas
- Investasi automation lebih terarah
- Organisasi lebih siap untuk scaling digital operation
- Keputusan teknologi lebih relevan dengan tujuan bisnis

### Autonomous Mobile Robot (AMR)

Overview:
- AMR cocok untuk perpindahan pallet, box, trolley, dan internal replenishment.
- Perangkat ini lebih fleksibel dibanding fixed conveyor pada area yang sering berubah.
- AMR dapat digabungkan dengan WMS, MES, atau workflow manual yang ingin ditingkatkan bertahap.

Use Cases:
- Pallet movement dan replenishment
- Goods-to-person support
- Hospital delivery dan internal service transport
- Inventory scan dan route-based material movement

Solution Stack:
- AMR/AGV fleet
- Traffic orchestration dan route control
- Integrasi dengan layout, dispatch, dan operational dashboard

Business Value:
- Internal movement lebih cepat dan konsisten
- Bottleneck logistik berkurang
- Scalability lebih baik dibanding penambahan manpower murni
- Traceability transport internal meningkat

### Industrial Robotics

Overview:
- Industrial robot umum dipakai untuk pekerjaan repetitif, presisi, dan high-cycle yang menuntut konsistensi tinggi.
- Pemilihan tipe robot bergantung pada payload, reach, speed, accuracy, dan kebutuhan integration cell.
- Halaman detail ini mengikuti pola PPT: list utama ringkas, detail dibuka terpisah dengan visual penerapan yang lebih spesifik.

Use Cases:
- Welding dan part joining
- Dispensing dan precision handling
- Assembly serta end-of-line packaging
- Inspection support dan repetitive cell operation

Solution Stack:
- Articulated / scara / delta / cartesian robot
- Safety cell dan end-effector selection
- Integration dengan PLC, sensor, dan quality workflow

Business Value:
- Cycle time lebih stabil
- Kualitas hasil lebih repeatable
- Keselamatan area kerja meningkat
- Kapasitas produksi lebih mudah diskalakan

### Smart Intralogistics Solutions

Overview:
- Fokus utamanya adalah memastikan flow barang tidak tersendat dari inbound sampai outbound.
- Solusi intralogistics dapat bertahap, mulai dari movement sederhana sampai orchestration picking yang lebih kompleks.
- Pola detail page ini sengaja image-led seperti arahan PPT, bukan daftar panjang di halaman utama.

Use Cases:
- Receiving dan putaway support
- Picking, sorting, dan packing flow
- Cross-zone replenishment
- Inventory visibility dan internal distribution

Solution Stack:
- AMR orchestration
- Picking support dan mobile racking
- Integration dengan warehouse workflow dan dashboard

Business Value:
- Throughput gudang meningkat
- Akurasi picking lebih baik
- Idle movement berkurang
- Warehouse lebih siap untuk scale dan peak load

### AI-based Vision & Intelligent Automation

Overview:
- Use case dapat bergerak dari robot non-fisik seperti RPA hingga computer vision untuk inspection dan recognition.
- Automation cerdas bermanfaat saat proses membutuhkan kombinasi rule-based execution dan contextual decision support.
- Pendekatan CIS adalah menghubungkan automation digital dan automation fisik agar dampaknya terasa end-to-end.

Use Cases:
- Data reconciliation dan validation
- Routine reporting dan back-office processing
- Vision-assisted inspection
- Workflow orchestration untuk service dan operation support

Solution Stack:
- RPA dan workflow automation
- Machine vision / intelligent recognition
- Integration dengan business systems dan operational workflow

Business Value:
- Error input dan repetitive delay berkurang
- Proses inspeksi lebih konsisten
- Kecepatan administrasi operasional meningkat
- Data lebih siap dipakai untuk decision support

### Healthcare & Hospitality Robotics

Overview:
- Robot pengantar, robot pembawa, dan robot pengangkut membantu material movement di area rumah sakit, hotel, dan fasilitas layanan.
- Robot resepsionis, robot informasi, dan robot service meningkatkan pengalaman tamu serta membantu beban kerja frontliner.
- UVC robot, robot pembersih, dan robot monitoring pasien mendukung standardisasi layanan dan keselamatan operasional.

Use Cases:
- Material delivery, linen delivery, dan pengantaran makanan/obat
- Front desk assistance, guest information, dan patient guidance
- Cleaning automation, UV disinfection, dan repetitive facility support
- Monitoring area, support nursing workflow, dan service escalation

Solution Stack:
- AMR untuk pergerakan barang dan peralatan
- Service robot untuk resepsionis, concierge, dan delivery
- Facility robot untuk cleaning dan disinfection

Business Value:
- Response time lebih cepat pada layanan internal
- Service quality lebih konsisten pada jam sibuk
- Pemanfaatan SDM lebih fokus ke interaksi bernilai tinggi
- Operational hygiene dan traceability lebih baik

### Warehouse, Retail & E-Commerce Robotics

Overview:
- AMR forklift, pallet jack, picking AMR, dan sorting robot membantu pergerakan material yang cepat dan terukur.
- Robot inventory scanning dan mobile racking meningkatkan akurasi stok dan visibilitas area penyimpanan.
- RPA dapat melengkapi sisi digital untuk order processing, reconciliation, dan administrasi fulfillment.

Use Cases:
- Inbound pallet movement, replenishment, dan storage relocation
- Goods-to-person picking dan collaborative order fulfillment
- Automated sorting, inventory scan, dan shelf visibility
- Back-office order validation, reporting, dan customer case routing

Solution Stack:
- AMR/AGV untuk intralogistics
- Picking dan sorting workflow automation
- RPA untuk order-to-cash dan warehouse administration

Business Value:
- Picking cycle lebih cepat
- Akurasi inventory dan order handling meningkat
- Pemakaian ruang dan manpower lebih optimal
- Scalability lebih baik saat peak season

### Automotive & Manufacturing Robotics

Overview:
- Industrial robot mendukung picking, dispensing, welding, assembly, palletizing, dan material handling.
- Scara, delta, dan cobot cocok untuk kebutuhan presisi, cycle time ketat, dan area kolaboratif tertentu.
- Integrasi robotik dapat dipasangkan dengan quality control, line balancing, dan traceability digital.

Use Cases:
- Welding, assembly, dan part handling
- Dispensing, trimming, polishing, dan finishing
- Palletizing, packaging, dan end-of-line automation
- Collaborative workstation untuk sub-assembly dan inspection support

Solution Stack:
- Industrial robot untuk repetitive heavy-duty operation
- Cobot untuk area kolaboratif dan flexible cell
- Line integration dengan sensor, vision, dan performance monitoring

Business Value:
- Output lebih stabil dan repeatable
- Reject rate dan rework dapat ditekan
- Keselamatan dan ergonomi kerja meningkat
- Manufacturing cell lebih scalable untuk demand shift

### Foundry Robotics

Overview:
- Foundry membutuhkan robotik yang tangguh untuk handling, finishing, transfer material, dan support inspection.
- Robot membantu memindahkan proses berisiko dari operator ke cell otomatis yang lebih terkendali.
- Pemilihan solusi perlu menimbang temperatur, kontaminasi, payload, dan integrasi keselamatan.

Use Cases:
- Part transfer dan heavy material handling
- Deburring, polishing, dan finishing pasca-casting
- Inspection support pada area kualitas dan dimensi
- Semi-automatic workcell dengan guarding dan safety interlock

Solution Stack:
- Heavy-duty industrial robot dengan tooling khusus
- Safety cell dan process enclosure
- Monitoring performa cell dan preventive maintenance visibility

Business Value:
- Risiko operator pada area panas dan repetitif menurun
- Cycle time lebih konsisten
- Produktivitas naik pada proses yang sebelumnya manual
- Stabilitas kualitas lebih mudah dijaga

### Mining, Energy & Heavy Industry Robotics

Overview:
- Industri berat memerlukan kombinasi robot fisik, mobile robot, dan digital automation untuk operasi yang menuntut keselamatan tinggi.
- Robotik relevan untuk area transport internal, inspection route, sampling support, dan repetitive heavy handling.
- Arsitektur solusi perlu memperhatikan ruggedization, connectivity, dan interoperability dengan sistem operasi eksisting.

Use Cases:
- Autonomous transport pada area logistik internal
- Inspection route dan monitoring area kritikal
- Support handling pada workshop, warehouse, dan spare parts
- Digital automation untuk reporting, validation, dan work order administration

Solution Stack:
- AMR/AGV untuk pergerakan material internal
- Robot fisik untuk handling dan support inspection
- Digital integration untuk visibility dan decision support

Business Value:
- Operasi lebih aman dan terdokumentasi
- Downtime akibat bottleneck manual berkurang
- Pengawasan area kritikal lebih konsisten
- Keputusan operasional lebih cepat melalui integrasi data

### Food & Beverage Robotics

Overview:
- Service robot dapat mendukung food delivery, bussing, guest assistance, dan event operation.
- Cobot dan mobile robot juga relevan untuk packaging support, internal movement, dan repetitive preparation task.
- Penerapan perlu mempertimbangkan layout service area, food safety, dan experience pelanggan.

Use Cases:
- Pengantaran makanan, tray return, dan table support
- Transport internal untuk bahan, packaging, dan supplies
- Assistance pada event, banquet, dan hospitality activation
- Automation support pada packing, sorting, dan routine task tertentu

Solution Stack:
- Service robot untuk area customer-facing
- Mobile robot untuk internal logistics
- Selected workstation automation untuk proses repetitif

Business Value:
- Service speed lebih konsisten
- Beban operasional tim frontliner berkurang
- Guest experience lebih modern dan terukur
- Operasi outlet atau event lebih scalable

### Electronic & High-Tech Robotics

Overview:
- Cobot, scara, dan workstation automation cocok untuk assembly presisi, inspection, dan handling komponen sensitif.
- RPA membantu mempercepat sisi administratif seperti traceability, reconciliation, dan pelaporan kualitas.
- Kombinasi robot fisik dan digital automation menciptakan alur end-to-end yang lebih stabil.

Use Cases:
- Precision assembly dan component handling
- Inline inspection dan support quality verification
- Packaging dan traceability station
- RPA untuk dokumentasi, reporting, dan data validation

Solution Stack:
- Cobot/scara untuk operasi presisi dan fleksibel
- Vision-assisted quality workflow
- RPA untuk digital back-office dan data orchestration

Business Value:
- Presisi dan konsistensi proses meningkat
- Kesalahan input/data berkurang
- Traceability lebih kuat untuk audit dan kualitas
- Produktivitas naik tanpa mengorbankan kontrol proses
