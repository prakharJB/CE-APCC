import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function CohortDetails() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const user = location.state;
  //   console.log(user)
  return (
    <div className="cohorts">
      <h1 className="text-[#333333] text-6xl text-center my-20 font-bold leading-[60px]">
      {user?.name_of_cohort}
      </h1>

      <div className="cohorts-container">
        <div className="cohortas-sub-container">
        <table className="cohorts-table">
        <thead className="cohorts-thead">
          <tr className="cohorts-tr">
            <th className="cohorts-th">Name of Cohort</th>
            <td className="cohorts-td">{user?.name_of_cohort}</td>
          </tr>
          <tr className="cohorts-tr">
            <th className="cohorts-th">REGION</th>
            <td className="cohorts-td">{user?.region}</td>
          </tr>
          <tr className="cohorts-tr">
            <th className="cohorts-th">LOCATION</th>
            <td className="cohorts-td">{user?.location}</td>
          </tr>
          <tr className="cohorts-tr">
            <th className="cohorts-th">ECONOMIC</th>
            <td className="cohorts-td">{user?.economic}</td>
          </tr>
          <tr className="cohorts-tr">
            <th className="cohorts-th">TYPE</th>
            <td className="cohorts-td">{user?.type}</td>
          </tr>
          <tr className="cohorts-tr">
            <th className="cohorts-th">DISCRIPTION</th>
            <td className="cohorts-td">{user?.description}</td>
          </tr>
          <tr className="cohorts-tr">
            <th className="cohorts-th">area</th>
            <td className="cohorts-td">{user?.area}</td>
          </tr>
          <tr className="cohorts-tr">
            <th className="cohorts-th">N=</th>
            <td className="cohorts-td">{user?.N}</td>
          </tr>
          <tr className="cohorts-tr">
            <th className="cohorts-th">HDSS (Y) or nested within HDSS (name)</th>
            <td className="cohorts-td">{user?.HDSS}</td>
          </tr>
          <tr className="cohorts-tr">
            <th className="cohorts-th">Biosamples</th>
            <td className="cohorts-td">{user?.biosamoles}</td>
          </tr>
          <tr className="cohorts-tr">
            <th className="cohorts-th">Setting</th>
            <td className="cohorts-td">{user?.setting}</td>
          </tr>
          <tr className="cohorts-tr">
            <th className="cohorts-th">Research as primary focus</th>
            <td className="cohorts-td">{user?.research}</td>
          </tr>
          <tr className="cohorts-tr">
            <th className="cohorts-th">Networks (list)</th>
            <td className="cohorts-td">{user?.networks}</td>
          </tr>
          <tr className="cohorts-tr">
            <th className="cohorts-th">Follow up</th>
            <td className="cohorts-td">{user?.follow_up}</td>
          </tr>
          <tr className="cohorts-tr">
            <th className="cohorts-th">Institution</th>
            <td className="cohorts-td">{user?.institution}</td>
          </tr>
          <tr className="cohorts-tr">
            <th className="cohorts-th">Website</th>
            <td className="cohorts-td">{user?.website}</td>
          </tr>
          <tr className="cohorts-tr">
            <th className="cohorts-th">Contact</th>
            <td className="cohorts-td">{user?.contact}</td>
          </tr>
          <tr className="cohorts-tr">
            <th className="cohorts-th">Added by</th>
            <td className="cohorts-td">{user?.added_by}</td>
          </tr>
          <tr className="cohorts-tr">
            <th className="cohorts-th">Notes</th>
            <td className="cohorts-td">{user?.notes}</td>
          </tr>
        </thead>
      </table>
        </div>
      </div>
     
    </div>
  );
}

export default CohortDetails;
