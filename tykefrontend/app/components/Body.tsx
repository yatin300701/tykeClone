import Lottie from "react-lottie-player";
import Opportunities from "./Opportunities";
import heroAnimation from "~/assets/animations/Hero_animation_Investors_lottie.json";

export default function Body() {
  return (
   <div className="mid-body">
            <div className="PageTop">
                <div className="PageTopLeft">
                        <h1 className="h1">
                            Grow your wealth with <br/> higher returns
                        </h1>
                        <p>
                        Your platform for exclusive investment <br/> opportunities
                        </p>

                        <button className="getStarted">Get Started</button>
                </div>
                <div className="PageTopRight">
                    <Lottie animationData={heroAnimation} loop play style={{width:"520px", height:"510px"}}  />
                </div>
            </div>

            {/********** * *************************
             *****************  Details ************
             **************************** **********/}

            <div className="details">
                <div className="download">
                    <div className="qrcode-div">
                            <img src="https://tyke-assets.s3.amazonaws.com/Tyke_QR_2a43a00034.svg?src=&width=30&height=30&fit=cover&position=center&background[]=0&background[]=0&background[]=0&background[]=0&quality=0&compressionLevel=9&loop=0&delay=100&crop=null&contentType=image%2Fwebp"  className="qrcode"  alt="qrlogo"/>
                    </div>
                    
                    <div className="download_">
                            <p className="_heading">
                                Download the app now
                            </p>
                            <p className="_para">
                                Scan the QR code to get the <br/> app
                            </p>
                    </div>
                </div>
                <div className="subscribers">
                        <p className="subs_num">1,50,000+</p>
                        <p className="_heading">
                            Registered Subscribers
                        </p>
                        <p className="_para">      
                            from over 150 cities
                        </p>
                </div>
                <div className="funded">
                        <p className="subs_num">100+</p>
                        <p className="_heading">
                            Startups funded
                        </p>
                        <p className="_para">      
                            from over 1,200 applications
                        </p>
                </div>
            </div>         

   </div>
  )
}
