
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Button, Offcanvas } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import { FaBars } from "react-icons/fa";
import Box from '@mui/material/Box';

import './Home.css';

function Home() {
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const activeStyle = {
    backgroundColor:'rgb(109, 74, 86)',
    borderColor: 'rgb(109, 74, 86)',
    
  };

  return (
    <>
      <div className="home-container">
        <div className="row w-100">
          <div className="d-lg-none">
            <Button
              variant="primary"
              onClick={handleShow}
              className="m-2"
              style={{ background: "white" }}
            >
              <FaBars style={{ color: '#6D4A56' }} className="fs-3" />
            </Button>
          </div>

          <div className="col-lg-2 d-none d-lg-block">
            <div style={{ position: "sticky", top: 0, zIndex: 1 }}>
              <Box component="nav" sx={{ bgcolor: 'background.paper' }}>
                <div className="list-group list-group-flush mx-3 mt-4">
                  <NavLink
                    to="deshbord"
                    className="list-group-item list-group-item-action py-2 ripple nav-link"
                    style={({ isActive }) => isActive ? activeStyle : undefined}
                  >
                    <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                    <span>Main dashboard</span>
                  </NavLink>
                  <NavLink
                    to="user"
                    className="list-group-item list-group-item-action py-2 ripple"
                    style={({ isActive }) => isActive ? activeStyle : undefined}
                  >
                    <i className="fas fa-chart-area fa-fw me-3"></i>
                    <span>User Details</span>
                  </NavLink>
                  <NavLink
                    to="login"
                    className="list-group-item list-group-item-action py-2 ripple"
                    style={({ isActive }) => isActive ? activeStyle : undefined}
                  >
                    <i className="fas fa-lock fa-fw me-3"></i>
                    <span>Admin Login</span>
                  </NavLink>
                  <NavLink
                    to="cars"
                    className="list-group-item list-group-item-action py-2 ripple"
                    style={({ isActive }) => isActive ? activeStyle : undefined}
                    onClick={handleClose}
                  >
                    <i className="fas fa-lock fa-fw me-3"></i>
                    <span>Add Cars</span>
                  </NavLink>
                  <NavLink
                    to="blogs"
                    className="list-group-item list-group-item-action py-2 ripple"
                    style={({ isActive }) => isActive ? activeStyle : undefined}
                    onClick={handleClose}
                  >
                    <i className="fas fa-lock fa-fw me-3"></i>
                    <span>Add Blogs</span>
                  </NavLink>
                </div>
              </Box>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="container">
              <NavBar />
              <Outlet />
            </div>
          </div>
        </div>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="list-group list-group-flush">
            <NavLink
              to="deshbord"
              className="list-group-item list-group-item-action py-2 ripple"
              style={({ isActive }) => isActive ? activeStyle : undefined}
              onClick={handleClose}
            >
              <i className="fas fa-tachometer-alt fa-fw me-3"></i>
              <span>Main dashboard</span>
            </NavLink>
            <NavLink
              to="user"
              className="list-group-item list-group-item-action py-2 ripple"
              style={({ isActive }) => isActive ? activeStyle : undefined}
              onClick={handleClose}
            >
              <i className="fas fa-chart-area fa-fw me-3"></i>
              <span>User Details</span>
            </NavLink>
            <NavLink
              to="login"
              className="list-group-item list-group-item-action py-2 ripple"
              style={({ isActive }) => isActive ? activeStyle : undefined}
              onClick={handleClose}
            >
              <i className="fas fa-lock fa-fw me-3"></i>
              <span>Admin Login</span>
            </NavLink>
            <NavLink
              to="cars"
              className="list-group-item list-group-item-action py-2 ripple"
              style={({ isActive }) => isActive ? activeStyle : undefined}
              onClick={handleClose}
            >
              <i className="fas fa-lock fa-fw me-3"></i>
              <span>Add Cars</span>
            </NavLink>
            <NavLink
              to="blogs"
              className="list-group-item list-group-item-action py-2 ripple"
              style={({ isActive }) => isActive ? activeStyle : undefined}
              onClick={handleClose}
            >
              <i className="fas fa-lock fa-fw me-3"></i>
              <span>Add Blogs</span>
            </NavLink>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Home;

