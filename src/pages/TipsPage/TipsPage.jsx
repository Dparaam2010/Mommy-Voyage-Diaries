import * as tipsAPI from "../../utilities/tips-api"
import { useEffect, useState } from "react";
import TipCard from "../../components/TipCard/TipCard";
import './TipsPage.css';

export default function TipsPage() {
      const [tips, setTips] = useState([])

      useEffect(function (){
        (async function() {
          const allTips = await tipsAPI.getAll()
          setTips(allTips)
        })()
      }, [])
      
    const tipsList = tips.map((tip,idx) => <TipCard tip={tip} tips={tips} setTips={setTips} key={idx} />)    

  return (
    <main className="TipsPage">
    <>
      <h1>HELLO 👋🏾</h1>
      <h2> Welcome to Mommy's Little Travel Treasures! </h2>

      <h3> Where we believe that being a mom doesn't mean giving up your love for adventure. If you're a travel enthusiast and a mom, you're in the right place!
      At Mommy's Little Travel Treasures, we're here to inspire, support, and celebrate moms who have a passion for exploring the world, one adventure at a time. We understand the unique challenges and joys that come with traveling as a family, and we're dedicated to helping you make the most of your journeys.</h3>
      <h4> We're all about making travel with little ones a breeze. From packing hacks to navigating airports and keeping kids entertained on the road, we've got you covered.</h4>
      <h4> Join our community of fellow travel-loving moms, share your experiences, and connect with like-minded adventurers. We're all in this together!</h4>
      <h2>LATEST TRAVEL TIPS</h2>
      {tips.length ? tipsList : "No Tips Yet"}
      <h3>🚀 Stay Tuned:Keep an eye on our blog for more helpful travel tips, destination guides, and family-friendly tips and tricks. We're here to support you on your journey to making lasting travel memories with your little ones.</h3>
      <h2>Happy travels!</h2>
    </>
    </main>
    
  );
}






