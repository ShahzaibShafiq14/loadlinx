export const Home = () => {
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p> Your Route to Reliable Dispatching</p>
                            <h1>Welcome to Loadlinx</h1>
                            <p>
                                At LoadLinx, we celebrate the unsung heroes of the road—the truck drivers who keep our world moving
                                day in and day out. This is dedicated to shining a spotlight on the incredible individuals
                                who drive the backbone of our economy forward.
                            </p>
                            <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">Connect Now</button>
                                </a>
                                <a href="/service">
                                    <button className="btn secondary-btn">Learn More</button>
                                </a>
                            </div>
                        </div>
                        <div className="hero-image">
                            <img src="/images/home.png" alt="coding together" width="400" height="500" />
                        </div>

                    </div>
                </section>
            </main>

            <section className="section-analytics">
                <div className="container grid grid-four-cols">
                    <div className="div1">
                        <h2>50+</h2>
                        <p>Registered Companies</p>
                    </div>
                    <div className="div1">
                        <h2>100,00+</h2>
                        <p>Happy Clients</p>
                    </div>
                    <div className="div1">
                        <h2>1000+</h2>
                        <p>Loads Daily</p>
                    </div>
                    <div className="div1">
                        <h2>24/7</h2>
                        <p>Service</p>
                    </div>
                </div>

            </section>

            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-image">
                        <img src="/images/design.png" alt="coding together" width="400" height="500" />
                    </div>
                    <div className="hero-content">
                        <p> Where Every Load Finds its Link</p>
                        <h1>Get Started Today</h1>
                        <p>
                        Are you a truck driver with a story to share? We want to hear from you! Join our community of trucking 
                        heroes and become part of a movement dedicated to recognizing the hard work and dedication of drivers 
                        across the nation.
                        </p>
                        <div className="btn btn-group">
                            <a href="/contact">
                                <button className="btn">Connect Now</button>
                            </a>
                            <a href="/service">
                                <button className="btn secondary-btn">Learn More</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};