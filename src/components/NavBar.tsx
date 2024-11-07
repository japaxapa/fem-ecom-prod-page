import {
  AppBar,
  Avatar,
  Badge,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import DrawerMenu from "./DrawerMenu";
import { useCart } from "../context/cart.context";
import { menu__items } from "../data/constants";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const lgUp = useMediaQuery(theme.breakpoints.up("lg"));

  const { isCartOpen, handleCartOpen, cartQuantity } = useCart();

  const handleCartClick = () => {
    handleCartOpen(!isCartOpen);
  };

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
          sx={{
            paddingX: `${lgUp ? "10vw" : ""}`,
            paddingY: `${lgUp ? "2rem" : ""}`,
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
          >
            {!lgUp && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="toggle menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            )}

            <Typography
              variant="h5"
              sx={{
                fontWeight: "550",
                fontSize: `${lgUp ? "2rem" : "1.6rem"}`,
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

            {lgUp && (
              <Stack
                direction={"row"}
                spacing={1}
                sx={{ marginLeft: "5vw" }}
              >
                {menu__items.map((item) => (
                  <Button
                    color="inherit"
                    key={item}
                    sx={{
                      "&:hover": { cursor: "pointer" },
                      color: "gray",
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Stack>
            )}
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
          >
            <Badge
              badgeContent={cartQuantity}
              color="primaryOrange"
            >
              <IconButton
                sx={{ padding: "0" }}
                onClick={handleCartClick}
              >
                <ShoppingCartOutlinedIcon />
              </IconButton>
            </Badge>
            <Avatar
              src="/images/image-avatar.png"
              sx={{
                height: lgUp ? "3rem" : "1.5rem",
                width: lgUp ? "3rem" : "1.5rem",
                marginLeft: lgUp ? "3rem" : "1rem",
                "&:hover": { cursor: "pointer" },
              }}
            />
          </Stack>
        </Stack>
        <DrawerMenu
          open={open}
          onClick={toggleDrawer}
        />
      </Toolbar>
    </AppBar>
  );
}
