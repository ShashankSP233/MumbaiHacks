"use client";

import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

interface SidebarComponentProps {
  setSelectedMenuItem: (item: string) => void;
  chatHistories: { id: string; history: string }[];
}

export default function SidebarComponent({ setSelectedMenuItem, chatHistories }: SidebarComponentProps) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='shadow-md h-screen'>
      {isOpen && (
        <Sidebar className="">
          <div className='flex justify-between px-2'>
            <h1>Activity</h1>
            <button onClick={toggleSidebar} className="close-button">
              ✖
            </button>
          </div>
          <Menu>
            <MenuItem onClick={() => setSelectedMenuItem('Dashboard')}> Dashboard </MenuItem>
            <MenuItem onClick={() => setSelectedMenuItem('Profile')}> Profile </MenuItem>
            <MenuItem onClick={() => setSelectedMenuItem('History')}> History </MenuItem>
            <SubMenu label="Charts">
              <MenuItem onClick={() => setSelectedMenuItem('Pie charts')}> Pie charts </MenuItem>
              <MenuItem onClick={() => setSelectedMenuItem('Line charts')}> Line charts </MenuItem>
            </SubMenu>
            <MenuItem onClick={() => setSelectedMenuItem('Documentation')}> Documentation </MenuItem>
            <MenuItem onClick={() => setSelectedMenuItem('Calendar')}> Calendar </MenuItem>
          </Menu>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Chat Histories</h2>
            {chatHistories && chatHistories.length > 0 ? (
              chatHistories.map((chat, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-semibold">{chat.id}</h3>
                  <pre className="bg-gray-100 p-2 rounded overflow-auto max-h-64">{chat.history}</pre>
                </div>
              ))
            ) : (
              <p>No chat histories available.</p>
            )}
          </div>
        </Sidebar>
      )}
      {!isOpen && (
        <button onClick={toggleSidebar} className="open-button">
          ☰
        </button>
      )}
    </div>
  );
}