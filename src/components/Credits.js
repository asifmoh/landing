import React, { useEffect } from "react";
import bounce from "../script/bounce";


export default function Credits() {
  useEffect(() => {
    document.title = "Mothercode | Developers ";

    bounce();
  }, []);
// Styles
const bodyStyles = {
  background: "#0a192f",
  width: "100%",
  height: "100vh",
  overflowX: "hidden"
}
const headerStyles = {
  textAlign: "center",
  color:"#fff",
}
const cardContainerStyles = {
  width: "300px",
  height: "500px",
  background: "#fff",
  borderRadius: 35,
  boxShadow: "1px 1px 35px #444"
};
const imgContainerStyles = {
  backgroundColor:"#fff",
  height: "35%",
  margin: 0,
  borderTopRightRadius: 35,
  borderTopLeftRadius: 35,
  background: "#444",
  backgroundSize: "cover"
}
const avatarContainerStyles = {
  width: "150px",
  height: "150px",
  zIndex: "9",
  position: "relative",
  top: "-85px",
  left: "65px",
  right: "0",
  margin: "0 auto",
  border: "10px solid #fff",
  background: "#000",
  backgroundSize: "cover",
  display: "inline-block",
  textAlign: "center",
  borderRadius: "50%"
};
const titleStyles = {
  color:"#555",
  fontWeight: "100",
  outline: "none",
  margin: "0px",
  display: "inline-block",
  width: "100%",
  textAlign: "center",
  position: "relative",
  top: "-75px"
};
const subTitleStyles = {
  position: "relative",
  top: "-95px",
  textAlign: "center",
  fontWeight: "100",
  color: "#888"
};
const bioContainerStyles = {
  position: "relative",
  top: "-95px"
};
const bioStyles = {
  color: "#444",
  padding: "0 30px",
  textAlign: "center"
};


const cardBackStyles = {
  height: 500,
  width: 300,
  position: "absolute",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  margin: "auto",
  borderRadius: "35px",
  boxShadow: "1px 1px 35px #444",
  background: "')",
  backgroundSize: "cover",
  backgroundPosition: "right"
}

const imgStyles = {
  width: 300,
  borderTopRightRadius: 35,
  borderTopLeftRadius: 35
}

const avatarImgStyles = {
  width: "100%",
  position: "absolute",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  margin: "auto",
  borderRadius: "50%"
}

const cardBackImgStyles = {
  height: "100%",
  width: "100%",
  borderRadius: 35,
  position: "absolute"
  
}

// Components
class CardImg extends React.Component {
  
  render(){
    return (
       <div style={imgContainerStyles} className="imgContainer">
            <img src={this.props.imgSrc} className="img" style={imgStyles} alt="Mothercode" />
       </div>
    )
  }
}
class CardAvatar extends React.Component {
 
  render(){
    return (
      <div style={avatarContainerStyles} className="infoContainer">
        <img src={this.props.avatarSrc} style={avatarImgStyles} alt="Mothercode" />
      </div>
    )
  }
}
class CardTitle extends React.Component {
  
  render(){
    return (
      <div className="titleDiv">
        <h2 id={this.props.targetId} style={titleStyles} className="title">{this.props.title}</h2>
        <h4 style={subTitleStyles} className="subTitle">{this.props.subTitle}</h4>
      </div>
    )
  }
}
class CardBio extends React.Component {

  render(){
    return (
      <div style={bioContainerStyles} className="bioContainer">
        <p style={bioStyles} className="bio">{this.props.bio}</p>
      </div>
    )
  }
}



class Card extends React.Component {
   constructor(props){
     super(props);
     this.state = {
       title : "Ahmed Elarosi",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      
     }
   }
   componentWillMount(){
     if (this.props.type === "austin"){
     this.setState({
       title: "Austin Stack",
       bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
     });
     } else if (this.props.type === "asif"){
       this.setState({
         title: "Asif Mohiuddin",
         bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
       })
     } else if (this.props.type === "victor"){
       this.setState({
         title: "Victor Maragioglio",
         bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
       })
      } else if (this.props.type === "alexey"){
        this.setState({
          title: "Alexey",
          bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        })
     }
   }
   render(){
     
     return (
         <div className="flipperContainer">
           <div className="flipper">
              <div style={cardContainerStyles} className="cardFront cardContainer">
                  <CardImg imgSrc={this.props.imgSrc} />
                  <CardAvatar avatarSrc={this.props.avatarSrc} />
                  <CardTitle targetId={this.props.targetId} title={this.state.title} subTitle={this.state.subTitle} />
                  <br /> <br />
                  <CardBio bio={this.state.bio} />
                 
              </div>
             <div style={cardBackStyles} className="cardBack">
               <img className="cardBackImg" style={cardBackImgStyles} src={this.props.cardBackImgSrc} alt="Mothercode" />
              
             </div>
            </div>
       </div>
     )
   }
 }

 
 class CardContainer extends React.Component {
   
   render(){
     return (
      <div style={bodyStyles} className="body">
         <h1 style={headerStyles} className="header">Mothercode Developer team</h1>
       
         <div className="flex">
           
          <Card imgSrc="https://i.gifer.com/7RRt.gif" avatarSrc="https://cdna.artstation.com/p/assets/images/images/010/557/510/smaller_square/meng-xiangning-llll11.jpg?1525071819" cardBackImgSrc="https://coolwallpapers.me/picsup/6076280-thor-hd-superheroes-artwork-digital-art-behance.jpg" targetId="navi" />
           
          <Card type="austin" imgSrc="https://i.pinimg.com/originals/71/e0/bb/71e0bb5e9ab3f84d3e1c05b044953861.gif" avatarSrc="https://cdna.artstation.com/p/assets/images/images/002/310/684/large/adam-ross-chris-evans-in-captain-america-2-the-winter-soldier.jpg?1460095493&dl=1" cardBackImgSrc="https://mocah.org/uploads/posts/330526-Captain-America-Mjolnir-Hammer-Shield-Avengers-Endgame-4K-iphone-wallpaper.jpg"/>
           
          <Card type="asif" imgSrc="https://thumbs.gfycat.com/NiftyConcreteAustraliansilkyterrier-size_restricted.gif" avatarSrc="https://cdn.myimgstock.com/myimgstock/preview/iron-man-face-wallpapers-hd-photo-44-11597068483ppvnhsa28z.jpg" cardBackImgSrc="https://www.xtrafondos.com/wallpapers/vertical/nuevo-traje-de-iron-man-6726.jpg"/>
          <Card type="victor" imgSrc="https://c.tenor.com/crNkPq4HPNgAAAAC/blue-code.gif" avatarSrc="https://thumbs.gfycat.com/DeterminedRepulsiveGossamerwingedbutterfly-size_restricted.gif" cardBackImgSrc="https://wallpaperaccess.com/full/2854002.jpg"/>
           
          
          <Card type="alexey" imgSrc="https://images.squarespace-cdn.com/content/v1/51be3e56e4b09edc5f81e74c/1551795556726-AYCIRFK3Z8SAZQ11RRF5/SciFi_LoaderBlue.gif" avatarSrc="https://i.pinimg.com/originals/58/1e/31/581e311dd463daa672a2edbf003c0d3d.jpg" cardBackImgSrc="https://www.xtrafondos.com/wallpapers/vertical/artwork-de-hulk-2020-6388.jpg"/>
         </div>
      </div>
     )
   }
 }
  return (
    <>
    
    <div>
          <CardContainer />
       </div>
    </>
  );
}
