import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Box from '@mui/material/Box';

import FullAndFinal from '../pages/fnf';

const color = {
    primary: {
        light: '#2d92f7',
        main: '#2d92f7',
        dark: '#1c75f3',
        contrastText: '#fff',
    },
    secondary: {
        main: '#df7576',
        light: '#f5d6d6',
        dark: '#d25859',
        contrastText: '#fff',
    },
};

const Tab = styled(TabUnstyled)`
  color: black;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
//   width: 100%;
  padding: 12px 16px;
  margin: 6px 6px 0;
  border: none;
//   border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${color.primary.light};
    color: #fff;
  }

  &:focus {
    color: #fff;
    // border-radius: 3px;
    outline: 2px solid ${color.primary.main};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${color.primary.main};
    color: ${color.primary.contrastText};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
//   width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  color: #000;
//   background-color: red;
//   border-radius: 8px;
//   margin-bottom: 16px;
border-bottom: 2px solid ${color.primary.main};
  display: flex;
//   align-items: center;
//   justify-content: center;
  align-content: space-between;
`;

export default function SubHeader() {
    return (
        <Box sx={{ width: '100%' }} className="px-5">
            <TabsUnstyled defaultValue={2}>
                <TabsList>
                    <Tab>New Jobs Settlement</Tab>
                    <Tab>Employee in Exit process</Tab>
                    <Tab>Full and Final Settlement</Tab>
                </TabsList>
                <TabPanel value={0}>New Jobs Settlement</TabPanel>
                <TabPanel value={1}>Employee in Exit process</TabPanel>
                <TabPanel value={2}>
                    <FullAndFinal />
                </TabPanel>
            </TabsUnstyled>
        </Box>
    );
}

