import React from 'react'
import { Link } from 'react-router-dom'

function Home()
{
    return(
        <div className="home">
            <div className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to PenPulse</h1>
                    <p className="hero-subtitle">Discover amazing products at unbeatable prices</p>
                    <Link to="/product" className="cta-button">Shop Now</Link>
                </div>
            </div>
            
            <div className="features-section">
                <h2>Why Choose Us?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🚚</div>
                        <h3>Fast Delivery</h3>
                        <p>Quick and reliable shipping to your doorstep</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💎</div>
                        <h3>Quality Products</h3>
                        <p>Carefully curated items from trusted brands</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🔒</div>
                        <h3>Secure Shopping</h3>
                        <p>Safe and secure payment processing</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home