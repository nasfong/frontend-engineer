import {
  Twitter as TwitterIcon,
  Apartment as ApartmentIcon,
  LocationOn as LocationOnIcon,
  PeopleAlt as PeopleAltIcon,
  SettingsEthernet as SettingsEthernetIcon,
  Link as LinkIcon,
  OpenInNew as OpenInNewIcon,
} from '@mui/icons-material'
import { Box, Card, CardMedia, styled, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { ProfileProps } from './profile.type'

const TypoCustom = styled(Typography)({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  columnGap: 5
})

export const ProfileItem = ({ user }: { user?: ProfileProps }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' }, justifyContent: 'space-evenly', minHeight: 500 }}>
      <Card sx={{ borderRadius: '16px', boxShadow: 5, padding: 5, minWidth: { xs: 300, md: 500 } }}>
        <Box sx={{ lineHeight: '0.3', marginBottom: 10 }}>
          <Typography component="div" variant="h4" sx={{ '&:hover': { color: 'lightgreen' }, display: 'flex', justifyContent: 'space-between' }}>
            {user?.name && (
              <Link to={`${user?.html_url}`} target="_blank" className='link' >
                {user.name}  < OpenInNewIcon />
              </Link>
            )}
            <CardMedia
              component="img"
              sx={{ height: 100, width: 100, borderRadius: '50%', display: { xs: 'block', md: 'none' } }}
              image={user?.avatar_url}
              alt="Live from space album cover"
            />
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to={`${user?.html_url}`} target="_blank" className='link'>
              {user?.login} {!user?.name && < OpenInNewIcon />}
            </Link>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <TypoCustom variant="subtitle1">
            <PeopleAltIcon />{user?.followers} Follower ~ {user?.following} Following
          </TypoCustom>
          {user?.company && (
            <TypoCustom variant="subtitle1">
              <ApartmentIcon /> {user.company}
            </TypoCustom>
          )}
          {user?.blog && (
            <TypoCustom variant="subtitle1">
              <SettingsEthernetIcon /> {user.blog}
            </TypoCustom>
          )}
          {user?.location && (
            <TypoCustom variant="subtitle1">
              <LocationOnIcon /> {user.location}
            </TypoCustom>
          )}
          {user?.twitter_username && (
            <TypoCustom variant="subtitle1">
              <TwitterIcon /> {user.twitter_username}
            </TypoCustom>
          )}
          {user?.html_url && (
            <TypoCustom variant="subtitle1">
              <LinkIcon />{user.html_url}
            </TypoCustom>
          )}
        </Box>
      </Card>
      <CardMedia
        component="img"
        sx={{ height: 200, width: 200, borderRadius: '50%', display: { xs: 'none', md: 'block' } }}
        image={user?.avatar_url}
        alt="Live from space album cover"
      />
    </Box>
  )
}
