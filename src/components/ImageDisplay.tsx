import { Avatar, Box, IconButton, Stack } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";

enum PicAction {
  prev = "prev",
  next = "next",
}

interface ImageDisplayProps {
  lgUp?: boolean;
}

export default function ImageDisplay({ lgUp }: ImageDisplayProps) {
  const [pic, setPic] = useState(1);

  const handlePicChange = (action: PicAction) => () => {
    if (action === PicAction.prev) {
      if (pic === 1) {
        return;
      }
      setPic((prev) => prev - 1);
      return;
    }

    if (pic === 4) {
      return;
    }
    setPic((prev) => prev + 1);
  };

  const MobileImage = () => {
    return (
      <Stack
        direction="row"
        position="relative"
        width={"100%"}
      >
        <IconButton
          sx={{ position: "absolute", top: "14vh" }}
          onClick={handlePicChange(PicAction.prev)}
        >
          <Avatar sx={{ bgcolor: "white" }}>
            <ChevronLeftIcon color="neutralBlack" />
          </Avatar>
        </IconButton>
        <Box
          component="img"
          alt="Product image"
          src={`/images/image-product-${pic}.jpg`}
          sx={{ height: "35vh", objectFit: "cover" }}
          flexGrow={1}
        />
        <IconButton
          sx={{ position: "absolute", right: 0, top: "14vh" }}
          onClick={handlePicChange(PicAction.next)}
        >
          <Avatar sx={{ bgcolor: "white" }}>
            <ChevronRightIcon color="neutralBlack" />
          </Avatar>
        </IconButton>
      </Stack>
    );
  };

  const DesktopImage = () => {
    return (
      <Stack sx={{ marginRight: "5rem" }}>
        <Box
          component={"img"}
          src={`/images/image-product-${pic}.jpg`}
          alt="Product image"
          sx={{
            width: "35vw",
            objectFit: "cover",
            borderRadius: "1rem",
            maxWidth: "35rem",
          }}
          flexGrow={1}
        />
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ marginTop: "2rem" }}
        >
          {[1, 2, 3, 4].map((value) => (
            <Box
              key={value}
              component={"button"}
              onClick={() => setPic(value)}
              sx={{
                width: "8vw",
                maxWidth: "8rem",
                borderRadius: ".5rem",
                border: "none",
                bgcolor: "white",
                position: "relative",
                overflow: "hidden",
                "&:hover": { cursor: "pointer" },
              }}
            >
              <Avatar
                src={`/images/image-product-${value}-thumbnail.jpg`}
                alt={`Product ${pic} image`}
                variant="rounded"
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: ".5rem",
                  border: `${pic === value ? "2px solid darkOrange" : "none"}`,
                  boxSizing: "border-box",
                }}
              />
              {pic === value && (
                <Box
                  position={"absolute"}
                  width={"100%"}
                  height={"100%"}
                  bgcolor={"rgba(255,255,255,0.4)"}
                  top={0}
                  sx={{
                    borderRadius: ".5rem",
                  }}
                />
              )}
            </Box>
          ))}
        </Stack>
      </Stack>
    );
  };

  const render = () => {
    console.log(lgUp);

    return lgUp ? <DesktopImage /> : <MobileImage />;
  };

  return render();
}
