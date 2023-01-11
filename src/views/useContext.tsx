
import React, { createContext, useContext, useState } from "react";

const initialState = {
  first: 'Jack',
  last: 'Li'
}
type UserState = typeof initialState;
const UserContext = createContext<UserState>(initialState);


const UseContextPage: React.FC = () => {
  const [user, setUser] = useState<UserState>({
    first: 'Jacky',
    last: 'Chen'
  })

  return <UserContext.Provider value={user} >
    <ConsumerComponent></ConsumerComponent>
    <button onClick={() => setUser({ first: 'Josie', last: 'Wales' })}>change context</button>
  </UserContext.Provider >
}
export default UseContextPage;


function ConsumerComponent() {
  let context = useContext<UserState>(UserContext)
  return (
    <div>
      <p>first name {context.first}</p>
      <p>last name {context.last}</p>
    </div>
  )
}
