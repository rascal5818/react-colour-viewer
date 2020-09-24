import React from 'react';
import ColourFrame from './ColourFrame.js';

class ColourSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColour: null,
            isRedTicked: false,
            isBlueTicked: false,
            isGreenTicked: false,
            isYellowTicked: false,
            isPinkTicked: false,
        };
    }

    resetColour(color) {
        this.setState({ backgroundColour: null });

        switch (color) {
            case 'isBlueTicked':
                return this.setState({ isBlueTicked: false });
            case 'isRedTicked':
                return this.setState({ isRedTicked: false });
            case 'isGreenTicked':
                return this.setState({ isGreenTicked: false });
            case 'isYellowTicked':
                return this.setState({ isYellowTicked: false });
            case 'isPinkTicked':
                return this.setState({ isPinkTicked: false });
            default:
                return;
        }
    }

    turnRed(e) {
        if (this.state.isRedTicked === true) {
            this.resetColour('isRedTicked');
        } else {
            this.setState({
                backgroundColour: 'Colour Red',
                isRedTicked: true,
            });
        }
    }

    turnBlue(e) {
        if (this.state.isBlueTicked === true) {
            this.resetColour('isBlueTicked');
        } else {
            this.setState({
                backgroundColour: 'Colour Blue',
                isBlueTicked: true,
            });
        }
    }

    turnGreen(e) {
        if (this.state.isGreenTicked === true) {
            this.resetColour('isGreenTicked');
        } else {
            this.setState({
                backgroundColour: 'Colour Green',
                isGreenTicked: true,
            });
        }
    }

    turnYellow(e) {
        if (this.state.isYellowTicked === true) {
            this.resetColour('isYellowTicked');
        } else {
            this.setState({
                backgroundColour: 'Colour Yellow',
                isYellowTicked: true,
            });
        }
    }

    turnPink(e) {
        if (this.state.isPinkTicked === true) {
            this.resetColour('isPinkTicked');
        } else {
            this.setState({
                backgroundColour: 'Colour Pink',
                isPinkTicked: true,
            });
        }
    }

    render() {
        return (
            <div>
                <h2>Select a colour</h2>
                <input
                    type="checkbox"
                    id="red"
                    onChange={e => this.turnRed(e)}
                    disabled={
                        this.state.isBlueTicked === true ||
                        this.state.isGreenTicked === true ||
                        this.state.isYellowTicked === true ||
                        this.state.isPinkTicked === true
                    }
                />
                <label htmlFor="red">Red</label>
                <input
                    type="checkbox"
                    id="blue"
                    onChange={e => this.turnBlue(e)}
                    disabled={
                        this.state.isGreenTicked === true ||
                        this.state.isYellowTicked === true ||
                        this.state.isPinkTicked === true || 
                        this.state.isRedTicked === true
                    }
                />
                <label htmlFor="blue">Blue</label>
                <input
                    type="checkbox"
                    id="green"
                    onChange={e => this.turnGreen(e)}
                    disabled={
                        this.state.isRedTicked === true ||
                        this.state.isBlueTicked === true ||
                        this.state.isYellowTicked === true ||
                        this.state.isPinkTicked === true
                    }
                />
                <label htmlFor="green">Green</label>
                <input
                    type="checkbox"
                    id="yellow"
                    onChange={e => this.turnYellow(e)}
                    disabled={
                        this.state.isGreenTicked === true ||
                        this.state.isBlueTicked === true ||
                        this.state.isPinkTicked === true || 
                        this.state.isRedTicked === true
                    }
                />
                <label htmlFor="yellow">Yellow</label>
                <input
                    type="checkbox"
                    id="pink"
                    onChange={e => this.turnPink(e)}
                    disabled={
                        this.state.isGreenTicked === true ||
                        this.state.isBlueTicked === true ||
                        this.state.isYellowTicked === true || 
                        this.state.isRedTicked === true
                    }
                />
                <label htmlFor="pink">Pink</label>
                <ColourFrame className={this.state.backgroundColour} />
            </div>
        );
    }
}

export default ColourSelector;
