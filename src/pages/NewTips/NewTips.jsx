import TipsForm from "../../components/TipsForm/TipsForm";
import './NewTip.css';

export default function NewTips() {
  return (
    <main className="NewTips">
    <>
      <h1>Share Your Wisdom with Other Moms</h1>
      <h3>✈️ We all know that traveling with little ones can be an adventure in itself. That's why we're here to share our best travel tips to make your journeys smoother and more enjoyable. </h3>
      <h2>ADD A TIP</h2>
      <TipsForm />
    </>
    </main>
  );
}
