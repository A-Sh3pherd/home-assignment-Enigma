import { Box, Button } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import React from 'react';
import { useDispatch } from 'react-redux';
import { starCurrency } from '../features/data/dataSlice';


export default function ChildCurrencies({ id, name, isToggled, currentValue, percentage, amountOfStars }) {
    const dispatch = useDispatch()

    return (
        <Box
            display='grid'
            gridTemplateColumns='6fr 6fr'
            key={ id }
            gridGap='35px'
            className={ isToggled ? 'toggled' : '' }
        >
            <Box
                display='flex'
                justifyContent='space-between'
            >
                <Button variant="text" color='secondary'>
                    { name }
                </Button>
                <Button variant="text" color='secondary'>
                    { `${currentValue}` }
                </Button>
            </Box>
            {/* Right side of the currency */ }
            <Box
                display='flex'
                justifyContent='space-between'
            >
                <Button
                    variant="text"
                    style={ percentage.status === 'UP' ? { color: 'green' } : { color: 'red' } }
                >
                    { `${percentage.value}%` }
                </Button>
                <Button
                    variant="text"
                    color="secondary"
                    onClick={ () => dispatch(starCurrency(id)) }
                >
                    { `${amountOfStars}` }
                    { isToggled ? < StarIcon style={ { color: 'yellow' } } /> : <StarOutlineIcon /> }
                </Button>
            </Box>
        </Box>
    )
}