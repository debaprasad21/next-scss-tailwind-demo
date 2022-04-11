import Button from './../common/button';
import Accordion from './../common/accordion';
import Card from './../common/card';
import Carousel from './../common/carousel';

const Styleguide = () => {
  return (
    <div className="container mt-5 lg:mt-24 mb-10">
      {/* <Stack spacing={2} className="mb-10"> */}
      <p className="mt-10 mb-4 head-1">Button</p>
      <Button />
      {/* </Stack> */}
      <p className="mt-10 mb-4 head-1">Accordion</p>
      <Accordion />
      <p className="mt-10 mb-4 head-1">Card </p>
      <Card />
      <p className="mt-10 mb-4 head-1">Carousel with Autoplay</p>
      <Carousel />
      <p className="mt-10 mb-4 head-1">Carousel without Autoplay</p>
      <Carousel isAutoPlay={false} isCycleNavigation={false} />
    </div>
  );
};

export default Styleguide;
