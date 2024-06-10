import {useAuth} from "../store/auth";

export const About = () => {

    const {user}=useAuth();
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                        <p> Welcome ,
                            {user ? user.username+' to our website':' to our website'}
                        </p>
                            <h1>Why Choose Us</h1>
                            <p>
                            LoadLinx was born out of a passion for revolutionizing the trucking industry. Recognizing the challenges faced by
                             truck drivers and dispatchers alike, we set out to create a comprehensive solution that would streamline operations, 
                             enhance efficiency, and foster collaboration within the logistics ecosystem.
                            </p>
                            
                            <p>
                            Say goodbye to hours wasted on manual dispatching. LoadLinx harnesses cutting-edge technology to optimize routes,
                             minimize downtime, and maximize profitability.
                            </p>
                            <p>
                            At LoadLinx, we believe that technology has the power to transform the way goods are transported across the country.
                             Our team of dedicated professionals is committed to harnessing the latest advancements in software and data analytics
                              to deliver innovative dispatching solutions that empower truck drivers, dispatchers, and shippers alike.
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
                            <img src="/images/about.png" alt="coding together" width="400" height="500" />
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
            </>
    )
}