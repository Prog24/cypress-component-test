import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'

type CustomDialogProps = {
  open: boolean
  onClose: () => void
  onSubmit: () => void
  title: string
}

const CustomDialog = (props: CustomDialogProps) => {
  const { open, onSubmit, onClose, title } = props
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle data-test-id='title'>{title}</DialogTitle>
      <DialogContent data-test-id='content'>
        Hogehoge
      </DialogContent>
      <DialogActions>
        <Button data-test-id='cancel' onClick={onClose}>キャンセル</Button>
        <Button data-test-id='submit' onClick={onSubmit}>送信</Button>
      </DialogActions>
    </Dialog>
  )
}

export default CustomDialog
