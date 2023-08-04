import React from 'react';
import Profile from './profile/Profile.jsx';
import userData from '../data/user.json';
import Statistics from './statistics/statistics.jsx';
import stats from '../data/data.json';
import FriendList from './FriendsList/FliendList.jsx';
import friendsData from '../data/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';
import transactions from '../data/transactions.json';

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
      <Profile {...userData} />
      <Statistics stats={stats} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
