export default function Card({ children, className = '', hoverable = false, clickable = false }) {
  const classes = `card ${hoverable ? 'hoverable' : ''} ${clickable ? 'clickable' : ''} ${className}`
  return <div className={classes}>{children}</div>
}

export function CardHeader({ children, title, subtitle, label }) {
  return (
    <div className="card-header">
      <div>
        {title && <div className="card-title">{title}</div>}
        {subtitle && <div className="card-subtitle">{subtitle}</div>}
      </div>
      {label && <span className="card-label">{label}</span>}
      {children}
    </div>
  )
}

export function CardTitle({ children }) {
  return <div className="card-title">{children}</div>
}

export function CardSubtitle({ children }) {
  return <div className="card-subtitle">{children}</div>
}
