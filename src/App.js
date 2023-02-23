import React, {useState} from 'react';
import './App.css';
import bagi_wave from './images/bagi_wave.png';
import bagi_wave1 from './images/bagi_wave1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Navbar,NavLink,NavDropdown,Container, OffcanvasTitle } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Offcanvas from 'react-bootstrap/Offcanvas';
function App (){

  const [ showOffcanvas , setShowOffcanvas] = useState(false)

  const handleOffcanvas=()=> setShowOffcanvas(prevState => !prevState);

  return (
    <>
      <div expand="lg">
        {/* 1> first Navigation Bar */}
        <Navbar collapseOnSelect bg="lightgray" expand="lg">
          <Container>
          <Navbar.Brand className="brand" href="tel:1800 2666">
            {" "}
            <img
              src={"https://www.icicilombard.com/feo-cdn/q/e/XKwq2SDNI.webp"}
            />
            <span className="call-us"> 1800 2666</span>
            <small className="text"> (Available 24 x 7)</small>{" "}
          </Navbar.Brand>
          <NavLink className="whatsApp" href="http://wa.link/0m7ter">
            {" "}
            <img
              alt="ICICI Lombard Whatsapp"
              src={"https://www.icicilombard.com/feo-cdn/k/C/GQ0COHegY.webp"}
              data-ll-status="loading" height="28px" width="100px"
            />{" "}
          </NavLink>
          <Navbar.Collapse id="responsive-navbar-nav">
            <NavLink className="callUs" href="call-back">
              <img
                src={"https://www.icicilombard.com/feo-cdn/8/e/kauXqfuSk.webp"}
                alt="call-back"
              />
              <span style={{ fontSize: "14px", fontWeight: "500" }}>
                {" "}
                Call Back
              </span>
            </NavLink>
            <NavLink
              className="liveChat" style={{height:"25px", width:"90px"}}
              onclick="window.open('https://chat.icicilombard.com/Chat/ChatPanel.aspx','targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=670,height=680');"
            >
              <span className="dotGreen blink"></span>Live Chat
            </NavLink>
            <div class="right-menu">
              <Nav>
                <NavDropdown title="Support" renderMenuOnMount={true}>
                  <NavDropdown.Item href="#Support/Help Center">
                    Help Center
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#Support/Contact Us">
                    Contact Us
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#Support/Grievance Redressal">
                    Grievance Redressal
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#Support/Counter Offer Acceptance">
                    Counter Offer Acceptance
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Info Centre" renderMenuOnMount={true}>
                  <NavDropdown.Item href="#Info Centre">
                    Info Center
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#Info Centre/Expert Blogs">
                    Expert Blogs
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#Info Centre/FAQs">
                    FAQs
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#Info Centre/Tax Benefits">
                    Tax Benefits
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#Info Centre/Downloads">
                    Downloads
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#Info Centre/Downloads(ErstWhile Bharti AXA GI">
                    Downloads(ErstWhile Bharti AXA GI)
                  </NavDropdown.Item>
                  <NavDropdown.Divider style={{display:"table-row"}} />
                  <NavDropdown.Item href="#Info Centre/Testimonials">
                    Testimonials
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#Info Centre/Knowledge Center">
                    Knowledge Center
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#Info Centre/Insurance Updates">
                    Insurance Updates
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#Info Centre/IL Cafe Podcast">
                    IL Cafe Podcast
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#Info Centre/Blog">
                    Blog
                  </NavDropdown.Item>
                </NavDropdown>
                <NavLink href="Investor Relations">
                  <span class="underline-on-hover">Investor Relations</span>
                </NavLink>

                <div class="dropdown">
                  <DropdownButton
                    id="dropdown-button"
                    class="btn btn-default"
                    title="Become an advisor"
                    style={{fontSize:"13px"}}
                    renderMenuOnMount={true}
                  >
                    <Dropdown.Item href="#Know about Agent and PoSP">
                      Know about Agent and PoSP
                    </Dropdown.Item>
                    <Dropdown.Item href="#Become an Agent">
                      Become an Agent
                    </Dropdown.Item>
                    <Dropdown.Item href="#Become a PoSP">
                      Become a PoSP
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
                </Nav>
                </div>
          </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* 2> Second Navigation Bar */}

          <Navbar bg="myRead" expand="sm">
          <div className="content">
            <img src={bagi_wave1} alt="bagi_wave1" />
            <span class="head">
              {" "}
              Bharati AXA Genenral Insurance is now part of ICICI Lombard
              General Insurance.
            </span>
            <span>
              {" "}
              <a className="read-mr" href="#know.more">
                Know.more
              </a>
            </span>{" "}
            <img src={bagi_wave} alt="bagi_wave" />
          </div>
          <marquee className="slide">
            <span>
              Bharati AXA Genenral Insurance is now part of ICICI Lombard
              General Insurance.
            </span>
          </marquee>
          <a className="info" href="#know.more">
            Know.more
          </a> 
        </Navbar> 

        {/* 3> Second Navigation Bar */}

        <Navbar bg="orange" expand="lg">
          <Navbar.Brand href="/home" className="logo">
            <img
              style={{ verticalAlign: "middle" }}
              src={
                "https://www.icicilombard.com/docs/default-source/assets/home-revamp/images/il-logo.png"
              }
              alt="logo"
            />
          </Navbar.Brand>
          <div className="chat-ico">
            <img
              src={
                "https://www.icicilombard.com/docs/default-source/assets/home-revamp/images/chat_bot_mob.png"
              }
              style={{ height: "35px", width: "35px" }}
              alt="chat-ico"
            />
          </div>
          <div className="menu">
            <Nav className="flex-row">
              <NavDropdown title="Motor Insurance" renderMenuOnMount={true}>
                <NavDropdown.Item href="/motor insurance" activeStyle>
                  Motor Insurance
                </NavDropdown.Item>
                <NavDropdown.Item href="/car insurance" activeStyle>
                  Car Insurance
                </NavDropdown.Item>
                <NavDropdown.Item href="/bike insurance" activeStyle>
                  Bike Insurance
                </NavDropdown.Item>
                <NavDropdown.Item href="/motor floater" activeStyle>
                  Motor Floater
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Health Insurance" renderMenuOnMount={true}>
                <NavDropdown.Item href="/health insurance" activeStyle>
                  Health Insurance
                </NavDropdown.Item>
                <NavDropdown.Item href="/health AdvantEdge" activeStyle>
                  Health AdvantEdge
                </NavDropdown.Item>
                <NavDropdown.Item href="/health booster" activeStyle>
                  Health Booster
                </NavDropdown.Item>
                <NavDropdown.Item href="/personal protect" activeStyle>
                  Personal Protect
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/arogya sanjeevani policy. icici lombard"
                  activeStyle
                >
                  Arogya Sanjeevani Policy, ICICI Lombard
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/corona kavach policy, icici lombard"
                  activeStyle
                >
                  Corona Kavach Policy, ICICI Lombard
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/saral suraksha bima, icici lombard"
                  activeStyle
                >
                  Saral Suraksha Bima, ICICI Lombard
                </NavDropdown.Item>
                <NavDropdown.Item href="/golden shield" activeStyle>
                  Golden Shield
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Travel Insurance" renderMenuOnMount={true}>
                <NavDropdown.Item href="/travel insurance" activeStyle>
                  Travel Insurance
                </NavDropdown.Item>
                <NavDropdown.Item href="/single trip" activeStyle>
                  Single Trip
                </NavDropdown.Item>
                <NavDropdown.Item href="/gold multi trip" activeStyle>
                  Gold Multi trip
                </NavDropdown.Item>
                <NavDropdown.Item href="/student travel" activeStyle>
                  Student Travel
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Business Insurance" renderMenuOnMount={true}>
                <NavDropdown.Item href="/business insurance" activeStyle>
                  Business Insurance
                </NavDropdown.Item>
                <NavDropdown.Item href="/marine transit" activeStyle>
                  Marine Transit
                </NavDropdown.Item>
                <NavDropdown.Item href="/health booster" activeStyle>
                  Workmen's Compensation
                </NavDropdown.Item>
                <NavDropdown.Item href="/personal protect" activeStyle>
                  Group Health Insurance
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/arogya sanjeevani policy. icici lombard"
                  activeStyle
                >
                  Fire Insurance - Sookshma
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/corona kavach policy, icici lombard"
                  activeStyle
                >
                  Marine Open Insurance
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/saral suraksha bima, icici lombard"
                  activeStyle
                >
                  Fire Insurance - Griha for Housing Societies
                </NavDropdown.Item>
                <NavDropdown.Item href="/golden shield" activeStyle>
                  Professional Indemnity Policy for Medical Practitioners
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Other Insurance" renderMenuOnMount={true}>
                <NavDropdown.Item href="/crop insurance" activeStyle>
                  Crop Insurance
                </NavDropdown.Item>
                <NavDropdown.Item href="/nri insurance" activeStyle>
                  NRI Insurance
                </NavDropdown.Item>
                <NavDropdown.Item href="/cyber insurance" activeStyle>
                  Cyber Insurance
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/icici bharat griha raksha policy"
                  activeStyle
                >
                  ICICI Bharat Griha Raksha Policy
                </NavDropdown.Item>
                <NavDropdown.Item href="/complete home protect" activeStyle>
                  Complete Home Protect
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Renewals" renderMenuOnMount={true}>
                <NavDropdown.Item href="/all policy renewal" activeStyle>
                  All policy renewal{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/car policy" activeStyle>
                  Car Policy
                </NavDropdown.Item>
                <NavDropdown.Item href="/bike policy" activeStyle>
                  Bike Policy
                </NavDropdown.Item>
                <NavDropdown.Item href="/health policy" activeStyle>
                  Health Policy
                </NavDropdown.Item>
                <NavDropdown.Item href="/travel policy" activeStyle>
                  Travel Policy
                </NavDropdown.Item>
                <NavDropdown.Item href="/business insurance" activeStyle>
                  Business Insurance
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Claims" renderMenuOnMount={true}>
                <NavDropdown.Item href="/health claims" activeStyle>
                  Health Claims
                </NavDropdown.Item>
                <NavDropdown.Item href="/motor claims" activeStyle>
                  Motor Claims
                </NavDropdown.Item>
                <NavDropdown.Item href="/travel claims" activeStyle>
                  Travel Claims
                </NavDropdown.Item>
                <NavDropdown.Item href="/home claims" activeStyle>
                  Home Claims
                </NavDropdown.Item>
                <NavDropdown.Item href="/cyber insurance claims" activeStyle>
                  Cyber Insurance Claims
                </NavDropdown.Item>
                <NavDropdown.Item href="/ola claims" activeStyle>
                  Ola Claims
                </NavDropdown.Item>
                <NavDropdown.Item href="/redbus claims" activeStyle>
                  Redbus Claims
                </NavDropdown.Item>
                <NavDropdown.Item href="/corporate claims" activeStyle>
                  Corporate Claims
                </NavDropdown.Item>
                <NavDropdown.Item href="/mobile claims -m-kash" activeStyle>
                  Mobile Claims - M-Kash
                </NavDropdown.Item>
              </NavDropdown>
              <div className="login">
                <NavLink to="/login" activeStyle>
                  Login
                </NavLink>
              </div>
            </Nav>
          </div>
          <Navbar.Toggle
            aria-controls="navbar-offcanvas"
            onClick={handleOffcanvas}
            aria-expanded={false}
          />
          <div className="offcanvas">
            <Offcanvas
              show={showOffcanvas}
              onHide={handleOffcanvas}
              placement="end"
              scroll={true}
              backdrop={true}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <NavLink to="/login" activeStyle>
                    Login{" "}
                  </NavLink>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-column">
                  <NavLink className="callUs" href="call-back">
                    <img
                      src={
                        "https://www.icicilombard.com/feo-cdn/8/e/kauXqfuSk.webp"
                      }
                      alt="call-back"
                    />
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      {" "}
                      Call Back
                    </span>
                  </NavLink>

                  <NavDropdown title="Motor Insurance" renderMenuOnMount={true}>
                    <NavDropdown.Item href="/motor insurance" activeStyle>
                      Motor Insurance
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/car insurance" activeStyle>
                      Car Insurance
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/bike insurance" activeStyle>
                      Bike Insurance
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/motor floater" activeStyle>
                      Motor Floater
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="Health Insurance"
                    renderMenuOnMount={true}
                  >
                    <NavDropdown.Item href="/health insurance" activeStyle>
                      Health Insurance
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/health AdvantEdge" activeStyle>
                      Health AdvantEdge
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/health booster" activeStyle>
                      Health Booster
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/personal protect" activeStyle>
                      Personal Protect
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/arogya sanjeevani policy. icici lombard"
                      activeStyle
                    >
                      Arogya Sanjeevani Policy, ICICI Lombard
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/corona kavach policy, icici lombard"
                      activeStyle
                    >
                      Corona Kavach Policy, ICICI Lombard
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/saral suraksha bima, icici lombard"
                      activeStyle
                    >
                      Saral Suraksha Bima, ICICI Lombard
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/golden shield" activeStyle>
                      Golden Shield
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="Travel Insurance"
                    renderMenuOnMount={true}
                  >
                    <NavDropdown.Item href="/travel insurance" activeStyle>
                      Travel Insurance
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/single trip" activeStyle>
                      Single Trip
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/gold multi trip" activeStyle>
                      Gold Multi trip
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/student travel" activeStyle>
                      Student Travel
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="Business Insurance"
                    renderMenuOnMount={true}
                  >
                    <NavDropdown.Item href="/business insurance" activeStyle>
                      Business Insurance
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/marine transit" activeStyle>
                      Marine Transit
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/health booster" activeStyle>
                      Workmen's Compensation
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/personal protect" activeStyle>
                      Group Health Insurance
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/arogya sanjeevani policy. icici lombard"
                      activeStyle
                    >
                      Fire Insurance - Sookshma
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/corona kavach policy, icici lombard"
                      activeStyle
                    >
                      Marine Open Insurance
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/saral suraksha bima, icici lombard"
                      activeStyle
                    >
                      Fire Insurance - Griha for Housing Societies
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/golden shield" activeStyle>
                      Professional Indemnity Policy for Medical Practitioners
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Other Insurance" renderMenuOnMount={true}>
                    <NavDropdown.Item href="/crop insurance" activeStyle>
                      Crop Insurance
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/nri insurance" activeStyle>
                      NRI Insurance
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/cyber insurance" activeStyle>
                      Cyber Insurance
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/icici bharat griha raksha policy"
                      activeStyle
                    >
                      ICICI Bharat Griha Raksha Policy
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/complete home protect" activeStyle>
                      Complete Home Protect
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Renewals" renderMenuOnMount={true}>
                    <NavDropdown.Item href="/all policy renewal" activeStyle>
                      All policy renewal{" "}
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/car policy" activeStyle>
                      Car Policy
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/bike policy" activeStyle>
                      Bike Policy
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/health policy" activeStyle>
                      Health Policy
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/travel policy" activeStyle>
                      Travel Policy
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/business insurance" activeStyle>
                      Business Insurance
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Claims" renderMenuOnMount={true}>
                    <NavDropdown.Item href="/health claims" activeStyle>
                      Health Claims
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/motor claims" activeStyle>
                      Motor Claims
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/travel claims" activeStyle>
                      Travel Claims
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/home claims" activeStyle>
                      Home Claims
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/cyber insurance claims"
                      activeStyle
                    >
                      Cyber Insurance Claims
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/ola claims" activeStyle>
                      Ola Claims
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/redbus claims" activeStyle>
                      Redbus Claims
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/corporate claims" activeStyle>
                      Corporate Claims
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/mobile claims -m-kash" activeStyle>
                      Mobile Claims - M-Kash
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </Navbar>
      </div>
    </>
  );
}
export default App;


