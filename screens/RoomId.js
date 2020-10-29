import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView
} from 'react-native';

//import SantaAnimation from '../components/SantaClaus.js';
import db from '../config';
import firebase from 'firebase';



export default class RoomId extends Component{
  constructor(props){
    super(props);
   
    this.state={
      id:'',
      userId:firebase.auth().currentUser.email
    }
}  

createRoomId(){
  return(
    Math.random().toString(36).substring(7)
  )
}

addRequest=async()=>{
  var r = this.createRoomId()
    var userId = this.state.userId
  db.collection('roomId').add({
    userId:userId,
    roomId:r
  })
    this.setState({id:r})
}

  render(){
        return(
          <KeyboardAvoidingView enabled behavior="padding">
            <ScrollView>
            <View style={styles.container} >
            <Text style={styles.title}>
              ADD ROOM ID, IF KNOWN
            </Text>

            <TextInput placeholder = 'RoomID'></TextInput>
            
            <TouchableOpacity style={styles.button}
            onPress={()=>this.addRequest()}>
                <Text>
                   Generate Room Id!
                </Text>
            </TouchableOpacity>
 
           
            <TouchableOpacity style={styles.button}
            onPress={()=>this.addRequest()}>
                <Text>
                   Generate Room!
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
            onPress={()=>this.props.navigation.navigate('Characters')}>
                <Text>
                   Start!
                </Text>
                </TouchableOpacity>

            </View>
            </ScrollView>
            </KeyboardAvoidingView>

            
        )
    }
}

const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'#FF7F50',
     alignItems: 'center',
     justifyContent: 'center'
   },
   
   title :{
     fontSize:65,
     fontWeight:'300',
     paddingBottom:30,
     color : '#00008b'
   },
   loginBox:{
     width: 300,
     height: 40,
     borderBottomWidth: 1.5,
     borderColor : '#ff8a65',
     fontSize: 20,
     margin:10,
     paddingLeft:10
   },
   KeyboardAvoidingView:{
     flex:1,
     justifyContent:'center',
     alignItems:'center'
   },
   modalTitle :{
     justifyContent:'center',
     alignSelf:'center',
     fontSize:30,
     color:'#ff5722',
     margin:50
   },
   modalContainer:{
     flex:1,
     borderRadius:20,
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:"#ffff",
     marginRight:30,
     marginLeft : 30,
     marginTop:80,
     marginBottom:80,
   },
   formTextInput:{
     width:"75%",
     height:35,
     alignSelf:'center',
     borderColor:'#ffab91',
     borderRadius:10,
     borderWidth:1,
     marginTop:20,
     padding:10
   },
   registerButton:{
     width:200,
     height:40,
     alignItems:'center',
     justifyContent:'center',
     borderWidth:1,
     borderRadius:10,
     marginTop:30
   },
   registerButtonText:{
     color:'#ff5722',
     fontSize:15,
     fontWeight:'bold'
   },
   cancelButton:{
     width:200,
     height:30,
     justifyContent:'center',
     alignItems:'center',
     marginTop:5,
   },
  
   button:{
     width:300,
     height:50,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:25,
     backgroundColor:"#008080",
     shadowColor: "#000",
     shadowOffset: {
        width: 0,
        height: 8,
     },
     shadowOpacity: 0.30,
     shadowRadius: 10.32,
     elevation: 16,
     padding: 10,
     marginTop:5
   },
   buttonText:{
     color:'#ffffff',
     fontWeight:'200',
     fontSize:20
   }
  })