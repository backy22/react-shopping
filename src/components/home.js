import React, { useEffect, useRef, useState } from "react";
import { makeStyles, Grid, Paper, Button} from '@material-ui/core';
import { Link } from "react-router-dom";
import useGlobal from "../store";

const useStyles = makeStyles((theme) => ({
    resPaper: {
        margin: '10px',
        padding: '10px',
        display: 'flex',
        position: 'relative',
        '&:hover $resName': {
            display: 'block'
        },
        '&:hover $mask': {
            display: 'block'
        }
    },
    resImage: {
        width: '100%',
    },
    resName: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'none',
        fontSize: '30px',
        zIndex: 10,
        textAlign: 'center'
    },
    mask: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'none',
        background: 'rgba(255,255,255,0.5)',
        zIndex: 5
    },
    restaurantsList: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
    },
    mealsList: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
    },
    paper: {
        margin: '10px',
        padding: '10px',
        display: 'flex',
    },
    image: {
        width: '300px',
        marginRight: '10px'
    },
    detail: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    restaurant: {
        color: 'gray'
    },
    priceContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    link: {
        textDecoration: 'none'
    }
}));

const Restaurant = (props) => {
    const selectClass = props.restaurant.selected ? "block" : "";
    return (
        <Paper className={props.classes.resPaper} onClick={() => props.selectRes(props.index)} >
            <img className={props.classes.resImage} src={props.restaurant.image} />
            <div className={props.classes.mask} style ={{ display: selectClass}}></div>
            <div className={props.classes.resName} style ={{ display: selectClass}}>{props.restaurant.name}</div>
        </Paper>
    )
}

const Meal = (props) => {
    return (
        <Paper className={props.classes.paper}>
            <div>
                <img className={props.classes.image} src={props.meal.image} />
            </div>
            <div className={props.classes.detail}>
                <div>
                    <h3>{props.meal.name}</h3>
                    <div className={props.classes.restaurant}>{props.meal.restaurant}</div>
                </div>
                <div className={props.classes.priceContainer}>
                    <div>${props.meal.price}</div>
                    {props.meal.inCart ?
                        <Link to={"/cart"} className={props.classes.link}>
                            <Button variant="contained" color="secondary">Go to My Cart</Button>
                        </Link>
                        : <Button  onClick={() => props.addCart(props.meal.id)} variant="outlined" color="primary">Add to Cart</Button>
                    }
                </div>
            </div>
        </Paper>
    )
}

const Home = (props) => {
    const [meals, addCart] = useGlobal(
        state => state.meals.filter((meal) => meal.selected),
        actions => actions.addCart
    );

    const [restaurants, selectRes] = useGlobal(
        state => state.restaurants,
        actions => actions.selectRes
    )

    const classes = useStyles();

    return (
        <div>
            <div className={classes.restaurantsList}>
                {restaurants.map((restaurant, index) => (
                    <Restaurant key={index} index={index} selectRes={selectRes} restaurant={restaurant} classes={classes} />
                 ))}
            </div>
            <div className={classes.mealsList}>
                {meals.map((meal) => (
                    <Meal key={meal.id} addCart={addCart} meal={meal} classes={classes} />
                ))}
            </div>
        </div>
    )
}

export default Home