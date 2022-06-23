import * as constants from '../constants/statistic'

const initialState = {
    all: 0,
    edited: 0,
    deleted: 0,
    firstDate: '',
    lastDate: ''
};

const statisticRedicer = (state = initialState, action) => {
    switch (action.type) {
        case constants.ADD:
            return {
                ...state,
                all: state.all + 1,
            }
        case constants.DELETE:
            return {
                ...state,
                deleted: state.deleted + 1,
            }
        case constants.EDIT:
            return {
                ...state,
                edited: state.edited + 1,
            }
        case constants.FIRST: 
            return {
                ...state,
                firstDate: new Date().toLocaleString(),
            }
        case constants.LAST:
            return {
                ...state,
                lastDate: new Date().toLocaleString(),
            }
        default:
            return state;
    }

}

export default statisticRedicer;