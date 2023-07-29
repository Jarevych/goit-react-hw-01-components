import React from 'react';
import UserData from './user.json';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  width: 300px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Roboto, sans-serif;
  background-color: #fFF;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const ProfileBlock = styled.div`
  display: flex;
  width: 260px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Arial, sans-serif;
  background-color: #fFF;
  border-radius: 8px;
  padding: 20px;
`

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const Tag = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0;
`;

const Location = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

const StatsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  font-size: 0;
  background-color: #e5e7eb;
`;

const StatItem = styled.li`
  width: 98px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #cbd5e1;

  .label {
    font-size: 16px;
    color: #666;
  }

  .quantity {
    font-size: 24px;
    font-weight: bold;
  }
`;

const Profile = () => {
  const { username, tag, location, avatar, stats } = UserData;
  return (
    <ProfileContainer>
      <ProfileBlock>
      <Avatar src={avatar} alt={tag} />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
      </ProfileBlock>
      <StatsList>
        <StatItem>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </StatItem>
        <StatItem>
          <span className="label">Views</span>
          <span className="quantity">{stats.views} </span>
        </StatItem>
        <StatItem>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </StatItem>
      </StatsList>
    </ProfileContainer>
  );
};
export default Profile;
