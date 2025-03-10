import React from "react";
import './style.css';
import YouTrailer from "../YoutubeTrailer";


function Content() {

    return (
        <content>
            <div id="banner"></div>
            <div id="trailer-container">
                <div class="content">
                    <div class="trailer">
                            <YouTrailer embedId="tPdJM1InNFI?si=1tjZlzphOYjUqb8N" />
                         </div>
                    <div id="sinopse">
                        <p class="description">
                            During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world's first nuclear explosion, forever changing the course of history.
                        </p>
                            <a href="https://mundodasreceitas.net/sanduiche-de-rosbife-com-queijo-cheddar-uma-refeicao-saborosa-e-pratica/" target="_blank" rel="noreferrer noopener">
                                <div class="buts">
                                    <button class="buttonD">Watch Dubbed</button>
                                    <button class="buttonL">Watch Subtitled</button>
                                </div>
                            </a>
                    </div>
                </div>
            </div>
        </content>
    );
}

export default Content;