export const mapDispatchToProps = namespace => dispatch => {
    return {
        dispatch: ({ type, payload }) => {
            return dispatch({ type, namespace, payload });
        }
    };
};

export const mapStateToProps = namespace => state => {
    console.log(namespace, state)
    return state[namespace];
};