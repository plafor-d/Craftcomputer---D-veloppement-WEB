import Product from '../../component/product'
import { FooterSite, HeaderSite, HeadSite, Navbar } from '../../component/index'
import { fetchProductsData } from '../../services/Products/product.service'
import { useEffect, useState } from 'react'

function Case() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetchProductsData().then((data) => {
      setData(data)
    })
  }, [])

  return (
    <div className="case">
      <HeadSite title="Case" metaname="case" content="case" icon="icon" iconhref="/icon.png" />
      <HeaderSite /> <Navbar />
      <h1>Boitier</h1>
      {data &&
        data.map((product, i) => {
          if (product.category === 8) {
            return (
              <Product
                key={product}
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

export default Case
