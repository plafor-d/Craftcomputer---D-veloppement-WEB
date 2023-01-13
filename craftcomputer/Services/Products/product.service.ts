import { api } from '../ServiceHelper'

export const fetchProductData = async (id) => {
  return await api.get('/product/' + id).then((response) => response.data)
}

export const fetchProductsData = async () => {
  return await api.get('/product/').then((response) => response.data)
}

export const postProductData = async (
  product_name: string,
  description: string,
  price: string,
  category: string,
  token: string
) => {
  return await api
    .post(
      '/product/',
      {
        product_name,
        description,
        price,
        category,
        provider: ''
      },
      {
        headers: { Authorization: 'bearer ' + token }
      }
    )
    .then((response) => response.data)
}

export const patchProductData = async (id, product, token) => {
  return await api
    .patch('/product/' + id, product, {
      headers: { Authorization: 'bearer ' + token }
    })
    .then((response) => response.data)
}

export const deleteProductData = async (id, token) => {
  return await api
    .delete('/product/' + id, {
      headers: { Authorization: 'bearer ' + token }
    })
    .then((response) => response.data)
}
