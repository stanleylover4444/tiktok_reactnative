import { useState } from 'react';
import { Alert } from 'react-native';

const usePhoto = (device) => {
  const [photo, setPhoto] = useState(null);

  const takePhoto = async () => {
    try {
      const photo = await device.takePhoto({
        flash: 'off', // Có thể chọn 'on', 'off', 'auto'
      });
      setPhoto(photo);
      Alert.alert('Photo taken', 'The photo has been saved.');
    } catch (error) {
      Alert.alert('Error', 'Failed to take photo.');
    }
  };

  return { photo, takePhoto };
};

export default usePhoto;
