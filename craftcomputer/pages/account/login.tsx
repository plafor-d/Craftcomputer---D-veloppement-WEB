import React, { useState } from 'react'
import { fetchUsersData, loginUser } from '../../services/Users/user.service'
import { getCookie, setCookie } from 'typescript-cookie'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import { FooterSite, HeaderSite, Navbar } from '../../component'
import RegisterForm from '../../component/register'

export default function Login() {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()
  const [message, setMessage] = useState()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await loginUser({
      username,
      password
    })
      .then((res) => {
        setCookie('Authorization', res.accessToken)
      })
      .catch(() => {
        setMessage('Username or password incorrect')
      })
    if (getCookie('Authorization') !== undefined) {
      const users = await fetchUsersData()
      users.map((data) => {
        if (data.username === username && data.password === password) {
          setCookie('id', data.id)
        }
      })
      router.push({
        pathname: '/account'
      })
    }
  }

  return (
    <div>
      <HeaderSite />
      <Navbar />
      <div className={styles.gridlog}>
        <div className={styles.login}>
          <h1>Please Log In</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Username</p>
              <input type="text" onChange={(e) => setUserName(e.target.value)} />
            </label>
            <label>
              <p>Password</p>
              <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
            <small className={styles.errorMsg}>{message}</small>
          </form>
        </div>
        <div className={styles.register}>
          <h1>Register</h1>
          <RegisterForm />
        </div>
      </div>
      <FooterSite />
    </div>
  )
}
