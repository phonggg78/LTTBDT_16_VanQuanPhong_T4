import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

export default Cau2b;
function Cau2b() {
    return(
        <View style ={styles.wrapper}>
                <View style= {styles.inputWrapper}>
                    <Image style={styles.inputImg} source={require('../assets/usb.png')} />
                    <Text style={styles.inputText1}>USB Bluetooth music Receiver <br/></Text>
                    <Text style={styles.inputText1}>HJX-001-Biến loa thường thành loa bluetooth</Text>
                </View>
                <Text style={styles.inputText3}>Cực kỳ hài lòng</Text>
                <View style={styles.inpuStarWrapper}>
                    <Image style={styles.inputImgS} source={require('../assets/Star 1.png')} />
                    <Image style={styles.inputImgS} source={require('../assets/Star 1.png')} />
                    <Image style={styles.inputImgS} source={require('../assets/Star 1.png')} />
                    <Image style={styles.inputImgS} source={require('../assets/Star 1.png')} />
                    <Image style={styles.inputImgS} source={require('../assets/Star 1.png')} />
                </View>
                <TouchableOpacity style={styles.inputImgBtn}>
                    <Image style={styles.inputImgCamera} source={require('../assets/camera.png')}/>
                    <Text style={styles.inputTextCamera}>Thêm hình ảnh</Text>
                </TouchableOpacity>
                <TextInput style={styles.shareInput} placeholder='Hãy chia sẻ những điều mà bạn thích về sản phẩm' multiline={true} numberOfLines={10}></TextInput>
                <TouchableOpacity style={styles.submitBtn}>
                    <Text style={styles.submitTxt}>Gửi</Text>
                </TouchableOpacity>
        </View>
        
    )
}
const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
        width: '100%',
    },
    inputWrapper: {
        display: 'flex',
        position: 'relative',
    },
    inpuStarWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 25,
        marginBottom: 25,
    },
    inputImg: {
        width: 70,
        height: 70,
        top: 13,
        left: 16,
        position: 'absolute',
    },
    inputText1:{
        fontSize: 18,
        fontWeight: 700,
        fontFamily: 'Roboto',
        marginLeft: 100,
        top: 19,
        left: 20,
        lineHeight:'21.09px'
    },
    inputText2:{
        fontSize: '24px',
        fontWeight: 700,
        fontFamily: 'Roboto',
        marginLeft: 100,
        top: 141,
        left: 20,
        alignItems: 'center',
        lineHeight: 24.9,
    },
    inputImgS:{
        width: 40,
        height: 40,  
    },
    inputText3:{
        marginTop: 100,
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 25,
        textAlign: 'center',
    },
    inputImgBtn:{
        width: '100%',
        height: 70,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'blue',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20,
    },
    inputTextCamera: {
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 20,
    },
    inputImgCamera:{
        width: 40,
        height: 32,
        marginLeft: 80,
    },
    shareInput: {
        width: '100%',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderRadius: 5,
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 18,
        padding: 15,
        marginTop: 20,
    },
    submitBtn: {
        width: '100%',
        height: 40,
        backgroundColor: '#0D5DB6',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 5,
    },
    submitTxt: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 20,
    }
})