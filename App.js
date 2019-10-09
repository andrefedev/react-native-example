import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
  },
});

const App = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => {
        return response.json();
      })
      .then(response => {
        setData(response);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.view}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Text>
            {item.title}, {item.releaseYear}
          </Text>
        )}
        keyExtractor={({id}, index) => id}
      />
    </View>
  );
};

export default App;
