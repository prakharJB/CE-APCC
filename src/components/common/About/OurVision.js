import Demo2 from "../../../assets/images/demo-2.png";
// import Quote from "../../../assets/images/quote.png";

function OurVision () {
  return (
    <div className="our-vision relative mb-8 xl:mb-[40px]">
     
      <div className=" container relative xl:absolute left-1/2 -translate-x-1/2 xl:-bottom-[25%]">
        <div className="backgroundcolor text-xl md:text-4xl font-bold italic text-center leading-[28px] md:leading-[70px] bg-[#1BAE70] rounded-lg p-4 md:p-8 p-4 lg:p-24 m-4">
          {/* {/ <img src={Quote} alt="Quote" className="mx-auto"/> /} */}
          <span className="ourvision">"Our vision is to harness the huge opportunity of population&nbsp;
          cohorts and diversity in Africa to champion new and innovative&nbsp;
          multidisciplinary engagement and research for positive impact&nbsp;
          on the health and well-being of communities in Africa."
          </span>
          <p className="author-name-color not-italic text-2xl md:text-2xl text-right font-normal leading-[70px] my-4">Dr Kobus Herbst</p>
          {/* {/ <img src={Quote} alt="Quote" className="mx-auto"/> /} */}
        </div>
      </div>
    </div>
  )
}

export default OurVision;