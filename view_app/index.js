import React, { useState } from 'react';
import ListTruyen from './list_truyen'
import { StyleSheet, Text, View, Modal, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

export default function ViewApp(){
    const [showModal,setShowModal]=useState(true);
    const [nameChange,setNameChange]=useState("");
    const [ageChange,setAgeChange]=useState(0);  

    const  kiemTraTTName=( )=>{
        
        if (nameChange!=""&&ageChange>=18) { 
            setShowModal(false);
        }else{
            alertTBLoiTT();
        } 
    }

    const alertTBLoiTT=()=>{
        return Alert.alert(
            'Lỗi đăng nhập',
            'Gặp lỗi dữ liệu, vui lòng nhập tên và tuổi ( >=18 )!!!',
            [

            ],
            {
                cancelable:true
            }
        )
    };
   

    return(
        <View>
            <View style={{backgroundColor:'#7E7171'}}>
                <ListTruyen tenDN={nameChange}/>
            </View>
            <Modal visible={showModal} >
                <View  style={styles.viewModal}>
                     <Text style={{textAlign:'center',borderWidth:1,borderColor:'#818888',width:250,alignSelf:'center',fontSize:18,fontWeight:'bold',fontStyle:'italic',paddingVertical:8,borderRadius:5,backgroundColor:'#DEE3E3',color:'#5F5F60'}}>THÔNG TIN ĐĂNG NHẬP</Text>
                        
                    <View style={styles.input}>
                       <Text style={styles.hoten}>Họ và tên</Text>
                        <TextInput style={{borderWidth:1,  borderColor:'#FFFFFF',color:'#FFFFFF',paddingLeft:5,backgroundColor:'#A6A6A6'}} value={nameChange}   onChangeText={(text)=>{ setNameChange(text) }} />
                        <Text style={styles.tuoi} >Tuổi:</Text>
                        <TextInput  style={{borderWidth:1,  borderColor:'#FFFFFF',color:'#FFFFFF',paddingLeft:5,backgroundColor:'#A6A6A6'}} value={ageChange} onChangeText={(text)=>{setAgeChange(text)  }} />
                        <View style={styles.btnDangNhap}> 
                            <TouchableOpacity  onPress={()=>kiemTraTTName()} style={styles.btn}>
                                <Text style={{textAlign:'center',paddingVertical:15,color:'#FFFFFF',fontSize:15,fontWeight:'bold'}}>ĐĂNG NHẬP</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                
                
            </Modal>
        </View>
    )
}
const styles=StyleSheet.create(
    {
        btnDangNhap:{
            paddingHorizontal:15,
            marginTop:20,
            alignItems:'center'
        },
        viewModal:{  
        backgroundColor:'#D3D3D3',
        height:900,
        paddingVertical:100,
        paddingHorizontal:15, 
        },
        btn:{
            backgroundColor:'#808183',
            width:180,
            borderRadius:15,
            borderColor:'#FFFFFF',
            borderWidth:1,
            marginTop:20
        },
        hoten:{
            borderTopWidth:1,
            width:80,
            textAlign:'center',borderLeftWidth:1,
            borderRightWidth:1,
            borderTopLeftRadius:3,
            borderTopRightRadius:3,
            color:'#5F5F60',
            fontWeight:'bold',
            fontSize:15,
            borderColor:'#FFFFFF',
            marginTop:50,
            backgroundColor:'#CBFAFE'
        },
        tuoi:{
            borderTopWidth:1,
            width:50,
            textAlign:'center',borderLeftWidth:1,
            borderRightWidth:1,
            borderTopLeftRadius:3,
            borderTopRightRadius:3,
            color:'#5F5F60',
            fontWeight:'bold',
            fontSize:15,
            borderColor:'#FFFFFF',
            marginTop:25,
            backgroundColor:'#CBFAFE'
        },
        input:{
            borderWidth:1.5,
            paddingBottom:20,
            paddingHorizontal:15,
            borderColor:'#FFFFFF',
            marginTop:15,
            borderRadius:15
        }
    }
)