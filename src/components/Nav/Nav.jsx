import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
const Nav = () => {
  const ExtendLink = ({ to, children, styleLink }) => (
    <NavLink className={styleLink} to={to}>
      {({ isActive }) =>
        isActive ? (
          <span className={styles.activeLink}>{children}</span>
        ) : (
          <span>{children}</span>
        )
      }
    </NavLink>
  );
  return (
    <nav className={styles.nav}>
      <ExtendLink styleLink={styles.linkNav} to="/">
        Главная
      </ExtendLink>
      <ExtendLink styleLink={styles.linkNav} to="/list">
        Список дел
      </ExtendLink>
      <ExtendLink styleLink={styles.linkNav} to="/addToDo">
        Добавить новое дело
      </ExtendLink>
    </nav>
  );
};

export default Nav;
