import React from 'react'

import '../styles/Elder.css'
import elder from '../../../assets/images/elder-section.jpg'

function Elder() {
    return (
        <div className='elder_section container-fluid mb-5'>
            <div className="row py-5 my-5 large_devise">
                <div className="col-md-6 text_div">
                    <h1 className='mb-5'>We care your elders as ours</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam possimus voluptatum porro voluptatem, repellendus commodi id ratione nostrum officiis minus, pariatur quaerat autem dolores suscipit illo, excepturi iusto quod quisquam.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa aperiam laborum quo obcaecati impedit, nihil magni, rem eligendi quos tempora vel debitis dolores cumque veritatis blanditiis nostrum dolor suscipit quas dolorem accusantium repellendus possimus natus sint expedita? Accusantium, ducimus beatae iste consectetur, ut distinctio optio molestias pariatur similique ab recusandae!</p>
                    <button className='py-2 px-3 bg-success main-btn'>Contact Centers</button>
                </div>
                <div className="col-md-6">
                    <img src={elder} alt="" />
                    <center>
                        <button className='py-2 px-3 bg-success mt-5 extra-btn'>Contact Centers</button>
                    </center>
                </div>
            </div>
            <div className="row py-5 my-5 small_devise">
                <div className="col-md-6">
                    <img src={elder} alt="" />
                </div>
                <div className="col-md-6 text_div">
                    <h1 className='mb-5 mt-sm-5'>We care your elders as ours</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam possimus voluptatum porro voluptatem, repellendus commodi id ratione nostrum officiis minus, pariatur quaerat autem dolores suscipit illo, excepturi iusto quod quisquam.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa aperiam laborum quo obcaecati impedit, nihil magni, rem eligendi quos tempora vel debitis dolores cumque veritatis blanditiis nostrum dolor suscipit quas dolorem accusantium repellendus possimus natus sint expedita? Accusantium, ducimus beatae iste consectetur, ut distinctio optio molestias pariatur similique ab recusandae!</p>
                    <button className='py-2 px-3 bg-success'>Contact Centers</button>
                </div>
            </div>
        </div>
    )
}

export default Elder