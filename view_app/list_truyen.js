import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Modal, TouchableOpacity,TextInput,Image} from 'react-native';
import ItemTruyen from './item_truyen' 

export default function ListTruyen({tenDN}){ 
    const API='https://5e5d44c297d2ea0014797397.mockapi.io/api/subject';

    const [listTruyen,setListTruyen]=useState([]);

    const [changeList,setChangeLissst]=useState(true); 

    const [showModal,setShowModal]=useState(false);  

    const [showModalUpdate,setShowModalUpdate]=useState(false);  
    
    const [isUpdate,setIsUpdate]=useState(false);  

    const [name,setName]=useState(''); 
    
    const [thumbnail,setthumbnail]=useState(''); 
    
    const [category,setcategory]=useState(''); 
    
    const [total_chapters,settotal_chapters]=useState(''); 
    
    const [is_full,setis_full]=useState(true); 
    
    const [tacGia,settacGia]=useState(''); 
    
    const [namPhatHanh,setnamPhatHanh]=useState(''); 
    
    const [noiDung,setnoiDung]=useState('');  
    
    const [anhBia,setanhBia]=useState(''); 
    
    const [tieuDe,settieuDe]=useState(''); 
    
    const [theLoai,settheLoai]=useState(''); 
    
    const [soTap,setsoTap]=useState(''); 
    
    const [id,setID]=useState(0); 
    
    const [tinhTrang,settinhTrang]=useState(true); 
 
    const [showLoading,setshowLoading]=useState(false);     

    const fetchLisstTruyen=()=>{
        return fetch(
            API,
            {}
        )
        .then((response)=>response.json())
        .then((responseJson)=>{setListTruyen(responseJson)})
        .catch((error)=>console.log(error))
    };

    useEffect(
        ()=>{fetchLisstTruyen()},
        [changeList]
    );
 
    const loadChiTiet=(hien)=>{
        if (hien) { 
            setshowLoading(true);
        }else{
            setshowLoading(false);
        }
    }

    const hamXoa=(maTruyen)=>{
        setshowLoading(true);
        fetch(
            `${API}/${maTruyen}`,
            {method:'DELETE'}
        )
        .then(()=>{
            const newListTruyen=listTruyen.filter(item=>item.id!=maTruyen);
            setListTruyen(newListTruyen);
            setshowLoading(false);
        })
        .catch((error)=>console.log(error))
    }

    const themTruyen=(id)=>{
        setshowLoading(true);
        const truyen={
            thumbnail,
            name,
            category,
            total_chapters,
            is_full,
            tacGia,
            namPhatHanh,
            noiDung
        } 
        const api = isUpdate ? `${API}/${id}` : API;
        fetch(
            api,
            {
                method: isUpdate ? 'PUT' : 'POST',
                headers:{
                    Accept: 'application/json',
                    'Content-type': 'application/json'
                },
                body:JSON.stringify(truyen)
            }
        ).then((response) => response.json())
        .then((responseJson) => {
            let newDSTruyen = [...listTruyen];
            if (isUpdate) { 
                const updateListTruyenIndex = newDSTruyen.findIndex((item) => item.id == responseJson.id);  
                newDSTruyen[updateListTruyenIndex] = responseJson;  
            }else{
                newDSTruyen.push(responseJson);  
            }
            setListTruyen(newDSTruyen);   
            setshowLoading(false)
            restartData();
            
        }) 
        .catch((error) => console.log(`ERROR: ${error}`));
        
        
    } 

    const restartData=()=>{
        setName('');
        setcategory('');
        setnoiDung('');
        settotal_chapters('');
        settacGia('');
        setthumbnail('');
        setnamPhatHanh(''); 
        setIsUpdate(false);
        if (showModalUpdate) {
            setShowModalUpdate(false);
        }
        if(showModal){
            setShowModal(false);
        }
    }
    
    const clickSua=(name,category,namPhatHanh,is_full,total_chapters,tacGia,noiDung,id,thumbnail)=>{
        setShowModalUpdate(true);
        setIsUpdate(true);
        setName(name);
        setcategory(category);
        setnoiDung(noiDung);
        settotal_chapters(total_chapters);
        settacGia(tacGia);
        setthumbnail(thumbnail);
        setnamPhatHanh(namPhatHanh);  
        setis_full(is_full);
        setanhBia(thumbnail);
        settinhTrang(is_full);
        settieuDe(name);
        setsoTap(total_chapters);
        settheLoai(category);
        setID(id);
    }
return(
    <View style={styles.list} > 
        <View style={styles.header}>
            <View style={styles.tenNguoiDung}>
                <Text style={styles.tenNguoiDung1}>{tenDN}</Text> 
            </View>  
            <View>
                <TouchableOpacity onPress={()=>{setShowModal(true)}} style={ styles.btnThemTruyen}>
                                    <Text style={{textAlign:'center',paddingVertical:5,color:'#FFFFFF',fontSize:10}}>Thêm truyện</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={showLoading?styles.textHien:styles.textAn}>Đang tải ...</Text>
            </View>
        </View>
        
        <View>
            <ScrollView style={{height:650}}>
                <FlatList data={listTruyen} renderItem={({item})=> (<ItemTruyen item={item} hamXoa={hamXoa} clickSua={clickSua} API={API} loadChiTiet={loadChiTiet} />) } keyExtractor={(item,index)=>index}   />
            </ScrollView>
           
        </View>

        
        <Modal visible={showModal} >
            <View style={styles.modalAdd}>
                <View >
                    <Text style={styles.headerModal}>NHẬP THÔNG TIN TRUYỆN</Text>
                </View>
                <View >
                <Text style={showLoading?styles.textHien1:styles.textAn}>Đang tải ...</Text>
                 </View>
                <View style={{paddingHorizontal:10}}>
                    <Text style={styles.hoten}>Tên truyện</Text>
                    <TextInput style={{borderWidth:1,  borderColor:'#444C6E',color:'#48517B',paddingLeft:5,backgroundColor:'#CBFAFE'}} value={name}  onChangeText={(value)=>{setName(value)}} />
                </View>
                <View style={{paddingHorizontal:10}}>
                    <Text style={styles.hoten}>Thể loại</Text>
                    <TextInput style={{borderWidth:1,  borderColor:'#444C6E',color:'#48517B',paddingLeft:5,backgroundColor:'#CBFAFE'}} value={category} onChangeText={(value)=>{setcategory(value)}} />
                </View>
                <View style={{paddingHorizontal:10}}>
                    <Text style={styles.hoten}>Tác giả</Text>
                    <TextInput style={{borderWidth:1,  borderColor:'#444C6E',color:'#48517B',paddingLeft:5,backgroundColor:'#CBFAFE'}} value={tacGia} onChangeText={(value)=>{settacGia(value)}} />
                </View>
                <View style={{paddingHorizontal:10}}>
                    <Text style={styles.hoten}>Năm phát hành</Text>
                    <TextInput style={{borderWidth:1,  borderColor:'#444C6E',color:'#48517B',paddingLeft:5,backgroundColor:'#CBFAFE'}} value={namPhatHanh} onChangeText={(value)=>{setnamPhatHanh(value)}} />
                </View>
                <View style={{paddingHorizontal:10}}>
                    <Text style={styles.hoten}>Số tập</Text>
                    <TextInput style={{borderWidth:1,  borderColor:'#444C6E',color:'#48517B',paddingLeft:5,backgroundColor:'#CBFAFE'}} value={total_chapters} onChangeText={(value)=>{settotal_chapters(value)}} />
                </View>
                <View style={{paddingHorizontal:10}}>
                    <Text style={styles.hoten}>Nội dung</Text>
                    <TextInput style={{borderWidth:1,  borderColor:'#444C6E',color:'#48517B',paddingLeft:5,backgroundColor:'#CBFAFE'}} value={noiDung} onChangeText={(value)=>{setnoiDung(value)}} />
                </View>
                <View style={{paddingHorizontal:10}}>
                    <Text style={styles.hoten}>Ảnh bìa</Text>
                    <TextInput style={{borderWidth:1,  borderColor:'#444C6E',color:'#48517B',paddingLeft:5,backgroundColor:'#CBFAFE'}} value={thumbnail} onChangeText={(value)=>{setthumbnail(value)}} />
                </View>
                <View style={{flexDirection:'row',alignSelf:'center',marginTop:50}}>
                    <TouchableOpacity onPress={()=>{themTruyen('')}} style={ styles.btnLuulai}>
                                        <Text style={{textAlign:'center',paddingVertical:5,color:'#FFFFFF',fontSize:15,fontWeight:'bold',fontStyle:'italic'}}>Lưu lại</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{restartData()}} style={ styles.btnLuulaii}>
                                        <Text style={{textAlign:'center',paddingVertical:5,color:'#FFFFFF',fontSize:15,fontWeight:'bold',fontStyle:'italic'}}>Trở lại</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </Modal>
        <View>
            <Modal visible={showModalUpdate}>
                <View style={styles.modalAdd}>
                    <View >
                        <Text style={styles.headerModal}>THÔNG TIN TRUYỆN</Text>
                    </View>
                    <View style={styles.abc}>
                            <Image source={{uri: anhBia}} style={styles.avatar} />
                            <View style={styles.tt}>
                                <View style={{marginLeft:15, display:'flex',justifyContent:'center'}}>
                                            <View style={styles.row}>
                                                <Text style={styles.txt1}>Tiêu đề</Text> 
                                                <Text style={styles.gia1}>{`: ${tieuDe}`}</Text>
                                            </View> 
                                            <View style={styles.row}>
                                                <Text style={styles.txt1}>Thể loại</Text>
                                                <Text style={styles.gia1}>{`: ${theLoai}`}</Text>
                                            </View>  
                                            <View style={styles.row}>
                                                <Text style={styles.txt1}>Số tập</Text> 
                                                <Text style={styles.gia1}>{`: ${soTap}`}</Text>
                                            </View>
                                            <View style={styles.row}>
                                                <Text style={styles.txt1}>Tình trạng</Text>
                                                <Text style={styles.gia1}>{`: ${tinhTrang?'Hoạt động':'Full'}`}</Text>
                                            </View>  
                                </View>
                             </View>
                     </View>
                     <View >
                        <Text style={styles.headerModal}>SỬA THÔNG TIN TRUYỆN</Text>
                    </View>
                    <View >
                        <Text style={showLoading?styles.textHien1:styles.textAn}>Đang tải ...</Text>
                    </View>
                    <View style={styles.scrEdit} >
                        <ScrollView  >
                            <View style={{paddingHorizontal:10}}>
                            <Text style={styles.hotentop}>Tên truyện</Text>
                            <TextInput style={{borderWidth:1,  borderColor:'#444C6E',color:'#48517B',paddingLeft:5,backgroundColor:'#CBFAFE'}} value={name}  onChangeText={(value)=>{setName(value)}} />
                            </View>
                            <View style={{paddingHorizontal:10}}>
                                <Text style={styles.hoten}>Thể loại</Text>
                                <TextInput style={{borderWidth:1,  borderColor:'#444C6E',color:'#48517B',paddingLeft:5,backgroundColor:'#CBFAFE'}} value={category} onChangeText={(value)=>{setcategory(value)}} />
                            </View>
                            <View style={{paddingHorizontal:10}}>
                                <Text style={styles.hoten}>Tác giả</Text>
                                <TextInput style={{borderWidth:1,  borderColor:'#444C6E',color:'#48517B',paddingLeft:5,backgroundColor:'#CBFAFE'}} value={tacGia} onChangeText={(value)=>{settacGia(value)}} />
                            </View>
                            <View style={{paddingHorizontal:10}}>
                                <Text style={styles.hoten}>Năm phát hành</Text>
                                <TextInput style={{borderWidth:1,  borderColor:'#444C6E',color:'#48517B',paddingLeft:5,backgroundColor:'#CBFAFE'}} value={namPhatHanh} onChangeText={(value)=>{setnamPhatHanh(value)}} />
                            </View>
                            <View style={{paddingHorizontal:10}}>
                                <Text style={styles.hoten}>Số tập</Text>
                                <TextInput style={{borderWidth:1,  borderColor:'#444C6E',color:'#48517B',paddingLeft:5,backgroundColor:'#CBFAFE'}} value={total_chapters} onChangeText={(value)=>{settotal_chapters(value)}} />
                            </View>
                            <View style={{paddingHorizontal:10}}>
                                <Text style={styles.hoten}>Nội dung</Text>
                                <TextInput style={{borderWidth:1,  borderColor:'#444C6E',color:'#48517B',paddingLeft:5,backgroundColor:'#CBFAFE'}} value={noiDung} onChangeText={(value)=>{setnoiDung(value)}} />
                            </View>
                            <View style={{paddingHorizontal:10,marginBottom:15}}>
                                <Text style={styles.hoten}>Ảnh bìa</Text>
                                <TextInput style={{borderWidth:1,  borderColor:'#444C6E',color:'#48517B',paddingLeft:5,backgroundColor:'#CBFAFE'}} value={thumbnail} onChangeText={(value)=>{setthumbnail(value)}} />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{flexDirection:'row',alignSelf:'center',marginTop:50}}>
                        <TouchableOpacity onPress={()=>{themTruyen(id)}} style={ styles.btnLuulai}>
                                            <Text style={{textAlign:'center',paddingVertical:5,color:'#FFFFFF',fontSize:15,fontWeight:'bold',fontStyle:'italic'}}>Lưu lại</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{restartData()}} style={ styles.btnLuulaii}>
                                            <Text style={{textAlign:'center',paddingVertical:5,color:'#FFFFFF',fontSize:15,fontWeight:'bold',fontStyle:'italic'}}>Trở lại</Text>
                        </TouchableOpacity>
                     </View>
                 </View> 
            </Modal>
        </View> 
    </View>
)
}
const styles=StyleSheet.create({
    list:{ 
        maxHeight:800, 
    },
    tenNguoiDung:{ 
        borderWidth:1,
        marginTop:25,
        marginBottom:5,
        marginHorizontal:90, 
        borderColor:'#424242',
        borderRadius:20,
        backgroundColor:'#D3D3D3'
    },
    tenNguoiDung1:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:18,
        textDecorationLine:'underline',
        color:'#424242',
        fontStyle:'italic',  
        paddingVertical:2,
        color:'#888985'
         
    } ,
    btnThemTruyen:{ 
        backgroundColor:'#757576', 
        width:80,  
        borderRadius:8,
        borderWidth:1,
        borderColor:'#FFFFFF', 
        alignSelf:'center',
        marginBottom:5
    },
    header:{
        borderColor:'#FFFFFF', 
        borderBottomWidth:1,
        borderBottomStartRadius:25,
        borderLeftWidth:0.8,
        borderBottomRightRadius:25,
        borderRightWidth:0.8,
    },  
    headerModal:{ 
        borderWidth:1,
        textAlign:'center',
        width:250,
        fontSize:18,
        fontStyle:'italic',
        fontWeight:'bold',
        alignSelf:'center',
        marginTop:15,
        borderRadius:15,
        borderColor:'#484848',
        color:'#E8E8E8',
        backgroundColor:'#A3A3A3'
    },  
    modalAdd:{  
        backgroundColor:'#D3D3D3' ,
        height:710, 
    }, 
    hoten:{
        borderTopWidth:1,
        width:100,
        textAlign:'center',borderLeftWidth:1,
        borderRightWidth:1,
        borderTopLeftRadius:3,
        borderTopRightRadius:3,
        color:'#48517B',
        fontWeight:'bold',
        fontSize:12,
        borderColor:'#48517B' ,
        marginTop:25
    } , 
    hotenbot:{
        borderTopWidth:1,
        width:100,
        textAlign:'center',borderLeftWidth:1,
        borderRightWidth:1,
        borderTopLeftRadius:3,
        borderTopRightRadius:3,
        color:'#48517B',
        fontWeight:'bold',
        fontSize:12,
        borderColor:'#48517B' ,
        marginTop:25,
        marginBottom:15
    }, 
    hotentop:{
        borderTopWidth:1,
        width:100,
        textAlign:'center',borderLeftWidth:1,
        borderRightWidth:1,
        borderTopLeftRadius:3,
        borderTopRightRadius:3,
        color:'#48517B',
        fontWeight:'bold',
        fontSize:12,
        borderColor:'#48517B' ,
        marginTop:10
    } ,
    btnLuulai:{ 
        backgroundColor:'#757576', 
        width:120,  
        borderRadius:8,
        borderWidth:1,
        borderColor:'#FFFFFF', 
        alignSelf:'center',
        marginBottom:5,
        marginRight:25
    } ,
    btnLuulaii:{ 
        backgroundColor:'#757576', 
        width:120,  
        borderRadius:8,
        borderWidth:1,
        borderColor:'#FFFFFF', 
        alignSelf:'center',
        marginBottom:5,
        marginLeft:25
        
    },
    avatar:{ 
        width:80,
        height:120, 
        borderWidth:2,
        borderColor:'#FFFFFF',
        marginLeft:40
    } ,
    tt:{
        width:150,
        display:"flex",
        justifyContent:'center',
        marginStart:10
    }, 
    row:{
        display:'flex',
        flexDirection:"row",
        marginVertical:3
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
    abc:{
        flexDirection:'row', 
        marginTop:15
    },
    scrEdit:{
        height:250,
        borderWidth:2,
        borderColor:'#FFFFFF',
        marginTop:15,  
        marginHorizontal:10,
        paddingVertical:5,
        borderRadius:12
    },
    textHien:{
        alignSelf:'center',
        color:'#4C4C4E',
        marginVertical:10,
        backgroundColor:'#B2B2B2',
        borderWidth:1,
        borderRadius:5,
        paddingVertical:5,
        paddingHorizontal:10,
        borderColor:'#FFFFFF',
        fontWeight:'bold',
        fontStyle:'italic'
    },
    textHien1:{
        alignSelf:'center',
        color:'#E8E8E8',
        marginVertical:10,
        backgroundColor:'#A3A3A3',
        borderWidth:1,
        borderRadius:5,
        paddingVertical:5,
        paddingHorizontal:10,
        borderColor:'#FFFFFF',
        fontWeight:'bold',
        fontStyle:'italic'
    },
    textAn:{
        width:0,
        height:0
    }
})