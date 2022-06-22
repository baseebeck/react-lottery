import React, { Component } from 'react';
import LottoBall from './LottoBall';
import './Lotto.css';

class Lotto extends Component {
    static defaultProps = {
        title: 'Lottery',
        numBalls: 6,
        maxNum: 40
    };

    constructor(props) {
        super(props);
        this.state = { nums: Array.from({ length: this.props.numBalls }) };
        this.handleClick = this.handleClick.bind(this);
    }

    generate() {
        this.setState(curState => ({
            nums: curState.nums.map(
                n => Math.floor(Math.random() * this.props.maxNum) + 1 
            )
        }));
        

    }

    handleClick() {
        this.generate();
    }

    render() {
        return (
            <section className="Lotto">
                <div className="Lotto-title">
                    <h1>{this.props.title}</h1>
                </div>
                <div>
                    {this.state.nums.map(n => <LottoBall num={n} />)}
                </div>
                <button className="Lotto-button" onClick={this.handleClick}>Generate</button>
            </section>
        );
    }
}

export default Lotto;