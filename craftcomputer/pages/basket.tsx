import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getCookie, removeCookie, setCookie } from 'typescript-cookie'
import { HeadSite, HeaderSite, FooterSite, Navbar } from '../component/index'
import Order from '../component/order'
import { fetchOrdersData } from '../services/Orders/order.service'
import { fetchProductsData } from '../services/Products/product.service'
import styles from '../styles/Home.module.css'

function Basket() {
  const router = useRouter()
  const [orders, setOrders] = useState([])
  const [products, setProducts] = useState([])
  let total = 0

  useEffect(() => {
    if (getCookie('Authorization') === undefined) {
      router.push({
        pathname: '/account/login'
      })
    }
    fetchOrdersData().then((data) => {
      setOrders(data)
    })
    fetchProductsData().then((data) => {
      setProducts(data)
    })
  }, [])

  return (
    <div>
      <HeadSite title="Panier" metaname="basket" content="basket" icon="icon" iconhref="/favicon.ico" />
      <HeaderSite /> <Navbar />
      <div className={styles.basket}>
        <div className={styles.basketContainer}>
          <div className={styles.basketHeader}>
            <h3 className={styles.basketHeading}>Shopping Cart</h3>
          </div>
          {orders &&
            orders.map((order: any) => {
              if (order.user_id === getCookie('id')) {
                return (
                  <div key={order}>
                    {products &&
                      products.map((product: any, i) => {
                        if (product.id.toString() === order.product_id) {
                          total += product.price
                          return (
                            <Order
                              key={product}
                              id={order.id}
                              product_name={product.product_name}
                              price={product.price}
                              description={product.description}
                              image={'/product/produit_' + i + '.png'}
                            />
                          )
                        }
                      })}
                  </div>
                )
              }
            })}
          <hr className={styles.hr} />
          <div className={styles.basketCheckout}>
            <div className={styles.basketTotal}>
              <div>
                <div className={styles.basketSubTotal}>Sub-Total</div>
                <div className={styles.basketTotalAmount}>{total + '€'}</div>
              </div>
              <button className={styles.basketButton}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <FooterSite />
    </div>
  )
}

export default Basket
