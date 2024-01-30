
import { SHOW_MODAL } from './constants';

const initState = {
    showModal: false,
};

function reducer(state = initState,
    action: { type: string, payload: any }) {
    const { type, payload } = action;
    switch (type) {
        case SHOW_MODAL:
            return {
                ...state,
                showModal: payload
            }
        default:
            return state;
    }
}

export { initState };
export default reducer;
