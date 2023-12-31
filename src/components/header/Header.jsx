import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
//import Button from "react-bootstrap/Button";
// Form from "react-bootstrap/Form";
//import Nav from "react-bootstrap/Nav";
//import Navbar from "react-bootstrap/Navbar";
// NavDropdown from "react-bootstrap/NavDropdown";

//search box component
const SearchBox = ({ text, onSearchHandler }) => {
  return (
    <>
      <label htmlFor="search">
        <input
          id="search"
          type="text"
          className="form-control"
          value={text}
          onChange={onSearchHandler}
          placeholder="  ^ↀᴥↀ^ what are you looking for?"
        />
      </label>
    </>
  );
};
//search input function
const SearchInput = () => {
  const [text, setText] = useState("");

  const onSearchHandler = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  return (
    <>
      <SearchBox text={text} onSearchHandler={onSearchHandler} />
    </>
  );
};
function Header() {
  return (
    <>
      <header>
        <Container fluid>
          <Container>
            <div className="container-lg d-flex align-items-center justify-content-between">
              {/*<!-- logo+search+search icon-->*/}
              <div className="logo-search d-flex justify-content-between align-items-center">
                {/*<!-- logo -->*/}
                <h1 className="logo d-flex align-items-center animate__animated animate__backInLeft animate__slow">
                  <Link to="/">
                    <img src="/images/Logo.png" alt="logo" /> Pet's snack
                  </Link>
                </h1>
                {/*<!-- //search+search icon -->*/}
                <div className="search d-flex align-items-center">
                  <form className="d-flex d-none d-md-block">
                    <SearchInput />
                  </form>
                  {/*<!-- search icon -->*/}
                  <a className="searchIcon material-symbols-outlined">
                    {" "}
                    <i
                      className="fas fa-search"
                      style={{ color: "#f2f2f2" }}
                    ></i>
                  </a>
                </div>
              </div>

              {/*<!-- navbar+漢堡選單按鈕+dropdown menu  -->*/}
              <div className="d-flex justify-content-between">
                {/*<!-- navbar-->*/}
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div
                    className="collapse navbar-collapse d-lg-block"
                    id="navbarNav"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          aria-current="page"
                          href="index.html"
                          to="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          aria-current="page"
                          href="index.html"
                          to="/about"
                        >
                          About
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="./products">
                          products
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/blog">
                          Blog{" "}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/subscriptionForm">
                          Contact{" "}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/login">
                          Login{" "}
                        </Link>
                      </li>
                      <button
                        className="btn btn-outline-dark position-relative"
                        type="submit"
                      >
                        cart
                        <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                          99
                        </span>
                      </button>
                    </ul>
                  </div>
                </nav>
                {/*<!-- 漢堡選單按鈕+dropdown menu -->*/}
                {/*<!-- 漢堡選單按鈕 -->*/}
                <div>
                  <a
                    className="navBtn d-lg-none dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="material-symbols-outlined material-icons md-40">
                      menu
                    </span>
                  </a>
                  {/*<!-- dropdown menu -->*/}
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/products">
                        Shop
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/src/pages/SubscriptionForm.jsx"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/*<!-- END navbar+漢堡選單按鈕+dropdown menu  -->*/}
            </div>
          </Container>
        </Container>
      </header>
    </>
  );
}

export default Header;
