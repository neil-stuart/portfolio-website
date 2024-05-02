"use client"
// DataContext.js
import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [projectsData, setProjectsData] = useState(null);

  return (
    <DataContext.Provider value={{ projectsData, setProjectsData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);