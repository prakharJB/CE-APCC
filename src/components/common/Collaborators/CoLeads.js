import Lead1 from "../../../assets/images/co_lead_1.png";
import Lead2 from "../../../assets/images/co_lead_2.png";
import img3 from "../../../assets/images/Group 75.png";

function CoLeads () {
  return (
    <div className="co-leads-bg container mx-auto px-4">
      <h1 className=" colhead text-[#333333] text-4xl sm:text-6xl text-center font-bold leading-[54px] my-6 sm:my-14">Project co-leads</h1>
   <div className="coleadimgs">
   
   <div className="dotimage">
    <img src={img3} />
   </div>
   
      <div className="flex flex-col lg:flex-row justify-center py-2">
        <div className="px-4 sm:px-20 my-8 sm:my-20">
          <img src={Lead1} alt="Co-Leads" className="w-full h-auto  rounded-2xl mb-4" />
          <h4 className="text-[#333333] text-3xl sm:text-[45px] text-center font-bold leading-[40px] sm:leading-[60px] my-2 sm:my-8 colwritername">Dr Evelyn Gitau</h4>
          {/* <h6 className="text-[#333333] text-2xl sm:text-[35px] text-center font-normal leading-[30px] sm:leading-[60px] break-all colwriteremail ">(egitau@aphrc.org)</h6> */}
        </div>
        <div className="px-4 sm:px-20 my-8 sm:my-20">
          <img src={Lead2} alt="Co-Leads" className="w-full h-auto rounded-2xl mb-4" />
          <h4 className="text-[#333333] text-3xl sm:text-[45px] text-center font-bold leading-[40px] sm:leading-[60px] my-2 sm:my-8 colwritername">Dr Kobus Herbst</h4>
          {/* <h6 className="text-[#333333] text-2xl sm:text-[35px] text-center font-normal leading-[30px] sm:leading-[60px] break-all colwriteremail">(kobus.herbst@mrc.ac.za)</h6> */}
        </div>
      </div>
      <div className="dotimage seconddotimg">  <img src={img3} /></div>
    </div>
    </div>
  )
}

export default CoLeads;