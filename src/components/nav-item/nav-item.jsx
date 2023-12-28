import styles from './nav-item.module.css';

function NavItem(props) {
    return (
        <a href='#' className={`${styles.navItem} ${props.addMargin}`}>
            <div className='ml-5 mr-2'>
                {props.icon}
            </div>
            <p className="text text_type_main-default mr-5">
                {props.children}
            </p>
        </a>
    );
}

NavItem.defaultProps = {
    addMargin: ''
};

export default NavItem;