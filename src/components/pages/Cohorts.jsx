import { useEffect } from "react";
import CohortsTable from"../common/Cohorts/CohortsTable";
function Cohorts () {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }, [])

  return (
    <div className="cohorts">
      <h1 className="text-[#333333] text-6xl text-center my-20 font-bold leading-[60px]">African Cohorts</h1>
      {/* <h3 className="text-[#333333] text-4xl text-center my-20 font-bold leading-[60px]"><CohortsTable /></h3> */}
      <CohortsTable />
    </div>
  )
}

export default Cohorts;