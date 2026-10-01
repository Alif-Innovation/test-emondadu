export default function ProgressBar({ value = 50, label, showValue = true }) {
  return (
    <div>
      {(label || showValue) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px' }}>
          {label && <span style={{ color: 'var(--text-secondary)' }}>{label}</span>}
          {showValue && <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{value}%</span>}
        </div>
      )}
      <div className="progress">
        <div className="progress-bar" style={{ width: `${value}%` }}></div>
      </div>
    </div>
  )
}
