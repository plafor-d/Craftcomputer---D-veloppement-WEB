import { api } from '../ServiceHelper'

export const fetchUserData = async (id) => {
  return await api.get('/user/' + id).then((response) => response.data)
}

export const fetchUsersData = async () => {
  return await api.get('/user/').then((response) => response.data)
}

export const postUserData = async (username: string, password: string, token: string) => {
  return await api
    .post(
      '/user/',
      {
        username,
        password
      },
      {
        headers: { Authorization: 'bearer ' + token }
      }
    )
    .then((response) => response.data)
}

export const patchUserData = async (id, user, token) => {
  return await api
    .patch('/user/' + id, user, {
      headers: { Authorization: 'bearer ' + token }
    })
    .then((response) => response.data)
}

export const deleteUserData = async (id) => {
  return await api.delete('/user/' + id).then((response) => response.data)
}

export async function loginUser(user) {
  return api.post('/auth/', user).then((response) => response.data)
}

export const postRegisterUserData = async (username: string, password: string, email: string) => {
  return await api
    .post('/register/', {
      username,
      password,
      email
    })
    .then((response) => response.data)
}
