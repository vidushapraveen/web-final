import React from 'react'
import Slider from "react-slick";
import '../styles/Carousel.css'
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div className='carousel_component'>
            <h1 className='text-center mb-5'>People Say ...</h1>
            <Slider {...settings}>
                <div className="p-3">
                    <div className='p-3 com_card'>
                        <div class="quote-box">
                            <p class="quotation-mark">
                                “
                            </p>
                            <p class="quote-text">
                                Don't believe anything that you read on the internet, it may be fake.
                            </p>
                            <hr />
                            <div class="blog-post-actions">
                                <p class="blog-post-bottom pull-left">
                                    Abraham Lincoln
                                </p>
                                <p class="blog-post-bottom pull-right">
                                    <span class="badge quote-badge">743</span>
                                </p>
                            </div>
                        </div> </div>              </div>
                <div className="p-3">
                    <div className='p-3 com_card'>
                        <h3 className='text-center mb-3'>Pole Andrew</h3>
                        <center>
                            <div className='commenter-bg two mb-4'></div>
                        </center>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit autem aliquid culpa minima possimus omnis similique architecto sint unde deserunt! Dolorum, consectetur possimus. Magnam ullam inventore placeat veritatis voluptate excepturi?</p>
                    </div>
                </div>
                <div className="p-3">
                    <div className='p-3 com_card'>
                        <h3 className='text-center mb-3'>Dia mc</h3>
                        <center>
                            <div className='commenter-bg three mb-4'></div>
                        </center>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia consequatur ducimus eos distinctio hic sapiente culpa nam quia aut delectus. Nesciunt quas sunt totam saepe quam aspernatur corrupti qui illo.</p>
                    </div>
                </div>
                <div className="p-3">
                    <div className='p-3 com_card'>
                        <h3 className='text-center'>Dia mc</h3>
                        <center>
                            <div className='commenter-bg three mb-4'></div>
                        </center>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia consequatur ducimus eos distinctio hic sapiente culpa nam quia aut delectus. Nesciunt quas sunt totam saepe quam aspernatur corrupti qui illo.</p>
                    </div>
                </div>
                <div className="p-3">
                    <div className='p-3 com_card'>
                        <h3 className='text-center'>Dia mc</h3>
                        <center>
                            <div className='commenter-bg three'></div>
                        </center>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia consequatur ducimus eos distinctio hic sapiente culpa nam quia aut delectus. Nesciunt quas sunt totam saepe quam aspernatur corrupti qui illo.</p>
                    </div>
                </div>
                <div className="p-3">
                    <div className='p-3 com_card'>
                        <h3 className='text-center'>Dia mc</h3>
                        <center>
                            <div className='commenter-bg three'></div>
                        </center>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia consequatur ducimus eos distinctio hic sapiente culpa nam quia aut delectus. Nesciunt quas sunt totam saepe quam aspernatur corrupti qui illo.</p>
                    </div>
                </div>
                <div className="p-3">
                    <div className='p-3 com_card'>
                        <h3 className='text-center'>Dia mc</h3>
                        <center>
                            <div className='commenter-bg three'></div>
                        </center>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia consequatur ducimus eos distinctio hic sapiente culpa nam quia aut delectus. Nesciunt quas sunt totam saepe quam aspernatur corrupti qui illo.</p>
                    </div>
                </div>
                <div className="p-3">
                    <div className='p-3 com_card'>
                        <h3 className='text-center'>Dia mc</h3>
                        <center>
                            <div className='commenter-bg three'></div>
                        </center>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia consequatur ducimus eos distinctio hic sapiente culpa nam quia aut delectus. Nesciunt quas sunt totam saepe quam aspernatur corrupti qui illo.</p>
                    </div>
                </div>
                <div className="p-3">
                    <div className='p-3 com_card'>
                        <h3 className='text-center'>Dia mc</h3>
                        <center>
                            <div className='commenter-bg three'></div>
                        </center>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia consequatur ducimus eos distinctio hic sapiente culpa nam quia aut delectus. Nesciunt quas sunt totam saepe quam aspernatur corrupti qui illo.</p>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Carousel