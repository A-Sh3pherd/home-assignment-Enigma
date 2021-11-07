const { Sequelize, Model, DataTypes } = require("sequelize");

const createUserSchema = async ( connection ) => {
    const User = connection.define("User", {
        name: {
            type: DataTypes.STRING(64),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(64),
            unique: true,
            allowNull: false,
        },
    });
    await connection.sync();
    console.log("Successfully synced USERS table");
    return { User };
};

module.exports = { createUserSchema };
