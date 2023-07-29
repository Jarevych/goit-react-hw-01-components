import React from 'react';
import Profile from './profile/Profile.jsx';
import Statistics from './statistics/stat.jsx';
import statData from '../components/data/data.json';
import FriendList from './friends/FliendList.jsx';
import friendsData from './friends/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        width: '1440px',
        // height: '100vh',
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
