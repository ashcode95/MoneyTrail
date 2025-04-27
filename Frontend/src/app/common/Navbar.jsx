import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { useTracked } from './../../Store';

const Navbar = () => {
  const [state, dispatch] = useTracked();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <nav className="p-d-flex p-jc-between p-ai-center p-p-3">
      <div className="p-d-flex p-ai-center">
        <Link to="/" className="p-mr-3">
          <Button label="Home" className="p-button-text" />
        </Link>
        <Link to="/dashboard" className="p-mr-3">
          <Button label="Dashboard" className="p-button-text" />
        </Link>
        <Link to="/settings" className="p-mr-3">
          <Button label="Settings" className="p-button-text" />
        </Link>
      </div>
      <div>
        <Button label="Logout" onClick={handleLogout} />
      </div>
    </nav>
  );
};

export default Navbar; 