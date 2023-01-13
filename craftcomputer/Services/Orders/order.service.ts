import { api } from '../ServiceHelper'

export const fetchOrderData = async (id) => {
  return await api.get('/order/' + id).then((response) => response.data)
}

export const fetchOrdersData = async () => {
  return await api.get('/order/').then((response) => response.data)
}

export const postOrderData = async (userId: string, productId: string, token: string) => {
  return await api
    .post(
      '/order/',
      {
        user_id: userId,
        product_id: productId
      },
      {
        headers: { Authorization: 'bearer ' + token }
      }
    )
    .then((response) => response.data)
}

export const patchOrderData = async (id) => {
  return await api.patch('/order/' + id).then((response) => response.data)
}

export const deleteOrderData = async (id, token) => {
  return await api
    .delete('/order/' + id, {
      headers: { Authorization: 'bearer ' + token }
    })
    .then((response) => response.data)
}
