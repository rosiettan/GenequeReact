import { React } from "react";
import './home.css'

const Home = () => {
    return (
        <div className="content-wrap">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="tagline">
                        <span className="health-matters">Health Matters</span>
                        <span className="dna">
                            <img src="/dna.png" alt="dna" style={{ width: '30px' }} />

                        </span>
                    </div>
                    <h1 style={{ fontSize: '70px', color: '#243642' }}>
                        One Step Solution for all your needs.
                    </h1>
                    <p style={{ fontSize: '20px', marginLeft: '10px' }}>
                        Using your STR index we calculate which clan is suitable for you.
                    </p>
                    <div className="search-box">
                        <label>
                            <input type="text" placeholder="Search function..." />
                        </label>
                        <button className="search-btn">
                            <img src="/search.png" alt="search" style={{ width: '30px' }} />
                        </button>
                    </div>
                </div>
                <div className="hero-content2">
                    <img
                        src="/man.png"
                        alt="scientist"
                        style={{ width: '500px', marginLeft: '100px' }}

                    />
                </div>
            </div>
        </div>
    )
}

export default Home;