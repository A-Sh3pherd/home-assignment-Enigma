import { Box, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCurrency } from '../features/data/dataSlice';


export default function SearchAllMarkets() {
    const [ searchValue, setSearchValue ] = useState('');
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(searchCurrency(searchValue))
    }, [ searchValue, dispatch ])

    return (
        <Box display='flex' justifyContent='center' marginY='10px'>
            <Box width='33%'>
                <TextField
                    type='text'
                    variant='outlined'
                    label='Search All Markets'
                    focused
                    fullWidth
                    onChange={ (e) => setSearchValue(e.target.value) }
                />
            </Box>
        </Box>
    )
}
