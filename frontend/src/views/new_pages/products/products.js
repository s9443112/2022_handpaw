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
            products: []
        }
    }

    async componentDidMount() {
        let products = await request.get_products()
        console.log(products)
        this.setState({ products: products })
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
                                            {products.map((ele, d) => {
                                                return (
                                                    <Col lg="4" md="4" key={`product ${d}`}>

                                                        <Card className="card-blog">
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
                                                                    {/* <i className="tim-icons icon-sound-wave mr-1" /> */}
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
                                                        </Card>

                                                    </Col>

                                                )
                                            })}

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