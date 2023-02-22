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
      .then(res => res.json())
      .then(data => {
        console.log('%%', data)
        setCampList(data)
        setLoading(false)
      })
      .catch(error => console.log(error))
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
                { campList ? campList.map((camp) =>
                  <ListItem key={camp.id} camp={camp}></ListItem>
                ) : <div>loading...</div>}
              </div>
            </div>
            {/* end of search listing panel column */}
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ListingList;
