import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput ,Button } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

export default function App() {
  return (
    
    <LinearGradient
     style={styles.container}
     colors={["#C7F4F6" , "#D1F4F6","#E5F4F5", "#00CCF9"]}
     start={{x:0, y:0.8}}
     end={{x:0,y:1}}
     
     >
      <View style={styles.viewHead}>
        <Entypo name="lock" size={100} color="black" />
      </View>
      <View style={styles.view2}>
        <View>
          <Text style={{fontWeight:"bold" , fontSize : "25px" , font: "#000000" , lineHeight: "29.3px", textAlign: "center",}}>FORGET</Text>
          <Text style={{fontWeight:"bold",weight:"700" , fontSize : "25px" , font: "#000000" , lineHeight: "29.3px", textAlign: "center",}}>PASSWORD</Text>
        </View>
        <View style={{}}>
          <Text style={{top: "50px", fontWeight:"bold", width:"300px" , height:"36px", color:"#000000" }}>Provide your account’s email for which you</Text>
          <Text style={{top:"40px",fontWeight:"bold", width:"300px" , height:"36px", color:"#000000", textAlign:"center" }}>want to reset your password</Text>
        </View>
      </View>
      <View style={styles.viewbody}>
          <View style={styles.view111}>
          <MaterialCommunityIcons name="email-outline" size={50} color="black" />
          </View>
         <View style={{justifyContent:"flex-start", top:"20px", fontSize:"20px" , color:"#000000"}}>Email</View>/
      </View>

      <View style={styles.view3}>
        <View style={styles.view4}><button style={styles.button1}>NEXT</button></View>
      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  viewHead:{
    top:"70px",
  },
  view2: {
    flex: 4,
    top : "80px",
  },
  view3: {
    flex:"4",
    marginTop:"100px",
    flexDirection: "row",
    justifyContent: "space-around",
  }, 
  button1:{
    backgroundColor:"#E3C000",
    color:"#333",
    fontWeight: "bold",
    fontSize:"20px",
    width:"300px",
    height:"70px",
    border:"6px solid #FF00FF",
    fontWeight:"bold",
    borderRadius:"10px",
    margin:"25px",
    textTransform:"uppercase",
  },
  viewbody:{
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    backgroundColor : "#C4C4C4",
    top:"100px",
    width:"300px",
  },
  view111:{
    maxWidth:"100px",
    padding:"10px",
    paddingLeft:"20px",
  }
});
