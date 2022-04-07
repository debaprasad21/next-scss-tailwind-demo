import Button from '@mui/material/Button';

const ButtonComponent = () => {
  return (
    <Button
      variant="contained"
      className="bg-primary-blue-200 text-primary-white hover:bg-primary-blue-200 lg:min-w-200 md:min-w-1/2 md:w-auto w-full p-5 rounded-none"
    >
      Primary
    </Button>
  );
};

export default ButtonComponent;
