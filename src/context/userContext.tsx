import {
  createContext,
  FC,
  Reducer,
  useContext,
  Dispatch,
  useReducer,
} from "react";
import { v4 as uuid } from "uuid";

const UserContext = createContext<{
  state: State;
  dispatch: Dispatch<Actions>;
}>(undefined!);

export interface User {
  id?: string;
  name: string;
  lastName: string;
  phone: string;
}
const initialState = {
  total: 0,
  users: [] as User[],
};
type Action<T extends string, payload> = payload extends undefined
  ? {
      type: T;
    }
  : {
      type: T;
      payload: payload;
    };
type Actions =
  | Action<"ADD_USER", { user: User }>
  | Action<"REMOVE_USER", { id: string }>;
type State = typeof initialState;

const reducer: Reducer<State, Actions> = (state, action) => {
  switch (action.type) {
    case "ADD_USER": {
      const users = [...state.users, { ...action.payload.user, id: uuid() }];
      return {
        ...state,
        users: users,
        total: users.length,
      };
    }
    case "REMOVE_USER": {
      const users = state.users.filter(({ id }) => id !== action.payload.id);
      return {
        ...state,
        users,
        total: users.length,
      };
    }
  }
};

export const UserStateProvider: FC<{}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserState = () => {
  const result = useContext(UserContext);

  if (!result) {
    throw new Error("User context is  not defined");
  }

  return result;
};
