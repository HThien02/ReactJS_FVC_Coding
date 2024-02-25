  import StaffPage from './pages/StaffPage';
  import './App.css';
  import FooterComponent from './component/Footer';
  import React from 'react';
  import { Routes, Route, Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import DepartmentPage from './pages/DepartmentPage';
import SalaryPage from './pages/SalaryPage';

  function App() {
    
    return (
      <div>
      <Navbar color="primary" dark expand="md">
        <NavbarBrand href="/">FVC Coding</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            {/* Multi Page Application
          <NavLink href="/staff">Nhân viên</NavLink> */}
          {/* Single Page Application */}
            <Link to="/staff">Nhân viên</Link>
          </NavItem>
          <NavItem>
            <Link to="/departments">Phòng ban</Link>
          </NavItem>
          <NavItem>
            <Link to="/salary">Bảng lương</Link>
          </NavItem>
        </Nav>
      </Navbar>

      <Routes>
        {/* Element Component */}
        <Route path='/staff' element={<StaffPage/>}></Route>
        <Route path='/departments' element={<DepartmentPage/>}></Route>
        <Route path='/salary' element={<SalaryPage/>}></Route>
      </Routes>

      <FooterComponent/>
      </div>
    );
  }

  export default App;
