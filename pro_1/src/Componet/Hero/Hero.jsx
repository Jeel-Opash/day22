import "./Hero.css";
import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'

const Hero = ({ herodata, herocount, setHeroCount, playStatus, setPlayStatus }) => {
    return (
        <div className="hero">
            <div className="hero-text">
                <p>{herodata.text1}</p>
                <p>{herodata.text2}</p>
            </div>

            <div className="hero-explore">
                <p>Explore the feature</p>
                <img src={arrow_btn} alt="arrow" />
            </div>

            <div className="hero-dot-play">
                <ul className="hero-dots">
                    <li onClick={() => setHeroCount(0)}  className={herocount === 0 ? "hero-dot orange" : "hero-dot"}/>
                    <li
                        onClick={() => setHeroCount(1)}
                        className={herocount === 1 ? "hero-dot orange" : "hero-dot"}
                    />
                    <li
                        onClick={() => setHeroCount(2)} className={herocount === 2 ? "hero-dot orange" : "hero-dot"} />
                </ul>
                <div className="hero-play">
                    <img onClick={()=>setPlayStatus(!playStatus)} 
                    src={playStatus?pause_icon:play_icon} alt=""/>
                    <p>See the Video</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
