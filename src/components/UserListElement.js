import React from 'react';
import PropTypes from 'prop-types';

export default class UserListElement extends React.Component{

  render(){
    const user = this.props.user;
    return(
      <tr>
        <td>#{user.id}</td>
        <td>{user.username}</td>
        <td>{user.job}</td>
        <td>
          <a href={'/user-edit/' + user.id}>
            Edit
          </a>
        </td>
        <td>
          <button data-id={user.id}>Delete</button>
        </td>
      </tr>
    );
  }
}
// make sure we have all the props
UserListElement.propTypes = {
  user: PropTypes.object.isRequired 
}
