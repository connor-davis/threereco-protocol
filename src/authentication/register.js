import { gun, user } from "../data";

/**
 * This function will check to see if there is a user with the provided id.
 *
 * @param {String} id The users chosen id.
 * @returns {boolean}
 */
const idExists = (id) => {
  return gun.get(`~@${id}`) !== undefined;
};

/**
 * This function will register a new user using gun.
 *
 * @param {Object} credentials The users authentication credentials.
 * @param {String} credentials.id
 * @param {String} credentials.password
 * 
 * @param {Function} callback The callback function that either returns error data or success data.
 */
export default registerUser = (credentials, callback) => {
  if (idExists(credentials.alias))
    return callback({
      errMessage: "ID already taken.",
      errCode: "id-unavailable",
    });
  if (!credentials.id || !credentials.password)
    return callback({
      errMessage: "Please provide required credentials.",
      errCode: "invalid-credentials",
    });
  else {
    user.create(credentials.id, credentials.password, ({ err, pub }) => {
      if (err) return callback({ errMessage: err, errCode: "gun-error" });
      else
        return callback({
          errMessage: undefined,
          errCode: undefined,
          soul: pub,
        });
    });
  }
};
