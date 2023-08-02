import FriendListItem from './FriendListItem';
import { FriendsList } from '../styles/FriendsStyles';
import PropTypes from 'prop-types';

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
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
}
export default FriendList;
