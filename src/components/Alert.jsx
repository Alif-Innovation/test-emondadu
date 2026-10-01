export default function Alert({ type = 'info', children }) {
  const typeClass = {
    info: 'alert-info',
    success: 'alert-success',
    warning: 'alert-warning',
  }[type]

  const icons = {
    info: 'ℹ️',
    success: '✓',
    warning: '⚠',
  }

  return (
    <div className={`alert ${typeClass}`}>
      <div className="alert-icon">{icons[type]}</div>
      <div>{children}</div>
    </div>
  )
}
