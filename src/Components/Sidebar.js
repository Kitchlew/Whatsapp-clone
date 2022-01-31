import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from "@material-ui/core";
// import DonutLargeIcon from '@mui/icons-material/DonutLarge';
// import ChatIcon from '@mui/icons-material/Chat';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import './assets/css/Sidebar.css'
import { FiMoreVertical } from "react-icons/fi";
import { MdDonutLarge } from "react-icons/md";
import { BsFillChatFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import SidebarChat from './SidebarChat';
import db from '../firebases'


export default function Sidebar() {
  const [rooms, setRooms] = useState([]);
  console.log(rooms)

  /*useEffect(() => {
    db.collection('rooms').onSnapshot(snapshot => (
      setRooms(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data(),
        }
      )
      ))
    ))
  }, [])*/


  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar />
        <div className='sidebar__headerRight'>
          <IconButton>
            <MdDonutLarge style={{color:"#a8b3bd"}}/>
          </IconButton>
          <IconButton>
            <BsFillChatFill style={{color:"#a8b3bd"}} />
          </IconButton>
          <IconButton>
            <FiMoreVertical style={{color:"#a8b3bd"}} />
          </IconButton>
        </div>
      </div>
      <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
          <BiSearch size={20} />
          <input placeholder='Search or start new chat' type='text' />
        </div>
      </div>
      <div className='sidebar__chats'>
        <SidebarChat addNewChat />
        {rooms.map(rooms=>(
          <SidebarChat key={rooms.id} id={rooms.id}
          name={rooms.data.name}/>
        ))}
      </div>

    </div>);
}

