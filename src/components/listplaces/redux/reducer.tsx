import initialState from './initalState';
import { 
    FETCH_PLACES
} from './actions';

const reducer = (state = initialState, payload, error ) => {
  switch (payload.type) {
    case USERS_LIST_IN_PROJECT :
      return {
        ...state,
        usersListInProject : payload.data
      }
    case USERS_LIST_IN_ENVIRONMENT :
      return {
        ...state,
        usersListInEnvironment : payload.data
      }
    case FETCH_ROLES_SUCCESS :
      return {
        ...state,
        rolesData : payload.data
      }
    default:
      return state
  }
}

export default reducer