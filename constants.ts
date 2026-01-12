
import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Diyana Ma'rifatul Chasanah",
  title: "Profesional Manajemen Ritel & Operasional Bisnis",
  profilePic: "/img/sasa.jpg",
  about: "Halo! Saya adalah seorang mahasiswa aktif Manajemen Ritel di Institut Teknologi dan Bisnis Tuban. Saya memiliki minat besar dalam manajemen operasional, strategi pemasaran ritel, dan pengembangan bisnis. Melalui pengalaman praktis di bidang operasional ritel dan sebagai host live shopping, saya telah mengasah kemampuan komunikasi, manajemen waktu, dan kepemimpinan untuk memberikan dampak positif bagi organisasi.",
  socials: [
    { platform: "Instagram", url: "https://www.instagram.com/sasa_bcd?igsh=NXpiZmw0c3RjOXh6&utm_source=qr", icon: "Instagram" },
    { platform: "Email", url: "sasabcd491@gmail.com", icon: "Mail" },
    { platform: "WhatsApp", url: "https://wa.me/6285803038462", icon: "MessageCircle" }
  ],
  education: [
    {
      institution: "Institut Teknologi dan Bisnis Tuban",
      degree: "Sarjana Manajemen Ritel",
      period: "2022 - Sekarang",
      description: "Mempelajari inti dari strategi bisnis ritel, manajemen rantai pasok, perilaku konsumen, dan efisiensi operasional toko."
    }
  ],
  skills: {
    soft: ["Kepemimpinan Tim", "Komunikasi Persuasif", "Manajemen Waktu", "Berpikir Kritis", "Negosiasi"],
    hard: [
      { name: "Manajemen Operasional Toko", level: 92 },
      { name: "Strategi Penjualan & Ritel", level: 90 },
      { name: "Administrasi & Kasir", level: 88 },
      { name: "Manajemen Inventaris", level: 85 },
      { name: "Live Shopping Performance", level: 95 }
    ]
  },
  experience: [
    {
      company: "CV. TOSERBA SUNAN DRAJAD",
      position: "Staf Operasional",
      period: "2022 - Sekarang",
      description: [
        "Bertanggung jawab atas efisiensi operasional harian di area toko ritel.",
        "Mengelola tata letak produk (merchandising) untuk meningkatkan minat beli pelanggan.",
        "Mengoperasikan sistem kasir dan melakukan audit stok barang secara berkala.",
        "Mendukung tim dalam mencapai target penjualan harian toko."
      ]
    },
    {
      company: "Freelance Content Creator",
      position: "Host Live Shopping",
      period: "2023 - 2024",
      description: [
        "Menjadi wajah merek dalam sesi penjualan langsung di platform media sosial.",
        "Membangun interaksi aktif dengan audiens untuk meningkatkan tingkat konversi penjualan.",
        "Menganalisis perilaku penonton untuk menyusun naras live yang lebih efektif."
      ]
    }
  ],
  documentation: [
    "/img/sasa4.jpg",
    "/img/sasa3.jpg",
    "/img/sasa2.jpg"
  ]
};
