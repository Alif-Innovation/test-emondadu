import { useState } from 'react'
import Header from './components/Header'
import Alert from './components/Alert'
import Card, { CardHeader, CardTitle, CardSubtitle } from './components/Card'
import Button from './components/Button'
import Stat from './components/Stat'
import Section from './components/Section'
import ProfileCard from './components/ProfileCard'
import Grid from './components/Grid'
import ProgressBar from './components/ProgressBar'
import PieChart from './components/PieChart'
import './styles/index.css'
import './styles/components.css'

export default function App() {
  const [activeTab, setActiveTab] = useState('Beranda')

  const profileItems = [
    { label: 'Kecamatan', value: 'Bengalon' },
    { label: 'Kabupaten', value: 'Kutai Timur' },
    { label: 'Pagu RT', value: 'Rp100.000.000' },
    { label: 'Dasar Hukum', value: 'Perbup 13/2025' },
  ]

  const desilSegments = [
    { color: '#2563eb', dash: 78.5, offset: 0, label: 'Desil 1-3 (Prasejahtera): 125 rumah' },
    { color: '#60a5fa', dash: 62.8, offset: -78.5, label: 'Desil 4-7 (Sejahtera): 340 rumah' },
    { color: '#dbeafe', dash: 50, offset: -141.3, label: 'Desil 8-10 (Maju): 216 rumah' },
  ]

  const infrastructureItems = [
    { label: 'Jalan Utama', value: 15, percent: 100 },
    { label: 'Jembatan', value: 4, percent: 60 },
    { label: 'Sarana Air Bersih', value: 8, percent: 75 },
    { label: 'Sarana Kesehatan', value: 3, percent: 45 },
    { label: 'Sarana Pendidikan', value: 6, percent: 80 },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="container">
        <div className="content">
          <div className="main">
            {/* PAGE HEADER */}
            <div className="page-header">
              <h1 className="page-title">Dashboard RT 02</h1>
              <p className="page-subtitle">Desa Sepaso Selatan · Kecamatan Bengalon · Tahun Anggaran 2026</p>
            </div>

            {/* ALERT */}
            <Alert type="info">
              <strong>Informasi:</strong> Dana RT dikelola dan dipertanggungjawabkan desa. RT hanya mengusulkan — penetapan ada di Musdes, pencatatan di APBDes.
            </Alert>

            {/* PROFILE SECTION */}
            <ProfileCard
              name="Pak Sudirman"
              role="Ketua RT 02 · Sepaso Selatan"
              avatar="SD"
              items={profileItems}
            />

            {/* QUICK ACTIONS */}
            <Grid columns="grid-2">
              <Card clickable={true}>
                <CardHeader
                  title="Jadwal Aktif Sekarang"
                  subtitle="Periode pengajuan usulan"
                  label="Aktif"
                />
                <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--primary)', margin: '12px 0' }}>
                  Pengajuan Usulan
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: "'JetBrains Mono', monospace" }}>
                  1 Oktober - 31 Oktober 2026
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '8px', lineHeight: '1.6' }}>
                  Selanjutnya: Penilaian & Ranking (1-15 Nov)
                </div>
                <Button variant="primary" block={true} style={{ marginTop: '16px' }}>
                  Buat Usulan Sekarang
                </Button>
              </Card>

              <Card>
                <CardHeader
                  title="Periode Berikutnya"
                  subtitle="Penilaian & Ranking"
                />
                <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  <div style={{ marginBottom: '8px' }}>✓ Pengajuan Usulan</div>
                  <div style={{ marginBottom: '8px' }}>⏳ Penilaian & Ranking</div>
                  <div>⏳ Penetapan Hasil</div>
                </div>
              </Card>
            </Grid>

            {/* STATS SECTION */}
            <Section number="1" title="Informasi Dana">
              <Grid columns="grid-2">
                <Stat
                  label="Anggaran RT 02"
                  value="Rp100.000.000"
                  status="Aktif"
                />
                <Stat
                  label="Anggaran Desa Sepaso"
                  value="Rp500.000.000"
                  footer="Untuk 5 RT di desa"
                />
                <Stat
                  label="Bantuan Khusus Desa"
                  value="Rp250.000.000"
                  footer="Dari Kabupaten untuk prioritas infrastruktur"
                />
                <Stat
                  label="Total Anggaran Potensial"
                  value="Rp850.000.000"
                  footer="Keseluruhan sumber dana"
                />
              </Grid>
            </Section>

            {/* DEMOGRAPHICS SECTION */}
            <Section number="2" title="Informasi Kependudukan">
              <Grid columns="grid-3">
                <Card>
                  <CardSubtitle>Jumlah Penduduk</CardSubtitle>
                  <div style={{ fontSize: '36px', fontWeight: '700', color: 'var(--primary)', margin: '12px 0' }}>
                    2.847
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
                    Terdaftar di RT 02
                  </div>
                </Card>

                <Card>
                  <CardSubtitle>Jumlah Kepala Keluarga</CardSubtitle>
                  <div style={{ fontSize: '36px', fontWeight: '700', color: 'var(--primary)', margin: '12px 0' }}>
                    681
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
                    Keluarga aktif
                  </div>
                </Card>

                <Card>
                  <CardSubtitle>Rumah Tangga Prasejahtera</CardSubtitle>
                  <div style={{ fontSize: '36px', fontWeight: '700', color: 'var(--warning)', margin: '12px 0' }}>
                    156
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
                    Prioritas program
                  </div>
                </Card>
              </Grid>
            </Section>

            {/* DESIL SECTION */}
            <Section number="3" title="Statistik DESIL & Infrastruktur">
              <Grid>
                {/* DESIL Card */}
                <Card>
                  <CardTitle>Sebaran Desil Rumah Tangga</CardTitle>
                  <CardSubtitle>Berdasarkan data kesejahteraan terintegrasi</CardSubtitle>

                  <PieChart segments={desilSegments} />

                  <div className="divider"></div>
                  <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', lineHeight: '1.6' }}>
                    Sumber data kesejahteraan terintegrasi. Dipakai sebagai dasar penajaman sasaran kegiatan dan program pembangunan.
                  </div>
                </Card>

                {/* INFRASTRUCTURE Card */}
                <Card>
                  <CardTitle>Infrastruktur Desa</CardTitle>
                  <CardSubtitle>Data infrastruktur terdata di wilayah RT 02</CardSubtitle>

                  <div className="list" style={{ marginTop: '16px' }}>
                    {infrastructureItems.map((item, idx) => (
                      <div key={idx}>
                        <ProgressBar
                          label={item.label}
                          value={item.percent}
                          showValue={true}
                        />
                      </div>
                    ))}
                  </div>
                </Card>
              </Grid>
            </Section>

            {/* LEGAL BASIS SECTION */}
            <Section number="4" title="Perencanaan Pembangunan Desa">
              <Card>
                <CardTitle>Dasar Hukum Program Dana RT</CardTitle>
                <CardSubtitle>Landasan regulasi pelaksanaan program</CardSubtitle>

                <div style={{ marginTop: '16px' }}>
                  <div style={{ background: 'var(--primary-lighter)', borderLeft: '4px solid var(--primary)', padding: '16px', borderRadius: 'var(--radius-md)', marginBottom: '12px' }}>
                    <div style={{ fontWeight: '700', color: 'var(--primary)', marginBottom: '4px' }}>
                      Peraturan Bupati No. 13 Tahun 2025
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      Tentang Pelaksanaan Dana Rukun Tetangga dan Program Inovasi Desa untuk Pemberdayaan Masyarakat Lokal dalam Perencanaan Pembangunan Desa Terintegrasi
                    </div>
                  </div>

                  <div style={{ background: 'var(--bg-tertiary)', borderLeft: '4px solid var(--text-tertiary)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontWeight: '700', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                      Arahan Bupati AB-01
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      Berlaku di seluruh alur — Dana RT dikelola dan dipertanggungjawabkan desa. RT hanya mengusulkan — penetapan ada di Musdes, pencatatan di APBDes.
                    </div>
                  </div>
                </div>
              </Card>
            </Section>

            {/* FOOTER SPACING */}
            <div style={{ height: '40px' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
