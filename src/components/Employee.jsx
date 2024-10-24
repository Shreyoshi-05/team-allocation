import Test from "../test/Test";
import Fml from "../images/f.jpg";
import Ml from "../images/m.jpg";

const Employee = ({
  employe,
  handelTeamselection,
  selectedteam,
  handelEmpleeCardClick,
}) => {
  console.log(employe);

  return (
    <div>
      <div id="teams">
        <div className="option-container">
          <select
            className="optionss"
            id=""
            value={selectedteam}
            onChange={handelTeamselection}
          >
            <option value="Team Alpha">Team Alpha</option>
            <option value="Team Bravo">Team Bravo</option>
            <option value="Team Charlie">Team Charlie</option>
            <option value="Team Delta">Team Delta</option>
          </select>
        </div>
      </div>
      {/* "individual-employee" */}

      <div id="employee-comtainer">
        {employe.map((emp) => {
          return (
            <div className="box">
              <div
                className={
                  emp.team === selectedteam ? "outline" : "individual-employee"
                }
                onClick={handelEmpleeCardClick}
              >
                {emp.gender == "Male" ? (
                  <img src={Ml} alt="" />
                ) : (
                  <img src={Fml} alt="" />
                )}

                <h5>Full name : {emp.fullname}</h5>
                <p>
                  <b>Designation : </b>
                  {emp.designation}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Employee;
