import styles from './nav-item.module.css';

function NavItem(props) {
  return (
    <a className={`${styles.navItem} ${props.addMargin}`} href="#">
      <div className="ml-5 mr-2">{props.icon}</div>
      <p
        className={`text text_type_main-default mr-5 ${
          props.isActive ? '' : 'text_color_inactive'
        }`}
      >
        {props.children}
      </p>
    </a>
  );
}

NavItem.defaultProps = {
  addMargin: '',
};

export default NavItem;
