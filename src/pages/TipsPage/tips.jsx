import { checkToken } from '../../utilities/users-service';

export default function TipsPage() {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }
  
  return (
    <main className="TipsPage">
    <>
      <h1>Tips For Traveling With your Kids</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
    </main>
  );
}






