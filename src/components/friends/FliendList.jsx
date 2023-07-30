import FriendListItem from './FriendListItem';
import { FriendsList } from '../styles/FriendsStyles';

const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          id={id}
          name={name}
          isOnline={isOnline}
          avatar={avatar}
        />
      ))}
    </FriendsList>
  );
};
export default FriendList;
