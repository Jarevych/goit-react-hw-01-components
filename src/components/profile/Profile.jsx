import React from 'react';
import UserData from '../data/user.json';
import PropTypes from "prop-types";
import { ProfileContainer, ProfileBlock, Avatar, Name, Tag, Location, StatsList, StatItem } from '../styles/ProfileStyles'

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
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.number,
}
export default Profile;
