import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/users">Sample</Link>
        </div>
    );
};

export default SideBar;
