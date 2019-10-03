import React from 'react';

const user = {
    name:'Francis',
    lastname:'Jones',
    age:16
}



const Header = () => {
    return ( 
        <div>
            <div>{user.name}</div>
            <div>{user.lastname}</div>
            <div>{user.age}</div>
        </div> 
    )
}

export default Header;