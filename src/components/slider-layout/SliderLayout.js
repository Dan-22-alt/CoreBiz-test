import React from 'react';

const SliderLayout = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://via.placeholder.com/1920x430" className="d-block w-100" alt="https://via.placeholder.com/1920x430" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://via.placeholder.com/1920x430" className="d-block w-100" alt="https://via.placeholder.com/1920x430" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://via.placeholder.com/1920x430" className="d-block w-100" alt="https://via.placeholder.com/1920x430" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://via.placeholder.com/1920x430" className="d-block w-100" alt="https://via.placeholder.com/1920x430" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderLayout;