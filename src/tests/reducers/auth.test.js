import authReducer from '../../reducers/auth';

test('Should login', () => {
    const action = {
        type: 'LOGIN',
        uid: 1234
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('Should logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({uid: 1231239}, action);
    expect(state).toEqual({});
})