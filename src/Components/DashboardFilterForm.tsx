// import React, { useState, useEffect } from 'react';

// function DashboardFilterForm({ items, onFilter }) {
//   const [organization, setOrganization] = useState('');
//   const [email, setEmail] = useState('');
//   const [status, setStatus] = useState('');
//   const [username, setUsername] = useState('');

//   useEffect(() => {
//     // Call the filter function whenever any filter value changes
//     filterItems();
//   }, [organization, email, status, username]);

//   const filterItems = () => {
//     const filteredItems = items.filter(item => {
//       // Check if each item matches the filter criteria
//       const organizationMatch = item.organization.toLowerCase().includes(organization.toLowerCase());
//       const emailMatch = item.email.toLowerCase().includes(email.toLowerCase());
//       const statusMatch = item.status.toLowerCase().includes(status.toLowerCase());
//       const usernameMatch = item.username.toLowerCase().includes(username.toLowerCase());

//       // Return true if all filters match, false otherwise
//       return organizationMatch && emailMatch && statusMatch && usernameMatch;
//     });

//     // Pass the filtered items to the parent component
//     onFilter(filteredItems);
//   };

//   return (
//     <form>
//       <div>
//         <label>Organization:</label>
//         <input type="text" value={organization} onChange={e => setOrganization(e.target.value)} />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
//       </div>
//       <div>
//         <label>Status:</label>
//         <input type="text" value={status} onChange={e => setStatus(e.target.value)} />
//       </div>
//       <div>
//         <label>Username:</label>
//         <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
//       </div>
//     </form>
//   );
// }

// export default DashboardFilterForm;


const DashboardFilterForm = () => {
  return (
    <>

    </>
  )
}

export default DashboardFilterForm