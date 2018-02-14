export const UPDATE_USER = 'user: updateUser'



const updateUser = (newUser) => {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  }
}

export default updateUser
