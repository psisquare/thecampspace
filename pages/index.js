import Link from "next/link";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import CampCard from "../src/components/CampCard";
import Counter from "../src/components/Counter";
import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layouts/Layout";
import {
  ClientSliderOne,
  ListingSliderOne,
  PlaceSliderOne,
} from "../src/sliderProps";

const Index = () => {
  const [video, setVideo] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [featuredList, setfeaturedList] = useState([])

  useEffect(() => {
    setLoading(true)
    fetch('https://f3260c34-0ede-4f1d-a297-81411bbb633b.mock.pstmn.io/camp/featured')
      .then(res => res.json())
      .then(data => {
        console.log('%%', data)
        setfeaturedList(data)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}
      {/* <!--====== Start Hero Section ======--> */}
      <section className="hero-area">
        <div className="hero-wrapper-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="hero-content">
                  <h1 className="wow fadeInUp" data-wow-delay="30mss">
                    Discover your next campsite !
                  </h1>
                  <h3 className="wow fadeInDown" data-wow-delay="50ms">
                    People Don’t Take,Camps Take People
                  </h3>
                  <div
                    className="hero-search-wrapper wow fadeInUp"
                    data-wow-delay="70ms"
                  >
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="row">
                        <div className="col-lg-8 col-md-4 col-sm-12">
                          <div className="form_group">
                            <select className="form_control">
                                <option disabled selected="Location">
                                    จังหวัด
                                </option>
                                <option value={1}>กรุงเทพมหานคร</option>
                                <option value={2}>กาญจบุรี</option>
                                <option value={3}>ชลบุรี</option>
                                <option value={4}>เชียงใหม่</option>
                                <option value={5}>สระบุรี</option>
                                <option value={6}>ราชบุรี</option>
                                <option value={7}>ระยอง</option>
                                <option value={8}>เพชรบุรี</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          {/* <div className="form_group">
                            <button className="main-btn icon-btn">
                              ค้นหา
                            </button>
                          </div> */}
                          <Link href="/listing-list">
                            <button className="main-btn icon-btn">
                              ค้นหา
                            </button>
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>    
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Hero Section ======--> */}
      {/*====== Start Listing Section ======*/}
      <section className="listing-grid-area light-bg pt-115 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Featured List</span>
                <h2>Explore Destination</h2>
              </div>
            </div>
          </div>
          <div className="row">
            { featuredList ? featuredList.map((camp, index) => 
              <CampCard key={camp.id} camp={camp}></CampCard>
            ) : <div>Loading...</div>}
          </div>
        </div>
      </section>
      {/*====== End Listing Section ======*/}
    </Layout>
  );
};
export default Index;
