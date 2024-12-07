
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={toggleSidebar}
      sx={{
        "& .MuiDrawer-paper": {
          width: 250,
          backgroundColor: "#3a6fa4",
        },
      }}
    >
      <div className="flex justify-end p-4 text-white">
        <IconButton onClick={toggleSidebar} color="inherit">
          <CloseIcon />
        </IconButton>
      </div>

      <List>
        <ListItem button onClick={toggleSidebar}>
          <Link to="/" className="text-white">
            <ListItemText primary="Home" />
          </Link>
        </ListItem>
        <ListItem button onClick={toggleSidebar}>
          <Link to="/about" className="text-white">
            <ListItemText primary="About" />
          </Link>
        </ListItem>
        <ListItem button onClick={toggleSidebar}>
          <Link to="/blog" className="text-white">
            <ListItemText primary="Blog" />
          </Link>
        </ListItem>
        <ListItem button onClick={toggleSidebar}>
          <Link to="/contact" className="text-white">
            <ListItemText primary="Contact" />
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
