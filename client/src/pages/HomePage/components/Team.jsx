import React from 'react'

import '../styles/Team.css'

function Team() {
    return (
        <div className="team_section">
            <h1 className="title">our team</h1>
            <div className="team-row">
                <div className="member">
                    <img src="https://cdn.pixabay.com/photo/2017/03/20/00/51/dr-2157993_640.jpg" alt="" />
                    <h2>Dia Penis</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum similique eligendi numquam.</p>
                </div>
                <div className="member">
                    <img src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <h2>jason andrew</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum similique eligendi numquam.</p>
                </div>
                <div className="member">
                    <img src="https://images.pexels.com/photos/5214995/pexels-photo-5214995.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <h2>Alan christiana</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum similique eligendi numquam.</p>
                </div>
            </div>
        </div>
    )
}

export default Team