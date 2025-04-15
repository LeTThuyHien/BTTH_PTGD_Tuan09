import { FaBell, FaQuestion, FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom"; // <-- thêm
import "./Header.css";
import imgs from "../../assets/images/avt.png";

function Header() {
    const location = useLocation(); // <-- thêm
    const Titles = {
        '/': 'Dashboard',
        '/home': 'Trang chủ', // <-- thêm
        '/projects': 'Project',
        '/teams': 'Teams',
        '/analytics': 'Analytics',
        '/messages': 'Messages',
        '/integration': 'Integrations',
    };

    const pageTiles = Titles[location.pathname] || 'Trang không biết';

    return (
        <header className='header'>
            <div className="title-page">
                <h1>{pageTiles}</h1>
            </div>
            <div className="item-page">
                <Link to="/introduce" className="intro-link">Giới thiệu</Link>
                <div className="item-search">
                    <FaSearch />
                    <input type="text" id="searchInput" placeholder="Search..." />
                </div>
                <FaBell />
                <FaQuestion />
                <div className="img-admin">
                    <img src={imgs} alt="avt" />
                </div>
            </div>
        </header>
    );
}

export default Header;
