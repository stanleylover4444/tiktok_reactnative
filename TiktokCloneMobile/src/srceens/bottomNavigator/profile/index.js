import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfileTabs from '../../../components/CustomTab/ProfileTabs';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ProfileTabs />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProfileScreen;
