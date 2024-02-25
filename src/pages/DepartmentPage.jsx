import { STAFFS } from "../shared/staffs";
function DepartmentPage() {
  var departmentCount = {};
  var departmentName = {
    Dept01: 'Sale',
    Dept02: 'HR',
    Dept04: 'Marketing',
    Dept03: 'IT',
    Dept05: 'Finance',
  };
  STAFFS.forEach((staff) => {
    if (departmentCount[staff.departmentId]){
      departmentCount[staff.departmentId]++;
    } else {
      departmentCount[staff.departmentId] = 1;
    }
  });
  var departments = Object.keys(departmentCount).map((departmentId) => (
    <div className="staffDepartment col-lg-4 col-md-6 col-12" key={departmentId}>
      <div className="cardDepartment">
        <h1>{departmentName[departmentId]}</h1>
        <p>Số lượng nhân viên: {departmentCount[departmentId]}</p>
      </div>
    </div>
  ));

    return (
      <div className="container">
        <div className="row">
          {departments}
        </div>
      </div>
    );
  }
  export default DepartmentPage;