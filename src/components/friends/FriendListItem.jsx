import {
  FriendItem,
  OnlineStatusCircle,
  OfflineStatusCircle,
} from '../styles/FriendListItemStyles';
import PropTypes from 'prop-types';


const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      {isOnline ? <OnlineStatusCircle /> : <OfflineStatusCircle />}
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
}
export default FriendListItem;
