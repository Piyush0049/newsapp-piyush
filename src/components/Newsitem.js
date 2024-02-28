import React, { Component } from 'react';

export default class Newsitem extends Component {
  render() {
    let { title, description, imageurl, url, author, publishedAt, source } = this.props;
    return (
      <>

        <div>
          <div className="card" style={{ width: "19.5rem" }}>
            <img src={imageurl} className="card-img-top" alt="..." style={{ height: "190px" }} />
            <div className="card-body">
              <h5 className="card-title">{title} </h5>

              <p className="card-text">{description}</p>
              <p className="card-text my-2"><small className="text-body-secondary">Published on {publishedAt}</small></p>
              <div className="card-footer" style={{ textAlign: "center" }}>
                <small className="text-body-secondary my-2">Credits : <strong>{author}</strong></small>
              </div>
              <a href={url} className="btn btn-sm btn-dark my-3 mx-2" target="_blank" style={{ textAlign: "center" }}>Read More</a>
              <span class="btn btn-success btn-sm mx-2" >{source}</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}


