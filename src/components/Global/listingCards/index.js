import React, { Component } from 'react';

import './listingCards.scss';

let likeIcon = '<svg class="rf-icon rf-icon--appreciate" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0.5 0.5 16 16"><path fill="none" d="M.5.5h16v16H.5z"></path><path class="fill" d="M.5 7.5h3v8h-3zM7.207 15.207c.193.19.425.29.677.293H12c.256 0 .512-.098.707-.293l2.5-2.5c.19-.19.288-.457.293-.707V8.5c0-.553-.445-1-1-1h-5L11 5s.5-.792.5-1.5v-1c0-.553-.447-1-1-1l-1 2-4 4v6l1.707 1.707z"></path></svg>';
let viewIcon = '<svg class="rf-icon rf-icon--views" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="none" d="M.5.5h16v16H.5z"></path><path class="fill" d="M8.5 3.5c-5 0-8 5-8 5s3 5 8 5 8-5 8-5-3-5-8-5zm0 7c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .894 2 2 0 1.104-.896 2-2 2z"></path></svg>';

export default class ListingCards extends Component{
  render(){
    const { data } = this.props
    return(
      <div className="card">
        <img src={data.covers['230']} alt="" />
        <div className="inner">
          <h2>{data.name}</h2>
          <span className="ownername">{data.owners[0].display_name}</span>
          <span>{data.fields[0]}</span>
          <div className="status">
            <ul>
              <li>
                <span dangerouslySetInnerHTML={{__html: likeIcon}} className="svgicon"></span>
                <span className="text">{data.stats.appreciations}</span>
              </li>
              <li>
                <span dangerouslySetInnerHTML={{__html: viewIcon}} className="svgicon"></span>
                <span className="text">{data.stats.views}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}