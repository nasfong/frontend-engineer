import { Box, Grid } from '@mui/material'
import { Error } from '../components/Error'
import { SearchField } from '../components/SearchField'
import {
  UsersLoading as Loading,
  UsersItem as Item,
  UsersType,
  useSearch
} from '../features/users'
import { useFetch } from '../hooks/useFetch'

const page_api = '/users'

function Users() {

  const { data, loading, error } = useFetch<UsersType[]>(page_api)
  const [search, setSearch] = useSearch(data)

  if (error) return <Error msg={error.message} />

  return (
    <Box display='flex' flexDirection='column' alignItems='start'>
      <SearchField onChange={(e) => setSearch(e.target.value)} />
      <Grid container spacing={{ xs: 1, md: 3 }}>
        {search.map(user => <Item key={user.id} user={user} />)}
        {loading && <Loading />}
      </Grid>
    </Box>
  )
}

export default Users