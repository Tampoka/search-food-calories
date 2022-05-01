import s from './App.module.scss'
import {Component} from 'react';
import SelectedFoods from './components/SelectedFoods/SelectedFoods';
import FoodSearch from './components/FoodSearch/FoodSearch';

class App extends Component {
    state = {
        selectedFoods: [],
    }

    render() {
        return (
            <div className={s.app}>
                <div className={s.container}>
                    <SelectedFoods
                        foods={this.state.selectedFoods}
                        onFoodClick={
                            (index) => (
                                this.setState({
                                    selectedFoods: [
                                        ...this.state.selectedFoods.slice(0, index),
                                        ...this.state.selectedFoods.slice(index + 1, this.state.selectedFoods.length),
                                    ],
                                })
                            )}/>
                    <FoodSearch
                        onFoodClick={
                            (food) => (
                                this.setState({
                                    selectedFoods: this.state.selectedFoods.concat(food)
                                })
                            )
                        }/>
                </div>
            </div>
        )
    }
}

export default App;
