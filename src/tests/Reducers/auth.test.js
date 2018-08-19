import authReducer from '../../Reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        id: 'mbc123'
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({uid: '123'}, action);
    expect(state).toEqual({});
});