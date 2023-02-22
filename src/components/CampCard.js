import React, { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";

const CampCard = ({ camp }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-4">
      <div
        className="listing-item listing-grid-item-three mb-30 wow fadeInUp"
        data-wow-delay=".15s"
      >
        <div className="listing-thumbnail">
          <img
            src={camp.thumbnail_image ? camp.thumbnail_image : 'assets/images/listing/thumb-1.jpg'}
            alt="listing image"
          />
          <span className="featured-btn">Popular</span>
          <a href="#" className="wishlist-btn">
            <i className="ti-heart" />
          </a>
        </div>
        <div className="listing-content">
          <h3 className="title">
            <Link href="/listing-details-1">
              <a>{camp ? camp.name : '...'}</a>
            </Link>
          </h3>
          <span className="city">
            <img
              src="assets/images/listing/thumb-2.jpg"
              alt="city image"
            />
            {camp ? camp.province : '...'}
          </span>
          <ul className="ratings ratings-five">
            <li>
              <span className="price">THB {camp ? camp.price : '...'}</span>    
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CampCard