import { Button } from "@chakra-ui/button"
import { Icon } from "@chakra-ui/icon"
import { useState } from "react"
import { IoMail } from "react-icons/io5"

export const CopyButton = ({ text }) => {
  const [_, setIsCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setIsCopied(true)
  }

  return (
    <Button variant="ghost" colorScheme="facebook" leftIcon={<Icon as={IoMail}/>} onClick={copy}>
        { text }
    </Button>
  )
}


