import { useEffect, useState } from 'react'
import { fetchUserData, fetchUsersData, patchUserData } from '../services/Users/user.service'
import styles from '../styles/Home.module.css'
import { getCookie, setCookie } from 'typescript-cookie'

function Setting() {
  interface users {
    username: string
    password: string
    email: string
  }

  const initialUser: users = { username: '', password: '00000000', email: '' }

  const [user, setUser] = useState<users>(initialUser)
  const [message, setMessage] = useState()
  const [userValid, setUserValid] = useState<boolean>()

  useEffect(() => {
    fetchUserData(getCookie('id')).then((data) => {
      const user = { username: data.username, password: data.password, email: data.email }
      setUser(user)
    })
    setMessage(getCookie('Message'))
    setUserValid(true)
  }, [])

  const handleSubmit = async () => {
    const users = await fetchUsersData()
    users.map((data) => {
      if (user.username === data.username || user.password.length < 8) {
        setUserValid(false)
      }
    })
    if (userValid) {
      patchUserData(getCookie('id'), user, getCookie('Authorization'))
        .then(() => {
          setCookie('Message', 'Modification réussie')
        })
        .catch(() => {
          setCookie('Message', 'Invalide')
        })
    } else {
      setCookie('Message', 'Username or password incorrect')
    }
  }

  const onChangeHandler = (event: HTMLInputElement) => {
    const { name, value } = event
    setUser((prev) => {
      return { ...prev, [name]: value }
    })
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Username:</td>
              <td>
                <input
                  className={styles.registerForm}
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={(e) => onChangeHandler(e.target)}
                />
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                <input
                  className={styles.registerForm}
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={(e) => onChangeHandler(e.target)}
                />
              </td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>
                <input
                  className={styles.registerForm}
                  type="text"
                  name="password"
                  value={user.password}
                  onChange={(e) => onChangeHandler(e.target)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <button type="submit">Submit</button>
              </td>
              <td>
                <small className={styles.errorMsg}>{message}</small>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default Setting
