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
      <View style={styles.view1}> </View>
      <View style={styles.view2}>
        <View>
          <Text style={{fontWeight:"bold" , fontSize : "25px" , font: "#000000" , lineHeight: "29.3px", textAlign: "center",}}>GROW</Text>
          <Text style={{fontWeight:"bold" , fontSize : "25px" , font: "#000000" , lineHeight: "29.3px", textAlign: "center",}}>YOUR BUSINESS</Text>
        </View>
        <View style={{}}>
          <Text style={{top: "50px", fontWeight:"bold", width:"300px" , height:"36px", color:"#000000" }}>We will help you to grow your business using</Text>
          <Text style={{top:"40px",fontWeight:"bold", width:"300px" , height:"36px", color:"#000000", textAlign:"center" }}>online server</Text>
        </View>
      </View>
      <View style={styles.view3}>
        <View style={styles.view4}><button style={styles.button1}> Login</button></View>
        <View style={styles.view4}><button style={styles.button1} > Sign Up</button></View>
      </View>
      <View style={styles.bottom}>
        <View>HOW WE WORK?</View>
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
    marginTop:"50px",
    width: "150px",
    height: "300px",
    borderColor: "#000000",
    borderWidth: "20px",
    borderRadius: "50%",
  },
  view2: {
    flex: 3,
    top : "30px",
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
    width:"119px",
    height:"48px",
    borderRadius:"10px",
    margin:"25px",
    textTransform:"uppercase",
    border:"none"
  },
  bottom:{
    flex:6,
    fontWeight:"bold",
    fontSize:"20px",
    textAlign:"center",
  }
});
