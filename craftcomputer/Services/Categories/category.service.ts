import { api } from '../ServiceHelper'

export const fetchCategoryData = async(id) => {
  return await api.get('/category/'+ id).then((response) => response.data)
}

export const fetchCategoryData = async() => {
  return await api.get('/category/').then((response) => response.data)
}

export const postCategoryData = async() => {
  return await api.post('/category/').then((response) => response.data)
}

export const patctCategoryData = async(id) => {
  return await api.patch('/category/'+ id).then((response) => response.data)
}

export const delettCategoryData = async(id) => {
  return await api.delete('/category/'+ id).then((response) => response.data)
}