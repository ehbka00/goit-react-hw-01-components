export const Profile = ({...data}) => (
    <div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">{data.username}</p>
    <p class="tag">{data.tag}</p>
    <p class="location">{data.location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{data.stats.followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{data.stats.views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{data.stats.likes}</span>
    </li>
  </ul>
</div>
);
