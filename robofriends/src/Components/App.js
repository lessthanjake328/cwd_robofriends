import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from '../Data/Robots';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    render() {
        return (
            <div className='tc' >
                <h1>Robo Friends</h1>
                <SearchBox />
                <CardList robots={robots} />
            </div>
        )
    }
}

export default App;