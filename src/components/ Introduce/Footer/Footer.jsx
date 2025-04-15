import React from 'react';
import './Footer.css';
import ChefifyLogo from "../../../assets/images/logofoodter.png"
function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-section about-us">
                <div>
                    <h4>About Us</h4>
                    <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
                    <div className="newsletter-signup">
                        <input type="email" placeholder="Enter your email" />
                        <button className="subscribe-button">Send</button>
                    </div>
                </div>
                <div className="bottom-left">
                    <img src={ChefifyLogo} alt="" />
                    <span><a href="#">2023 Chefify Company</a></span>
                    <span><a href="#">Terms of Service</a></span>
                </div>

            </div>
            <div className="footer-section learn-more">
                <div>
                    <h4>Learn More</h4>
                    <ul>
                        <li><a href="#">Our Cooks</a></li>
                        <li><a href="#">See Our Features</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Shop</h4>
                    <ul>
                        <li><a href="#">Gift Subscription</a></li>
                        <li><a href="#">Send Us Feedback</a></li>
                    </ul>
                </div>

            </div>
            
            <div className="footer-section recipes">
                <h3>Recipes</h3>
                <ul>
                    <li><a href="#">What To Cook This Week</a></li>
                    <li><a href="#">Pasta</a></li>
                    <li><a href="#">Dinner</a></li>
                    <li><a href="#">Healthy</a></li>
                    <li><a href="#">Vegetarian</a></li>
                    <li><a href="#">Vegan</a></li>
                    <li><a href="#">Christmas</a></li>
                </ul>
            </div>

        </footer>
    );
}

export default Footer;