import React from 'react';
import { FaBookmark } from 'react-icons/fa';
import './EditorPick.css';

const EditorPick = ({ recipes }) => {
    return (
        <div className="editor-pick-container">
            <h2 className="editor-pick-title">Editor's pick</h2>
            <p className="editor-pick-subtitle">Curated Culinary Delights - Handpicked Favorites by Our Expert Editors!</p>
            <div className="recipe-grid-edit">
                {recipes.map(recipe => (
                    <div key={recipe.id} className="recipe-card-edit">
                        <img src={recipe.image} alt={recipe.title} className="recipe-image" />
                        <div className="recipe-details">
                            <div className="recipe-title-bookmark">
                                <h3 className="recipe-title">{recipe.title}</h3>
                                <button className="bookmark-button">
                                    <FaBookmark />
                                </button>
                            </div>
                            <span className="recipe-time">{recipe.time}</span>
                            <div className="author-info">
                                <img src={recipe.avatar} alt={recipe.author} className="author-avatar" />
                                <span className="author-name">{recipe.author}</span>
                            </div>
                            <p className="recipe-description">{recipe.description.substring(0, 80)}...</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EditorPick;
