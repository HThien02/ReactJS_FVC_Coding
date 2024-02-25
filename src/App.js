import './App.css';
import Staff from './component/Staff';
import StaffList from './component/StaffListComponent';
import { STAFFS } from './shared/staffs';
import { useState } from 'react';
function App() {
  let [clickedStaff, setClickedStaff] = useState();


  let staffs = STAFFS.map((staff) => {
    function StaffClicked(){
      setClickedStaff(staff);
    }
    return (
      <Staff key={staff.id} staff={staff} onClick={StaffClicked}></Staff>
    );
  });
  return (
    <div className="App">
      <StaffList staffs={staffs}></StaffList>
      <div>{clickedStaff?.id}</div>
      <div>{clickedStaff?.name}</div>
      <div>{clickedStaff?.doB}</div> 
      <div>{clickedStaff?.salaryScale}</div>
      <div>{clickedStaff?.startDate}</div>
      <div>{clickedStaff?.departmentId}</div>
      <div>{clickedStaff?.annualLeave}</div>
      <div>{clickedStaff?.overTime}</div>
      <div><img src={clickedStaff?.image}/></div>
    </div>
  );
}

export default App;
