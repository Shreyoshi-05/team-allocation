import React, { useState } from 'react'

const Other = ({employe , selectedteam , setSelectedteam}) => {

  const[groupEmployee , setGroupdata] = useState(groupTeamMembers())

  function groupTeamMembers(){
    let teams = [];

    let teamAMem = employe.filter((tm)=>tm.team=="Team Alpha");
    let Alpha = {team:"Team Alpha" , members: teamAMem , collapsed :selectedteam=="Team Alpha" ? false : true }
    teams.push(Alpha);

    let teamBMem = employe.filter((tm)=>tm.team=="Team Bravo");
    let Bravo = {team:"Team Bravo" , members: teamBMem , collapsed :selectedteam=="Team Bravo" ? false : true }
    teams.push(Bravo);

    let teamCMem = employe.filter((tm)=>tm.team=="Team Charlie");
    let Charlie = {team:"Team Charlie" , members: teamCMem , collapsed :selectedteam=="Team Charlie" ? false : true }
    teams.push(Charlie);

    let teamMem = employe.filter((tm)=>tm.team=="Team Delta");
    let Delta = {team:"Team Delta" , members: teamMem , collapsed :selectedteam=="Team Delta" ? false : true }
    teams.push(Delta);

    return teams;

  }

  function handelTeamClick(e){
    let newMemeTeam = groupEmployee.map((gm)=> gm.team == e.tcurrentTarget.id ? {...gm ,collapsed :!gm.collapsed} : gm )
    
    setGroupdata(newMemeTeam);
    setSelectedteam(e.target.value);
  }

  return (
    <div className='team_mem_page'>
      {
        groupEmployee.map((gemp)=>{
          return(
            <div className="groupmem_container">
              <div className="groupname"  onClick={handelTeamClick}>
              <h2>Team Name : {gemp.team}</h2>
              </div>

              <div className={gemp.collapsed ? "collapse" :" "}>
                <br />
                <hr />
                {
                  gemp.members.map((mem)=>{
                    return(
                      <div className="mem_conatiner">
                        <div className="name_div">
                          <h4>Team Member Name : {mem.fullname}</h4>
                        </div>

                        <div className="designation_conatainer">
                          <p>Designation : {mem.designation}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>

              {/* <div className={display==true ? "collapse" :"show"} >
                {
                  gemp.members.map((mem)=>{
                    return(
                      <div className="team_mem_details">
                        <h4> Team mem Name : {mem.fullname}</h4>
                        <p> Designation : {mem . designation}</p>
                      </div>
                    )
                  })
                }
              </div> */}
            </div>
          )
        })
      }
    </div>
  )
}

export default Other
