import { GET_SIBA_IMAGES_SUCCESS, CLEAR_SIBA_LIST, HANDLE_LOADING } from './actions';

const initialState = {
  sibaImages: [],
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SIBA_IMAGES_SUCCESS:
      const { sibaImages } = action;
      return {
        ...state,
        sibaImages: [...state.sibaImages, ...sibaImages]
      };
    case CLEAR_SIBA_LIST:
      return {
        ...state,
        sibaImages: []
      };
    case HANDLE_LOADING:
      const { isLoading } = action;
      return {
        ...state,
        isLoading
      };
    default:
      return state;
  }
};
