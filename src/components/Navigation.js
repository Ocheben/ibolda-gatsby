import React, { useState } from "react";
import { Link } from "gatsby";
import { globalHistory } from "@reach/router";

import { Content, SText, SemiCircle, Circle } from "./styledComponents";
import logo from "../img/logo.svg";
import menuIcon from "../img/menu-icon.svg";
import closeIcon from "../img/close-icon.svg";

const Navbar = () => {
  const currentUrl = globalHistory.location.pathname;
  const [openNav, setOpenNav] = useState(false);
  const links = [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    { text: 'Portfolio', link: '/portfolio' },
    { text: 'Contact', link: '/contact' },
  ]
  return (
    <>
      <Content
        height="60px"
        bg="#ffffff"
        zIndex={2000}
        mobHeight="60px"
        shadow
        flex
        align="center"
        position="fixed"
        mobWidth="100%"
      >
        <div className="menu-btn" onClick={() => setOpenNav(prev => !prev)}>
          {openNav ? (
            <img src={closeIcon} alt="close icon" />
          ) : (
            <img src={menuIcon} alt="menu icon" />
          )}
        </div>
        <Content
          width="70%"
          height="100%"
          flex
          horizontal
          justify="space-around"
        >
          <Link to="/">
            <Content height="100%" borderBox flex align="center" mobHide>
              <SText size="20px" lineHeight="24px" weight="600" color="#394E5D">
                Home
              </SText>
              {currentUrl === "/" && <SemiCircle size="7px" />}
            </Content>
          </Link>
          <Link to="/about">
            <Content height="100%" borderBox flex align="center" mobHide>
              <SText size="20px" lineHeight="24px" weight="600" color="#394E5D">
                About
              </SText>
              {currentUrl === "/about" && <SemiCircle size="7px" />}
            </Content>
          </Link>
          <Content width="auto" height="100%" flex align="center">
            <img src={logo} alt="navbar logo" />
          </Content>
          <Link to="/portfolio">
            <Content height="100%" borderBox flex align="center" mobHide>
              <SText size="20px" lineHeight="24px" weight="600" color="#394E5D">
                Porfolio
              </SText>
              {currentUrl === "/portfolio" && <SemiCircle size="7px" />}
            </Content>
          </Link>
          <Link to="/contact">
            <Content height="100%" borderBox flex align="center" mobHide>
              <SText size="20px" lineHeight="24px" weight="600" color="#394E5D">
                Contact
              </SText>
              {currentUrl === "/contact" && <SemiCircle size="7px" />}
            </Content>
          </Link>
        </Content>
      </Content>
      {openNav && (
        <div className="mob-menu">
          <Content mobHeight="100%" flex fadeIn>
            <Content
              mobHeight="40%"
              flex
              mobWidth="70%"
              mobAlign="flex-start"
              mobJustify="space-around"
            >
            {
              links.map(item => (
                <Link to={item.link}>
                <Content
                  height="100%"
                  borderBox
                  flex
                  mobHorizontal
                  align="center"
                >
                  {currentUrl === item.link && <Circle size="7px" />}
                  <SText
                    size="20px"
                    lineHeight="24px"
                    weight="600"
                    color="#394E5D"
                    hmargin="16px"
                  >
                    {item.text}
                  </SText>
                </Content>
              </Link>
              ))
            }
            </Content>
          </Content>
        </div>
      )}
    </>
  );
};

export default Navbar;
