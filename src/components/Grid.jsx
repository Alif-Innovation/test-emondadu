export default function Grid({ children, columns = 'auto-fit', className = '' }) {
  const gridClass = {
    'auto-fit': 'grid',
    'grid-2': 'grid-2',
    'grid-3': 'grid-3',
  }[columns] || 'grid'

  return <div className={`${gridClass} ${className}`}>{children}</div>
}
