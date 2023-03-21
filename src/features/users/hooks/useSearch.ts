import { useMemo, useState } from 'react'
import { UsersProps } from '../components/users.type'

export function useSearch(data?: UsersProps[]) {
  const [search, setSearch] = useState<string>('')

  const handleFilter = useMemo(
    () => data?.filter(use => use.login.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    , [data, search]) || []

  return [handleFilter, setSearch] as const
}