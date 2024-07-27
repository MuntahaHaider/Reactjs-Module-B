import * as React from 'react';
import { Grid, Typography, Link, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

export default function Footer() {
  return (
    <footer style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={2}>
        
        <Grid item xs={12} sm={4}>
          <img src="./src/assets/logo.png" alt="Company Logo" style={{ maxWidth: '80%' }} />
        </Grid>

        <Grid sx={{ color: "#006838" }} item xs={12} sm={4}>
          <Typography variant="h6">Company</Typography>
          <List sx={{ padding: 0 }}>
            <ListItem sx={{ padding: '4px 0' }}>
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem sx={{ padding: '4px 0' }}>
              <ListItemText primary="Careers" />
            </ListItem>
            <ListItem sx={{ padding: '4px 0' }}>
              <ListItemText primary="Press" />
            </ListItem>
            <ListItem sx={{ padding: '4px 0' }}>
              <ListItemText primary="Privacy Policy" />
            </ListItem>
          </List>
        </Grid>

        <Grid sx={{ color: "#006838" }} item xs={12} sm={4}>
          <Typography variant="h6">Contact</Typography>
          <List sx={{ padding: 0 }}>
            <ListItem sx={{ padding: '4px 0' }}>
              <ListItemText primary="Email: contact@jawanpakistan.com" />
            </ListItem>
            <ListItem sx={{ padding: '4px 0' }}>
              <ListItemText primary="Phone: +123 456 7890" />
            </ListItem>
            <ListItem sx={{ padding: '4px 0' }}>
              <ListItemText primary="Address: 123 Main St, City" />
            </ListItem>
          </List>
        </Grid>
      </Grid>

      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body2">© 2022 JawanPakistan</Typography>
        <div>
          <IconButton href="https://facebook.com" sx={{ color: "#006838" }}>
            <Facebook />
          </IconButton>
          <IconButton href="https://twitter.com" sx={{ color: "#006838" }}>
            <Twitter />
          </IconButton>
          <IconButton href="https://instagram.com" sx={{ color: "#006838" }}>
            <Instagram />
          </IconButton>
        </div>
      </div>
    </footer>
  );
}
