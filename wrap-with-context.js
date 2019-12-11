const React = require("react")
const ThemeProvider = require('./src/components/theme-provider').default

exports.wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      {element}
    </ThemeProvider>
  )
}
