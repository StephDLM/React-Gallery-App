import React, { Component } from 'react';
import Photos from './Photos';
import NotFound from './NotFound';


const PhotoList = (props) => { 
  const results = props.data;
  let photos;
  if(results.length > 0){
    photos = results.map(photo => {//map over the array and return a photo component from the array
      return(
      <Photos url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
       } key={photo.id} />
    )});
  } else {
    return (
      photos = <NotFound/>
    )}
    return(
      <div className="photo-container">
      <h1>Results</h1>
      <ul>{ photos }</ul>
      </div>
    )
}




export default PhotoList;

