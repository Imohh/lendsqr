// import {useState} from 'react'


// // Step 1 component
// const Step1: React.FC = () => {
//   const [name, setName] = useState('');

//   const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setName(event.target.value);
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     // Perform any necessary form submission logic
//   };

//   return (
//     <div>
//       <h2>Step 1</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={handleNameChange} />
//         </label>
//         <button type="submit">Next</button>
//       </form>
//     </div>
//   );
// };

// export default Step1