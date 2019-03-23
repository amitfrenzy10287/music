import React,{Component,Fragment} from 'react';
import PropTypes from 'prop-types';
import {debounce} from 'throttle-debounce';

import {
    SearchWrapper,
    SearchBoxWrapper,
    SearchContentWrapper,
    SearchBox,
    CloseBtn,
    OptionsWrapper,
    Options,
    NoOptions
} from './style';

class AutoSearch extends Component {
    static propTypes = {
        options: PropTypes.instanceOf(Array).isRequired
    };
    state = {
        activeOption: 0,
        filteredOptions: [],
        showOptions: false,
        userInput: ''
    };

    clearSearch=()=>{
        this.setState({userInput:''});
        this.props.clearFilteredSongs();
    };

    onChange = (e) => {
        const { options } = this.props;
        const userInput = e.currentTarget.value;

        const filteredOptions = options.filter(
            (optionName) =>
                optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        this.setState({
            activeOption: 0,
            filteredOptions,
            showOptions: true,
            userInput: e.currentTarget.value
        });
    };

    onClick = (e) => {
        this.setState({
            activeOption: 0,
            filteredOptions: [],
            showOptions: false,
            userInput: e.currentTarget.innerText
        });

        this.props.handleSearchSong(e.currentTarget.innerText);
    };
    onKeyDown = (e) => {
        const { activeOption, filteredOptions } = this.state;

        if (e.keyCode === 13) {
            this.setState({
                activeOption: 0,
                showOptions: false,
                userInput: filteredOptions[activeOption]
            });
        } else if (e.keyCode === 38) {
            if (activeOption === 0) {
                return;
            }
            this.setState({ activeOption: activeOption - 1 });
        } else if (e.keyCode === 40) {
            if (activeOption === filteredOptions.length - 1) {
                return;
            }
            this.setState({ activeOption: activeOption + 1 });
        }
    };

    render() {

        const {
            onChange,
            onClick,
            onKeyDown,
            state: { activeOption, filteredOptions, showOptions, userInput }
        } = this;

        let optionList;
        if (showOptions && userInput) {
            if (filteredOptions.length) {
                optionList = (
                    <OptionsWrapper>
                        {filteredOptions.map((optionName, index) => {
                            let isActive='';
                            if (index === activeOption) {
                                isActive = 'active';
                            }
                            return (
                                <Options key={index} isActive={isActive} key={optionName} onClick={onClick}>
                                    {optionName}
                                </Options>
                            );
                        })}
                    </OptionsWrapper>
                );
            } else {
                optionList = (
                    <NoOptions>
                        <em>Sorry! We don't have your songs available now!</em>
                    </NoOptions>
                );
            }
        }
        return (
            <SearchWrapper>
                <SearchBoxWrapper>
                    <SearchContentWrapper>
                        <SearchBox
                            placeholder="Search your favourite songs..."
                            type="text"
                            onChange={onChange}
                            onKeyDown={onKeyDown}
                            value={userInput}
                        />
                        <CloseBtn isVisible={userInput ? 'block':'none'} onClick={()=>this.clearSearch()} />
                    </SearchContentWrapper>
                </SearchBoxWrapper>
                {optionList}
            </SearchWrapper>
        );
    }
}

export default AutoSearch;
