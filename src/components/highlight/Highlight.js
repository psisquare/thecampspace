import React, { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { highlightConfig } from "../../utils";

const Highlight = ({ highlights = []}) => {
  return (
    <div className="listing-features-box mb-50 wow fadeInUp">
      <h4 className="title">ไฮไลท์</h4>
      <div className="row">
        {highlights.map(h => {
          const { label_th, icon } = highlightConfig[h]
          return (
            
            <div key={h} className="col-lg-4 col-md-6 col-sm-12">
              <div className="icon-box icon-box-one">
                <div className="icon">
                  <i className={icon} />
                </div>
                <div className="info">
                  <h6>{label_th}</h6>
                </div>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Highlight;