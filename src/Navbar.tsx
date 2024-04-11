import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { scrollToTopFast } from "./reusableFunctions";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar(props: any) {
  // const [isScrolled, setIsScrolled] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [hamburgerMenuActive, setHamburgerMenuActive] = useState(false);

  // useEffect(() => {
  // const handleScroll = () => {
  //   const scrolled = window.scrollY > 0;
  //   setIsScrolled(scrolled);
  // };
  // window.addEventListener("scroll", handleScroll);
  // return () => {
  //   window.removeEventListener("scroll", handleScroll);
  // };
  // }, []);
  // const navbarStyle = {
  // height: isScrolled ? "90px" : "135px",
  //   height: "90px",
  //   transition: "all 0.15s",
  // };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const hamburgerMenuStyle = {
    // top: isScrolled ? "90px" : "135px",
    height: hamburgerMenuActive ? "auto" : "0",
  };

  return (
    <>
      <nav>
        <div className="nav-container">
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          {/* LEFT NAV SECTION */}
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          <div className="nav-left">
            {screenWidth > 700 ? (
              <>
                <button
                  onClick={() => {
                    props.setPage("CategoriesPage");
                    scrollToTopFast();
                  }}
                  className="nav-buttons"
                >
                  CATEGORIES
                </button>
                <button
                  onClick={() => {
                    props.setPage("ProductPage");
                    scrollToTopFast();
                  }}
                  className="nav-buttons"
                >
                  FAQs
                </button>
              </>
            ) : (
              <button
                onClick={() => setHamburgerMenuActive(!hamburgerMenuActive)}
                className="nav-buttons"
              >
                <GiHamburgerMenu />
              </button>
            )}
            {/* <button
              onClick={() => {
                props.setPage("LandingPage");
                scrollToTopFast();
              }}
              className="nav-button-left"
            >
              <div className="nav-logo">MIN</div>
            </button> */}
          </div>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          {/* CENTER NAV SECTION */}
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          <div className="center-nav">
            <button
              onClick={() => {
                props.setPage("LandingPage");
                scrollToTopFast();
              }}
              className="nav-button-left"
            >
              <div className="nav-logo">PEND</div>
            </button>
          </div>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          {/* RIGHT NAV SECTION */}
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          <div className="nav-right">
            {/* {screenWidth > 700 ? (
              <>
                <button
                  onClick={() => {
                    props.setPage("CategoriesPage");
                    scrollToTopFast();
                  }}
                  className="nav-buttons"
                >
                  CATEGORIES
                </button>
                <button
                  onClick={() => {
                    props.setPage("ProductPage");
                    scrollToTopFast();
                  }}
                  className="nav-buttons"
                >
                  PRODUCT PAGE
                </button>
              </>
            ) : (
              <button
                onClick={() => setHamburgerMenuActive(!hamburgerMenuActive)}
                className="nav-buttons"
              >
                <GiHamburgerMenu />
              </button>
            )} */}
            <div className={screenWidth > 700 ? "right-nav-filler" : ""}></div>
            <button
              className={`nav-buttons shopping-cart-icon`}
              onClick={() => {
                props.toggleModal();
              }}
            >
              {props.userShoppingCart.length ? (
                <div className="shopping-cart-icon-counter">
                  {props.userShoppingCart.length}
                </div>
              ) : (
                ""
              )}
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </nav>

      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      {/* HAMBURGER MENU SECTION */}
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

      <div
        className={hamburgerMenuActive ? "hamburger-menu" : ""}
        style={hamburgerMenuStyle}
      >
        <>
          <button
            onClick={() => {
              setHamburgerMenuActive(false);
              props.setPage("CategoriesPage");
              scrollToTopFast();
            }}
            className="nav-buttons"
          >
            CATEGORIES
          </button>
          <button
            onClick={() => {
              setHamburgerMenuActive(false);
              props.setPage("ProductPage");
              scrollToTopFast();
            }}
            className="nav-buttons"
          >
            FAQs
          </button>
        </>
      </div>
    </>
  );
}
