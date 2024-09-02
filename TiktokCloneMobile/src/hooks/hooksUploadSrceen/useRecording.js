import { useState } from 'react';
import { Alert } from 'react-native';

const useRecording = (device) => {
  const [isRecording, setIsRecording] = useState(false);

  const toggleRecording = async () => {
    if (isRecording) {
      try {
        await device.stopRecording();
        setIsRecording(false);
        Alert.alert('Recording stopped', 'The video has been saved.');
      } catch (error) {
        Alert.alert('Error', 'Failed to stop recording.');
      }
    } else {
      try {
        await device.startRecording({
          flash: 'off', // Có thể chọn 'on', 'off', 'auto'
        });
        setIsRecording(true);
        Alert.alert('Recording started', 'Recording video...');
      } catch (error) {
        Alert.alert('Error', 'Failed to start recording.');
      }
    }
  };

  return { isRecording, toggleRecording };
};

export default useRecording;
