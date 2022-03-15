import {DECREMENT, INCREMENT, A_INCREMENT} from './types';

export function INC() {
    return {
        type: INCREMENT,
    };
}

export function DEC() {
    return {
        type: DECREMENT,
    };
}

export function AINC() {
    return function (dispatch) {
        setTimeout(() => {
            dispatch({ type: A_INCREMENT });
        }, 2000);
    };
}
