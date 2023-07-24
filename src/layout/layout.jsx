import SideNav from "../components/navbar/Sidenav"
import HeaderBar from "../components/navbar/Header"
import Dashboard from "../pages/Dashboard"

function Layout(params) {
    return (
        <div className="d-flex">
            <div>
                <SideNav />
            </div>
            <div className="main-contact">
                <HeaderBar />
                <div className="main-body">
                    <Dashboard />
                </div>
            </div>
        </div>
    )
}

export default Layout