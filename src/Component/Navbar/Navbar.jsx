import React from 'react'
import ns from './Navbar.module.css'
import logo from './zostellogo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useWindowDimensions } from "./windowsize/useWindowDimensions"


export default function Navbar() {
  const [menuhover, setMenuhover] = useState({
    zostel: false,
    homes: false,
    plus: false,
    join: false,
  });
  const [nav, setNav] = useState(true);
  const { height, width } = useWindowDimensions();


  return (

    <>
      {width > 750 ? <nav className={ns.navbar}>
        <div>
          <Link to="/"><img className={ns.logo} src={logo} alt="logo" style={{ width: "80%" }} /></Link>
        </div>
        <div className={ns.menu}>
          <Link to={"/destinations"} className={ns.menuText}>Destinations</Link>
          <p className={ns.menuText}>Zostel <span onClick={() => setMenuhover(
            {
              zostel: !menuhover.zostel,
              homes: false,
              plus: false,
              join: false
            }
          )}> {menuhover.zostel ? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-solid fa-chevron-down"></i>}</span> </p>
          <p className={ns.menuText}>Zostel Homes <span onClick={() => setMenuhover(
            {
              zostel: false,
              homes: !menuhover.homes,
              plus: false,
              join: false
            })}>{menuhover.homes ? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-solid fa-chevron-down"></i>}</span> </p>
          <p className={ns.menuText}>Zostel Plus  <span onClick={() => setMenuhover({
            zostel: false,
            homes: false,
            plus: !menuhover.plus,
            join: false
          })}>{menuhover.plus ? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-solid fa-chevron-down"></i>}</span></p>
          <p className={ns.menuText}>Franchise</p>
          <p className={ns.menuText}>Join us  <span onClick={() => setMenuhover({
            zostel: false,
            homes: false,
            plus: false,
            join: !menuhover.join
          })}>{menuhover.join ? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-solid fa-chevron-down"></i>}</span></p>
          <p className={ns.menuText}>Blog</p>
          <button className={ns.downloadbtn}>Download App</button>
        </div>
      </nav> :

        <nav className={ns.nav2}>
          <div>
            {nav ? <Link to="/"><img className={ns.logo2} src={logo} alt="logo" /></Link>
              : <div>
                <div >
                  <div style={{ display: "flex", alignItems: "center", marginTop: "5px", }} >
                    <img style={{ width: "40px", height: "40px" }} src="data:image/png;base64,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" alt="logo" />
                    &nbsp;&nbsp;&nbsp; <h3 style={{ color: "black" }}>Z O S T E L</h3>
                  </div>
                  <div>
                    <div style={{ color: "white", fontSize: "16px", fontWeight: "600", lineHeight: "24px", width: "95vw", background: "#0A181D" }}>Destinations</div>
                    <div style={{ display: "flex", justifyContent: "space-between", background: "#0A181D", color: "white" }}><div style={{ color: "white", fontSize: "16px", fontWeight: "600", lineHeight: "24px" }}>Zostel</div><div><i class="fa-solid fa-chevron-up"></i></div></div>
                    <div style={{ display: "flex", justifyContent: "space-between", background: "#0A181D", color: "white" }}><div style={{ color: "white", fontSize: "16px", fontWeight: "600", lineHeight: "24px" }}>Zostel Homes</div><div><i class="fa-solid fa-chevron-up"></i></div></div>
                    <div style={{ display: "flex", justifyContent: "space-between", background: "#0A181D", color: "white" }}><div style={{ color: "white", fontSize: "16px", fontWeight: "600", lineHeight: "24px" }}>Zostel Plus</div><div><i class="fa-solid fa-chevron-up"></i></div></div>
                    <div><div style={{ background: "#0A181D", color: "white", fontSize: "16px", fontWeight: "600", lineHeight: "24px" }}>Franchise</div></div>
                    <div style={{ display: "flex", justifyContent: "space-between", background: "#0A181D", color: "white" }}><div style={{ color: "white", fontSize: "16px", fontWeight: "600", lineHeight: "24px" }}>Join us</div><div><i class="fa-solid fa-chevron-up"></i></div></div>
                    <div><div style={{ background: "#0A181D", color: "white", fontSize: "16px", fontWeight: "600", lineHeight: "24px" }}>Blog</div></div>
                    {/* <div style={{width:"100vw",background:"#0A181D",height:"100vh"}}></div> */}

                  </div>

                </div></div>}


          </div>
          <div className={ns.menuicon} onClick={() => setNav(!nav)}>
            {nav ? <i class="fa-solid fa-bars"></i> : <div style={{ color: "black", fontSize: "25px", marginTop: "-5px" }}><i class="fa-solid fa-xmark"></i></div>}
          </div>
        </nav>
      }




      {/* first dropdown */}
      {menuhover.zostel ?
        <div className={ns.zostelmenuhover} >
          <div>
            <p>Zostel Alleppey</p>
            <p>Zostel Aurangabad</p>
            <p>Zostel Banglore</p>
            <p>Zostel Banikhet(Dalhousie)</p>
            <p>Zostel Barot(Ragundha)</p>
            <p>Zostel Chitkul</p>
            <p>Zostel Coorg</p>
            <p>Zostel Dalhousie</p>
            <p>Zostel delhi</p>
            <p>Zostel Dharamkot</p>
            <p>Zostel Dobhi</p>
            <p>Zostel Gangtok</p>
            <p>Zostel Gokarna</p>
          </div>
          <div>
            <p>Zostel Alleppey</p>
            <p>Zostel Aurangabad</p>
            <p>Zostel Banglore</p>
            <p>Zostel Banikhet(Dalhousie)</p>
            <p>Zostel Barot(Ragundha)</p>
            <p>Zostel Chitkul</p>
            <p>Zostel Coorg</p>
            <p>Zostel Dalhousie</p>
            <p>Zostel delhi</p>
            <p>Zostel Dharamkot</p>
            <p>Zostel Dobhi</p>
            <p>Zostel Gangtok</p>
            <p>Zostel Gokarna</p>
          </div>
          <div>
            <p>Zostel Alleppey</p>
            <p>Zostel Aurangabad</p>
            <p>Zostel Banglore</p>
            <p>Zostel Banikhet(Dalhousie)</p>
            <p>Zostel Barot(Ragundha)</p>
            <p>Zostel Chitkul</p>
            <p>Zostel Coorg</p>
            <p>Zostel Dalhousie</p>
            <p>Zostel delhi</p>
            <p>Zostel Dharamkot</p>
            <p>Zostel Dobhi</p>
            <p>Zostel Gangtok</p>
            <p>Zostel Gokarna</p>
          </div>
          <div>
            <p>Zostel Dharamkot</p>
            <p>Zostel Dobhi</p>
            <p>Zostel Gangtok</p>
            <p>Zostel Gokarna</p>
          </div>
        </div> : null}

      {/* second dropdown */}
      {menuhover.homes ?
        <div className={ns.homesmenuhover} >
          <div>
            <p>Zostel Alleppey</p>
            <p>Zostel Aurangabad</p>
            <p>Zostel Banglore</p>
            <p>Zostel Banikhet(Dalhousie)</p>
            <p>Zostel Barot(Ragundha)</p>
            <p>Zostel Chitkul</p>
            <p>Zostel Coorg</p>
            <p>Zostel Dalhousie</p>
            <p>Zostel delhi</p>
            <p>Zostel Dharamkot</p>
            <p>Zostel Dobhi</p>
            <p>Zostel Gangtok</p>
            <p>Zostel Gokarna</p>
          </div>
          <div>
            <p>Zostel Alleppey</p>
            <p>Zostel Aurangabad</p>
            <p>Zostel Banglore</p>
            <p>Zostel Banikhet(Dalhousie)</p>
            <p>Zostel Barot(Ragundha)</p>
            <p>Zostel Chitkul</p>
            <p>Zostel Coorg</p>
            <p>Zostel Dalhousie</p>
          </div>
        </div> : null}

      {/* third dropdown */}
      {menuhover.plus ?
        <div className={ns.plusmenuhover}>
          <div>
            <p>Zostel Coorg</p>
            <p>Zostel Dalhousie</p>
            <p>Zostel delhi</p>
            <p>Zostel Dharamkot</p>
            <p>Zostel Dobhi</p>
            <p>Zostel Gangtok</p>
            <p>Zostel Gokarna</p>
          </div>
        </div> : null}

      {/* four dropdown */}
      {menuhover.join ?
        <div className={ns.joinmenuhover}>
          <div>
            <p>Careers</p>
            <p>Zostel Intership Program</p>
            <p>Artist Collaboration program</p>
            <p>Travel Agency Partner Program</p>
            <p>Tour Operator Partner Program</p>
            <p>Travel,Shoot & Learn With Zostel</p>
          </div>
        </div> : null}

      {/* responsive navbar after toggle   */}




    </>
  )
}
