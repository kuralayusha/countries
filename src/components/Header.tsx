type headerProps = {
  setTheme: (theme: string) => void
  theme: string
}

function Header({ setTheme, theme }: headerProps) {
  function handleThemeChange() {
    // This function is called when the user clicks the theme toggle button in the header component (see the return statement below)
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <nav>
      <p>Where in the world?</p>
      <p onClick={handleThemeChange}>Dark Mode</p>
    </nav>
  )
}

export default Header
