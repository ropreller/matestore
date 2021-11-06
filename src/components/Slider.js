import React, { useState, useEffect } from "react";
import { Carousel } from 'react-bootstrap';
import sliderData from '../data/sliderData';

const Slider = () => {

    const [slides, setSlides] = useState([])

    useEffect(() => {
        const listaSlides = new Promise((res, rej) => {
            res(sliderData)
        })
        listaSlides.then((data) => {
            setSlides(data)
        })
    }, []) // [Listener del cambio de estado productos]


    return (
        <Carousel>
            {slides.map((slide) =>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide.imagen}
                        alt={slide.nombre}
                    />
                    <Carousel.Caption>
                        <h3>{slide.nombre}</h3>
                        <p>{slide.desc}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )}
        </Carousel>
    );
}

export default Slider;