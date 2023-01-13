import Product from '../../component/product'
import { FooterSite, HeaderSite, HeadSite, Navbar } from '../../component/index'
import { fetchProductsData } from '../../services/Products/product.service'
import { useEffect, useState } from 'react'

function CPU() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetchProductsData().then((data) => {
      setData(data)
    })
  }, [])

  return (
    <div className="cpu">
      <HeadSite title="Cpu" metaname="cpu" content="cpu" icon="icon" iconhref="/icon.png" />
      <HeaderSite /> <Navbar />
      <h1>Processeur</h1>
      {data &&
        data.map((product, i) => {
          if (product.category === 3) {
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

export default CPU
