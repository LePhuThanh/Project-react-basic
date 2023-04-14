

const initState = {
    users: [
        { id: 1, name: 'Phú Thành' },
        { id: 2, name: 'Long Khải' },
        { id: 3, name: 'Quang Khanh' }
    ],

    posts: []
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            };

        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 1000000)
            let user = { id: id, name: `random - ${id}` }

            return {
                ...state, users: [...state.users, user]
                // In 'users: [...state.users, user]' ...state.users is overwrite currently users and push the added user (user)
            }
        default:
            return state;
    }
}

export default rootReducer;