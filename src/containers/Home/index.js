import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import SongsListing from '../../components/SongsListing';
import AutoSearch from '../../components/AutoSearch';
import LevelFilter from '../../components/LevelFilter';
import { debounce } from "throttle-debounce";
import SkeletonLoader from '../../components/Loader';

import {
    HomeContainer
} from './style';

class Home extends Component{

    constructor(props) {
        super(props);
        this.handleScrollDebounced =  debounce(500 , e => this.handleScroll(e));
    }

    state={
        currentPage: 1,
        nextPage: 0,
        activeLevel: '',
        percentage: 25,
        showLevel: false,
    };

	componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
	    const { getAllSongsListing } = this.props;
        getAllSongsListing();
	}

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll);
    };

    handleScrollDebouncedEvent=(e)=>{
        e.persist();
        this.handleScrollDebounced(e);
    };

    handleScroll = (e) => {
        const bottom = Math.round(e.target.scrollHeight) - Math.round(e.target.scrollTop) === e.target.clientHeight;
        if ( bottom ) {
            this.loadMoreSongs();
        }
    };

    handleLevelSettings =()=>{
      this.setState({showLevel: !this.state.showLevel});
    };

    loadMoreSongs= async()=>{

        const {songs, setPageData, pageSongs } = this.props;

        if( pageSongs.length !== songs.length ) {

            let { currentPage, nextPage } = this.state;
            currentPage = currentPage + 1;
            nextPage = nextPage + 10;
            const updatedPageSongs = songs.slice(0,nextPage);
            await setPageData(updatedPageSongs);
            this.setState({ currentPage, nextPage });
        }
    };

    handleSearchSong=(userInput)=>{
        const { songs, setFilteredSongs, getAllSongsListing } = this.props;
        let selectedSong = songs
            .filter(song => song.title === userInput );
        if ( userInput !== '' ) {
            setFilteredSongs(selectedSong);
        }else{
            getAllSongsListing();
        }
    };

    filterByLevel=(level)=>{
        const {songs, setFilteredSongs} = this.props;
        const FilterByLevelSongs = songs && songs.filter((song)=>song.level === level);
        if(FilterByLevelSongs.length > 0 ){
            setFilteredSongs(FilterByLevelSongs);
        }
        this.setState({activeLevel:level});
    };

    clearFilterLevel =()=>{
      const { clearFilteredSongs } = this.props;
      this.setState({activeLevel:''});
      clearFilteredSongs();
    };

	render(){

	    let { songs,
            loading,
            getAllSongsListing,
            filteredSongs,
            clearFilteredSongs,
            pageSongs
	    } = this.props;

	    const arrSearch = songs && songs.map(({title}) => (title));

        const songsListing = loading === false && pageSongs ?
            pageSongs.map((pageSong,key)=>{
                return(
                    <SongsListing {...pageSong} key={key} />
                );
            }): <div><SkeletonLoader /><SkeletonLoader /><SkeletonLoader /><SkeletonLoader /><SkeletonLoader /></div>;

	    const filteredListing = loading === false && filteredSongs ? filteredSongs.map((filteredSong,fKey)=>{
            return(
                <SongsListing {...filteredSong} key={fKey} />
            );
        }): <div><SkeletonLoader /><SkeletonLoader /><SkeletonLoader /><SkeletonLoader /><SkeletonLoader /></div>;

		return(
		    <div>
                <LevelFilter
                    showLevel={this.state.showLevel}
                    toggleLevelSettings={this.handleLevelSettings}
                    activeLevel={this.state.activeLevel}
                    filterByLevel={this.filterByLevel}
                    clearFilteredSongs={this.clearFilterLevel}
                />
                <AutoSearch
                    options={ arrSearch }
                    handleSearchSong={ this.handleSearchSong }
                    clearFilteredSongs={clearFilteredSongs}
                    getAllSongs={ getAllSongsListing }
                />
                <HomeContainer onScroll={(e) => this.handleScrollDebouncedEvent(e)}>
                    { loading === true ? <div><SkeletonLoader /><SkeletonLoader /><SkeletonLoader /><SkeletonLoader /><SkeletonLoader /></div> : (filteredListing.length > 0 ? filteredListing : songsListing) }
                </HomeContainer>
            </div>
		);
	}
}
const mapStateToProps = state => {
    return {
        songs: state.app.songs,
        filteredSongs: state.app.filteredSongs,
        loading: state.app.loading,
        pageSongs: state.app.pageSongs
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllSongsListing:() => dispatch(actions.getAllSongs()),
        getFilteredSongs: () => dispatch(actions.getFilteredSongs()),
        setFilteredSongs: (filteredSongs) => dispatch(actions.setFilteredSongs(filteredSongs)),
        clearFilteredSongs: () => dispatch(actions.clearFilteredSongs()),
        setSearchedSongs:(songs) => dispatch(actions.fetchSongsSuccess(songs)),
        setPageData:(pageSongs) => dispatch(actions.setPageSongs(pageSongs)),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
