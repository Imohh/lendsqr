import React, { useState } from 'react';
import '../styles/filterform.scss'

interface FilterFormProps {
  data: User[];
  onFilter: (filteredData: User[]) => void;
}

interface User {
  id: number;
  email: string;
  phoneNumber: number;
  orgName: string;
  userName: string;
  createdAt: string;
  lastActiveDate: string;
  //status: string;
}

const DashboardFilterForm: React.FC<FilterFormProps> = ({ data, onFilter }) => {
  const [orgNameSearchTerm, setOrgNameSearchTerm] = useState<string>('');
  const [emailSearchTerm, setEmailSearchTerm] = useState<string>('');
  const [userNameSearchTerm, setUserNameSearchTerm] = useState<string>('');
  const [phoneNumberSearchTerm, setPhoneNumberSearchTerm] = useState<string>('');
  //const [statusSearchTerm, setStatusSearchTerm] = useState<string>('');


  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const filteredData = data.filter((user) => {
      const lowerCaseOrgName = user.orgName.toLowerCase();
      const lowerCaseEmail = user.email.toLowerCase();
      const lowerCaseUserName = user.userName.toLowerCase();
      const userPhoneNumber = user.phoneNumber.toString();
      // const userStatus = getStatus(user.createdAt).toString();

      return (
        (orgNameSearchTerm && lowerCaseOrgName.includes(orgNameSearchTerm.toLowerCase())) ||
        (emailSearchTerm && lowerCaseEmail.includes(emailSearchTerm.toLowerCase())) ||
        (userNameSearchTerm && lowerCaseUserName.includes(userNameSearchTerm.toLowerCase())) ||
        (phoneNumberSearchTerm && userPhoneNumber.includes(phoneNumberSearchTerm)) 
        //(statusSearchTerm && userStatus.includes(statusSearchTerm))
      );
    });

    onFilter(filteredData);
  };



  const getStatus = (date: string): string => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const tenYearsAgo = year - 10;
    const year2000 = 2000;
    const year2022 = 2022;

    const parsedDate = new Date(date);

    if (parsedDate.getFullYear() < year2000) {
      return 'blacklisted';
    } else if (parsedDate.getFullYear() >= year2022) {
      return 'active';
    } else if (parsedDate.getFullYear() <= tenYearsAgo) {
      return 'pending';
    }

    return 'unknown';
  };


const handleReset = () => {
    // Reset all search terms to their default values
    setOrgNameSearchTerm('');
    setEmailSearchTerm('');
    setUserNameSearchTerm('');
    setPhoneNumberSearchTerm('');
    // setStatusSearchTerm('');

    // Show the default data by passing the original data to onFilter
    onFilter(data);
  };


  return (
    <section className="filter-form">
      <form onSubmit={handleSearchSubmit}>
      <label>organization</label>
        <select
          value={orgNameSearchTerm}
          onChange={(e) => setOrgNameSearchTerm(e.target.value)}
          placeholder="Search by orgName"
        >
          <option value="">All</option>
          {Array.from(new Set(data.map((user) => user.orgName))).map((orgName) => (
            <option key={orgName} value={orgName}>
              {orgName}
            </option>
          ))}
        </select>
        <label>username</label>
        <input
          type="text"
          value={userNameSearchTerm}
          onChange={(e) => setUserNameSearchTerm(e.target.value)}
          placeholder="user"
        />
        <label>email</label>
        <input
          type="text"
          value={emailSearchTerm}
          onChange={(e) => setEmailSearchTerm(e.target.value)}
          placeholder="Email"
        />
        <label>phone number</label>
        <input
          type="text"
          value={phoneNumberSearchTerm}
          onChange={(e) => setPhoneNumberSearchTerm(e.target.value)}
          placeholder="phone number"
        />
        {/*
        <label>status</label>
        <select
          value={statusSearchTerm}
          onChange={(e) => setStatusSearchTerm(e.target.value)}
          placeholder="Search by status"
        >
          <option value="">All</option>
          {Array.from(new Set(data.map((user) => getStatus(user.createdAt)))) // Use getStatus function here
            .map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
        </select>*/}
        <div className="filter-button-section">
          <button className="filter-form-filter" type="submit">filter</button>
          <button className="filter-form-reset" type="button" onClick={handleReset}>reset</button>
        </div>
      </form>
    </section>
  );
};

export default DashboardFilterForm