import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import LogoutIcon from '@mui/icons-material/Logout';
import { getAuth, signOut } from "firebase/auth";
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { auth } from '../../Config/firebase';
import { Tooltip } from '@mui/material';

const drawerWidth = 300;

export default function Sidebar() {
  const [open, setOpen] = React.useState({});
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (segment) => {
    setOpen((prev) => ({
      ...prev,
      [segment]: !prev[segment],
    }));
  };

  const handleLogout = () => {
    // const auth = getAuth();
   signOut(auth)
   .then(() => {
    localStorage.clear('UserID')
  alert('user signOut.....')
  navigate('/login')
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
  };

  const navigate = useNavigate();

  const drawerContent = (
    <Box sx={{ overflow: 'auto', color: '#008000' ,marginTop:8, }}>
      <List>
        {/* Students Section */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleClick('students')}>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Students" />
            {open['students'] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        {open['students'] && (
          <>
            <ListItem disablePadding>
              <NavLink to="/student/student-registration" style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton>
                  <ListItemText sx={{ marginLeft: 7 }} primary="Student Registration" />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding>
              <NavLink to="/student/student-list" style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton>
                  <ListItemText sx={{ marginLeft: 7 }} primary="Students List" />
                </ListItemButton>
              </NavLink>
            </ListItem>
          </>
        )}
        <Divider />

        {/* Teachers Section */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleClick('teachers')}>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Teachers" />
            {open['teachers'] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        {open['teachers'] && (
          <>
            <ListItem disablePadding>
              <NavLink to="/teachers/teacher-registration" style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton>
                  <ListItemText sx={{ marginLeft: 7 }} primary="Teacher Registration" />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding>
              <NavLink to="/teachers/teacher-list" style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton>
                  <ListItemText sx={{ marginLeft: 7 }} primary="Teachers List" />
                </ListItemButton>
              </NavLink>
            </ListItem>
          </>
        )}
        <Divider />

        {/* Subjects Section */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleClick('subjects')}>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Subjects" />
            {open['subjects'] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        {open['subjects'] && (
          <>
            <ListItem disablePadding>
              <NavLink to="/subjects/subject-add" style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton>
                  <ListItemText sx={{ marginLeft: 7 }} primary="Subject Add" />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding>
              <NavLink to="/subjects/subject-list" style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton>
                  <ListItemText sx={{ marginLeft: 7 }} primary="Subjects List" />
                </ListItemButton>
              </NavLink>
            </ListItem>
          </>
        )}
        <Divider />

        {/* Syllabus Section */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleClick('syllabus')}>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Syllabus" />
            {open['syllabus'] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        {open['syllabus'] && (
          <>
            <ListItem disablePadding>
              <NavLink to="/syllabus/syllabus-form" style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton>
                  <ListItemText sx={{ marginLeft: 7 }} primary="Syllabus Add" />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding>
              <NavLink to="/syllabus/syllabus-list" style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton>
                  <ListItemText sx={{ marginLeft: 7 }} primary="Syllabus List" />
                </ListItemButton>
              </NavLink>
            </ListItem>
          </>
        )}
        <Divider />

        {/* School Section */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleClick('school')}>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="School" />
            {open['school'] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        {open['school'] && (
          <>
            <ListItem disablePadding>
              <NavLink to="/student/student-registration" style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton>
                  <ListItemText sx={{ marginLeft: 7 }} primary="Student Registration" />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding>
              <NavLink to="/teachers/teacher-registration" style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton>
                  <ListItemText sx={{ marginLeft: 7 }} primary="Teacher Registration" />
                </ListItemButton>
              </NavLink>
            </ListItem>
          </>
        )}
        <Divider />

        {/* Class Section */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleClick('class')}>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Class" />
            {open['class'] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        {open['class'] && (
          <>
            <ListItem disablePadding>
              <NavLink to="/class/class-form" style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton>
                  <ListItemText sx={{ marginLeft: 7 }} primary="Class Form" />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding>
              <NavLink to="/class/class-list" style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton>
                  <ListItemText sx={{ marginLeft: 7 }} primary="Class List" />
                </ListItemButton>
              </NavLink>
            </ListItem>
          </>
        )}
        <Divider />

        {/* Fees Section */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleClick('fees')}>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Fees" />
            {open['fees'] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        {open['fees'] && (
          <>
            <ListItem disablePadding>
              <NavLink to="/fees/fee-Structuer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton>
                  <ListItemText sx={{ marginLeft: 7 }} primary="Fee Structuer" />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding>
              <NavLink to="/fees/fee-voucher" style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton>
                  <ListItemText sx={{ marginLeft: 7 }} primary="Fees Voucher" />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding>
              <NavLink to="/fees/fee-submission" style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton>
                  <ListItemText sx={{ marginLeft: 7 }} primary="Fees Submission" />
                </ListItemButton>
              </NavLink>
            </ListItem>

          </>
        )}
        <Divider />

        {/* Admission Section */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleClick('admission')}>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Admission" />
            {open['admission'] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        {open['admission'] && (
          <>
            <ListItem disablePadding>
              <NavLink to="/admission/admission-form" style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton>
                  <ListItemText sx={{ marginLeft: 7 }} primary="Admission Form" />
                </ListItemButton>
              </NavLink>
            </ListItem>
          </>
        )}
        <Divider />

        {/* Exam Section */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleClick('exam')}>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Exam" />
            {open['exam'] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        {open['exam'] && (
          <>
            <ListItem disablePadding>
              <NavLink to="/exam/exam-schedule" style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton>
                  <ListItemText sx={{ marginLeft: 7 }} primary="Exam Schedule" />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding>
              <NavLink to="/exam/exam-result" style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton>
                  <ListItemText sx={{ marginLeft: 7 }} primary="Exam Results" />
                </ListItemButton>
              </NavLink>
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', color: '#008000' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ backgroundColor: '#008000', justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <SchoolIcon style={{ fontSize: 30, marginRight: 20 }} /> Learning Management System
          </Typography>
          <IconButton
            color="inherit"
            aria-label="logout"
            edge="end"
            // onClick={handleLogout}
            sx={{ ml: 2 }}
          >
            <Tooltip title="SignOut">
  <LogoutIcon 
    onClick={handleLogout} 
    style={{ fontSize: 30, cursor: 'pointer' }} 
  />
</Tooltip>
            {/* <LogoutIcon  onClick={handleLogout}  style={{ fontSize: 30 , cursor:'pointer'}} title="Logout" /> */}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawerContent}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}