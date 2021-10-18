import { Link } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flex: 1 }}
        >
          MyCourseCalendar
        </Typography>
        <IconButton component={Link} to="/course-editor">
          <AddIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
