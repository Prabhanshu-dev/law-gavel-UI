// src/components/Dashboard.js
import React from 'react';
import NavScrollExample from './navbar'; // Import the navbar component
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
   return (
       <>
            <NavScrollExample /> {/* Include the navbar component */}
            <h2>Welcome to the Dashboard</h2>
          </>
   );
};

export default Dashboard;
