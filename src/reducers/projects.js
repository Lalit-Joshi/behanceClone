export default (state = {
    projects:[]
}, action) => {
    switch (action.type){
        case 'ALL_PROJECTS':
            return {...state, projects: action.payload}
            break;
        default:
            return state;
    }
    return state;
}
