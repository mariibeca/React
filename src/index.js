import React from 'react';
import ReactDOM from 'react-dom';

//COMPONENTS
const App = () => {
    return (
        <div className="newElement">
            <h1>Hello react!!!</h1>
            <div>hey</div>
        </div>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'));