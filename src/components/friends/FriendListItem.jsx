import styled from 'styled-components';

const FriendItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  text-align: center;
  font-size: 18px;
  line-height: 1.2;
  color: #111;
  padding: 10px 15px;
  width: 200px;
  border: 1px solid #cbd5e1;
  box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.5);
  gap: 10px;
  .avatar {
    background-color: blue;
    border-radius: 20%;
  }
  .name {
    font-size: 24px;
    font-weight: bold;
  }
`;
const OnlineStatusCircle = styled.span`
  display: flex;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: green;
`;

const OfflineStatusCircle = styled.span`
  display: flex;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: red;
`;

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
