

import style from '../Style/Components/Header.module.scss';
// import logo from '../Static/svg/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <>
            <div className={style['Header']}>
                <div className={style['Header_wrap']}>
                    <div className={style['Header_wrap_logo']}>
                        <Link to='/austria2'>
                            <img src={`${window.location.origin}/austria2/svg/Logo.svg`} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Header;