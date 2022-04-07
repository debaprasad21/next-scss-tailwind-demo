import { MusicNote } from '@mui/icons-material';
import '../styles/index.css';
import { StyledEngineProvider } from '@mui/material';

function MyApp({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <Component {...pageProps} />
    </StyledEngineProvider>
  );
}

export default MyApp;
