import React from 'react'
// import '../COMPO/Layout.css';


function Slider() {
    return (
        <>
            <hr />
            {/* <div className='bg-primary container '>
                This is home page...!!!!
                <h1> My Name is dimpy !!!! </h1>


            </div> */}
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators ">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active border bg-dark" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" className='border bg-dark' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" className='border bg-dark' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active " >
                        <img src="IMG/slider-1.jpg" class="d-block w-100" alt="..." style={{ height: '550px' }} />
                        <div class="carousel-caption d-flex flex-column h-100 align-items-center justify-content-center bottom-0">
                            <h2 class="bg-dark bg-opacity-50 py-2 px-4">First slide label</h2>
                            <p class="bg-dark bg-opacity-50 py-2 px-4">Some representative placeholder content for the first
                                slide.</p>
                            <a href="#" class="btn btn-outline-light px-4 py-2 rounded-0">Learn More</a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="IMG/slider-2.jpg" class="d-block w-100" alt="..." style={{ height: '550px' }} />
                        <div class="carousel-caption d-flex flex-column h-100 align-items-center justify-content-center bottom-0 ">
                            <h2 class="bg-dark bg-opacity-50 py-2 px-4">Second slide label</h2>
                            <p class="bg-dark bg-opacity-50 py-2 px-4">Some representative placeholder content for the second
                                slide.</p>
                            <a href="#" class="btn btn-outline-light px-4 py-2 rounded-0">Learn More</a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="IMG/slider-3.jpg" class="d-block w-100" alt="..." style={{ height: '550px' }} />
                        <div class="carousel-caption d-flex flex-column h-100 align-items-center justify-content-center bottom-0">
                            <h2 class="bg-dark bg-opacity-50 py-2 px-4">Third slide label</h2>
                            <p class="bg-dark bg-opacity-50 py-2 px-4">Some representative placeholder content for the third
                                slide.</p>
                            <a href="#" class="btn btn-outline-light px-4 py-2 rounded-0">Learn More</a>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>



        </>

    )
}

export default Slider
