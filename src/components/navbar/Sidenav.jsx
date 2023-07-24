import Menus from "../../assets/json/Menus"
import "./sidenav.css"

import home from "../../assets/images/icons/home.png"
import report from "../../assets/images/icons/Vector1.png"
import plans from "../../assets/images/icons/usdcoin.png"
import redemption from "../../assets/images/icons/moneyrecive.png"
import profile from "../../assets/images/icons/Vector.png"
import logo from "../../assets/images/icons/logo.png"

var icons = {
    home, report, plans, redemption, profile
}

function SideNav(params) {
    return (
        <div className="sidebar">
            <div className="sid-header" >
                <img style={{ width: "44%" }} src={logo}></img>
            </div>
            <div className="sid-body"  >
                {
                    Menus.map((item, index) => (
                        SingleMenu(item, index)
                    ))
                }
            </div>
        </div>
    )
}

const SingleMenu = (item, index) => {
    return (
        <div key={index} className={`single-menu d-flex `} >
            <span className={`${index == 0 ? "single-menu-active" : ""}`}></span>
            <div className="side-icon">
                <img className="side-icons-menu" src={icons[item['icon']]}></img>
            </div>
            <div className={`side-name SecountaryFont ${index == 0 ? "side-name-active" : ""}`} >
                {item['Name']}
            </div>
        </div>
    )
}

export default SideNav