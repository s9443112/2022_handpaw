import React from "react";

import {
    Button,
    UncontrolledCollapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
    Card,
    CardBody,
    CardFooter,
    CardTitle
} from "reactstrap";
import * as request from '../../../request/index'
import ColorNavbar from '../navbars/navbars'
export default class Products extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            // product: {}
        }
    }
    getParameterByName = (name) => {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(window.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    async componentDidMount() {
        let id = this.getParameterByName("id")
        let product = await request.get_product_by_id(id)
        console.log(product)
        this.setState({ product: product })
    }

    render() {
        let { products } = this.state
        return (
            <>

                <ColorNavbar />
                <div className="wrapper">
                    <div className="main">
                        <div className="section section-basic" id="basic-elements">

                            <div className="section section-cards">
                                <div className="content-center">
                                    <Container >
                                        <Row>

                                            <Col lg="12" md="12" >

                                                {/* <Card className="card-blog">
                                                    <div className="card-image">
                                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                            <img
                                                                alt="..."
                                                                className="img rounded"
                                                                src={ele.image}
                                                            />
                                                        </a>
                                                    </div>
                                                    <CardBody className="text-center">
                                                        <h6 className="category text-danger">
                                                            
                                                            {ele.tags}
                                                        </h6>
                                                        <CardTitle tag="h2">
                                                            {ele.name}
                                                        </CardTitle>
                                                        <CardTitle tag="h5">
                                                            {ele._type}
                                                        </CardTitle>
                                                        <p className="card-description">
                                                            {ele.description}
                                                        </p>
                                                        <CardFooter>
                                                            <Button
                                                                color="primary"
                                                                href="#pablo"
                                                                onClick={(e) => e.preventDefault()}
                                                            >
                                                                Read Article
                                                            </Button>
                                                        </CardFooter>
                                                    </CardBody>
                                                </Card> */}

                                            </Col>

                                        </Row>
                                    </Container>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </>
        )
    }
}