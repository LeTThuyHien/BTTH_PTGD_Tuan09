import "./IntroducePage.css";
import ChefifyLogo from "../../assets/images/Chefify.png";
import imgIntro from "../../assets/images/img_intro.jpeg";
import imagesAvt  from "../../assets/images/avt.png"

function IntroducePage() {
    return (
        <div className="full-screen-container">
            <header className="header-intro">
                <div className="branding-search-container">
                    <div className="logo-container">
                        <img src={ChefifyLogo} alt="Chefify Logo" className="logo-chef" />
                    </div>
                    <div className="search-bar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="search-icon" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.414-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                        <input type="text" placeholder="What would you like to cook?" className="search-intro" />
                    </div>
                </div>

                <div className="nav-container">
                    <nav className="nav">
                        <ul className="nav-list">
                            <li className="nav-item-intro">
                                <a href="#" className="title-item-intro">
                                    What to cook
                                </a>
                            </li>
                            <li className="nav-item-intro">
                                <a href="#" className="title-item-intro">
                                    Recipes
                                </a>
                            </li>
                            <li className="nav-item-intro">
                                <a href="#" className="title-item-intro">
                                    Ingredients
                                </a>
                            </li>
                            <li className="nav-item-intro">
                                <a href="#" className="title-item-intro">
                                    Occasions
                                </a>
                            </li>
                            <li className="nav-item-intro">
                                <a href="#" className="title-item-intro">
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="actions-btn">
                    <button className="login-button">Login</button>
                    <button className="subscribe-button">Subscribe</button>
                </div>
            </header>

            <div className="full-screen-image-container">
                <img src={imgIntro} alt="Hình ảnh nền full màn hình" className="full-screen-image" />
                <div className="recipe-card">
                    <div className="recipe-of-the-day">
                        Recipe of the day
                    </div>
                    <h2 className="recipe-title">Salad Caprese</h2>
                    <p className="recipe-description">
                        Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar
                        create a refreshing dish for lunch or appetizer.
                    </p>
                    <div className="recipe-user-info">
                        <div className="user-avatar-container">
                            <img src={imagesAvt} alt="User Avatar" className="user-avatar" />
                        </div>
                        <p className="recipe-author">Salad Caprese</p>
                    </div>
                    <button className="view-now-button">
                        View now →
                    </button>
                </div>
            </div>
        </div>
    );
}

export default IntroducePage;