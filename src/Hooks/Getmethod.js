import { useState } from "react";
import axios from 'axios'


function Getmethod() {

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const postdata = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://x8ki-letl-twmt.n7.xano.io/api:8WvB9utG/register_user', {
        email,
        password
      });
      console.log('User registered successfully:', response.data);
      // You can handle success response here (e.g., redirect to a success page)
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div>
      <form onSubmit={postdata}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );

}
export default Getmethod