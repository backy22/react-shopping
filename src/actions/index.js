export const addCart = (store, index) => {
    const meals = store.state.meals;
    meals[index].inCart = true;
    store.setState({ meals: meals });
};

export const removeCart = (store, index) => {
    const meals = store.state.meals;
    meals[index].inCart = false;
    store.setState({ meals: meals });
};

export const changeQuantity = (store, index, quantity) => {
    const meals = store.state.meals;
    meals[index].quantity = quantity;
    store.setState({ meals: meals });
};