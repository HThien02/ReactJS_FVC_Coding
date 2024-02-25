import React from 'react';
import { STAFFS } from "../shared/staffs";

function randomSalary(){

  const minSalary = 30000;
  const maxSalary = 40000;
  var randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1) + minSalary);

  return randomSalary;
}
function SalaryPage() {
    const staffs = STAFFS.map((staff) => {
      var salary = randomSalary();
        return (
            <div className='staffList col-lg-3 col-md-6 col-12' key={staff.id}>
                <div className='cardSalary'>
                  
                    <h2>{staff.name}</h2>
                    <p>Mã nhân viên: {staff.id}</p>
                    <p>Hệ số lương: {staff.salaryScale}</p>
                    <p>Số giờ làm thêm: {staff.overTime}</p>
                    <p className='salary'>{salary}</p>
                </div>
            </div>
        );
    });

    return (
        <div className="container">
            <div className='row'>
            {staffs}
            </div>
        </div>
    );
}

export default SalaryPage;