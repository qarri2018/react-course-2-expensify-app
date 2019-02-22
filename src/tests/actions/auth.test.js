import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login, startLogin, logout, startLogout } from '../../actions/auth';

const createMockStore = configureMockStore([thunk]);

test(('should login'), () => {
    const uid = 'uid123';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

// test(('should set startLogin'), () => {
//     const store = createMockStore({});
//     const uid = 'uid123';
//     store.dispatch(startLogin()).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'LOGIN',
//             uid
//         });
//     });
// });

test(('should logout'), () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
      });
});

// test(('should set startLogout'), () => {
//     const store = createMockStore({});
//     store.dispatch(startLogout()).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'LOGOUT',
//             uid: undefined
//         });
//     });
// });