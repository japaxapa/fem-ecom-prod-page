import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { CartItem, useCart } from "../context/cart.context";
import { DeleteOutlineOutlined as DeleteIcon } from "@mui/icons-material";

export default function CartModal() {
  const { items, handleRemoveItem } = useCart();
  const handleDelete = (item: CartItem) => () => {
    handleRemoveItem(item);
  };

  return (
    <Stack
      sx={{
        width: "100%",
        position: "absolute",
        padding: ".5rem",
        boxSizing: "border-box",
        top: "6vh",
      }}
    >
      <Paper
        sx={{
          minHeight: "30vh",
          width: "calc(100% - 1rem)",
          position: "absolute",
          boxSizing: "border-box",
          borderRadius: ".8rem",
        }}
      >
        <Box sx={{ padding: "1.5rem 1rem" }}>
          <Typography sx={{ fontWeight: "bold" }}>Cart</Typography>
        </Box>
        <Divider />
        {!items.length && (
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            minHeight={"20vh"}
          >
            <Typography sx={{ fontWeight: "bold", color: "gray" }}>
              Your cart is empty.
            </Typography>
          </Box>
        )}
        {items.length > 0 && (
          <Stack>
            {items.map((item) => (
              <Stack
                sx={{ padding: "1.5rem 1rem" }}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                key={item.title}
              >
                <Avatar
                  alt={`${item.title} thumbnail`}
                  src={item.image}
                  variant="rounded"
                  sx={{ width: "3rem", height: "3rem" }}
                />
                <Stack>
                  <Typography>{item.title}</Typography>
                  <Stack direction={"row"}>
                    <Typography>{`$${item.price.toFixed(2)} x ${
                      item.quantity
                    }`}</Typography>
                    <Typography
                      sx={{ fontWeight: "bold", marginLeft: "1rem" }}
                    >{`$${(item.price * item.quantity).toFixed(
                      2
                    )}`}</Typography>
                  </Stack>
                </Stack>
                <IconButton onClick={handleDelete(item)}>
                  <DeleteIcon />
                </IconButton>
              </Stack>
            ))}
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
                marginTop: "1rem",
                width: "calc(100% - 2rem)",
                marginX: "1rem",
              }}
              onClick={console.log("checkout")}
            >
              Checkout
            </Box>
          </Stack>
        )}
      </Paper>
    </Stack>
  );
}
