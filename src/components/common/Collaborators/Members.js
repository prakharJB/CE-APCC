// import MemberCard from "./MemberCard";
// import { config } from "./MembersConfig";
// import TabSlider from './TabSlider';
import React, { useState } from "react";
import Joanes from "../../../assets/images/Dr-Joanes-Atela.jpg";
import Tumaini from "../../../assets/images/Tumaini Malenga.jpg";
import MiaCrampin from "../../../assets/images/Mia Crampin.jpg";
import Mercy from "../../../assets/images/Mercy Wanjala (AfroPHC).jpg";
import Agnes from "../../../assets/images/Agnes Kiragga (APHRC).jpg";
import Sikhulile from "../../../assets/images/Sikhulile Moyo (BHP).jpg";
import Dorcas from "../../../assets/images/Dorcas Kamuya.jpg";
import Ayaga from "../../../assets/images/Ayaga Bawah.jpg";
import Samson from "../../../assets/images/Samson Kiware.jpg";
import Stephen from "../../../assets/images/Stephen Tollman.jpg";
import Umberto from "../../../assets/images/Umberto.png";
import Michèle from "../../../assets/images/Ramsay.jpg";
import Jacques from "../../../assets/images/Jacques Emina.jpg";
import Anjali from "../../../assets/images/Anjali Sharma.png";
import Jim from "../../../assets/images/Jim_Todd.png";
// import lead15 from "../../../assets/images/collaborator-17.png";

const tabs = [
  {
    id: 1,
    title: "Stakeholder & Community Engagement",
    content:
      "Mapping and engaging with APCC stakeholders, including policy-makers",
  },
  {
    id: 2,
    title: "Existing Cohorts",
    content: "Mapping and engaging with existing cohorts",
  },
  {
    id: 3,
    title: "Research Vision & Objectives",
    content: "What should APCC research vision and objectives be?",
  },
  {
    id: 4,
    title: "Data & Methodology",
    content:
      "Data and methodological harmonisation to facilitate cross-cohort research",
  },
  {
    id: 5,
    title: "‘Omics",
    content:
      "Opportunities to collect and analyse biobanked specimens from cohorts",
  },
  {
    id: 6,
    title: "Governance & Ethics",
    content:
      "The Governance Workstream of the APCC aims to facilitate a focused assessment of the governance status of existing consortia and to develop evidence-based and practice-informed recommendations, tools, and operating procedures for Africa",
  },
  {
    id: 7,
    title: "Capacity Strengthening",
    content:
      "Capacity building for cohort management & using cohort-based opportunities",
  },
];
function Members() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

//   const slider = document.querySelector('.tab-slider-nav');
// let mouseDown = false;
// let startX, scrollLeft;

// let startDragging = function (e) {
//   mouseDown = true;
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// };
// let stopDragging = function (event) {
//   mouseDown = false;
// };

// slider.addEventListener('mousemove', (e) => {
//   e.preventDefault();
//   if(!mouseDown) { return; }
//   const x = e.pageX - slider.offsetLeft;
//   const scroll = x - startX;
//   slider.scrollLeft = scrollLeft - scroll;
// });

// // Add the event listeners
// slider.addEventListener('mousedown', startDragging, false);
// slider.addEventListener('mouseup', stopDragging, false);
// slider.addEventListener('mouseleave', stopDragging, false);

  return (
    <div className="collaborators-list mb-10">
      <div className="collaboratescontainer">
        <h1 className="text-[#333333] text-3xl sm:text-6xl text-center font-bold leading-[54px] mb-8 sm:mb-20  List-of-Collaborators listcollabarators">
          List of Collaborators
        </h1>

        {/* <div className="App">
          <TabSlider
            tabs={["Stakeholder & Community Engagement", "Existing Cohorts", "Research Vision & Objectives","Data & Methodology","‘Omics","Governance & Ethics","Capacity Strengthening"]}
            children={[
              <div key={1}>Tab 1 content</div>,
              <div key={2}>Tab 2 content</div>,
              <div key={3}>Tab 3 content</div>,
            ]}
          />
        </div> */}
        <div className="tab-slider">
          <span className="over"><div className="tab-slider-nav">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`tab-slider-tab ${
                  index === activeTabIndex ? "active" : ""
                }`}
                onClick={() => handleTabClick(index)}
              >
                {tab.title}
              </div>
            ))}
          </div>
          </span>
        <div className="tabbottomcontent" >
          <div
            className="tab-slider-content"
            style={{ transform: `translateX(-${activeTabIndex * 100}%)` }}
          >
            {tabs.map((tab) => (
              <div key={tab.id} className="tab-slider-pane">
                {tab.content}
              </div>
            ))}
          </div>
          {/* <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-16">
          {
            config.map((item, index) => <MemberCard key={index} path={item.path} name={item.name} location={item.location} collaboration={item.collaboration} />)
          }
        </div> */}


        {activeTabIndex === 0 ?(
          <div className="newcontainer">
            <div className="cardhead">
              <div className="cardbody">
                <img src={Tumaini} alt="Example Image" className="card-imgg" />
                <div className="card-bodymain">
                  <h3 className="card-titlemain">Tumaini Malenga (AFIDEP)</h3>
                  <p className="card-subtitlemain">Stakeholder & Community Engagement</p>
                </div>
              </div>
            </div>
            <div className="cardhead">
              <div className="cardbody">
                <img src={Joanes} alt="Example Image" className="card-imgg" />
                <div className="card-bodymain">
                  <h3 className="card-titlemain">Joanes Atela (ARIN)</h3>
                  <p className="card-subtitlemain">Stakeholder & Community Engagement</p>
                </div>
              </div>
            </div>
          </div>
        ):null}
        {activeTabIndex === 1 ?(
          <div className="newcontainer">
            <div className="cardhead">
              <div className="cardbody">
                <img src={MiaCrampin} alt="Example Image" className="card-imgg" />
                <div className="card-bodymain">
                  <h3 className="card-titlemain">Mia Crampin (MEIRU)</h3>
                  <p className="card-subtitlemain">Existing Cohorts</p>
                </div>
              </div>
            </div>
            <div className="cardhead">
              <div className="cardbody">
                <img src={Jim} alt="Example Image" className="card-imgg" />
                <div className="card-bodymain">
                  <h3 className="card-titlemain">Jim Todd (NIMR)</h3>
                  <p className="card-subtitlemain">Existing Cohorts</p>
                </div>
              </div>
            </div>
          </div>
        ):null}
        {activeTabIndex === 2 ?(
          <div className="newcontainer">
            <div className="cardhead">
              <div className="cardbody">
                <img src={Anjali} alt="Example Image" className="card-imgg" />
                <div className="card-bodymain">
                  <h3 className="card-titlemain">Anjali Sharma (CIDRZ)</h3>
                  <p className="card-subtitlemain">Research Vision & Objectives</p>
                </div>
              </div>
            </div>
            <div className="cardhead">
              <div className="cardbody">
                <img src={Jacques} alt="Example Image" className="card-imgg" />
                <div className="card-bodymain">
                  <h3 className="card-titlemain">Jacques Emina (Uni Kinshasa)</h3>
                  <p className="card-subtitlemain">Research Vision & Objectives</p>
                </div>
              </div>
            </div>
            <div className="cardhead">
              <div className="cardbody">
                <img src={Mercy} alt="Example Image" className="card-imgg" />
                <div className="card-bodymain">
                  <h3 className="card-titlemain">Mercy Wanjala (AfroPHC)</h3>
                  <p className="card-subtitlemain">Research Vision & Objectives</p>
                </div>
              </div>
            </div>
          </div>
        ):null}
        {activeTabIndex === 3 ?(
          <div className="newcontainer">
            <div className="cardhead">
              <div className="cardbody">
                <img src={Agnes} alt="Example Image" className="card-imgg" />
                <div className="card-bodymain">
                  <h3 className="card-titlemain">Agnes Kiragga (APHRC)</h3>
                  <p className="card-subtitlemain">Data & Methodology</p>
                </div>
              </div>
            </div>
            <div className="cardhead">
              <div className="cardbody">
                <img src={Sikhulile} alt="Example Image" className="card-imgg" />
                <div className="card-bodymain">
                  <h3 className="card-titlemain">Sikhulile Moyo (BHP)</h3>
                  <p className="card-subtitlemain">Data & Methodology</p>
                </div>
              </div>
            </div>
          </div>
        ):null}
        {activeTabIndex === 4 ?(
          <div className="newcontainer">
            <div className="cardhead">
              <div className="cardbody">
                <img src={Michèle} alt="Example Image" className="card-imgg" />
                <div className="card-bodymain">
                  <h3 className="card-titlemain">Michèle Ramsay</h3>
                  <p className="card-subtitlemain">‘Omics</p>
                </div>
              </div>
            </div>
          </div>
        ):null}
        {activeTabIndex === 5 ?(
          <div className="newcontainer">
            <div className="cardhead">
              <div className="cardbody">
                <img src={Umberto} alt="Example Image" className="card-imgg" />
                <div className="card-bodymain">
                  <h3 className="card-titlemain">Umberto D’Alessandro (MRCG)</h3>
                  <p className="card-subtitlemain">Governance & Ethics</p>
                </div>
              </div>
            </div>
            <div className="cardhead">
              <div className="cardbody">
                <img src={Stephen} alt="Example Image" className="card-imgg" />
                <div className="card-bodymain">
                  <h3 className="card-titlemain">Stephen Tollman (Wits)</h3>
                  <p className="card-subtitlemain">Governance & Ethics</p>
                </div>
              </div>
            </div>
            <div className="cardhead">
              <div className="cardbody">
                <img src={Dorcas} alt="Example Image" className="card-imgg" />
                <div className="card-bodymain">
                  <h3 className="card-titlemain">Dorcas Kamuya (KWTRP)</h3>
                  <p className="card-subtitlemain">Governance & Ethics</p>
                </div>
              </div>
            </div>
          </div>
        ):null}
        {activeTabIndex === 6 ?(
          <div className="newcontainer">
            <div className="cardhead">
              <div className="cardbody">
                <img src={Ayaga} alt="Example Image" className="card-imgg" />
                <div className="card-bodymain">
                  <h3 className="card-titlemain">Ayaga Bawah (RIPS)</h3>
                  <p className="card-subtitlemain">Capacity Strengthening</p>
                </div>
              </div>
            </div>
            <div className="cardhead">
              <div className="cardbody">
                <img src={Samson} alt="Example Image" className="card-imgg" />
                <div className="card-bodymain">
                  <h3 className="card-titlemain">Samson Kiware (IHI)</h3>
                  <p className="card-subtitlemain">Capacity Strengthening</p>
                </div>
              </div>
            </div>
          </div>
        ):null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;
