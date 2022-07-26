import React from 'react';

const Photos = props => {  //using prop to access url
    return (    
        <li>
            <img src={props.url} alt="" /> 
        </li>
);
};
 export default Photos;
