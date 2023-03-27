import { useParams } from 'react-router-dom'
import { Error } from '../components/Error'
import {
  ProfileLoading as Loading,
  ProfileItem as Item,
  ProfileModal as Modal,
  ProfileType,
} from '../features/profile'
import { useFollow } from '../features/profile/hooks/useFollow'
import { useFetch } from '../hooks/useFetch'

const page_api = '/users'

function Profile() {
  const { id } = useParams()
  const { data, loading, error } = useFetch<ProfileType>(page_api, id)

  const { handleFollow, ...rest } = useFollow()

  if (error) return <Error msg={error.message} />

  return (
    <>
      {loading ? <Loading /> : <Item user={data} handleFollow={handleFollow} />}
      <Modal {...rest} />
    </>
  )
}

export default Profile