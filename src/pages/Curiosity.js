

import React, { Component } from 'react';


function nasarequested() {
    const baseUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=';
    const apiKey = "SjydksQts2w4O8C91uBj5Pd1OuEiY2QiPDWOqOv6";
    //    const dateInput = document.querySelector("#datepicker");
    const title = document.querySelector("#title");
    const copyright = document.querySelector("#copyright");
    const mediaSection = document.querySelector("#media-section");
    const information = document.querySelector("#description");

    const currentDate = new Date().toISOString().slice(0, 10);


    const imageSection = `<a id="hdimg" href="" target="-blank">
    <div class="image-div">
    <img id="image_of_the_day" src="" alt="image-by-nasa">
    </div>
   </a>`

    const videoSection = `<div class="video-div"> <iframe id="videoLink" src="" frameborder="0"></iframe></div>`

    let newDate = "&date=" + dateInput.value + "&";

    const dateInput = document.querySelector("#datepicker");
    dateInput.addEventListener('change', (e) => {
        e.preventDefault();
        nasarequested();
    })



    function fetchData() {
        try {
            fetch(baseUrl + apiKey + newDate)
                .then(response => response.json())
                .then(json => {
                    console.log(json);
                    diplaydata(json)
                })
        } catch (error) {
            console.log(error)
        }
    }

    function diplaydata(data) {

        title.innerHTML = data.title;

        if (data.hasOwnProperty("copyright")) {
            copyright.innerHTML = data.copyright;
        } else {
            copyright.innerHTML = ""
        }

        // date.innerHTML=data.date;
        dateInput.max = currentDate;
        dateInput.min = "1995-06-16";

        if (data.media_type == "video") {
            mediaSection.innerHTML = videoSection;
            document.getElementById("videoLink").src = data.url;

        } else {
            mediaSection.innerHTML = imageSection;
            document.getElementById("hdimg").href = data.hdurl;
            document.getElementById("image_of_the_day").src = data.url;
        }
        information.innerHTML = data.explanation
    }
    fetchData();
}


class Spirit extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }


    render() {
        return (
            <div className="py-5">


                <div className="card" >
                    <h1>Curiosity </h1>


                    <div className="card-body ">
                        <form class="bd-example" >
                            <fieldset>
                                <p>
                                    <label for="date">Pasirinkite datą  </label>
                                    <input type="date" id="date" value={this.state.value} onChange={nasarequested}></input>

                                </p>
                            </fieldset>
                        </form>

                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Front Hazard Avoidance kamera</button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>Pasirinkite datą</strong>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Rear Hazard Avoidance kamera
                            </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Mast kamera
                             </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Chemistry and Camera Complex kamera</button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>Pasirinkite datą</strong>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Mars Hand Lens Imager kamera
                            </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Mars Descent Imager
                             </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Navigation Camera
                             </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }



}
export default Spirit;
// import { Form, Button, Table, Modal } from "react-bootstrap";
// import { Link } from 'react-router-dom';
// import React, { Component, useEffect } from 'react';
// import DatePicker from "react-datepicker";

// import { LoginContext } from '../contexts/LoginContext';
// // import Login from '../components/Login';
// // import ShowUser from '../components/ShowUser';
// let baseUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=';
// let apiKey = "SjydksQts2w4O8C91uBj5Pd1OuEiY2QiPDWOqOv6";
// let newDate = "&date=" + dateInput.value + "&";
// let dateInput = document.querySelector("#datepicker");
// let currentDate = new Date().toISOString().slice(0, 10);
// let mediaSection = document.querySelector("#media-section");
// let imageSection = `<a id="hdimg" href="" target="-blank">
//      <div class="image-div">
//      <img id="image_of_the_day" src="" alt="image-by-nasa">
//      </div>
//      </a>`

// class Curiosity extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { value: 'test' };
//         this.handleChange = this.handleChange.bind(this);
//         this.fetchData = this.fetchData.bind(this);
//         this.displaydata = this.displaydata.bind(this);
//     }

//     fetchData() {
//         try {
//             fetch(baseUrl + apiKey + newDate)
//                 .then(response => response.json())
//                 .then(json => {
//                     console.log(json);
//                     this.diplaydata(json)
//                 })
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     diplaydata(data) {
//             mediaSection.innerHTML = imageSection;
//             document.getElementById("hdimg").href = data.hdurl;
//             document.getElementById("image_of_the_day").src = data.url;

//     }


//     // mediaSection.innerHTML=imageSection;
//     // document.getElementById("hdimg").href=data.hdurl;
//     // document.getElementById("image_of_the_day").src=data.url;


//     handleChange(event) {
//         this.setState({ value: event.target.value });
//         console.log(this.state.value);
//         this.fetchData();
//         this.displaydata();
//     }

//     // fetchData() {
//     //     try {
//     //         fetch(baseUrl + apiKey)
//     //             .then(response => response.json())
//     //             .then(json => {
//     //                 console.log(json)
//     //             })
//     //     } catch (error) {
//     //         console.log(error)
//     //     }
//     // }



//     render() {
//         return (
//             <div className="py-5">


//                 {/* <form >
//                     <label for="datepiceker">Pick a date:</label>
//                     <input id="datepicker" type="date" min="" max="" ></input>

//                 </form>


//                 <section class="title-section">
//                     <h2 id="title"></h2>
//                     <p id="date"></p>
//                     <small  id="copyright" ></small>
//                 </section>

//                 <section id="media-section">
//                 </section>

//                 <div class="description-div">
//                     <p id="description"></p>
//                 </div>
//                 <script src="app.js"></script> */}

//                 <div className="card" >
//                     <h1>Curiosity </h1>


//                     <div className="card-body ">
//                         <form class="bd-example" >
//                             <fieldset>
//                                 <p>
//                                     <label for="date">Pasirinkite datą  </label>
//                                     <input type="date" id="date" value={this.state.value} onChange={this.handleChange}></input>

//                                 </p>
//                             </fieldset>
//                         </form>

//                         <div class="accordion" id="accordionExample">
//                             <div class="accordion-item">
//                                 <h2 class="accordion-header" id="headingOne">
//                                     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                                         Front Hazard Avoidance kamera</button>
//                                 </h2>
//                                 <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//                                     <div class="accordion-body">
//                                         <strong>Pasirinkite datą</strong>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="accordion-item">
//                                 <h2 class="accordion-header" id="headingTwo">
//                                     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                                         Rear Hazard Avoidance kamera
//                             </button>
//                                 </h2>
//                                 <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
//                                     <div class="accordion-body">
//                                         <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//                             </div>
//                                 </div>
//                             </div>
//                             <div class="accordion-item">
//                                 <h2 class="accordion-header" id="headingThree">
//                                     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//                                         Mast kamera
//                              </button>
//                                 </h2>
//                                 <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
//                                     <div class="accordion-body">
//                                         <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//                         </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }



// }
// export default Curiosity;