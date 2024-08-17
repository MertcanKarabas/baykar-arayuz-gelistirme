import React from 'react';

const UserCard = ({ logo, title, description, user }) => {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg p-4 w-64">
      <div className="flex items-center mb-4">
        <img src={logo} alt="logo" className="h-10 w-10 mr-3" />
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <div className='h-full'>
        <p className="text-gray-700 mb-4 text-sm">{description}</p>
      </div>
      <div className="flex items-center">
        <img src={user.image} alt={user.name} className="h-8 w-8 rounded-full mr-3" />
        <div>
          <h3 className="text-sm font-medium">{user.name}</h3>
          <p className="text-xs text-gray-500">{user.position}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;