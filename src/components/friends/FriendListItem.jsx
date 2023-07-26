const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li class="item">
      <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
};
export default FriendListItem;
