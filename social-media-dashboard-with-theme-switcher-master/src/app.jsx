import { Typography, Box, Divider, Grid, Stack, Switch } from '@mui/material'
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from './assets'
import CardMain from './components/card-main'
import CardOverview from './components/card-overview'
import PropTypes from 'prop-types';
import './App.css'

function App({ onChangeMode }) {
  // Array data untuk kumpulan card bagian atas
  const socialMediaData = [
    { icon: FacebookIcon, name: '@nathanf', lineColor: 'hsl(208, 92%, 53%)', follower: '1987', todayNum: 12, isUp: true },
    { icon: TwitterIcon, name: '@nathanf', lineColor: 'hsl(203, 89%, 53%)', follower: '1044', todayNum: 99, isUp: true },
    { icon: InstagramIcon, name: '@realnathanf', lineColor: 'linear-gradient(to right, hsl(37,97%,70%),hsl(329,70%,58%))', follower: '11k', todayNum: 1099, isUp: true },
    { icon: YoutubeIcon, name: '@Nathan F.', lineColor: 'hsl(348, 97%, 39%)', follower: '8239', todayNum: 144, isUp: false },
  ];

  // Array data untuk kumpulan card bagian bawah
  const overviewData = [
    { title: 'Page Views', value: '87', icon: FacebookIcon, percentage: 3, isUp: true },
    { title: 'Likes', value: '52', icon: FacebookIcon, percentage: 2, isUp: false },
    { title: 'Likes', value: '5462', icon: InstagramIcon, percentage: 2257, isUp: true },
    { title: 'Profile Views', value: '52k', icon: InstagramIcon, percentage: 1375, isUp: true },
    { title: 'Retweets', value: '117', icon: TwitterIcon, percentage: 303, isUp: true },
    { title: 'Likes', value: '507', icon: TwitterIcon, percentage: 553, isUp: true },
    { title: 'Likes', value: '107', icon: YoutubeIcon, percentage: 19, isUp: false },
    { title: 'Total Views', value: '1407', icon: YoutubeIcon, percentage: 12, isUp: false },
  ];

  return (
    <>
      {/* Background header di bagian atas */}
      <Box width='100%' height='215px' bgcolor='primary.light' position='absolute' zIndex='-1' />
      <Stack paddingX={2} paddingY={3} spacing={5} maxWidth={{ xs: '1000px', lg: '1200px' }} justifyContent='center' margin='0 auto'>
        {/* Social Media */}
        <Box>
          <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between'>
            <Box>
              <Typography variant='h5' color="text.primary"><Box component='span' fontWeight="bold">Social Media Dashboard</Box></Typography>
              <Typography variant='subtitle2' color="text.secondary"><Box component='span' fontWeight="bold">Total Followers: 23,004</Box></Typography>
            </Box>
            <Box marginTop={2} marginBottom={1} display={{ xs: 'block', md: 'none' }}><Divider /></Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant='subtitle2' color="text.secondary"><Box component='span' fontWeight="bold">Dark Mode</Box></Typography>
              <Switch defaultChecked onChange={() => onChangeMode()} />
            </Stack>
          </Stack>
          <Grid container columns={12} spacing={3} marginTop={{ xs: 0, md: 2 }} display="flex" justifyContent="center" alignItems="center">
            {/* {...data} merupakan spread syntax, dipakai untuk passing seluruh properti dari data secara individu ke dalam component */}
            {socialMediaData.map((data, index) => (
              <Grid key={index} item xs={8} md={5} lg={3} style={{ maxWidth: '350px' }}>
                <CardMain {...data} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Overview */}
        <Box>
          <Typography variant='h5' color="text.primary"><Box component='span' fontWeight="bold">Overview - Today</Box></Typography>
          <Grid container columns={12} spacing={3} marginTop={0} display="flex" justifyContent="center" alignItems="center">
            {overviewData.map((data, index) => (
              <Grid key={index} item xs={8} md={5} lg={3} style={{ maxWidth: '350px' }}>
                <CardOverview {...data} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="blank">Frontend Mentor</a>.
        Coded by <a href="https://www.github.com/JohanJianta" target="blank">Johan Reinaldo Jianta</a>.
      </div>
    </>
  )
}

// set tipe properti untuk tiap parameter
App.propTypes = {
  onChangeMode: PropTypes.func.isRequired,
};

export default App