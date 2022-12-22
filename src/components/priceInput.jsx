import { NumberInput, NumberInputField } from "@chakra-ui/react"
import { useState } from "react"


const PriceInput = () => {
    const format = (val) => `$` + val
    const parse = (val) => val.replace(/^\$/, '')
  
    const [value, setValue] = useState("0")
  
    return (
      <NumberInput
        onChange={(valueString) => setValue(parse(valueString))}
        value={format(value)}
        pr={2}
        placeholder={0}
      >
        <NumberInputField borderRadius={30} py={6} /> 
      </NumberInput>
    )
  }

  export default PriceInput;