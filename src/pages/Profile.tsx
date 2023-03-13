import { useParams } from 'react-router-dom'
import { Error } from '../components/Error'
import { LoadingPrfile, ProfileItem, ProfileProps, } from '../features/profile'
import { useFetch } from '../hooks/useFetch'

const page_api = '/users/'

const Profile = () => {
  const { id } = useParams()
  const { data, loading, error } = useFetch<ProfileProps>(page_api, id)

  if (error) return <Error msg={error.message} />

  return loading ? <LoadingPrfile /> : <ProfileItem user={data} />
}

export default Profile