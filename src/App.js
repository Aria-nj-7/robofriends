import React, { Component } from "react";
import Card from "./card";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from './action.js';

const SearchBox = ({ searchChange }) => {
    return (
        <div className="searchbox">
            <input
                type="search"
                placeholder="search robots"
                onChange={searchChange}
            />
        </div>
    );
}
const mapStateToProps = state => {
    return {
        searchField: state.searchRobot.searchField,
        robots: state.requestRobots.robots,
        isPendig: state.requestRobots.isPendig,
        error: state.requestRobots.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChanged: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}
class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }
    render() {
        const { searchField, onSearchChanged, robots, isPendig, error } = this.props;
        const filteredRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })


        return isPendig ?
            <h1>Loading ... </h1> :
            (
                <div>
                    <h1>ROBO FRIENDS</h1>
                    <SearchBox searchChange={onSearchChanged} />
                    <Card robots={filteredRobot} />
                </div>
            );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);