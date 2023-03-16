import { Box } from '@mui/material'
import { Error } from '../components/Error'
import { SearchField } from '../components/SearchField'
import {
  LoadingUsers as Loading,
  UsersItem as Item,
  UsersProps,
  useSearch
} from '../features/users'
import { useFetch } from '../hooks/useFetch'

const page_api = '/users'

const Users = () => {

  const { data, loading, error } = useFetch<UsersProps[]>(page_api)
  const { search, setSearch } = useSearch(data)
  
  if (error) return <Error msg={error.message} />

  return (
    <>
      <SearchField onChange={(e) => setSearch(e.target.value)} />
      {loading ? (
        <Loading />
      ) : (
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='center'
          alignItems='center'
          flexWrap='wrap'
          gap={2}
        >
          {/* 20 Users only */}
          {search?.slice(0, 20).map(user => <Item key={user.id} user={user} />)}
        </Box>
      )}
    </>
  )
}

export default Users