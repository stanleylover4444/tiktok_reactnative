import { useState } from 'react';
import { useCameraDevice } from 'react-native-vision-camera';

const useCamera = () => {
  const [cameraType, setCameraType] = useState('back');
  const device = useCameraDevice(cameraType);

  const toggleCamera = () => {
    setCameraType(cameraType === 'back' ? 'front' : 'back');
  };

  return { device, toggleCamera };
};

export default useCamera;
