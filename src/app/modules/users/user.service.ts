import { IUser } from './user.interface'
import { User } from './users.model'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const createdUser = await User.create(user)
  if (!createUser) {
    throw new Error('Filed to create user!')
  }
  return createdUser
}

export default {
  createUser,
}
