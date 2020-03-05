import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import ItemTruyen from './item_truyen' 

export default function ListTruyen({tenDN}){
    let listTruyen=[
        {
            maTruyen:'T001',
            thumbnail :'https://nxbkimdong.com.vn/sites/default/files/3_47.jpg',
            name:'Thám tử lừng danh Conan',
            category :'Trinh thám',
            total_chapters :1000,
            is_full :true,
            tacGia:'Aoyama Gosho',
            namPhatHanh:'1996',
            noiDung:'Kudo Shinichi là một thám tử trung học rất nổi tiếng, thường xuyên giúp cảnh sát phá án các vụ án khó khăn.[2] Trong một lần khi đang theo dõi 1 vụ tống tiền, cậu bị đồng bọn (thành viên của Tổ chức Áo đen) phát hiện. Chúng đã khiến cậu uống thử loại thuốc độc (APTX 4869) tổ chức vừa điều chế nhằm bịt đầu mối khi cậu bị đánh bất tỉnh nhưng thứ thuốc ấy không giết chết cậu mà khiến cậu teo nhỏ thành một đứa trẻ.[3] Sau đó,cậu tự xưng danh Edogawa Conan sống tại văn phòng thám tử Mori Kogoro cùng Ran Mori.Xuyên suốt xê-ri cậu âm thầm hỗ trợ ông Mori phá các vụ án. Đồng thời cậu cũng phải đi học lại tiểu học,kết thân với nhiều người và lập ra Đội thám tử nhí. Về sau một học sinh tiểu học bất đắc dĩ khác tên là Haibara Ai tiết lộ rằng cô chính là người đã tạo ra thuốc teo nhỏ,vì muốn thoát khỏi Tổ chức nên đã uống loại thuốc độc APTX4869 (cùng loại thuốc Conan bị ép uống) và cơ thể cũng bị teo nhỏ như Conan.[4] Trong vài vụ án liên quan đến Tổ chức Áo đen,Conan đã hỗ trợ các điệp viên của FBI và CIA.[5] Mới đây tác giả Aoyama đã tiết lộ một thông tin gây chấn động khi công bố ông trùm của tổ chức áo đen trong tập 95, thông tin này đã gây chấn động cho fan của bộ truyện tranh này khi bấy lâu nay họ vẫn nghĩ ông trùm áo đen là người thân mật với Shinichi. Năm 2007, Aoyama đã lên kế hoạch cho cái kết cho series nhưng đến hiện tại vẫn chưa ra mắt. [6] Bộ truyện dù còn khá lâu mới nhìn thấy hồi kết,nhưng ta có thể dự đoán đến 90% Shinichi và Ran sẽ kết hôn.Tuy vậy, vẫn có rất nhiều cuộc tranh cãi, hầu hết xuất phát từ fan Conan x Haibara (ShinShi). Và điều này cũng là nguyên nhân chính dẫn đến những cuộc khẩu chiến giữa hai fandom của Haibara và Ran Mori.'
        },
        {
            maTruyen:'T002',
            thumbnail :'https://upload.wikimedia.org/wikipedia/vi/1/17/Goku-kid1.png',
            name:'Bảy viên ngọc rồng',
            category :'Phiêu lưu',
            total_chapters :989,
            is_full :false,
            tacGia:'Toriyama Akira',
            namPhatHanh:'1984',
            noiDung:'Một cậu bé có đuôi khỉ được tìm thấy bởi một ông lão sống một mình trong rừng, ông đặt tên là Son Goku và xem đứa bé như là cháu của mình. Một ngày nọ Goku tình cờ gặp một cô gái tên là Bulma trên đường đi bắt cá về, Goku và Bulma đã cùng nhau truy tìm bảy viên ngọc rồng. Các viên ngọc rồng này chứa đựng một bí mật có thể triệu hồi một con rồng và ban điều ước cho ai sở hữu chúng. Trên cuộc hành trình dài đi tìm những viên ngọc rồng, họ gặp những người bạn (Yamcha, Krillin,Yajirobe, Thiên, Giáo tử, Oolong,...) và những đấu sĩ huyền thoại cũng như nhiều ác quỷ. Họ trải qua những khó khăn và học hỏi các chiêu thức võ thuật đặc biệt để tham gia thi đấu trong đại hội võ thuật thế giới được tổ chức hằng năm. Ngoài các sự kiện đại hội võ thuật, Goku và các bạn còn phải đối phó với các thế lực độc ác như Đại vương Pilaf, Quân đoàn khăn đỏ của Độc nhãn tướng quân, Đại ma vương Picollo và những đứa con của hắn. Chiến binh người Saiya: Radiz, Hoàng tử Saiyan Vegeta cùng tên cận vệ Nappa. Rồi họ đi đến Namek, gặp rồng thần của Namek; chạm trán Frieza, khi trở về Trái Đất đụng độ Nhóm android sát thủ (các Android 16, 17, 18,19, 20) và sau đó là quái vật từ tương lai Cell, Kẻ thù từ vũ trụ Majin Buu, thần hủy diệt Beerus, các đối thủ từ các vũ trụ song song...'
        },
        {
            maTruyen:'T003',
            thumbnail :'https://i.pinimg.com/originals/2b/57/e5/2b57e5f9e49194c8c2d3933801f89ecf.jpg',
            name:'Đảo hải tặc',
            category :'Phiêu lưu',
            total_chapters :960,
            is_full :true,
            tacGia:'Eiichiro Oda',
            namPhatHanh:'1997',
            noiDung:'Hai mươi hai năm sau kể từ khi Roger bị xử tử, một cậu thiếu niên tên là Monkey D. Luffy được truyền cảm hứng từ một hải tặc là thần tượng thuở nhỏ của mình là Shanks "Tóc đỏ", từ East Blue đã giong buồm ra khơi trên chuyến hành trình tìm kho báu huyền thoại One Piece và trở thành Vua hải tặc. Luffy bắt đầu tìm kiếm những người đồng đội để lập một băng hải tặc riêng cho mình, băng hải tặc Mũ Rơm. Luffy đã đụng độ với băng hải tặc Alvida, Đại tá chi nhánh Hải Quân Morgan “Tay rìu”; rồi cứu và có được thuyền viên đầu tiên là kiếm sĩ Roronoa Zoro. Zoro có ước mơ là hoàn thành lời hứa với người bạn thân quá cố, trở thành kiếm sĩ mạnh nhất thế giới. Tiếp đó một nữ đạo chích tên là Nami gia nhập băng với vai trò hoa tiêu và với ước mơ vẽ được bản đồ của toàn thế giới trong One Piece; một người có tài thiện xạ phi thường và hay nói dối tên là Usopp gia nhập băng với vị trí thiện xạ và ước mơ trở thành "chiến binh dũng cảm của biển cả"; Sanji - một phó đầu bếp ga lăng lại rất mê gái của một nhà hàng trên biển Baratie gia nhập với vị trí đầu bếp với ước mơ tìm thấy vùng biển huyền thoại "All blue"; cả băng được tặng một con tàu tên là Going Merry...'
        },
        {
            maTruyen:'T004',
            thumbnail :'https://photo-2-baomoi.zadn.vn/w1000_r1/2019_12_19_423_33373729/5d6fa3c45284bbdae295.jpg',
            name:'Có chàng trai viết lên cây',
            category :'Tình cảm',
            total_chapters :3,
            is_full :true,
            tacGia:'Phan Mạnh Quỳnh',
            namPhatHanh:'2019',
            noiDung:'Mắt biếc xoay quanh mối tình đơn phương của Ngạn với Hà Lan, cô bạn gái có cặp mắt hút hồn nhưng cá tính bướng bỉnh. Một chuyện tình nhiều cung bậc, từ ngộ nghĩnh trẻ con, rồi tình yêu thuở học trò trong sáng, trải qua bao biến cố, trở thành một cuộc “đuổi hình bắt bóng” buồn da diết nhưng không nguôi hi vọng. Câu chuyện càng trở nên éo le hơn khi Trà Long - con gái của Hà Lan lớn lên lại nhen nhóm một tình yêu như thế với Ngạn. Phim lấy bối cảnh ở thập niên 1960 và 1970. Nhân vật chính là Ngạn, cậu bé sinh ra và lớn lên tại ngôi làng Đo Đo, tỉnh Quảng Nam (cũng là nguyên quán của tác giả Nguyễn Nhật Ánh). Cậu yêu mến cô bạn tên Hà Lan, người có đôi mắt đẹp tuyệt trần gọi là "mắt biếc". Cả hai cùng trải qua biết bao nhiêu kỷ niệm tại làng quê nghèo này, dần dần trong Ngạn nảy sinh một tình yêu thầm lặng dành cho Hà Lan. Khi lớn lên, cả hai đều đi học trên thành phố Huế. Hà Lan ở chung nhà với người cô trong khi Ngạn ở chung nhà với cậu Huấn...'
        },
        {
            maTruyen:'T005',
            thumbnail :'https://vcdn-vnexpress.vnecdn.net/2019/11/14/IMG-9357-JPG-7490-1573703159.jpg',
            name:'10 năm hẹn',
            category :'Tâm lý',
            total_chapters :10,
            is_full :true,
            tacGia:'Ngô Bá Khá',
            namPhatHanh:'2019',
            noiDung:'Tác phẩm lột tả chân thực cảm xúc của tác giả Ngô Bá Khá ( tức Khá Bảnh ) trong quãng thời gian bị tạm giam tại cơ quan công an thị xã Từ Sơn khi anh bị buộc tội tổ chức đánh bạc và tham gia đánh bạc. Cùng lúc điều tra thì viện kiểm soát nhân dân tỉnh Bắc Ninh cũng cho biết qua xét nghiệm cho thấy anh Bảnh cùng với các bị cáo liên quan có dương tính với ma túy. Cùng với kinh nghiệm đi tù thì anh cho ra đời tác phẩm như một lời tiên tri về cái giá mà anh phải trả đó là "10 năm tù giam". Bên cạnh đố tác phẩm đã được anh Khá cho ra đời vào những ngày ngồi trong trại giam chờ xét xử,nó giúp việc lột tả chân thực cảm giác của tác giả cũng như cho thấy được sự ăn năn, hối lỗi sau những việc làm mình gây ra một các rất chi là trực quan. Anh đã đi và cho ra đời tác phẩm như muốn gửi gắm tâm tư đến người thân, anh em bạn bè, và đặc biệt hơn hết đó là lời xin lỗi đến tất cả các fan hâm mộ nồng nhiệt của anh. Và tựa đề tác phẩm cũng một phần nói lên được thông điệp mà anh Bảnh muốn nhắn nhủ tới các fan hâm mộ đó là anh còn nợ các em một lời hẹn, hẹn các em vào mùa xuân năm 2030, anh love tất cả các em .'
        },
        {
            maTruyen:'T006',
            thumbnail :'https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_176816.jpg',
            name:'Cô bé quàng khăn đỏ',
            category :'Cổ tích',
            total_chapters :1,
            is_full :false,
            tacGia:'Hoàng Bá Long',
            namPhatHanh:'1697',
            noiDung:'Phiên bản phổ biến nhất của truyện này là câu chuyện kể bởi Anh em nhà Grimm, viết vào thế kỉ 19.[1] Chuyển kể về một cô bé, gọi là cô bé quàng khăn đỏ, đi vào rừng để đến nhà bà đưa thức ăn cho người bà đang bị bênh. Một con sói theo dõi cô bé và lập kế hoạch để ăn thịt cô. Con sói hỏi cô bé đang đi đâu và cô đã ngây thơ trả lời, sau đó, con sói bảo cô bé đi hái hoa. Trong lúc đó, sói đến nhà ăn thịt người bà và đóng giả thành bà của cô bé quàng khăn đỏ. Khi cô bé đến, cô cũng bị sói ăn thịt luôn. Một bác thợ săn đã tới mổ bụng sói, cứu được cả cô bé và bà của cô. Đá được bỏ vào bụng sói và làm sói chết.'
        },
        {
            maTruyen:'T007',
            thumbnail :'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuqeuxLsyyzb2k4_WMG8e0cmSnis3RwW6A_KTpVtqi7RWbRchO',
            name:'Làng Ế vợ',
            category :'Hài kịch',
            total_chapters :7,
            is_full :true,
            tacGia:'Hãng phim Bình Minh',
            namPhatHanh:'2015',
            noiDung:'Làng Ế Vợ là câu chuyện dở khóc dở cười xoay quanh những anh chàng trai làng FA mà nhân vật chính là Nhật Tinh Ngao (do Chiến Thắng thủ vai). Quá bất lực khi nhìn gái làng lần lượt bị người ngoài cướp mất, hội trai làng “ế vợ” này đã được thành lập để bảo vệ gái làng khỏi những anh chàng muốn tăm tia.…'
        },
        {
            maTruyen:'T008',
            thumbnail :'https://znews-photo.zadn.vn/w1024/Uploaded/ovhpaob/2019_05_07/dienbien_1.jpg',
            name:'Chiến thắng Điện Biên Phủ',
            category :'Tài liệu',
            total_chapters :4,
            is_full :true,
            tacGia:'Quân đội ND Việt Nam',
            namPhatHanh:'1954',
            noiDung:'Bộ Tổng Tư lệnh Quân đội Quốc gia và dân quân Việt Nam nhìn nhận trận Điện Biên Phủ như cơ hội đánh tiêu diệt lớn, tạo chiến thắng vang dội để từ đó chấm dứt kháng chiến trường kỳ, và đã chấp nhận thách thức của quân Pháp để tiến công tập đoàn cứ điểm Điện Biên Phủ. Đây là trận quyết chiến chiến lược của QĐNDVN. Trung ương Đảng Lao động Việt Nam (nay là Đảng Cộng sản Việt Nam) đã hạ quyết tâm: "Tiêu diệt tập đoàn cứ điểm Điện Biên Phủ để tạo nên một bước ngoặt mới trong chiến tranh, trước khi đế quốc Mỹ can thiệp sâu hơn vào Đông Dương"...'
        },
        {
            maTruyen:'T009',
            thumbnail :'https://dep.com.vn/wp-content/uploads/2019/12/poster-tre-trau-khoi-nghiep-featured-image.jpg',
            name:'Trẻ trâu lập nghiệp',
            category :'Tâm lý',
            total_chapters :2,
            is_full :false,
            tacGia:'Choi Jeong-Yeol',
            namPhatHanh:'2019',
            noiDung:'Những tưởng đường đời sẽ dễ thở hơn trường học, đôi bạn Taek-Il (Park Jung-Min) và Sang-Pil (Jung Hae-In) quyết nghỉ học để dấn thân vào đời. Taek-il xin làm shipper cho tiệm mì của đầu bếp Ma Dong-seok “cục súc", còn Sang-Pil đi theo bọn cho vay nặng lãi đòi nợ thuê. Từ đây hai thanh niên "trẻ trâu" mới có cơ hội nếm vị trưởng thành sau những lần bị đời vùi dập.'
        },
        {
            maTruyen:'T010',
            thumbnail :'https://dep.com.vn/wp-content/uploads/2019/11/poster-phim-ky-uc-kinh-hoang.jpg',
            name:'Ký ức',
            category :'Tình cảm',
            total_chapters :1,
            is_full :true,
            tacGia:'Đang cập nhập',
            namPhatHanh:'Đang cập nhập',
            noiDung:'Đang cập nhập'
        }
    ]

    const [dSTruyen,setDSTruyen]=useState(listTruyen);

    const hamXoa=(maTruyen)=>{
        let NeuListTruyen=dSTruyen; 
        NeuListTruyen=NeuListTruyen.filter((subject)=>subject.maTruyen!=maTruyen);
        listTruyen=NeuListTruyen;
        setDSTruyen(listTruyen);
    }
return(
    <View style={styles.list}> 
        <View style={styles.tenNguoiDung}>
        <Text style={styles.tenNguoiDung1}>{tenDN}</Text> 
        </View>  
        <View>
            <ScrollView style={{height:675}}>
                <FlatList data={dSTruyen} renderItem={({item})=> (<ItemTruyen item={item} hamXoa={hamXoa} />) } keyExtractor={(item,index)=>index}   />
            </ScrollView>
           
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
        marginBottom:10,
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
         
    } 
})