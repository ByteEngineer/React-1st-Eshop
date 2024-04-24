import { Link } from "react-router-dom"


function Nav() {
    return (
        <>
            <nav>
                <h1>eSHOP</h1>
                <input type="text" placeholder="Search" />
                <Link to="/Signup">
                    <p>Hello <br /> <span>SignUp</span></p>
                </Link>
                <p>Your <br /> <span>Shop</span></p>
                <Link to="/card">
                    <button className="btn">Next Page</button>
                </Link>
            </nav>
        </>
    )
}

export default Nav