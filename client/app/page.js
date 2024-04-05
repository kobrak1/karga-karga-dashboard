'use client'

import { useEffect, useState } from "react";
import loginService from './services/login.js'
import dashboardService from './services/service.js'
import { message } from 'antd';
import './styles/globals.css'
// components
import Login from './components/Login.js'

// This is the child component
export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // effect hook to keep the user logged in after any re-render operation
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      dashboardService.setToken(user.data.token)
    }
    setLoading(false)  // update the loading state after the useEffect  completes
  }, [])

  // handle login
  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const user = await loginService.login({
        email,
        password,
      })

      console.log(user);

      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      dashboardService.setToken(user.data.token)

      setUser(user)
      setEmail('')
      setPassword('')

      console.log(`${user.data.fullName} logged in successfully`)
      message.success(`${user.data.fullName} logged in successfully`)
    } catch (error) {
      console.error('login failed:', error.message)
      message.error('login failed!')
    }
  }

  // handle logout
  const handleLogout = () => {
    window.localStorage.removeItem('loggedUser')
    setUser(null)
    message.success(`${user.data.fullName} logged out`)
    console.log(`${user.data.fullName} logged out`)
  }

  // render loading state while user authentication is ongoing
  if (loading) {
    return <div>loading...</div>
  }

  // login form will be shown only if the user is not logged in
  if (user === null) {
    return (
      <Login 
      email={email} 
      setEmail={setEmail} 
      password={password} 
      setPassword={setPassword} 
      handleLogin={handleLogin}
    />
    )
  }

  return (
    <>
      <h2>{user.data.fullName} logged in successfully</h2>
      <button onClick={() => handleLogout()}>logout</button>
    </>
  );
}
