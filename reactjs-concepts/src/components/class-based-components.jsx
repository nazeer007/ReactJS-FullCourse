import { Component } from "react";

class ClassBasedComponent extends Component {
    // state = {
    //     showText: false
    // };
    constructor(props) {
        super(props);
        this.state = {
            showText: false,
            changeColor: false,
            count: 0,
            changeCountStyle: false
        }
    }

    //componentDidMount
    componentDidMount() {
        console.log("This is called first on page load");
        this.setState({
            showText: !this.state.showText,
            changeColor: !this.state.changeColor
        })
    }
    //componentDidUpdate
    componentDidUpdate(prevProps, prevState) {
        console.log(prevState, this.state);
        if(prevState && prevState.count !== this.state.count && this.state.count === 10) {
            this.setState({
                ...this.state,
                changeCountStyle: true
            });
        }
    }
    //componentWillUnmount
    componentWillUnmount() {
        console.log("Component is getting unmounted");
    }
    
    handleClick = () => {
        console.log("Button clicked");
        const {showText, changeColor} = this.state;
        this.setState({
            showText: !showText,
            changeColor: !changeColor
        })
    };

    handleCount = () => {
        this.setState({
            ...this.setState,
            count: this.state.count + 1
        })
    }

    render() {
        // console.log(this.state);
        const {showText, changeColor, count, changeCountStyle} = this.state;
        console.log(changeCountStyle);
        
        return (
            <div>
                {
                 showText ? 
                 <h3 style={{color: changeColor ? 'green' : 'black'}}>Class based component</h3> :
                 null
                }
                <button onClick={this.handleClick}>Toggle Text</button>
                <button onClick={this.handleCount}>Increase count value</button>
                <h4 style={{color: changeCountStyle ? 'blue' : 'black', fontSize: changeCountStyle? '20px' : '12px'}}>Count:{count} </h4>
            </div>
        );
    }
}

export default ClassBasedComponent;