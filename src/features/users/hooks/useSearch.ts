import { useMemo, useState } from "react"
import { UsersProps } from "../components/users.type"

export function useSearch(data?: UsersProps[]) {

  const [search, setSearch] = useState<string>('')

  const handleFilter = useMemo(
    () => data?.filter((use: any) => use.login.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    , [data, search])

  return { search: handleFilter, setSearch }
}