import { useEffect, useState } from "react";
import BackGround from "./Componet/background/BackGround";
import Navbar from "./Componet/Navbar/Navbar";
import Hero from "./Componet/Hero/Hero";

const App = () => {
  let herodata = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passion" },
    { text1: "Give in to", text2: "your passions" },
  ];

  const [herocount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count+1})
    },3000);
    return ()=>clearInterval(setInterval)
  },[])

  return (
    <div>
      <BackGround playStatus={playStatus} heroCount={herocount} />
      <Navbar/>
      <Hero
      setPlayStatus={setPlayStatus}
      playStatus={playStatus}
      heroCount={herocount}
      setHeroCount={setHeroCount}
      herodata={herodata[herocount]}/>
    </div>
  );
};

export default App;
