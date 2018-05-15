import React from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-carousel-view';
import EventCardLarge from '../EventCardLarge';
import styles from './styles';

const EventCarousel = ({ data }) => {
  const { carouselContainer } = styles;

  return (
    <Carousel
      height={300}
      delay={4000}
      indicatorAtBottom
      indicatorSize={20}
      indicatorColor="#FFF"
    >
      {data.map(event => (
        <View
          style={carouselContainer}
          key={event.id}
        >
          <EventCardLarge event={event} />
        </View>
      ))}
    </Carousel>
  );
}

export default EventCarousel;

