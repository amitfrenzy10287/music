import * as actionTypes from './actionTypes';
import fetch from 'isomorphic-fetch';

export const fetchSongsSuccess = (songs) => {
  return {
    type: actionTypes.GET_ALL_SONGS,
    songs,
  };
};

export const fetchSongsFail = () => {
  return {
    type: actionTypes.FETCH_SONGS_FAIL,
  };
};

export const getAllSongs = () => {
  return async dispatch => {
      await fetch('./songs.json').then((response)=>{
          return response.json();
      }).then((resp)=>{
          dispatch(fetchSongsSuccess(resp));
      }).catch( err => {
          dispatch(fetchSongsFail(err));
      } );
  };
};

export const setFilteredSongs = ( filteredSongs ) => {
    return {
        type: actionTypes.SET_FILTERED_SONG,
        filteredSongs
    };
};

export const getFilteredSongs = () => {
    return {
        type: actionTypes.GET_FILTERED_SONG
    };
};

export const clearFilteredSongs = () => {
    return {
        type: actionTypes.CLEAR_FILTERED_SONG
    };
};

export const setPageSongs =(pageSongs)=>{
    return{
        type: actionTypes.SET_PAGE_SONGS,
        pageSongs
    }
};

