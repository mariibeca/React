import React,{ Component } from 'react';
import '../css/styles.css'


class Header extends Component {

    state = {
        //active:false,
        //active:'active',
                
        keywords:''
    }

    inputChangeHandler = (event) => {
        //const value = event.target.value === '' ? false:true;
        //const value = event.target.value === '' ? 'active' : 'non-active'

        this.setState({
            //active:value,

            keywords: event.target.value
        });
    }

    render () {

        // const style = {
        //     background:'red'
        // }

        // if(this.state.keywords !== ''){
        //     style.background = 'blue'
        // } else{
        //     style.background = 'red'
        // }


        return ( 
            // inline option <header style={{background:`${this.state.active ? 'red':'blue'}`}}>

            // class style option <header className={this.state.active}>

            <header>
                <div className="logo">Logo</div>
                <input type="text" onChange={this.inputChangeHandler}/>
            </header> 
        )
    }
}

export default Header;