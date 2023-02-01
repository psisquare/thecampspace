import React, { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";

const ListItem = ({ camp }) => {
  return (
    <div className="listing-item listing-list-item-two mb-60 wow fadeInUp">
      <div className="listing-thumbnail">
        <img
          src="assets/images/listing/listing-list-6.jpg"
          alt="listing Image"
        />
        <div className="thumbnail-meta d-flex justify-content-between align-items-center">
          <div className="meta-icon-title d-flex align-items-center">
            <div className="icon">
              <i className="flaticon-chef" />
            </div>
            <div className="title">
              <h6>{camp.type ? '' : 'default'}</h6>
            </div>
          </div>
          <span className="status st-open">Open</span>
        </div>
      </div>
      <div className="listing-content">
        <h3 className="title">
          <Link href="/listing-details">
            <a>Chonburi Mountain Camp</a>
          </Link>
        </h3>
        <div className="ratings">
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
        </div>
        <span className="price">$05.00 - $80.00</span>
        <span className="phone-meta">
          <i className="ti-tablet" />
          <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
        </span>
        <div className="listing-meta">
          <ul>
            <li>
              <span>
                <i className="ti-location-pin" />
                ชลบุรี
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