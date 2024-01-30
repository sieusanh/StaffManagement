import { SHOW_MODAL } from './constants';

function showModal(payload: any) {
    return {
        type: SHOW_MODAL,
        payload
    }
}


export { showModal };
