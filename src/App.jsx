import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          // In useEffect where user data is fetched
          dispatch(login(userData)); // Direct payload without nesting
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false)); // Add this line
  }, []);

  return !loading ? (
    <div className='min-h-screen w-full bg-white'>
      <Header />
      <main className='w-full'>
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null

}
export default App