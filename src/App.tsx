import * as React from "react"
import { ThemeProvider } from "@/context/themeprovider"
function App() {

  return (<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">  </ThemeProvider>
  )
}

export default App
