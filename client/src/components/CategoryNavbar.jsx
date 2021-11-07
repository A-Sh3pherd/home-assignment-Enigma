import { Box, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../features/data/dataSlice";

const CategoryNavbar = () => {
    const dispatch = useDispatch()
    const categories = useSelector((state) => state.data.value.categories);
    return (
        <Box
            display="grid"
            gridTemplateColumns="1fr 1fr 1fr"
            gridTemplateRows='2fr'
            gridGap="10px"
            margin='8px'
        >
            { categories.map((category) => (
                <Button
                    variant="contained" color="primary" key={ category.name }
                    onClick={ () => dispatch(toggle(category.id)) }
                >
                    { category.name }
                </Button>

            )) }
        </Box >
    );
};
export default CategoryNavbar;
