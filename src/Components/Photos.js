import React from 'react';

const Photos = props => {
    return (    
        <li>
            <img src={props.url} alt="" /> //using prop to access url ???
        </li>
);
};
 export default Photos;