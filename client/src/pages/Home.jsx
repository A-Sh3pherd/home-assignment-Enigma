import { Box, Container } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import '../App.css';
import CategoryNavbar from "../components/CategoryNavbar";
import SearchAllMarkets from "../components/SearchAllMarkets";
import CategorySection from "../components/CategorySection";
import ChildCurrencies from "../components/ChildCurrencies";


function Home() {

    let searchedCurrencies;
    searchedCurrencies = useSelector(
        ( state ) => state.data.searchedCurrencies
    );

    return (
        <Container maxWidth="md">
            <CategoryNavbar/>
            <SearchAllMarkets/>
            <Box>
                <hr/>
                <CategorySection/>
            </Box>
            { searchedCurrencies &&
            searchedCurrencies.map(( currency ) => (
                <ChildCurrencies
                    key={ currency.id }
                    id={ currency.id }
                    name={ currency.name }
                    isToggled={ currency.isToggled }
                    currentValue={ currency.currentValue }
                    percentage={ currency.percentage }
                    amountOfStars={ currency.amountOfStars }
                />
            )) }
        </Container>
    );
}

export default Home;
