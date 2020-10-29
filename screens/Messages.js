import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView
} from 'react-native';

//import SantaAnimation from '../components/SantaClaus.js';
import db from '../config';
import firebase from 'firebase';
import { Value } from 'react-native-reanimated';



export default class Messages extends Component{
  constructor(props){
    super(props);
    this.state = {
      question:'',
      reply:'',
      userId:firebase.auth().currentUser.email,
      roomId:'',
      character:this.props.character,
      display:""
    }
  }
  sendQuestion=(q,r)=>{
    db.collection('messages').add({
      question:q,
      roomId:r
    })
  }
  getQ=()=>{
    db.collection("messages").where("roomId","==",roomId).get()
    .onSnapshot(s=>{
      var q=s.val();
      this.setState({display:q})
    })
  }
componentDidMount(){
  this.getQ()
}
  render(){
    if(character===1){
        
      <View>
      <Image
      source={require("../assets/Jean.png")}

      />
      </View>
    
  }else  if(character===2){
        
    <View>
    <Image
    source={require("../assets/Amelie.png")}

    />
    </View>
  
}else  if(character===3){
        
  <View>
  <Image
  source={require("../assets/Isabelle.png")}

  />
  </View>

}else  if(character===4){
        
  <View>
  <Image
  source={require("../assets/Owen.png")}

  />
  </View>

}else  if(character===5){
        
  <View>
  <Image
  source={require("../assets/Robert.png")}

  />
  </View>

}
   return(
     <KeyboardAvoidingView behavior = 'padding' enabled>
       <ScrollView>
     <View>
     <Text>{this.state.display}</Text>  
       
     
     <TouchableOpacity
        onPress = {()=>{this.sendQuestion(this.state.question,this.state.roomId)
        Alert.alert('Question Sent!')
      }}> 
      <Text>Send</Text>
      </TouchableOpacity>
      
          <TextInput 
          placeholder = 'Type Your Question..' 
          multiline = {"true"} 
          onChangeText = {(t)=>{this.setState({question:t})
        }}
          value={this.state.question}
        ></TextInput>
      
    
    

      
     </View>
     </ScrollView>
     </KeyboardAvoidingView>
   ) 
  }
}  