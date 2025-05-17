import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const DashboardPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="dashboard">
      <h2>Willkommen, {user?.role || 'Nutzer'}</h2>
      <p>Dies ist dein Admin-Dashboard.</p>
    </div>
  );
};

export default DashboardPage;
