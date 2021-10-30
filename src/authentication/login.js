import { user } from "../data";

/**
 * This function will authenticate a user using their credentials.
 *
 * @param {Object} credentials The users authentication credentials.
 * @param {String} credentials.id
 * @param {String} credentials.password
 *
 * @param {Function} callback The callback function that either returns error data or success data.
 */
const login = (credentials, callback) => {
  if (!credentials.id || !credentials.password)
    return callback({
      errMessage: "Please provide required credentials.",
      errCode: "invalid-credentials",
    });
  else {
    user.auth(credentials.id, credentials.password, ({ err, soul }) => {
      if (err) return callback({ errMessage: err, errCode: "gun-error" });
      else
        return callback({
          errMessage: undefined,
          errCode: undefined,
          soul: `~${soul}`,
        });
    });
  }
};

export default login;