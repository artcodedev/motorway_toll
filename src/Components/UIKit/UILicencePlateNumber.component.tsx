

import style from '../../Style/Components/UIKit/UILicencePlateNumber.module.scss';
import SelectCountry from '../SelectCountry.component';


interface Props {
    error: boolean
    flag: string
    onClickInput: () => void
}

const UILicencePlateNumber = ({ ...pr }: Props) => {

    return (
        <>
            <div className={style['UILicencePlateNumber']}>

                <div className={style['UILicencePlateNumber_title']}>
                    Licence plate number<span>*</span>
                </div>

                <div className={style['UILicencePlateNumber_inputs']}>

                    <div className={style['UILicencePlateNumber_inputs_select']}></div>

                    <div className={style['UILicencePlateNumber_inputs_number']}>

                        <SelectCountry error={pr.error} onClickInput={pr.onClickInput} flag={pr.flag}/>

                    </div>
                </div>

            </div>
        </>
    );
}

export default UILicencePlateNumber;