import { Button } from "@chakra-ui/react"
import { RiArrowRightLine } from "react-icons/ri"

function App() {
 

  return (
    <div>
      <h1>App</h1>
      <Button variant="outline">Outline</Button>
      <Button colorPalette="teal" variant="outline">
        Call us <RiArrowRightLine />
      </Button>
    </div>
  )
}

export default App
