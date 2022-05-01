import React from 'react';
import s from './SelectedFoods.module.scss'

const SelectedFoods = (props) => {
    return (
        <table className={s.selectedTable}>
            <thead>
            <tr>
                <th colSpan='5'>
                    <h3>Selected foods</h3>
                </th>
            </tr>
            <tr>
                <th>Description</th>
                <th>Kcal</th>
                <th>Protein (g)</th>
                <th>Fat (g)</th>
                <th>Carbs (g)</th>
            </tr>
            </thead>
            <tbody>
            {
                props.foods.map((food, index) => (
                    <tr key={index}
                        onClick={() => props.onFoodClick(index)}
                    >
                        <td>{food.description}</td>
                        <td>{food.kcal}</td>
                        <td>{food.protein_g}</td>
                        <td>{food.fat_g}</td>
                        <td>{food.carbohydrate_g}</td>
                    </tr>
                ))
            }
            </tbody>
            <tfoot>
            <tr>
                <th>Total</th>
                <th>{sum(props.foods, 'kcal')}</th>
                <th> {sum(props.foods, 'protein_g')}</th>
                <th>{sum(props.foods, 'fat_g')}</th>
                <th> {sum(props.foods, 'carbohydrate_g')}</th>

            </tr>
            </tfoot>
        </table>
    );
};

// Good example of a helper function specific to this module
// that is inaccessible from outside this module.
function sum(foods, prop) {
    return foods.reduce((memo, food) => (
        parseInt(food[prop], 10) + memo
    ), 0.0).toFixed(2);
}

export default SelectedFoods;