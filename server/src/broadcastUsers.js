// This function is responsible for broadcasting the last 10 users
// from the users table.
const broadcastUsers = ( User, io, log ) => {
    return setInterval(async () => {
        const users = await User.findAll({
            limit: 10,
            order: [ [ 'ID', 'DESC' ] ]
        });
        // Broadcasting last 10 users
        io.emit('last10Users', users);
        // if we want to see logs
        if (log) {
            console.log('Broadcasting 10 users')
        }
    }, 1000, User, io);
}


module.exports = { broadcastUsers };