
import React, { Component } from "react";

import { LoginContext } from '../contexts/LoginContext';


class ProductListContainer extends Component {
    static contextType = LoginContext;
    // static context=this.context;
    constructor() {
        super();
        this.state = {
            marsaeigiai: [
                {
                    name: 'Curiosity',
                    landing_date: "2012-08-06",
                    cameras: 7,
                    imageUrl: "loading.img"
                },
                {
                    name: 'Opportunity',
                    landing_date: "2004-01-25",
                    cameras: 5,
                    imageUrl: "loading.img"
                },
                {
                    name: 'Spirit',
                    landing_date: "2004-01-04",
                    cameras: 5,
                    imageUrl: "loading.img"
                }
            ]
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row py-5">
                    <a href="/Curiosity">
                        <div className="card" style={{ width: "18 rem" }}>
                            {/* <img src={} className="card-img-top" alt="item"></img> */}
                            <div className="card-body ">
                                <h5 className="card-title">Curiosity</h5>
                                <p className="card-text">Nusileidimo data: 2012-08-06</p>
                                <p className="card-text">Kamerų skaičius: 7</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="row py-5">
                    <a href="/Opportunity">
                        <div className="card" style={{ width: "18 rem" }}>
                            {/* <img src={} className="card-img-top" alt="item"></img> */}
                            <div className="card-body ">
                                <h5 className="card-title">Opportunity</h5>
                                <p className="card-text">Nusileidimo data: 2004-01-25</p>
                                <p className="card-text">Kamerų skaičius: 5</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="row py-5">
                    <a href="/Spirit">
                        <div className="card" style={{ width: "18 rem" }}>
                            {/* <img src={} className="card-img-top" alt="item"></img> */}
                            <div className="card-body ">
                                <h5 className="card-title">Spirit</h5>
                                <p className="card-text">Nusileidimo data: 2004-01-04</p>
                                <p className="card-text">Kamerų skaičius: 5</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}
export default ProductListContainer;