import {
    SEARCH_FIELD_CHANGED, REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED,
} from "./constance"

const intialStateSearch = {
    searchField: ''
}
export const searchRobot = (state = intialStateSearch, action = {}) => {
    switch (action.type) {
        case SEARCH_FIELD_CHANGED:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
}

const intialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}
export const requestRobots = (state = intialStateRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false });
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state;
    }

}