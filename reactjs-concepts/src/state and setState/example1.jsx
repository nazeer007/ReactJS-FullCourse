import { Component } from "react";

class StateDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showText: false,
            changeColor: false
        }
    }

    handleClick = () => {
        console.log("Button Clicked");
        const {showText, changeColor} = this.state;
        this.setState({
            showText : !showText,
            changeColor: !changeColor
        })
    }

    render() {
        console.log(this.state);
        const {showText, changeColor} = this.state;
        return(
            <div>
                {
                    showText ? 
                    <h4 style={{color: changeColor ? 'red' : 'black'}}>Hello World!</h4> : null
                }
                
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        );
    }
}

export default StateDemo;