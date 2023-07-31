import React, { createContext, useEffect, useState } from 'react'

export const AllUsers = createContext()


const ContextUsers = ({ children }) => {
    const [totalRandomUser, setTotalRandomUser] = useState([])

    
    useEffect(() => {
        const RandomUser = async () => {
            try {
              const response = await fetch("https://randomuser.me/api?results=5&noinfo");
          
              if (!response.ok) {
                throw new Error("Failed to fetch Coffee");
          
              }
              const data = await response.json();
          
              return data;
            } catch (error) {
              throw new Error(error.message);
            }
          }
        RandomUser().then(data => setTotalRandomUser(data.results))
    }, [])
  return (
    <AllUsers.Provider value={{ totalRandomUser }}>
        {children}
    </AllUsers.Provider>
  )
}

export default ContextUsers