// Sidebar.tsx
import React from 'react';

const navItems = ['Home', 'About', 'Contact'];

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen fixed left-0 top-0 bg-blue-gray-900 text-white p-5">
      <h2 className="text-2xl mb-5">Logo</h2>
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item} className="hover:bg-blue-950 p-2 rounded">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
