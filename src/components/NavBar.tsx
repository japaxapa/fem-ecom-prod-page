import {
  AppBar,
  Avatar,
  Badge,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import "./NavBar.styles.css";

export default function NavBar() {
  return (
    <AppBar
      position="static"
      color="white"
      elevation={0}
    >
      <Toolbar>
        <Stack
          direction="row"
          justifyContent="space-between"
          width="100%"
        >
          <Stack
            direction="row"
            alignItems="center"
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="toggle menu"
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h5"
              sx={{
                fontWeight: "550",
                fontSize: "1.6rem",
                letterSpacing: "-1px",
                textAlign: "center",
                marginBottom: ".3rem",
                marginLeft: ".5rem",
                fontFamily: `"Outfit", sans-serif`,
                transform: "scale(1.2 ,1)",
              }}
            >
              sneakers
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
          >
            <Badge
              badgeContent={1}
              color="primaryOrange"
            >
              <ShoppingCartOutlinedIcon />
            </Badge>
            <Avatar
              src="/images/image-avatar.png"
              sx={{ height: "1.5rem", width: "1.5rem", marginLeft: "1rem" }}
            />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
