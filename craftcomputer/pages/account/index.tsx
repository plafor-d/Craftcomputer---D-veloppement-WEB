import styles from '../../styles/Home.module.css'
import { FooterSite, HeaderSite, HeadSite, Navbar } from '../../component/index'
import { getCookie, removeCookie, setCookie } from 'typescript-cookie'
import { User } from '../../component/user'
import { useEffect, useState } from 'react'
import { fetchUserData } from '../../services/Users/user.service'
import Setting from '../../component/setting'
import { useRouter } from 'next/router'

function Account() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  const router = useRouter()
  useEffect(() => {
    fetchUserData(getCookie('id')).then((data) => {
      setUsername(data.username)
      setPassword(data.password)
      setEmail(data.email)
    })
  }, [])

  const handleSubmit = () => {
    removeCookie('Authorization')
    removeCookie('id')
    removeCookie('Message')
    router.push({
      pathname: '/account/login'
    })
  }

  return (
    <div className="account">
      <HeadSite title="account" metaname="account" content="account" icon="icon" iconhref="/icon.png" />
      <HeaderSite /> <Navbar />
      <div className={styles.account}>
        <div className={styles.accountitem1}>
          <User username={username} password={password} email={email} />
        </div>
        <div className={styles.accountitem2}>
          <Setting />
        </div>
        <div className={styles.logout}>
          <button onClick={handleSubmit}>Log Out</button>
        </div>
      </div>
      <FooterSite />
    </div>
  )
}

export default Account
