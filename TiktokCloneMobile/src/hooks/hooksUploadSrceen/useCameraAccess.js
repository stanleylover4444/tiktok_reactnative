import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useCameraPermission } from 'react-native-vision-camera';

const useCameraAccess = () => {
  const { hasPermission, requestPermission } = useCameraPermission();
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    const checkPermission = async () => {
      const permission = await requestPermission();
      if (!permission) {
        Alert.alert('Permission denied', 'Camera access is required to use this feature.');
      } else {
        setPermissionGranted(true);
      }
    };

    checkPermission();
  }, [requestPermission]);

  return { permissionGranted, hasPermission };
};

export default useCameraAccess;
