import { Box, Modal, Paper, Typography } from '@mui/material'
import { Error } from '../../../components'
import { ModalProfileProps } from '../components/profile.type'
import { FollowItem as Item } from './FollowItem'
import { LoadingFollow as Loading } from './LoadingFollow'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  borderRadius: 3,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 1,
}

export const ModalProfile = ({ follows, showModal, loading, error, handleClose, pageRef }: ModalProfileProps) => {

  if (error) return <Error msg={error.message} />
  console.log(follows)
  return (
    <Modal
      open={showModal}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Paper style={{ maxHeight: 400, overflow: 'auto' }}>
          {follows.map((follow, index) => {
            if (follows.length === index + 1) {
              return (
                <Item follow={follow} key={follow.id} pageRef={pageRef} />
              )
            } else {
              return (
                <Item follow={follow} key={follow.id} />
              )
            }
          }
          )}
        </Paper>
        {loading && <Loading />}
      </Box>
    </Modal>
  )
}
