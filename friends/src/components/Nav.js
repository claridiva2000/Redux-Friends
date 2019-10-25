import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
      <nav>
        <h1>FriendsList</h1>
        <NavLink to="/login">Login</NavLink>
      </nav>

  );
}
