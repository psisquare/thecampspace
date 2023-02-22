import React, { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";

const ListItem = ({ camp }) => {
  return (
    <div className="listing-item listing-list-item-two mb-60 wow fadeInUp">
      <div className="listing-thumbnail">
        <img
          src={camp.thumbnail_image}
          alt="listing Image"
        />
        <div className="thumbnail-meta d-flex justify-content-between align-items-center">
          <div className="meta-icon-title d-flex align-items-center">
            <div className="icon">
              <i className="ti-location-pin" />
            </div>
            <div className="title">
              <h6>{camp.type ? camp.type : 'default'}</h6>
            </div>
          </div>
          <span className="status st-open">Open</span>
        </div>
      </div>
      <div className="listing-content">
        <h3 className="title">
          <Link href={`/listing-details?campId=${camp.id}`}>
            <a>{camp.name ? camp.name : 'default'}</a>
          </Link>
        </h3>
        {/* start of rating */}
        {/* <div className="ratings">
          <ul className="ratings ratings-three">
            <li className="star">
              <i className="flaticon-star-1" />
            </li>
            <li className="star">
              <i className="flaticon-star-1" />
            </li>
            <li className="star">
              <i className="flaticon-star-1" />
            </li>
            <li className="star">
              <i className="flaticon-star-1" />
            </li>
            <li className="star">
              <i className="flaticon-star-1" />
            </li>
            <li>
              <span>
                <a href="#">(02 Reviews)</a>
              </span>
            </li>
          </ul>
        </div> */}
        {/* end of rating */}
        <span className="price">THB {camp.price ? camp.price : '...'}</span>
        <span className="phone-meta">
          <i className="ti-tablet" />
          <a href="tel:+982653652-05">{camp.contact_tel ? camp.contact_tel : '...'}</a>
        </span>
        <div className="listing-meta">
          <ul>
            <li>
              <span>
                <i className="ti-location-pin" />
                {camp.province ? camp.province : '...'}
              </span>
            </li>
            <li>
              <span>
                <i className="ti-heart" />
                <a href="#">Save</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ListItem;