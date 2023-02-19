import Link from "next/link";
import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import CampGallery from "../src/components/highlight/CampGallery";
import Highlight from "../src/components/highlight/Highlight";
import ListingDetailsRight from "../src/components/ListingDetailsRight";
import RatingReview from "../src/components/RatingReview";
import Layout from "../src/layouts/Layout";

const ListingDetails1 = ({ data }) => {
  const _camp = {
    name: 'Chonburi Mountain Camp',
    description: "🔰ระเบียบของลาน แบบที่พัก รายละเอียดก่อนตัดสินใจจองค่ะ ➡️ ที่พักเราจะมี 2 แบบ⛺ นำเต๊นท์มาเอง 250 บาท/ท่าน ทุกวันเสาร์ทางลานจะมีดนตรีโฟล์คซอง",
    no_of_reviews: 25,
    rating: 3.7,
    subdistrict: 'บางแสน',
    province: 'ชลบุรี',
    is_pet_friendly: true,
    latlong: '',
    contact_tel: '0819998976',
    contact_facebook: 'fb.com/cbx',
    images: [],
    google_map_link: 'https://www.google.com/maps/place/Chonburi+mountaincamp/@13.3081718,101.0421871,17z/data=!4m6!3m5!1s0x311d35362373b961:0x64e97e0bb1ccfd53!8m2!3d13.3081718!4d101.0443758!16s%2Fg%2F11spqvw047',
    type: 'ลานเอกชน',
    facilities: {
      bathroom_available: true,
      dryer_available: true,
      water_heater_available : true,
      ais_available: true,
      true_available: true,
      dtac_available: true
    },
    highlights: ['gender_specific_bathroom', 
      'dryer_available',
      'dryer_available',
      'dryer_available',
      'dryer_available',
      'dryer_available',
      'car_camp_space_available'],
    images: [
      'assets/images/listing/scott-goodwill-y8Ngwq34_Ak-unsplash.jpg',
      'assets/images/listing/scott-goodwill-y8Ngwq34_Ak-unsplash.jpg',
      'assets/images/listing/scott-goodwill-y8Ngwq34_Ak-unsplash.jpg',
      'assets/images/listing/scott-goodwill-y8Ngwq34_Ak-unsplash.jpg',
      'assets/images/listing/gallery-3.jpg',
      'assets/images/listing/gallery-3.jpg',
      'assets/images/listing/gallery-3.jpg',
    ],
    price: 250,
    price_unit: 'ต่อคน',
    price_remark: '',
    rules: '',
    advance_booking_required: true
  }
  const [camp, setCamp] = useState(_camp)
  const [accordionActive, setAccordionActive] = useState("collapseOne");
  const setAccordion = (value) => (value === accordionActive ? "" : value),
    activeAccortion = (value) => (value === accordionActive ? true : false);

  return (
    <Layout>
      {/*====== Start Breadcrumbs section ======*/}
      <section className="page-breadcrumbs page-breadcrumbs-one pt-120 pb-70">
        <div className="container">
          <div className="breadcrumbs-wrapper-one">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="listing-info-name">
                  <div className="info-name d-flex">
                    <div className="thumb">
                      <img
                        src="assets/images/listing/info-1.jpg"
                        alt="thumb image"
                      />
                    </div>
                    <div className="content">
                      <span className="cat-btn">{camp.type}</span>
                      <h3>{camp.name}</h3>
                      {/* <p className="tag">
                        <a href="#">Popular restaurant</a>,
                        <a href="#">California</a>
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="listing-info-content">
                  <div className="content">
                    <RatingReview rating={{count:camp.rating, no_of_reviews:camp.no_of_reviews}}></RatingReview>
                    <div className="listing-meta">
                      <ul>
                        <li>
                          <span>
                            <i className="ti-location-pin" />
                            {camp.province}
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-tablet" />
                            <a href="">{camp.contact_tel}</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="button">
                  <Link href="/listing-grid">
                    <a className="icon-btn">
                      <i className="ti-heart" />
                    </a>
                  </Link>
                  <Link href="/listing-grid">
                    <a className="icon-btn">
                      <i className="ti-share" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Breadcrumbs section ======*/}
      {/*====== Start Listing Details section ======*/}
      <section className="listing-details-section pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="listing-details-wrapper listing-details-wrapper-one">
                <div className="listing-content mb-50 wow fadeInUp">
                  <h3 className="title">รายละเอียด</h3>
                  <p>
                    {camp.description}
                  </p>
                </div>
                {/* start of hilight */}
                <Highlight highlights={camp.highlights}></Highlight>
                {/* end of hilight */}
                {/* start of facilities */}
                {/* <div className="listing-features-box mb-50 wow fadeInUp">
                  <h4 className="title">สิ่งอำนวยความสะดวก</h4>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          <i className="ti-credit-card" />
                        </div>
                        <div className="info">
                          <h6>Card Payment</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          <i className="ti-paint-bucket" />
                        </div>
                        <div className="info">
                          <h6>Air-conditioned</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          <i className="ti-rss-alt" />
                        </div>
                        <div className="info">
                          <h6>Wireless Internet</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          <i className="ti-trash" />
                        </div>
                        <div className="info">
                          <h6>Serves Alcohol</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          <i className="ti-car" />
                        </div>
                        <div className="info">
                          <h6>Parking Street</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          <i className="ti-credit-card" />
                        </div>
                        <div className="info">
                          <h6>Outdoor Seating</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* end of facilities */}
                {/* start of images */}
                <CampGallery images={camp.images}></CampGallery>
                {/* end of images */}
                {/* <div className="listing-tag-box mb-50 wow fadeInUp">
                  <h4 className="title">Popular Tag</h4>
                  <a href="#">Delivery</a>
                  <a href="#">Restaurant</a>
                  <a href="#">Free Internet</a>
                  <a href="#">Shopping</a>
                  <a href="#">Car Parking</a>
                  <a href="#">Food</a>
                  <a href="#">Kitchen</a>
                  <a href="#">Reservation</a>
                  <a href="#">Travel</a>
                </div> */}
                {/* <div className="listing-review-box mb-50 wow fadeInUp">
                  <h4 className="title">Customer Review</h4>
                  <ul className="review-list">
                    <li className="review">
                      <div className="thumb">
                        <img
                          src="assets/images/listing/review-1.jpg"
                          alt="review image"
                        />
                      </div>
                      <div className="review-content">
                        <h5>Moriana Steve</h5>
                        <span className="date">Sep 02, 2021</span>
                        <p>
                          Musutrum orci montes hac at neque mollis taciti
                          parturient vehicula interdum verra cubilia ipsum duis
                          amet nullam sit ut ornare mattis urna.{" "}
                        </p>
                        <div className="content-meta d-flex align-items-center justify-content-between">
                          <ul className="ratings ratings-three">
                            <li>
                              <span className="av-rate">4.5</span>
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
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                          </ul>
                          <a href="#" className="reply">
                            <i className="ti-share-alt" />
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="review">
                      <div className="thumb">
                        <img
                          src="assets/images/listing/review-2.jpg"
                          alt="review image"
                        />
                      </div>
                      <div className="review-content">
                        <h5>Moriana Steve</h5>
                        <span className="date">Sep 02, 2021</span>
                        <p>
                          Musutrum orci montes hac at neque mollis taciti
                          parturient vehicula interdum verra cubilia ipsum duis
                          amet nullam sit ut ornare mattis urna.{" "}
                        </p>
                        <div className="content-meta d-flex align-items-center justify-content-between">
                          <ul className="ratings ratings-three">
                            <li>
                              <span className="av-rate">4.5</span>
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
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                          </ul>
                          <a href="#" className="reply">
                            <i className="ti-share-alt" />
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="review">
                      <div className="thumb">
                        <img
                          src="assets/images/listing/review-3.jpg"
                          alt="review image"
                        />
                      </div>
                      <div className="review-content">
                        <h5>Moriana Steve</h5>
                        <span className="date">Sep 02, 2021</span>
                        <p>
                          Musutrum orci montes hac at neque mollis taciti
                          parturient vehicula interdum verra cubilia ipsum duis
                          amet nullam sit ut ornare mattis urna.{" "}
                        </p>
                        <div className="content-meta d-flex align-items-center justify-content-between">
                          <ul className="ratings ratings-three">
                            <li>
                              <span className="av-rate">4.5</span>
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
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                          </ul>
                          <a href="#" className="reply">
                            <i className="ti-share-alt" />
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div> */}
                {/* <div className="listing-review-form mb-30 wow fadeInUp">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="title">Write a Review</h4>
                    </div>
                    <div className="col-md-6">
                      <div className="form-rating">
                        <ul className="ratings">
                          <li>
                            <span>Rate Here:</span>
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
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                        </ul>
                        <span>(02 Reviews)</span>
                      </div>
                    </div>
                  </div>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            className="form_control"
                            placeholder="Write Message"
                            name="message"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Your name"
                            name="name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Email here"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <div className="single-checkbox d-flex">
                            <input
                              type="checkbox"
                              id="check4"
                              name="checkbox"
                            />
                            <label htmlFor="check4">
                              <span>
                                Save my name, email, and website in this browser
                                for the next time i comment.
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <button className="main-btn icon-btn">
                            Submit Review
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div> */}
              </div>
            </div>
            <ListingDetailsRight />
          </div>
        </div>
      </section>
      {/*====== End Listing Details section ======*/}
    </Layout>
  );
};
export default ListingDetails1;
