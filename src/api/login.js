import { find, pick } from 'lodash';
import users from '../db/user';
export default data => (
  new Promise((resolve, reject) => {
    const dbUser = find(users, { email: data.email, password: data.password });
    if (dbUser) {
      resolve({
        isError: false,
        data: pick(dbUser, ['email', 'id', 'name'])
      });
    } else {
      reject({
        isError: true,
        error: {
          message: 'Invalid email or password'
        }
      });
    }
  })
);
