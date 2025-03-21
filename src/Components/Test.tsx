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



// import React, { useRef } from 'react';

// const AppTest: React.FC = () => {
//   const dateInputRef = useRef<HTMLInputElement | null>(null);

//   const handleShowPicker = () => {
//     if (dateInputRef.current) {
//       dateInputRef.current.showPicker();
//     }
//   };

//   return (
//     <div>
//       <input
//         type="date"
//         ref={dateInputRef}
//       />
//       <button onClick={handleShowPicker}>Показать календарь</button>
//     </div>
//   );
// };

// export default AppTest;

// import React from 'react';
// import InputMask from 'react-input-mask';

// interface MaskedInputProps {
//   mask: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// const MaskedInput: React.FC<MaskedInputProps> = ({ mask, value, onChange }) => {
//   return (
//     <InputMask mask={mask} value={value} onChange={onChange}>
//       {(inputProps: any) => <input {...inputProps} />}
//     </InputMask>
//   );
// };

// const App: React.FC = () => {
//   const [phone, setPhone] = React.useState<string>('');

//   const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPhone(e.target.value);
//   };

//   return (
//     <div>
//       <h1>Masked Input Example</h1>
//       <MaskedInput
//         mask="(999) 999-9999"
//         value={phone}
//         onChange={handlePhoneChange}
//       />
//     </div>
//   );
// };

// export default App;


// import React from "react";
// import MaskedInput from "react-maskedinput";

// // import React from 'react';
// import InputMask from 'react-input-mask';

// const MyComponent = () => {
//   return (
//     <InputMask mask="9999" maskChar={null}>
//     {(inputProps) => <input {...inputProps} />}
//   </InputMask>
//   );
// };

// export default MyComponent;
