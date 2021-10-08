import { useState } from "react"

function usePoperver() {
  const [activePopover, setActivePopover] = useState(false)

  const showPopover = () => setActivePopover(true)
  const hidePopover = () => setActivePopover(false)
  return {
    activePopover,
    showPopover,
    hidePopover
  }
}

export default usePoperver
