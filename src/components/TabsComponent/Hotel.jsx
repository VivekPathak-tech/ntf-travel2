import React, { useState } from 'react'
import { Box, Button, Menu, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const styles = {
    dateInput: {
        width: "205px",
        height: "40px",
        fontSize: "0.875rem",
        backgroundColor: "white",
        color: "black",
        borderRadius: "8px",
        padding: "8px",
        "&:focus": {
            borderColor: "transparent",
            outline: "none",
        },
    },
    searchButton: {
        backgroundColor: "#0056b3",
        color: "white",
        padding: "8px 16px",
        borderRadius: "8px",
        height: "40px",
        "&:hover": {
            backgroundColor: "#004399",
        },
    },
    travelerCounter: {
        display: "flex",
        flexDirection: "column",
        padding: "12px",
        borderRadius: "10px",
        width: "300px",
        backgroundColor: "transparent",
        border: "none",
    },
    travelerRow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "6px",
    },
    travelerDetails: {
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        fontSize: "0.9rem",
    },
    counterButton: {
        background: "linear-gradient(90deg, #f39c12 0%, #e74c3c 100%)",
        color: "#fff",
        border: "none",
        padding: "6px 10px",
        borderRadius: "6px",
        fontSize: "0.875rem",
        cursor: "pointer",
        "&:hover": {
            background: "linear-gradient(90deg, #e74c3c 0%, #f39c12 100%)",
        },
    },
    travelerCount: {
        fontSize: "1rem",
        fontWeight: "bold",
        margin: "0 10px",
    },
    addRoomButton: {
        backgroundColor: "#25256B",
        color: "#fff",
        width: "140px",
        padding: "6px 10px",
        borderRadius: "8px",
        fontSize: "0.85rem",
        cursor: "pointer",
        border: "none",
        textAlign: "center",
        marginTop: "12px",
        "&:hover": {
            backgroundColor: "#F9B545",
        },
        transition: "background-color 0.4s ease",
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
};

function Hotel() {
    const [travelerAnchorEl, setTravelerAnchorEl] = useState(null);
    const [rooms, setRooms] = useState([{ id: 1, adults: 2, children: 0 }]);
    const today = new Date();
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);

    const openTravelerMenu = (event) => {
        setTravelerAnchorEl(event.currentTarget);
    };

    const closeTravelerMenu = () => {
        setTravelerAnchorEl(null);
    };

    const addRoom = () => {
        setRooms([...rooms, { id: rooms.length + 1, adults: 1, children: 0 }]);
    };

    const deleteRoom = (id) => {
        setRooms(rooms.filter((room) => room.id !== id));
    };

    const updateCount = (roomId, type, increment) => {
        setRooms((prevRooms) =>
            prevRooms.map((room) =>
                room.id === roomId
                    ? { ...room, [type]: Math.max(0, room[type] + increment) }
                    : room
            )
        );
    };

    const totalTravelers = rooms.reduce(
        (total, room) => total + room.adults + room.children,
        0
    );

return (
    <div className='flex justify-around gap-5'>
        <input className='text-black w-[200px] rounded-md transition-colors duration-300 ease-in-out border-2 pl-3 focus:border-[3px] focus:outline-none border-white hover:border-gray-300 focus:border-customOrange h-10 bg-white ' placeholder='Search City' type="text" />

        <Button
            variant="outlined"
            onClick={openTravelerMenu}
            sx={{ ...styles.dateInput, textAlign: "left", padding: "0 10px" }}
        >
            {totalTravelers} Traveler(s)
        </Button>
        <Menu
            anchorEl={travelerAnchorEl}
            open={Boolean(travelerAnchorEl)}
            onClose={closeTravelerMenu}
        >
            <Box sx={styles.travelerCounter}>
                <Typography variant="h5" fontWeight="600" fontFamily='"Playfair Display", serif' marginBottom="12px"> {/* Reduced margin-bottom */}
                    Rooms and Guests
                </Typography>
                {rooms.map((room, index) => (
                    <Box key={room.id} sx={{ marginBottom: "12px" }}> {/* Reduced margin-bottom */}
                        <Typography variant="body1" fontWeight="700" marginBottom="8px"> {/* Reduced margin-bottom */}
                            Room {index + 1}{" "}
                            {rooms.length > 1 && (
                                <DeleteIcon
                                    sx={{ color: "red", cursor: "pointer" }}
                                    onClick={() => deleteRoom(room.id)}
                                />
                            )}
                        </Typography>
                        <Box sx={styles.travelerRow}>
                            <Box sx={styles.travelerDetails}>
                                <Typography variant="body1">Adults (12+ years)</Typography>
                            </Box>
                            <Box>
                                <button
                                    onClick={() => updateCount(room.id, "adults", -1)}
                                    style={styles.counterButton}
                                >
                                    -
                                </button>
                                <span style={styles.travelerCount}>{room.adults}</span>
                                <button
                                    onClick={() => updateCount(room.id, "adults", 1)}
                                    style={styles.counterButton}
                                >
                                    +
                                </button>
                            </Box>
                        </Box>
                        <Box sx={styles.travelerRow}>
                            <Box sx={styles.travelerDetails}>
                                <Typography variant="body1">Children (2-12 years)</Typography>
                            </Box>
                            <Box>
                                <button
                                    onClick={() => updateCount(room.id, "children", -1)}
                                    style={styles.counterButton}
                                >
                                    -
                                </button>
                                <span style={styles.travelerCount}>{room.children}</span>
                                <button
                                    onClick={() => updateCount(room.id, "children", 1)}
                                    style={styles.counterButton}
                                >
                                    +
                                </button>
                            </Box>
                        </Box>
                    </Box>
                ))}
                <Button sx={styles.addRoomButton} onClick={addRoom}>
                    Add Room
                </Button>
            </Box>
        </Menu>

        <div className='flex gap-5'>
            <DatePicker
                selected={checkIn}
                onChange={(date) => setCheckIn(date)}
                selectsStart
                minDate={today}
                startDate={checkIn}
                monthsShown={2}
                calendarClassName="custom-datepicker"
                placeholderText="Check-In: mm/dd/yyyy"
                customInput={
                    <input
                        style={styles.datepicker}
                        placeholder="Check In"
                    />
                }
            />

            <DatePicker
                selected={checkOut}
                onChange={(date) => setCheckOut(date)}
                selectsEnd
                startDate={checkIn}
                endDate={checkOut}
                minDate={checkIn || today}
                monthsShown={2}
                calendarClassName="custom-datepicker"
                placeholderText="Check-Out: mm/dd/yyyy"
                customInput={
                    <input
                        style={styles.datepicker}
                        placeholder="Check Out Date"
                    />
                }
            />

            <Button sx={styles.searchButton}>
                Search
            </Button>
        </div>
    </div>
)
}

export default Hotel