import FriendListItem from './FriendListItem';
import styled from 'styled-components';

const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 10px;
`;

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
