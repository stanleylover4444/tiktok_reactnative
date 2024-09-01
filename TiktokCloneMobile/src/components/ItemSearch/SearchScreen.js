import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import SearchIcon from '../../assets/icons/ic_find';
import styles from './style';

const SearchScreenHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <SearchIcon style={styles.icon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Nhập từ khóa tìm kiếm..."
          placeholderTextColor="#888"
          textAlignVertical="center"
        />
      </View>
      <Text style={styles.title}>Tìm kiếm</Text>
    </View>
  );
};

export default SearchScreenHeader;
