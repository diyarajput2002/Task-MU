import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

const Navbar = () => (
  <Box sx={{ display: "flex", justifyContent: "center" , alignItems: "center", p: 3, gap: 2 }}>
    <Button component={Link} to="/" variant="contained">
      Home
    </Button>
    <Button component={Link} to="/about" variant="contained">
      About
    </Button>
    <Button component={Link} to="/blog" variant="contained">
      Blog
    </Button>
    <Button component={Link} to="/contact" variant="contained">
      Contact
    </Button>
  </Box>
);

export default Navbar;
