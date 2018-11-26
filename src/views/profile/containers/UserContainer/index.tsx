import * as React from 'react';
import { connect } from 'react-redux';
import { myThunk } from '@app/src/views/profile/state/user/thunk';
import { UserList } from '@app/src/views/profile/components/UserList';

interface IProps {
  myThunk(): void,
  userData: object[]
}

export class UserContainer extends React.Component<IProps, {}> {

  componentDidMount() {
    const { myThunk } = this.props;
    myThunk();
  }

  public render(): JSX.Element {
    const { userData } = this.props;
    console.log(userData);
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

const mapStateToProps = ({ user }) => user;

const mapDispatchToProps = (dispatch: any) => ({
  myThunk: (payload: number) => dispatch(myThunk(payload))
});

export const UserContainerConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
