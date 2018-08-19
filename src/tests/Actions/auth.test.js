import { login, logout } from '../../Actions/auth';

test('should generate login action object', () => {
    const action = login('mbc123');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'mbc123'
    });
});

test('should generate logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});