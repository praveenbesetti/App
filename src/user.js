import React, { useState } from 'react';
import './user.css';

const SearchComponent = () => {
  const initialData = [
    { empid: " 1", name: " praveen", dob: " 04-02-2003", role: "  full stack developer" },
    { empid: " 2", name: " surya", dob: "  04-02-2003", role: "  software developer" },
    { empid: " 3", name: " venkat", dob: "  04-02-2003", role: "  backend developer" },
    { empid: " 4", name: " naraya", dob: "  04-02-2003", role: "  java developer" },
    { empid: " 5", name: " varma", dob: "  04-02-2003", role: "  web developer" },
    { empid: " 6", name: " tarun", dob: "  04-02-2003", role: "  python developer" },
  ];

  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // If the search term is empty, show all data
    if (!term.trim()) {
      setData(initialData);
    } else {
      // Filter the data based on the search term
      const filteredData = initialData.filter((item) =>
        item.name.toLowerCase().includes(term.toLowerCase())
      );
      setData(filteredData);
    }
  };

  return (
    <div>
       <img src="imgs\Group 46@2x.png" id="call" alt="Call" />
       <img src="imgs\moptro logo.png" alt="Moptro Logo" id="moto" />
        <input id="find"
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
       />
      
        {data.map((item, index) => {
          return (
            <div>
            <div key={index} id="box">
              <span id="index">{item.empid}</span>
              <table>
                <tbody>
                  <tr>
                    <td>EMPID  <span id="index">:</span></td>
                    <td>{item.empid}</td>
                  </tr>
                  <tr>
                    <td>Name <span id="index">:</span></td>
                    <td>{item.name}</td>
                  </tr>
                  <tr>
                    <td>DOB <span id="index">:</span></td>
                    <td style={{color:"orange"}}>{item.dob}</td>
                  </tr>
                  <tr>
                    <td>Role <span id="index">:</span></td>
                    <td style={{color:"green", fontSize:'20px'}}>{item.role}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
          )})}
       
      </div>
 
  );
};

export default SearchComponent;
