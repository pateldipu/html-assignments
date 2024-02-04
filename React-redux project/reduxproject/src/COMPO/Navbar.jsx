import Container from 'react-bootstrap/Container';
// import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Stack from 'react-bootstrap/Stack';
import { FaSearch } from "react-icons/fa";

import React, { useState } from 'react';



const YourNavbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsNavOpen(false);
  };

  const handleNavOpenClick = () => {
    setIsNavOpen(true);
    setIsSearchOpen(false);
  };

  const handleNavCloseClick = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <Container>
        <Stack direction="horizontal" gap={3}>
          <div class="d-flex mb-3">
            <div class="me-auto p-2">Flex item</div>
            <div class="p-2">Flex item</div>
            <div class="p-2">Flex item</div>
          </div>

        </Stack>
      </Container>


      <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>




    </>




  );
};

export default YourNavbar;


