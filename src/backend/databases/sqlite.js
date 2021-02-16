const Sequelize = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'database.sqlite')
});

const users = sequelize.define("users", {
    name: {
        type: Sequelize.STRING,
        allownull: false
    },
    email: {
        type: Sequelize.STRING,
        allownull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allownull: false
    }
});
users.sync().then(() => {
    console.log("users table has been successfully created, if one doesn't exist")
}).catch(error => console.log(error));

const lists = sequelize.define("lists", {
    item: {
        type: Sequelize.STRING,
    },
    edit: {
        type: Sequelize.BOOLEAN,
        allownull: false,
    },
    done: {
        type: Sequelize.STRING,
        allownull: false,
    },
    user_id: {
        type: Sequelize.NUMBER,
        allownull: false,
    }
});
lists.sync().then(() => {
    console.log("lists table has been successfully created, if one doesn't exist")
}).catch(error => console.log(error));

module.exports = {
    users: users,
    lists: lists
};