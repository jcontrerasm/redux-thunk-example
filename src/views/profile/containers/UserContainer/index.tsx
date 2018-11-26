import * as React from 'react';
import { connect } from 'react-redux';
import { myThunk } from '@app/src/views/profile/state/user/services';
import { UserList } from '@app/src/views/profile/components/UserList';

interface IProps {
  myThunk(): any,
  userData: object[]
  error: any;
  fetching: boolean;
}

export class UserContainer extends React.Component<IProps, {}> {

  public componentDidMount() {
    const { myThunk } = this.props;
    myThunk();
  }

  public render(): JSX.Element {
    const { userData } = this.props;

    return(
      <React.Fragment>
        { userData.length > 0
          ? <React.Fragment>
              <h1>Títulos de Usuarios:</h1>
              <UserList userData={userData}/>
            </React.Fragment>
          : <div>Loading...</div>
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) => state.user;

const mapDispatchToProps = (dispatch: any) => ({
  myThunk: () => dispatch(myThunk())
});

export const UserContainerConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
