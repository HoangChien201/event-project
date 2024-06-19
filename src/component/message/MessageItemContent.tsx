import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { messageType } from './MessageItem';
import MessageText from './MessageText';
import Video, { VideoRef } from 'react-native-video';
import { EmojiReaction } from '../../constant/emoji';

const MessageItemContent = ({message,sender}:{message:messageType,sender:boolean}) => {
    const videoRef = useRef<VideoRef>(null);
    function onBuffer(event) {
        console.log(event);

    }

    function onVideoError(event) {
        console.log(event);

    }

    switch (message.type) {
        case "text":
            return <MessageText text={message.message} sender={sender} />

        case "image": {
            return (
                <View style={styles.messageImage}>
                    {
                        message.message &&
                        <Image style={{ width: '100%', height: '100%', borderRadius: 20 }} source={{ uri: message.message }} />
                    }
                </View>
            )
        }
        default:
            return (
                <Video
                    // Can be a URL or a local file.
                    source={{ uri: message.message }}
                    // Store reference  
                    ref={videoRef}
                    // Callback when remote video is buffering                                      
                    onBuffer={onBuffer}
                    // Callback when video cannot be loaded              
                    onError={onVideoError}
                    style={styles.messageImage}
                />
            )
    }
}

export default MessageItemContent

const styles = StyleSheet.create({
    messageImage: {
        height: 300,
        width: '100%',
      },
})