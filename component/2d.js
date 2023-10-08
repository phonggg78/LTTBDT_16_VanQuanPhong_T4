import {View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Button} from "react-native";
import { useState} from "react";
export default function Cau2d(){
    const [price, setPrice] = useState(141800)
    const [quantity, setQuantiy]= useState(1)
    const [cost, setCost] = useState(price)
    const [discount, setDiscount] = useState('  Mã giảm giá')
    let order={
        time: new Date().toLocaleDateString(),
        quantityProduct: 0,
        price: 141800,
        appliedDiscount: 0,
        sumOfCost: 0
    }
    const desQuantity = () => {
        let des= quantity -1;
        if(des>=0){
            setQuantiy(des);
            setPrice(des*141800)
            setCost(des*1418000)
        } else{ 
            setQuantiy(0);
            setPrice(0)
        }
    }
    const insQuantity = () => {
        let ins= quantity +1;
        setQuantiy(ins);
        setPrice(ins*141800)
        setCost(ins*141800)
    }
    const useDiscount= () => {
        setDiscount("   Giảm giá 10%");
        let finalPrice= 1.0*price;
        setCost(finalPrice*0.9);
    }
    const createOrder= () =>{
        order.quantityProduct=quantity;
        order.appliedDiscount=discount;
        order.sumOfCost= cost;
        alert("Tạo hóa đơn thành công!");
        console.log(order);
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.inforBook}>
                    <Image style={styles.bookImg} source={require('../assets/book.png')}/>
                    <View style={styles.infor}>
                        <Text style={styles.textInHeader}>Nguyên hàm tích phân và ứng dụng</Text>
                        <Text style={[styles.textInHeader,{'marginTop':'15'}]}>Cung cấp bởi Tiki Trading</Text>
                        <TextInput style={styles.price} onChangeText={setPrice} value={price}/>
                        <Text style={[styles.textInHeader,{'marginTop':'15'}]}>̶1̶̶4̶̶1.̶̶80̶̶0̶̶</Text>
                        <View style={[styles.selectQuantity,{'marginTop':'15'}]}>
                            <View style={styles.viewSelectQuantity}>
                                <TouchableOpacity style={styles.buttonDes} onPress={desQuantity}>
                                    <Text style={styles.buttonText}>-</Text>
                                </TouchableOpacity>
                                <TextInput style={styles.quantity} onChangeText={setQuantiy} value={quantity}/>
                                <TouchableOpacity style={styles.buttonIns} onPress={insQuantity}>
                                    <Text style={styles.buttonText}>+</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={[{'color':'blue'}, styles.text]}>Mua sau</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.discountHaving}>
                    <Text style={styles.text}>Mã giảm giá đã lưu</Text>
                    <Text style={[{'color':'blue'}, styles.text]}>Xem tại đây</Text>
                </View>
                <View style={styles.buttonDiscountWrapper}>
                    <TouchableOpacity style={styles.buttonDiscount}>
                        <Image style={styles.yellowBlock} source={require('../assets/yellow_block.png')}/>
                        <TextInput style={[{'marginLeft':'10'},{'fontFamily':'Roboto'}, {'fontWeight':'700'}, {'fontSize':'18px'}]} value={discount}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonUseDiscount}>
                    <Text style={[{'fontFamily':'Roboto'}, {'fontWeight':'700'}, {'fontSize':'20px'},{'color':'white'}]} onPress={useDiscount}>Áp dụng</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.textInputDiscountWrapper}>
                <Text style={styles.text}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                <Text style={[styles.text, {'marginLeft':'10'},{'color':'blue'}]}>  Nhập tại đây?</Text>
            </View>
            <View style={styles.tamTinhWrapper}>
                <Text style={[{'fontFamily':'Roboto'}, {'fontWeight':'700'}, {'fontSize':'18px'}, {'marginLeft':'20'}]}>    Tạm tính</Text>
                <TextInput style={[{'fontFamily':'Roboto'}, {'fontWeight':'700'}, {'fontSize':'18px'}, {'color':'red'},{'textAlign':'right'},{'marginRight':'50px'}]} value={price}/>
            </View>
            <View style={styles.rooter}>
                <View style={styles.thanhTienWrapper}>
                    <Text style={[{'fontFamily':'Roboto'}, {'fontWeight':'700'}, {'fontSize':'18px'},{'color':'#808080'}]}>    Thành tiền</Text>
                    <TextInput style={[{'fontFamily':'Roboto'}, {'fontWeight':'700'}, {'fontSize':'18px'}, {'color':'red'} ,{'textAlign':'right'},{'marginRight':'50px'}]} value={cost}/>
                </View>
                <TouchableOpacity style={styles.buttonDone} onPress={createOrder}>
                    <Text style={styles.buttonDoneText}>TIẾN HÀNH ĐẶT HÀNG</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles= StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#C4C4C4',
        flexDirection: 'column'
    },
    header: {
        width: '100%',
        height: 283,
        backgroundColor: 'white'
    },
    bookImg: {
        width: 104,
        height: 127
    },
    inforBook: {
        margin: 9,
        flexDirection: 'row'
    },
    infor: {
        flexDirection: 'column',
        marginLeft: 10,
        justifyContent: 'space-around'
    },
    textInHeader: {
        fontFamily: 'Roboto',
        fontSize: '12px',
        fontWeight: 700,
        lineHeight: 20,
        textAlign: 'left'
    },
    price: {
        color: 'red',
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 700,
        lineHeight: 20,
        textAlign: 'left',
        marginTop: 10
    },
    selectQuantity: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    buttonDes: {
        width: 20,
        height: 20,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    buttonIns: {
        width: 20,
        height: 20,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    viewSelectQuantity: {
        flexDirection: 'row',
        width: 30
    },
    button: {
        backgroundColor: 'lightgray',
        width: 15,
        height: 15,
        alignItems: 'center',
        justifyContent: 'center'
      },
      buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      quantity: {
        marginHorizontal: 5,
        fontSize: 18,
        width: 15,
        height: 15,
        textAlign: 'center',
        justifyContent: 'center'
      },
      discountHaving: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 190,
        marginLeft: 8
      },
      text: {
        fontFamily: 'Roboto',
        fontSize:' 13px',
        fontWeight: 700,
        lineHeight: '14.06px'
      },
      buttonDiscountWrapper: {
        height: 80,
        width: 360,
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      buttonDiscount: {
        width: 208,
        height: 45,
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 2,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
      },
      yellowBlock: {
        width: 32,
        height: 16,
        marginLeft: 10
      },
      buttonUseDiscount: {
        width: 99,
        height: 45,
        backgroundColor: 'rgba(10, 94, 183, 1)',
        alignItems: 'center',
        justifyContent: 'center'
      },
      textInputDiscountWrapper: {
        width: '100%',
        height: 51,
        backgroundColor: 'white',
        marginTop: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      tamTinhWrapper: {
        width: '100%',
        height: 51,
        backgroundColor: 'white',
        marginTop: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      rooter: {
        width: '100%',
        height: 120,
        backgroundColor: 'white',
        marginBottom: 0,
        marginTop: 120,
        alignItems: 'center'
      },
      thanhTienWrapper: {
        width: '100%',
        height: 51,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15
      },
      buttonDone: {
        width: 331,
        height: 45,
        backgroundColor: 'rgba(229, 57, 53, 1)',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonDoneText: {
        fontFamily: 'Roboto',
        fontSize: 25,
        fontWeight: 700,
        color: 'white'
      }
})