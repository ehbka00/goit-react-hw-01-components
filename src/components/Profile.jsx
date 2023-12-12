

export const Profile = ({...data}) => (
    <div className="profile">
  <div className="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      className="avatar"
    />
    <p className="name">{data.username}</p>
    <p className="tag">{data.tag}</p>
    <p className="location">{data.location}</p>
  </div>

  <ul className="stats">
  {Object.entries(data.stats).map(([key, value]) => (
        <li key={key}>
          <span className="label">{key}</span>
          <span className="quantity">{value}</span>
        </li>
      ))}
  </ul>
</div>
);
