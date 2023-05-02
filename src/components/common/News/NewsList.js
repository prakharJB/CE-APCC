import { Link } from "react-router-dom";
import NewBlog from "./NewBlog";
import { NewsConfig } from "./NewsConfig";
import { BsArrowRight } from "react-icons/bs";
import Blog_img from "../../../assets/images/Rectangle 12.png";
import Blog_img2 from "../../../assets/images/Rectangle 11.png";

function NewsList() {
  return (
    <>
      {/* <div className="container mx-auto mb-[120px] px-4">
      {
        NewsConfig.map((item, index) =>
          <NewBlog key={index} title={item.title} imgPath={item.imgPath}>
            <p className="text-[#333333] texl-xl md:text-2xl font-normal leading-[30px] sm:leading-[40px] mb-16">
              A group of funders led by Wellcome have commissioned, through an open competitive process, an African-led team to design an ambitious initiative.<br /><br />
              The team will plan a network of large longitudinal population studies - studies which track the health of a large group of people over time - across Africa that builds on existing infrastructure and capacity and creates resources where gaps are evident.<br /><br />
              This initiative, provisionally named the African Population Cohort Consortium (APCC), will inform Africa's specific health needs and will enable the next phase of scientific discovery utilising African diversity for global health benefit. A team co-led by Kobus Herbst and JP Ochieng'-Odero is embarking on an 18-month adventure that will galvanise expertise across the continent. They will design what the APCC will look like and what it will deliver, supported by the power of the largest population data initiative in Africa to date.</p>
            <Link onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} to={`/news/detail/${index + 1}`} className="relative flex flex-row items-center w-fit z-10 text-[#1BAE70] hover:text-[#333333] text-xl sm:text-2xl xl:text-3xl font-normal leading-[40px]  transition ease-in-out duration-300">
              Read more <BsArrowRight className="ml-4" />
            </Link>
          </NewBlog>
        )
      }

      <div className="text-center"><button className="text-[#1BAE70] hover:text-[#333333] text-xl dm:text-3xl font-normal leading-[40px] decoration-2 decoration-[#1BAE70] hover:decoration-[#333333] underline underline-offset-8 transition ease-in-out duration-300">Load more</button></div>
    </div> */}
      <div className="main-blog-container">
        <div className="blog-container">
          <div className="b-head">
            <div className="b-body">
              <img src={Blog_img} alt="Example Image" className="b-imgg" />
              <div className="b-bodymain">
                <h3 className="b-titlemain">
                  Using the power of big data for health and wellbeing across
                  Africa
                </h3>
               <div  className="readmorebtnarrow"> 
               <div><p className="b-subtitlemain"><Link target="blank" to={"https://wellcome.org/news/African-Population-Cohort-Consortium-data-global-health"}>Read More </Link></p></div>
               <div className="arrowsvg"><BsArrowRight /></div>
               </div>
              </div>
            </div>
          </div>
          <div className="b-head">
            <div className="b-body">
              <img src={Blog_img2} alt="Example Image" className="b-imgg" />
              <div className="b-bodymain">
                <h3 className="b-titlemain">
                Considerations for an integrated population health databank in Africa: lessons from global best practices
                </h3>
               <div  className="readmorebtnarrow"> 
               <div><p className="b-subtitlemain"><Link target="blank" to={"https://wellcomeopenresearch.org/articles/6-214/v1"}>Read More </Link> </p></div>
               <div className="arrowsvg"><BsArrowRight /></div>
               </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="blogread mb-[40px] text-[#1BAE70] hover:text-[#333333] text-xl dm:text-3xl font-normal leading-[40px] decoration-2 decoration-[#1BAE70] hover:decoration-[#333333] transition ease-in-out duration-300   readbtn">
              Load more
            </button>
          </div>

          
        </div>
      </div>
    </>
  );
}

export default NewsList;
