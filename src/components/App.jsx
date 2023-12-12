import { Fragment } from "react";
import { Profile } from "./Profile";
import { Statistics } from "./Statistics";
import { FriendList } from "./FriendList";
import { TransactionHistory } from "./TransactionHistory";

import user from 'data/user.json';
import statistics from'data/statistics.json';
import friends from'data/friends.json';
import transactions from'data/transactions.json';

export const App = () => (
  <Fragment>
  <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
  <Statistics
    title="Upload stats"
    stats={statistics}
  />
  <FriendList
    friends={friends}
  />
  <TransactionHistory
    items={transactions}
  />
</Fragment>
);