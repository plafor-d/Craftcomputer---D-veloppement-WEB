import { api } from '../ServiceHelper'

export const postAuthData = async() => {
  return await api.post('/auth/').then((response) => response.data)
}
