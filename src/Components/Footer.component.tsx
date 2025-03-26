

import style from '../Style/Components/Footer.module.scss';

const Footer = () => {

    return (
        <>
            <div className={style['Footer']}>
                <div className={style['Footer_wrap']}>

                    <div className={style['Footer_wrap_icons']}>

                        {['svg/visa.svg', 'svg/mastercard.svg', 'svg/amex.svg', 'svg/apple_pay.svg'].map((e) => <div>
                            <img src={`${window.location.origin}/austria2/${e}`} />
                        </div>)}
                    </div>

                    <div className={style['Footer_wrap_CompanyEmail']}>
                        <div className={style['Footer_wrap_CompanyEmail_txt']}>
                            Kupaline OU, Tallinn, Estonia, Company Registration Number: 14283378
                        </div>
                        <div className={style['Footer_wrap_CompanyEmail_txt']}>
                            Email: tollroad.online@gmail.com
                        </div>
                    </div>

                    <div className={style['Footer_wrap_PrivacyTerms']}>
                        <div className={style['Footer_wrap_PrivacyTerms_link']}>
                            <a href="https://tollroad.online/politics/privacy-policy.html" target="_blank">
                                Privacy policy
                            </a>
                        </div>
                        <div className={style['Footer_wrap_PrivacyTerms_link']}>
                            <a href="https://tollroad.online/politics/terms-conditions.html" target="_blank">
                                Terms and conditions
                            </a>
                        </div>
                    </div>

                </div>
            </div >
        </>
    );
}


export default Footer;