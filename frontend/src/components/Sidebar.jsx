import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ className }) => {
  return (
    <div className={`${className} bg-gray-800 text-white min-h-screen`}>
      <nav className="mt-8">
        <ul>
        
          <li>
            <Link 
              to="/admin/manage-bookings" 
              className="block p-2 text-white rounded hover:bg-gray-700"
            >
              Bookings
            </Link>
          </li>
          <li>
            <Link 
              to="/admin/manage-courts" 
              className="block p-2 text-white rounded hover:bg-gray-700"
            >
              Courts
            </Link>
          </li>
          {/* <li>
            <Link 
              to="/admin/manage-users" 
              className="block p-2 text-white rounded hover:bg-gray-700"
            >
              Users
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export { Sidebar };
