

import style from '../Style/Components/Header.module.scss';
import logo from '../Static/svg/Logo.svg'

const Header = () => {

    return (
        <>
            <div className={style['Header']}>
                <div className={style['Header_wrap']}>
                    <div className={style['Header_wrap_logo']}>
                        <img src={logo} />
                    </div>
                </div>
            </div>
        </>
    );

}

export default Header;