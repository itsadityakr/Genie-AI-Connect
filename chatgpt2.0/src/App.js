import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';
import { sendMsgToOpenAI } from './openai';
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState("");

  const handleSend = async () => {
    const res = await sendMsgToOpenAI(input);
    console.log(res);
  }
  return (
    <div className="App">
      <div className = "sideBar">
        <div className = "upperSide">
          <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" /><span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn"><img src={addBtn} alt="New Chat" className="addBtn" />New Chat</button>
          <div className="upperSideBottom">
            <button className="query"><img src={msgIcon} alt="Query" />What is Programming?</button>
            <button className="query"><img src={msgIcon} alt="Query" />How to use API!</button>
          </div>
        </div>
        <div className = "lowerSide">
          <div className="listItems"><img src={home} alt="Home" className="listItemsImg" />Home</div>
          <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg" />Saved</div>
          <div className="listItems"><img src={rocket} alt="Upgrade" className="listItemsImg" />Upgrade to Premium</div>
        </div>
      </div>
      <div className = "main">
        <div className="chats">
          <div className="chat">
            <img className = "chatImg" src={userIcon} alt="User Profile"/><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quas perspiciatis sit nobis laboriosam asperiores, mollitia ab rerum doloremque. Assumenda non nemo tenetur accusantium ad?</p>
          </div>
          <div className="chat bot">
            <img className = "chatImg" src={gptImgLogo} alt="GPT 2.0 Logo" /><p className="txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti aspernatur ut adipisci saepe distinctio odio veritatis, perspiciatis quod inventore esse atque et, vitae iste. Sapiente, culpa et accusamus itaque quia voluptate aliquid, unde tenetur vitae vel quam delectus odit necessitatibus suscipit. Consequatur eos iste doloremque laudantium quod aliquam culpa blanditiis, explicabo illo laborum aliquid tempore nihil quas provident in, fugiat odit esse? Iure architecto corrupti delectus rerum a sunt facilis quo tempore. Repudiandae laudantium qui magnam quod aliquid rerum in dolor nesciunt porro quasi odio ab modi harum iusto, nemo ea doloremque facilis consequuntur mollitia minima molestias provident incidunt blanditiis?</p>
          </div>
        </div>
          <div className="chatFooter">
            <div className="input">
            <input type="text" value={input} placeholder = "Send a Message" onChange={(e) => setInput(e.target.value)}/> <button className="send" onClick={handleSend}>Send<img src={sendBtn} alt="Send" /></button>
            </div>
            <p>Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT September 25 Version</p>
          </div>
      </div>
    </div>
  ); 
}

export default App;