export const addCart = (store, id) => {
    const meals = store.state.meals;
    meals.find(meal => meal.id === id).inCart = true;
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

export const selectRes = (store, index) => {
    const restaurants = store.state.restaurants;
    const meals = store.state.meals;
    restaurants.forEach(res => {
        res.selected = false;
    });
    restaurants[index].selected = true;
    meals.forEach(meal => {
        meal.selected = false;
    });
    meals.filter((meal) => meal.restaurant === restaurants[index].name).forEach(meal => {
        meal.selected = true;
    });
    store.setState({ meals: meals })
    store.setState({ restaurants: restaurants} );
}