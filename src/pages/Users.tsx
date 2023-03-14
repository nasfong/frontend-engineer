import { Box } from '@mui/material'
import { Error } from '../components/Error'
import { SearchField } from '../components/SearchField'
import { LoadingUsers, UsersItem, UsersProps, useSearch } from '../features/users'
import { useFetch } from '../hooks/useFetch'

const page_api = '/users'

const Users = () => {

  const { data, loading, error } = useFetch<UsersProps[]>(page_api)
  const { search, setSearch } = useSearch(data)

  if (error) return <Error msg={error.message} />

  return (
    <div>
      <SearchField onChange={(e) => setSearch(e.target.value)} />
      {loading ? (
        <LoadingUsers />
      ) : (
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          flexWrap="wrap"
          gap={2}
        >
          {/* 20 Users only */}
          {search?.slice(0, 20).map(user => <UsersItem key={user.id} user={user} />)}
        </Box>
      )}

    </div>
  )
}

export default Users