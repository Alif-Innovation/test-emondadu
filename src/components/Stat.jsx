export default function Stat({ label, value, footer, status }) {
  return (
    <div className="stat">
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      {status && (
        <div style={{ display: 'inline-block', padding: '4px 10px', background: 'var(--success-light)', color: 'var(--success)', borderRadius: 'var(--radius-sm)', fontSize: '11px', fontWeight: '600' }}>
          {status}
        </div>
      )}
      {footer && <div className="stat-footer">{footer}</div>}
    </div>
  )
}
