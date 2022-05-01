import {Component} from 'react';
import Client from '../../helpers/Client';
import s from './FoodSearch.module.scss';
import {FaSearch} from 'react-icons/fa';
import {MdDeleteForever} from 'react-icons/md';

const MATCHING_ITEM_LIMIT = 25

class FoodSearch extends Component {
    state = {
        foods: [],
        showRemoveIcon: false,
        searchValue: '',
    }

    onSearchChange = (e) => {
        const value = e.target.value

        this.setState({
            searchValue: value
        })
        if (value === '') {
            this.setState({
                foods: [],
                showRemoveIcon: false
            })
        } else {
            this.setState({
                showRemoveIcon: true
            })

            Client.search(value, (foods) => {
                this.setState({
                    foods: foods.slice(0, MATCHING_ITEM_LIMIT)
                })
            })
        }
    }

    onRemoveIconClick = () => {
        this.setState({
            foods: [],
            showRemoveIcon: false,
            searchValue: '',
        })
    }

    render() {
        return (
            <div className={s.searchContainer}>
                <table className={s.searchTable}>
                    <thead>
                    <tr>
                        <th colSpan='5'>
                            <div className={s.searchField}>
                                <i className={s.searchIcon}><FaSearch/></i>
                                <input
                                    className={s.prompt}
                                    type="text"
                                    placeholder='Search foods...'
                                    value={this.state.searchValue}
                                    onChange={this.onSearchChange}
                                />

                            </div>
                            {!this.state.showRemoveIcon
                                ?
                                (<i className={s.removeIcon}><MdDeleteForever size={24} color='FD0CFF'/></i>)
                                : ''
                            }
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
                        this.state.foods.map((food, index) => (
                            <tr
                                key={index}
                                onClick={() => this.props.onFoodClick(food)}
                            >
                                <td>{food.description}</td>
                                <td>
                                    {food.kcal}
                                </td>
                                <td>
                                    {food.protein_g}
                                </td>
                                <td>
                                    {food.fat_g}
                                </td>
                                <td>
                                    {food.carbohydrate_g}
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FoodSearch;