type headerProps = {
  setTheme: (theme: string) => void
  theme: string
}

function Header({ setTheme, theme }: headerProps) {
  function handleThemeChange() {
    // This function is called
    // when the user clicks the theme toggle
    // button in the header component
    // (see the return statement below)
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <header className="header">
      <h1>Where in the world?</h1>
      <p onClick={handleThemeChange}>Dark Mode</p>
    </header>
  )
}

export default Header
