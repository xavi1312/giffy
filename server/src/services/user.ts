import User, { IUser } from '../models/user';

class UserService {
  constructor() {}

  async getUser(email: string) {
    const user = await User.findOne({ email: email });

    return user;
  }

  async newUser(userData: IUser) {
    const newUser = new User(userData);
    await newUser.save();

    return newUser;
  }
}

export default UserService;
