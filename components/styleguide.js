import Button from './../common/button';
import Accordion from './../common/accordion';

const Styleguide = () => {
  return (
    <div className="container mt-5 lg:mt-24 mb-10">
      {/* <Stack spacing={2} className="mb-10"> */}
      <p className="mt-10">Button</p>
      <Button />
      {/* </Stack> */}
      <p className="mt-10">Accordion</p>
      <Accordion />
    </div>
  );
};

export default Styleguide;
