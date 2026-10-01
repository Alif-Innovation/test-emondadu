export default function PieChart({ segments }) {
  return (
    <div className="chart-container">
      <svg className="chart-pie" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="#f0f2f7" strokeWidth="25"></circle>
        {segments.map((seg, idx) => (
          <circle
            key={idx}
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke={seg.color}
            strokeWidth="25"
            strokeDasharray={`${seg.dash} 251.2`}
            strokeDashoffset={seg.offset}
            style={{ transform: 'rotate(-90deg)', transformOrigin: '50px 50px' }}
          ></circle>
        ))}
      </svg>

      <div className="chart-legend">
        {segments.map((seg, idx) => (
          <div key={idx} className="chart-item">
            <div className="chart-dot" style={{ background: seg.color }}></div>
            <span>{seg.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
