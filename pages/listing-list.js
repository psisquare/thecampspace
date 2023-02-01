import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import PageBanner from "../src/components/PageBanner";
// import RangeSlider from "../src/components/RangeSlider";
import Layout from "../src/layouts/Layout";
import ListItem from "../src/components/ListItem";

const RangeSlider = dynamic(() => import("../src/components/RangeSlider"), {
  ssr: false,
});

const ListingList = () => {
  const [camp, setCamp] = useState({})
  const [campList, setCampList] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://f3260c34-0ede-4f1d-a297-81411bbb633b.mock.pstmn.io/camp')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCampList(data)
        setLoading(false)
      })
  }, [])

  return (
    <Layout>
      {/* <PageBanner title={"List Layout"} /> */}
      <section className="listing-list-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            {/* start of filter search panel column */}
            <div className="col-lg-4">
              <div className="sidebar-widget-area">
                <div className="widget search-listing-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">Filter Search</h4>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="search-form">
                      {/* <div className="form_group">
                        <input
                          type="search"
                          className="form_control"
                          placeholder="Search keyword"
                          name="search"
                          required=""
                        />
                        <i className="ti-search" />
                      </div> */}
                      <div className="form_group">
                        <select className="wide">
                          <option disabled selected="By place">
                            ประเภทลานกางเต๊นท์
                          </option>
                          <option value={1}>ลานเอกชน</option>
                          <option value={2}>อุทยานแห่งชาติ</option>
                        </select>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          สัตว์เลี้ยงเข้าได้
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          มีไดร์เป่าผม
                        </label>
                      </div>
                    </div>
                    <div className="form_group">
                      <button className="main-btn icon-btn">Search Now</button>
                    </div>
                  </form>
                </div>
                {/* <div className="widget newsletter-widget mb-30 wow fadeInUp">
                  <div
                    className="newsletter-widget-wrap bg_cover"
                    style={{
                      backgroundImage:
                        "url(assets/images/newsletter-widget-1.jpg)",
                    }}
                  >
                    <i className="flaticon-email-1" />
                    <h3>Subscribe Our Newsletter</h3>
                    <button className="main-btn icon-btn">Subscribe</button>
                  </div>
                </div> */}
              </div>
            </div>
            {/* end of filter search panel column */}
            {/* start of search listing panel column */}
            <div className="col-lg-8">
              {/* start of no results/sort options/ view option   */}
              {/* <div className="listing-search-filter mb-40">
                
                <div className="row">
                  <div className="col-md-8">
                    <div className="filter-left d-flex align-items-center">
                      <div className="show-text">
                        <span>Showing Result 1-09</span>
                      </div>
                      <div className="sorting-dropdown">
                        <select className="wide">
                          <option value="default" selected disabled>
                            Default Sorting
                          </option>
                          <option value={1}>Museums</option>
                          <option value={2}>Restaurant</option>
                          <option value={3}>Party Center</option>
                          <option value={4}>Fitness Zone</option>
                          <option value={5}>Game Field</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="filter-right">
                      <ul className="filter-nav">
                        <li>
                          <Link href="/listing-grid">
                            <a>
                              <i className="ti-view-grid" />
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/listing-list">
                            <a className="active">
                              <i className="ti-view-list-alt" />
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* end of no results/sort options/ view option */}
              <div className="listing-list-wrapper">
                {campList.map((camp) => {
                  <ListItem camp={camp}></ListItem>  
                })}
                {/* <ListItem camp={camp}></ListItem> */}
                <div className="listing-item listing-list-item-two mb-60 wow fadeInUp">
                  <div className="listing-thumbnail">
                    <img
                      src="assets/images/listing/listing-list-7.jpg"
                      alt="listing Image"
                    />
                    <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                      <div className="meta-icon-title d-flex align-items-center">
                        <div className="icon">
                          <i className="flaticon-government" />
                        </div>
                        <div className="title">
                          <h6>Museums</h6>
                        </div>
                      </div>
                      <span className="status st-open">Open</span>
                    </div>
                  </div>
                  <div className="listing-content">
                    <h3 className="title">
                      <Link href="/listing-details">
                        <a>Central History</a>
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
                            California, USA
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
                <div className="listing-item listing-list-item-two mb-60 wow fadeInUp">
                  <div className="listing-thumbnail">
                    <img
                      src="assets/images/listing/listing-list-8.jpg"
                      alt="listing Image"
                    />
                    <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                      <div className="meta-icon-title d-flex align-items-center">
                        <div className="icon">
                          <i className="flaticon-dumbbell" />
                        </div>
                        <div className="title">
                          <h6>Fitness</h6>
                        </div>
                      </div>
                      <span className="status st-open">Open</span>
                    </div>
                  </div>
                  <div className="listing-content">
                    <h3 className="title">
                      <Link href="/listing-details">
                        <a>Xtream Gym</a>
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
                            California, USA
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
                <div className="listing-item listing-list-item-two mb-60 wow fadeInUp">
                  <div className="listing-thumbnail">
                    <img
                      src="assets/images/listing/listing-list-9.jpg"
                      alt="listing Image"
                    />
                    <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                      <div className="meta-icon-title d-flex align-items-center">
                        <div className="icon">
                          <i className="flaticon-suitcase" />
                        </div>
                        <div className="title">
                          <h6>Job &amp; Feed</h6>
                        </div>
                      </div>
                      <span className="status st-open">Open</span>
                    </div>
                  </div>
                  <div className="listing-content">
                    <h3 className="title">
                      <Link href="/listing-details">
                        <a>Mega Agency</a>
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
                            California, USA
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
                <div className="listing-item listing-list-item-two mb-60 wow fadeInUp">
                  <div className="listing-thumbnail">
                    <img
                      src="assets/images/listing/listing-list-10.jpg"
                      alt="listing Image"
                    />
                    <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                      <div className="meta-icon-title d-flex align-items-center">
                        <div className="icon">
                          <i className="flaticon-shopping" />
                        </div>
                        <div className="title">
                          <h6>Shopping</h6>
                        </div>
                      </div>
                      <span className="status st-open">Open</span>
                    </div>
                  </div>
                  <div className="listing-content">
                    <h3 className="title">
                      <Link href="/listing-details">
                        <a>Central Plaza</a>
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
                            California, USA
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
              </div>
            </div>
            {/* start of search listing panel column */}
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ListingList;
