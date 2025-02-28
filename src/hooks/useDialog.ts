import { useState } from  'react'

const useDialog = () => {
  const [open, setOpen] = useState(false)

  const hide = () => setOpen(false)
  const show = () => setOpen(true)

  return {
    open,
    hide,
    show
  }
}

export default useDialog