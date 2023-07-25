import React from 'react';
import UserData from './user.json';

const Profile = () => {
  const { username, tag, location, avatar, stats } = UserData;
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt={tag} class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>
      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{stats.views} </span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
