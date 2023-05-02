// import { Link } from "react-router-dom";
// import { BsArrowRight } from "react-icons/bs";
import NewsImage from "../../../assets/images/stage-4.82dadde7fa1876020305.png.png";
// import PublicationImage from "../../../assets/images/news-2.png";
import { Link } from "react-router-dom";
import Shade from "../../../assets/images/Shade.png";
import NewsImage1 from "../../../assets/images/stage-3.png";
import NewsImage2 from "../../../assets/images/stage-2.png";
import React, { useState } from "react";
// import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// function LatestNews() {
//   return (
//     <>
//      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-20 px-4 mb-20">
//        <div className="col-span-1">
//          <h4 className="text-[#1BAE70] text-2xl font-medium leading-[60px] mb-4">Latest news</h4>
//          <h4 className="text-[#333333] text-center xl:text-left text-2xl sm:text-[35px] font-bold leading-[60px] mb-5">The Collaboration for the Establishment of an African Population Cohorts Consortium (CE-APCC)</h4>
//          <p className="text-[#333333] text-center xl:text-left text-2xl font-medium leading-[40px] tracking-wide mb-6">Recent events including the Covid-19 syndemic1 and climate change-related extreme weather crises have highlighted the role of scientific collaboration to understand and intervene in a global health emergency.</p>
//          <Link to="/news/detail/1" className="relative flex flex-row items-center w-fit z-10 text-[#1BAE70] hover:text-[#333333] text-2xl xl:text-3xl font-normal leading-[40px] mx-auto xl:mx-0 transition ease-in-out duration-300">
//            Read more <BsArrowRight className="ml-4" />
//          </Link>
//        </div>
//        <div className="col-span-1">
//          <img src={NewsImage} alt="News Image" className="w-full rounded-2xl" />
//        </div>
//      </div>
//     </>
//   )
// }

// export default LatestNews;

// class DemoCarousel extends Component {
function DemoCarousel() {
  const [toggle, setToggle] = useState(true);

  const changetoggle = () => {
    setToggle(true);
  };
  const changetogglefalse = () => {
    setToggle(false);
  };

  return (
    <div>
      <h1 className="contianer mx-auto text-[#333333] text-3xl sm:text-6xl text-center my-16 font-bold leading-[60px]">
        <span className="btnunderline" onClick={changetoggle}>
          News
        </span>{" "}
        and{" "}
        <span className="btnunderline" onClick={changetogglefalse}>
          Publication
        </span>
      </h1>
      {/* <button onClick={changetoggle}>News</button>
      <button onClick={changetogglefalse}>publication</button> */}

      {toggle === true ? (
        <div>
          <div className="newscontainerr">
            <h4 className="text-[#1BAE70] text-2xl font-medium leading-[60px] mb-4  newshead">
              Latest news
            </h4>
            <Carousel
              className="mainslider"
              autoPlay
              infiniteLoop
              showThumbs={false}
              showArrows={true}
              showIndicators={false}
            >
              <div>
                <div className="mainimg">
                  <img src={NewsImage} alt="Example" />
                  <img src={Shade} alt="shade" className="shadeimgae" />
                </div>
                <div className="shade"></div>
                <div className="newsabout">
                  <h1 className="sliderheader">
                    Using the power of big data for health and wellbeing across
                    Africa
                  </h1>
                  <br />
                  <p className="sliderpara">
                    Recent events including the Covid-19 syndemic1 and climate
                    change-related extreme weather crises have highlighted the
                    role of scientific collaboration to understand and intervene
                    in a global health emergency.
                  </p>
                </div>
              </div>
              <div>
                <div className="mainimg">
                  <img src={NewsImage1} alt="Example" />
                  <img src={Shade} alt="shade" className="shadeimgae" />
                </div>
                <div className="shade"></div>
                <div className="newsabout">
                  <h1 className="sliderheader">
                  Using the power of big data for health and wellbeing across
                  Africa
                  </h1>
                  <br />
                  <p className="sliderpara">
                    Recent events including the Covid-19 syndemic1 and climate
                    change-related extreme weather crises have highlighted the
                    role of scientific collaboration to understand and intervene
                    in a global health emergency.
                  </p>
                </div>
              </div>
              <div>
                <div className="mainimg">
                  <img src={NewsImage2} alt="Example" />
                  <img src={Shade} alt="shade" className="shadeimgae" />
                </div>
                <div className="shade"></div>
                <div className="newsabout">
                  <h1 className="sliderheader">
                  Using the power of big data for health and wellbeing across
                  Africa
                  </h1>
                  <br />
                  <p className="sliderpara">
                    Recent events including the Covid-19 syndemic1 and climate
                    change-related extreme weather crises have highlighted the
                    role of scientific collaboration to understand and intervene
                    in a global health emergency.
                  </p>
                </div>
              </div>
            </Carousel>
            <div className="text-center">
              <button className="blogread mb-[40px] text-[#1BAE70] hover:text-[#333333] text-xl dm:text-3xl font-normal leading-[40px] decoration-2 decoration-[#1BAE70] hover:decoration-[#333333] transition ease-in-out duration-300   readbtn">
                <Link
                  target="blank"
                  to={
                    "https://wellcome.org/news/African-Population-Cohort-Consortium-data-global-health"
                  }
                >
                  Read More{" "}
                </Link>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="newscontainerr">
            <h4 className="text-[#1BAE70] text-2xl font-medium leading-[60px] mb-4  newshead">
              Latest Publication
            </h4>
            <Carousel
              className="mainslider"
              autoPlay
              infiniteLoop
              showThumbs={false}
              showArrows={true}
              showIndicators={false}
            >
              <div>
                <div className="mainimg">
                  <img src={NewsImage2} alt="Example" />
                  <img src={Shade} alt="shade" className="shadeimgae" />
                </div>
                <div className="shade"></div>
                <div className="newsabout">
                  <h1 className="sliderheader">
                    Considerations for an integrated population health databank
                    in Africa: lessons from global best practices [version 1;
                    peer review: 2 approved]
                  </h1>
                  <br />
                  <p className="sliderpara">
                    Background: The rising digitisation and proliferation of
                    data sources and repositories cannot be ignored.
                  </p>
                </div>
              </div>
              <div>
                <div className="mainimg">
                  <img src={NewsImage1} alt="Example " />
                  <img src={Shade} alt="shade" className="shadeimgae" />
                </div>
                <div className="shade"></div>
                <div className="newsabout">
                  <h1 className="sliderheader">
                    Considerations for an integrated population health databank
                    in Africa: lessons from global best practices [version 1;
                    peer review: 2 approved]
                  </h1>
                  <br />
                  <p className="sliderpara">
                    Background: The rising digitisation and proliferation of
                    data sources and repositories cannot be ignored.
                  </p>
                </div>
              </div>
              <div>
                <div className="mainimg">
                  <img src={NewsImage} alt="Example" />
                  <img src={Shade} alt="shade" className="shadeimgae" />
                </div>
                <div className="shade"></div>
                <div className="newsabout">
                  <h1 className="sliderheader">
                    Considerations for an integrated population health databank
                    in Africa: lessons from global best practices [version 1;
                    peer review: 2 approved]
                  </h1>
                  <br />
                  <p className="sliderpara">
                    Background: The rising digitisation and proliferation of
                    data sources and repositories cannot be ignored.
                  </p>
                </div>
              </div>
            </Carousel>
            <div className="text-center">
              <button className="blogread mb-[40px] text-[#1BAE70] hover:text-[#333333] text-xl dm:text-3xl font-normal leading-[40px] decoration-2 decoration-[#1BAE70] hover:decoration-[#333333] transition ease-in-out duration-300   readbtn">
                <Link
                  target="blank"
                  to={"https://wellcomeopenresearch.org/articles/6-214/v1"}
                >
                  Read More{" "}
                </Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default DemoCarousel;
