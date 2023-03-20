export type ProfileProps = {
  id: number
  avatar_url: string
  blog?: string
  company?: string
  followers: number
  following: number
  html_url: string
  location?: string
  login: string
  name?: string
  twitter_username?: string
  url: string
  followers_url: URL
  following_url: URL
}

export type FollowProps = ProfileProps

export type ModalProfileProps = {
  showModal: boolean
  follows: FollowProps[]
  loading: boolean
  error?: Error
  handleClose: () => void
  pageRef: (node: any) => void
}

export type UseFollowProps = ModalProfileProps & {
  handleFollow: (url?: URL | string) => void
}




