import React from "react"
import User from "./User"

class UsersList extends React.Component {
    get users() {
      return this.props.users.map(user => <User key={user.id} user={user}/>);
    }
  
    render() {
      return (
        <div>
          {this.users}
        </div>
      );
    }
  }

export default UsersList