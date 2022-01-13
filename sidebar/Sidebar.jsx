import React from 'react'
import a from '../././../image/a.jpeg'


export default function Sidebar() {

    return (
        <div className='sidebar'>
            <div className="sidebar__list" >
                <div className="sidebar__list_img">
                    <img src={a} />
                </div>
                <div className="sidebar__list_name">
                    Frontend Developer
                </div>
            </div>
            <div className="sidebar__list" >
                <div className="sidebar__list_img">
                    <img src={a} />
                </div>
                <div className="sidebar__list_name">
                    React Developer
                </div>
            </div>
            <div className="sidebar__list" >
                <div className="sidebar__list_img">
                    <img src={a} />
                </div>
                <div className="sidebar__list_name">
                    Backend Developer
                </div>
            </div>
            <div className="sidebar__list" >
                <div className="sidebar__list_img">
                    <img src={a} />
                </div>
                <div className="sidebar__list_name">
                    Full Stack Developer
                </div>
            </div>
            <div className="sidebar__list" >
                <div className="sidebar__list_img">
                    <img src={a} />
                </div>
                <div className="sidebar__list_name">
                    Flooter Developer
                </div>
            </div>
            <div className="sidebar__list" >
                <div className="sidebar__list_img">
                    <img src={a} />
                </div>
                <div className="sidebar__list_name">
                    Artificial Intelligent
                </div>
            </div>
            <div className="sidebar__list" >
                <div className="sidebar__list_img">
                    <img src={a} />
                </div>
                <div className="sidebar__list_name">
                    Robotic Engineer
                </div>
            </div>

        </div>
    )
}
