import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(( {avatar, name, isOnline, id})  => (
        <FriendListItem 
        key={id}
        id={id} 
        name={name}
        isOnline={isOnline}
        avatar={avatar}
        />
      ))}
    </ul>
  );
};
export default FriendList;