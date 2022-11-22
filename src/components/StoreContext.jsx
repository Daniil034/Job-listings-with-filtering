import React, { useState } from "react";
import data from "../../data.json";

export const StoreContext = React.createContext();

export const StoreArea = ({ children }) => {
  const [filterList, setFilterList] = useState([]);
  const [jobsList, setJobsList] = useState(data);

  return (
    <StoreContext.Provider
      value={{ filterList, setFilterList, jobsList, setJobsList }}
    >
      {children}
    </StoreContext.Provider>
  );
};
