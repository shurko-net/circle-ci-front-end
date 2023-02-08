const SET_USER_DATA = 'SET_USER_DATA';

interface User {
  firstname : any,
  secondName : any,
  password :any,
  email : any,
}

interface UserState {
  firstname : null | string,
  secondName : null | string,
  password: null | string,
  email: null | string,
  biography: null | string,
  phoneNumber: null | string,
  isLogged: boolean
}

interface SetUserDataAction {
  type: SET_USER_DATA
}

const initialState: UserState = {
  firstname: null,
  secondName: null,
  password: null,
  email: null,
  biography: null,
  phoneNumber: null,
  isLogged: true,

};

const authReducer = (state = initialState, action) : UserState => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isLogged: true,
      };
    default:
      return state;
  }
};

export const setUserData = ({
  firstname, secondName, password, email,
}:User) => ({
  type: SET_USER_DATA,
  data: {
    firstname, secondName, email, password,
  },
});

export default authReducer;
