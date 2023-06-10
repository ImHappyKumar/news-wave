import React from 'react';
import noimage from '../assets/no_image.png';

const NewsItem = (props) => {
  // Converting props.publishedAt date to Indian Date and formatting it
  const options = {
    timeZone: 'Asia/Kolkata',
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  const indianDateTime = new Date(props.publishedAt).toLocaleString('en-IN', options);

  const handleImgError = (event) => {
    event.target.src = noimage;
  }

  return (
    <div className="card my-3">
      {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark" style={{zIndex: '1'}}>
        {props.source.name}
      </span> */}
        <div className="card-header"><strong>{props.source.name}</strong></div>
        <div className="card-body">
          <div className="card-props.image text-center" style={{height: '250px'}}>
            <img src={props.image?props.image:noimage} alt="" className="newsImg" onError={handleImgError} style={{maxWidth: '100%', maxHeight: '250px', margin: '0px auto'}}/>
          </div>
          <div className="card-text my-3">
            <h5 className="card-props.title text-truncate">{props.title?props.title:"[No Title Available]"}</h5>
            <p className="card-text text-truncate">{props.description?props.description:"[No Description Available]"}</p>
            <footer className="blockquote-footer md-1">By {props.author?props.author:"Unknown"}</footer>
          </div>
        <a href={props.url} target='_blank' rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>
        </div>
        <div className="card-footer text-body-secondary">
        {indianDateTime}
        </div>
    </div>
  )
}

export default NewsItem;