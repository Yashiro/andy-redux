// custom redux-creators | execute multiple action creators
const creators = ({ dispatch, getState }) => next => action => {
    if (Array.isArray(action)) {
        return action.forEach(v => dispatch(v))
    }
    return next(action)
}
export default creators