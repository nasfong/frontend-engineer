import { FollowProps } from '../components/profile.type'

type FollowItem = {
  follow: FollowProps
  pageRef?: (node: any) => void
}

export const FollowItem = ({ follow, pageRef }: FollowItem) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', columnGap: 10 }} ref={pageRef}>
      <img src={follow.avatar_url} style={{ width: 50, height: 50, borderRadius: '50%' }} />
      <div>{follow.login} - {follow.id}</div>
    </div>
  )
}