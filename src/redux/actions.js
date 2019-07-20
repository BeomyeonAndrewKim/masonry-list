export const GET_SIBA_IMAGES_REQUEST = 'GET_SIBA_IMAGES_REQUEST';
export const GET_SIBA_IMAGES_SUCCESS = 'GET_SIBA_IMAGES_SUCCESS';

export const CLEAR_SIBA_LIST = 'CLELAR_SIBA_LIST';

export const HANDLE_LOADING = 'HANDLE_LOADING';

export const getSibaImages = ({ resizeGridGap }) => ({
  type: GET_SIBA_IMAGES_REQUEST,
  resizeGridGap
});

export const succeedToGetSiba = ({ sibaImages }) => ({
  type: GET_SIBA_IMAGES_SUCCESS,
  sibaImages
});

export const clearSibaList = () => ({
  type: CLEAR_SIBA_LIST
});

export const handleLoading = ({ isLoading }) => ({
  type: HANDLE_LOADING,
  isLoading
});
