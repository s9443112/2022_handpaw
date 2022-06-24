import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default class HomeProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="page-header" style={{marginTop: '70px'}}>
                <Carousel autoPlay >
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/static/main02.jpg`} />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/static/main02.jpg`} />
                        <p className="legend">Legend 2</p>
                    </div>
                </Carousel>
            </div>
        )
    }
}