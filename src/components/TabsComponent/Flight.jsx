import React, { useState } from 'react'
import SwapHorizIcon from "@mui/icons-material/SwapHoriz"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Box, Typography } from '@mui/material';

import {
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    TextField,
    Autocomplete,
    Button,
    Menu,
    Checkbox,
  } from '@mui/material';

  const styles = {

    button: {
      fontSize: "0.9rem",
      minWidth: "150px",
      height: "40px",
      padding: "5px 10px",
      color: "white",
      borderColor: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  
    autocomplete: {
      width: "180px",
      "& .MuiOutlinedInput-root": {
        // backgroundColor: "white",
        borderRadius: "6px",
        height: "40px",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "white",
          borderWidth: "1px",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "lightgray",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#F9B545",
          borderWidth: "2px",
          transition: "all 0.5s ease",
        },
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
      },
      "& .MuiInputBase-input": {
        color: "white",
        padding: "14px",
        fontSize: "16px",
      },
      "& .MuiInputBase-input::placeholder": {
        color: "white",
      },
      "& .MuiSvgIcon-root ": {
        color: "white",
      }
    },
  
    travelerCounter: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      width: "250px",
      height: "fit-content",
    },
    travelerRow: {
      display: "flex",
      padding: "16px",
    },
    travelerDetails: {
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
    },
    travelerCount: {
      fontSize: "1rem",
      margin: "0 8px",
    },
  
    datepicker: {
      width: "180px",
      height: "40px",
      padding: "10px",
      backgroundColor: "white",
      border: "2px solid white",
      borderRadius: "8px",
      fontSize: "16px",
      color: "black",
      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
      outline: "none",
      transition: "all 0.5s ease",
      "&:hover": {
        borderColor: "lightgray",
      },
      "&:focus": {
        borderColor: "#F9B545",
        borderWidth: "3px",
      },
      "::placeholder": {
        color: "black",
      },
    },
  
    searchButton: {
      // width: "100%",
      backgroundColor: "#007BFF",
      color: "white",
      padding: "8px 12px",
      borderRadius: "8px",
      "&:hover": {
        backgroundColor: "#0069D9",
      },
    },
  };

function Flight() {

    const [adultCount, setAdultCount] = useState(1);
    const [childrenCount, setChildrenCount] = useState(0);
    const [infantCount, setInfantCount] = useState(0);
    const [travelerAnchorEl, setTravelerAnchorEl] = useState(null);
    const totalTravelers = adultCount + childrenCount + infantCount;
    const [tripType, setTripType] = useState("oneway");
    const [departureDate, setDepartureDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);
  
    const today = new Date();
    
    const openTravelerMenu = (event) => {
      setTravelerAnchorEl(event.currentTarget);
    };
    
    const closeTravelerMenu = () => {
      setTravelerAnchorEl(null);
    };
    
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex justify-around '>
                <div className='flex justify-center items-center'>
                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            className='text-white flex gap-5'
                            name="row-radio-buttons-group"
                            value={tripType}
                            onChange={(e) => setTripType(e.target.value)}
                        >
                            <FormControlLabel value="One Way" control={
                                <Radio sx={{
                                    color: "white",
                                    "&.Mui-checked": { color: "#F9B545" },
                                }}
                                />}
                                label="One Way" />
                            <FormControlLabel value="Round Trip" control={
                                <Radio sx={{
                                    color: "white",
                                    "&.Mui-checked": { color: "#F9B545" },
                                }}
                                />}
                                label="Round Trip" />

                            {/* <FormControlLabel value="Multi City" disabled control={<Radio sx={{
                  color: "white",
                  "&.Mui-checked": { color: "#F9B545" },
                }} />} label="Multi City" /> */}

                        </RadioGroup>
                    </FormControl>
                </div>

                <div className='flex justify-center items-center gap-10'>
                    <Autocomplete
                        disablePortal
                        options={["All", "Economy", "Business", "First Class"]}
                        sx={styles.autocomplete}
                        renderInput={(params) => <TextField {...params}
                            placeholder="Travel Class"
                            variant="outlined" />}
                    />

                    <Button
                        variant="outlined"
                        onClick={openTravelerMenu}
                        sx={styles.button}
                    >
                        {totalTravelers} Traveler(s)
                    </Button>
                    <Menu
                        anchorEl={travelerAnchorEl}
                        open={Boolean(travelerAnchorEl)}
                        onClose={closeTravelerMenu}
                    >
                        <Box sx={styles.travelerCounter}>
                            <div className="mb-4 border-b-2 border-gray-300 pb-2">
                                <h4 class="mb-0 font-TitleFont text-2xl font-bold text-center">
                                    Travellers
                                </h4>
                            </div>
                            {[
                                {
                                    label: "Adults",
                                    description: "(12+ Years)",
                                    count: adultCount,
                                    setCount: setAdultCount,
                                },
                                {
                                    label: "Children",
                                    description: "(2-12 Years)",
                                    count: childrenCount,
                                    setCount: setChildrenCount,
                                },
                                {
                                    label: "Infants",
                                    description: "(0-2 Years)",
                                    count: infantCount,
                                    setCount: setInfantCount,
                                },
                            ].map((item, index) => (
                                <Box key={index} sx={styles.travelerRow}>
                                    <Box sx={styles.travelerDetails}>
                                        <Typography variant="body1" fontWeight="500">
                                            {item.label}
                                        </Typography>
                                        <Typography variant="caption" color="gray">
                                            {item.description}
                                        </Typography>
                                    </Box>
                                    <Box className="flex justify-center ml-auto">
                                        <button
                                            className='border-2 cursor-pointer border-gray-300 rounded-full size-6 flex items-center justify-center'
                                            onClick={() =>
                                                item.setCount((prev) => Math.max(0, prev - 1))
                                            }
                                            style={styles.counterButton}
                                        >
                                            -
                                        </button>
                                        <span style={styles.travelerCount}>{item.count}</span>
                                        <button
                                            className='border-2 cursor-pointer border-gray-300 rounded-full size-6 flex items-center justify-center'
                                            onClick={() => {
                                                const totalTravelers = adultCount + childrenCount + infantCount;
                                                if (totalTravelers < 9) {
                                                    item.setCount((prev) => prev + 1);
                                                }
                                            }}
                                            style={styles.counterButton}
                                        >
                                            +
                                        </button>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Menu>

                    <FormControlLabel
                        control={
                            <Checkbox
                                sx={{
                                    color: '#f9b545',
                                    '&.Mui-checked': {
                                        color: '#f9b545',
                                    },
                                    '& .MuiSvgIcon-root': {
                                        fontSize: '28px',
                                    },
                                }}
                            />
                        }
                        label="Direct Flight"
                        sx={{
                            color: 'white',
                            marginRight: '0px',
                            fontWeight: 'bold',
                            fontSize: '18px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    />
                </div>
            </div>

            <div className='flex justify-center gap-20 items-center'>
                <div>
                    <input className='text-black w-[200px] rounded-md transition-colors duration-300 ease-in-out border-2 pl-3 focus:border-[3px] focus:outline-none border-white hover:border-gray-300 focus:border-customOrange h-10 bg-white  '
                        placeholder='Flying From' type="text" />
                    <Button sx={{ minWidth: "40px", padding: "0" }}>
                        <SwapHorizIcon fontSize="large" sx={{ color: "white" }} />
                    </Button>
                    <input className='text-black w-[200px] rounded-md transition-colors duration-300 ease-in-out border-2 pl-3 focus:border-[3px] focus:outline-none border-white hover:border-gray-300 focus:border-customOrange h-10 bg-white  '
                        placeholder='Flying To' type="text" />
                </div>

                <div className='flex gap-5'>
                    <DatePicker
                        selected={departureDate}
                        onChange={(date) => setDepartureDate(date)}
                        selectsStart
                        minDate={today}
                        startDate={departureDate}
                        endDate={returnDate}
                        monthsShown={2}
                        calendarClassName="custom-datepicker"
                        placeholderText="Depart: mm/dd/yyyy"
                        customInput={
                            <input
                                style={styles.datepicker}
                                placeholder="Departure Date"
                            />
                        }
                    />

                    {tripType === "Round Trip" && (
                        <DatePicker
                            selected={returnDate}
                            onChange={(date) => setReturnDate(date)}
                            selectsEnd
                            startDate={departureDate}
                            endDate={returnDate}
                            minDate={departureDate || today}
                            monthsShown={2}
                            calendarClassName="custom-datepicker"
                            placeholderText="Return: mm/dd/yyyy"
                            customInput={
                                <input
                                    style={styles.datepicker}
                                    placeholder="Return Date"
                                />
                            }
                        />
                    )}

                    <Button sx={styles.searchButton}>
                        Search
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Flight