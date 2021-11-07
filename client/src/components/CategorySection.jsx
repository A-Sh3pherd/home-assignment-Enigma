import { Box, Button } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../features/data/dataSlice';
import ChildCurrencies from './ChildCurrencies';

export default function CategorySection() {
    const dispatch = useDispatch()
    const { categories } = useSelector((state) => state.data.value);

    return (
        <Box>
            { categories && categories.map(category => (
                <Box
                    display='grid'
                    gridTemplateColumns='12fr'
                    gridGap="10px"
                    marginTop="8px"
                    key={ category.id }
                >
                    <Box
                        display='flex'
                        justifyContent='space-between'
                    >
                        {/* Only if category is toggled on */ }
                        { category.isToggled && (
                            <Button variant="text" style={ { color: 'white' } }
                                onClick={ () => dispatch(toggle(category.id)) }
                            >
                                { category.symbol }
                            </Button>
                        ) }
                    </Box>
                    {/*  Left side of the currency  */ }
                    { category.isToggled && category.childCurrencies.map(currency => (
                        <ChildCurrencies
                            key={ currency.id }
                            name={ currency.name }
                            id={ currency.id }
                            isToggled={ currency.isToggled }
                            currentValue={ currency.currentValue }
                            amountOfStars={ currency.amountOfStars }
                            percentage={ currency.percentage }
                        />
                    )) }
                </Box>
            ))
            }

        </Box>
    )
}
