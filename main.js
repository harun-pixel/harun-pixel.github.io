const projects = [
  {
    slug: "smart-product-category-assistant",
    title: "Smart Product Category Assistant",
    category: "Machine Learning",
    status: "Project Unggulan",
    developmentStatus: "Demo publik tersedia",
    description:
      "Sistem eksplorasi data retail yang mengelompokkan catatan transaksi berdasarkan jumlah terjual dan harga satuan, lalu menyajikan profil setiap kelompok serta hipotesis bisnis yang dapat diuji.",
    role: "Pengolahan data, logika clustering, desain dashboard, dan alur AI Analyst",
    stack: "Python, Streamlit, Scikit-Learn, K-Means, LLM",
    output: "Dashboard interaktif untuk analisis data, penempatan ke kelompok terdekat, visualisasi, evaluasi model, dan penjelasan berbantuan AI",
    tags: ["K-Means", "Streamlit", "Retail Analytics", "AI Assistant"],
    previewImage: "./assets/smart-product-preview.png",
    caseLink: "#project-detail",
    demoLink: "https://smart-appuct-category-assistant-fdeztnqzav8xbj7pmbosxz.streamlit.app/",
    featured: true,
    detail: {
      intro:
        "Project ini menggunakan K-Means untuk mencari pola kemiripan pada catatan transaksi produk. Hasilnya disajikan melalui dashboard Streamlit agar pengguna dapat melihat karakter setiap kelompok, memeriksa data, dan berdiskusi dengan AI Analyst.",
      objective:
        "Tujuannya adalah membantu pengguna memahami perbedaan pola jumlah terjual dan harga satuan. Dashboard ini digunakan untuk eksplorasi data, bukan untuk meramalkan penjualan, laba, stok, atau keberhasilan promosi.",
      caseStudy: {
        problem:
          "Data retail memiliki kombinasi jumlah terjual, harga satuan, dan nilai transaksi yang beragam. Tanpa tampilan yang terstruktur, pola antarcatatan sulit dibandingkan dan dijelaskan dengan cepat.",
        approach:
          "K-Means membentuk tiga kelompok menggunakan Units Sold dan Unit Price setelah skala keduanya disetarakan dengan StandardScaler. Total Revenue hanya dihitung untuk laporan dan tidak digunakan model saat membentuk cluster.",
        output:
          "Hasilnya adalah dashboard Streamlit untuk melihat ringkasan data, memeriksa detail produk, menempatkan catatan baru ke kelompok terdekat, membaca visualisasi, mengevaluasi model, dan berdiskusi dengan AI Analyst.",
        value:
          "Dashboard membantu membedakan fakta yang dihitung dari data, interpretasi kelompok, dan ide tindakan yang masih perlu diuji. Saran promosi, bundling, atau positioning bukan keputusan otomatis karena data biaya, margin, stok, pelanggan, dan riwayat waktu belum tersedia.",
        results: [
          "Sebanyak 300 catatan transaksi produk dianalisis dari dataset retail lokal.",
          "K-Means membentuk 3 cluster berdasarkan Units Sold dan Unit Price yang telah distandardisasi.",
          "Konfigurasi K=3 menghasilkan Silhouette Score 0.5656 pada ruang dua fitur model.",
          "Nama Standard Items, Volume Drivers, dan Premium Stars dibuat setelah melihat karakter centroid; nama tersebut bukan label asli dari dataset.",
          "AI Analyst membantu menjelaskan konteks dashboard, tetapi jawabannya tetap perlu diperiksa sebelum dipakai untuk keputusan bisnis.",
          "Strategic Product Matrix memakai aturan sederhana berdasarkan median Units Sold dan Total Revenue, bukan model machine learning tambahan.",
        ],
        contribution: [
          "Menyiapkan data dan dua fitur utama untuk clustering.",
          "Membangun dashboard Streamlit multi-tab.",
          "Mendesain tampilan overview, analisis produk, penempatan baru, visualisasi, evaluasi model, dan dataset.",
          "Mengintegrasikan AI Analyst untuk membantu diskusi berdasarkan data dashboard.",
        ],
      },
      concepts: [
        "Catatan transaksi produk sebagai unit analisis",
        "Units Sold dan Unit Price sebagai input model",
        "Total Revenue sebagai nilai turunan untuk pelaporan",
        "Preprocessing data dan StandardScaler",
        "K-Means K=3, centroid, dan pemberian nama cluster setelah analisis",
        "Silhouette Score untuk membaca kualitas pemisahan cluster",
        "Streamlit sebagai dashboard interaktif",
        "LLM sebagai pendamping untuk menjelaskan insight berbasis data",
      ],
      workflow: [
        "Dataset produk dibaca dan dibersihkan.",
        "Units Sold dan Unit Price dipilih sebagai dua fitur model.",
        "StandardScaler menyetarakan skala kedua fitur.",
        "K-Means menempatkan setiap catatan ke centroid terdekat.",
        "Setiap cluster diringkas berdasarkan jumlah data, rata-rata units, harga, dan nilai transaksi.",
        "Karakter setiap cluster diterjemahkan menjadi Premium Stars, Volume Drivers, dan Standard Items.",
        "Dashboard menyajikan hasil, evaluasi, batas penggunaan, dan ruang diskusi dengan AI Analyst.",
      ],
      built: [
        "Ringkasan dashboard untuk membaca pola data secara cepat.",
        "Analisis produk untuk melihat detail setiap catatan.",
        "Fitur Penempatan Baru untuk mencari cluster terdekat dari input pengguna.",
        "Visualisasi cluster, centroid, dan evaluasi model.",
        "AI Analyst untuk berdiskusi menggunakan konteks yang berasal dari dashboard.",
      ],
      outcome:
        "Pembelajaran utama project ini adalah membedakan input model, angka turunan untuk laporan, hasil deskriptif, interpretasi, dan hipotesis bisnis. Pemisahan ini membuat dashboard lebih mudah dipahami tanpa melebih-lebihkan kemampuan model.",
      limitations: [
        "Setiap produk hanya memiliki satu catatan yang tersedia, sehingga belum dapat menunjukkan tren jangka panjang.",
        "Tidak ada data biaya atau margin, sehingga profitabilitas dan keamanan diskon tidak dapat disimpulkan.",
        "Tidak tersedia data stok, traffic, pelanggan, repeat purchase, atau loyalty.",
        "Sistem tidak melakukan forecasting permintaan, penjualan, maupun revenue.",
        "Saran strategi merupakan hipotesis untuk eksperimen berikutnya, bukan keputusan otomatis.",
        "Harga tinggi tidak membuktikan margin tinggi, jumlah terjual tidak membuktikan traffic, dan nilai transaksi saat ini tidak memprediksi masa depan.",
      ],
    },
  },
];

const learningPaths = {
  "topic-1-complete": {
    title: "AI Foundations: Complete Topic 1",
    level: "Complete learning path",
    duration: "70 menit belajar",
    modules: [
      ["01", "See the AI Landscape"],
      ["02", "Turn Problems Into Search Spaces"],
      ["03", "Explore Without Extra Clues"],
      ["04", "Guide the Search With Heuristics"],
      ["05", "Teach a System From Experience"],
      ["06", "Choose the Learning Approach"],
      ["07", "Ship the AI Workflow"],
    ],
  },
};

const grid = document.querySelector("#project-grid");
const detailContainer = document.querySelector("#project-detail-content");
const learningDetailContainer = document.querySelector("#learning-detail-content");
const filters = [...document.querySelectorAll(".filter")];
const pages = [...document.querySelectorAll("[data-page]")];
const pageLinks = [...document.querySelectorAll("[data-page-link]")];

function projectCard(project) {
  const tags = project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("");
  const meta = [
    ["Role", project.role],
    ["Stack", project.stack],
    ["Output", project.output],
  ]
    .map(([label, value]) => `<span><b>${label}</b>${value}</span>`)
    .join("");

  return `
    <article class="project-card ${project.featured ? "featured-project" : ""}" data-category="${project.category}" data-project-card="${project.slug}">
      <div class="project-card-body">
        <div class="project-copy">
          <div class="project-card-top">
            <div class="project-status">${project.status}</div>
            <span class="project-category">${project.category}</span>
          </div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-meta">${meta}</div>
          <div class="project-tags">${tags}</div>
          <div class="project-card-actions">
            <a class="mini-link primary-mini-link" href="#project-detail" data-project-detail="${project.slug}">Buka Project</a>
            <a class="mini-link" href="#project-detail" data-project-detail="${project.slug}">Studi Kasus</a>
            <a class="mini-link live-demo-link" href="${project.demoLink}" target="_blank" rel="noopener noreferrer">
              <span>Buka Demo</span><span class="external-link-icon" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        ${
          project.previewImage
            ? `<div class="project-preview" aria-label="${project.title} preview">
                <img src="${project.previewImage}" alt="${project.title} dashboard preview" />
              </div>`
            : ""
        }
      </div>
    </article>
  `;
}

function listItems(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function renderProjectDetail(slug) {
  const project = projects.find((item) => item.slug === slug) || projects[0];
  const detail = project.detail;
  const tags = project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("");

  detailContainer.innerHTML = `
    <div class="detail-hero">
      <a class="mini-link" href="#projects" data-page-link="projects">Kembali ke Projects</a>
      <p class="eyebrow">Detail Project</p>
      <h2>${project.title}</h2>
      <p>${detail.intro}</p>
      <div class="project-tags">${tags}</div>
      <div class="project-card-actions">
        <a class="mini-link primary-mini-link live-demo-link" href="${project.demoLink}" target="_blank" rel="noopener noreferrer">
          <span>Buka Aplikasi</span><span class="external-link-icon" aria-hidden="true">↗</span>
        </a>
      </div>
    </div>

    <div class="detail-layout">
      <aside class="detail-sidebar">
        <div><small>Status</small><strong>${project.developmentStatus}</strong></div>
        <div><small>Category</small><strong>${project.category}</strong></div>
        <div><small>Stack</small><strong>${project.stack}</strong></div>
        <div><small>Role</small><strong>${project.role}</strong></div>
      </aside>

      <div class="detail-content">
        <section class="detail-section">
          <small>01</small>
          <h3>Tujuan Project</h3>
          <p>${detail.objective}</p>
        </section>
        <section class="detail-section">
          <small>02</small>
          <h3>Studi Kasus</h3>
          <div class="case-study-grid">
            <div><b>Masalah</b><p>${detail.caseStudy.problem}</p></div>
            <div><b>Pendekatan</b><p>${detail.caseStudy.approach}</p></div>
            <div><b>Hasil</b><p>${detail.caseStudy.output}</p></div>
            <div><b>Nilai Praktis</b><p>${detail.caseStudy.value}</p></div>
          </div>
        </section>
        <section class="detail-section">
          <small>03</small>
          <h3>Hasil Utama</h3>
          <ul>${listItems(detail.caseStudy.results)}</ul>
        </section>
        <section class="detail-section">
          <small>04</small>
          <h3>Kontribusiku</h3>
          <ul>${listItems(detail.caseStudy.contribution)}</ul>
        </section>
        <section class="detail-section">
          <small>05</small>
          <h3>Materi Yang Perlu Dipahami</h3>
          <ul>${listItems(detail.concepts)}</ul>
        </section>
        <section class="detail-section">
          <small>06</small>
          <h3>Cara Kerja</h3>
          <ol>${listItems(detail.workflow)}</ol>
        </section>
        <section class="detail-section">
          <small>07</small>
          <h3>Yang Saya Bangun</h3>
          <ul>${listItems(detail.built)}</ul>
        </section>
        <section class="detail-section highlight-detail">
          <small>08</small>
          <h3>Pembelajaran Utama</h3>
          <p>${detail.outcome}</p>
        </section>
        <section class="detail-section">
          <small>09</small>
          <h3>Batasan</h3>
          <ul>${listItems(detail.limitations)}</ul>
        </section>
        <section class="detail-section">
          <small>10</small>
          <h3>Status Project</h3>
          <p><b>Saat ini:</b> Demo publik tersedia melalui Streamlit Community Cloud.</p>
          <p><b>Akses:</b> <a class="status-live-link" href="${project.demoLink}" target="_blank" rel="noopener noreferrer">
            <span>Buka Smart Product Category Assistant</span><span class="external-link-icon" aria-hidden="true">↗</span>
          </a></p>
          <p><b>Selanjutnya:</b> Memantau kestabilan deployment, menjaga dokumentasi tetap akurat, dan meningkatkan pengalaman AI Analyst.</p>
        </section>
      </div>
    </div>
  `;
}

function renderEndToEndLearningDetail() {
  const path = learningPaths["end-to-end-ml"];
  const moduleLinks = path.modules
    .map(([number, title]) => "<a href='#module-" + number + "' data-module-link='module-" + number + "'><small>" + number + "</small><span>" + title + "</span></a>")
    .join("");

  learningDetailContainer.innerHTML = [
    "<div class='learning-detail-hero e2e-hero'>",
      "<a class='mini-link' href='#learning-lab' data-page-link='learning-lab'>Back to Learning Lab</a>",
      "<p class='eyebrow'>Applied Learning Path 02</p>",
      "<h2>" + path.title + "</h2>",
      "<p>Sebuah perjalanan project-based untuk memahami bagaimana masalah nyata diubah menjadi data, model, evaluasi, dan sistem yang tetap dapat dipercaya setelah digunakan.</p>",
      "<div class='learning-detail-meta'><span>" + path.level + "</span><span>" + path.duration + "</span><span>6 modules</span><span>4 interactive labs</span></div>",
      "<div class='e2e-hero-flow' aria-label='End-to-end machine learning journey'><span>Problem</span><i></i><span>Data</span><i></i><span>Model</span><i></i><span>Evidence</span><i></i><span>Delivery</span></div>",
    "</div>",
    "<div class='learning-detail-layout'>",
      "<aside class='learning-rail' aria-label='Learning modules'><div class='learning-rail-label'>On this path</div>",
        moduleLinks,
        "<p>Original portfolio notes supported by public technical references. All examples and interactions are independently written.</p>",
      "</aside>",
      "<div class='learning-content'>",
        "<section id='module-01' class='learning-module'>",
          "<div class='module-heading'><small>Module 01 / Problem Framing</small><h3>Choose the Right Learning Type</h3><p>Pemilihan pendekatan dimulai dari bentuk jawaban yang tersedia, bukan dari algoritma yang sedang populer.</p></div>",
          "<div class='core-idea'><span>Decision rule</span><p>Jika contoh data memiliki jawaban, gunakan pola supervised. Jika jawabannya belum ada dan kita ingin menemukan struktur, gunakan unsupervised. Jika sistem belajar dari aksi dan konsekuensi, pertimbangkan reinforcement learning.</p></div>",
          "<div class='e2e-learning-modes'><div><small>Target tersedia</small><b>Supervised</b><span>Classification untuk kategori, regression untuk angka.</span></div><div><small>Struktur tersembunyi</small><b>Unsupervised</b><span>Clustering dan representasi tanpa label jawaban.</span></div><div><small>Aksi + feedback</small><b>Reinforcement</b><span>Kebijakan berkembang dari reward dan penalti.</span></div></div>",
          "<div class='interactive-lab e2e-type-lab'><div class='lab-toolbar'><div><small>Interactive lab 01</small><h4>Signal Decoder</h4></div><span class='lab-kicker'>Identify the evidence</span></div><div class='e2e-type-controls'><label><span>Business scenario</span><select id='e2e-scenario'><option value='house-price'>Perkirakan harga rumah dari contoh transaksi sebelumnya.</option><option value='customer-group'>Temukan kelompok pelanggan tanpa label segmen.</option><option value='fraud-class'>Tentukan apakah transaksi termasuk fraud atau normal.</option><option value='delivery-agent'>Ajari agent memilih rute dari reward waktu tempuh.</option></select></label><button type='button' class='lab-button primary-lab-button' data-e2e-type-check>Reveal approach</button></div><div id='e2e-type-result' class='e2e-result-line' aria-live='polite'><b>Look for the signal:</b><span>Apakah data memiliki jawaban, struktur tersembunyi, atau feedback dari tindakan?</span></div></div>",
          "<div class='applied-example builder-note'><small>Catatan konsep</small><p><b>Unsupervised learning</b> digunakan ketika data belum memiliki label jawaban. Sistem tidak diminta menebak kategori yang sudah ditentukan, tetapi mencari pola kelompok dari kemiripan data.</p></div>",
        "</section>",
        "<section id='module-02' class='learning-module'>",
          "<div class='module-heading'><small>Module 02 / Project Design</small><h3>Map the Project Flow</h3><p>Project machine learning yang matang adalah rangkaian keputusan. Model berada di tengah proses, bukan menjadi seluruh proses.</p></div>",
          "<div class='e2e-lifecycle' aria-label='Machine learning project lifecycle'><div><small>Discover</small><b>Frame</b><span>Tentukan keputusan dan ukuran berhasil.</span></div><i></i><div><small>Understand</small><b>Explore</b><span>Periksa kualitas, pola, dan batas data.</span></div><i></i><div><small>Build</small><b>Train</b><span>Siapkan baseline dan kandidat model.</span></div><i></i><div><small>Prove</small><b>Validate</b><span>Uji pada data yang belum dipakai belajar.</span></div><i></i><div><small>Operate</small><b>Monitor</b><span>Amati performa setelah sistem digunakan.</span></div></div>",
          "<div class='interactive-lab e2e-workflow-lab'><div class='lab-toolbar'><div><small>Interactive lab 02</small><h4>Build the Delivery Pipeline</h4></div><div class='lab-actions'><button type='button' class='lab-icon-button' data-e2e-workflow-reset>Reset</button><button type='button' class='lab-button primary-lab-button' data-e2e-workflow-check>Check flow</button></div></div><p class='lab-instruction'>Klik langkah dari pool dalam urutan project yang paling dapat dipertanggungjawabkan. Klik langkah di pipeline untuk menghapusnya.</p><div id='e2e-workflow-pool' class='workflow-pool' aria-label='Available workflow steps'></div><div id='e2e-workflow-sequence' class='workflow-sequence e2e-workflow-sequence' aria-label='Selected workflow'></div><p id='e2e-workflow-feedback' class='lab-status' aria-live='polite'>Mulai dari keputusan yang perlu dibantu oleh sistem.</p></div>",
        "</section>",
        "<section id='module-03' class='learning-module'>",
          "<div class='module-heading'><small>Module 03 / Data Preparation</small><h3>Turn Raw Data Into Model-Ready Evidence</h3><p>Data mentah sering berisi nilai kosong, skala yang tidak seimbang, dan kategori berbentuk teks. Pipeline membuat transformasi itu konsisten saat training maupun prediksi.</p></div>",
          "<div class='raw-ready-stage' aria-label='Raw to model-ready data transformation'><div class='raw-ready-column'><small>Raw record</small><span><b>Income</b><em>missing</em></span><span><b>Rooms</b><em>6</em></span><span><b>Distance</b><em>18,500 m</em></span><span><b>Area</b><em>coastal</em></span></div><div class='raw-ready-arrow'><span>Prepare</span><i></i></div><div class='raw-ready-column ready-column'><small>Model-ready vector</small><span><b>Income</b><em id='prep-income'>pending</em></span><span><b>Rooms</b><em>0.42</em></span><span><b>Distance</b><em id='prep-distance'>pending</em></span><span><b>Area</b><em id='prep-area'>pending</em></span></div></div>",
          "<div class='interactive-lab prep-lab'><div class='lab-toolbar'><div><small>Interactive lab 03</small><h4>Prepare One Data Record</h4></div><span id='prep-progress' class='lab-kicker'>0 / 3 transforms</span></div><div class='prep-actions'><button type='button' class='prep-action' data-prep-step='impute'><small>01</small><b>Handle missing value</b><span>Isi income dengan median data training.</span></button><button type='button' class='prep-action' data-prep-step='scale'><small>02</small><b>Scale numeric value</b><span>Ubah jarak ke skala yang seimbang.</span></button><button type='button' class='prep-action' data-prep-step='encode'><small>03</small><b>Encode category</b><span>Ubah coastal menjadi representasi numerik.</span></button></div><p id='prep-feedback' class='lab-status' aria-live='polite'>Terapkan ketiga transformasi untuk menghasilkan vector yang siap masuk ke model.</p></div>",
          "<div class='e2e-pipeline-principles'><div><b>Fit on train</b><span>Aturan transformasi dipelajari hanya dari data training agar tidak terjadi data leakage.</span></div><div><b>Reuse on new data</b><span>Transformasi yang sama dipakai ketika model menerima input baru.</span></div></div>",
        "</section>",
        "<section id='module-04' class='learning-module'>",
          "<div class='module-heading'><small>Module 04 / Regression Case</small><h3>Explore a Housing Value Estimate</h3><p>Regression mempelajari hubungan antara beberapa fitur dan sebuah target numerik. Simulator ini menunjukkan arah kontribusi fitur, bukan model harga rumah untuk penggunaan nyata.</p></div>",
          "<div class='interactive-lab regression-lab'><div class='lab-toolbar'><div><small>Interactive lab 04</small><h4>Illustrative Regression Simulator</h4></div><span class='lab-kicker'>Educational estimate</span></div><div class='regression-layout'><div class='regression-controls'><label><span>Median area income <b id='income-value'>$6.0K</b></span><input id='income-range' type='range' min='2' max='15' step='0.5' value='6'></label><label><span>House age <b id='age-value'>20 years</b></span><input id='age-range' type='range' min='1' max='50' step='1' value='20'></label><label><span>Average rooms <b id='rooms-value'>6.0</b></span><input id='rooms-range' type='range' min='2' max='12' step='0.5' value='6'></label><label><span>Location access <b id='location-value'>7 / 10</b></span><input id='location-range' type='range' min='1' max='10' step='1' value='7'></label></div><div class='regression-output'><small>Illustrative estimate</small><strong id='price-estimate'>$367,000</strong><p id='price-explanation'>Income dan akses lokasi memberi kontribusi terbesar pada skenario ini.</p><div class='contribution-bars' aria-label='Feature contribution indicators'><span><b>Income</b><i><em id='income-bar'></em></i></span><span><b>Rooms</b><i><em id='rooms-bar'></em></i></span><span><b>Location</b><i><em id='location-bar'></em></i></span><span><b>Age penalty</b><i><em id='age-bar'></em></i></span></div></div></div><p class='lab-disclaimer'>Nilai dihitung dengan rumus demonstrasi yang transparan agar hubungan antarfitur mudah dipelajari. Ini bukan prediksi pasar atau rekomendasi finansial.</p></div>",
          "<div class='applied-example builder-note'><small>Catatan konsep</small><p>Sebelum memilih model yang kompleks, buat baseline sederhana. Model baru hanya bernilai jika menghasilkan bukti perbaikan yang konsisten.</p></div>",
        "</section>",
        "<section id='module-05' class='learning-module'>",
          "<div class='module-heading'><small>Module 05 / Evaluation</small><h3>Evaluate Before You Trust</h3><p>Evaluasi menjawab dua pertanyaan: seberapa dekat prediksi dengan nilai sebenarnya, dan apakah kualitas itu bertahan pada data yang belum pernah dilihat.</p></div>",
          "<div class='metric-explainer'><div><span>RMSE</span><p>Meringkas besar kesalahan prediksi dalam satuan target. Kesalahan besar mendapat penalti lebih kuat.</p></div><div><span>Cross-validation</span><p>Menguji model pada beberapa pembagian data untuk melihat kestabilan, bukan keberuntungan satu split.</p></div><div><span>Generalization gap</span><p>Membandingkan training dan validation untuk mendeteksi model yang terlalu menghafal.</p></div></div>",
          "<div class='interactive-lab fit-lab'><div class='lab-toolbar'><div><small>Model diagnosis</small><h4>Read the Error Pattern</h4></div><div class='lab-actions'><button type='button' class='lab-button' data-fit-mode='underfit'>Underfit</button><button type='button' class='lab-button active' data-fit-mode='balanced'>Healthy fit</button><button type='button' class='lab-button' data-fit-mode='overfit'>Overfit</button></div></div><div class='fit-visual'><div class='fit-bars'><span><b>Training error</b><i><em id='train-error-bar'></em></i><strong id='train-error-value'>18%</strong></span><span><b>Validation error</b><i><em id='validation-error-bar'></em></i><strong id='validation-error-value'>22%</strong></span></div><div class='fit-diagnosis'><small id='fit-label'>Healthy generalization</small><h4 id='fit-title'>Model belajar pola yang berguna.</h4><p id='fit-copy'>Error training dan validation cukup rendah serta berdekatan. Lanjutkan dengan pengujian stabilitas dan pemeriksaan error per segmen.</p></div></div></div>",
          "<div class='decision-checklist'><div><small>01</small><b>Compare</b><p>Bandingkan dengan baseline, bukan hanya dengan harapan.</p></div><div><small>02</small><b>Inspect</b><p>Lihat jenis kasus yang sering salah dan dampaknya pada pengguna.</p></div><div><small>03</small><b>Decide</b><p>Tentukan apakah kualitas model cukup untuk konteks pemakaian.</p></div></div>",
        "</section>",
        "<section id='module-06' class='learning-module'>",
          "<div class='module-heading'><small>Module 06 / Delivery</small><h3>From Model to a Reliable Product</h3><p>Setelah model dipakai, dunia dapat berubah. Sistem perlu observability, versioning, dan aturan kapan model harus ditinjau atau dilatih ulang.</p></div>",
          "<div class='deployment-loop' aria-label='Model delivery and monitoring loop'><div><small>01</small><b>Package</b><span>Simpan model, preprocessing, dan versinya.</span></div><i></i><div><small>02</small><b>Serve</b><span>Hubungkan prediksi ke workflow pengguna.</span></div><i></i><div><small>03</small><b>Observe</b><span>Pantau input, performa, error, dan latency.</span></div><i></i><div><small>04</small><b>Improve</b><span>Validasi data baru lalu rilis versi berikutnya.</span></div></div>",
          "<div class='monitor-board'><div><small>Input drift</small><b>Apakah data berubah?</b><p>Distribusi fitur baru mulai berbeda dari data training.</p><span>Watch data</span></div><div><small>Concept drift</small><b>Apakah hubungan berubah?</b><p>Pola lama tidak lagi menjelaskan target dengan baik.</p><span>Review model</span></div><div><small>System health</small><b>Apakah layanan tetap andal?</b><p>Latency, error aplikasi, dan kualitas input ikut dipantau.</p><span>Watch service</span></div></div>",
          "<div class='applied-example builder-note'><small>Catatan konsep</small><p>Dalam sistem machine learning, model, preprocessing, struktur fitur, dan makna output harus tetap sinkron. Jika salah satu berubah tanpa penyesuaian, hasil sistem bisa tidak konsisten walaupun aplikasinya masih berhasil dibuka.</p></div>",
        "</section>",
        "<section class='learning-module knowledge-module'><div class='module-heading'><small>Final Reflection</small><h3>Can you defend the whole system?</h3></div><div class='knowledge-list'><details><summary>Mengapa preprocessing harus menjadi bagian dari pipeline?</summary><p>Agar aturan dari data training diterapkan secara identik pada validation dan input baru, sekaligus mengurangi risiko leakage dan perbedaan fitur.</p></details><details><summary>Mengapa validation lebih penting daripada training score?</summary><p>Training menunjukkan kemampuan pada data yang sudah dipelajari. Validation memberi bukti yang lebih dekat dengan kemampuan menghadapi kasus baru.</p></details><details><summary>Kapan sebuah model layak disebut selesai?</summary><p>Model siap dirilis ketika kualitas, risiko, integrasi, dan cara monitoringnya sudah memiliki batas keputusan yang jelas.</p></details></div></section>",
        "<section class='learning-sources'><div><small>Learning integrity</small><h3>Built as an independent applied learning experience.</h3><p>Penjelasan, contoh kasus, struktur visual, dan seluruh eksperimen pada halaman ini dibuat ulang secara orisinal untuk portfolio. Halaman ini merangkum pemahaman, bukan menerbitkan ulang materi kelas atau aset pihak lain.</p></div><div class='source-links'><a href='https://scikit-learn.org/stable/getting_started.html' target='_blank' rel='noreferrer'>Scikit-learn: Getting Started</a><a href='https://scikit-learn.org/stable/modules/compose.html' target='_blank' rel='noreferrer'>Scikit-learn: Pipelines and preprocessing</a><a href='https://pandas.pydata.org/docs/getting_started/index.html' target='_blank' rel='noreferrer'>Pandas: Getting Started</a><a href='https://developers.google.com/machine-learning/crash-course' target='_blank' rel='noreferrer'>Google Machine Learning Crash Course</a></div></section>",
      "</div>",
    "</div>",
  ].join("");

  initializeEndToEndInteractions();
}

function renderClassificationLearningDetail() {
  const path = learningPaths["classification-lab"];
  const moduleLinks = path.modules
    .map(([number, title]) => "<a href='#module-" + number + "' data-module-link='module-" + number + "'><small>" + number + "</small><span>" + title + "</span></a>")
    .join("");

  learningDetailContainer.innerHTML = [
    "<div class='learning-detail-hero classification-hero'>",
      "<a class='mini-link' href='#learning-lab' data-page-link='learning-lab'>Back to Learning Lab</a>",
      "<p class='eyebrow'>Specialist Learning Path 03</p>",
      "<h2>" + path.title + "</h2>",
      "<p>Ikuti perjalanan sebuah classifier: dari melihat gambar sebagai kumpulan pixel sampai memahami mengapa setiap kesalahan perlu dinilai berdasarkan dampaknya.</p>",
      "<div class='learning-detail-meta'><span>" + path.level + "</span><span>" + path.duration + "</span><span>7 modules</span><span>6 interactive labs</span></div>",
      "<div class='classification-hero-flow' aria-label='Classification learning journey'><span>See</span><i></i><span>Encode</span><i></i><span>Learn</span><i></i><span>Question</span><i></i><span>Decide</span></div>",
    "</div>",
    "<div class='learning-detail-layout'>",
      "<aside class='learning-rail classification-rail' aria-label='Classification modules'><div class='learning-rail-label'>Inside the lab</div>",
        moduleLinks,
        "<p>Independent explanations, original examples, and browser-based experiments supported by public technical references.</p>",
      "</aside>",
      "<div class='learning-content'>",

        "<section id='module-01' class='learning-module'>",
          "<div class='module-heading'><small>Module 01 / Decision Framing</small><h3>What Kind of Answer Should the Machine Produce?</h3><p>Classification bukan sekadar menebak label. Ia membantu sistem memilih kategori yang memiliki konsekuensi nyata bagi pengguna.</p></div>",
          "<div class='core-idea classification-core'><span>Core question</span><p>Sebelum memilih algoritma, tentukan bentuk keputusan: satu dari dua kelas, satu dari banyak kelas, atau beberapa label sekaligus.</p></div>",
          "<div class='classification-modes'><div><small>Two outcomes</small><b>Binary</b><span>Fraud atau normal, lolos atau perlu ditinjau.</span></div><div><small>One of many</small><b>Multiclass</b><span>Memilih satu digit, kategori, atau tipe objek.</span></div><div><small>Several at once</small><b>Multilabel</b><span>Satu item dapat memiliki lebih dari satu atribut.</span></div></div>",
          "<div class='interactive-lab class-scenario-lab'><div class='lab-toolbar'><div><small>Interactive lab 01</small><h4>Decision Shape Finder</h4></div><span class='classification-kicker'>Start with the output</span></div><div class='class-scenario-controls'><label><span>Scenario</span><select id='class-scenario'><option value='review'>Tentukan apakah transaksi perlu ditinjau atau aman.</option><option value='digit'>Kenali satu digit dari sepuluh kemungkinan angka.</option><option value='photo-tags'>Berikan label indoor, people, dan event pada satu foto.</option></select></label><button type='button' class='lab-button primary-lab-button' data-class-scenario-check>Reveal structure</button></div><div id='class-scenario-result' class='classification-result' aria-live='polite'><b>Observe the output</b><span>Hitung berapa banyak kelas yang dapat dipilih pada satu prediksi.</span></div></div>",
        "</section>",

        "<section id='module-02' class='learning-module'>",
          "<div class='module-heading'><small>Module 02 / Representation</small><h3>A Picture Becomes a Sequence of Evidence</h3><p>Model tidak melihat gambar seperti manusia. Setiap pixel diterjemahkan menjadi intensitas numerik, lalu disusun sebagai fitur yang dapat dibandingkan.</p></div>",
          "<div class='pixel-story'><div><small>Image</small><b>28 x 28 grid</b><span>Susunan intensitas pixel.</span></div><i></i><div><small>Transform</small><b>Flatten</b><span>Baris dan kolom direntangkan.</span></div><i></i><div><small>Model input</small><b>784 values</b><span>Satu vector untuk satu gambar.</span></div></div>",
          "<div class='interactive-lab pixel-lab'><div class='lab-toolbar'><div><small>Interactive lab 02</small><h4>Pixel-to-Vector Sketchpad</h4></div><div class='lab-actions'><button type='button' class='lab-icon-button' data-pixel-preset='five'>Preset 5</button><button type='button' class='lab-icon-button' data-pixel-clear>Clear</button></div></div><div class='pixel-lab-layout'><div id='pixel-grid' class='pixel-grid' role='grid' aria-label='Editable twelve by twelve pixel grid'></div><div class='pixel-vector-panel'><small>Flattened preview</small><strong><span id='pixel-count'>0</span> active pixels</strong><div id='pixel-vector' class='pixel-vector' aria-label='First values of flattened pixel vector'></div><p>Lab memakai grid ringkas 12 x 12 agar interaksi mudah terlihat. Dataset digit populer biasanya menggunakan grid 28 x 28.</p></div></div></div>",
          "<div class='applied-example classification-note'><small>Representation insight</small><p>Reshape mengubah cara data ditampilkan, sedangkan flatten mengubah bentuk input untuk model. Nilai pixelnya tetap sama; susunannya yang berubah.</p></div>",
        "</section>",

        "<section id='module-03' class='learning-module'>",
          "<div class='module-heading'><small>Module 03 / Honest Evaluation</small><h3>Teach the Model Without Showing the Final Exam</h3><p>Training set dipakai untuk belajar. Test set disimpan sampai akhir agar evaluasi merepresentasikan kemampuan menghadapi data baru.</p></div>",
          "<div class='split-principles'><div><b>Learn</b><span>Training data membantu model menemukan pola.</span></div><div><b>Check</b><span>Validation membantu memilih dan memperbaiki pendekatan.</span></div><div><b>Confirm</b><span>Test data digunakan untuk evaluasi akhir yang independen.</span></div></div>",
          "<div class='interactive-lab split-lab'><div class='lab-toolbar'><div><small>Interactive lab 03</small><h4>Train-Test Allocation Studio</h4></div><span id='split-label' class='classification-kicker'>80% train / 20% test</span></div><label class='split-range-label'><span>Training allocation</span><input id='split-range' type='range' min='50' max='95' step='5' value='80'></label><div class='split-track' aria-label='Training and test data allocation'><span id='train-track'><b id='train-count'>800</b><small>training samples</small></span><span id='test-track'><b id='test-count'>200</b><small>test samples</small></span></div><p id='split-feedback' class='lab-status' aria-live='polite'>Cukup banyak data untuk belajar dan masih tersedia test set yang berarti.</p></div>",
          "<div class='leakage-warning'><b>Data leakage</b><p>Terjadi ketika informasi dari validation atau test ikut memengaruhi proses training. Skor terlihat bagus, tetapi bukti evaluasinya tidak lagi dapat dipercaya.</p></div>",
        "</section>",

        "<section id='module-04' class='learning-module'>",
          "<div class='module-heading'><small>Module 04 / Binary Decision</small><h3>From a Score to a Yes-or-No Decision</h3><p>Classifier sering menghasilkan score atau probability terlebih dahulu. Threshold kemudian menentukan kapan sebuah kasus dianggap positif.</p></div>",
          "<div class='binary-decision-flow'><div><small>Input</small><b>Pixel vector</b></div><i></i><div><small>Classifier</small><b>Decision score</b></div><i></i><div><small>Rule</small><b>Threshold</b></div><i></i><div><small>Output</small><b>Positive / Negative</b></div></div>",
          "<div class='decision-boundary'><span class='negative-side'>Negative class</span><i><em></em></i><span class='positive-side'>Positive class</span></div>",
          "<div class='applied-example classification-note'><small>Catatan konsep</small><p>Model linear mencari batas yang memisahkan dua kelas. Proses optimasi memperbaiki batas itu sedikit demi sedikit berdasarkan kesalahan prediksi.</p></div>",
        "</section>",

        "<section id='module-05' class='learning-module'>",
          "<div class='module-heading'><small>Module 05 / Model Skepticism</small><h3>High Accuracy Can Still Hide a Useless Model</h3><p>Ketika satu kelas jauh lebih banyak, model dapat memperoleh accuracy tinggi hanya dengan selalu memilih kelas mayoritas.</p></div>",
          "<div class='imbalance-story'><div><small>Dataset</small><strong>1,000</strong><span>total cases</span></div><div><small>Rare positive</small><strong>80</strong><span>need attention</span></div><div><small>Majority negative</small><strong>920</strong><span>normal cases</span></div></div>",
          "<div class='interactive-lab accuracy-trap-lab'><div class='lab-toolbar'><div><small>Interactive lab 04</small><h4>The Accuracy Trap</h4></div><span class='classification-kicker'>Choose a model</span></div><div class='model-choice-row'><button type='button' class='model-choice active' data-trap-model='lazy'><b>Model A</b><span>Selalu memprediksi normal</span></button><button type='button' class='model-choice' data-trap-model='useful'><b>Model B</b><span>Mencoba mendeteksi kelas langka</span></button></div><div class='trap-result'><div><small>Accuracy</small><strong id='trap-accuracy'>92.0%</strong></div><div><small>Positive recall</small><strong id='trap-recall'>0.0%</strong></div><p id='trap-copy'>Angka accuracy terlihat tinggi, tetapi tidak satu pun kasus penting berhasil ditemukan.</p></div></div>",
        "</section>",

        "<section id='module-06' class='learning-module'>",
          "<div class='module-heading'><small>Module 06 / Error Analysis</small><h3>Read Every Mistake, Then Choose the Trade-off</h3><p>Confusion matrix memecah hasil menjadi empat jenis keputusan. Precision dan recall membantu menentukan kesalahan mana yang perlu ditekan.</p></div>",
          "<div class='metric-meaning-row'><div><b>Precision</b><span>Seberapa dapat dipercaya prediksi positif?</span></div><div><b>Recall</b><span>Berapa banyak kasus positif yang berhasil ditemukan?</span></div><div><b>F1</b><span>Seberapa seimbang precision dan recall?</span></div></div>",
          "<div class='interactive-lab confusion-lab'><div class='lab-toolbar'><div><small>Interactive lab 05</small><h4>Confusion Matrix and Threshold Studio</h4></div><span id='threshold-label' class='classification-kicker'>Threshold 0.50</span></div><label class='threshold-control'><span>Decision threshold</span><input id='threshold-range' type='range' min='10' max='90' step='5' value='50'></label><div class='confusion-layout'><div class='confusion-matrix' role='img' aria-label='Interactive confusion matrix'><span class='matrix-corner'>Actual / Predicted</span><b>Negative</b><b>Positive</b><b>Negative</b><div class='matrix-cell tn'><small>TN</small><strong id='cm-tn'>860</strong></div><div class='matrix-cell fp'><small>FP</small><strong id='cm-fp'>60</strong></div><b>Positive</b><div class='matrix-cell fn'><small>FN</small><strong id='cm-fn'>24</strong></div><div class='matrix-cell tp'><small>TP</small><strong id='cm-tp'>56</strong></div></div><div class='metric-live'><div><small>Accuracy</small><strong id='metric-accuracy'>91.6%</strong></div><div><small>Precision</small><strong id='metric-precision'>48.3%</strong></div><div><small>Recall</small><strong id='metric-recall'>70.0%</strong></div><div><small>F1 score</small><strong id='metric-f1'>57.1%</strong></div><p id='threshold-copy'>Threshold seimbang: sebagian besar kasus positif ditemukan, dengan false positive yang masih perlu ditinjau.</p></div></div></div>",
          "<div class='decision-scenarios'><div><small>False positive is costly</small><b>Prioritize precision</b><p>Contoh: menandai transaksi normal sebagai fraud dan mengganggu pelanggan.</p></div><div><small>Missing a positive is costly</small><b>Prioritize recall</b><p>Contoh: melewatkan kondisi berisiko yang seharusnya diperiksa.</p></div></div>",
        "</section>",

        "<section id='module-07' class='learning-module'>",
          "<div class='module-heading'><small>Module 07 / Neighborhood Reasoning</small><h3>Let the Nearest Examples Vote</h3><p>K-Nearest Neighbors membandingkan sampel baru dengan contoh yang paling dekat. Nilai K menentukan berapa banyak tetangga yang ikut memilih kelas.</p></div>",
          "<div class='interactive-lab knn-lab'><div class='lab-toolbar'><div><small>Interactive lab 06</small><h4>KNN Neighborhood Explorer</h4></div><div class='knn-controls'><label><span>K neighbors</span><select id='knn-k'><option value='1'>1</option><option value='3' selected>3</option><option value='5'>5</option><option value='7'>7</option></select></label></div></div><div class='knn-layout'><div id='knn-stage' class='knn-stage' role='img' aria-label='Two-class nearest-neighbor plot'></div><div class='knn-result'><small>Query prediction</small><strong id='knn-prediction'>Class Cyan</strong><p id='knn-votes'>2 cyan votes vs 1 violet vote.</p><div class='knn-legend'><span><i class='cyan-point'></i>Class Cyan</span><span><i class='violet-point'></i>Class Violet</span><span><i class='query-point'></i>New sample</span></div></div></div></div>",
          "<div class='knn-principles'><div><b>K terlalu kecil</b><span>Sangat sensitif terhadap noise dan satu contoh lokal.</span></div><div><b>K terlalu besar</b><span>Keputusan dapat terlalu dipengaruhi kelompok mayoritas.</span></div><div><b>Distance matters</b><span>Fitur perlu berada pada skala yang sebanding.</span></div></div>",
        "</section>",

        "<section class='learning-module knowledge-module'><div class='module-heading'><small>Final Reflection</small><h3>Can you explain why the model deserves trust?</h3></div><div class='knowledge-list'><details><summary>Mengapa accuracy tidak boleh dibaca sendirian?</summary><p>Accuracy tidak menunjukkan kelas mana yang gagal dikenali. Pada data tidak seimbang, model dapat terlihat akurat hanya karena selalu memilih kelas mayoritas.</p></details><details><summary>Mengapa threshold merupakan keputusan produk, bukan sekadar angka teknis?</summary><p>Threshold mengubah jumlah false positive dan false negative. Pilihannya harus mengikuti konsekuensi nyata dari setiap jenis kesalahan.</p></details><details><summary>Apa hubungan scaling dengan KNN?</summary><p>KNN menggunakan jarak. Fitur dengan skala numerik besar dapat mendominasi jarak walaupun belum tentu lebih penting.</p></details></div></section>",
        "<section class='learning-sources'><div><small>Learning integrity</small><h3>Created as an independent classification experience.</h3><p>Seluruh narasi, contoh, visual, dan interaksi dibuat khusus untuk portfolio ini. Halaman tidak menyertakan slide, screenshot, kode, tabel, ataupun aset dari materi perkuliahan.</p></div><div class='source-links'><a href='https://keras.io/api/datasets/mnist/' target='_blank' rel='noreferrer'>Keras: MNIST digits dataset</a><a href='https://scikit-learn.org/stable/modules/classification_threshold.html' target='_blank' rel='noreferrer'>Scikit-learn: Classification threshold</a><a href='https://scikit-learn.org/stable/modules/model_evaluation.html' target='_blank' rel='noreferrer'>Scikit-learn: Model evaluation</a><a href='https://scikit-learn.org/stable/modules/neighbors.html' target='_blank' rel='noreferrer'>Scikit-learn: Nearest Neighbors</a></div></section>",
      "</div>",
    "</div>",
  ].join("");

  initializeClassificationInteractions();
}

function renderTopicOneCompleteLearningDetailLegacy() {
  const path = learningPaths["topic-1-complete"];
  const moduleLinks = path.modules
    .map(
      ([number, title]) => `
        <a href="#module-${number}" data-module-link="module-${number}">
          <small>${number}</small>
          <span>${title}</span>
        </a>`,
    )
    .join("");

  learningDetailContainer.innerHTML = `
    <div class="learning-detail-hero complete-topic-hero">
      <a class="mini-link" href="#learning-lab" data-page-link="learning-lab">Kembali ke Learning Lab</a>
      <p class="eyebrow">Complete Topic 1 / AI Foundations</p>
      <h2>${path.title}</h2>
      <p>
        Sebuah perjalanan belajar mandiri untuk melihat kecerdasan buatan sebagai
        cara menyelesaikan masalah. Mulai dari memahami agent dan ruang solusi,
        lanjut ke search, machine learning, evaluasi, dan penerapan ke sistem nyata.
      </p>
      <div class="learning-detail-meta">
        <span>${path.level}</span>
        <span>${path.duration}</span>
        <span>7 modul</span>
        <span>3 lab interaktif</span>
      </div>
      <div class="topic-outcomes" aria-label="Learning outcomes">
        <div><small>Outcome 01</small><b>Pahami konsep AI, workflow, dan pilihan algoritma.</b></div>
        <div><small>Outcome 02</small><b>Bedakan search, supervised, unsupervised, dan reinforcement learning.</b></div>
        <div><small>Outcome 03</small><b>Rancang alur project dari data sampai deployment dan monitoring.</b></div>
      </div>
    </div>

    <div class="learning-detail-layout complete-topic-layout">
      <aside class="learning-rail" aria-label="Complete Topic 1 modules">
        <div class="learning-rail-label">Peta modul lengkap</div>
        ${moduleLinks}
        <p>
          Materi ini ditulis ulang sebagai pengalaman belajar mandiri dengan
          contoh, visual, dan eksperimen orisinal.
        </p>
      </aside>

      <div class="learning-content">
        <section id="module-01" class="learning-module complete-topic-module">
          <div class="module-heading">
            <small>Module 01 / AI Landscape</small>
            <h3>See the AI Landscape Before Choosing a Tool</h3>
            <p>AI dimulai dari cara melihat masalah. Model dan algoritma datang setelah kita memahami tujuan, informasi yang tersedia, dan tindakan yang perlu diambil.</p>
          </div>
          <div class="core-idea">
            <span>Gagasan inti</span>
            <p>Kecerdasan buatan adalah bidang yang membuat sistem dapat meniru sebagian kemampuan pengambilan keputusan manusia untuk mencapai tujuan tertentu. Fokusnya bukan membuat komputer terlihat ajaib, melainkan membuat keputusan yang berguna, terukur, dan dapat dipertanggungjawabkan.</p>
          </div>
          <div class="ai-definition-strip">
            <div><small>Artificial Intelligence</small><b>Sistem komputasi yang membantu memahami keadaan dan memilih respons untuk menyelesaikan masalah.</b></div>
            <div><small>Problem Solving</small><b>Proses memecah tantangan menjadi tujuan, batasan, pilihan, dan langkah penyelesaian.</b></div>
            <div><small>AI Agent</small><b>Entitas yang mengamati lingkungan, menentukan tindakan, dan mengejar hasil yang diinginkan.</b></div>
          </div>
          <div class="agent-type-row">
            <div><small>Reflex Agent</small><h4>Rule first, response fast</h4><p>Agent bereaksi dari kondisi yang terlihat menggunakan aturan tetap. Contoh sederhananya adalah termostat yang menyalakan pendingin ketika suhu melewati batas.</p></div>
            <div><small>Problem-Solving Agent</small><h4>Understand, compare, decide</h4><p>Agent memahami keadaan, menimbang alternatif, memilih tindakan yang paling baik, lalu menggunakan hasilnya untuk mengevaluasi keputusan berikutnya.</p></div>
          </div>
          <div class="topic-flow-heading">
            <small>AI Agent Decision Loop</small>
            <p>Alur dasar yang dipakai agent untuk mengubah informasi menjadi tindakan yang dapat diuji.</p>
          </div>
          <div class="topic-agent-loop" aria-label="Agent decision loop">
            <div><small>01</small><b>Observe</b><span>Baca keadaan lingkungan.</span></div><i></i>
            <div><small>02</small><b>Represent</b><span>Ubah informasi menjadi bentuk yang bisa diproses.</span></div><i></i>
            <div><small>03</small><b>Decide</b><span>Bandingkan pilihan dan batasannya.</span></div><i></i>
            <div><small>04</small><b>Act</b><span>Jalankan tindakan menuju tujuan.</span></div>
          </div>
        </section>

        <section id="module-02" class="learning-module complete-topic-module">
          <div class="module-heading">
            <small>Module 02 / Problem Solving</small>
            <h3>Turn a Real Problem Into a Search Space</h3>
            <p>Sebelum menyentuh kode, masalah harus dibuat cukup jelas untuk diproses: apa keadaan awalnya, tindakan apa yang tersedia, batasan apa yang berlaku, dan kondisi seperti apa yang disebut berhasil.</p>
          </div>
          <div class="problem-solving-steps topic-problem-steps">
            <div><small>01</small><b>Define</b><span>Tentukan input, tujuan, batasan, dan output keputusan.</span></div>
            <div><small>02</small><b>Analyze</b><span>Pahami pilihan yang mungkin serta risiko setiap pilihan.</span></div>
            <div><small>03</small><b>Represent</b><span>Susun informasi menjadi graph, tabel, state, fitur, atau struktur lain.</span></div>
            <div><small>04</small><b>Solve</b><span>Pilih search, constraint, optimization, machine learning, atau NLP.</span></div>
            <div><small>05</small><b>Evaluate</b><span>Uji apakah solusi benar-benar sesuai dengan kebutuhan.</span></div>
          </div>
          <div class="technique-cloud topic-technique-cloud" aria-label="AI problem solving techniques">
            <div><small>Search</small><b>BFS, DFS, A*</b><span>Menjelajahi kemungkinan keadaan sampai menemukan jalur menuju tujuan.</span></div>
            <div><small>CSP</small><b>Constraint Satisfaction</b><span>Mencari kombinasi solusi yang memenuhi aturan, jadwal, atau batasan tertentu.</span></div>
            <div><small>Optimization</small><b>Best possible option</b><span>Mencari pilihan paling efisien berdasarkan biaya, waktu, keuntungan, atau sumber daya.</span></div>
            <div><small>Machine Learning</small><b>Learn from examples</b><span>Membangun pola dari pengalaman agar sistem mampu memprediksi atau mengelompokkan kasus baru.</span></div>
            <div><small>NLP</small><b>Work with language</b><span>Membantu komputer memahami, mengolah, dan menghasilkan bahasa manusia.</span></div>
          </div>
          <div class="applied-example topic-scenario-example"><small>Mini scenario</small><p>Toko online ingin mengurangi keterlambatan pengiriman. Masalahnya bukan sekadar memilih model, melainkan mengubah situasi pengiriman menjadi data, mendefinisikan risiko terlambat, lalu menghubungkan prediksi dengan tindakan admin.</p></div>
        </section>

        <section id="module-03" class="learning-module complete-topic-module">
          <div class="module-heading">
            <small>Module 03 / Uninformed Search</small>
            <h3>Explore Without Extra Clues</h3>
            <p>Uninformed search tidak memakai pengetahuan khusus domain. Ia hanya mengandalkan definisi masalah: posisi awal, tindakan yang tersedia, aturan perpindahan, dan tujuan.</p>
          </div>
          <div class="search-comparison topic-search-grid">
            <div><span class="method-mark breadth">BFS</span><h4>Breadth-First Search</h4><p>Menelusuri node berdasarkan lapisan. Pada graph tanpa bobot, solusi pertama yang ditemukan memberi jalur dengan jumlah langkah paling sedikit.</p><small>Queue / memori lebih besar</small></div>
            <div><span class="method-mark depth">DFS</span><h4>Depth-First Search</h4><p>Menyusuri satu cabang sedalam mungkin, kemudian kembali saat buntu. Bisa menemukan solusi, tetapi jalur pertama belum tentu yang terpendek.</p><small>Stack atau rekursi / memori lebih ringan</small></div>
            <div><span class="method-mark heuristic">State</span><h4>State Space</h4><p>Setiap posisi adalah keadaan. Edge menggambarkan tindakan yang mungkin. Search menguji keadaan-keadaan tersebut sampai goal ditemukan.</p><small>Visited set mencegah pengulangan</small></div>
          </div>
          <div class="topic-application-band">
            <div><small>Pathfinding</small><b>Navigasi dan robotika</b><span>Mencari rute yang bisa dilalui.</span></div>
            <div><small>Puzzle solving</small><b>8-puzzle dan 15-puzzle</b><span>Mencari urutan langkah menuju konfigurasi tujuan.</span></div>
            <div><small>Game AI</small><b>Game tree exploration</b><span>Menilai kemungkinan langkah dalam permainan.</span></div>
            <div><small>Web crawling</small><b>Page exploration</b><span>Menjelajahi halaman dari hubungan link.</span></div>
          </div>
          <div class="interactive-lab search-lab topic-search-lab">
            <div class="lab-toolbar"><div><small>Lab interaktif 01</small><h4>BFS vs DFS Maze Explorer</h4></div><div class="lab-actions" aria-label="Search controls"><button type="button" class="lab-button active" data-search-mode="bfs">BFS</button><button type="button" class="lab-button" data-search-mode="dfs">DFS</button><button type="button" class="lab-icon-button" data-search-step aria-label="Tampilkan langkah berikutnya">Next</button><button type="button" class="lab-icon-button" data-search-run>Run</button><button type="button" class="lab-icon-button" data-search-reset>Reset</button></div></div>
            <div class="maze-stage"><div id="maze-grid" class="maze-grid" role="img" aria-label="Six by six maze from start to goal"></div><div class="maze-legend"><span><i class="legend-start"></i>Start</span><span><i class="legend-goal"></i>Tujuan</span><span><i class="legend-visited"></i>Dijelajahi</span><span><i class="legend-path"></i>Jalur akhir</span></div></div>
            <p id="search-status" class="lab-status" aria-live="polite">Pilih BFS atau DFS, lalu amati perbedaan urutan eksplorasinya.</p>
          </div>
        </section>

        <section id="module-04" class="learning-module complete-topic-module">
          <div class="module-heading">
            <small>Module 04 / Informed Search</small>
            <h3>Guide the Search With Heuristics</h3>
            <p>Ketika ruang solusi membesar, sistem dapat memakai petunjuk tambahan yang disebut heuristik untuk memperkirakan langkah mana yang lebih dekat dengan tujuan.</p>
          </div>
          <div class="informed-search-grid">
            <div><span class="method-mark heuristic">GBFS</span><h4>Greedy Best-First Search</h4><p>Memilih node yang terlihat paling dekat dengan goal. Cepat ketika petunjuknya baik, tetapi tidak selalu menghasilkan jalur terbaik.</p></div>
            <div><span class="method-mark breadth">A*</span><h4>A* Search</h4><p>Menggabungkan biaya yang sudah ditempuh dengan perkiraan sisa jarak. Karena itu, keputusan tidak hanya melihat tujuan, tetapi juga harga perjalanan sampai saat ini.</p></div>
          </div>
          <div class="heuristic-equation"><span>Prioritas node</span><strong>f(n) = g(n) + h(n)</strong><p>g(n) adalah biaya dari awal ke node saat ini, sedangkan h(n) adalah perkiraan biaya dari node menuju tujuan.</p></div>
          <div class="topic-application-band informed-applications">
            <div><small>Navigation</small><b>GPS dan peta digital</b><span>Mengarahkan pencarian rute ke wilayah yang menjanjikan.</span></div>
            <div><small>Games</small><b>Catur dan Go</b><span>Memprioritaskan langkah dengan potensi terbaik.</span></div>
            <div><small>Robotics</small><b>Autonomous movement</b><span>Menghindari rintangan sambil menuju target.</span></div>
            <div><small>Planning</small><b>Scheduling & logistics</b><span>Menyusun resource dan urutan tindakan.</span></div>
          </div>
        </section>

        <section id="module-05" class="learning-module complete-topic-module">
          <div class="module-heading">
            <small>Module 05 / Machine Learning</small>
            <h3>Teach a System From Experience</h3>
            <p>Machine learning memindahkan sebagian pekerjaan dari aturan buatan manusia ke pola yang dipelajari dari data. Sistem tetap membutuhkan task dan ukuran kinerja yang jelas.</p>
          </div>
          <div class="ml-evidence-grid topic-ml-evidence">
            <div><small>Task / T</small><h4>Apa yang harus dilakukan?</h4><p>Contoh: memberi label email spam atau bukan spam.</p></div>
            <div><small>Experience / E</small><h4>Dari mana sistem belajar?</h4><p>Contoh: kumpulan email historis yang sudah diketahui labelnya.</p></div>
            <div><small>Performance / P</small><h4>Bagaimana kinerja dinilai?</h4><p>Contoh: accuracy, yaitu proporsi email yang berhasil diklasifikasikan dengan benar.</p></div>
          </div>
          <div class="core-idea topic-mitchell-note"><span>Definisi kerja</span><p>Sebuah program dapat disebut belajar ketika performanya pada task tertentu meningkat seiring bertambahnya pengalaman. Jadi, kata belajar selalu perlu dibaca bersama tugas, data pengalaman, dan metriknya.</p></div>
          <div class="ml-vocabulary-row"><span><b>Training set</b> kumpulan data untuk melatih model</span><span><b>Sample / instance</b> satu contoh data</span><span><b>Model</b> pola yang dipakai untuk menghasilkan prediksi</span></div>
          <div class="topic-model-contrast"><div><small>Traditional programming</small><h4>Rules + data -> output</h4><p>Manusia menulis aturan eksplisit, lalu komputer menjalankannya.</p></div><div><small>Machine learning</small><h4>Data + target -> model</h4><p>Model mempelajari pola dari contoh agar dapat menangani input baru.</p></div><div><small>Adaptive system</small><h4>Feedback -> update</h4><p>Sistem dipantau dan diperbarui ketika data atau perilaku lingkungan berubah.</p></div></div>
        </section>

        <section id="module-06" class="learning-module complete-topic-module">
          <div class="module-heading">
            <small>Module 06 / Learning Approaches</small>
            <h3>Choose the Learning Approach From the Evidence</h3>
            <p>Jenis pembelajaran ditentukan oleh bentuk pengalaman dan target yang tersedia. Tidak ada satu pendekatan yang otomatis paling benar untuk semua masalah.</p>
          </div>
          <div class="topic-learning-modes">
            <div><span class="mode-number">01</span><small>Target tersedia</small><h4>Supervised Learning</h4><p>Belajar dari data berlabel untuk klasifikasi atau regresi.</p><b>Contoh: prediksi keterlambatan.</b></div>
            <div><span class="mode-number">02</span><small>Label belum ada</small><h4>Unsupervised Learning</h4><p>Menemukan kelompok atau struktur tersembunyi dari data.</p><b>Contoh: clustering produk.</b></div>
            <div><span class="mode-number">03</span><small>Ada reward</small><h4>Reinforcement Learning</h4><p>Agent belajar dari interaksi, reward, dan penalti.</p><b>Contoh: memilih rute.</b></div>
            <div><span class="mode-number">04</span><small>Label terbatas</small><h4>Semi / Self-supervised</h4><p>Memanfaatkan data tanpa label untuk membangun representasi sebelum tugas utama.</p><b>Contoh: pembelajaran dari data besar yang belum dianotasi.</b></div>
          </div>
          <div class="interactive-lab choice-lab topic-choice-lab">
            <div class="lab-toolbar"><div><small>Lab interaktif 02</small><h4>Choose the Learning Type</h4></div></div>
            <div class="choice-controls"><label><span>Skenario</span><select id="learning-scenario"><option value="cluster">Kelompokkan data tanpa label awal.</option><option value="regression">Prediksi nilai numerik dari histori.</option><option value="reinforcement">Ajari agent memilih aksi melalui reward.</option></select></label><label><span>Jawabanmu</span><select id="learning-answer"><option value="">Pilih pendekatan</option><option value="supervised">Supervised Learning</option><option value="unsupervised">Unsupervised Learning</option><option value="reinforcement">Reinforcement Learning</option></select></label><button type="button" class="lab-button primary-lab-button" data-check-learning>Cek jawaban</button></div>
            <p id="learning-feedback" class="lab-status" aria-live="polite">Pilih pendekatan yang menurutmu paling sesuai dengan bukti pada skenario.</p>
          </div>
        </section>

        <section id="module-07" class="learning-module complete-topic-module">
          <div class="module-heading">
            <small>Module 07 / End-to-End Workflow</small>
            <h3>Ship the AI Workflow, Not Just the Model</h3>
            <p>Project AI yang berguna menghubungkan masalah, data, model, evaluasi, interface, dan monitoring. Di sinilah eksperimen berubah menjadi sistem yang dapat membantu keputusan.</p>
          </div>
          <div class="workflow-story topic-full-workflow" aria-label="AI project workflow"><span>Problem</span><i></i><span>Data</span><i></i><span>Explore</span><i></i><span>Prepare</span><i></i><span>Model</span><i></i><span>Evaluate</span><i></i><span>Deploy</span><i></i><span>Monitor</span></div>
          <div class="delay-workflow-module compact-delay-case topic-delay-case">
            <div class="module-heading"><small>Case walkthrough / Delivery delay</small><h3>From Order Data to a Decision Signal</h3><p>Skenario: toko online ingin memprediksi risiko keterlambatan sebelum pesanan dikirim agar admin dapat bertindak lebih cepat.</p></div>
            <div class="delay-case-grid"><div class="delay-case-card delay-context"><small>Input evidence</small><h4>Jarak, tipe kurir, berat, jam pesan, dan status terlambat.</h4><p>Data historis memberi contoh bagaimana kondisi order berhubungan dengan hasil pengiriman.</p><div class="delay-tool-row"><span>Python</span><span>Pandas</span><span>Scikit-learn</span></div></div><div class="delay-case-card delay-model"><small>Modeling choice</small><h4>Logistic Regression atau Random Forest.</h4><p>Logistic Regression mudah dijelaskan sebagai baseline. Random Forest lebih kuat ketika hubungan fitur dan risiko tidak linear.</p></div></div>
            <div class="delay-storyline"><div><small>01</small><b>Preprocess</b><span>Bersihkan missing value dan duplikat, encode kategori, normalkan jarak/berat, lalu split train 80% dan test 20%.</span></div><i></i><div><small>02</small><b>Train & predict</b><span>Latih model dengan data training dan gunakan data test untuk melihat perilakunya pada order yang belum dipelajari.</span></div><i></i><div><small>03</small><b>Evaluate</b><span>Baca accuracy, precision, recall, dan confusion matrix. Contoh target awal: accuracy 85% dan recall keterlambatan 0.80.</span></div><i></i><div><small>04</small><b>Deploy</b><span>Integrasikan model ke sistem pemesanan. Admin dapat mengganti kurir, memprioritaskan order, atau memberi estimasi yang lebih aman.</span></div></div>
          </div>
          <div class="topic-practicum-board"><div><small>Praktikum search</small><h4>Build the path yourself</h4><p>Mulai dari posisi awal, jelajahi tetangga atas-bawah-kiri-kanan, gunakan queue untuk BFS atau stack/rekursi untuk DFS, simpan path, dan gunakan visited set agar node tidak diproses dua kali.</p></div><div><small>Visual evidence</small><h4>Make the algorithm visible</h4><p>Maze dapat direpresentasikan sebagai grid: jalan, tembok, start, goal, node yang dikunjungi, dan jalur akhir. Visualisasi membuat perbedaan strategi search dapat diamati, bukan sekadar dibaca.</p></div><div><small>Challenge</small><h4>Ask the right question</h4><p>Ubah kode BFS menjadi DFS, jalankan pada maze yang sama, lalu diskusikan: apakah DFS selalu menemukan jalur terpendek?</p></div></div>
        </section>

        <section class="learning-module knowledge-module">
          <div class="module-heading"><small>Final Synthesis</small><h3>One mental model to take with you</h3></div>
          <div class="topic-summary-band"><strong>AI = define the problem -> represent the evidence -> search or learn -> evaluate the decision -> deploy responsibly.</strong><p>Algoritma hanyalah bagian dari perjalanan. Kualitas solusi ditentukan oleh ketepatan masalah, kualitas data, pilihan metode, cara mengukur keberhasilan, dan kemampuan menghubungkan hasil dengan tindakan nyata.</p></div>
          <div class="knowledge-list"><details><summary>Kapan search lebih cocok daripada machine learning?</summary><p>Search cocok ketika ruang keadaan, tindakan, dan tujuan dapat didefinisikan dengan jelas. Machine learning lebih cocok ketika pola keputusan sulit ditulis sebagai aturan tetapi tersedia contoh pengalaman.</p></details><details><summary>Mengapa BFS dan DFS perlu dibandingkan pada maze yang sama?</summary><p>Agar perbedaan strategi eksplorasi terlihat adil. BFS cenderung mencari jalur terpendek pada graph tanpa bobot, sedangkan DFS mengejar kedalaman dan tidak menjamin jalur terpendek.</p></details><details><summary>Apa yang membuat workflow AI dapat dipercaya?</summary><p>Setiap tahap meninggalkan bukti: masalah yang jelas, data yang dipahami, preprocessing yang konsisten, evaluasi yang sesuai risiko, serta monitoring setelah deployment.</p></details></div>
        </section>

        <section class="learning-sources"><div><small>Learning integrity</small><h3>Independent synthesis, built for learning.</h3><p>Modul ini merangkum konsep fundamental AI dalam narasi, contoh, visual, dan interaksi yang ditulis ulang secara mandiri. Halaman ini tidak memuat ulang slide, screenshot, atau susunan teks dari materi kelas.</p></div><div class="source-links"><a href="https://aima.cs.berkeley.edu/" target="_blank" rel="noreferrer">AI: A Modern Approach resources</a><a href="https://scikit-learn.org/stable/user_guide.html" target="_blank" rel="noreferrer">Scikit-learn User Guide</a><a href="https://developers.google.com/machine-learning/glossary" target="_blank" rel="noreferrer">Google ML Glossary</a></div></section>
      </div>
    </div>
  `;

  initializeLearningInteractions();
}

const topicMazeLayout = [
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 1, 1],
  [0, 0, 0, 1, 0, 0, 0],
];

const topicMazeStart = [0, 0];
const topicMazeGoal = [6, 6];
const topicMazeStates = {};

function topicMazeKey(row, col) {
  return row + ":" + col;
}

function topicMazeNeighbors(row, col) {
  return [[row - 1, col], [row, col + 1], [row + 1, col], [row, col - 1]]
    .filter(([nextRow, nextCol]) => {
      return nextRow >= 0 && nextRow < topicMazeLayout.length && nextCol >= 0 && nextCol < topicMazeLayout[0].length && topicMazeLayout[nextRow][nextCol] === 0;
    });
}

function solveTopicMaze(mode) {
  const frontier = [[...topicMazeStart]];
  const visited = new Set([topicMazeKey(...topicMazeStart)]);
  const parent = new Map();
  const visitOrder = [];
  let goalReached = false;

  while (frontier.length && !goalReached) {
    const current = mode === "bfs" ? frontier.shift() : frontier.pop();
    const currentKey = topicMazeKey(...current);
    visitOrder.push(currentKey);
    if (current[0] === topicMazeGoal[0] && current[1] === topicMazeGoal[1]) {
      goalReached = true;
      break;
    }
    topicMazeNeighbors(...current).forEach((next) => {
      const nextKey = topicMazeKey(...next);
      if (!visited.has(nextKey)) {
        visited.add(nextKey);
        parent.set(nextKey, currentKey);
        frontier.push(next);
      }
    });
  }

  const path = [];
  let cursor = topicMazeKey(...topicMazeGoal);
  if (visited.has(cursor)) {
    while (cursor) {
      path.unshift(cursor);
      cursor = parent.get(cursor);
    }
  }
  return { visitOrder, path };
}

function renderTopicMaze(mode, visited = [], path = []) {
  const card = document.querySelector("[data-topic-maze='" + mode + "']");
  if (!card) return;
  const grid = card.querySelector("[data-topic-maze-grid]");
  const visitedSet = new Set(visited);
  const pathSet = new Set(path);
  grid.innerHTML = topicMazeLayout.flatMap((row, rowIndex) => row.map((cell, colIndex) => {
    const key = topicMazeKey(rowIndex, colIndex);
    const classes = ["topic-maze-cell", cell ? "wall" : "road"];
    if (key === topicMazeKey(...topicMazeStart)) classes.push("start");
    if (key === topicMazeKey(...topicMazeGoal)) classes.push("goal");
    if (visitedSet.has(key)) classes.push("visited");
    if (pathSet.has(key)) classes.push("solution");
    return "<span class='" + classes.join(" ") + "' aria-label='" + key + "'></span>";
  })).join("");
  const result = topicMazeStates[mode]?.result || { visitOrder: [], path: [] };
  card.querySelector("[data-topic-maze-visited]").textContent = String(visited.length);
  card.querySelector("[data-topic-maze-path]").textContent = path.length ? String(path.length) : "-";
  card.querySelector("[data-topic-maze-status]").textContent = path.length ? "Eksperimen selesai. Bandingkan jumlah node dan panjang jalurnya." : visited.length ? "Eksplorasi sedang berjalan..." : "Siap dijalankan.";
}

function resetTopicMaze(mode) {
  const state = topicMazeStates[mode];
  if (state?.timer) window.clearInterval(state.timer);
  topicMazeStates[mode] = { result: { visitOrder: [], path: [] }, timer: null };
  renderTopicMaze(mode);
}

function runTopicMaze(mode) {
  resetTopicMaze(mode);
  const result = solveTopicMaze(mode);
  const state = topicMazeStates[mode];
  state.result = result;
  let visitedCount = 0;
  let pathCount = 0;
  state.timer = window.setInterval(() => {
    if (visitedCount < result.visitOrder.length) {
      visitedCount += 1;
      renderTopicMaze(mode, result.visitOrder.slice(0, visitedCount));
      return;
    }
    if (pathCount < result.path.length) {
      pathCount += 1;
      renderTopicMaze(mode, result.visitOrder, result.path.slice(0, pathCount));
      return;
    }
    window.clearInterval(state.timer);
    state.timer = null;
    renderTopicMaze(mode, result.visitOrder, result.path);
  }, 130);
}

const topicApproaches = {
  traditional: {
    label: "Traditional programming",
    title: "Rules are written first",
    formula: "Rules + data -> output",
    copy: "Manusia menentukan aturan secara eksplisit. Komputer menjalankan aturan tersebut pada input yang datang.",
    steps: ["Human writes rules", "System reads input", "Rule produces output"],
  },
  machine: {
    label: "Machine learning",
    title: "Patterns are learned from examples",
    formula: "Data + target -> model",
    copy: "Manusia menyiapkan pengalaman dan target. Model menemukan pola, lalu memakai pola itu untuk membaca kasus baru.",
    steps: ["Collect examples", "Train a model", "Predict new input"],
  },
  adaptive: {
    label: "Adaptive / online learning",
    title: "The system keeps responding to change",
    formula: "Feedback -> update -> better response",
    copy: "Sistem dipantau setelah digunakan. Ketika data dan perilaku lingkungan berubah, model atau aturan dapat diperbarui dengan pengalaman baru.",
    steps: ["Observe feedback", "Detect drift", "Refresh the system"],
  },
};

function setTopicApproach(key) {
  const approach = topicApproaches[key] || topicApproaches.traditional;
  document.querySelectorAll("[data-topic-approach]").forEach((button) => {
    button.classList.toggle("active", button.dataset.topicApproach === key);
  });
  const panel = document.querySelector("#topic-approach-panel");
  if (!panel) return;
  panel.innerHTML = "<div class='topic-approach-copy'><small>" + approach.label + "</small><h4>" + approach.title + "</h4><strong>" + approach.formula + "</strong><p>" + approach.copy + "</p></div><div class='topic-approach-flow'>" + approach.steps.map((step, index) => "<div><span>0" + (index + 1) + "</span><b>" + step + "</b></div>" + (index < approach.steps.length - 1 ? "<i></i>" : "")).join("") + "</div>";
}

const topicStudioState = { agent: "planner" };

function renderTopicAgent(mode = topicStudioState.agent) {
  const scenarios = {
    reflex: {
      label: "Reflex Agent",
      title: "Merespons kondisi yang terlihat",
      copy: "Agent melihat satu sinyal, lalu menjalankan aturan yang sudah ditentukan. Cepat dan mudah diprediksi, tetapi tidak menimbang konsekuensi beberapa langkah ke depan.",
      steps: ["Sensor membaca hujan", "Aturan cocok", "Tutup jendela"],
      decision: "Jika hujan terdeteksi, jendela ditutup."
    },
    planner: {
      label: "Problem-Solving Agent",
      title: "Memilih tindakan setelah membandingkan opsi",
      copy: "Agent membangun gambaran situasi, memeriksa beberapa pilihan, lalu memilih tindakan yang paling mendekati tujuan. Ia lebih lambat, tetapi lebih adaptif.",
      steps: ["Amati kondisi", "Bandingkan rute", "Pilih tindakan"],
      decision: "Jendela ditutup setelah agent mengecek cuaca dan kondisi ruangan."
    }
  };
  const scenario = scenarios[mode] || scenarios.planner;
  const visual = document.querySelector("#topic-agent-visual");
  if (!visual) return;
  visual.innerHTML = "<div class='studio-agent-copy'><small>" + scenario.label + "</small><h4>" + scenario.title + "</h4><p>" + scenario.copy + "</p><strong>Keputusan: " + scenario.decision + "</strong></div><div class='studio-flow'>" + scenario.steps.map((step, index) => "<div><span>0" + (index + 1) + "</span><b>" + step + "</b></div>" + (index < scenario.steps.length - 1 ? "<i></i>" : "")).join("") + "</div>";
  document.querySelectorAll("[data-topic-agent-mode]").forEach((button) => button.classList.toggle("active", button.dataset.topicAgentMode === mode));
}

function renderTopicSplit(value = 80) {
  const train = Number(value);
  const test = 100 - train;
  const trainCount = Math.round(300 * train / 100);
  const testCount = 300 - trainCount;
  const label = document.querySelector("#topic-split-label");
  const trainTrack = document.querySelector("#topic-split-train");
  const testTrack = document.querySelector("#topic-split-test");
  const feedback = document.querySelector("#topic-split-feedback");
  if (!label || !trainTrack || !testTrack || !feedback) return;
  label.textContent = train + "% train / " + test + "% test";
  trainTrack.style.width = train + "%";
  testTrack.style.width = test + "%";
  trainTrack.innerHTML = "<b>" + trainCount + "</b><small>data belajar</small>";
  testTrack.innerHTML = "<b>" + testCount + "</b><small>data menguji</small>";
  feedback.textContent = train >= 70 && train <= 85 ? "Pembagian cukup seimbang: model punya pengalaman belajar dan masih diuji pada data yang belum dilihat." : train > 85 ? "Data belajar terlalu dominan. Model mungkin terlihat bagus karena hanya mendapat ruang kecil untuk diuji." : "Data uji cukup besar, tetapi pengalaman belajar model menjadi lebih terbatas.";
}

function renderTopicConfusion(value = 50) {
  const threshold = Number(value);
  const tp = Math.round(98 - 0.6 * (threshold - 10));
  const fn = 100 - tp;
  const fp = Math.round(180 - 2.1 * (threshold - 10));
  const tn = 900 - fp;
  const accuracy = ((tp + tn) / 1000) * 100;
  const precision = tp / (tp + fp) * 100;
  const recall = tp / (tp + fn) * 100;
  const f1 = 2 * precision * recall / (precision + recall);
  const setText = (selector, text) => { const element = document.querySelector(selector); if (element) element.textContent = text; };
  setText("#topic-threshold-label", "Threshold " + (threshold / 100).toFixed(2));
  setText("#topic-cm-tn", tn);
  setText("#topic-cm-fp", fp);
  setText("#topic-cm-fn", fn);
  setText("#topic-cm-tp", tp);
  setText("#topic-count-summary", "Simulasi ini membaca 1.000 data uji: 900 benar-benar aman dan 100 benar-benar terlambat.");
  setText("#topic-tn-copy", tn + " kasus aman terbaca benar sebagai aman.");
  setText("#topic-fp-copy", fp + " kasus aman terkena alarm palsu.");
  setText("#topic-fn-copy", fn + " kasus terlambat terlewat karena diprediksi aman.");
  setText("#topic-tp-copy", tp + " kasus terlambat berhasil ditangkap model.");
  setText("#topic-metric-accuracy", accuracy.toFixed(1) + "%");
  setText("#topic-metric-precision", precision.toFixed(1) + "%");
  setText("#topic-metric-recall", recall.toFixed(1) + "%");
  setText("#topic-metric-f1", f1.toFixed(1) + "%");
  const thresholdExplainer = document.querySelector("#topic-threshold-explainer");
  const feedback = document.querySelector("#topic-confusion-feedback");
  if (thresholdExplainer) {
    thresholdExplainer.textContent = threshold < 40
      ? "Threshold rendah membuat model lebih cepat memberi alarm. Recall biasanya naik, tetapi false positive juga lebih mudah muncul."
      : threshold > 65
        ? "Threshold tinggi membuat model lebih selektif. Precision bisa membaik, tetapi sebagian kasus terlambat bisa tidak tertangkap."
        : "Nilai tengah biasanya dipakai untuk menjaga keseimbangan antara menangkap risiko dan membatasi alarm palsu.";
  }
  if (feedback) feedback.textContent = threshold < 40 ? "Interpretasi: cocok jika tujuan utama adalah jangan sampai kasus terlambat terlewat, walaupun tim harus siap mengecek lebih banyak alarm palsu." : threshold > 65 ? "Interpretasi: cocok jika alarm palsu mahal atau mengganggu operasi, tetapi risikonya beberapa keterlambatan baru diketahui terlambat." : "Interpretasi: sistem berada di mode kompromi, cukup aktif menemukan risiko tanpa membuat alarm palsu terlalu dominan.";
}

function renderTopicHeuristic(value = 50) {
  const lab = document.querySelector(".studio-heuristic-lab");
  if (lab && !lab.querySelector(".heuristic-summary-card")) {
    const rangeLabel = lab.querySelector(".studio-range-label");
    const explainer = document.createElement("div");
    explainer.innerHTML = '<p class="studio-lab-intro">A* memilih node berdasarkan gabungan biaya yang sudah ditempuh dan perkiraan sisa perjalanan. Slider ini memperlihatkan apa yang terjadi jika salah satu sisi lebih dominan.</p><div class="heuristic-summary-card"><small>Cara membaca angka</small><b id="topic-heuristic-summary">Saat ini A* memberi bobot 50% pada biaya perjalanan yang sudah ditempuh dan 50% pada perkiraan jarak menuju tujuan.</b><span id="topic-heuristic-mode">Mode: seimbang antara biaya nyata dan estimasi</span></div>';
    if (rangeLabel) lab.insertBefore(explainer, rangeLabel);
    const feedback = lab.querySelector("#topic-heuristic-feedback");
    const detail = document.createElement("div");
    detail.innerHTML = '<div class="heuristic-meaning-grid"><div><small>g(n)</small><b>Biaya nyata dari start</b><span>Membaca seberapa jauh atau mahal perjalanan yang sudah dilalui.</span></div><div><small>h(n)</small><b>Perkiraan menuju goal</b><span>Mengarahkan pencarian ke node yang tampak menjanjikan.</span></div><div><small>f(n)</small><b>Skor prioritas A*</b><span>Node dengan skor lebih kecil biasanya diperiksa lebih dulu.</span></div></div><div class="heuristic-node-race"><div id="topic-node-a"></div><div id="topic-node-b"></div><div id="topic-node-c"></div></div>';
    if (feedback) lab.insertBefore(detail, feedback);
  }
  const balance = Number(value);
  const g = balance;
  const h = 100 - balance;
  const gBar = document.querySelector("#topic-g-bar");
  const hBar = document.querySelector("#topic-h-bar");
  if (gBar) gBar.style.width = g + "%";
  if (hBar) hBar.style.width = h + "%";
  const label = document.querySelector("#topic-heuristic-label");
  const summary = document.querySelector("#topic-heuristic-summary");
  const mode = document.querySelector("#topic-heuristic-mode");
  const nodeA = document.querySelector("#topic-node-a");
  const nodeB = document.querySelector("#topic-node-b");
  const nodeC = document.querySelector("#topic-node-c");
  const copy = document.querySelector("#topic-heuristic-feedback");
  if (label) label.textContent = "g(n) " + g + " / h(n) " + h;
  if (summary) summary.textContent = "Saat ini A* memberi bobot " + g + "% pada biaya perjalanan yang sudah ditempuh dan " + h + "% pada perkiraan jarak menuju tujuan.";
  if (mode) mode.textContent = balance < 35 ? "Mode: lebih agresif mengejar tujuan" : balance > 65 ? "Mode: lebih hati-hati membaca biaya nyata" : "Mode: seimbang antara biaya nyata dan estimasi";
  const nodeScores = [
    { element: nodeA, name: "Node A", cost: Math.round(g * 0.64 + h * 0.34), note: "Dekat dari posisi sekarang" },
    { element: nodeB, name: "Node B", cost: Math.round(g * 0.42 + h * 0.58), note: "Tampak lebih dekat ke goal" },
    { element: nodeC, name: "Node C", cost: Math.round(g * 0.54 + h * 0.48), note: "Pilihan tengah" }
  ].sort((a, b) => a.cost - b.cost);
  nodeScores.forEach((node, index) => {
    if (!node.element) return;
    node.element.classList.toggle("is-best", index === 0);
    node.element.innerHTML = "<small>" + node.name + "</small><b>Score " + node.cost + "</b><span>" + (index === 0 ? "Diprioritaskan" : node.note) + "</span>";
  });
  if (copy) copy.textContent = balance < 35 ? "Lebih percaya pada estimasi tujuan. Eksplorasi terasa cepat, tetapi risiko memilih arah yang tampak dekat menjadi lebih besar." : balance > 65 ? "Lebih percaya pada biaya perjalanan yang sudah ditempuh. Pilihan lebih hati-hati, tetapi bisa mengeksplorasi lebih banyak node." : "Keseimbangan yang sehat: biaya perjalanan dan perkiraan jarak sama-sama memengaruhi prioritas A*.";
}

const topicExpansionState = { preprocessStage: 0, decision: "classification" };

function renderTopicPreprocess(stage = topicExpansionState.preprocessStage) {
  topicExpansionState.preprocessStage = Math.max(0, Math.min(4, Number(stage)));
  document.querySelectorAll("[data-topic-preprocess-step]").forEach((step) => {
    const index = Number(step.dataset.topicPreprocessStep);
    step.classList.toggle("is-complete", index < topicExpansionState.preprocessStage);
    step.classList.toggle("is-active", index === topicExpansionState.preprocessStage && topicExpansionState.preprocessStage < 4);
  });
  const status = document.querySelector("#topic-preprocess-status");
  const copies = [
    "Data mentah belum siap dipelajari. Mulai dari melihat apa yang masuk.",
    "Data kosong dan duplikat dibersihkan agar pola tidak dihitung dua kali.",
    "Kategori diubah menjadi angka dan skala fitur diseimbangkan.",
    "Data dibagi: sebagian untuk belajar, sebagian untuk menguji pada contoh baru.",
    "Dataset siap masuk ke model. Setiap transformasi harus dapat diulang dan dicatat."
  ];
  if (status) status.textContent = copies[topicExpansionState.preprocessStage];
  const run = document.querySelector("[data-topic-preprocess-run]");
  if (run) run.textContent = topicExpansionState.preprocessStage >= 4 ? "Ulangi pipeline" : "Jalankan pipeline";
}

function runTopicPreprocess() {
  if (topicExpansionState.preprocessStage >= 4) renderTopicPreprocess(0);
  const timer = window.setInterval(() => {
    renderTopicPreprocess(topicExpansionState.preprocessStage + 1);
    if (topicExpansionState.preprocessStage >= 4) window.clearInterval(timer);
  }, 520);
}

function renderTopicLeakage(mode = "clean") {
  const safe = mode === "clean";
  document.querySelectorAll("[data-topic-leakage-mode]").forEach((button) => button.classList.toggle("active", button.dataset.topicLeakageMode === mode));
  const flow = document.querySelector("#topic-leakage-flow");
  const status = document.querySelector("#topic-leakage-status");
  if (!flow || !status) return;
  flow.innerHTML = safe
    ? "<span class='leak-node'>Raw data</span><i></i><span class='leak-node'>Split</span><i></i><span class='leak-node safe-node'>Fit on train</span><i></i><span class='leak-node safe-node'>Evaluate on test</span>"
    : "<span class='leak-node'>Raw data</span><i></i><span class='leak-node risk-node'>Scale everything</span><i></i><span class='leak-node'>Split</span><i></i><span class='leak-node risk-node'>Test influence leaks</span>";
  status.textContent = safe
    ? "Urutan yang sehat: split lebih dulu, lalu pelajari parameter preprocessing hanya dari data train."
    : "Risiko leakage: informasi dari data test ikut memengaruhi proses belajar. Nilai evaluasi dapat terlihat terlalu optimistis.";
  status.dataset.state = safe ? "success" : "retry";
}

function renderTopicBoundary(value = 50) {
  const threshold = Number(value);
  const boundary = document.querySelector("#topic-boundary-line");
  const label = document.querySelector("#topic-boundary-label");
  const feedback = document.querySelector("#topic-boundary-feedback");
  if (boundary) boundary.style.left = threshold + "%";
  if (label) label.textContent = "Batas keputusan " + (threshold / 100).toFixed(2);
  if (feedback) feedback.textContent = threshold < 40 ? "Batas terlalu longgar: lebih banyak titik diprediksi positif, termasuk beberapa yang seharusnya negatif." : threshold > 65 ? "Batas terlalu ketat: alarm berkurang, tetapi contoh positif berisiko terlewat." : "Batas berada di area tengah. Model memisahkan dua kelompok berdasarkan nilai fitur yang diamati.";
}

function renderTopicMonitoring(value = 25) {
  const drift = Number(value);
  const current = Math.max(54, 94 - drift * 0.42);
  const gap = 94 - current;
  const currentBar = document.querySelector("#topic-monitor-current");
  const gapLabel = document.querySelector("#topic-monitor-gap");
  const status = document.querySelector("#topic-monitor-status");
  if (currentBar) currentBar.style.width = current + "%";
  if (gapLabel) gapLabel.textContent = "Performa " + current.toFixed(1) + "%";
  if (status) status.textContent = drift < 25 ? "Data baru masih dekat dengan pola awal. Tetap pantau secara berkala." : drift < 60 ? "Mulai terlihat pergeseran data. Bandingkan distribusi fitur dan siapkan review model." : "Drift tinggi: jangan langsung percaya prediksi. Bekukan keputusan otomatis dan evaluasi ulang data serta model.";
  if (status) status.dataset.state = drift >= 60 ? "retry" : drift >= 25 ? "warning" : "success";
}

function renderTopicDecisionMap(choice = topicExpansionState.decision) {
  topicExpansionState.decision = choice;
  const answers = {
    classification: ["Classification", "Ada label kelas seperti aman/terlambat?", "Gunakan supervised learning untuk mempelajari batas antar kelas."],
    clustering: ["Clustering", "Belum ada label dan ingin menemukan kelompok?", "Gunakan unsupervised learning untuk membaca struktur alami data."],
    search: ["Search", "Keadaan, aksi, dan tujuan dapat ditulis jelas?", "Gunakan search seperti BFS, DFS, atau A* untuk menjelajah ruang solusi."],
    reinforcement: ["Reinforcement learning", "Agent belajar dari reward dan penalti?", "Gunakan reinforcement learning ketika kualitas aksi terlihat dari konsekuensinya."]
  };
  const result = answers[choice] || answers.classification;
  document.querySelectorAll("[data-topic-decision-choice]").forEach((button) => button.classList.toggle("active", button.dataset.topicDecisionChoice === choice));
  const title = document.querySelector("#topic-decision-title");
  const question = document.querySelector("#topic-decision-question");
  const feedback = document.querySelector("#topic-decision-feedback");
  if (title) title.textContent = result[0];
  if (question) question.textContent = result[1];
  if (feedback) feedback.textContent = result[2];
}

function initializeTopicOneInteractions() {
  ["bfs", "dfs"].forEach((mode) => resetTopicMaze(mode));
  setTopicApproach("traditional");
  renderTopicAgent();
  renderTopicSplit(80);
  renderTopicConfusion(50);
  renderTopicHeuristic(50);
  renderTopicPreprocess(0);
  renderTopicLeakage("clean");
  renderTopicBoundary(50);
  renderTopicMonitoring(25);
  renderTopicDecisionMap("classification");
  const railLinks = [...document.querySelectorAll(".complete-topic-layout .learning-rail a[data-module-link]")];
  const modules = railLinks.map((link) => document.querySelector("#" + link.dataset.moduleLink)).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelector(".complete-topic-layout .learning-rail a[href='#" + entry.target.id + "']")?.classList.add("is-seen");
        }
      });
    }, { rootMargin: "-18% 0px -68% 0px" });
    modules.forEach((module) => observer.observe(module));
  }
}

function applyTopicOneCopyPolish() {
  const updates = {
    "#module-01 .module-heading > p": "Seperti saat kita menggunakan aplikasi navigasi untuk pulang, sistem tidak hanya perlu mendeteksi lokasi kita. Aplikasi tersebut juga harus mengetahui tujuan akhir, memetakan rute yang ada, serta mempertimbangkan batasan waktu dan rintangan di perjalanan.",
    "#module-01 .core-idea p": "AI dapat dipahami sebagai cara membuat komputer membantu mengambil keputusan dari informasi yang tersedia. Problem solving adalah kebiasaan memecah masalah besar menjadi tujuan kecil, pilihan, batasan, dan bukti keberhasilan.",
    "#module-01 .ai-definition-strip > div:nth-child(1) b": "Komputer yang membantu membaca keadaan dan memilih respons untuk mencapai tujuan tertentu.",
    "#module-01 .ai-definition-strip > div:nth-child(2) b": "Cara mengubah situasi yang membingungkan menjadi langkah yang bisa dijalankan dan diuji.",
    "#module-01 .ai-definition-strip > div:nth-child(3) b": "Sistem yang menerima pengamatan, memilih aksi, lalu melihat dampaknya pada lingkungan.",
    "#module-01 .agent-type-row > div:first-child p": "Agent bereaksi langsung ketika kondisi tertentu muncul. Lampu otomatis yang menyala saat sensor mendeteksi gerakan adalah contoh pola ini.",
    "#module-01 .agent-type-row > div:last-child p": "Agent ini tidak buru-buru merespons. Ia membandingkan beberapa rute atau tindakan, memilih yang paling sesuai dengan tujuan, lalu mengecek apakah hasilnya masuk akal.",
    "#module-02 .module-heading > p": "Masalah yang terlihat mirip belum tentu membutuhkan alat yang sama. Menentukan bentuk masalah lebih dulu membantu kita menghindari kebiasaan memilih algoritma hanya karena sedang populer.",
    "#module-02 .topic-scenario-example p": "Sebuah rumah sakit ingin memberikan peringatan dini kepada tim medis jika ada pasien di instalasi gawat darurat (IGD) yang berisiko mengalami keterlambatan penanganan. Catatan data yang bisa digunakan antara lain: tingkat keparahan gejala (triase), jumlah dokter yang sedang bertugas, usia pasien, jam kedatangan, dan label hasil: tertangani tepat waktu atau terlambat.",
    "#module-03 .module-heading > p": "Bayangkan mencari jalan di gedung yang belum pernah kamu kunjungi tanpa denah tambahan. Kamu hanya tahu pintu masuk, pilihan arah, dan ruangan tujuan. Itulah situasi yang dijelaskan oleh uninformed search.",
    "#module-03 .search-comparison > div:first-child p": "BFS memeriksa semua pilihan yang berjarak satu langkah, lalu dua langkah, dan seterusnya. Karena bergerak berdasarkan lapisan, pendekatan ini kuat ketika jumlah langkah paling sedikit adalah prioritas.",
    "#module-03 .search-comparison > div:nth-child(2) p": "DFS memilih satu cabang dan terus masuk sampai menemukan jalan buntu atau tujuan. Ia bisa hemat memori, tetapi cepat menemukan solusi tidak berarti solusi itu paling pendek.",
    "#module-04 .module-heading > p": "Saat peta semakin besar, memeriksa semua pilihan satu per satu menjadi lambat. Heuristik memberi sistem sebuah kompas: bukan jawaban pasti, tetapi perkiraan yang membantu menentukan arah eksplorasi.",
    "#module-04 .informed-search-grid > div:first-child p": "Greedy Best-First Search hanya melihat perkiraan jarak ke tujuan. Ia bisa melaju cepat ke arah yang tampak benar, tetapi dapat melewatkan rute yang secara keseluruhan lebih baik.",
    "#module-04 .informed-search-grid > div:last-child p": "A* menggabungkan biaya yang sudah dibayar dengan perkiraan biaya yang masih tersisa. Karena itu, ia tidak hanya mengejar arah yang terlihat dekat, tetapi juga memperhitungkan perjalanan yang sudah terjadi.",
    "#module-05 .module-heading > p": "Analoginya seperti saat kita melatih sistem keamanan bank untuk membedakan transaksi kartu kredit yang sah dan yang mencurigakan (palsu). Daripada repot-repot menulis ratusan aturan manual seperti membatasi lokasi atau nominal belanja satu per satu jauh lebih mudah memberikan banyak contoh data transaksi agar sistem bisa mendeteksi pola kecurangan dan kebiasaan pengguna secara otomatis.",
    "#module-05 .topic-mitchell-note p": "Sebuah program benar-benar belajar jika kemampuannya menyelesaikan task meningkat setelah menerima lebih banyak experience, dan peningkatan itu dapat dibuktikan dengan performance measure yang jelas.",
    "#module-06 .module-heading > p": "Mulailah dari pertanyaan sederhana: apakah jawaban sudah tersedia, apakah sistem mendapat reward, atau apakah data hanya berisi contoh tanpa label? Jawaban itu menentukan jalur belajar model.",
    "#module-07 .module-heading > p": "Model yang bagus di notebook belum tentu siap dipakai orang lain. Sebuah project menjadi sistem ketika hasil prediksi punya tempat di alur kerja, dapat diuji, dan tetap dipantau setelah digunakan.",
    "#module-07 .topic-delay-case .module-heading > p": "Skenarionya sederhana: sebelum paket berangkat, sistem memberi sinyal apakah order perlu perhatian tambahan.",
    ".complete-topic-layout .topic-summary-band p": "Algoritma memang penting, tetapi keputusan yang baik lahir dari rangkaian yang utuh: masalah yang jelas, bukti yang dapat dipercaya, evaluasi yang jujur, dan penerapan yang bertanggung jawab."
  };
  Object.entries(updates).forEach(([selector, copy]) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = copy;
  });
}

const topicStudioMarkup = `<section class="learning-module complete-topic-module topic-one-studio"><div class="module-heading"><small>Topic 1 Interactive Studio</small><h3>Uji konsepnya, bukan hanya menghafalnya</h3><p>Empat eksperimen singkat ini mengubah konsep abstrak menjadi keputusan yang bisa kamu lihat. Ubah pilihan atau slider, lalu amati apa yang berubah dan mengapa.</p></div><div class="topic-studio-grid"><article class="interactive-lab studio-agent-lab"><div class="lab-toolbar"><div><small>Experiment 06A / Agent</small><h4>Reflex atau problem-solving?</h4></div></div><div class="studio-toggle"><button type="button" class="topic-studio-toggle" data-topic-agent-mode="reflex">Reflex Agent</button><button type="button" class="topic-studio-toggle active" data-topic-agent-mode="planner">Problem-Solving Agent</button></div><div id="topic-agent-visual" class="topic-agent-visual" aria-live="polite"></div></article><article class="interactive-lab studio-split-lab"><div class="lab-toolbar"><div><small>Experiment 06B / Data</small><h4>Train-test split</h4></div><span id="topic-split-label" class="classification-kicker">80% train / 20% test</span></div><label class="studio-range-label"><span>Geser pembagian data</span><input id="topic-split-range" type="range" min="50" max="95" step="5" value="80"></label><div class="studio-split-track"><div id="topic-split-train" class="studio-split-train"></div><div id="topic-split-test" class="studio-split-test"></div></div><p id="topic-split-feedback" class="lab-status" aria-live="polite"></p></article><article class="interactive-lab studio-confusion-lab"><div class="lab-toolbar"><div><small>Experiment 06C / Evaluation</small><h4>Confusion matrix</h4></div><span id="topic-threshold-label" class="classification-kicker">Threshold 0.50</span></div><p class="studio-lab-intro">Confusion matrix membantu membaca jenis keputusan model: mana yang benar, mana yang salah, dan kesalahan mana yang paling berisiko.</p><div class="confusion-count-context"><small>Angka di matrix berarti jumlah kasus</small><b id="topic-count-summary">Simulasi ini membaca 1.000 data uji: 900 benar-benar aman dan 100 benar-benar terlambat.</b><span>Setiap kotak menjawab: dari kondisi aktual tertentu, model memasukkannya ke prediksi yang mana?</span></div><label class="studio-range-label"><span>Atur ambang keputusan</span><input id="topic-confusion-range" type="range" min="10" max="90" step="5" value="50"></label><div class="studio-confusion-grid expanded"><div class="studio-mini-matrix"><span></span><b>Pred. aman</b><b>Pred. terlambat</b><b>Aktual aman</b><strong class="good">TN <em id="topic-cm-tn">860</em></strong><strong class="warn">FP <em id="topic-cm-fp">60</em></strong><b>Aktual terlambat</b><strong class="warn">FN <em id="topic-cm-fn">24</em></strong><strong class="good">TP <em id="topic-cm-tp">56</em></strong></div><div class="matrix-reading-guide"><div><small>TN</small><b>Aman dan diprediksi aman</b><span id="topic-tn-copy">860 kasus aman terbaca benar sebagai aman.</span></div><div><small>FP</small><b>Alarm palsu</b><span id="topic-fp-copy">60 kasus aman terkena alarm palsu.</span></div><div><small>FN</small><b>Kasus terlewat</b><span id="topic-fn-copy">24 kasus terlambat terlewat karena diprediksi aman.</span></div><div><small>TP</small><b>Terlambat dan tertangkap</b><span id="topic-tp-copy">56 kasus terlambat berhasil ditangkap model.</span></div></div></div><div class="threshold-explainer"><b>Threshold menentukan seberapa yakin model sebelum memberi label "terlambat".</b><span id="topic-threshold-explainer">Nilai tengah biasanya dipakai untuk menjaga keseimbangan antara menangkap risiko dan membatasi alarm palsu.</span></div><div class="studio-metrics detailed"><div><small>Accuracy</small><b id="topic-metric-accuracy">91.6%</b><span>Total prediksi benar dari semua kasus.</span></div><div><small>Precision</small><b id="topic-metric-precision">48.3%</b><span>Dari semua alarm terlambat, berapa yang benar.</span></div><div><small>Recall</small><b id="topic-metric-recall">70.0%</b><span>Dari semua kasus terlambat, berapa yang tertangkap.</span></div><div><small>F1</small><b id="topic-metric-f1">57.1%</b><span>Keseimbangan antara precision dan recall.</span></div></div><p id="topic-confusion-feedback" class="lab-status" aria-live="polite"></p></article><article class="interactive-lab studio-heuristic-lab"><div class="lab-toolbar"><div><small>Experiment 06D / Search</small><h4>Menimbang g(n) dan h(n)</h4></div><span id="topic-heuristic-label" class="classification-kicker">g(n) 50 / h(n) 50</span></div><label class="studio-range-label"><span>Geser fokus A*</span><input id="topic-heuristic-range" type="range" min="10" max="90" step="5" value="50"></label><div class="heuristic-bars"><div><span>Biaya yang sudah ditempuh <b>g(n)</b></span><i><em id="topic-g-bar"></em></i></div><div><span>Perkiraan menuju tujuan <b>h(n)</b></span><i><em id="topic-h-bar"></em></i></div></div><p id="topic-heuristic-feedback" class="lab-status" aria-live="polite"></p></article></div></section>`;

const topicExpansionMarkup = `<section class="learning-module complete-topic-module topic-expansion-studio"><div class="module-heading"><small>Applied Studio / Topic 1</small><h3>Lihat apa yang terjadi di balik layar</h3><p>Di sini konsep AI bergerak dari teori menjadi eksperimen. Jalankan pipeline, ubah kondisi, lalu baca konsekuensinya seperti seorang pembuat sistem.</p></div><div class="topic-expansion-grid"><article class="interactive-lab topic-preprocess-lab"><div class="lab-toolbar"><div><small>Experiment 07A / Data preparation</small><h4>Preprocessing pipeline</h4></div><button type="button" class="lab-button primary-lab-button" data-topic-preprocess-run>Jalankan pipeline</button></div><div class="topic-preprocess-flow"><div class="topic-preprocess-step is-active" data-topic-preprocess-step="0"><span>01</span><b>Raw data</b><small>Data mentah</small></div><i></i><div class="topic-preprocess-step" data-topic-preprocess-step="1"><span>02</span><b>Clean</b><small>Hapus noise</small></div><i></i><div class="topic-preprocess-step" data-topic-preprocess-step="2"><span>03</span><b>Transform</b><small>Encode & scale</small></div><i></i><div class="topic-preprocess-step" data-topic-preprocess-step="3"><span>04</span><b>Split</b><small>Train & test</small></div></div><p id="topic-preprocess-status" class="lab-status" aria-live="polite">Data mentah belum siap dipelajari. Mulai dari melihat apa yang masuk.</p></article><article class="interactive-lab topic-leakage-lab"><div class="lab-toolbar"><div><small>Experiment 07B / Evaluation hygiene</small><h4>Data leakage simulator</h4></div></div><div class="studio-toggle"><button type="button" class="topic-studio-toggle active" data-topic-leakage-mode="clean">Urutan aman</button><button type="button" class="topic-studio-toggle" data-topic-leakage-mode="leak">Ada leakage</button></div><div id="topic-leakage-flow" class="topic-leakage-flow" aria-live="polite"></div><p id="topic-leakage-status" class="lab-status" aria-live="polite"></p></article><article class="interactive-lab topic-boundary-lab"><div class="lab-toolbar"><div><small>Experiment 07C / Classification</small><h4>Model decision boundary</h4></div><span id="topic-boundary-label" class="classification-kicker">Batas keputusan 0.50</span></div><label class="studio-range-label"><span>Geser batas klasifikasi</span><input id="topic-boundary-range" type="range" min="20" max="80" step="5" value="50"></label><div class="topic-boundary-plot" aria-label="Visual batas keputusan"><div id="topic-boundary-line"></div><span class="boundary-dot dot-a"></span><span class="boundary-dot dot-b"></span><span class="boundary-dot dot-c"></span><span class="boundary-dot dot-d"></span><span class="boundary-dot dot-e"></span><span class="boundary-dot dot-f"></span><span class="boundary-dot dot-g"></span><span class="boundary-dot dot-h"></span><small class="boundary-negative">Negatif</small><small class="boundary-positive">Positif</small></div><p id="topic-boundary-feedback" class="lab-status" aria-live="polite"></p></article><article class="interactive-lab topic-monitoring-lab"><div class="lab-toolbar"><div><small>Experiment 07D / Deployment</small><h4>Model monitoring</h4></div><span id="topic-monitor-gap" class="classification-kicker">Performa 83.5%</span></div><label class="studio-range-label"><span>Naikkan data drift</span><input id="topic-monitor-range" type="range" min="0" max="100" step="5" value="25"></label><div class="topic-monitor-chart"><div><span>Baseline</span><i><em style="width:94%"></em></i><b>94%</b></div><div><span>Data baru</span><i><em id="topic-monitor-current" style="width:83.5%"></em></i><b>83.5%</b></div></div><p id="topic-monitor-status" class="lab-status" aria-live="polite"></p></article><article class="interactive-lab topic-decision-lab"><div class="lab-toolbar"><div><small>Experiment 07E / Framing</small><h4>AI decision map</h4></div><span class="classification-kicker">Mulai dari bukti</span></div><div class="decision-choice-grid"><button type="button" class="topic-studio-toggle active" data-topic-decision-choice="classification">Ada label kelas</button><button type="button" class="topic-studio-toggle" data-topic-decision-choice="clustering">Cari kelompok</button><button type="button" class="topic-studio-toggle" data-topic-decision-choice="search">Ada tujuan & aksi</button><button type="button" class="topic-studio-toggle" data-topic-decision-choice="reinforcement">Ada reward</button></div><div class="topic-decision-result"><small>Pendekatan yang mungkin</small><h4 id="topic-decision-title">Classification</h4><p id="topic-decision-question">Ada label kelas seperti aman/terlambat?</p><strong id="topic-decision-feedback">Gunakan supervised learning untuk mempelajari batas antar kelas.</strong></div></article></div></section>`;

function injectTopicStudio() {
  const module = learningDetailContainer.querySelector("#module-07");
  if (module && !learningDetailContainer.querySelector(".topic-one-studio")) module.insertAdjacentHTML("beforebegin", topicStudioMarkup);
  if (module && !learningDetailContainer.querySelector(".topic-expansion-studio")) module.insertAdjacentHTML("beforebegin", topicExpansionMarkup);
}

function renderTopicOneCompleteLearningDetail() {
  const path = learningPaths["topic-1-complete"];
  const moduleLinks = path.modules.map(([number, title]) => "<a href='#module-" + number + "' data-module-link='module-" + number + "'><small>" + number + "</small><span>" + title + "</span></a>").join("");

  learningDetailContainer.innerHTML = `
    <div class="learning-detail-hero complete-topic-hero">
      <a class="mini-link" href="#learning-lab" data-page-link="learning-lab">Kembali ke Learning Lab</a>
      <p class="eyebrow">Complete Topic 1 / AI Foundations</p>
      <h2>${path.title}</h2>
      <p>Perjalanan belajar mandiri untuk memahami AI sebagai cara menyelesaikan masalah: merumuskan tujuan, menjelajahi ruang solusi, belajar dari pengalaman, menguji keputusan, lalu membawa sistem ke dunia nyata.</p>
      <div class="learning-detail-meta"><span>${path.level}</span><span>${path.duration}</span><span>7 modul</span><span>9 lab interaktif</span></div>
      <div class="topic-outcomes"><div><small>Outcome 01</small><b>Memahami AI, agent, problem solving, dan pilihan algoritma.</b></div><div><small>Outcome 02</small><b>Membandingkan search dan machine learning dari bentuk masalahnya.</b></div><div><small>Outcome 03</small><b>Menyusun workflow AI dari data hingga deployment dan monitoring.</b></div></div>
    </div>

    <div class="learning-detail-layout complete-topic-layout">
      <aside class="learning-rail" aria-label="Complete Topic 1 modules"><div class="learning-rail-label">Peta modul lengkap</div>${moduleLinks}<p>Modul ini ditulis ulang sebagai pengalaman belajar mandiri dengan analogi, visual, dan eksperimen orisinal.</p></aside>
      <div class="learning-content">
        <section id="module-01" class="learning-module complete-topic-module"><div class="module-heading"><small>Module 01 / AI Landscape</small><h3>AI dimulai dari cara melihat masalah</h3><p>Bayangkan kamu memberi instruksi kepada seseorang yang sangat cepat menghitung, tetapi tidak bisa menebak maksudmu. Tantangan pertama bukan memilih algoritma, melainkan menjelaskan tujuan dan batasannya.</p></div><div class="core-idea"><span>Gagasan inti</span><p>Artificial Intelligence adalah bidang yang membuat sistem komputasi mampu membantu memahami keadaan dan memilih tindakan untuk mencapai tujuan. Problem solving adalah cara mengubah tantangan menjadi tujuan, pilihan, dan langkah yang dapat diuji.</p></div><div class="ai-definition-strip"><div><small>Artificial Intelligence</small><b>Sistem yang membantu mengambil keputusan berdasarkan informasi dan tujuan.</b></div><div><small>Problem Solving</small><b>Proses memecah masalah menjadi keadaan awal, pilihan, batasan, dan kondisi berhasil.</b></div><div><small>AI Agent</small><b>Entitas yang mengamati lingkungan lalu memilih tindakan.</b></div></div><div class="agent-type-row"><div><small>Reflex Agent</small><h4>Reaksi langsung dari aturan</h4><p>Agent merespons kondisi yang terlihat menggunakan aturan tetap. Seperti thermostat: suhu melewati batas, pendingin menyala.</p></div><div><small>Problem-Solving Agent</small><h4>Menimbang sebelum bertindak</h4><p>Agent memahami situasi, membandingkan beberapa alternatif, memilih langkah yang masuk akal, lalu menilai hasilnya.</p></div></div><div class="topic-agent-loop"><div><small>01</small><b>Observe</b><span>Amati lingkungan.</span></div><i></i><div><small>02</small><b>Represent</b><span>Susun bukti.</span></div><i></i><div><small>03</small><b>Decide</b><span>Pilih tindakan.</span></div><i></i><div><small>04</small><b>Act</b><span>Uji dampaknya.</span></div></div></section>

        <section id="module-02" class="learning-module complete-topic-module"><div class="module-heading"><small>Module 02 / Problem Solving</small><h3>Sebelum mencari solusi, bentuk dulu ruang masalahnya</h3><p>Rute kurir, jadwal kuliah, dan prediksi keterlambatan punya bentuk berbeda. Kita perlu mengetahui bentuknya sebelum menentukan teknik AI.</p></div><div class="problem-solving-steps topic-problem-steps"><div><small>01</small><b>Pemetaan Awal</b><span>Bagaimana bentuk informasi awal, target utama, hasil akhir, serta batasan yang ada</span></div><div><small>02</small><b>Timbang Pilihan </b><span>Pilihan jalan apa saja yang bisa diambil, dan apa risiko dari masing-masing pilihan itu?</span></div><div><small>03</small><b>Pemetaan Informasi</b><span>Bagaimana cara kita menyusun semua informasi yang ada ke dalam bentuk grafik, tabel, atau variabel pendukung?</span></div><div><small>04</small><b>Penerapan Metode</b><span>Metode mana yang cocok dengan bentuk masalah?</span></div><div><small>05</small><b>Cek Hasil Akhir</b><span>Apakah cara ini benar-benar bisa menyelesaikan masalah dan memberikan hasil yang kita harapkan?</span></div></div><div class="technique-cloud topic-technique-cloud"><div><small>Search</small><b>BFS, DFS, A*</b><span>Menjelajah ruang keadaan menuju tujuan.</span></div><div><small>CSP</small><b>Constraint Satisfaction</b><span>Mencari solusi yang memenuhi aturan dan batasan.</span></div><div><small>Optimization</small><b>Best possible option</b><span>Mengejar pilihan paling efisien.</span></div><div><small>Machine Learning</small><b>Learn from examples</b><span>Menemukan pola dari pengalaman.</span></div><div><small>NLP</small><b>Work with language</b><span>Memahami dan menghasilkan bahasa manusia.</span></div></div><div class="applied-example topic-scenario-example"><small>Contoh kasus</small><p>Toko online ingin mengurangi keterlambatan. Variabel yang relevan dapat berupa jarak pengiriman, tipe kurir, berat barang, waktu pemesanan, dan status terlambat: tepat waktu atau terlambat.</p></div></section>

        <section id="module-03" class="learning-module complete-topic-module"><div class="module-heading"><small>Module 03 / Uninformed Search</small><h3>Jelajahi kemungkinan tanpa petunjuk tambahan</h3><p>Uninformed search hanya memakai definisi masalah. BFS menyebar per lapisan, sedangkan DFS masuk sedalam mungkin sebelum kembali.</p></div><div class="search-comparison topic-search-grid"><div><span class="method-mark breadth">BFS</span><h4>Breadth-First Search</h4><p>Menggunakan queue dan mengeksplorasi tetangga berdasarkan lapisan. Pada graph tanpa bobot, jalur pertama yang ditemukan adalah jalur dengan langkah paling sedikit.</p><small>Lebih banyak memori</small></div><div><span class="method-mark depth">DFS</span><h4>Depth-First Search</h4><p>Menggunakan stack atau rekursi dan mengejar satu cabang hingga dalam. Solusi pertama belum tentu jalur terpendek.</p><small>Biasanya lebih hemat memori</small></div><div><span class="method-mark heuristic">State</span><h4>State space</h4><p>Setiap posisi menjadi keadaan, perpindahan menjadi aksi, dan goal menjadi kondisi akhir. Visited set mencegah node diproses berulang.</p><small>Aturan masalah menjadi peta</small></div></div><div class="topic-application-heading"><small>Contoh penerapan search</small><p>Konsep BFS dan DFS tidak hanya muncul di maze. Pola yang sama dipakai ketika sistem harus menjelajahi banyak kemungkinan langkah.</p></div><div class="topic-application-band"><div><small>Pathfinding</small><b>Navigasi & robotika</b><span>Menemukan rute yang bisa dilalui.</span></div><div><small>Puzzle</small><b>8-puzzle & 15-puzzle</b><span>Mencari urutan langkah.</span></div><div><small>Game AI</small><b>Game tree</b><span>Menjelajah kemungkinan strategi.</span></div><div><small>Web crawling</small><b>Page exploration</b><span>Mengikuti hubungan antarhalaman.</span></div></div><div class="topic-maze-comparison"><article data-topic-maze="bfs"><div class="lab-toolbar"><div><small>Eksperimen A</small><h4>BFS Explorer</h4></div><div class="lab-actions"><button type="button" class="lab-button primary-lab-button" data-topic-maze-run="bfs">Run BFS</button><button type="button" class="lab-icon-button" data-topic-maze-reset="bfs">Reset</button></div></div><div class="topic-maze-grid" data-topic-maze-grid role="img" aria-label="BFS maze"></div><div class="topic-maze-stats"><span>Node dikunjungi <b data-topic-maze-visited>0</b></span><span>Panjang jalur <b data-topic-maze-path>-</b></span></div><p data-topic-maze-status>Siap dijalankan.</p></article><article data-topic-maze="dfs"><div class="lab-toolbar"><div><small>Eksperimen B</small><h4>DFS Explorer</h4></div><div class="lab-actions"><button type="button" class="lab-button primary-lab-button" data-topic-maze-run="dfs">Run DFS</button><button type="button" class="lab-icon-button" data-topic-maze-reset="dfs">Reset</button></div></div><div class="topic-maze-grid" data-topic-maze-grid role="img" aria-label="DFS maze"></div><div class="topic-maze-stats"><span>Node dikunjungi <b data-topic-maze-visited>0</b></span><span>Panjang jalur <b data-topic-maze-path>-</b></span></div><p data-topic-maze-status>Siap dijalankan.</p></article></div></section>

        <section id="module-04" class="learning-module complete-topic-module"><div class="module-heading"><small>Module 04 / Informed Search</small><h3>Gunakan heuristik untuk bergerak lebih terarah</h3><p>Kalau ruang solusi sangat besar, sistem bisa memakai perkiraan jarak ke tujuan. Petunjuk ini disebut heuristik.</p></div><div class="informed-search-grid"><div><span class="method-mark heuristic">GBFS</span><h4>Greedy Best-First Search</h4><p>Memilih node yang terlihat paling dekat dengan tujuan. Cepat, tetapi tidak selalu memilih rute terbaik.</p></div><div><span class="method-mark breadth">A*</span><h4>A* Search</h4><p>Menggabungkan biaya yang sudah ditempuh dan estimasi sisa perjalanan. Ia menyeimbangkan pengalaman perjalanan dengan arah tujuan.</p></div></div><div class="heuristic-equation"><span>Prioritas node</span><strong>f(n) = g(n) + h(n)</strong><p><b>g(n)</b> adalah biaya dari awal; <b>h(n)</b> adalah perkiraan biaya menuju tujuan. Visual jalur di bawah memisahkan biaya nyata dan estimasi.</p></div><div class="astar-path-visual" aria-label="A star path cost visual"><span class="astar-start">Start</span><i class="astar-g">g(n) / Biaya yang Sudah Dikeluarkan</i><i class="astar-h">h(n) / Perkiraan Sisa Biaya</i><span class="astar-goal">Goal</span></div><div class="topic-application-heading"><small>Di mana informed search dipakai?</small><p>Heuristik membantu sistem memilih arah yang lebih menjanjikan ketika jumlah kemungkinan terlalu besar untuk dicoba satu per satu.</p></div><div class="topic-application-band"><div><small>Navigation</small><b>GPS & peta digital</b><span>Memprioritaskan rute menjanjikan.</span></div><div><small>Games</small><b>Catur & Go</b><span>Menilai langkah terbaik.</span></div><div><small>Robotics</small><b>Gerak otonom</b><span>Menghindari rintangan.</span></div><div><small>Planning</small><b>Scheduling & logistics</b><span>Mengatur resource.</span></div></div><div class="interactive-lab topic-search-choice-lab"><div class="lab-toolbar"><div><small>Lab interaktif 03</small><h4>Choose the Search Strategy</h4></div></div><div class="choice-controls"><label><span>Skenario</span><select id="topic-search-scenario"><option value="heuristic">Ruang keadaan besar dan ada estimasi jarak ke tujuan.</option><option value="shortest">Graph tanpa bobot dan butuh jumlah langkah paling sedikit.</option><option value="memory">Eksplorasi satu cabang dengan memori terbatas.</option></select></label><label><span>Pilihanmu</span><select id="topic-search-answer"><option value="">Pilih algoritma</option><option value="astar">A* Search</option><option value="bfs">BFS</option><option value="dfs">DFS</option></select></label><button type="button" class="lab-button primary-lab-button" data-topic-search-check>Cek jawaban</button></div><p id="topic-search-feedback" class="lab-status">Pilih algoritma berdasarkan bukti pada skenario.</p></div></section>

        <section id="module-05" class="learning-module complete-topic-module"><div class="module-heading"><small>Module 05 / Machine Learning</small><h3>Ketika aturan terlalu banyak, biarkan pengalaman membantu</h3><p>Machine learning membuat sistem belajar dari data. Namun kata belajar baru bermakna jika kita jelas tentang task, experience, dan performance.</p></div><div class="ml-evidence-grid"><div><small>Task / T</small><h4>Apa yang dilakukan?</h4><p>Sistem keamanan memeriksa setiap transaksi baru yang masuk dan menandainya sebagai "aman" atau "penipuan".</p></div><div><small>Experience / E</small><h4>Dari mana belajar?</h4><p>Sistem mempelajari riwayat data transaksi lama yang sudah terbukti aman maupun yang pernah dilaporkan sebagai kasus penipuan.</p></div><div><small>Performance / P</small><h4>Bagaimana diukur?</h4><p>Menggunakan tingkat akurasi untuk menghitung seberapa banyak transaksi mencurigakan yang berhasil diblokir dengan tepat tanpa salah memblokir transaksi pengguna asli.</p></div></div><div class="core-idea topic-mitchell-note"><span>Definisi kerja</span><p>Sebuah sistem komputer bisa dikatakan benar-benar "belajar" jika kemampuannya dalam menyelesaikan tugas menjadi lebih baik setelah diberikan lebih banyak data atau pengalaman, dan peningkatan tersebut bisa dibuktikan lewat alat ukur performa yang jelas.</p></div><div class="ml-vocabulary-row"><span><b>Training set</b> kumpulan data latihan</span><span><b>Instance / sample</b> satu contoh data</span><span><b>Model</b> pola yang menghasilkan prediksi, misalnya Random Forest atau Neural Network</span></div><div class="topic-approach-tabs"><div class="topic-tab-list" role="tablist"><button type="button" class="topic-tab active" data-topic-approach="traditional">Traditional</button><button type="button" class="topic-tab" data-topic-approach="machine">Machine Learning</button><button type="button" class="topic-tab" data-topic-approach="adaptive">Adaptive</button></div><div id="topic-approach-panel" class="topic-approach-panel"></div></div></section>

        <section id="module-06" class="learning-module complete-topic-module"><div class="module-heading"><small>Module 06 / Learning Approaches</small><h3>Pilih jenis learning dari bukti yang tersedia</h3><p>Label, reward, dan jumlah data tanpa anotasi akan mengubah cara sistem belajar. Pertanyaan yang tepat membantu memilih pendekatan yang tepat.</p></div><div class="topic-learning-modes"><div><span class="mode-number">01</span><small>Target tersedia</small><h4>Supervised Learning</h4><p>Belajar dari pasangan input dan label untuk klasifikasi atau regresi.</p><b>Contoh: prediksi keterlambatan.</b></div><div><span class="mode-number">02</span><small>Label belum ada</small><h4>Unsupervised Learning</h4><p>Sistem bekerja untuk memetakan kelompok atau menemukan pola tersembunyi yang tidak terlihat langsung, termasuk menyederhanakan data yang rumit agar lebih mudah dibaca kinerjanya.</p><b>Contoh: segmentasi produk.</b></div><div><span class="mode-number">03</span><small>Ada reward</small><h4>Reinforcement Learning</h4><p>Agent belajar melalui aksi, reward, dan penalti.</p><b>Contoh: memilih rute.</b></div><div><span class="mode-number">04</span><small>Label terbatas</small><h4>Semi / Self-supervised</h4><p>Semi-supervised memadukan sedikit data berlabel dengan data tanpa label. Self-supervised membuat target belajarnya sendiri dari data tersebut.</p><b>Contoh: Membaca ribuan novel tanpa kamus (Self), lalu memastikan artinya lewat 5 kata kunci di kamus (Semi).</b></div></div><div class="interactive-lab choice-lab"><div class="lab-toolbar"><div><small>Lab interaktif 04</small><h4>Choose the Learning Type</h4></div></div><div class="choice-controls"><label><span>Skenario</span><select id="topic-learning-scenario"><option value="cluster">Kelompokkan data tanpa label awal.</option><option value="regression">Prediksi waktu pengiriman dari histori.</option><option value="reinforcement">Ajari agent memilih aksi melalui reward.</option></select></label><label><span>Pilihanmu</span><select id="topic-learning-answer"><option value="">Pilih pendekatan</option><option value="supervised">Supervised</option><option value="unsupervised">Unsupervised</option><option value="reinforcement">Reinforcement</option></select></label><button type="button" class="lab-button primary-lab-button" data-topic-learning-check>Cek jawaban</button></div><p id="topic-learning-feedback" class="lab-status">Pilih pendekatan yang paling sesuai dengan skenario.</p></div></section>

        <section id="module-07" class="learning-module complete-topic-module"><div class="module-heading"><small>Module 07 / End-to-End Workflow</small><h3>Model selesai bukan berarti project selesai</h3><p>Sistem yang benar-benar berguna menghubungkan data, keputusan, interface, evaluasi, dan monitoring.</p></div><div class="workflow-story topic-full-workflow"><span>Problem</span><i></i><span>Data</span><i></i><span>Explore</span><i></i><span>Prepare</span><i></i><span>Model</span><i></i><span>Evaluate</span><i></i><span>Deploy</span><i></i><span>Monitor</span></div><div class="topic-retrain-loop"><div><small>Can be automated</small><b>Retrain loop</b><span>Data baru masuk, performa dipantau, lalu model dipertimbangkan untuk diperbarui.</span></div><i></i><div><small>Human decision</small><b>Review the risk</b><span>Angka tidak menggantikan keputusan; admin tetap perlu memahami konteks dan konsekuensi.</span></div></div><div class="delay-workflow-module topic-delay-case"><div class="module-heading"><small>Case walkthrough / Delivery delay</small><h3>From order data to a decision signal</h3><p>Tujuan: memprediksi apakah order berisiko terlambat sebelum dikirim.</p></div><div class="delay-case-grid"><div class="delay-case-card delay-context"><small>Variables</small><h4>Jarak, tipe kurir, berat, waktu pesan, status terlambat.</h4><p>Fitur numerik dan kategorikal ini menjadi bukti untuk membaca risiko order.</p><div class="delay-tool-row"><span>Python</span><span>Pandas</span><span>Scikit-learn</span></div></div><div class="delay-case-card delay-model"><small>Decision output</small><h4>Risiko tepat waktu atau terlambat.</h4><p>Jika sinyal risiko tinggi, admin dapat mengganti kurir atau memberi prioritas penanganan.</p></div></div><div class="delay-storyline"><div><small>01</small><b>Preprocessing</b><span>Bersihkan data kosong/duplikat, encode tipe kurir, normalkan jarak dan berat, lalu split train 80% dan test 20%.</span></div><i></i><div><small>02</small><b>Pemodelan</b><span>Logistic Regression mudah dijelaskan; Random Forest kuat untuk hubungan non-linear. Keduanya dilatih pada data training.</span></div><i></i><div><small>03</small><b>Evaluasi</b><span>Baca accuracy, precision, recall, dan confusion matrix. Contoh target: accuracy 85% dan recall terlambat 0.80.</span></div><i></i><div><small>04</small><b>Deployment</b><span>Model disajikan melalui service atau API, dapat dibungkus dalam container, lalu dihubungkan ke antarmuka pemesanan pada lingkungan lokal atau platform publik.</span></div></div><div class="topic-deployment-stack"><div><small>Serve</small><b>Model service</b><span>Model menerima input dan mengembalikan prediksi.</span></div><div><small>Connect</small><b>API + interface</b><span>Pengguna dapat meminta hasil tanpa membuka notebook.</span></div><div><small>Operate</small><b>Container + runtime</b><span>Lingkungan aplikasi dibuat konsisten saat dipindahkan.</span></div></div></div><div class="topic-practicum-board"><div><small>Praktikum</small><h4>Build the path</h4><p>Gunakan queue untuk BFS atau stack/rekursi untuk DFS, simpan path, dan cegah pengulangan dengan visited set.</p></div><div><small>Visual evidence</small><h4>Make it visible</h4><p>Jalan putih, tembok hitam, jalur hijau, start kuning, goal ungu. Warna membuat strategi search terbaca.</p></div><div><small>Reflection</small><h4>Compare the result</h4><p>Ubah BFS menjadi DFS, bandingkan jalurnya, dan diskusikan apakah DFS selalu menemukan jalur terpendek.</p></div></div></section>

        <section class="learning-module knowledge-module"><div class="module-heading"><small>Final Synthesis</small><h3>Satu peta berpikir untuk dibawa pulang</h3></div><div class="topic-summary-band"><strong>Define -> Represent -> Search or Learn -> Evaluate -> Deploy responsibly.</strong><p>AI bukan hanya memilih algoritma. Solusi yang kuat dimulai dari masalah yang tepat, memakai data yang dipahami, diuji dengan metrik yang relevan, lalu dipantau ketika berhadapan dengan dunia nyata.</p></div><div class="knowledge-list"><details><summary>Kapan search lebih cocok daripada machine learning?</summary><p>Search cocok ketika keadaan, aksi, dan tujuan dapat didefinisikan dengan jelas. Machine learning lebih cocok ketika aturan sulit ditulis tetapi tersedia cukup pengalaman.</p></details><details><summary>Apakah DFS selalu menghasilkan jalur terpendek?</summary><p>Tidak. DFS mengutamakan kedalaman. Pada graph tanpa bobot, BFS lebih tepat jika tujuan utamanya adalah jumlah langkah paling sedikit.</p></details><details><summary>Kenapa deployment membutuhkan monitoring?</summary><p>Data dan perilaku lingkungan dapat berubah. Monitoring membantu menemukan penurunan performa dan menentukan kapan model perlu diperbarui.</p></details></div></section>
        <section class="learning-sources"><div><small>Learning integrity</small><h3>Independent synthesis, built for learning.</h3><p>Modul ini ditulis ulang sebagai pengalaman belajar mandiri. Narasi, analogi, visual, dan interaksinya dirancang khusus untuk materi ini.</p></div><div class="source-links"><a href="https://aima.cs.berkeley.edu/" target="_blank" rel="noreferrer">AI: A Modern Approach resources</a><a href="https://scikit-learn.org/stable/user_guide.html" target="_blank" rel="noreferrer">Scikit-learn User Guide</a><a href="https://developers.google.com/machine-learning/glossary" target="_blank" rel="noreferrer">Google ML Glossary</a></div></section>
      </div>
    </div>
  `;

  injectTopicStudio();
  applyTopicOneCopyPolish();
  initializeTopicOneInteractions();
}

function renderLearningDetail() {
  renderTopicOneCompleteLearningDetail();
}

function renderArchivedFoundationsDetail() {
  const path = learningPaths["topic-1-complete"];
  const moduleLinks = path.modules
    .map(
      ([number, title]) => `
        <a href="#module-${number}" data-module-link="module-${number}">
          <small>${number}</small>
          <span>${title}</span>
        </a>`,
    )
    .join("");

  learningDetailContainer.innerHTML = `
    <div class="learning-detail-hero">
      <a class="mini-link" href="#learning-lab" data-page-link="learning-lab">Kembali ke Learning Lab</a>
      <p class="eyebrow">Foundational Learning Path</p>
      <h2>${path.title}</h2>
      <p>
        Pelajari AI sebagai proses pemecahan masalah: mulai dari agent yang
        mengamati lingkungan, pencarian solusi, pembelajaran dari data, sampai
        workflow project yang siap diterapkan ke sistem nyata.
      </p>
      <div class="learning-detail-meta">
        <span>${path.level}</span>
        <span>${path.duration}</span>
        <span>4 modul</span>
        <span>4 lab interaktif</span>
      </div>
    </div>

    <div class="learning-detail-layout">
      <aside class="learning-rail" aria-label="Learning modules">
        <div class="learning-rail-label">Isi jalur belajar</div>
        ${moduleLinks}
        <p>
          Catatan belajar mandiri dengan penjelasan, contoh, diagram, dan
          interaksi yang ditulis ulang secara orisinal.
        </p>
      </aside>

      <div class="learning-content">
        <section id="module-01" class="learning-module">
          <div class="module-heading">
            <small>Module 01 / Foundations</small>
            <h3>Think Like an AI System</h3>
            <p>AI menjadi berguna ketika sebuah tujuan dapat diterjemahkan menjadi keputusan yang bisa dijalankan oleh sistem.</p>
          </div>

          <div class="core-idea">
            <span>Ide utama</span>
            <p>AI bukan sekadar model. Ia adalah sistem yang menerima informasi, menilai keadaan, memilih tindakan, dan mengukur apakah tindakannya mendekatkan sistem pada tujuan.</p>
          </div>

          <div class="ai-definition-strip">
            <div>
              <small>Artificial Intelligence</small>
              <b>Sistem yang meniru proses berpikir untuk membantu menyelesaikan masalah.</b>
            </div>
            <div>
              <small>Problem Solving</small>
              <b>Mengubah tantangan menjadi tujuan, batasan, pilihan, dan strategi penyelesaian.</b>
            </div>
            <div>
              <small>AI Agent</small>
              <b>Entitas yang membaca lingkungan lalu memilih tindakan untuk mencapai tujuan.</b>
            </div>
          </div>

          <div class="agent-loop" aria-label="AI agent decision loop">
            <div><small>01</small><b>Observe</b><span>Membaca kondisi dan input.</span></div>
            <i></i>
            <div><small>02</small><b>Reason</b><span>Menimbang beberapa pilihan.</span></div>
            <i></i>
            <div><small>03</small><b>Act</b><span>Menjalankan keputusan.</span></div>
            <i></i>
            <div><small>04</small><b>Learn</b><span>Mengevaluasi hasil tindakan.</span></div>
          </div>

          <div class="agent-type-row">
            <div>
              <small>Reflex Agent</small>
              <h4>Bereaksi cepat dengan aturan tetap</h4>
              <p>Cocok untuk kondisi sederhana yang responsnya sudah jelas, seperti sistem yang langsung menyalakan atau mematikan perangkat berdasarkan batas tertentu.</p>
            </div>
            <div>
              <small>Problem-Solving Agent</small>
              <h4>Menimbang alternatif sebelum bertindak</h4>
              <p>Cocok ketika sistem perlu memahami situasi, membandingkan beberapa opsi, memilih tindakan paling masuk akal, lalu mengevaluasi hasilnya.</p>
            </div>
          </div>

          <div class="concept-columns">
            <div>
              <small>Agent</small>
              <h4>Siapa yang membuat keputusan?</h4>
              <p>Program, model, atau perangkat yang memilih tindakan berdasarkan informasi yang tersedia.</p>
            </div>
            <div>
              <small>Environment</small>
              <h4>Di mana keputusan terjadi?</h4>
              <p>Kondisi di luar agent, seperti data retail, lalu lintas, pengguna, atau ruang permainan.</p>
            </div>
            <div>
              <small>Tujuan dan batasan</small>
              <h4>Apa hasil yang dianggap baik?</h4>
              <p>Target yang ingin dicapai beserta batasan biaya, waktu, risiko, dan sumber daya.</p>
            </div>
          </div>

          <div class="applied-example">
            <small>Contoh mandiri</small>
            <p>Sebuah sistem AI bisa dipahami sebagai rangkaian keputusan: ia membaca situasi, memilih respons yang paling masuk akal, lalu memakai hasilnya sebagai bahan evaluasi. Cara berpikir ini berlaku untuk banyak konteks, mulai dari pencarian rute, rekomendasi konten, sampai analisis data.</p>
          </div>
        </section>

        <section id="module-02" class="learning-module">
          <div class="module-heading">
            <small>Module 02 / Search</small>
            <h3>Explore Possible Solutions</h3>
            <p>Ketika jawaban belum diketahui, sistem dapat menjelajahi beberapa keadaan sampai menemukan jalur menuju tujuan.</p>
          </div>

          <div class="search-comparison">
            <div>
              <span class="method-mark breadth">BFS</span>
              <h4>Breadth-First Search</h4>
              <p>Menjelajah lapis demi lapis. Cocok ketika kita ingin menemukan jalur dengan jumlah langkah paling sedikit pada graph tanpa bobot.</p>
              <small>Kebutuhan memori: lebih tinggi</small>
            </div>
            <div>
              <span class="method-mark depth">DFS</span>
              <h4>Depth-First Search</h4>
              <p>Menyusuri satu arah sedalam mungkin sebelum kembali. Berguna untuk eksplorasi, tetapi tidak menjamin jalur terpendek.</p>
              <small>Kebutuhan memori: biasanya lebih rendah</small>
            </div>
            <div>
              <span class="method-mark heuristic">A*</span>
              <h4>Heuristic Search</h4>
              <p>Menggunakan perkiraan jarak ke tujuan untuk memprioritaskan pilihan yang terlihat lebih menjanjikan.
              
              </p>
              <small>Membutuhkan perkiraan arah yang berguna</small>
            </div>
          </div>

          <div class="technique-cloud" aria-label="AI problem solving techniques">
            <div><small>Search</small><b>BFS, DFS, A*</b><span>Menjelajahi ruang solusi untuk menemukan jalur menuju tujuan.</span></div>
            <div><small>CSP</small><b>Constraint Satisfaction</b><span>Mencari solusi yang memenuhi batasan, misalnya jadwal, aturan, atau kombinasi pilihan.</span></div>
            <div><small>Optimization</small><b>Best possible option</b><span>Mencari pilihan paling efisien berdasarkan biaya, waktu, keuntungan, atau batas sumber daya.</span></div>
            <div><small>Machine Learning</small><b>Learn from data</b><span>Membangun pola dari pengalaman agar sistem dapat memprediksi atau mengelompokkan kasus baru.</span></div>
            <div><small>NLP</small><b>Language understanding</b><span>Membantu sistem memahami, mengolah, dan menghasilkan bahasa manusia.</span></div>
          </div>

          <div class="interactive-lab search-lab">
            <div class="lab-toolbar">
              <div>
                <small>Lab interaktif</small>
                <h4>BFS vs DFS Maze Explorer</h4>
              </div>
              <div class="lab-actions" aria-label="Search controls">
                <button type="button" class="lab-button active" data-search-mode="bfs">BFS</button>
                <button type="button" class="lab-button" data-search-mode="dfs">DFS</button>
                <button type="button" class="lab-icon-button" data-search-step aria-label="Tampilkan langkah pencarian berikutnya">Next</button>
                <button type="button" class="lab-icon-button" data-search-run>Run</button>
                <button type="button" class="lab-icon-button" data-search-reset>Reset</button>
              </div>
            </div>
            <div class="maze-stage">
              <div id="maze-grid" class="maze-grid" role="img" aria-label="Six by six maze from start to goal"></div>
              <div class="maze-legend">
                <span><i class="legend-start"></i>Start</span>
                <span><i class="legend-goal"></i>Tujuan</span>
                <span><i class="legend-visited"></i>Dijelajahi</span>
                <span><i class="legend-path"></i>Jalur akhir</span>
              </div>
            </div>
            <p id="search-status" class="lab-status" aria-live="polite">Pilih BFS atau DFS, lalu amati proses eksplorasinya langkah demi langkah.</p>
          </div>
        </section>

        <section id="module-03" class="learning-module">
          <div class="module-heading">
            <small>Module 03 / Machine Learning</small>
            <h3>Learn From Data</h3>
            <p>Pendekatan machine learning dipilih berdasarkan jenis pengalaman yang tersedia dan bentuk keputusan yang ingin dihasilkan.</p>
          </div>

          <div class="learning-types">
            <div><small>Jawaban tersedia</small><h4>Supervised</h4><p>Belajar dari contoh yang memiliki target untuk memprediksi kelas atau nilai baru.</p></div>
            <div><small>Struktur tersembunyi</small><h4>Unsupervised</h4><p>Mencari pola, kelompok, atau struktur ketika label jawaban belum tersedia.</p></div>
            <div><small>Aksi dan umpan balik</small><h4>Reinforcement</h4><p>Belajar memilih tindakan melalui reward dan konsekuensi dari interaksi.</p></div>
            <div><small>Label terbatas</small><h4>Semi / Self-supervised</h4><p>Memanfaatkan data tanpa label untuk membangun representasi sebelum tugas utama.</p></div>
          </div>

          <div class="ml-evidence-grid">
            <div>
              <small>Task</small>
              <h4>Apa yang harus dilakukan?</h4>
              <p>Contoh: menandai email sebagai spam atau bukan spam, memprediksi waktu pengiriman, atau mengenali kategori produk.</p>
            </div>
            <div>
              <small>Experience</small>
              <h4>Dari mana sistem belajar?</h4>
              <p>Model belajar dari data historis, seperti contoh email, transaksi, pengiriman, gambar, atau catatan pengguna.</p>
            </div>
            <div>
              <small>Performance</small>
              <h4>Bagaimana kualitasnya diukur?</h4>
              <p>Kinerja dinilai dengan metrik seperti accuracy, recall, RMSE, F1 score, atau indikator lain yang sesuai dengan tujuan.</p>
            </div>
          </div>

          <div class="ml-vocabulary-row">
            <span><b>Training set</b> data untuk melatih model</span>
            <span><b>Sample</b> satu contoh data</span>
            <span><b>Model</b> pola yang dipakai untuk prediksi</span>
          </div>

          <div class="approach-ladder">
            <div><small>Traditional programming</small><p>Manusia menulis aturan secara eksplisit, lalu komputer mengikuti aturan tersebut.</p></div>
            <div><small>Machine learning</small><p>Manusia menyediakan data dan target, lalu model mempelajari pola dari contoh.</p></div>
            <div><small>Adaptive system</small><p>Sistem dipantau dan diperbarui ketika data atau perilaku pengguna mulai berubah.</p></div>
          </div>

          <div class="interactive-lab choice-lab">
            <div class="lab-toolbar">
              <div><small>Lab interaktif</small><h4>Choose the Learning Type</h4></div>
            </div>
            <div class="choice-controls">
              <label>
                <span>Skenario</span>
                <select id="learning-scenario">
                  <option value="cluster">Kelompokkan produk berdasarkan pola penjualan tanpa label awal.</option>
                  <option value="regression">Prediksi waktu pengiriman dalam menit dari data historis.</option>
                  <option value="reinforcement">Ajari agent memilih rute melalui reward dan penalti.</option>
                </select>
              </label>
              <label>
                <span>Jawabanmu</span>
                <select id="learning-answer">
                  <option value="">Pilih pendekatan</option>
                  <option value="supervised">Supervised Learning</option>
                  <option value="unsupervised">Unsupervised Learning</option>
                  <option value="reinforcement">Reinforcement Learning</option>
                </select>
              </label>
              <button type="button" class="lab-button primary-lab-button" data-check-learning>Cek jawaban</button>
            </div>
            <p id="learning-feedback" class="lab-status" aria-live="polite">Baca skenario, lalu pilih jenis pembelajaran yang paling sesuai.</p>
          </div>
        </section>

        <section id="module-04" class="learning-module">
          <div class="module-heading">
            <small>Module 04 / Delivery</small>
            <h3>Build and Evaluate an AI Project</h3>
            <p>Model hanyalah satu bagian dari sistem. Nilai project muncul ketika masalah, data, evaluasi, interface, dan monitoring saling terhubung.</p>
          </div>

          <div class="problem-solving-steps">
            <div><small>01</small><b>Definisikan masalah</b><span>Tentukan input, batasan, tujuan, dan keputusan yang ingin dibantu.</span></div>
            <div><small>02</small><b>Analisis pilihan</b><span>Pahami opsi solusi, risiko, dan kondisi yang membatasi sistem.</span></div>
            <div><small>03</small><b>Representasikan pengetahuan</b><span>Ubah informasi menjadi tabel, graph, fitur numerik, atau struktur lain yang bisa diolah.</span></div>
            <div><small>04</small><b>Pilih metode</b><span>Gunakan search, machine learning, optimisasi, atau pendekatan lain sesuai bentuk masalah.</span></div>
            <div><small>05</small><b>Uji dan evaluasi</b><span>Pastikan solusi tidak hanya berjalan, tetapi memenuhi kebutuhan dan batas risiko.</span></div>
          </div>

          <div class="workflow-story" aria-label="AI project workflow">
            <span>Problem</span><i></i>
            <span>Data</span><i></i>
            <span>Explore</span><i></i>
            <span>Prepare</span><i></i>
            <span>Model</span><i></i>
            <span>Evaluate</span><i></i>
            <span>Deploy</span>
          </div>

          <div class="delay-workflow-module compact-delay-case">
            <div class="module-heading">
              <small>Applied Case / Delivery Delay</small>
              <h3>From Order Data to Delay-Risk Prediction</h3>
              <p>Contoh ini menunjukkan bagaimana workflow AI/ML bekerja dari data pesanan sampai menjadi sinyal keputusan untuk admin.</p>
            </div>
            <div class="delay-storyline" aria-label="Delivery delay prediction workflow">
              <div><small>01</small><b>Data Preprocessing</b><span>Data kosong atau duplikat dibersihkan, tipe kurir diubah menjadi fitur numerik, jarak dan berat dinormalisasi, lalu data dibagi menjadi train 80% dan test 20%.</span></div><i></i>
              <div><small>02</small><b>Modeling</b><span>Logistic Regression cocok sebagai baseline yang mudah dijelaskan, sedangkan Random Forest lebih fleksibel untuk pola non-linear.</span></div><i></i>
              <div><small>03</small><b>Evaluation</b><span>Accuracy melihat prediksi benar secara umum, precision dan recall membantu membaca kualitas deteksi keterlambatan, dan confusion matrix memperlihatkan jenis kesalahan.</span></div><i></i>
              <div><small>04</small><b>Deployment</b><span>Prediksi masuk ke sistem pemesanan sehingga admin bisa mengganti kurir, memprioritaskan order, atau memberi estimasi waktu yang lebih aman.</span></div>
            </div>
            <div class="delay-case-grid">
              <div class="delay-case-card delay-context">
                <small>Data yang dibaca</small>
                <h4>Jarak, tipe kurir, berat, waktu pesan, dan status terlambat.</h4>
                <p>Fitur-fitur ini menjadi bukti yang membantu sistem menilai apakah sebuah pengiriman berisiko terlambat sebelum pesanan benar-benar dikirim.</p>
                <div class="delay-tool-row"><span>Python</span><span>Pandas</span><span>Scikit-learn</span></div>
              </div>
              <div class="interactive-lab delay-risk-lab">
                <div class="lab-toolbar"><div><small>Lab interaktif</small><h4>Delay Risk Simulator</h4></div><span class="lab-kicker">Ilustrasi klasifikasi</span></div>
                <div class="delay-risk-layout">
                  <div class="delay-controls">
                    <label><span>Jarak pengiriman <b id="delay-distance-value">24 km</b></span><input id="delay-distance" type="range" min="2" max="80" step="1" value="24"></label>
                    <label><span>Berat paket <b id="delay-weight-value">8 kg</b></span><input id="delay-weight" type="range" min="1" max="40" step="1" value="8"></label>
                    <label><span>Tipe kurir</span><select id="delay-courier"><option value="standard">Standard courier</option><option value="express">Express courier</option><option value="economy">Economy courier</option></select></label>
                  </div>
                  <div class="delay-risk-output">
                    <small>Prediksi risiko</small>
                    <strong id="delay-risk-label">Medium</strong>
                    <div class="risk-meter" aria-label="Delay risk meter"><span id="delay-risk-bar"></span></div>
                    <p id="delay-risk-copy">Risiko sedang: cek kapasitas kurir dan beri estimasi waktu yang realistis.</p>
                  </div>
                </div>
                <p class="lab-disclaimer">Simulator ini memakai aturan sederhana agar konsep mudah dipahami. Dalam sistem nyata, nilai risiko berasal dari model yang dilatih dan diuji memakai data historis.</p>
              </div>
            </div>
            <div class="delay-eval-board">
              <div><small>Contoh evaluasi</small><b>Accuracy 85%</b><span>Model cukup baik secara umum, tetapi angka ini tidak boleh dibaca sendirian.</span></div>
              <div><small>Kasus penting</small><b>Recall terlambat 0.80</b><span>Sistem berhasil menangkap sebagian besar pengiriman yang berisiko terlambat.</span></div>
              <div><small>Dampak sistem</small><b>Admin action</b><span>Output model dipakai untuk mempercepat keputusan, bukan menggantikan penilaian manusia sepenuhnya.</span></div>
            </div>
          </div>

          <div class="interactive-lab workflow-lab">
            <div class="lab-toolbar">
              <div><small>Lab interaktif</small><h4>Build the Workflow</h4></div>
              <button type="button" class="lab-icon-button" data-workflow-reset>Reset</button>
            </div>
            <p class="lab-instruction">Pilih langkah berikut secara berurutan. Setiap pilihan akan masuk ke pipeline project.</p>
            <div id="workflow-pool" class="workflow-pool" aria-label="Available workflow steps"></div>
            <div id="workflow-sequence" class="workflow-sequence" aria-label="Selected workflow sequence"></div>
            <div class="workflow-footer">
              <button type="button" class="lab-button primary-lab-button" data-workflow-check>Cek workflow</button>
              <p id="workflow-feedback" class="lab-status" aria-live="polite">Mulai dari merumuskan keputusan yang perlu dibantu oleh sistem.</p>
            </div>
          </div>

          <div class="decision-checklist">
            <div><small>Before modeling</small><p>Apakah masalah membutuhkan AI, dan keputusan apa yang akan dibantu?</p></div>
            <div><small>Before release</small><p>Apakah metrik evaluasi benar-benar mewakili risiko penggunaan?</p></div>
            <div><small>After release</small><p>Bagaimana perubahan data, error, dan feedback pengguna akan dipantau?</p></div>
          </div>
        </section>

        <section class="learning-module knowledge-module">
          <div class="module-heading">
            <small>Knowledge Check</small>
            <h3>Can you explain the decisions?</h3>
          </div>
          <div class="knowledge-list">
            <details>
              <summary>Mengapa DFS tidak selalu menghasilkan jalur terpendek?</summary>
              <p>DFS memprioritaskan kedalaman satu cabang. Jalur pertama yang mencapai tujuan belum tentu memiliki jumlah langkah paling sedikit.</p>
            </details>
            <details>
              <summary>Kapan clustering lebih tepat daripada classification?</summary>
              <p>Ketika label target belum tersedia dan tujuan awalnya adalah menemukan kelompok alami atau pola tersembunyi dalam data.</p>
            </details>
            <details>
              <summary>Mengapa model dengan skor tinggi belum tentu menjadi produk AI yang baik?</summary>
              <p>Model juga harus sesuai dengan kebutuhan pengguna, dapat dijelaskan, terintegrasi dengan workflow, serta dipantau setelah digunakan.</p>
            </details>
          </div>
        </section>

        <section class="learning-sources">
          <div>
            <small>Integritas materi</small>
            <h3>Written as an independent learning module.</h3>
            <p>Seluruh narasi, contoh, visual, dan interaksi pada halaman ini dibuat khusus untuk portfolio ini. Materi tidak menampilkan atau mendistribusikan slide perkuliahan.</p>
          </div>
          <div class="source-links">
            <a href="https://aima.cs.berkeley.edu/" target="_blank" rel="noreferrer">AI: A Modern Approach resources</a>
            <a href="https://scikit-learn.org/stable/user_guide.html" target="_blank" rel="noreferrer">Scikit-learn User Guide</a>
            <a href="https://developers.google.com/machine-learning/glossary" target="_blank" rel="noreferrer">Google ML Glossary</a>
          </div>
        </section>
      </div>
    </div>
  `;

  initializeLearningInteractions();
}

const mazeLayout = [
  [0, 0, 0, 1, 0, 0],
  [1, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 1, 0],
  [1, 1, 0, 0, 0, 0],
];

let searchState = null;
let searchTimer = null;

function solveMaze(mode) {
  const start = [0, 0];
  const goal = [5, 5];
  const frontier = [start];
  const visited = new Set([start.join("-")]);
  const parent = new Map();
  const order = [];
  const directions = mode === "bfs" ? [[0, 1], [1, 0], [0, -1], [-1, 0]] : [[1, 0], [0, 1], [-1, 0], [0, -1]];

  while (frontier.length) {
    const current = mode === "bfs" ? frontier.shift() : frontier.pop();
    order.push(current);
    if (current[0] === goal[0] && current[1] === goal[1]) break;

    directions.forEach(([dr, dc]) => {
      const next = [current[0] + dr, current[1] + dc];
      const key = next.join("-");
      const inside = next[0] >= 0 && next[0] < mazeLayout.length && next[1] >= 0 && next[1] < mazeLayout[0].length;
      if (inside && mazeLayout[next[0]][next[1]] === 0 && !visited.has(key)) {
        visited.add(key);
        parent.set(key, current);
        frontier.push(next);
      }
    });
  }

  const path = [];
  let cursor = goal;
  while (cursor) {
    path.unshift(cursor);
    if (cursor[0] === start[0] && cursor[1] === start[1]) break;
    cursor = parent.get(cursor.join("-"));
  }

  return { mode, order, path, step: 0 };
}

function renderMaze() {
  const grid = document.querySelector("#maze-grid");
  if (!grid || !searchState) return;
  const explored = new Set(searchState.order.slice(0, searchState.step).map((cell) => cell.join("-")));
  const complete = searchState.step >= searchState.order.length;
  const finalPath = complete ? new Set(searchState.path.map((cell) => cell.join("-"))) : new Set();
  const current = searchState.step > 0 && !complete ? searchState.order[searchState.step - 1].join("-") : "";

  grid.innerHTML = mazeLayout
    .flatMap((row, rowIndex) =>
      row.map((cell, columnIndex) => {
        const key = `${rowIndex}-${columnIndex}`;
        const classes = ["maze-cell"];
        if (cell === 1) classes.push("wall");
        if (key === "0-0") classes.push("start");
        if (key === "5-5") classes.push("goal");
        if (explored.has(key)) classes.push("visited");
        if (finalPath.has(key)) classes.push("final-path");
        if (key === current) classes.push("current");
        const label = key === "0-0" ? "S" : key === "5-5" ? "G" : "";
        return `<span class="${classes.join(" ")}" aria-label="Row ${rowIndex + 1}, column ${columnIndex + 1}${cell === 1 ? ", wall" : ""}">${label}</span>`;
      }),
    )
    .join("");

  const status = document.querySelector("#search-status");
  if (complete) {
    status.textContent = `${searchState.mode.toUpperCase()} completed: ${searchState.order.length} cells explored, final path ${searchState.path.length - 1} steps.`;
  } else if (searchState.step > 0) {
    status.textContent = `${searchState.mode.toUpperCase()} exploration: ${searchState.step} of ${searchState.order.length} cells visited.`;
  } else {
    status.textContent = `${searchState.mode.toUpperCase()} ready. Use Next for one step or Run for the full exploration.`;
  }
}

function setSearchMode(mode) {
  clearInterval(searchTimer);
  searchState = solveMaze(mode);
  document.querySelectorAll("[data-search-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.searchMode === mode);
  });
  renderMaze();
}

function stepSearch() {
  if (!searchState || searchState.step >= searchState.order.length) return;
  searchState.step += 1;
  renderMaze();
}

function runSearch() {
  clearInterval(searchTimer);
  searchTimer = window.setInterval(() => {
    if (!searchState || searchState.step >= searchState.order.length) {
      clearInterval(searchTimer);
      renderMaze();
      return;
    }
    stepSearch();
  }, 90);
}

const workflowSteps = [
  "Frame the decision",
  "Gather evidence",
  "Inspect patterns",
  "Prepare inputs",
  "Train a candidate",
  "Validate outcomes",
  "Release and observe",
];

const workflowChoices = [
  "Train a candidate",
  "Frame the decision",
  "Release and observe",
  "Gather evidence",
  "Validate outcomes",
  "Inspect patterns",
  "Prepare inputs",
];

let selectedWorkflow = [];

function renderWorkflow() {
  const pool = document.querySelector("#workflow-pool");
  const sequence = document.querySelector("#workflow-sequence");
  if (!pool || !sequence) return;
  const available = workflowChoices.filter((step) => !selectedWorkflow.includes(step));

  pool.innerHTML = available.map((step) => `<button type="button" data-workflow-step="${step}">${step}</button>`).join("");
  sequence.innerHTML = selectedWorkflow.length
    ? selectedWorkflow.map((step, index) => `<button type="button" data-workflow-remove="${step}"><small>${String(index + 1).padStart(2, "0")}</small>${step}</button>`).join("")
    : `<span class="workflow-empty">Your project pipeline will appear here.</span>`;
}

const e2eWorkflowSteps = [
  "Frame the decision",
  "Collect evidence",
  "Explore the data",
  "Prepare features",
  "Split train and validation",
  "Train a baseline",
  "Evaluate and tune",
  "Deploy and monitor",
];

const e2eWorkflowChoices = [
  "Train a baseline",
  "Deploy and monitor",
  "Collect evidence",
  "Prepare features",
  "Frame the decision",
  "Evaluate and tune",
  "Explore the data",
  "Split train and validation",
];

let selectedE2EWorkflow = [];
let preparedSteps = new Set();

function renderE2EWorkflow() {
  const pool = document.querySelector("#e2e-workflow-pool");
  const sequence = document.querySelector("#e2e-workflow-sequence");
  if (!pool || !sequence) return;

  const available = e2eWorkflowChoices.filter((step) => !selectedE2EWorkflow.includes(step));
  pool.innerHTML = available
    .map((step) => "<button type='button' data-e2e-workflow-step='" + step + "'>" + step + "</button>")
    .join("");
  sequence.innerHTML = selectedE2EWorkflow.length
    ? selectedE2EWorkflow
        .map((step, index) => "<button type='button' data-e2e-workflow-remove='" + step + "'><small>" + String(index + 1).padStart(2, "0") + "</small>" + step + "</button>")
        .join("")
    : "<span class='workflow-empty'>Your end-to-end pipeline will appear here.</span>";
}

function updatePrepLab() {
  const values = {
    impute: ["#prep-income", "6.3 (median)"],
    scale: ["#prep-distance", "0.71"],
    encode: ["#prep-area", "[1, 0, 0]"],
  };

  Object.entries(values).forEach(([step, [selector, value]]) => {
    const output = document.querySelector(selector);
    if (output) output.textContent = preparedSteps.has(step) ? value : "pending";
  });

  document.querySelectorAll("[data-prep-step]").forEach((button) => {
    button.classList.toggle("complete", preparedSteps.has(button.dataset.prepStep));
  });

  const progress = document.querySelector("#prep-progress");
  const feedback = document.querySelector("#prep-feedback");
  if (progress) progress.textContent = preparedSteps.size + " / 3 transforms";
  if (feedback) {
    feedback.textContent = preparedSteps.size === 3
      ? "Record siap digunakan. Semua nilai kini numerik, lengkap, dan mengikuti aturan preprocessing yang sama."
      : "Terapkan ketiga transformasi untuk menghasilkan vector yang siap masuk ke model.";
    feedback.dataset.state = preparedSteps.size === 3 ? "success" : "";
  }
}

function updateRegressionSimulator() {
  const income = Number(document.querySelector("#income-range")?.value || 6);
  const age = Number(document.querySelector("#age-range")?.value || 20);
  const rooms = Number(document.querySelector("#rooms-range")?.value || 6);
  const location = Number(document.querySelector("#location-range")?.value || 7);

  const incomeContribution = income * 22000;
  const roomsContribution = rooms * 14000;
  const locationContribution = location * 18000;
  const agePenalty = age * 900;
  const estimate = Math.max(50000, 45000 + incomeContribution + roomsContribution + locationContribution - agePenalty);

  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  };
  const setWidth = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.style.width = Math.min(100, Math.max(8, value)) + "%";
  };

  setText("#income-value", "$" + income.toFixed(1) + "K");
  setText("#age-value", age + " years");
  setText("#rooms-value", rooms.toFixed(1));
  setText("#location-value", location + " / 10");
  setText("#price-estimate", "$" + Math.round(estimate).toLocaleString("en-US"));

  const contributions = [
    ["Income", incomeContribution],
    ["Rooms", roomsContribution],
    ["Location", locationContribution],
  ].sort((a, b) => b[1] - a[1]);
  setText("#price-explanation", contributions[0][0] + " memberi kontribusi positif terbesar pada skenario ini, sementara usia bangunan mengurangi estimasi secara bertahap.");

  setWidth("#income-bar", (income / 15) * 100);
  setWidth("#rooms-bar", (rooms / 12) * 100);
  setWidth("#location-bar", (location / 10) * 100);
  setWidth("#age-bar", (age / 50) * 100);
}

function updateDelayRiskSimulator() {
  const distance = Number(document.querySelector("#delay-distance")?.value || 24);
  const weight = Number(document.querySelector("#delay-weight")?.value || 8);
  const courier = document.querySelector("#delay-courier")?.value || "standard";
  const courierWeight = { express: -14, standard: 0, economy: 18 };
  const score = Math.max(8, Math.min(96, distance * 0.78 + weight * 1.15 + (courierWeight[courier] || 0)));

  const risk =
    score >= 68
      ? {
          label: "High",
          copy: "Risiko tinggi: prioritaskan pengecekan kapasitas kurir, pertimbangkan opsi kurir alternatif, dan beri estimasi waktu yang lebih hati-hati.",
          state: "high",
        }
      : score >= 38
        ? {
            label: "Medium",
            copy: "Risiko sedang: cek kapasitas kurir dan beri estimasi waktu yang realistis sebelum order diproses.",
            state: "medium",
          }
        : {
            label: "Low",
            copy: "Risiko rendah: pesanan relatif aman diproses dengan alur normal, sambil tetap memantau perubahan kondisi operasional.",
            state: "low",
          };

  const values = {
    "#delay-distance-value": distance + " km",
    "#delay-weight-value": weight + " kg",
    "#delay-risk-label": risk.label,
    "#delay-risk-copy": risk.copy,
  };
  Object.entries(values).forEach(([selector, value]) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  });

  const output = document.querySelector(".delay-risk-output");
  const bar = document.querySelector("#delay-risk-bar");
  if (output) output.dataset.risk = risk.state;
  if (bar) bar.style.width = score + "%";
}

const fitScenarios = {
  underfit: {
    train: 47,
    validation: 51,
    label: "High bias",
    title: "Model belum menangkap pola penting.",
    copy: "Error training dan validation sama-sama tinggi. Tambahkan informasi yang relevan, perbaiki representasi fitur, atau gunakan model yang sedikit lebih mampu.",
  },
  balanced: {
    train: 18,
    validation: 22,
    label: "Healthy generalization",
    title: "Model belajar pola yang berguna.",
    copy: "Error training dan validation cukup rendah serta berdekatan. Lanjutkan dengan pengujian stabilitas dan pemeriksaan error per segmen.",
  },
  overfit: {
    train: 5,
    validation: 43,
    label: "High variance",
    title: "Model terlalu menghafal data training.",
    copy: "Training error sangat rendah tetapi validation error jauh lebih tinggi. Kurangi kompleksitas, tambah regularization, atau perbaiki strategi validasi.",
  },
};

function setFitMode(mode) {
  const scenario = fitScenarios[mode] || fitScenarios.balanced;
  document.querySelectorAll("[data-fit-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.fitMode === mode);
  });

  const trainBar = document.querySelector("#train-error-bar");
  const validationBar = document.querySelector("#validation-error-bar");
  if (trainBar) trainBar.style.width = scenario.train + "%";
  if (validationBar) validationBar.style.width = scenario.validation + "%";

  const values = {
    "#train-error-value": scenario.train + "%",
    "#validation-error-value": scenario.validation + "%",
    "#fit-label": scenario.label,
    "#fit-title": scenario.title,
    "#fit-copy": scenario.copy,
  };
  Object.entries(values).forEach(([selector, value]) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  });
}

const pixelPresetFive = [
  "000000000000",
  "001111111100",
  "001100000000",
  "001100000000",
  "001111111000",
  "000000011100",
  "000000001100",
  "000000001100",
  "001100011100",
  "000111111000",
  "000000000000",
  "000000000000",
];

let pixelState = Array(144).fill(0);

function renderPixelLab() {
  const grid = document.querySelector("#pixel-grid");
  const vector = document.querySelector("#pixel-vector");
  const count = document.querySelector("#pixel-count");
  if (!grid || !vector || !count) return;

  grid.innerHTML = pixelState
    .map((value, index) => "<button type='button' class='pixel-cell" + (value ? " active" : "") + "' data-pixel-index='" + index + "' aria-label='Pixel " + (index + 1) + "' aria-pressed='" + Boolean(value) + "'></button>")
    .join("");
  vector.innerHTML = pixelState.slice(0, 48).map((value) => "<span>" + value + "</span>").join("");
  count.textContent = pixelState.reduce((total, value) => total + value, 0);
}

function setPixelPreset(name) {
  pixelState = name === "five"
    ? pixelPresetFive.join("").split("").map(Number)
    : Array(144).fill(0);
  renderPixelLab();
}

function updateSplitLab() {
  const slider = document.querySelector("#split-range");
  if (!slider) return;
  const trainPercent = Number(slider.value);
  const testPercent = 100 - trainPercent;
  const trainTrack = document.querySelector("#train-track");
  const testTrack = document.querySelector("#test-track");
  const feedback = document.querySelector("#split-feedback");

  document.querySelector("#split-label").textContent = trainPercent + "% train / " + testPercent + "% test";
  document.querySelector("#train-count").textContent = trainPercent * 10;
  document.querySelector("#test-count").textContent = testPercent * 10;
  trainTrack.style.width = trainPercent + "%";
  testTrack.style.width = testPercent + "%";

  if (trainPercent >= 90) {
    feedback.textContent = "Model mendapat lebih banyak contoh belajar, tetapi test set menjadi kecil sehingga estimasi performa lebih mudah berubah.";
    feedback.dataset.state = "retry";
  } else if (trainPercent <= 60) {
    feedback.textContent = "Test set besar, tetapi data training mungkin terlalu sedikit untuk mempelajari variasi pola.";
    feedback.dataset.state = "retry";
  } else {
    feedback.textContent = "Pembagian cukup seimbang: model memiliki data belajar yang memadai dan test set masih berarti.";
    feedback.dataset.state = "success";
  }
}

const trapModels = {
  lazy: {
    accuracy: "92.0%",
    recall: "0.0%",
    copy: "Accuracy terlihat tinggi, tetapi tidak satu pun kasus penting berhasil ditemukan. Model ini tidak berguna untuk tujuan deteksi.",
  },
  useful: {
    accuracy: "89.4%",
    recall: "76.3%",
    copy: "Accuracy sedikit lebih rendah, tetapi sebagian besar kasus penting berhasil ditemukan. Nilai model lebih sesuai dengan tujuan deteksi.",
  },
};

function setTrapModel(mode) {
  const model = trapModels[mode] || trapModels.lazy;
  document.querySelectorAll("[data-trap-model]").forEach((button) => {
    button.classList.toggle("active", button.dataset.trapModel === mode);
  });
  document.querySelector("#trap-accuracy").textContent = model.accuracy;
  document.querySelector("#trap-recall").textContent = model.recall;
  document.querySelector("#trap-copy").textContent = model.copy;
}

function updateThresholdLab() {
  const slider = document.querySelector("#threshold-range");
  if (!slider) return;
  const threshold = Number(slider.value);
  const actualPositive = 80;
  const actualNegative = 920;
  const recallRate = Math.max(0.18, Math.min(0.95, 1.02 - threshold * 0.0064));
  const falsePositiveRate = Math.max(0.006, 0.16 * Math.pow(1 - threshold / 100, 1.4));
  const tp = Math.round(actualPositive * recallRate);
  const fn = actualPositive - tp;
  const fp = Math.round(actualNegative * falsePositiveRate);
  const tn = actualNegative - fp;
  const accuracy = (tp + tn) / (actualPositive + actualNegative);
  const precision = tp / Math.max(1, tp + fp);
  const recall = tp / actualPositive;
  const f1 = (2 * precision * recall) / Math.max(0.0001, precision + recall);

  const values = {
    "#threshold-label": "Threshold " + (threshold / 100).toFixed(2),
    "#cm-tn": tn,
    "#cm-fp": fp,
    "#cm-fn": fn,
    "#cm-tp": tp,
    "#metric-accuracy": (accuracy * 100).toFixed(1) + "%",
    "#metric-precision": (precision * 100).toFixed(1) + "%",
    "#metric-recall": (recall * 100).toFixed(1) + "%",
    "#metric-f1": (f1 * 100).toFixed(1) + "%",
  };
  Object.entries(values).forEach(([selector, value]) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  });

  const copy = document.querySelector("#threshold-copy");
  if (threshold >= 70) {
    copy.textContent = "Threshold tinggi membuat prediksi positif lebih selektif: false positive turun, tetapi lebih banyak kasus positif terlewat.";
  } else if (threshold <= 30) {
    copy.textContent = "Threshold rendah menangkap lebih banyak kasus positif, tetapi tim pemeriksa harus menangani lebih banyak false positive.";
  } else {
    copy.textContent = "Threshold menengah menjaga trade-off. Pilihan akhirnya tetap harus mengikuti biaya false positive dan false negative.";
  }
}

const knnPoints = [
  { x: 18, y: 24, type: "cyan" }, { x: 28, y: 34, type: "cyan" },
  { x: 35, y: 18, type: "cyan" }, { x: 42, y: 38, type: "cyan" },
  { x: 25, y: 61, type: "cyan" }, { x: 44, y: 67, type: "cyan" },
  { x: 64, y: 24, type: "violet" }, { x: 75, y: 35, type: "violet" },
  { x: 68, y: 52, type: "violet" }, { x: 82, y: 66, type: "violet" },
  { x: 59, y: 74, type: "violet" }, { x: 76, y: 82, type: "violet" },
];

const knnQuery = { x: 53, y: 49 };

function updateKnnLab() {
  const stage = document.querySelector("#knn-stage");
  const select = document.querySelector("#knn-k");
  if (!stage || !select) return;
  const k = Number(select.value);
  const ranked = knnPoints
    .map((point, index) => ({ ...point, index, distance: Math.hypot(point.x - knnQuery.x, point.y - knnQuery.y) }))
    .sort((a, b) => a.distance - b.distance);
  const nearest = new Set(ranked.slice(0, k).map((point) => point.index));
  const votes = ranked.slice(0, k).reduce((result, point) => {
    result[point.type] += 1;
    return result;
  }, { cyan: 0, violet: 0 });
  const prediction = votes.cyan >= votes.violet ? "cyan" : "violet";

  stage.innerHTML = knnPoints
    .map((point, index) => "<span class='knn-point " + point.type + (nearest.has(index) ? " nearest" : "") + "' style='left:" + point.x + "%;top:" + point.y + "%' aria-label='" + point.type + " sample'></span>")
    .join("") + "<span class='knn-query' style='left:" + knnQuery.x + "%;top:" + knnQuery.y + "%' aria-label='New sample'>?</span>";
  document.querySelector("#knn-prediction").textContent = "Class " + (prediction === "cyan" ? "Cyan" : "Violet");
  document.querySelector("#knn-votes").textContent = votes.cyan + " cyan vote" + (votes.cyan === 1 ? "" : "s") + " vs " + votes.violet + " violet vote" + (votes.violet === 1 ? "" : "s") + ".";
}

function initializeClassificationInteractions() {
  setPixelPreset("five");
  updateSplitLab();
  setTrapModel("lazy");
  updateThresholdLab();
  updateKnnLab();
}

function initializeEndToEndInteractions() {
  selectedE2EWorkflow = [];
  preparedSteps = new Set();
  renderE2EWorkflow();
  updatePrepLab();
  updateDelayRiskSimulator();
  updateRegressionSimulator();
  setFitMode("balanced");
}

function initializeLearningInteractions() {
  setSearchMode("bfs");
  selectedWorkflow = [];
  renderWorkflow();
  updateDelayRiskSimulator();
}

function setActivePage(pageId, updateHash = true) {
  const targetPage = pages.some((page) => page.dataset.page === pageId) ? pageId : "home";

  if (targetPage === "project-detail" && detailContainer && !detailContainer.innerHTML.trim()) {
    renderProjectDetail(projects[0].slug);
  }

  if (targetPage === "learning-detail" && learningDetailContainer && !learningDetailContainer.innerHTML.trim()) {
    renderLearningDetail();
  }

  pages.forEach((page) => {
    page.classList.toggle("active-page", page.dataset.page === targetPage);
  });

  const activeNavigationPage = targetPage === "learning-detail" ? "learning-lab" : targetPage;
  pageLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.pageLink === activeNavigationPage);
  });

  if (updateHash) {
    history.pushState(null, "", `#${targetPage}`);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderProjects(filter = "All") {
  const visible =
    filter === "All"
      ? projects
      : projects.filter((project) => {
          return project.category === filter || project.tags.includes(filter);
        });

  grid.innerHTML = visible.map(projectCard).join("");
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

renderProjects();

document.addEventListener("click", (event) => {
  const learningPathLink = event.target.closest("[data-learning-detail]");
  if (learningPathLink) {
    event.preventDefault();
    renderLearningDetail(learningPathLink.dataset.learningDetail);
    setActivePage("learning-detail");
    return;
  }

  const moduleLink = event.target.closest("[data-module-link]");
  if (moduleLink) {
    event.preventDefault();
    document.querySelector(`#${moduleLink.dataset.moduleLink}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const topicMazeRun = event.target.closest("[data-topic-maze-run]");
  if (topicMazeRun) {
    runTopicMaze(topicMazeRun.dataset.topicMazeRun);
    return;
  }

  const topicMazeReset = event.target.closest("[data-topic-maze-reset]");
  if (topicMazeReset) {
    resetTopicMaze(topicMazeReset.dataset.topicMazeReset);
    return;
  }

  const topicApproachButton = event.target.closest("[data-topic-approach]");
  if (topicApproachButton) {
    setTopicApproach(topicApproachButton.dataset.topicApproach);
    return;
  }

  const topicAgentButton = event.target.closest("[data-topic-agent-mode]");
  if (topicAgentButton) {
    topicStudioState.agent = topicAgentButton.dataset.topicAgentMode;
    renderTopicAgent(topicStudioState.agent);
    return;
  }

  const topicLeakageButton = event.target.closest("[data-topic-leakage-mode]");
  if (topicLeakageButton) {
    renderTopicLeakage(topicLeakageButton.dataset.topicLeakageMode);
    return;
  }

  if (event.target.closest("[data-topic-preprocess-run]")) {
    runTopicPreprocess();
    return;
  }

  const topicDecisionButton = event.target.closest("[data-topic-decision-choice]");
  if (topicDecisionButton) {
    renderTopicDecisionMap(topicDecisionButton.dataset.topicDecisionChoice);
    return;
  }

  if (event.target.closest("[data-topic-search-check]")) {
    const scenario = document.querySelector("#topic-search-scenario")?.value;
    const answer = document.querySelector("#topic-search-answer")?.value;
    const feedback = document.querySelector("#topic-search-feedback");
    const correct = { heuristic: "astar", shortest: "bfs", memory: "dfs" };
    const explanations = {
      heuristic: "A* sesuai karena ruang solusi besar dan tersedia estimasi jarak. Rumusnya menyeimbangkan biaya yang sudah ditempuh dengan perkiraan biaya menuju tujuan.",
      shortest: "BFS sesuai untuk graph tanpa bobot ketika tujuan utamanya adalah jalur dengan jumlah langkah paling sedikit.",
      memory: "DFS sesuai untuk eksplorasi satu cabang dengan struktur stack atau rekursi dan kebutuhan memori yang biasanya lebih rendah.",
    };
    if (!feedback) return;
    feedback.textContent = !answer ? "Pilih algoritma terlebih dahulu." : answer === correct[scenario] ? "Benar. " + explanations[scenario] : "Belum tepat. " + explanations[scenario];
    feedback.dataset.state = !answer ? "retry" : answer === correct[scenario] ? "success" : "retry";
    return;
  }

  if (event.target.closest("[data-topic-learning-check]")) {
    const scenario = document.querySelector("#topic-learning-scenario")?.value;
    const answer = document.querySelector("#topic-learning-answer")?.value;
    const feedback = document.querySelector("#topic-learning-feedback");
    const correct = { cluster: "unsupervised", regression: "supervised", reinforcement: "reinforcement" };
    const explanations = {
      cluster: "Unsupervised learning sesuai karena data belum memiliki label dan tujuannya mencari kelompok alami.",
      regression: "Supervised learning sesuai karena histori menyediakan target numerik yang ingin diprediksi.",
      reinforcement: "Reinforcement learning sesuai karena agent belajar dari aksi, reward, dan penalti.",
    };
    if (!feedback) return;
    feedback.textContent = !answer ? "Pilih pendekatan terlebih dahulu." : answer === correct[scenario] ? "Benar. " + explanations[scenario] : "Belum tepat. " + explanations[scenario];
    feedback.dataset.state = !answer ? "retry" : answer === correct[scenario] ? "success" : "retry";
    return;
  }

  if (event.target.closest("[data-class-scenario-check]")) {
    const scenario = document.querySelector("#class-scenario")?.value;
    const result = document.querySelector("#class-scenario-result");
    const answers = {
      review: ["Binary classification", "Setiap transaksi berakhir pada satu dari dua keputusan: perlu ditinjau atau aman."],
      digit: ["Multiclass classification", "Satu gambar dipetakan ke tepat satu kelas dari sepuluh kemungkinan digit."],
      "photo-tags": ["Multilabel classification", "Satu foto dapat menerima beberapa label yang benar secara bersamaan."],
    };
    const [label, copy] = answers[scenario] || answers.review;
    result.innerHTML = "<b>" + label + "</b><span>" + copy + "</span>";
    result.dataset.state = "success";
    return;
  }

  const pixelPreset = event.target.closest("[data-pixel-preset]");
  if (pixelPreset) {
    setPixelPreset(pixelPreset.dataset.pixelPreset);
    return;
  }

  if (event.target.closest("[data-pixel-clear]")) {
    setPixelPreset("clear");
    return;
  }

  const pixelCell = event.target.closest("[data-pixel-index]");
  if (pixelCell) {
    const index = Number(pixelCell.dataset.pixelIndex);
    pixelState[index] = pixelState[index] ? 0 : 1;
    renderPixelLab();
    return;
  }

  const trapModel = event.target.closest("[data-trap-model]");
  if (trapModel) {
    setTrapModel(trapModel.dataset.trapModel);
    return;
  }

  if (event.target.closest("[data-e2e-type-check]")) {
    const scenario = document.querySelector("#e2e-scenario")?.value;
    const result = document.querySelector("#e2e-type-result");
    const answers = {
      "house-price": ["Supervised regression", "Contoh transaksi sebelumnya menyediakan target numerik berupa harga."],
      "customer-group": ["Unsupervised clustering", "Tidak ada label segmen; tujuan utamanya menemukan struktur kelompok."],
      "fraud-class": ["Supervised classification", "Contoh historis memiliki kelas fraud atau normal yang ingin diprediksi."],
      "delivery-agent": ["Reinforcement learning", "Agent memperbaiki pilihan rute melalui reward dan penalti dari tindakannya."],
    };
    const [label, explanation] = answers[scenario] || answers["house-price"];
    if (result) {
      result.innerHTML = "<b>" + label + "</b><span>" + explanation + "</span>";
      result.dataset.state = "success";
    }
    return;
  }

  const e2eWorkflowStep = event.target.closest("[data-e2e-workflow-step]");
  if (e2eWorkflowStep) {
    selectedE2EWorkflow.push(e2eWorkflowStep.dataset.e2eWorkflowStep);
    renderE2EWorkflow();
    return;
  }

  const e2eWorkflowRemove = event.target.closest("[data-e2e-workflow-remove]");
  if (e2eWorkflowRemove) {
    selectedE2EWorkflow = selectedE2EWorkflow.filter((step) => step !== e2eWorkflowRemove.dataset.e2eWorkflowRemove);
    renderE2EWorkflow();
    return;
  }

  if (event.target.closest("[data-e2e-workflow-reset]")) {
    selectedE2EWorkflow = [];
    renderE2EWorkflow();
    const feedback = document.querySelector("#e2e-workflow-feedback");
    if (feedback) {
      feedback.textContent = "Mulai dari keputusan yang perlu dibantu oleh sistem.";
      feedback.dataset.state = "";
    }
    return;
  }

  if (event.target.closest("[data-e2e-workflow-check]")) {
    const feedback = document.querySelector("#e2e-workflow-feedback");
    if (selectedE2EWorkflow.length < e2eWorkflowSteps.length) {
      feedback.textContent = "Pipeline belum lengkap. Masih ada " + (e2eWorkflowSteps.length - selectedE2EWorkflow.length) + " langkah yang perlu ditempatkan.";
      feedback.dataset.state = "retry";
    } else {
      const mismatch = selectedE2EWorkflow.findIndex((step, index) => step !== e2eWorkflowSteps[index]);
      feedback.textContent = mismatch === -1
        ? "Flow lengkap. Setiap tahap menghasilkan bukti untuk keputusan berikutnya, termasuk monitoring setelah deployment."
        : "Periksa langkah " + (mismatch + 1) + ". Project yang kuat membangun bukti sebelum memilih dan melatih model.";
      feedback.dataset.state = mismatch === -1 ? "success" : "retry";
    }
    return;
  }

  const prepStep = event.target.closest("[data-prep-step]");
  if (prepStep) {
    const step = prepStep.dataset.prepStep;
    if (preparedSteps.has(step)) preparedSteps.delete(step);
    else preparedSteps.add(step);
    updatePrepLab();
    return;
  }

  const fitModeButton = event.target.closest("[data-fit-mode]");
  if (fitModeButton) {
    setFitMode(fitModeButton.dataset.fitMode);
    return;
  }

  const searchModeButton = event.target.closest("[data-search-mode]");
  if (searchModeButton) {
    setSearchMode(searchModeButton.dataset.searchMode);
    return;
  }

  if (event.target.closest("[data-search-step]")) {
    stepSearch();
    return;
  }

  if (event.target.closest("[data-search-run]")) {
    runSearch();
    return;
  }

  if (event.target.closest("[data-search-reset]")) {
    setSearchMode(searchState?.mode || "bfs");
    return;
  }

  if (event.target.closest("[data-check-learning]")) {
    const scenario = document.querySelector("#learning-scenario")?.value;
    const answer = document.querySelector("#learning-answer")?.value;
    const feedback = document.querySelector("#learning-feedback");
    const correctAnswers = { cluster: "unsupervised", regression: "supervised", reinforcement: "reinforcement" };
    const explanations = {
      cluster: "Unsupervised learning paling sesuai karena tujuannya menemukan kelompok tanpa label yang sudah ditentukan sebelumnya.",
      regression: "Supervised learning sesuai karena contoh historis memiliki target numerik, yaitu waktu pengiriman.",
      reinforcement: "Reinforcement learning sesuai karena agent memperbaiki tindakannya melalui reward dan penalti.",
    };
    if (!answer) {
      feedback.textContent = "Pilih pendekatan terlebih dahulu sebelum mengecek skenario.";
    } else if (answer === correctAnswers[scenario]) {
      feedback.textContent = `Benar. ${explanations[scenario]}`;
      feedback.dataset.state = "success";
    } else {
      feedback.textContent = `Belum tepat. ${explanations[scenario]}`;
      feedback.dataset.state = "retry";
    }
    return;
  }

  const workflowStep = event.target.closest("[data-workflow-step]");
  if (workflowStep) {
    selectedWorkflow.push(workflowStep.dataset.workflowStep);
    renderWorkflow();
    return;
  }

  const workflowRemove = event.target.closest("[data-workflow-remove]");
  if (workflowRemove) {
    selectedWorkflow = selectedWorkflow.filter((step) => step !== workflowRemove.dataset.workflowRemove);
    renderWorkflow();
    return;
  }

  if (event.target.closest("[data-workflow-reset]")) {
    selectedWorkflow = [];
    renderWorkflow();
    const feedback = document.querySelector("#workflow-feedback");
    if (feedback) feedback.textContent = "Start by framing the decision the system needs to support.";
    return;
  }

  if (event.target.closest("[data-workflow-check]")) {
    const feedback = document.querySelector("#workflow-feedback");
    if (selectedWorkflow.length < workflowSteps.length) {
      feedback.textContent = `Pipeline incomplete: ${workflowSteps.length - selectedWorkflow.length} step(s) still need to be placed.`;
    } else {
      const firstMismatch = selectedWorkflow.findIndex((step, index) => step !== workflowSteps[index]);
      feedback.textContent = firstMismatch === -1
        ? "Workflow complete. The sequence connects the decision, evidence, model, validation, and monitoring."
        : `Review step ${firstMismatch + 1}. A reliable AI project starts with the decision, then builds evidence before modeling.`;
    }
    return;
  }

  const projectLink = event.target.closest("[data-project-detail]");
  if (projectLink) {
    event.preventDefault();
    renderProjectDetail(projectLink.dataset.projectDetail);
    setActivePage("project-detail");
    return;
  }

  const projectCardLink = event.target.closest("[data-project-card]");
  if (projectCardLink && !event.target.closest("a")) {
    renderProjectDetail(projectCardLink.dataset.projectCard);
    setActivePage("project-detail");
    return;
  }

  const link = event.target.closest("[data-page-link]");
  if (!link) return;

  const pageId = link.dataset.pageLink;
  if (!pageId) return;

  event.preventDefault();
  setActivePage(pageId);
});

document.addEventListener("input", (event) => {
  if (event.target.matches("#delay-distance, #delay-weight")) {
    updateDelayRiskSimulator();
  }
  if (event.target.matches("#income-range, #age-range, #rooms-range, #location-range")) {
    updateRegressionSimulator();
  }
  if (event.target.matches("#split-range")) {
    updateSplitLab();
  }
  if (event.target.matches("#threshold-range")) {
    updateThresholdLab();
  }
  if (event.target.matches("#topic-split-range")) {
    renderTopicSplit(event.target.value);
  }
  if (event.target.matches("#topic-confusion-range")) {
    renderTopicConfusion(event.target.value);
  }
  if (event.target.matches("#topic-heuristic-range")) {
    renderTopicHeuristic(event.target.value);
  }
  if (event.target.matches("#topic-boundary-range")) {
    renderTopicBoundary(event.target.value);
  }
  if (event.target.matches("#topic-monitor-range")) {
    renderTopicMonitoring(event.target.value);
  }
});

document.addEventListener("change", (event) => {
  if (event.target.matches("#delay-courier")) {
    updateDelayRiskSimulator();
  }
  if (event.target.matches("#knn-k")) {
    updateKnnLab();
  }
});

window.addEventListener("popstate", () => {
  setActivePage(location.hash.replace("#", "") || "home", false);
});

setActivePage(location.hash.replace("#", "") || "home", false);
