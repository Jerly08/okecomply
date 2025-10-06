# OkeComply - Self Declare BC 16 Mockup

Mockup frontend aplikasi OkeComply untuk sistem Self Declare BC 16 (Pemberitahuan Pabean Pengeluaran Barang dari Kawasan Pabean untuk Ditimbun di Pusat Logistik Berikat).

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Chakra UI v2
- **Icons**: Lucide React
- **Charts**: Recharts for interactive data visualization
- **Form Handling**: React Hook Form + Zod (ready to implement)

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Dashboard utama
│   ├── self-declare/             # Modul Self Declare BC 16
│   │   ├── page.tsx              # List dokumen BC 16
│   │   ├── new/page.tsx          # Pilihan metode input baru
│   │   ├── form/page.tsx         # Form multi-step manual
│   │   └── excel/page.tsx        # Upload Excel
│   ├── documents/page.tsx        # Document Pabean
│   ├── transport/page.tsx        # Pengangkut
│   ├── goods/page.tsx            # Barang
│   ├── transactions/page.tsx     # Transaksi
│   └── settings/page.tsx         # Pengaturan
├── components/
│   ├── dashboard/
│   │   └── AnalyticsCharts.tsx   # Professional analytics charts
│   └── layout/
│       ├── MainLayout.tsx        # Layout utama dengan sidebar
│       └── Sidebar.tsx           # Navigation sidebar
└── providers/
    └── chakra-provider.tsx       # Chakra UI theme provider
```

## 🎨 Design Features

### Dashboard Utama
- **Statistik Cards**: Total order, draft, terkirim, waiting BG
- **Analytics Dashboard**: Grafik profesional dengan visualisasi data interaktif
  - **Trend Analysis**: Area chart untuk trend order dan completion rate
  - **Revenue Charts**: Bar chart untuk analisis pendapatan bulanan
  - **Distribution Pie Charts**: Distribusi tipe dokumen dan status overview
  - **Weekly Activity**: Stacked bar chart aktivitas mingguan
  - **Key Metrics**: Real-time KPIs dengan growth indicators
  - **Interactive Features**: Filter periode, export data, refresh data
- **Document Types Grid**: BC 2.3, BC 1.6, BC 2.7, dll dengan status
- **Recent Activity**: Timeline aktivitas terbaru
- **Welcome Section**: Personalisasi untuk user Kensington

### Self Declare BC 16
- **List Management**: Tabel order dengan filter dan search
- **New Declaration Modal**: Pilihan metode (Form Manual, Upload Excel, AI - coming soon)
- **Multi-Step Form**: 9 tahapan sesuai user manual:
  1. Header - Info dasar pemberitahu
  2. Entitas - Data perusahaan
  3. Dokumen - Upload dokumen pelengkap
  4. Pengangkut - Transportasi dan kode tutup BC
  5. Kemasan dan Peti Kemas - Detail kemasan
  6. Transaksi - Valuta dan NDPBM
  7. Barang - Katalog barang dengan HS Code search
  8. Pungutan - Kalkulasi BM, BMKITE, BMT
  9. Pernyataan - Penanggung jawab

### Excel Upload
- **Drag & Drop Interface**: Upload file Excel dengan validasi
- **Template Download**: Download template sesuai format BC 16
- **Status Tracking**: Progress upload dan validasi
- **Instructions**: Panduan penggunaan step-by-step

### Document Pabean
- **Document Management**: List dokumen dengan status approval
- **Multi-type Support**: BC 1.1, BC 1.6, BC 2.3, BC 2.7, BC 4.0
- **Status Tracking**: Approved, Pending, Processing, Rejected, Expired
- **Bulk Operations**: Template download, bulk processing, archive

### Pengangkut
- **Dual Management**: Tab untuk Carriers dan Vehicles
- **Carrier Info**: Rating system, contact details, license tracking
- **Fleet Management**: Vehicle tracking, maintenance schedule
- **Live Features**: GPS tracking, performance report placeholder

### Barang
- **Product Catalog**: Comprehensive goods management
- **HS Code Lookup**: Search functionality untuk klasifikasi barang
- **Category Management**: Electronics, Textile, Furniture, Pharmaceutical
- **Inventory Tracking**: Stock status, pricing, tariff information

### Transaksi
- **Payment Management**: History transaksi dengan berbagai status
- **Payment Methods**: Bank Transfer, Virtual Account, E-Wallet, Credit Card
- **Analytics**: Revenue charts dan payment distribution
- **Multi-tax Support**: BEA_MASUK, PPN, CUKAI, PPH, BMKITE

### Pengaturan
- **5 Tab System**: Profile, Company, Security, Notifications, System
- **Profile Management**: User info dengan avatar dan role
- **Company Settings**: NPWP, NIB, customs license
- **Security Features**: Password change, 2FA toggle
- **System Config**: Language, timezone, currency settings

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) dengan browser untuk melihat aplikasi.

### Available Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint check
```

## 🎯 Key Features

### UI/UX
- **Responsive Design**: Mobile-first approach dengan breakpoints
- **Modern Interface**: Chakra UI components dengan custom theme
- **Interactive Elements**: Hover effects, loading states, animations
- **Accessibility**: ARIA labels, keyboard navigation support

### Data Presentation
- **Rich Tables**: Sortable, filterable dengan action menus
- **Professional Charts**: Area, Bar, dan Pie charts dengan Recharts
- **Interactive Analytics**: Tooltips, legends, dan filter periode
- **Statistics Cards**: Real-time metrics dengan trend indicators
- **Status Indicators**: Color-coded badges untuk status tracking
- **Progress Tracking**: Multi-step form dengan completion indicators
- **Export Features**: Data export ke Excel dengan toast notifications

### Mock Data
- **Realistic Content**: Data dummy yang representatif
- **Indonesian Context**: Perusahaan lokal, alamat Jakarta
- **Customs Terminology**: Terminology kepabeanan yang akurat
- **Status Variety**: Berbagai status dokumen untuk demo

## 📝 Notes

- Aplikasi ini adalah **mockup untuk presentasi** dan belum terintegrasi dengan backend
- Data yang ditampilkan adalah **dummy data** untuk demo purposes
- Form submissions akan menampilkan toast notification tanpa actual processing
- File uploads hanya simulasi tanpa actual file processing

---

**Built with ❤️ for customs and logistics professionals**
