import { Button, Dialog, DialogActions, DialogContent, DialogProps, DialogTitle } from "@mui/material";

interface Props {
  children?: React.ReactNode
  open: boolean,
  hide: () => void,
  onClose?: () => void,
  title?: string,
  maxWidth?: DialogProps['maxWidth'],
  fullWidth?: boolean
}

function CustomDialog ({ title = '', onClose = () => {} , hide, open, children, maxWidth = "xs", fullWidth = false}: Props) {
  const handleClose = () => {
    onClose()
    hide()
  }
  
  return (
    <Dialog
    open={open}
    onClose={handleClose}
    maxWidth={maxWidth}
    fullWidth={fullWidth}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    >
    <DialogTitle id="alert-dialog-title">
      {title}
    </DialogTitle>
    <DialogContent>
      { children }
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} autoFocus>
        Aceptar
      </Button>
    </DialogActions>
    </Dialog>
  )
}

export default CustomDialog
