import * as React from 'react';

interface ICounterProps {
  userData: object[];
}

export const UserList: React.SFC<ICounterProps> = ({ userData }) => (
  <React.Fragment>
  { userData.length > 0 && userData.map((user: any, index: number) => (
      <div key={user.id}>
        <span>{index + 1}.- </span>
        <span>{user.title}</span>
      </div>
    ))
  }
  </React.Fragment>
);
