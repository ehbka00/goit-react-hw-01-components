export const FriendList = ({friends}) => (
    <ul className ="friend-list">
        {friends.map(friend => (
            <li class="item" key={friend.id}>
                 <span className={friend.isOnline ? 'online' : 'offline'}></span>
                <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
                <p class="name">{friend.name}</p>
            </li>
        ))}
  </ul>
);