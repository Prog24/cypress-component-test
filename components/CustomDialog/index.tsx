import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

type CustomDialogProps = {
  open: boolean
  onClose: () => void
  onSubmit: () => void
  title: string
}

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  color: theme.palette.primary.main
}))

const CustomDialog = (props: CustomDialogProps) => {
  const { open, onSubmit, onClose, title } = props
  return (
    <Dialog data-test-id='dialog' open={open} onClose={onClose}>
      <StyledDialogTitle data-test-id='title'>{title}</StyledDialogTitle>
      <DialogContent data-test-id='content'>
        <TextField data-test-id='text-field' />
      </DialogContent>
      <DialogActions>
        <Button data-test-id='cancel' onClick={onClose}>キャンセル</Button>
        <Button data-test-id='submit' onClick={onSubmit}>送信</Button>
      </DialogActions>
    </Dialog>
  )
}

export default CustomDialog
