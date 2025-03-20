

import style from '../../Style/Components/UIKit/UIDateInput.module.scss';
import { useRef, useState } from "react";


const formatDateForInput = (date: string | number | Date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const getMinDate = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return formatDateForInput(today);
};

const UIDateInput = () => {

    const dateInputRef = useRef(null);
    const [date, setDate] = useState("");

    const dateChange = (e: any) => {


        const isIOSSafari = /iPhone|iPad|iPod/.test(navigator.userAgent)
            && !navigator.userAgent.includes('Chrome')
            && !navigator.userAgent.includes('CriOS')

        let selectedDate;

        if (isIOSSafari) {
            // Для iOS Safari компенсируем смещение на -1 день добавлением дня
            const [year, month, day] = e.target.value.split('-').map(Number);
            selectedDate = new Date(year, month - 1, day + 1);
        } else {
            // Для всех остальных просто берем дату как есть
            const [year, month, day] = e.target.value.split('-').map(Number);
            selectedDate = new Date(year, month - 1, day);
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const finalDate = selectedDate < today ? today : selectedDate;

        const startDateStr = formatDateForInput(finalDate);

        setDate(startDateStr)

    }


    return (
        <>
            <div className={style['UIDateInput']}>

                <input type='date' min={getMinDate()} value={date ? date : formatDateForInput(new Date())} onChange={dateChange} />

            </div>
        </>
    );
}


export default UIDateInput;