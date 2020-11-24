import React, { useEffect, useRef, useState } from "react";
import { makeStyles, Grid, Paper, Button} from '@material-ui/core';
import { Link } from "react-router-dom";
import useGlobal from "../store";

const useStyles = makeStyles((theme) => ({
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
                        : <Button  onClick={() => props.addCart(props.index)} variant="outlined" color="primary">Add to Cart</Button>
                    }
                </div>
            </div>
        </Paper>
    )
}

const Home = (props) => {
    const [meals, addCart] = useGlobal(
        state => state.meals,
        actions => actions.addCart
    );

    const classes = useStyles();

    return (
        <div>
            <div className={classes.mealsList}>
                {meals.map((meal, index) => (
                    <Meal key={index} index={index} addCart={addCart} meal={meal} classes={classes} />
                ))}
            </div>
        </div>
    )
}

export default Home