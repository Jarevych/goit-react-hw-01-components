import React from 'react';
import Profile from './profile/Profile.jsx';
import Statistics from './statistics/stat.jsx';
import statData from '../components/data/data.json';
import FriendList from './friends/FliendList.jsx';
import friendsData from './data/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        margin: '20px auto',
        width: '1440px',
        display: 'flex',
        flexDirection: 'column',
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
      <Statistics statData={statData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
