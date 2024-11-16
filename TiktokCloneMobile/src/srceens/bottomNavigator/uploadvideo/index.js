import React, { useState, useEffect } from 'react';
import { View, Text, Alert, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Camera, useCameraDevice } from 'react-native-vision-camera';
import { useCameraPermission } from 'react-native-vision-camera';
import ic_replay from '../../../assets/icons/ic_replay';
import styles from './style';

const UploadScreen = () => {
  const [cameraType, setCameraType] = useState('back'); // Trạng thái loại camera (trước hoặc sau)
  const [zoom, setZoom] = useState(0); // Trạng thái mức zoom
  const [isRecording, setIsRecording] = useState(false); // Trạng thái ghi hình
  const [photo, setPhoto] = useState(null); // Trạng thái lưu ảnh

  const device = useCameraDevice(cameraType); // Lấy thiết bị camera
  const { hasPermission, requestPermission } = useCameraPermission(); // Quản lý quyền truy cập camera

  useEffect(() => {
    // Kiểm tra quyền truy cập camera
    const checkPermission = async () => {
      const permission = await requestPermission();
      if (!permission) {
        Alert.alert('Permission denied', 'Camera access is required to use this feature.');
      }
    };

    checkPermission();
  }, [requestPermission]);

  if (device == null) {
    return <Text>No camera device found</Text>;
  }

  if (!hasPermission) {
    return <Text>Camera permission is required</Text>;
  }

  // Hàm chụp ảnh
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

  // Hàm bắt đầu/dừng quay video
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

  // Hàm chuyển đổi camera
  const toggleCamera = () => {
    setCameraType(cameraType === 'back' ? 'front' : 'back');
  };

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        zoom={zoom}
      />
      <View style={styles.containerbutton}>

        <TouchableOpacity style={[styles.button, styles.toggleButton]} onPress={toggleCamera}>
        <Image
              source={require('../../../assets/images/1.png')}
              style={{height : 24, width : 24}}
            />
        </TouchableOpacity>




      </View>

      <View style={styles.containerend}>
          <View style={{flexDirection : 'row'}}>
      <TouchableOpacity style={styles.button} onPress={takePhoto}>
      <Text style={styles.buttonText}>Chụp </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, isRecording ? styles.recordingButton : styles.recordButton]}
        onPress={toggleRecording}
      >
        <Text style={styles.buttonText}>{isRecording ? 'Dừng Quay' : 'Quay '}</Text>
      </TouchableOpacity>
      </View>

      </View>

    </View>
  );
};

export default UploadScreen;