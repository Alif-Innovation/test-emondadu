import { useState } from 'react'
import '../styles/components.css'

export default function Header({ activeTab, setActiveTab }) {
  const tabs = ['Beranda', 'Usulan', 'Laporan', 'Dokumen']

  return (
    <header className="header">
      <a href="#" className="logo">
        <div className="logo-icon">EM</div>
        <div>
          <div className="logo-text-primary">Emondadu</div>
          <div className="logo-text-secondary">Platform Dana RT</div>
        </div>
      </a>

      <nav className="header-nav">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      <div className="header-status">
        <span>🔒 Parameter TA 2026 terkunci</span>
        <div className="status-indicator"></div>
        <span style={{ color: 'var(--success)' }}>Sinkron</span>
      </div>
    </header>
  )
}
