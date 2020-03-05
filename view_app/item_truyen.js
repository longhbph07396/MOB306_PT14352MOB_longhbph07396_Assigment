import React, { useState } from 'react'; 
import { StyleSheet, Text, View  , Image, Button, Alert, Modal, ScrollView, TouchableOpacity} from 'react-native';

export default function ItemTruyen({item,hamXoa}){
    const [showModalCT,setShowModalCT]=useState(false);
    const alertXoaTruyen=(item,hamXoa)=>{ 
        return Alert.alert(
        
            "Thông báo!!!",
            `Bạn muốn xóa truyện ${item.name} này không?`,
            [
               {
                   text:"Có",
                   onPress:()=>{hamXoa(item.maTruyen)}
               },
               {
                text:"Không",
                onPress:()=>{}
            },
            ],
            {
                cancelable:false
            }
        
         )
        }
        
    return(
        <View>
            <View style={longStyle.itemView} >
                <Image source={{uri: item.thumbnail}} style={longStyle.avatar} />
                <View style={longStyle.tt}>
                    <View style={{marginLeft:3, display:'flex',justifyContent:'center'}}>
                                <View style={longStyle.row}>
                                    <Text style={longStyle.txt1}>Tiêu đề</Text> 
                                    <Text style={longStyle.gia1}>{`: ${item.name}`}</Text>
                                </View> 
                                <View style={longStyle.row}>
                                    <Text style={longStyle.txt1}>Thể loại</Text>
                                    <Text style={longStyle.gia1}>{`: ${item.category}`}</Text>
                                </View>  
                                <View style={longStyle.row}>
                                    <Text style={longStyle.txt1}>Số tập</Text> 
                                    <Text style={longStyle.gia1}>{`: ${item.total_chapters}`}</Text>
                                </View>
                                <View style={longStyle.row}>
                                    <Text style={longStyle.txt1}>Tình trạng</Text>
                                    <Text style={longStyle.gia1}>{`: ${item.is_full?'Hoạt động':'Full'}`}</Text>
                                </View>  
                    </View>
                </View>
                <View style={longStyle.btn}>
                    <View style={{}}> 
                        <TouchableOpacity onPress={()=>setShowModalCT(true)} style={longStyle.btnDong1}>
                                <Text style={{textAlign:'center',paddingVertical:5,color:'#FFFFFF',fontSize:8}}>Chi tiết</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:12 }}> 
                        <TouchableOpacity  onPress={()=>{alertXoaTruyen(item,hamXoa)}}  style={longStyle.btnDong1}>
                                <Text style={{textAlign:'center',paddingVertical:5,color:'#FFFFFF',fontSize:8}}>Xóa</Text>
                        </TouchableOpacity>
                    </View>
                    
                    
                </View>
             </View>
             <View>
                 <Modal visible={showModalCT}>
                    <View style={{backgroundColor:'#D3D3D3'}} >
                        <Text style={longStyle.viewmd}>{item.name}</Text>
                    </View>
                    <View style={longStyle.view2}>
                        <Image source={{uri:item.thumbnail}} style={longStyle.anh} />
                        <View style={{marginLeft:15, display:'flex',justifyContent:'center'}}>
                            <View style={longStyle.row}>
                                <Text style={longStyle.txt}>Tác giả</Text> 
                                <Text style={longStyle.gia}>{`: ${item.tacGia}`}</Text>
                            </View> 
                            <View style={longStyle.row}>
                                <Text style={longStyle.txt}>Thể loại</Text>
                                <Text style={longStyle.gia}>{`: ${item.category}`}</Text>
                            </View> 
                            <View style={longStyle.row}>
                                <Text style={longStyle.txt}>Năm SX</Text> 
                                <Text style={longStyle.gia}>{`: ${item.namPhatHanh}`}</Text>
                            </View> 
                            <View style={longStyle.row}>
                                <Text style={longStyle.txt}>Số tập</Text> 
                                <Text style={longStyle.gia}>{`: ${item.total_chapters}`}</Text>
                            </View>
                            <View style={longStyle.row}>
                                <Text style={longStyle.txt}>Tình trạng</Text>
                                <Text style={longStyle.gia}>{`: ${item.is_full?'Hoạt động':'Full'}`}</Text>
                            </View>  
                        </View>
                    </View>
                    <View style={longStyle.sc}>
                        <View>
                            <Text style={{marginBottom:10,textAlign:'center',fontSize:15,borderWidth:2,marginHorizontal:120,borderRadius:8,borderColor:'#FFFFFF',textDecorationLine:'underline',fontStyle:'italic',backgroundColor:'#AEA9AB'}}>Nội dung</Text>
                        </View>
                        <ScrollView style={longStyle.viewnd} >
                            <View >
                                <Text style={{paddingVertical:10,paddingHorizontal:25,color:'#FFFFFF'}}>{item.noiDung}</Text>
                            </View>
                        </ScrollView>
                    </View>
                    
                    <View style={longStyle.btnn}>
                        <TouchableOpacity onPress={()=>setShowModalCT(false)} style={longStyle.btnDong}>
                            <Text style={{textAlign:'center',paddingVertical:15,color:'#FFFFFF',fontSize:18}}>Đóng</Text>
                        </TouchableOpacity>
                    </View>
                 </Modal>
             </View>
        </View>
       
    )
}
const longStyle=StyleSheet.create(
    {
        avatar:{ 
            width:100,
            height:100,
            borderRadius:50,
            borderWidth:2,
            borderColor:'#FFFFFF'
        },
        itemView:{
            flexDirection:'row',
            borderWidth:1,
            marginVertical:10,
            marginHorizontal:15,
            borderColor:'#FFFFFF',
            paddingVertical:5,
            paddingHorizontal:10,
            backgroundColor:'#B2B2B2',
            borderRadius:20
        },
        text:{
            fontSize:11,
            maxWidth:180
        },
        btn:{ 
            display:"flex",
            justifyContent:'center',  
            width:72, 
            marginLeft:25
        },
        tt:{
            width:150,
            display:"flex",
            justifyContent:'center',
            marginStart:10
        }, 
        row:{
            display:'flex',
            flexDirection:"row"
        },
        anh:{
            width:150,
            height:200 ,
            borderRadius:25,
            borderColor:'#FFFFFF',
            borderWidth:2
        },
        view2:{
            flexDirection:'row',
            paddingHorizontal:15,
            paddingTop:5,
            backgroundColor:'#D3D3D3'
        },
        viewmd:{
            textAlign:'center',
            borderWidth:3,
            marginVertical:15,
            marginHorizontal:35,
            fontSize:20,
            fontWeight:'bold',
            borderRadius:25,
            padding:5,
            borderColor:'#FFFFFF', 
            fontStyle:'italic',
            color:'#5D5D61'
        },
        sc:{
            height:325, 
            paddingTop:35,
            backgroundColor:'#D3D3D3'
        },
        btnn:{
            paddingHorizontal: 100, 
            paddingVertical:25,
            backgroundColor:'#D3D3D3',
            height:160,
            alignItems:'center'
        },
        txt:{
            width:65, 
            textDecorationLine:'underline',
            marginBottom:10,
            fontStyle:'italic'
        },
        gia:{
            fontWeight:'bold',
        
        },
        viewnd:{ 
            height:300,
            borderRadius:25,
            marginHorizontal:10,
            borderWidth:1.5,backgroundColor:'#413F3F',
            borderColor:'#FFFFFF'
        },
        txt1:{
            width:40, 
            textDecorationLine:'underline',
            marginBottom:10,
            fontStyle:'italic',
            fontSize:8
        },
        gia1:{
            fontWeight:'bold',
            fontSize:10,
            maxWidth:130
        
        },
        btnDong:{
            backgroundColor:'#3A3737',
            width:150,  
            borderRadius:15,
            borderWidth:1,
            borderColor:'#FFFFFF', 
        },
        btnDong1:{
            backgroundColor:'#757576',
            width:50,  
            borderRadius:15,
            borderWidth:1,
            borderColor:'#FFFFFF', 
        }
    }
)