import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';
import { withRouter } from 'react-router-dom';
import '../App.css';
class FriendsList extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    if (this.props.fetchingFriends)
      return (
        <img className="loading"
          src="https://www.lamoillesouthsu.org/images/loading.gif"
          alt=""
          loadcircle
        />
      );
    return (
      <div className='friendcontainer'>
        <div className="friends">
          {this.props.friends.map(friend => (
            <div className="buddy" key={friend.id}>
              <h3>{friend.name}</h3>
              <p>Age:{friend.age}</p>
              <p>
                Email: <a href="mailto:{friend.email}">{friend.email}</a>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ friends, fetchingFriends }) => ({
  friends,
  fetchingFriends
});

export default withRouter(
  connect(
    mapStateToProps,
    { getFriends }
  )(FriendsList)
);
