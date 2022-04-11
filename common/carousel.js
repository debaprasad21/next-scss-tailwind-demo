import Carousel from 'react-material-ui-carousel';
import { HorizontalRule } from '@mui/icons-material';
import Card from './card';
import carouselItems from './../data/carouselData.json';

const CarouselComponent = ({ isAutoPlay, animationType, isCycleNavigation }) => {
  return (
    <Carousel
      IndicatorIcon={<HorizontalRule />}
      autoPlay={isAutoPlay}
      animation={animationType || 'fade'}
      className="px-1"
      cycleNavigation={isCycleNavigation || true}
    >
      {carouselItems.map((item, i) => (
        <div key={i} className="flex justify-between">
          {item.details.map((each, index) => (
            <Card
              heading={each.heading}
              description={each.description}
              imgSrc={each.imgSrc}
              customClass={`${item.details.length === index + 1 ? '' : 'mr-4'} w-1/${
                item.details.length
              }`}
              clickUrl={each.url}
              key={index}
            />
          ))}
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
