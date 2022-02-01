import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { BiSearchAlt2 } from "react-icons/bi";
import { MdAttachFile } from "react-icons/md";
import { FiMoreVertical } from "react-icons/fi";
import { BsEmojiLaughing } from "react-icons/bs";
import { BsFillMicFill } from "react-icons/bs";
import{AiOutlinePlus} from "react-icons/ai";


import { BiSend } from 'react-icons/bi';
import "./assets/css/Chat.css";

function Chat() {
    const [input, setInput] = useState('')
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("Your type", input);
        setInput('');
    }

    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src={`https://robohash.org/${seed}.png`} />
                <div className='chat__headerInfo'style={{color:"#a8b3bd"}}>
                    <h3>Room name</h3>
                   
                </div>
               
            </div>
            <div className='chat__body'>
                
                <p className={`chat__message ${true && 'chat__recevier'}`}>
                    <span className='chat__name'>Haziq</span>
                    Hey guys
                    <span className='chat__timestamp'>3.32pm</span>
                </p>
            </div>
            <div className='chat__footer'>
                
                <span className='navi'>
                <IconButton className="parent">
                    <AiOutlinePlus className="icon" style={{color:"#a8b3bd"}}/>
                </IconButton>

                </span>
                <IconButton>
                    <BsEmojiLaughing style={{color:"#a8b3bd"}}/>
                </IconButton>
                <IconButton>
                    <BsFillMicFill style={{color:"#a8b3bd"}}/>
                </IconButton>
                <form>
                    <input value={input} onChange={(e) =>
                        setInput(e.target.value)
                    }
                        placeholder='Type a message'
                        type='text' ></input>
                    <button onClick={sendMessage} type='submit'>Send a message</button>
                </form>
                <IconButton>
                    <BiSend style={{color:"#a8b3bd"}}/>
                </IconButton>
            </div>
        </div>
    );
}

export default Chat;
