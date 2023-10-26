import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../pages/ChefPriveHomePage.css";
export default function Booking() {
  
  // Date Selection
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const inputStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  // Select Persons
  const [count, setCount] = useState(5);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  // Select Regions
    const [selectedRegion, setSelectedRegion] = useState("Select Region");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const regions = [
      "Al Shamal الشمال",
      "Al Amir الأمير",
      "Al Hilal الهلال"
    ];

    const handleRegionSelect = (region) => {
      setSelectedRegion(region);
      setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  return (
    <>
    <div className="chef-prive-home-page-inner" />
    <div className="chef-prive-home-page-child11" />
      <div className="chef-prive-home-page-child12" />
      <div className="select-date-parent" >
      {/* ///Select Date Start// */}
      <div className="date-input" style={inputStyle}>
        <div className="DatePickerSize" >
        <DatePicker
          selected={selectedDate}
          showIcon
          onChange={handleDateChange}
          dateFormat="dd MMM yyyy"
          placeholderText="  Select Date"
          wrapperClassName="datepicker"
          icon="fa fa-calendar"
        />
        </div>
        
        <img className="right-icon" alt="" src="/mask-group2@2x.png" style={{padding:'5px',width:'25px',height:'25px'}} />
      </div>
      <div className="jan-20">{selectedDate ? selectedDate.toDateString() : ''}</div>
    </div>
      {/* /////Select Date End//// */}
      {/* ////Select Region Start//// */}
      <div className="select-region" onClick={toggleDropdown}>
        {selectedRegion}
      </div>
      <img className="mask-group-icon3" alt="" src="/mask-group3@2x.png" />
      <img
        className="mask-group-icon4"
        alt=""
        src="/mask-group2@2x.png"
        onClick={toggleDropdown}
      />
      {isDropdownOpen && (
        <div className="dropdown">
          {regions.map((region, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => handleRegionSelect(region)}
            >
              {region}
            </div>
          ))}
        </div>
      )}
      
        <div className="al-shamal">{selectedRegion}</div>
      
      {/* //////Select Region END////// */}
      {/* ////Select Persons Start///// */}
      <div className="select-persons-parent">
      <div className="select-persons">Select Persons</div>
      <img className="mask-group-icon16" alt="" src="/mask-group15@2x.png" />
      <div className="parent">
        <div className="div9">{count}</div>
        <img
          className="caretcircledown-icon"
          alt=""
          src="/caretcircledown.svg"
          onClick={handleIncrease}
        />
        <img
          className="caretcircledown-icon1"
          alt=""
          src="/caretcircledown1.svg"
          onClick={handleDecrease}
        />
      </div>
      </div>
      <a><div className="ellipse-div" onClick={()=>console.log('ghffj')}/>
      <img className="mask-group-icon5" alt="" src="/mask-group4@2x.png" /></a>
      {/* ////Select Persons END//// */}
    </>
  )
}
