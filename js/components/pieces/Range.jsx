import React, {PureComponent} from "react";

class Range extends PureComponent {
    constructor(props) {
        super(props);
        this.state= {
            baseWidth: 0,
            rangeWidth: 0,
            value: 0,
        }
    }
    setrangeValue = (e) => {
        let width = (this.state.baseWidth / this.props.max * this.state.value);
        this.setState({rangeWidth: width, value: e.target.value});
        this.props.setValue(e.target.value);
    };

    componentDidMount() {
        let baseWidth = this.ref.clientWidth;
        let width = (this.ref.clientWidth / this.props.max * this.props.defaultValue);
        this.setState({baseWidth: baseWidth, rangeWidth: width, value: this.props.defaultValue});
        this.props.setValue(this.props.defaultValue);
        console.log(this.props.defaultValue);
    };

    render() {
        return (
            <React.Fragment>
                        <input
                            type="range"
                            onChange={this.setrangeValue}
                            onClick={this.onClick}
                            className={this.props.className}
                            min={this.props.min}
                            max={this.props.max}
                            step={this.props.step}
                            // value={this.props.defaultValue}
                            defaultValue={this.props.defaultValue}
                            ref={(ref) => this.ref = ref}
                        />
                <div className={this.props.className + "-div"} style={{width: this.state.rangeWidth + "px"}}>
                </div>
            </React.Fragment>
        )
    }
}

export default Range;
