import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return <div className ="hero-banner">
    <div className="content">
        <div className="text-content">
        <h1>SALES</h1>
               <p>Myntra is India’s one of the biggest fashion and casual lifestyle products ecommerce company which have headquartered in Bangalore, Karnataka. its open as ecommerce marketplace also so today we learn about How to Sell on Myntra as become a seller and sell your fashion and causal lifestyle products on Myntra </p>
                  <div className="ctas">
                <div className ="banner-cta">Read More </div>
                <div className ="banner-cta v2">Shop Now </div>



                  </div>

         </div>

        
        <img className="banner-img" src={BannerImg} alt="" />
    </div>


    </div>
    

};

export default Banner;
