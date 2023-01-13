import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { getCookie } from 'typescript-cookie'
import { useRouter } from 'next/router'
import { deleteProductData, fetchProductsData, postProductData } from '../services/Products/product.service'
import { patchUserData } from '../services/Users/user.service'
import ModifyAdmin from '../component/admin'

function Admin() {
  const router = useRouter()
  const [products, setProducts] = useState([])
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [message, setMessage] = useState<string>()

  useEffect(() => {
    if (getCookie('id') !== '1') {
      router.push({
        pathname: '/'
      })
    }
    fetchProductsData().then((data) => {
      setProducts(data)
    })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await postProductData(name, description, price, category, getCookie('Authorization'))
      .then(() => {
        setMessage('Creer')
      })
      .catch(() => {
        setMessage('Invalide')
      })
  }

  return (
    <div>
      <div className={styles.login}>
        <h1>Add products</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Name</p>
            <input type="text" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            <p>Description</p>
            <input type="text" onChange={(e) => setDescription(e.target.value)} />
          </label>
          <label>
            <p>Price</p>
            <input type="text" onChange={(e) => setPrice(e.target.value)} />
          </label>
          <label>
            <p>Category</p>
            <input type="text" onChange={(e) => setCategory(e.target.value)} />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
          <small className={styles.errorMsg}>{message}</small>
        </form>
      </div>
      <div>
        <h1>Remove products</h1>
        {products &&
          products.map((product, i) => {
            return (<ModifyAdmin product={product} />)
          })}
      </div>
    </div>
  )
}

export default Admin
