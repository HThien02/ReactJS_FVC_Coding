import React from 'react';
import { STAFFS } from "../shared/staffs";
import { Routes, Route, Link } from 'react-router-dom';
import {StaffPage} from './StaffPage'

function StaffInfoPage(id) {
    const staffs = STAFFS.map((staff) => {
        return (
            <div className='row'>
                <div className='col-lg-3 col-md-4 col-12'>
                    <div className='image'>
                        <img src={staff.image}/>
                    </div>
                </div>
                <div className='col-lg-9 col-md-8 col-12'>
                    <h5>Họ và tên: {staff.name}</h5>
                    <p>Ngày vào công ty: {staff.startDate}</p>
                    <p>Phòng ban: {staff.departmentId}</p>
                    <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                    <p>Số ngày đã làm thêm: {staff.overTime}</p>
                </div>
            </div>
        );
    });

    return (
        <div className="container">

            <Routes>
            <Route path='/staff' element={<StaffPage/>}></Route>
            </Routes>
        </div>
    );
}

export default StaffInfoPage;