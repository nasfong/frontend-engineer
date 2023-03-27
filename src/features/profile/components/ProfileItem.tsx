import {
  Twitter as TwitterIcon,
  Apartment as ApartmentIcon,
  LocationOn as LocationOnIcon,
  PeopleAlt as PeopleAltIcon,
  SettingsEthernet as SettingsEthernetIcon,
  OpenInNew as OpenInNewIcon,
  Link as LinkIcon,
} from '@mui/icons-material'
import { Box, Card, CardMedia, Typography, Link, useTheme, Button, Paper } from '@mui/material'
import { TypoCustom } from '../../../components/TypoCustom'
import { ProfileType } from './profile.type'

type ProfileItemProps = {
  user?: ProfileType
  handleFollow: (url?: URL | string) => void
}

export const ProfileItem = ({ user, handleFollow }: ProfileItemProps) => {
  const { palette } = useTheme()
  return (
    <Box display='flex' flexDirection={{ xs: 'column-reverse', md: 'row' }} justifyContent='space-evenly' minHeight={500} >
      <Card sx={{ borderRadius: '16px', boxShadow: 5, padding: 5, minWidth: { xs: 300, md: 500 } }}>
        <Box lineHeight={0.3} marginBottom={10} >
          <Typography component='div' variant='h4' display='flex' justifyContent='space-between'>
            {user?.name && (
              <Link href={user.html_url} target='_blank' sx={{ '&:hover': { color: palette.primary.main }, color: palette.text.primary, textDecoration: 'none' }}>
                {user.name}  < OpenInNewIcon />
              </Link>
            )}
            <Paper elevation={3} sx={{ height: 100, width: 100, borderRadius: '50%', display: { xs: 'block', md: 'none' } }}>
              <CardMedia
                component='img'
                sx={{ height: 100, width: 100, borderRadius: '50%', display: { xs: 'block', md: 'none' } }}
                image={user?.avatar_url}
                alt='Logo'
              />
            </Paper>
          </Typography>
          <Typography variant='subtitle1' color='text.secondary' component='div' display='flex' justifyContent='space-between'>
            <Link href={user?.html_url} target='_blank' sx={{ '&:hover': { color: palette.primary.main }, color: palette.text.primary, textDecoration: 'none' }}>
              {user?.login} {!user?.name && < OpenInNewIcon />}
            </Link>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <TypoCustom variant='subtitle1'>
            <PeopleAltIcon />
            <Button color='inherit' onClick={() => handleFollow(`https://api.github.com/users/${user?.login}/followers`)}>
              {user?.followers} Follower
            </Button> ~ <Button color='inherit' onClick={() => handleFollow(`https://api.github.com/users/${user?.login}/following`)}>
              {user?.following} Following
            </Button>
          </TypoCustom>
          {user?.company && (
            <TypoCustom variant='subtitle1'>
              <ApartmentIcon /> {user.company}
            </TypoCustom>
          )}
          {user?.blog && (
            <TypoCustom variant='subtitle1'>
              <SettingsEthernetIcon /> {user.blog}
            </TypoCustom>
          )}
          {user?.location && (
            <TypoCustom variant='subtitle1'>
              <LocationOnIcon /> {user.location}
            </TypoCustom>
          )}
          {user?.twitter_username && (
            <TypoCustom variant='subtitle1'>
              <TwitterIcon /> {user.twitter_username}
            </TypoCustom>
          )}
          {user?.html_url && (
            <TypoCustom variant='subtitle1'>
              <LinkIcon />{user.html_url}
            </TypoCustom>
          )}
        </Box>
      </Card>
      <Paper elevation={3} sx={{ borderRadius: '50%', height: 200, width: 200, display: { xs: 'none', md: 'block' } }}>
        <CardMedia
          component='img'
          sx={{ height: 200, width: 200, borderRadius: '50%', display: { xs: 'none', md: 'block' } }}
          image={user?.avatar_url}
          alt='Logo'
        />
      </Paper>

    </Box>
  )
}
