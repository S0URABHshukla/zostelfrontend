import style from "./footer.module.css";
import logo1 from "./logo1.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className={style.footer_main}>
        <div className={style.logo_div}>
          <div className={style.logo_div}>
            <h1 id="footerlogo">
              <img src={logo1} />Z O S T E L
            </h1>
          </div>
          <div id={style.footer_main_p}>
            <p>
              The website ends here, but your journey to the remotest
              destinations in India and Nepal begins with Zostel. Explore with
              our social hostels, homestays, and luxury stays on your next
              holiday.
            </p>
          </div>
        </div>

        <div className={style.listhead_div}>
          <h2>USEFUL LINKS</h2>
          <div className={style.list_div}>
            <div>
              <ul>
                <li>
                  <Link to={"#"}>Guest Policy</Link>
                </li>
                <li>
                  <Link to={"#"}>Privacy Policy</Link>
                </li>
                <li>
                  <Link to={"#"}>Careers</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <Link to={"#"}>Destinations</Link>
                </li>
                <li>
                  <Link to={"#"}>Franchise</Link>
                </li>
                <li>
                  <Link to={"#"}>Contact Us</Link>
                </li>
                <li>
                  <Link to={"#"}>Cookie Policy</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <Link to={"#"}>About Us</Link>
                </li>
                <li>
                  <Link to={"#"}>Support</Link>
                </li>
                <li>
                  <Link to={"#"}>Terms</Link>
                </li>
                <li>
                  <Link to={"#"}>Mobile app</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2>DOWNLOAD OUR MOBILE APP</h2>
          <div className={style.icon_div}>
            <div className={style.icon1}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFTBbr80oCivsgsqqM_dCGrx3IVf5FS-KLZMQhXUJiZpnyZ1mW8qodrB6ETXhPRQ2nfg&usqp=CAU"
                alt=""
              />
            </div>
            <div className={style.icon2}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM9Bk5gPxHBrA024lyZF76p5yMX2duVI6XjBfjZ6gKWu4RM3s2tDkyFZmyXsPTVzAOfy0&usqp=CAU"
                alt=""
              />
            </div>
          </div>
          
          <div className={style.social}>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp4Goc2_1Zg_lxXIhPVWLffKUyDaIXnePwlg&usqp=CAU"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?size=338&ext=jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuB-jdskR2EzvEiaYj4RVlV347I3FwbQl1aQ&usqp=CAU"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://i.pinimg.com/736x/6a/42/04/6a4204f04496559aa27101d25983d0f0.jpg"
                alt=""
              />
            </div>
          </div>
          <div className={style.right}>
            <p>Zostel © 2022. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
