import React, { Component } from 'react';

class Life extends Component {
    // 1 get default props

    // 2 set the default state
    state = {
        title:'Life cycles'
    }

    // 5 after render
    componentDidMount() {
        console.log('5 after render')
        document.querySelector('h3').style.color = 'red'
    }

    // 3 before render
    UNSAFE_componentWillMount() {
        console.log('3 before render')
        
    }

    // 4 render method
    render() {
        //console.log(this.props)
        return(
            <div>
                <h3>{this.state.title}</h3>
            </div>
        )
    }

    
}

export default Life;