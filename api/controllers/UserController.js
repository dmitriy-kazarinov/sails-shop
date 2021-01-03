/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    userInfo: (req, res) => {
        return res.json({ userInfo: UserService.getInfo() });
    },
};

