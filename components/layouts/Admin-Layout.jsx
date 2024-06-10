import { NavLink, Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../store/auth"
import { FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

export const AdminLayout = () => {
    const { user, isLoading } = useAuth();


    if (isLoading) {
        return <h1>Loading ...</h1>;
    }

    if (!user.isAdmin) {
        return <Navigate to="/" />;
    }

    return <>
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/admin/users"><FaUser /> Users</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/contacts"><FaMessage/> Contacts</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <Outlet />

    </>
}