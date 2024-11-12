import React, {useReducer} from 'react';
export const AuthenticationContext = React.createContext({});

/**
 * -------------------------------- Reducers --------------------------------
 * @param {state,action} strParam useState and action passed.
 * @return {state} will return state.
 */
const AuthenticationReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'userProfile':
      return {
        ...state,
        userProfile: action.payload.userProfile,
      };
    case 'accCode':
      return {
        ...state,
        accCode: action.payload.accCode,
      };
    default:
      return state;
  }
};
/* ---------------------------- dispatch functions --------------------------- */
const AuthenticationProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(AuthenticationReducer, {
    accCode: undefined,
    userProfile: {},
  });

  const addUserProfile = (userProfile: any) => {
    dispatch({
      type: 'userProfile',
      payload: {userProfile},
    });
  };

  const addAccCode = (accCode: string) => {
    dispatch({
      type: 'accCode',
      payload: {accCode},
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{data: state, addUserProfile, addAccCode}}>
      {children}
    </AuthenticationContext.Provider>
  );
};
export default AuthenticationProvider;
