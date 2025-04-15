import "./IntroducePage.css";
import ChefifyLogo from "../../assets/images/Chefify.png";
import imgIntro from "../../assets/images/img_intro.jpeg";
import imagesAvt from "../../assets/images/avt.png";
import { FaBookmark, FaSearch } from "react-icons/fa";
import EditorPick from "./EditorPick/EditorPick";

function IntroducePage() {
    const relatedRecipesData = [
        {
            id: 1,
            name: "Italian-style tomato salad",
            time: "15 minutes",
            image: "https://res.cloudinary.com/dlbg2caig/image/upload/v1741144551/chup-san-pham_uqb00m.jpg"
        },
        {
            id: 2,
            name: "Spaghetti with vegetables and shrimp",
            time: "25 minutes",
            image: "https://res.cloudinary.com/dlbg2caig/image/upload/v1741143943/cld-sample-4.jpg"
        },
        {
            id: 3,
            name: "Lotus delight salad",
            time: "20 minutes",
            image: "https://res.cloudinary.com/dlbg2caig/image/upload/v1741144551/top-15-hinh-anh-mon-an-ngon-viet-nam-khien-ban-khong-the-roi-mat-1_o4wqyb.jpg"
        },
        {
            id: 4,
            name: "Snack cakes",
            time: "25 minutes",
            image: "https://res.cloudinary.com/dlbg2caig/image/upload/v1741144551/chup-san-pham_uqb00m.jpg"
        }
    ];

    const recipesData = [
        {
            id: 1,
            title: "Stuffed sticky rice ball",
            author: "Jennifer King",
            time: "34 minutes",
            description: "Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...",
            avatar: "https://randomuser.me/api/portraits/women/1.jpg",
            image: "https://res.cloudinary.com/dlbg2caig/image/upload/v1741144551/chup-san-pham_uqb00m.jpg",
        },
        {
            id: 2,
            title: "Strawberry smoothie",
            author: "Matthew Martinez",
            time: "40 minutes",
            description: "Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...",
            avatar: "https://randomuser.me/api/portraits/men/2.jpg",
            image: "https://res.cloudinary.com/dlbg2caig/image/upload/v1741144551/chup-san-pham_uqb00m.jpg",
        },
        {
            id: 3,
            title: "Latte Art",
            author: "Sarah Hill",
            time: "19 minutes",
            description: "Latte art is the skillful craft of creating captivating designs on the surface of a latte...",
            avatar: "https://randomuser.me/api/portraits/women/3.jpg",
            image: "https://res.cloudinary.com/dlbg2caig/image/upload/v1741144551/chup-san-pham_uqb00m.jpg",
        },
        {
            id: 4,
            title: "Butter fried noodles",
            author: "Julia Lopez",
            time: "16 minutes",
            description: "Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...",
            avatar: "https://randomuser.me/api/portraits/women/4.jpg",
            image: "https://res.cloudinary.com/dlbg2caig/image/upload/v1741144551/chup-san-pham_uqb00m.jpg",
        },
    ];



    return (
        <div className="full-screen-container">
            <header className="header-intro">
                <div className="branding-search-container">
                    <div className="logo-container">
                        <img src={ChefifyLogo} alt="Chefify Logo" className="logo-chef" />
                    </div>
                    <div className="search-bar">
                        <FaSearch />
                        <input type="text" placeholder="What would you like to cook?" className="search-intro" />
                    </div>
                </div>

                <div className="nav-container">
                    <nav className="nav">
                        <ul className="nav-list">
                            <li className="nav-item-intro"><a href="#" className="title-item-intro">What to cook</a></li>
                            <li className="nav-item-intro"><a href="#" className="title-item-intro">Recipes</a></li>
                            <li className="nav-item-intro"><a href="#" className="title-item-intro">Ingredients</a></li>
                            <li className="nav-item-intro"><a href="#" className="title-item-intro">Occasions</a></li>
                            <li className="nav-item-intro"><a href="#" className="title-item-intro">About Us</a></li>
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
                    <div>
                        <div className="recipe-of-the-day">Recipe of the day</div>
                        <h2 className="recipe-title">Salad Caprese</h2>
                        <p className="recipe-description">
                            Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar
                            create a refreshing dish for lunch or appetizer.
                        </p>
                    </div>

                    <div className="recipe-user-info">
                        <img src={imagesAvt} alt="User Avatar" className="user-avatar" />
                        <p className="recipe-author">Salad Caprese</p>
                    </div>
                    <button className="view-now-button">View now →</button>
                </div>
            </div>

            <div className="related-recipes-container">
                <h2>This Summer Recipes</h2>
                <p>We have all your Independence Day sweets covered.</p>
                <div className="related-recipes-grid">
                    {relatedRecipesData.map((recipe) => (
                        <div key={recipe.id} className="related-recipe-card">
                            <img src={recipe.image} alt={recipe.name} className="related-recipe-image" />
                            <div className="related-recipe-info">
                                <div>
                                    <h3 className="related-recipe-name">{recipe.name}</h3>
                                    <p className="related-recipe-time">{recipe.time}</p>
                                </div>
                                <span className="icon-save-item">
                                    <FaBookmark className="icon-save" />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="related-recipes-container">
                <h2>Recipes With Videos</h2>
                <p>Cooking Up Culinary Creations with Step-by-Step Videos</p>
                <div className="related-recipes-grid">
                    {relatedRecipesData.map((recipe) => (
                        <div key={recipe.id} className="related-recipe-card">
                            <img src={recipe.image} alt={recipe.name} className="related-recipe-image" />
                            <div className="related-recipe-info">
                                <div>
                                    <h3 className="related-recipe-name">{recipe.name}</h3>
                                    <p className="related-recipe-time">{recipe.time}</p>
                                </div>
                                <span className="icon-save-item">
                                    <FaBookmark className="icon-save" />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <EditorPick recipes={recipesData} />



        </div>
    );
}

export default IntroducePage;
