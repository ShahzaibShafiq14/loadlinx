import { NavLink } from "react-router-dom"

export const Error = () => {
    return (
        <>
            <section id="error-page">
                <div className="content">
                    <h2 className="header">404</h2>
                    <h4>Sorry! Page not found</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem delectus debitis itaque aliquam maxime,
                        officia sint qui dicta perspiciatis tempora? Est, nemo tenetur magnam blanditiis animi nulla dicta deserunt esse.
                    </p>
                    <div className="btns">
                        <NavLink to="/"> return home</NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}