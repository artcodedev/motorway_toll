import style from '../Style/Components/MainWrapper.module.scss';

const MainWrapper = ({ children }: { children: React.ReactNode }) => {

    return (
        <>
            <div className={style['MainWrapper']}>
                <div className={style['MainWrapper_wrap']}>
                    {children}
                </div>
            </div>
        </>
    );
}

export default MainWrapper;