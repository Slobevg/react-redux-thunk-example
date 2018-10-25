function increment() {
    return {
        type: 'GOOGLE_SERVICE_REQUEST_COMPLETE'
    };
}

export function googleServiceCompleted(state = 0, action) {
    switch (action.type) {
        case 'GOOGLE_SERVICE_REQUEST_COMPLETE':
            return state + 1;
        default:
            return state;
    }
}

//async
export function googleServiceFetch() {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment());
        }, 2000);
    };
}
