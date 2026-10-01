export default function Section({ number, title, children }) {
  return (
    <div className="section">
      <div className="section-header">
        <div className="section-number">{number}</div>
        <div className="section-title">{title}</div>
      </div>
      {children}
    </div>
  )
}
