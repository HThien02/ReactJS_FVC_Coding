  import StaffList from './component/StaffListComponent';
  import { STAFFS } from './shared/staffs';
  import './App.css';
  import NavbarComponent from './component/Navbar';

  function App() {
    const staffs = STAFFS.map((staff) => {
      return <div className='staffList col-lg-2 col-md-4 col-6'>
        <div className='card' key={staff.id}><img src={staff.image}/>
        <p>{staff.name}</p></div>
      </div>

    })
    return (
      <div>
        <NavbarComponent/>
        <h2>Nhân viên</h2>
        <hr/>
        
      <div className="container">
          <StaffList staffs={staffs}></StaffList>
      </div>
      </div>
    );
  }

  export default App;
