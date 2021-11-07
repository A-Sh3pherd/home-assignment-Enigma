import { Box, Button, Container } from "@material-ui/core";
import { io } from 'socket.io-client'
import { useEffect, useState } from "react";

function Socket() {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        const socket = io('http://localhost:3001')

        socket.on('last10Users', last10Users => {
            setUsers(last10Users);
        })
    }, [])

    return (
        <Container maxWidth='md'>
            <h1 style={ { color: 'white' } }> Last 10 Users: </h1>
            { users && users.map(( user ) => (
                <Box key={ user.id }>
                    <Button style={ {
                        color: 'white',
                        textTransform: 'unset'
                    } }> { user.name } </Button>
                </Box>

            )) }


        </Container>
    );
}

export default Socket;
