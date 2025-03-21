

import Container from '../Components/Container.component';
import MainWrapper from '../Components/MainWrapper.component';
import Steps from '../Components/Steps.component';
import TitlesHeader from '../Components/TitlesHeader.component';
import UIButton from '../Components/UIKit/UIButton.component';
import style from '../Style/Pages/Payment.module.scss'
import edit from '../Static/svg/edit.svg';
import logo_pay from '../Static/svg/logo_pay.svg';
import { Link, useNavigate } from 'react-router-dom';
import UIEmail from '../Components/UIKit/UIEmail.component';
import { ChangeEvent, useEffect, useState } from 'react';
import SelectCountry from '../Components/SelectCountry.component';
import SelectNumberPhone from '../Components/SelectNumberPhone.component';
import UICheckBoxLabel from '../Components/UIKit/UICheckBoxLabel.component';
import { useStepsStore } from '../Story/story';

const Payment = () => {

    const navigate = useNavigate();

    const [errorEmail, setErrorEmail] = useState<boolean>(false);
    const [email, setEmail] = useState<string | null>(null);
    const [errorPhone, setErrorPhone] = useState<boolean>(false);
    const [errorCheckBox, setErrorCheckBox] = useState<boolean>(false)
    const [check, setCheck] = useState<boolean>(true);

    const [price, setPrice] = useState<string>('');

    useEffect(() => {

        const num = useStepsStore.getState().number_car;

        if (!num || num == null ) navigate('/')
    });

    const onClickChechBoxInput = () => {
        setCheck(check ? false : true)
        setErrorCheckBox(false);
    }


    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value);

    const validateEmail = (email: string): boolean => {
        const regex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const onClickButton = () => {

        if (email) {
            
            if (validateEmail(email)) {
                console.log('send');

                return;
            }
        }


        setErrorEmail(true);

    }


    const onClickInputPhone = () => { }

    return (
        <>
            <Container>
                {/* <TitlesHeader /> */}

                <MainWrapper>

                    <Steps step={3} progress={100} />

                    <div className={style['Payment_title']}>
                        <div className={style['Payment_title_txt']}>
                            E-vignette registration was successful.
                            Waiting for download.
                        </div>
                    </div>

                    <div className={style['Payment_wrapper']}>

                        <div className={style['Payment_wrapper_section']}>

                            <div className={style['Payment_wrapper_section_info']}>

                                <div className={style['Payment_wrapper_section_info_title']}>
                                    E-vignette Austria
                                </div>

                                <div className={style['Payment_wrapper_section_info_counts']}>
                                    <span>1x</span><span>{useStepsStore.getState().type_price}</span>
                                </div>

                                <div className={style['Payment_wrapper_section_info_time']}>

                                    {`${useStepsStore.getState().start_date?.split('-').join('.')} - ${useStepsStore.getState().end_date?.split('-').join('.')} (23:59)`}
                                </div>

                            </div>

                            <div className={style['Payment_wrapper_section_edit']}>
                                <Link to='/'>
                                    <img src={edit} />
                                </Link>
                            </div>

                            <div className={style['Payment_wrapper_section_price']}>
                                {useStepsStore.getState().price} €
                            </div>
                        </div>

                        <div className={style['Payment_wrapper_section']}>

                            <div className={style['Payment_wrapper_section_info']}>

                                <div className={style['Payment_wrapper_section_info_licence']}>
                                    Licence plate number:
                                </div>

                                <div className={style['Payment_wrapper_section_info_number']}>
                                    <img src={useStepsStore.getState().flag?.toString()} />
                                    <div>({useStepsStore.getState().number_car_prefix}) {useStepsStore.getState().number_car}</div>
                                </div>

                            </div>

                            <div className={style['Payment_wrapper_section_edit']}>

                                <Link to='/'>
                                    <img src={edit} />
                                </Link>
                            </div>

                            <div className={style['Payment_wrapper_section_price']}>
                                <img src={logo_pay} />
                            </div>
                        </div>

                        <div className={style['Payment_wrapper_section_total']}>
                            <div className={style['Payment_wrapper_section_total_txt']}>Total</div>
                            <div className={style['Payment_wrapper_section_total_price']}>{useStepsStore.getState().price} €</div>
                        </div>

                    </div>

                    <div style={{ margin: '32px auto' }}>
                        <UIEmail title='Email' error={errorEmail} onChange={onChangeEmail} onClick={() => setErrorEmail(false)} />

                        <div style={{marginTop: '18px'}}>
                            
                            <SelectNumberPhone error={errorPhone} onClickInput={onClickInputPhone} />
                        </div>

                        <UICheckBoxLabel check={check} onClick={onClickChechBoxInput} error={errorCheckBox} />
                    </div>



                    <UIButton title='Pay online' onCLickButton={onClickButton} />

                </MainWrapper>

            </Container>
        </>
    );
}

export default Payment;