import './App.css'
import Login from './Screens/Login'
import NavBar from './Components/Navbar'
import { useState } from 'react'

function App() {
  const [userType, setUserType] = useState('user-1')

  return (
    // <>
    //   <Login userType={"user-3"}/>
    // </>
    // <div className="flex">
    //   <NavBar />
    //   <div className="flex-grow bg-gray-100">
    //     {/* Your main content here */}
    //   </div>
    // </div>
    <div className="flex flex-col h-screen">
      <div className="h-1/2 flex items-center justify-center border-b">
      <div className="flex space-x-4">
            <button className="px-4 py-2 bg-gray-800 text-white rounded" onClick={() =>  setUserType('user-1')}>User 1</button>
            <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={() =>  setUserType('user-2')}>User 2</button>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded" onClick={() =>  setUserType('user-3')}>User 3</button>
          </div>
      </div>
      <div className="h-1/2 flex p-1">
      <NavBar userType={userType}/>
      </div>
    </div>
  )
}

export default App
