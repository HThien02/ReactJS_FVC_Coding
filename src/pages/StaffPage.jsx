import React from 'react';
import { STAFFS } from "../shared/staffs";
import { Routes, Route, Link } from 'react-router-dom';
function StaffPage() {
    const staffs = STAFFS.map((staff) => {
        return (
            <div className='staffList col-lg-2 col-md-4 col-6' key={staff.id}>
                <div className='card'>
                    <img src={staff.image} alt={staff.name} />
                    <p>{staff.name}</p>
                </div>
            </div>
        );
    });

    return (
        <div className="container">
            <h2 className='staffClick'><Link to="/staff">Nhân viên</Link></h2>
            <hr></hr>
            <div className='row'>
            {staffs}
            </div>

            <Routes>
            <Route path='/staff' element={<StaffPage/>}></Route>
      </Routes>
        </div>
    );
}

export default StaffPage;