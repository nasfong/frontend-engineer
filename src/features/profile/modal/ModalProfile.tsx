import { Box, Modal, Paper, Typography } from '@mui/material'
import { Error } from '../../../components'
import { ModalProfileProps } from '../components/profile.type'
import { FollowItem as Item } from './FollowItem'
import { LoadingFollow as Loading } from './LoadingFollow'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 300,
  minHeight: 50,
  maxHeight: 400,
  borderRadius: 3,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 1,
  overflow: 'auto',
}

export const ModalProfile = ({ follows, showModal, loading, error, handleClose, pageRef }: ModalProfileProps) => {

  if (error) return <Error msg={error.message} />

  return (
    <Modal
      open={showModal}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Paper sx={style}>
        {follows.map((follow, index) => {
          return follows.length === index + 1 ? (
            <Item follow={follow} key={follow.id} pageRef={pageRef} />
          ) : (
            <Item follow={follow} key={follow.id} />
          )
        }
        )}
        {loading && <Loading />}
      </Paper>
    </Modal>
  )
}
