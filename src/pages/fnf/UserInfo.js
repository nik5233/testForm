import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
// import ButtonBase from '@mui/material/ButtonBase';
import Stack from '@mui/material/Stack';


export default function UserInfo() {
    // function stringToColor(string) {
    //     let hash = 0;
    //     let i;

    //     /* eslint-disable no-bitwise */
    //     for (i = 0; i < string.length; i += 1) {
    //         hash = string.charCodeAt(i) + ((hash << 5) - hash);
    //     }

    //     let color = '#';

    //     for (i = 0; i < 3; i += 1) {
    //         const value = (hash >> (i * 8)) & 0xff;
    //         color += `00${value.toString(16)}`.slice(-2);
    //     }
    //     /* eslint-enable no-bitwise */

    //     return color;
    // }

    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: '#2d92f7',
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    return (
        <Paper
            sx={{
                p: 2,
                // margin: 'auto',
                // maxWidth: 500,
                flexGrow: 1,
                boxShadow: 'none',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={1.7}>
                    <div style={{textAlign: 'center'}}>
                        <span style={{color: '#656565'}}>ID </span><br /> <b>12</b>
                    </div>
                </Grid>
                <Grid item xs={1.7}>
                    <div>
                        <Stack direction="row" spacing={2}>
                            <Avatar {...stringAvatar('Nikhil Alakri')} />
                            <span><span style={{color: '#656565'}}>Employee Name </span><br /> <b>Nikhil Alakri</b></span>
                        </Stack>
                    </div>
                </Grid>
                <Grid item xs={1.7}>
                    <div>
                        <span style={{color: '#656565'}}>Department </span><br /> <b>Design</b>
                    </div>
                </Grid>
                <Grid item xs={1.7}>
                    <div>
                        <span style={{color: '#656565'}}>Joining Date </span><br /> <b>1 Jan 2021</b>
                    </div>                    
                </Grid>
                <Grid item xs={1.7}>
                    <div>
                        <span style={{color: '#656565'}}>Probation End Date </span><br /> <b>12 Jan 2022</b>
                    </div>                    
                </Grid>
                <Grid item xs={1.7}>
                    <div>
                        <span style={{color: '#656565'}}>Employee Type </span><br /> <b>Full Time</b>
                    </div>                    
                </Grid>
                <Grid item xs={1.7}>
                    <div>
                        <span style={{color: '#656565'}}>Notice Priod </span><br /> <b>60 Days</b>
                    </div>                    
                </Grid>
            </Grid>
        </Paper>
    );
}
