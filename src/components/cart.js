import React, { useEffect, useRef, useState } from "react";
import { makeStyles, Grid, Paper, Button, TextField} from '@material-ui/core';
import useGlobal from "../store";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
    },
    mealsList: {

    },
    paper: {
        margin: '10px',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imageContainer: {
        display: 'flex'
    },
    image: {
        width: '200px',
        marginRight: '10px'
    },
    detail: {
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    restaurant: {
        color: 'gray'
    },
    quantityField: {
        width: '80px',
    },
    summaryPaper: {
        margin: '10px',
        padding: '10px',
    },
    subTotal: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    total: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    checkoutBtn: {
        width: '100%'
    }
}));

const Meal = (props) => {
    return (
        <Paper className={props.classes.paper}>
            <div className={props.classes.imageContainer}>
                <div>
                    <img className={props.classes.image} src={props.meal.image} />
                </div>
                <div className={props.classes.detail}>
                    <div>
                        <h3>{props.meal.name}</h3>
                        <div className={props.classes.restaurant}>{props.meal.restaurant}</div>
                    </div>
                    <div>${props.meal.price}</div>
                </div>
            </div>
            <div>×</div>
            <div>
                <TextField
                    className={props.classes.quantityField}
                    id="outlined-number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    onChange={e => props.changeQuantity(props.index, e.target.value)}
                    value={props.meal.quantity}
                />
            </div>
            <div>
            <Button  onClick={() => props.removeCart(props.meal.id)} variant="outlined" color="primary">Remove</Button>
            </div>
        </Paper>
    )
}

const Checkout = (props) => {
    var total = 0;
    props.meals.forEach((meal) => {
        let subtotal = meal.price * meal.quantity;
        total += subtotal
    })
    return (
        <div>
            <div className={props.classes.total}>
                <h5>Total</h5>
                <h5>${total}</h5>
            </div>
            <Button variant="contained" color="secondary" className={props.classes.checkoutBtn}>Checkout</Button>
        </div>
    )
}

const Cart = (props) => {
    const [meals, actions] = useGlobal(
        state => state.meals.filter((meal) => meal.inCart),
        actions => actions
    );

    const classes = useStyles();

    return (
        <Grid container>
            <Grid xs={8} item className={classes.mealsList}>
                <h3>Your cart</h3>
                {meals.map((meal) => (
                    <Meal 
                        key={meal.id}
                        removeCart={actions.removeCart}
                        changeQuantity={actions.changeQuantity}
                        meal={meal}
                        classes={classes} 
                    />
                ))}
            </Grid>
            <Grid xs={4} item className={classes.summary}>
                <h3>Summary</h3>
                <Paper className={classes.summaryPaper}>
                    {meals.map((meal, index) => (
                        <div className={classes.subTotal} key={index}>
                            <div>{meal.name} × {meal.quantity}</div>
                            <div>${meal.price * meal.quantity}</div>
                        </div>
                    ))}
                    <Checkout meals={meals} classes={classes} />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Cart