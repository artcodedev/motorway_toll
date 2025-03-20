
import style from '../Style/Components/Container.module.scss';

import Footer from './Footer.component';
import Header from './Header.component';

const Container = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <div className={style['Container']}>
                <div className={style['Container_header']}>
                    <Header />
                </div>

                <div className={style['Container_main']}>
                    { children }
                </div>

                <div className={style['Container_footer']}>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Container;