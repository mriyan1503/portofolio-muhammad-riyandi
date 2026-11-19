import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, BarChart3, CheckCircle2, Compass, FileText, Globe, Link2, MapPin, PenLine, Search, Settings2, TrendingUp, Wrench } from 'lucide-react';

const shellStyle = { boxSizing: 'border-box' as const, paddingTop: 'var(--safe-area-inset-top)' };

function SectionHead({ no, eyebrow, title, desc }: { no: string; eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3"><span className="eyebrow">{no} — {eyebrow}</span><span className="h-px flex-1 bg-white/10 hidden sm:block" /></div>
      <h2 className="mt-4 text-[clamp(28px,5vw,44px)] leading-[1.05] font-bold">{title}</h2>
      {desc && <p className="mt-4 text-[var(--muted)] leading-relaxed text-[15px] sm:text-base">{desc}</p>}
    </div>
  );
}

const skills = [
  { icon: <Settings2 size={24} />, title: 'Technical SEO', desc: 'Fondasi teknis agar mesin pencari bisa merayapi, memahami, dan mengindeks website dengan benar.', items: ['Audit crawl & indexability', 'Sitemap & robots.txt', 'Struktur URL', 'Internal linking', 'Schema markup', 'Core Web Vitals'] },
  { icon: <PenLine size={24} />, title: 'On-Page SEO', desc: 'Konten yang menjawab kebutuhan pengguna sekaligus mudah dipahami mesin pencari.', items: ['Riset keyword', 'Search intent', 'Title & meta description', 'Struktur heading', 'Image alt', 'Optimasi konten'] },
  { icon: <Link2 size={24} />, title: 'Off-Page SEO', desc: 'Membangun sinyal kepercayaan di luar website dengan pendekatan yang aman dan terukur.', items: ['Analisis backlink', 'Evaluasi kualitas domain', 'Link building aman', 'Profil tautan sehat', 'Relevansi & otoritas'] },
  { icon: <Wrench size={24} />, title: 'Tools', desc: 'Alat kerja sehari-hari untuk audit, implementasi, dan pemantauan performa pencarian.', items: ['WordPress', 'Google Search Console', 'Google Analytics', 'Screaming Frog', 'Ubersuggest', 'Semrush', 'Yoast SEO', 'Rank Math'] },
];

const pages = [
  { name: 'Ekspedisi Udara', href: 'https://www.mitralogistics.co.id/ekspedisi-udara/', keyword: 'Jasa ekspedisi udara & pengiriman kargo udara', intent: 'Transaksional — mencari layanan pengiriman udara yang cepat dan dapat diandalkan.', focus: 'Heading, meta, konten, internal link' },
  { name: 'Project Cargo', href: 'https://www.mitralogistics.co.id/project-cargo/', keyword: 'Jasa project cargo & pengiriman barang proyek', intent: 'Transaksional — mencari penyedia pengiriman barang proyek berskala besar.', focus: 'Heading, meta, konten, internal link' },
  { name: 'Jasa Kirim Mobil', href: 'https://www.mitralogistics.co.id/jasa-kirim-mobil/', keyword: 'Jasa kirim mobil antar kota / antar pulau', intent: 'Transaksional — membandingkan layanan dan cara pengiriman mobil.', focus: 'Heading, meta, konten, internal link' },
  { name: 'Jasa Pindahan Kost', href: 'https://www.mitralogistics.co.id/jasa-pindahan-kost/', keyword: 'Jasa pindahan kost & pindahan barang kecil', intent: 'Transaksional — mencari solusi pindahan yang praktis dan terjangkau.', focus: 'Heading, meta, konten, internal link' },
];

export default function App() {
  const [cvNotice, setCvNotice] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div data-safe-area-inset-root style={shellStyle} className="min-h-screen bg-[var(--bg)] text-[var(--text)] overflow-x-clip">
      {/* Header */}
      <header data-safe-area-sticky-top style={{ top: 'var(--safe-area-inset-top)' }} className="sticky z-40 border-b border-white/10 bg-[#080816]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#atas" className="flex items-center gap-3 min-w-0">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--purple)] font-bold text-lg">MR</span>
            <span className="min-w-0 leading-tight"><span className="block truncate font-bold">Muhammad Riyandi</span><span className="block text-xs text-[var(--muted)]">Technical & Content SEO</span></span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-[var(--muted)] md:flex" aria-label="Navigasi utama">
            <a className="hover:text-white" href="#tentang">Tentang</a>
            <a className="hover:text-white" href="#keahlian">Keahlian</a>
            <a className="hover:text-white" href="#pengalaman">Pengalaman</a>
            <a className="hover:text-white" href="#proyek">Proyek</a>
            <a className="hover:text-white" href="#proses">Proses</a>
          </nav>
          <a href="#kontak" className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#0b0b18] hover:bg-[var(--blue)]">Hubungi Saya</a>
        </div>
      </header>

      <main id="atas">
        {/* HERO */}
        <section className="relative overflow-x-clip">
          <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[var(--purple)] opacity-25 blur-[110px]" />
          <div className="pointer-events-none absolute top-48 -left-24 h-72 w-72 rounded-full bg-[var(--blue)] opacity-20 blur-[110px]" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.35fr_.65fr] lg:gap-8">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="chip"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400" />Terbuka untuk diskusi proyek SEO</span>
                <span className="chip">WordPress Specialist</span>
              </div>
              <p className="mt-6 text-sm font-bold tracking-[.18em] text-[var(--blue)] uppercase">Halo, saya Muhammad Riyandi</p>
              <h1 className="mt-3 text-[clamp(38px,8vw,72px)] leading-[0.98] font-bold">Technical SEO<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] via-[#818cf8] to-[#38bdf8]">&amp; Content SEO</span><br /><span className="text-[clamp(24px,4.5vw,44px)]">WordPress Specialist</span></h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">Membantu website terindeks dengan benar, terstruktur, dan mudah ditemukan di Google — dari audit teknis hingga optimasi konten.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#proyek" className="inline-flex items-center gap-2 rounded-full bg-[var(--purple)] px-6 py-3.5 text-sm font-bold hover:bg-[#6b4af0]">Lihat Portofolio <ArrowRight size={18} /></a>
                <a href="#kontak" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold hover:border-white/40">Hubungi Saya</a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--muted)]">
                <span><strong className="text-white">Fokus:</strong> On-Page · Off-Page · Technical</span>
                <span><strong className="text-white">Platform:</strong> WordPress</span>
                <span><strong className="text-white">Pendekatan:</strong> Berbasis data</span>
              </div>
            </div>
            <aside className="card self-start p-5 sm:p-6" aria-label="Ringkasan profil">
              <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--blue-soft)] text-[var(--blue)]"><Search size={22} /></span><div><p className="font-bold">SEO yang bisa dipertanggungjawabkan</p><p className="text-sm text-[var(--muted)]">Bukan janji peringkat instan.</p></div></div>
              <div className="mt-5 space-y-4 text-sm">
                <div className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-emerald-400" size={18} /><p><strong>Terindeks dengan benar</strong><br /><span className="text-[var(--muted)]">Struktur teknis yang membuat halaman mudah ditemukan.</span></p></div>
                <div className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-emerald-400" size={18} /><p><strong>Konten yang menjawab intent</strong><br /><span className="text-[var(--muted)]">Ditulis untuk pengguna, dioptimasi untuk mesin pencari.</span></p></div>
                <div className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-emerald-400" size={18} /><p><strong>Proses yang transparan</strong><br /><span className="text-[var(--muted)]">Apa yang dikerjakan, apa yang belum, dan langkah berikutnya.</span></p></div>
              </div>
              <div className="mt-6 rounded-2xl bg-[#080816] p-4"><p className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Sedang dikerjakan</p><p className="mt-2 font-semibold">Blog pribadi dari nol — fase Google Sandbox</p><p className="mt-1 text-sm text-[var(--muted)]">Praktik SEO end-to-end pada domain baru.</p><a href="#proyek-blog" className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[var(--blue)]">Lihat datanya <ArrowUpRight size={16} /></a></div>
            </aside>
          </div>
        </section>

        {/* TENTANG */}
        <section id="tentang" className="section-pad border-t border-white/5">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr]">
              <div><SectionHead no="01" eyebrow="Tentang Saya" title="Memahami pengguna dan mesin pencari, dalam satu proses kerja." />
                <div className="mt-6 space-y-4 leading-relaxed text-[var(--muted)]">
                  <p>Berlatar belakang desain dan project management, saya terbiasa menerjemahkan kebutuhan bisnis menjadi pekerjaan yang rapi: ada brief yang jelas, standar kualitas yang disepakati, dan deadline yang dijaga.</p>
                  <p>Saat ini fokus saya pada SEO on-page, off-page, dan technical — dari memastikan halaman bisa dirayapi dan diindeks, hingga menyusun konten yang benar-benar menjawab maksud pencarian pengguna.</p>
                  <p>Saya juga sedang membangun blog pribadi dari nol sebagai ruang praktik SEO: riset, publikasi, monitoring, lalu evaluasi. Bagi saya, SEO bukan sekadar peringkat — melainkan sistem yang membuat website layak ditemukan dan layak dipercaya.</p>
                </div>
              </div>
              <div className="space-y-3 self-start">
                {[['Paham pengguna + mesin pencari', 'Konten dinilai dari manfaatnya bagi pembaca, lalu diperkuat secara teknis.'], ['Terbiasa brief & deadline', 'Pengalaman project management membuat eksekusi lebih terstruktur.'], ['Kualitas di atas kuantitas', 'Sedikit halaman yang solid lebih baik daripada banyak halaman yang lemah.'], ['Transparan soal progres', 'Data ditampilkan apa adanya — termasuk saat masih berproses.']].map(([t, d]) => (
                  <div key={t} className="card flex gap-3 p-4"><CheckCircle2 className="shrink-0 text-[var(--blue)]" size={20} /><div><p className="font-bold">{t}</p><p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{d}</p></div></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="keahlian" className="section-pad border-t border-white/5 bg-[#0a0a1c]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead no="02" eyebrow="Skills & Tools" title="Keahlian yang saling menguatkan, dari teknis hingga konten." desc="Empat area ini bekerja sebagai satu alur: fondasi teknis yang sehat, konten yang relevan, sinyal kepercayaan yang aman, dan alat yang tepat untuk memantaunya." />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((s) => (
                <article key={s.title} className="card flex flex-col p-5">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--purple-soft)] text-[#b7a6ff]">{s.icon}</span>
                  <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">{s.desc}</p>
                  <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">{s.items.map(i => <li key={i} className="flex gap-2 text-sm"><span className="text-[var(--blue)]">•</span><span className="[overflow-wrap:anywhere]">{i}</span></li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PENGALAMAN */}
        <section id="pengalaman" className="section-pad border-t border-white/5">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead no="03" eyebrow="Pengalaman Kerja" title="Dari mengelola proyek desain hingga mengoptimasi website di WordPress." />
            <div className="relative mt-10 space-y-5 before:absolute before:bottom-4 before:left-[19px] before:top-4 before:w-px before:bg-white/10 sm:before:left-1/2">
              <article className="relative pl-12 sm:pl-0 sm:pr-[calc(50%+28px)]">
                <span className="absolute left-2 top-5 grid h-9 w-9 place-items-center rounded-full border border-[var(--purple)] bg-[#171733] text-[var(--blue)] sm:left-1/2 sm:-translate-x-1/2"><Globe size={17} /></span>
                <div className="card p-5 sm:p-6"><span className="chip">23 Juli – 23 Oktober 2026 · Project / Masa Training 3 Bulan</span><h3 className="mt-4 text-xl font-bold">Technical SEO</h3><p className="mt-1 font-semibold text-[var(--blue)]">PT. Naira Mitralogistics Indonesia</p><ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--muted)]"><li>• Audit teknis website WordPress.</li><li>• Optimasi on-page landing page jasa logistik.</li><li>• Perbaikan heading, meta, dan internal linking.</li><li>• Monitoring performa di Google Search Console.</li></ul></div>
              </article>
              <article className="relative pl-12 sm:pl-[calc(50%+28px)] sm:pr-0">
                <span className="absolute left-2 top-5 grid h-9 w-9 place-items-center rounded-full border border-[var(--blue)] bg-[#171733] text-[var(--purple)] sm:left-1/2 sm:-translate-x-1/2"><Compass size={17} /></span>
                <div className="card p-5 sm:p-6"><span className="chip">2021 – 28 Maret 2026</span><h3 className="mt-4 text-xl font-bold">Graphic Designer & Project Manager</h3><p className="mt-1 font-semibold text-[var(--blue)]">NextGen Logos</p><div className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--muted)]"><p><strong className="text-white">2021–2023 · Graphic Designer</strong><br />Mendesain identitas dan kebutuhan visual sesuai brief klien.</p><p><strong className="text-white">2023–2026 · Project Manager</strong><br />Mengelola proyek desain, komunikasi klien, dan standar kualitas.</p></div></div>
              </article>
            </div>
          </div>
        </section>

        {/* PROYEK */}
        <section id="proyek" className="section-pad border-t border-white/5 bg-[#0a0a1c]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead no="04" eyebrow="Portofolio & Studi Kasus" title="Bukti kerja: prosesnya jelas, datanya apa adanya." desc="Dua proyek ini menunjukkan dua sisi pekerjaan saya — membangun dari nol, dan mengoptimasi halaman yang sudah berjalan." />

            {/* PROJECT 1 */}
            <article id="proyek-blog" className="card mt-10 overflow-hidden">
              <div className="grid lg:grid-cols-[1.1fr_.9fr]">
                <div className="p-5 sm:p-8">
                  <div className="flex flex-wrap items-center gap-2"><span className="chip bg-[var(--purple-soft)] text-white">Project 1 · Blog Pribadi</span><span className="chip">Fase Google Sandbox</span><span className="chip">Domain baru · usia &lt; 2 bulan</span></div>
                  <h3 className="mt-5 text-[clamp(24px,4vw,36px)] leading-tight font-bold">Membangun Blog Baru Dari Nol</h3>
                  <p className="mt-3 leading-relaxed text-[var(--muted)]">Ruang praktik SEO end-to-end: mulai dari riset, struktur konten, publikasi, hingga monitoring di Google Search Console.</p>
                  <h4 className="mt-6 font-bold">Yang dikerjakan</h4>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--muted)]">
                    <li>• Riset keyword long-tail low competition.</li>
                    <li>• Struktur konten & on-page dengan Rank Math / Yoast.</li>
                    <li>• Submit sitemap & perbaikan indexability.</li>
                    <li>• Monitoring performa secara berkala di Google Search Console.</li>
                  </ul>
                  <div className="mt-6 rounded-2xl border border-amber-400/25 bg-amber-400/10 p-4"><p className="font-bold text-amber-200">Insight</p><p className="mt-1 text-sm leading-relaxed text-amber-100/90">Sudah terindeks dan muncul di halaman 2. Fokus berikutnya: menaikkan keyword posisi 11–20 ke Top 10 dan memperbaiki CTR lewat pengujian title/meta.</p></div>
                </div>
                <div className="border-t border-white/10 bg-[#0c0c20] p-5 sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Data performa · 3 bulan</p>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="rounded-2xl bg-white/5 p-3"><p className="text-xs text-[var(--muted)]">Klik</p><p className="metric-num mt-2">6</p></div>
                    <div className="rounded-2xl bg-white/5 p-3"><p className="text-xs text-[var(--muted)]">Impressions</p><p className="metric-num mt-2">369</p></div>
                    <div className="rounded-2xl bg-white/5 p-3"><p className="text-xs text-[var(--muted)]">CTR</p><p className="metric-num mt-2">1.63%</p></div>
                  </div>
                  <div className="mt-3 rounded-2xl bg-white/5 p-4"><p className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Properti lain</p><div className="mt-3 grid grid-cols-3 gap-3 text-center"><div><p className="text-xl font-bold">49</p><p className="text-xs text-[var(--muted)]">Klik</p></div><div><p className="text-xl font-bold">4,87 rb</p><p className="text-xs text-[var(--muted)]">Tayangan</p></div><div><p className="text-xl font-bold">19,4</p><p className="text-xs text-[var(--muted)]">Posisi rata-rata</p></div></div></div>
                  <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-2xl bg-white/5 p-3"><p className="text-[var(--muted)]">Domain Authority</p><p className="mt-1 text-lg font-bold">DA 10</p></div>
                    <div className="rounded-2xl bg-white/5 p-3"><p className="text-[var(--muted)]">Page Authority</p><p className="mt-1 text-lg font-bold">PA 24</p></div>
                    <div className="rounded-2xl bg-white/5 p-3"><p className="text-[var(--muted)]">Backlink</p><p className="mt-1 text-lg font-bold">139</p></div>
                    <div className="rounded-2xl bg-white/5 p-3"><p className="text-[var(--muted)]">Spam Score</p><p className="mt-1 text-lg font-bold">1%</p></div>
                  </div>
                  <p className="mt-3 text-center text-sm text-[var(--muted)]">Umur domain: <strong className="text-white">58 hari</strong></p>
                </div>
              </div>
            </article>

            {/* PROJECT 2 */}
            <article className="mt-6">
              <div className="flex flex-wrap items-end justify-between gap-4"><div><span className="chip">Project 2 · Landing Page</span><h3 className="mt-4 text-[clamp(24px,4vw,34px)] font-bold">Landing Page Mitra Logistics</h3><p className="mt-2 max-w-2xl text-[var(--muted)] leading-relaxed">SEO Implementation for Landing Page. Empat halaman layanan dioptimasi di WordPress dengan target keyword dan search intent yang jelas.</p></div><span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-xs font-semibold text-[var(--muted)]"><MapPin size={14} /> mitralogistics.co.id</span></div>
              <p className="mt-5 rounded-2xl border border-white/10 bg-[#111126] p-4 text-sm leading-relaxed text-[var(--muted)]"><strong className="text-white">Catatan penting:</strong> Konsep desain dari vendor. Fokus saya pada implementasi dan optimasi SEO di WordPress. Saya tidak mengklaim desain landing page ini sebagai karya saya, dan tidak mengklaim traffic perusahaan.</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {pages.map((p, i) => (
                  <article key={p.href} className="card flex flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3"><span className="text-xs font-bold tracking-widest text-[var(--blue)]">HALAMAN {String(i + 1).padStart(2, '0')}</span><BarChart3 className="text-[var(--muted)]" size={18} /></div>
                    <h4 className="mt-3 text-xl font-bold"><a href={p.href} target="_blank" rel="noopener" className="underline decoration-[var(--purple)] decoration-2 underline-offset-4 hover:text-[var(--blue)]">{p.name}</a></h4>
                    <dl className="mt-4 flex-1 space-y-3 text-sm">
                      <div><dt className="font-bold text-white">Keyword Target</dt><dd className="mt-1 text-[var(--muted)] [overflow-wrap:anywhere]">{p.keyword}</dd></div>
                      <div><dt className="font-bold text-white">Search Intent</dt><dd className="mt-1 text-[var(--muted)]">{p.intent}</dd></div>
                      <div><dt className="font-bold text-white">Yang Dioptimasi</dt><dd className="mt-1 text-[var(--muted)]">{p.focus}</dd></div>
                    </dl>
                    <a href={p.href} target="_blank" rel="noopener" className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-[#0b0b18] hover:bg-[var(--blue)]">Lihat Halaman <ArrowUpRight size={16} /></a>
                  </article>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* PROSES */}
        <section id="proses" className="section-pad border-t border-white/5">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead no="05" eyebrow="Proses Kerja" title="Empat langkah yang bisa diikuti dan dievaluasi." />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { n: '01', icon: <Search size={22} />, t: 'Audit & Riset', d: 'Memeriksa kondisi teknis, memetakan keyword, dan memahami search intent sebelum mengubah apa pun.' },
                { n: '02', icon: <FileText size={22} />, t: 'Optimasi', d: 'Memperbaiki struktur teknis dan on-page: heading, meta, konten, internal linking, hingga schema.' },
                { n: '03', icon: <TrendingUp size={22} />, t: 'Publikasi & Monitoring', d: 'Halaman dipublikasikan, sitemap dipastikan terbaca, lalu performa dipantau di Search Console.' },
                { n: '04', icon: <CheckCircle2 size={22} />, t: 'Evaluasi', d: 'Data dibaca apa adanya: apa yang naik, apa yang stagnan, dan apa yang perlu diuji berikutnya.' },
              ].map(s => (
                <article key={s.t} className="card relative p-5"><span className="absolute right-5 top-4 text-4xl font-bold text-white/10">{s.n}</span><span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--blue-soft)] text-[var(--blue)]">{s.icon}</span><h3 className="mt-4 text-lg font-bold">{s.t}</h3><p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{s.d}</p></article>
              ))}
            </div>
          </div>
        </section>

        {/* PENUTUP */}
        <section id="kontak" className="border-t border-white/5 bg-gradient-to-b from-[#171733] to-[#080816]">
          <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
            <span className="eyebrow">Penutup</span>
            <h2 className="mx-auto mt-4 max-w-3xl text-[clamp(30px,6vw,54px)] leading-[1.05] font-bold">Mari Diskusi Kebutuhan SEO Website Kamu</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[var(--muted)]">Ceritakan kondisi website kamu saat ini — apakah belum terindeks dengan baik, sulit ditemukan, atau butuh struktur konten yang lebih rapi. Kita mulai dari audit dan prioritas yang paling berdampak.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button type="button" onClick={() => setCvNotice(v => !v)} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold hover:border-white/40"><FileText size={18} /> Download CV</button>
              <button type="button" onClick={() => setContactOpen(v => !v)} className="inline-flex items-center gap-2 rounded-full bg-[var(--purple)] px-6 py-3.5 text-sm font-bold hover:bg-[#6b4af0]">Hubungi Saya <ArrowRight size={18} /></button>
            </div>
            {cvNotice && <p role="status" className="mx-auto mt-5 max-w-xl rounded-2xl border border-white/10 bg-[#111126] px-4 py-3 text-sm text-[var(--muted)]">File CV belum ditautkan di versi ini. Silakan hubungi saya untuk meminta CV terbaru.</p>}
            {contactOpen && <p role="status" className="mx-auto mt-3 max-w-xl rounded-2xl border border-[var(--blue)]/30 bg-[var(--blue-soft)] px-4 py-3 text-sm leading-relaxed text-white">Terima kasih sudah mampir. Silakan kirimkan pesan melalui kanal kontak yang kamu gunakan untuk membagikan portofolio ini, beserta alamat website dan tujuan SEO-nya.</p>}
            <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">{['Audit Teknis', 'On-Page SEO', 'Riset Keyword', 'WordPress', 'Internal Linking', 'Search Console'].map(x => <span key={x} className="chip">{x}</span>)}</div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 py-6 text-center text-sm text-[var(--muted)]">© 2026 Muhammad Riyandi · Technical SEO & Content SEO · WordPress Specialist</footer>
    </div>
  );
}
