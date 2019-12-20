import { ADD_USER } from "../actionTypes";

const initialState = {};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_USER: {
            const { id, content } = action.payload;
                return {
                    ...state,
                    allIds: [...state.allIds, id],
                    byIds: {
                        ...state.byIds,
                        [id]: {
                        content,
                        completed: false
                    }
                }
            };
        }
        default:
            return state;
    }
}