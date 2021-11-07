const { Sequelize } = require("sequelize");
const { User, createUserSchema } = require("./Models/User");

const createConnection = async () => {
    const connection = new Sequelize("test", "root", "", {
        host: "localhost",
        dialect: "mysql",
        logging: false,
    });
    try {
        // Making sure connection is authenticated
        await connection.authenticate();
        // Creating a Users table if not exist already
        const { User } = await createUserSchema(connection);
        // Returning the user schema. and the established connection (if needed)
        return { connection, User };
    } catch (e) {
        console.error("Unable to connect to the database:", e);
    }
};

module.exports = { createConnection };
