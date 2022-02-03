import "./assets/css/Send.css";
import polygon from "./assets/images/Polygon-Primary-Color-Dark.svg";
import Binance from "./assets/images/binance.svg";
import SuperFluid from "./assets/images/SuperFluid.svg";
import baground from "./assets/images/stars-1475491.jpg";
export default function Send() {
    const address="0xD3998D9993B3310C8F739694C97103A5770dbB2E"
    function PublicAddress(event){
      const text= address.substring(0,6)+". . ."
      console.log(text)
      return(<>{text}</>)
      }
    return(

<div className="Send"><div style={{display:"flex",flex:"0.1",color:"white",fontSize:"34px",fontWeight:"bold",paddingLeft:"10%",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", paddingTop:"50px",backgroundColor:"#041c31",border:"2px solid #1B4266"}}>TRANSACTION CHANNEL

</div>

<div className="Pub_Container" style={{paddingTop:"50px"}}>
  <div className='Send_Container' style={{ backgroundColor:"rgb(253, 191, 253)",borderRadius:  "10px",
color:"white"}}>
   
  <img src={polygon}></img>
  </div>
  <div style={{height:"40px"}}></div>
  <div className='Send_Container' style={{ 
  borderRadius:  "10px",alignItems:"center"}}>
  <img src={Binance}style={{height:"150px",width:"250px",imageRendering: "high-quality"}}></img>
  
  </div>
  <div style={{height:"40px"}}></div>
  <div className='Send_Container' style={{ backgroundColor:"White",
  borderRadius:  "10px",alignItems:"center"}}>
   <img src={SuperFluid} style={{height:"150px",width:"250px",imageRendering: "high-quality"}}></img>
  
   </div>
   <div style={{height:"40px"}}></div>
   <div className='Send_Container' style={{ 
  borderRadius:  "10px",alignItems:"center" ,background:`url(${baground}) left / cover repeat-y`,backgroundSize:"2000px 400px"}}>
      
  <div style={{fontSize:"40px",fontWeight:"bolder",color:"rgb(252, 172, 0)",textShadow: "-2px 2px 0 #000"}}>NFTs</div>
  
  </div>
   
   </div></div>)}