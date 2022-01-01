import * as React from "react";

interface IUser {
  name: string;
  age: number;
}

interface IProps {
  users: IUser[];
}

interface IState {
  name: string;
  user: undefined | IUser;
}

class UserSearch extends React.Component<IProps, IState> {
  state: IState = {
    name: "",
    user: undefined,
  };

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState({
      name: value,
    });
  };

  onClick = () => {
    const { users } = this.props;
    const { name } = this.state;

    const user = users.find((user) => user.name === name);

    this.setState({
      name: "",
      user,
    });
  };

  render() {
    const { name, user } = this.state;

    return (
      <div>
        <h3>User Search</h3>

        <input value={name} onChange={this.onChange}></input>
        <button onClick={this.onClick}>Find User</button>
        {user && (
          <div>
            <h3>User found</h3>

            {user.name}
          </div>
        )}
      </div>
    );
  }
}

export default UserSearch;
