import Product from '../../component/product'
import { FooterSite, HeaderSite, HeadSite, Navbar } from '../../component/index'
import { fetchProductsData } from '../../services/Products/product.service'
import { useEffect, useState } from 'react'

function Motherboard() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetchProductsData().then((data) => {
      setData(data)
    })
  }, [])

  return (
    <div className="motherboard">
      <HeadSite title="Motherboard" metaname="motherboard" content="motherboard" icon="icon" iconhref="/icon.png" />
      <HeaderSite /> <Navbar />
      <h1>Carte mère</h1>
      {data &&
        data.map((product, i) => {
          if (product.category === 1) {
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

export default Motherboard
