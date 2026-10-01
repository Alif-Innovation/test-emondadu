export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  onClick,
  ...props
}) {
  const variantClass = `btn-${variant}`
  const sizeClass = size !== 'md' ? `btn-${size}` : ''
  const blockClass = block ? 'btn-block' : ''

  return (
    <button
      className={`btn ${variantClass} ${sizeClass} ${blockClass}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
