import './login.css'
import logo from "../../assets/images/icons/logo.png"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


function Login(params) {

    const [currentactive, setactive] = useState(0)
    var Navigate = useNavigate()

    return (
        <div className='main'>
            <div className='card'>
                <div className='logo' >
                    <img src={logo} ></img>
                </div>
                <div className='header'>
                    <div className='btns'>
                        <button className={`btn active SecountaryFont ${currentactive == 0 ? "btn-active" : ""}`}>Email</button>
                        <button className={`btn active SecountaryFont ${currentactive == 1 ? "btn-active" : ""}`}>Phone</button>
                    </div>
                </div>
                <div className='body'>
                    <div>
                        <p className='PrimaryFont'>Email Address</p>
                        <input className='tex'></input>
                    </div>
                    <div style={{paddingTop:40}}>
                        <p className='PrimaryFont'>Password</p>
                        <input className='tex'></input>
                    </div>
                </div>
                <div className='footer c_margin'>
                    <p style={{marginBottom:0}} className='SecountaryFont '>Forgot Password ?</p>
                    <button onClick={() => {
                        Navigate("/dashboard")
                    }} className='login-btn PrimaryFont c_margin cbtn'>Login to Dashboard</button>

                </div>
            </div>
        </div>
    )
}


export default Login