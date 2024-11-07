import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { menu__items } from "../data/constants";

interface DrawerMenuProps {
  open: boolean;
  onClick: (newOpen: boolean) => () => void;
}

export default function DrawerMenu({ open, onClick }: DrawerMenuProps) {
  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={onClick(false)}
    >
      <List>
        <ListItemButton
          sx={{ marginBottom: "2rem" }}
          onClick={onClick(false)}
        >
          <ListItemIcon>
            <CloseIcon />
          </ListItemIcon>
        </ListItemButton>
        {menu__items.map((text, index) => (
          <ListItem
            key={text}
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      open={open}
      onClose={onClick(false)}
    >
      {DrawerList}
    </Drawer>
  );
}
