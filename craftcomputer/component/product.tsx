import { useRouter } from 'next/router'
import { useState } from 'react'
import { getCookie } from 'typescript-cookie'
import { postOrderData } from '../services/Orders/order.service'
import styles from '../styles/Home.module.css'

function Product(props: any) {
  const [message, setMessage] = useState<string>()
  const router = useRouter()
  const handleSubmit = async (e) => {
    if (getCookie('Authorization') !== undefined) {
      await postOrderData(getCookie('id'), props.id, getCookie('Authorization'))
      setMessage('Ajouté au panier')
    } else {
      router.push({
        pathname: '/account/login'
      })
    }
  }
  return (
    <div className={styles.boxproduct}>
      <div className={styles.left_column}>
        <img src={props.image} alt="Produit" />
      </div>
      <div className={styles.right_column}>
        <div className={styles.product_description}>
          <h1>{props.product_name}</h1>
          <p>{props.description}</p>
        </div>

        <div className={styles.product_configuration}></div>

        <div className={styles.product_price}>
          <span>{props.price}€</span>
          <button className={styles.button} onClick={handleSubmit}>
            Ajouter au panier
          </button>
          <small className={styles.errorMsg}>{message}</small>
        </div>
      </div>
    </div>
  )
}

export default Product
