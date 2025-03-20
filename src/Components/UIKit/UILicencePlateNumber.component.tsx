

import { ChangeEvent, useState } from 'react';
import style from '../../Style/Components/UIKit/UILicencePlateNumber.module.scss';
import UIDropdownOptionsNumberCar from './UIDropdownOptionsNumberCar.component';
import UIOptions from './UIOptions.component';
import UIOptionsNumberCar from './UIOptionsNumberCar.component';

import { useStepsStore } from "../../Story/story";
import SelectCountry from '../SelectCountry';


interface Props {
    error: boolean
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

                        <SelectCountry error={pr.error} onClickInput={pr.onClickInput} />

                    </div>
                </div>

            </div>
        </>
    );
}

export default UILicencePlateNumber;