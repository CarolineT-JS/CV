import '../App.css';
import Video from "./Video";
import {useEffect, useRef} from 'react';
import anime from 'animejs';
import React from 'react';

function App() {

    //animation CT

    const animationRef = useRef(null);

    useEffect(() => {
        // Wrap every letter in a span
        var textWrapper = document.querySelector('.ml12');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


        animationRef.current = anime.timeline({loop: false})
            .add({
                targets: '.ml12 .letter',
                translateX: [40, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 1000,
                delay: (el, i) => 300 + 30 * i
            }).add({
                targets: '.ml12 .letter',
                translateX: [0, -30, +30, 0],
                opacity: 100,
                easing: "easeInExpo",
                duration: 2000,
                delay: (el, i) => 300 + 30 * i
            });
    }, [])

    //animation Dev Web

    const animation2Ref = useRef(null);

    useEffect(() => {

        animation2Ref.current =  anime.timeline({loop: false})
            .add({
                targets: '.ml5 .line',
                opacity: [0.5,1],
                scaleX: [0, 1],
                easing: "easeInOutExpo",
                duration: 700
            }).add({
                targets: '.ml5 .line',
                duration: 600,
                easing: "easeOutExpo",
                translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
            }).add({
                targets: '.ml5 .ampersand',
                opacity: [0,1],
                scaleY: [0.5, 1],
                easing: "easeOutExpo",
                duration: 600,
                offset: '-=600'
            }).add({
                targets: '.ml5 .letters-left',
                opacity: [0,1],
                translateX: ["0.5em", 0],
                easing: "easeOutExpo",
                duration: 600,
                offset: '-=300'
            }).add({
                targets: '.ml5 .letters-right',
                opacity: [0,1],
                translateX: ["-0.5em", 0],
                easing: "easeOutExpo",
                duration: 600,
                offset: '-=600'
            }).add({
                targets: '.ml5',
                opacity: 100,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 2000
            });

    }, [])




    return (

            <div className="Home">


                <section className="home container-fluid d-flex justify-content-center align-items-center">
                        <Video/>
                    <div id="title">
                        <div className="text-center">
                            <h2 className="ml12">Caroline Tchong</h2>

                            <h1 className="ml5">
                          <span className="text-wrapper">
                            <span className="line line1"></span>
                            <span className="letters letters-left">Developper Web </span>
                            <span className="letters ampersand"> &amp; </span>
                            <span className="letters letters-right"> App</span>
                            <span className="line line2"></span>
                          </span>
                            </h1>
                        </div>
                    </div>
                </section>
            </div>

    );
}

export default App;
