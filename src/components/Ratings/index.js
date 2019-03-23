import React from "react";

import {
    Star
} from './style';

class Ratings extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            rating: this.props.rating || null,
            temp_rating: null
        };
    }

    handleMouseOver(rating) {
        this.setState(prev => ({
            rating,
            temp_rating: prev.rating
        }));
    }

    handleMouseOut() {
        this.setState(prev => ({
            rating: prev.temp_rating
        }));
    }

    rate(rating) {
        this.setState({
            rating,
            temp_rating: rating
        });
    }

    render() {
        const { rating } = this.state;
        let stars = [];
        for (let i = 0; i < 10; i++) {
            let is_filled = false;
            if (rating >= i && rating !== null) {
                is_filled = true;
            }
            stars.push(
                <Star key={Math.random()} filled={is_filled} direction={(i%2===0) ? "left" : "right"}
                    onMouseOver={() => this.handleMouseOver(i)}
                    onClick={() => this.rate(i)}
                    onMouseOut={() => this.handleMouseOut()}
                />
            );
        }
        return (
            <div>
                {stars}
            </div>
        );
    }
}

export default Ratings;
