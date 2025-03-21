
import { ChangeEvent } from 'react';
import style from '../../Style/Components/UIKit/UIEmail.module.scss';


interface Props {
    title: string
    error: boolean
    onChange: (event: ChangeEvent<HTMLInputElement>) => void 
    onClick: () => void
}

const UIEmail = ({...pr}: Props) => {

    return (
        <>
            <div className={style['UIEmail']}>

                <div className={style['UIEmail_title']}>
                    {pr.title}<span>*</span>
                </div>

                <input type='text' onChange={pr.onChange} onClick={pr.onClick} placeholder='youremail@gmail.com' style={pr.error ? {border: '1px solid red'} : {}}/>

            </div>
        </>
    )
}

export default UIEmail;