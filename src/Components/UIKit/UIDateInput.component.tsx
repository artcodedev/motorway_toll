

import style from '../../Style/Components/UIKit/UIDateInput.module.scss';
import { useRef, useState } from "react";
import { useStepsStore } from '../../Story/story';


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


export const calculateEndDate = (startDate: string | number | Date, period: any) => {
    const date = new Date(startDate);
  
    switch (period) {
      case '1day':
        break;
      case '7days':
        date.setDate(date.getDate() + 6);
        break;
      case '10days':
        date.setDate(date.getDate() + 9);
        break;
      case '1month':
        date.setMonth(date.getMonth() + 1);
        date.setDate(date.getDate() - 1);
        break;
      case '2months':
        date.setMonth(date.getMonth() + 2);
        date.setDate(date.getDate() - 1);
        break;
      case '3months':
        date.setMonth(date.getMonth() + 3);
        date.setDate(date.getDate() - 1);
        break;
      case '6months':
        date.setMonth(date.getMonth() + 6);
        date.setDate(date.getDate() - 1);
        break;
      case '1year':
        date.setFullYear(date.getFullYear() + 1);
        date.setDate(date.getDate() - 1);
        break;
      default:
        return null;
    }
  
    return date;
  };

const UIDateInput = () => {

    const [date, setDate] = useState("");
    const dateInputRef = useRef<HTMLInputElement | null>(null);
    const handleShowPicker = () => {

        if (dateInputRef.current) {
          dateInputRef.current.showPicker();
        }

      };

    const dateChange = (e: any) => {

        const vehiclePeriod = useStepsStore.getState().validity;

        console.log(vehiclePeriod)


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
        console.log(selectedDate)

        const finalDate = selectedDate < today ? today : selectedDate;

        const endDate = calculateEndDate(finalDate, vehiclePeriod);

        const startDateStr = formatDateForInput(finalDate);

        console.log(startDateStr)

        console.log(endDate)

        const endDate_format = endDate ? formatDateForInput(endDate) : ''

        const startDateStr_t = startDateStr.split('-');

        const startDateStr_spl = `${startDateStr_t[2]}-${startDateStr_t[1]}-${startDateStr_t[0]}`;
        const endDate_format_t = endDate_format.split('-');
        const endDate_format_spl = `${endDate_format_t[2]}-${endDate_format_t[1]}-${endDate_format_t[0]}`;

        useStepsStore.getState().setStartDate(startDateStr_spl)
        useStepsStore.getState().setEndDate(endDate_format_spl)

        setDate(startDateStr)

    }

    return (
        <>
            <div className={style['UIDateInput']}>

                <div className={style['UIDateInput_but']} onClick={handleShowPicker}></div>

                <input type='date' ref={dateInputRef} style={{userSelect: 'none'}} min={getMinDate()} value={date ? date : formatDateForInput(new Date())} onChange={dateChange} />

            </div>
        </>
    );
}


export default UIDateInput;