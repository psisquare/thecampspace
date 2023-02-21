import React, { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";

function CampGallery({ images }) {
  return (
    <div className="listing-gallery-box wow fadeInUp">
      <h4 className="title">บรรยากาศ</h4>
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-md-6 col-sm-12">
            <div className="gallery-item mb-30">
              <a href={image} className="img-popup">
                <img src={image} alt="gallery image" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CampGallery