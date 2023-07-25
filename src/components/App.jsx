import React from 'react';
import Profile from '../profile/Profile.jsx';
import Statistics from '../statistics/statistics.jsx';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={Profile.username}
        tag={Profile.tag}
        location={Profile.location}
        avatar={Profile.avatar}
        stats={Profile.stats}
      />
      <Statistics/>
    </div>
  );
};


