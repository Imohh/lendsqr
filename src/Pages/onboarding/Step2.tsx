// import {useState} from 'react'

// const Step2: React.FC = () => {
//   const [email, setEmail] = useState('');

//   const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(event.target.value);
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     // Perform any necessary form submission logic
//   };

//   return (
//     <div>
//       <h2>Step 2</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input type="email" value={email} onChange={handleEmailChange} />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Step2