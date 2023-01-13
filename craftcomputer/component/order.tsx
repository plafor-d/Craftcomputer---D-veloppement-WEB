import { getCookie } from 'typescript-cookie'
import { deleteOrderData } from '../services/Orders/order.service'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

function Order(props: any) {
  const router = useRouter()
  const handleSubmit = async (e) => {
    if (getCookie('Authorization') !== undefined) {
      await deleteOrderData(props.id, getCookie('Authorization'))
      router.reload()
    } else {
      router.push({
        pathname: '/account/login'
      })
    }
  }
  return (
    <div className={styles.basketProduct}>
      <div className={styles.basketImage}>
        <img className={styles.basketItemImage} src={props.image} alt="" />
      </div>
      <div className={styles.basketAbout}>
        <h2 className={styles.basketTitle}>{props.product_name}</h2>
      </div>
      <div className={styles.basketPrices}>
        <div className={styles.basketAmount}>{props.price + '€'}</div>
        <div className={styles.basketRemoveProduct}>
          <button onClick={handleSubmit}>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default Order
