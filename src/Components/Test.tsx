// import React from 'react';
// import Dropdown from './Dropbox';

// const AppTest: React.FC = () => {
//   const options = ['Опция 1', 'Опция 2', 'Опция 3'];

//   const handleSelect = (option: string) => {
//     console.log('Выбрана опция:', option);
//   };

//   return (
//     <div>
//       <h1>Кастомный выпадающий список</h1>

//       <Dropdown options={options} onSelect={handleSelect} />

//     </div>
//   );
// };

// export default AppTest;



import React, { useRef } from 'react';

const AppTest: React.FC = () => {
  const dateInputRef = useRef<HTMLInputElement | null>(null);

  const handleShowPicker = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };

  return (
    <div>
      <input
        type="date"
        ref={dateInputRef}
      />
      <button onClick={handleShowPicker}>Показать календарь</button>
    </div>
  );
};

export default AppTest;