import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ImageDisplay from "./ImageDisplay";
import { Remove as RemoveIcon, Add as AddIcon } from "@mui/icons-material";
import { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { CartItem, useCart } from "../context/cart.context";

enum QuantityAction {
  subtract = "subtract",
  add = "add",
}

export default function ProductPage() {
  const [quantity, setQuantity] = useState(0);
  const handleQuantityChange = (action: QuantityAction) => () => {
    if (action === QuantityAction.subtract) {
      if (quantity === 0) {
        return;
      }
      setQuantity((prev) => prev - 1);
      return;
    }
    setQuantity((prev) => prev + 1);
  };

  const { handleChangeQuantity } = useCart();

  const handleAddItem = () => {
    const newItem: CartItem = {
      image: "/images/image-product-1-thumbnail.jpg",
      price: 125,
      quantity,
      title: "Fall Limited Edition Sneakers",
    };

    handleChangeQuantity(newItem);
  };

  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Stack
      sx={{ padding: `${lgUp ? "5vh 15vw" : ""}` }}
      direction={lgUp ? "row" : "column"}
      alignItems={"center"}
      justifyContent={lgUp ? "center" : ""}
    >
      <ImageDisplay lgUp={lgUp} />
      <Stack sx={{ padding: "1.5rem", maxWidth: lgUp ? "30rem" : "" }}>
        <Stack>
          <Typography
            variant="body2"
            sx={{ fontWeight: "600" }}
          >
            SNEAKER COMPANY
          </Typography>
          <Typography
            variant={"h5"}
            sx={{
              fontWeight: "bold",
              fontSize: "1.7rem",
              width: "90%",
              marginY: "1rem",
            }}
          >
            Fall Limited Edition Sneakers
          </Typography>
          <Typography sx={{ fontWeight: "300" }}>
            These low-profiels sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </Typography>
        </Stack>

        <Stack
          direction={lgUp ? "column" : "row"}
          justifyContent={"space-between"}
          alignItems={lgUp ? "flex-start" : "center"}
          marginBottom={lgUp ? "2rem" : ""}
        >
          <Stack
            direction={"row"}
            alignItems={"flex-end"}
            sx={{ marginY: lgUp ? "1rem" : "1.5rem" }}
          >
            <Typography
              variant={"h5"}
              sx={{ fontWeight: "bold" }}
            >
              $125.00
            </Typography>
            <Avatar
              variant={"rounded"}
              sx={{
                bgcolor: "black",
                fontSize: ".8rem",
                height: "1.3rem",
                paddingX: ".2rem",
                marginLeft: "1rem",
              }}
            >
              50%
            </Avatar>
          </Stack>

          <Typography
            sx={{
              color: "gray",
              fontWeight: "bold",
              textDecoration: "line-through",
            }}
          >
            $250.00
          </Typography>
        </Stack>

        <Stack direction={lgUp ? "row" : "column"}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{
              bgcolor: "aliceBlue",
              borderRadius: "5px",
              paddingX: lgUp ? ".5rem" : "1rem",
              paddingY: ".3rem",
              flex: lgUp ? 1 / 3 : "",
              marginRight: lgUp ? "1rem" : "",
            }}
          >
            <IconButton
              color={"primaryOrange"}
              onClick={handleQuantityChange(QuantityAction.subtract)}
              sx={{ padding: lgUp ? 0 : "" }}
            >
              <RemoveIcon />
            </IconButton>
            <Typography sx={{ fontWeight: "bold" }}>{quantity}</Typography>
            <IconButton
              color={"primaryOrange"}
              onClick={handleQuantityChange(QuantityAction.add)}
              sx={{ padding: lgUp ? 0 : "" }}
            >
              <AddIcon />
            </IconButton>
          </Stack>

          <Box
            component={"button"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              border: "none",
              bgcolor: "primaryOrange.main",
              borderRadius: ".5rem",
              padding: "1rem",
              fontWeight: "bold",
              marginTop: lgUp ? "" : "1rem",
              boxShadow: lgUp ? "" : "0px 10px 20px 5px rgba(255,125,26,.25)",
              flex: lgUp ? 2 / 3 : "",
              "&:hover": { cursor: "pointer" },
            }}
            onClick={handleAddItem}
          >
            <ShoppingCartOutlinedIcon sx={{ height: "1rem" }} />
            Add to cart
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
