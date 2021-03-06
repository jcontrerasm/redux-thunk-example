import * as React from 'react';
import { UserContainerConnected } from '@app/src/views/profile/containers/UserContainer';

export class Profile extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return(
      <React.Fragment>
        <UserContainerConnected />
      </React.Fragment>
    );
  }
}
