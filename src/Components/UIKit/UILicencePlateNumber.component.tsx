

import { ChangeEvent, useState } from 'react';
import style from '../../Style/Components/UIKit/UILicencePlateNumber.module.scss';
import UIDropdownOptionsNumberCar from './UIDropdownOptionsNumberCar.component';
import UIOptions from './UIOptions.component';
import UIOptionsNumberCar from './UIOptionsNumberCar.component';

import { useStepsStore } from "../../Story/story";


interface Props {
    error: boolean
    onClickInput: () => void
}

const UILicencePlateNumber = ({...pr}: Props) => {

    const [value, setValue] = useState<string>(useStepsStore.getState().number_car || '')

    const handleSelect = (option: string) => {
        console.log('Выбрана опция:', option);
    };

    const onChancheNumberCar = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value.toUpperCase());

        useStepsStore.getState().setNumberCar(e.currentTarget.value.toUpperCase());
    }

    return (
        <>
            <div className={style['UILicencePlateNumber']}>

                <div className={style['UILicencePlateNumber_title']}>
                    Licence plate number<span>*</span>
                </div>

                <div className={style['UILicencePlateNumber_inputs']}>

                    <div className={style['UILicencePlateNumber_inputs_select']}></div>

                    <div className={style['UILicencePlateNumber_inputs_number']}>

                        <div style={{ maxWidth: '80px', width: '80px' }}>

                            <UIDropdownOptionsNumberCar onSelect={handleSelect} />

                        </div>

                        <input style={ pr.error ? { border: '1px solid red' } : {}} onClick={pr.onClickInput} value={value} onChange={onChancheNumberCar}/>
                    </div>
                </div>

            </div>
        </>
    );
}

export default UILicencePlateNumber;