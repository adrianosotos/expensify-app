import { login, logout } from '../../actions/auth';

test('expect to set uid in login', () => {
    const action = login(123);
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 123
    });
});

test('expect to set logout', () => {
    expect(logout()).toEqual({
        type: 'LOGOUT'
    });
});