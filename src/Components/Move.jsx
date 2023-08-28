import './Move.css'
import React, { useState } from 'react';
import Wipe from './Wipe';

function Move() {
    const [state, setState] = useState(1);

    const action = (index) => {
    
    setState(index);

    }

  return (
   <div className="main">
        <div className="main-2">
            <div className="main-3">
                <div className="box">
                    {/* Tabs */}
                    <div className="tabs">
                        <div onClick={() => action(1)} className={`tab ${state === 1 ? 'active-tab' : 'tab'}`}>Event</div>
                        <div onClick={() => action(2)} className={`tab ${state === 2 ? 'active-tab' : 'tab'}`}>Documentary</div>
                        <div onClick={() => action(3)} className={`tab ${state === 3 ? 'active-tab' : 'tab'}`}>Movies</div>
                    </div>

                    {/* Content */}

                    <div className="contents">
                        <div className={`${state === 1 ? 'content active-content' : 'content '}`}>
                            <div className="event">
                                <div className="event-1">
                                <iframe width="100%" height="500" src="https://www.youtube.com/embed/MiuJkVI4t70" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                                <div className="event-1">
                                <iframe width="100%" height="500" src="https://www.youtube.com/embed/FH32PJDww68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="view">
                             <a href="https://www.youtube.com/channel/@kolajostephen7109">View All</a>
                            </div>
                        </div>
                        <div className={`${state === 2 ? 'content active-content' : 'content '}`}>
                                {/* <div className="want">
                                    <Wipe/>
                                </div> */}
                                <div className="event">
                                    <div className="event-1">
                                         <iframe width="100%" height="500" src="https://www.youtube.com/embed/qgP9-_KXPmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                    <div className="event-1">
                                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/Dbo-B-tp8v4?si=ZVX4F2SrwqnMKxKB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                                <div className="view">
                                <a href="https://www.youtube.com/channel/@kolajostephen7109">View All</a>
                                </div>

                        </div>
                        <div className={`${state === 3 ? 'content active-content' : 'content '}`}>
                           <div className="movies">
                           <iframe width="100%" height="530" src="https://www.youtube.com/embed/qzLVqyV4Y_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                           </div>
                           <div className="view">
                           <a href="https://www.youtube.com/channel/@ThatboyTV-fe7kx">View All</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </div>
  )
}

export default Move;