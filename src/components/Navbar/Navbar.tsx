import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";

interface Props {
  onFavoritesClick?: () => void
}

function Navbar ({ onFavoritesClick = () => {} }: Props) {
  return (
    <AppBar position="sticky">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        News
      </Typography>
      <Button color="secondary" variant='contained' onClick={onFavoritesClick}>Favorites</Button>
    </Toolbar>
  </AppBar>
  )
}

export default Navbar