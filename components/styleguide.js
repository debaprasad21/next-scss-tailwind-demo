import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Styleguide = () => {
  return (
    <div className="container mt-36">
      <Stack spacing={2} direction="row">
        <Button
          variant="text"
          className="text-primary-red-persian hover:text-primary-blue-midnight"
        >
          Text
        </Button>
        <Button variant="contained" className="bg-primary-red-persian text-primary-white">
          Contained
        </Button>
      </Stack>
    </div>
  );
};

export default Styleguide;
