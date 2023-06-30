import React from 'react'
import '../style/leftMenu.css'; 
import { FaPodcast, FaSpotify, FaEllipsisH, FaHome, FaBroadcastTower, FaMicrophoneAlt } from 'react-icons/fa';

import { BiSearchAlt, BiPulse } from 'react-icons/bi';
import { BsJournalAlbum } from 'react-icons/bs';
export default function LeftMenu() {
  return (
    <div className='leftMenu'>
         <div className='logoContainer'>
            <i className='logo'><FaSpotify /></i> 

            <h2>Spotify</h2>

            <i>  <FaEllipsisH /></i>
          
            
            </div>
         <div className='searchBox'>
              
         <i className='search'><BiSearchAlt /></i> 
         <input placeholder='Search...'></input>
         </div>

         <div className='home'>
            <h3>Menu</h3>
            <ul>
                <li> <i><FaHome /> </i> Home</li>
                <li> <i><BiPulse /> </i> Discover</li>
                <li> <i><FaBroadcastTower /> </i> Radio</li>
                <li> <i><FaMicrophoneAlt /> </i> Artist</li>
                <li> <i><BsJournalAlbum /> </i> Allbum</li>
                <li className='active'> <i><FaPodcast /> </i> Podcasts</li>
            </ul>
         </div>

    </div>
  )
}
