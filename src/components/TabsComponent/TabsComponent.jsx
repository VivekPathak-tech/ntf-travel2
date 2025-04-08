import React, { useState } from 'react';
import { Tabs, Tab, Box, styled } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faBuilding } from '@fortawesome/free-solid-svg-icons';
import Hotel from './Hotel';
import Flight from './Flight';

// Styled component
const StyledTabs = styled(Tabs)(({ theme }) => ({
  color: '#fff',
  '& .MuiTab-root': {
    // fontWeight: 'bold',
    fontSize: '1.5rem',
    fontFamily: '"Playfair Display", serif',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
  },
  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent'
  }
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  '&.Mui-selected': {
    backgroundColor: "#25256B",
    color: theme.palette.common.white,
  },
  '&.Mui-focusVisible': {
    backgroundColor: "#25256B"
  }
}));

const PanelContainer = styled(Box)({
  backgroundColor: '#25256B',
  paddingBottom: '20px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  width: '1100px',
  maxWidth: '1200px',
  borderRadius: '0px 0px 12px 12px',
});

const TabPanel = ({ children, value, index }) => {
  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const TabsComponent = () => {

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      width: '100%',
      typography: 'body1',
      position: 'absolute',
      top: 350,
      left: 150,
      zIndex: 1000
    }}>
      <StyledTabs value={value} onChange={handleChange}>
        <StyledTab
          label={
            <Box display="flex" alignItems="center" gap={1}>
              <FontAwesomeIcon icon={faPlane} className="text-customOrange" />
              <span>Flight</span>
            </Box>
          }
        />
        <StyledTab label={
          <Box display="flex" alignItems="center" gap={1}>
            <FontAwesomeIcon icon={faBuilding} className="text-customOrange" />
            <span>Hotel</span>
          </Box>
        } />
        {/* <StyledTab label="Sightseeing" />
        <StyledTab label="Bus" /> */}
      </StyledTabs>

      <PanelContainer>

        <TabPanel value={value} index={0}>
          <Flight />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Hotel />
        </TabPanel>

        <TabPanel value={value} index={2}>
          Content for Sightseeing Tab
        </TabPanel>

        <TabPanel value={value} index={3}>
          Content for Bus Tab
        </TabPanel>

      </PanelContainer>
    </Box>
  );
};

export default TabsComponent;