import Product from '../../component/product'
import { FooterSite, HeaderSite, HeadSite, Navbar } from '../../component/index'
import { fetchProductsData } from '../../services/Products/product.service'
import { useEffect, useState } from 'react'

function Fan() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetchProductsData().then((data) => {
      setData(data)
    })
  }, [])

  return (
    <div className="fan">
      <HeadSite title="Fan" metaname="fan" content="fan" icon="icon" iconhref="/icon.png" />
      <HeaderSite /> <Navbar />
      <h1>Ventilateur</h1>
      {data &&
        data.map((product, i) => {
          if (product.category === 7) {
            return (
              <Product
                product_name={product.product_name}
                price={product.price}
                description={product.description}
                image={'/product/produit_' + i + '.png'}
                id={product.id}
              />
            )
          }
        })}
      <FooterSite />
    </div>
  )
}

export default Fan
