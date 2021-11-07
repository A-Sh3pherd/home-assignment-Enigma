const express = require("express")
const app = express();
const server = require("http").createServer(app);
const io = require('socket.io')(server, { cors: { origin: '*' } })
//
const { injectSeedData } = require("./injectSeedData");
const { createConnection } = require("./db/createConnection");
const { broadcastUsers } = require("./broadcastUsers");
const { validateAndSaveUser } = require("./db/validateAndSaveUser");
// Main function
(async () => {
    const port = 3001; // Server Port
    // Creating a connection with the db, getting the UserSchema back
    const { User } = await createConnection();
    // Injecting 10 users to the database
    await injectSeedData(User);
    //
    app.use(express.json())
    // Expecting a post request to create a user
    app.post("/register", async ( req, res ) => {
        const { name, email } = req.body
        const { error, user } = await validateAndSaveUser(User, name, email);
        if (error) {
            return res.send({ error })
        }
        return res.send({ user })
    });
    // App listen on specified port
    server.listen(port, () => {
        console.log(
            `Connection to the db is live, and listening to requests at port: ${ port }`
        );
    });
    // Broadcasting the last 10 users from the users table every 1 second
    broadcastUsers(User, io, false);
})();