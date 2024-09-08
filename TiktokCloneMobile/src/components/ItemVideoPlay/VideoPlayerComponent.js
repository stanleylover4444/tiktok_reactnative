import React from 'react';
import { Text, View } from 'react-native';
import Video from 'react-native-video'; // Sử dụng 'expo-av' cho video playback hoặc thư viện Video của bạn
import { useRoute } from '@react-navigation/native';

const VideoPlayerComponent = () => {
    const route = useRoute();
    const { uri } = route.params;  // Nhận uri từ params

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            position: 'relative'
        }}>
            <Video
                source={{ uri: uri }}
                style={{ width: '100%', height: '100%', position: 'relative' }}
                controls={false}
                resizeMode="cover"
            />
            <View style={{ position: 'absolute', zIndex: 1 }}>
                <Text>Huy</Text>
            </View>
        </View>
    );
};

export default VideoPlayerComponent;
