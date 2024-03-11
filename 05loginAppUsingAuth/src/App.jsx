import React from 'react'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'
import Profile from './components/Profile'
import { useAuth0 } from '@auth0/auth0-react'

const App = () => {
  const { isAuthenticated, isLoading, error } = useAuth0()
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  if (isAuthenticated) {
    return (
      < >
        <div className='main w-full h-screen bg-sky-950 text-white'>

          <LogoutBtn />
          <Profile />
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className='main w-full h-screen bg-sky-950 text-white'>
          <LoginBtn />
        </div>
      </>
    )
  }


}

export default App