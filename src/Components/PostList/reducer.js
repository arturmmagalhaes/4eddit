import { votePost, createPost } from './postList_services';

export const initialState = [];

export const postsReducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_POSTS':
            return action.payload === undefined ? state : action.payload;
        case 'CREATE_POST':
            createPost(action.payload);
            return state;
        case 'UPVOTE_POST':
            if (action.direction === 0 || action.direction === -1) {
                votePost(action.id, 1);
            } else {
                votePost(action.id, 0);
            }
            return state;
        case 'DOWNVOTE_POST':
            if (action.direction === 0 || action.direction === 1) {
                votePost(action.id, -1);
            } else {
                votePost(action.id, 0);
            }
            return state;
        default:
            return state;
    }
};
