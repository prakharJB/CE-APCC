import React, { useState } from "react";
import { data } from "./CohortsConfig";
import { useNavigate } from "react-router-dom";

function UserList() {
  const [filteredData, setFilteredData] = useState([]);
  const [toggle, settoggle] = useState("true");
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Selected option:", selectedOption);

    if(selectedOption === "multiplecountry"){
      const filtered = data.users.filter(
        (item) => item.location.length >= 2 
      );
      setFilteredData(filtered);
      settoggle(false);
    } else{

      if(selectedOption){
  
        const filtered = data.users.filter(
          (item) => item.location === selectedOption
        );
        setFilteredData(filtered);
        settoggle(false);
      }
    }

  };

  const changetoggle = () => {
    settoggle(true);
  };
  const datashare = (data) => {
    navigate("/cohort-details", { state: data });
  };

  return (
    <div className="cohorts-container">
      <div className="cohortas-sub-container">
        <div className="cohorts-form">

        <div className="cohorts-searchbar"><form onSubmit={handleSubmit}  className="formarea
        ">
          {/* <label htmlFor="dropdown">Select</label> */}
          <select
          className="cohorts-select"
            id="dropdown"
            value={selectedOption}
            onChange={handleOptionChange}
       
          >
            <option className="" >Please select your location</option>
            <option value="multiplecountry">Multi-Country</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Kenya">Kenya</option>
            <option value="Madagascar">Madagascar</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Uganda">Uganda</option>
            <option value="RSA, BF, Ghana and Kenya">
              RSA, BF, Ghana and Kenya
            </option>
            <option value="Egypt">Egypt</option>
            <option value="Malawi">Malawi</option>
            <option value="South Africa">South Africa</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Ghana">Ghana</option>
            <option value="Mali">Mali</option>
          </select>
          <button className="cohorts-button" type="submit">Search </button>
        </form>
        </div>
        <div className="cohorts-resetbutton">
        <button className="cohorts-button " type onClick={changetoggle}>Reset</button>
        </div>
        </div>

        {toggle === false ? (

          <table className="cohort-detail-table">
            <thead className="cohorts-thead">
              <tr className="cohorts-tr">
                <th className="cohorts-th">Name of Cohort</th>
                <th className="cohorts-th">LOCATION</th>
                <th className="cohorts-th">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr className="cohorts-tr">
                  <td className="cohorts-td">{item?.name_of_cohort}</td>
                  <td className="cohorts-td">{item?.location}</td>
                  <td className="cohorts-td"><button
                    className=" cohortssearchs"
                    onClick={() => {
                      datashare(item);
                    }}
                  >
                    Details
                  </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h2 className="no_cohort">Select Location for cohorts list</h2>
        )}
      </div>
    </div>
  );
}

export default UserList;
