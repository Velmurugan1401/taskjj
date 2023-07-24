import Notification from "../../assets/images/icons/notificationbing.png"
import Sound from "../../assets/images/icons/Group.png"
import "./header.css"

function HeaderBar(params) {
    
    return (
        <div className="c-header">
            <div style={{ height: "100%" }} className="d-flex justify-space-between">
                <div className="c-margin-top-bottom">
                    <div className="company-name">Lalitha Jewellers</div>
                    <div className="company-address">Omalur Main Rd , Salem (Zeed Id : 5643)</div>
                </div>
                <div className="c-margin-top-bottom d-flex">
                    <div className="c-margin-top-bottom">
                        <img className="notification" src={Notification}></img>
                    </div>
                    <div className="c-margin-top-bottom">
                        <img className="sound" src={Sound}></img>
                    </div>
                    <div className="c-margin-top-bottom">
                        <span className="name-tag">L</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderBar