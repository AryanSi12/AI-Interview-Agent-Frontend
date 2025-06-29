import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'

import { Outlet } from 'react-router-dom'
import { Toaster } from 'sonner'
import useUserStore from './store/useUserStore'


function App() {
  useEffect(() => {
  const { user, clearUser } = useUserStore.getState();
  
  if (user && user.expiresAt && Date.now() > user.expiresAt) {
    clearUser();
  
    console.log('Session expired. Logged out.');
  }
}, []);

  return (
    <>
      <Toaster richColors position="top-right" />
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
        <Navbar />
        
        <main>
          <div className='ml-3 mr-3  md:ml-24 md:mr-24 '>
            <Outlet />
          </div>
          
        </main>
      </div>

    </>
  )
}

export default App