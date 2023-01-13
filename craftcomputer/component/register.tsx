import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { fetchUsersData, postRegisterUserData } from '../services/Users/user.service'
import styles from '../styles/Home.module.css'

export default function RegisterForm() {
  const [message, setMessage] = useState<string>()
  const [userValid, setUserValid] = useState<boolean>(true)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const handleRegistration = async (data) => {
    const users = await fetchUsersData()
    users.map((user) => {
      if (user.username === data.username) {
        setUserValid(false)
      }
    })
    if (userValid) {
      postRegisterUserData(data.username, data.password, data.email)
        .then(() => {
          setMessage('Utilisateur créer')
        })
        .catch(() => {
          setMessage('Invalid User')
          setUserValid(true)
        })
    } else {
      setMessage('Username already use')
    }
  }

  const registerOptions = {
    username: { required: 'Name is required' },
    password: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'Password must have at least 8 characters'
      }
    },
    email: {
      required: 'Email is required'
    }
  }

  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
      <div className={styles.itemregister}>
        <label>
          <p>Username</p>
          <input name="username" type="text" {...register('username', registerOptions.username)} />
        </label>
        <small className={styles.errorMsg}>{errors.username && errors.username.message}</small>
      </div>
      <div className={styles.itemregister}>
        <label>
          <p>Email</p>
          <input type="email" name="email" {...register('email', registerOptions.email)} />
        </label>
        <small className={styles.errorMsg}>{errors.email && errors.email.message}</small>
      </div>
      <div className={styles.itemregister}>
        <label>
          <p>Password</p>
          <input type="password" name="password" {...register('password', registerOptions.password)} />
        </label>
        <small className={styles.errorMsg}>{errors?.password && errors.password.message}</small>
      </div>
      <button>Submit</button>
      <br />
      <small className={styles.errorMsg}>{message}</small>
    </form>
  )
}
