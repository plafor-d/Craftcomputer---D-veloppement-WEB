import styles from '../styles/Home.module.css'
import { getCookie } from 'typescript-cookie'
import { deleteProductData, patchProductData } from '../services/Products/product.service'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function ModifyAdmin(props: any) {
  interface Products {
    product_name: string
    description: string
    price: string
    category: string
  }

  const initialProduct: Products = {
    product_name: props.product.product_name,
    description: props.product.description,
    price: props.product.price,
    category: props.product.category
  }
  const router = useRouter()
  const [product, setProduct] = useState<Products>(initialProduct)

  const handleRemove = async (id) => {
    if (getCookie('Authorization') !== undefined) {
      await deleteProductData(id, getCookie('Authorization'))
      router.reload()
    }
  }

  const handleModify = async () => {
    patchProductData(props.product.id, product, getCookie('Authorization'))
  }

  const onChangeHandler = (event: HTMLInputElement) => {
    const { name, value } = event
    setProduct((prev) => {
      return { ...prev, [name]: value }
    })
  }
  return (
    <div>
      <form onSubmit={handleModify}>
        <table className={styles.admin}>
          <tbody>
            <tr>
              <td>
                id:
                {props.product.id}
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className={styles.admin}
                  type="text"
                  name="product_name"
                  value={product.product_name}
                  onChange={(e) => onChangeHandler(e.target)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className={styles.admin}
                  type="text"
                  name="description"
                  value={product.description}
                  onChange={(e) => onChangeHandler(e.target)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className={styles.admin}
                  type="text"
                  name="price"
                  value={product.price}
                  onChange={(e) => onChangeHandler(e.target)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className={styles.admin}
                  type="text"
                  name="category"
                  value={product.category}
                  onChange={(e) => onChangeHandler(e.target)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <button type="submit">Submit</button>
                <button
                  onClick={() => {
                    handleRemove(props.product.id)
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}
