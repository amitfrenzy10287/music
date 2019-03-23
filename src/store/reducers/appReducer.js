import * as actionTypes from '../actions/actionTypes';

const initialState = {
  songs: [],
  message: '',
  loading: false,
  filteredSongs: [],
  pageSongs: [],
};

const gelAllSongs = (state, action) => {
  const data = {
    loading: false,
    songs: action.songs,
    pageSongs: action.songs.slice(0,5),
  };
  return {...state, ...data};
};

const setFilteredSongs = (state, action) => {
    const data = {
        loading: false,
        filteredSongs: action.filteredSongs,
    };
    return {...state, ...data};
};

const getFilteredSongs = (state, action) => {
    const data = {
        loading: false,
        filteredSongs: action.filteredSongs,
    };
    return {...state, ...data};
};

const setPageData = (state,action) =>{
    const data = {
        loading: false,
        pageSongs: action.pageSongs
    };
    return {...state, ...data};
};

const clearFilteredSongs = (state, action) => {
    const data = {
        loading: false,
        filteredSongs: [],
    };
    return {...state, ...data};
};

const fetchSongsFail = ( state, action ) => {
  return { ...state,...{ error: true, loading: false } };
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.GET_ALL_SONGS: return gelAllSongs(state, action);
    case actionTypes.FETCH_SONGS_FAIL: return fetchSongsFail(state, action);
    case actionTypes.SET_FILTERED_SONG: return setFilteredSongs(state, action);
    case actionTypes.GET_FILTERED_SONG: return getFilteredSongs(state, action);
    case actionTypes.CLEAR_FILTERED_SONG: return clearFilteredSongs(state, action);
    case actionTypes.SET_PAGE_SONGS: return setPageData(state, action);
    default:
      return state;
  }
};

export default reducer;
