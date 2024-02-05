import "./App.css";
import StaffList from "./component/StaffListComponent";
import { STAFFS } from "./shared/staffs";
import { useState } from "react";
function App() {
  //------------------------------ Khai báo State và hàm để nhận staff -------------
  let [selectedStaff, setSelectedStaff] = useState(null); //selectedStaff là state, sếtlectedStaff là hàm
  //-----------------------------------

  //-----------------------------Chuyển đổi dữ liệu DOB sang định dạng dd/MM/yyyy -------------------
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  //--------------------------------------

  //------------------------------ Sự kiện Click ------------------------------
  let Click = (staff) => {
    let formatStaff = {
      ...staff, //Các thông tin không cần format, cú pháp REST
      doB : formatDate(staff.doB),
      startDate : formatDate(staff.startDate),
    };
    
    setSelectedStaff(formatStaff);
  };
  //--------------------------------------------------------

  //------------------------------------- Hiển thị từng staff ---------------------------
  const staffs = STAFFS.map((staff) => {
    return <div key={staff.id} onClick={() => Click(staff)}>{staff.name}</div>;
  });

  //-------------------------------------
  return (
    <div>
      <div className="">
        <StaffList staffs={staffs}></StaffList>
      </div>
      <div className="staff_info">
  {selectedStaff && (
    <>
      <p>Id: {selectedStaff.id}</p>
      <p>Name: {selectedStaff.name}</p>
      <p>DOB: {selectedStaff.doB}</p>
      <p>Salary Scale: {selectedStaff.salaryScale}</p>
      <p>Start Date: {selectedStaff.startDate}</p>
      <p>DepartmentID: {selectedStaff.departmentId}</p>
      <p>Annual Leave: {selectedStaff.annualLeave}</p>
      <p>Over Time: {selectedStaff.overTime}</p>
      <img src={selectedStaff.image} alt="img"/>
    </>
  )}
</div>
    </div>
  );
}

export default App;
