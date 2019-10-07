import React from 'react';

const NewsList = (props) =>{
    //console.log(props.donkey)

    const items = props.news.map((item)=>{
        return(
            <div>
                <h3>{item.title}</h3>
                <div>
                    {item.feed}
                </div>
            </div>
        )
    });


    return(
        <div>{items}</div>
    )
}

export default NewsList;