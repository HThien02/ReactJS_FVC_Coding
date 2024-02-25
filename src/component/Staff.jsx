
function Staff({staff, onClick}) {
    return (
      <div className="staff-info" onClick={onClick}>{staff.name}
      </div>
    );
  }
  export default Staff;