import Product from '../../component/product'
import { FooterSite, HeaderSite, HeadSite, Navbar } from '../../component/index'
import { fetchProductsData } from '../../services/Products/product.service'
import { useEffect, useState } from 'react'

function Harddisk() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetchProductsData().then((data) => {
      setData(data)
    })
  }, [])

  return (
    <div className="harddisck">
      <HeadSite title="Harddisck" metaname="harddisck" content="harddisck" icon="icon" iconhref="/icon.png" />
      <HeaderSite /> <Navbar />
      <h1>Disque Dur</h1>
      {data &&
        data.map((product, i) => {
          if (product.category === 4) {
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

export default Harddisk
