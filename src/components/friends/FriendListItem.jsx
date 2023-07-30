import {
  FriendItem,
  OnlineStatusCircle,
  OfflineStatusCircle,
} from '../styles/FriendsStyles';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      {isOnline ? <OnlineStatusCircle /> : <OfflineStatusCircle />}
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </FriendItem>
  );
};
export default FriendListItem;
