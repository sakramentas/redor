import React from 'react';
import {
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import { styles } from './styles';

const Loading = () => {
  const {
    loadingIndicator,
    loadingText,
  } = styles;

  return (
    <View>
      <ActivityIndicator
        // animating={isLoading}
        style={loadingIndicator}
        size="large"
      />
      <Text style={loadingText}>Bringing the best events in Dublin to you...</Text>
    </View>
  );
};

export default Loading;

