"use client";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "muftyarifin@email.com"; // Ganti dengan email aktif kamu

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset status setelah 2 detik
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const message = formData.get("message");

    // Membuka email client bawaan dengan subjek dan isi pesan otomatis
    window.location.href = `mailto:${emailAddress}?subject=Pesan dari ${name} (Portfolio)&body=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="contact"
      className="py-24 border-t border-slate-200 dark:border-slate-800 bg-white text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-3">
            Get In Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm lg:text-base max-w-xl">
            Tertarik untuk berkolaborasi, menawarkan kesempatan kerja, atau
            sekadar ingin berdiskusi? Jangan ragu untuk menghubungi saya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* SISI KIRI: INFO & QUICK COPY EMAIL */}
          <div className="flex flex-col gap-6 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {"Let's build something amazing"}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Saya selalu terbuka untuk peluang baru sebagai Front-End
              Developer. Anda bisa mengirimkan pesan melalui form di samping
              atau menyalin alamat email saya langsung di bawah ini.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div className="px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-mono text-slate-700 dark:text-slate-200 select-all">
                {emailAddress}
              </div>
              <button
                onClick={handleCopyEmail}
                className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-md shadow-indigo-600/25 active:scale-95 flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <span>✓</span> Copied!
                  </>
                ) : (
                  <>
                    <span>📋</span> Copy Email
                  </>
                )}
              </button>
            </div>
          </div>

          {/* SISI KANAN: FORM KONTAK SEDERHANA */}
          <form
            onSubmit={handleSubmit}
            className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-lg flex flex-col gap-5"
          >
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tuliskan pesan atau tawaran kerja di sini..."
                className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-semibold py-3.5 rounded-xl transition-all shadow-md shadow-indigo-600/20 active:scale-[0.98]"
            >
              Send Message via Email Client
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
