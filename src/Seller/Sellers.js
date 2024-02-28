import React from "react";
import { Router, Route, BrowserRouter, Routes } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import MyShops from "./ShowRoom";
import Homes from "../AppHome/Menu";
import LoginButton from "../newComponents/HomeLoginButton";
import { Button } from "bootstrap";
import SellerHome from "./MyHome";
import SellerSetting from "./MySetting";

const Seller = () => {





	return (


		<div>



			<BrowserRouter>
				<Container>

					<Row>
						<Col md={4} >

						</Col>


						<Col md={8} >
                           <Routes>

						   
							<Route
								path="/first" Component={SellerHome}

							/>
							<Route
								path="/first" Component={SellerSetting}

							/>
                            </Routes>
							
						</Col>



					</Row>

				</Container>



			</BrowserRouter>





		</div>
	);









}
export default Seller;