import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={`${styles.nav} navbar navbar-expand-sm navbar-dark`}>
            <div className={`${styles.rowNavLinks}`}></div>
            <Link
                className={`${styles.linkNav} navbar-brand`}
                to="/Home"
            >
                <strong>Home</strong>
            </Link>

            <div className={`${styles.nav} navbar navbar-expand-sm navbar-dark`}>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <NavLink className={`${styles.linkNav} nav-item nav-link`}>
                        <ul className="navbar-nav mr-auto">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <strong>Opciones</strong>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                                    <a className="dropdown-item" href="#">Caja</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Cocumentos</a>
                                </div>
                            </li>



                        </ul>
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink
                        className={`${styles.linkNav} nav-item nav-link`}
                        to="/Login"
                    >
                        <strong>Logout</strong>
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}