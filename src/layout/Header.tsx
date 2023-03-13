import { AppBar, Toolbar } from "@mui/material";

export function Header() {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <img
          src='logo.png'
          style={{ height: 50 }}
        />
      </Toolbar>
    </AppBar>
  )
}
