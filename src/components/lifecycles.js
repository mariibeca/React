import React, { PureComponent } from 'react';

class Life extends PureComponent {
    // 1 get default props

    // 2 set the default state
    state = {
        title:'Life cycles'
    }

    // // 5 after render
    // componentDidMount() {
    //     console.log('5 after render')
    //     document.querySelector('h3').style.color = 'red'
    // }

    // // 3 before render
    // UNSAFE_componentWillMount() {
    //     console.log('3 before render')
        
    // }

    // UNSAFE_componentWillUpdate() {
    //     console.log('BEFORE UPDATE')
    // }

    // componentDidUpdate() {
    //     console.log('AFTER UPDATE')
    // }

    // shouldComponentUpdate(nextProps, nextState){

    //     if(nextState.title === this.state.title){
    //         return false
    //     } 

    //     return true;
    // }

    // UNSAFE_componentWillReceiveProps() {
    //     console.log('BEFORE RECEIVE PROPS')
    // }

    // componentWillUnmount() {
    //     console.log('UNMOUNT')
    // }

    // 4 render method
    render() {
        console.log('RENDER')
        return(
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={
                    ()=>this.setState({
                        title:'something else'
                    })}
                >CLICK TO CHANGE</div>
            </div>
        )
    }

    
}

export default Life;