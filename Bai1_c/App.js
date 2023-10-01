import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    
    <LinearGradient
     style={styles.container}
     colors={["#C7F4F6" , "#D1F4F6","#E5F4F5", "#00CCF9"]}
     start={{x:0, y:0.8}}
     end={{x:0,y:1}}
     
     >
      <View style={styles.view1}>CODE</View>
      <View style={styles.view2}>
        <View>
          <Text style={{fontWeight:"bold" , fontSize : "25px" , font: "#000000" , lineHeight: "29.3px", textAlign: "center", top:"70px"}}>VERIFICATION</Text>
        </View>
        <View style={{}}>
          <Text style={{top: "120px", fontWeight:"bold" , fontSize:"20px" , lineHeight:"15px", color:"#000000" }}>Enter ontime password sent on</Text>
          <Text style={{top:"120px",fontWeight:"bold",fontSize:"20px", loneHeight:"15px", color:"#000000", textAlign:"center" }}>++849092605798</Text>
        </View>
      </View>
      <View style={styles.view3}>
        <View style={styles.inputCode}></View>
        <View style={styles.inputCode}></View>
        <View style={styles.inputCode}></View>
        <View style={styles.inputCode}></View>
        <View style={styles.inputCode}></View>
        <View style={styles.inputCode}></View>
      </View>
      <View style={styles.view4}>
        <View style={styles.viewbottom}><button style={styles.button1}>VERIFY CODE</button></View>
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
  view1: {
    flex: 4,
    top:"100px",
    fontSize:"50px",
    lineHeight:"40px",
    fontWeight:"bold",
    color:"#000000",
  },

  view3: {
    flex:2,
    marginTop:"150px",
    Width:"300px",
    flexDirection: "row",
    justifyContent: "space-between",
  }, 
  view4:{
    flex:4,
  },
  button1:{
    backgroundColor:"#E3C000",
    color:"#333",
    fontWeight: "bold",
    fontSize:"20px",
    width:"360px",
    height:"48px",
    textTransform:"uppercase",
    border:"none",
  },
  inputCode:{
    height:"50px",
    width:"50px",
    border:"1px solid black"
  }
});
