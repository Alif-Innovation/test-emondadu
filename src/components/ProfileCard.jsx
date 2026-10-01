export default function ProfileCard({ name, role, avatar, items }) {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="profile-avatar">{avatar}</div>
        <div className="profile-info">
          <div className="profile-name">{name}</div>
          <div className="profile-role">{role}</div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="list">
        {items.map((item, idx) => (
          <div key={idx} className="list-item">
            <span className="list-label">{item.label}</span>
            <span className="list-value">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
