import React from 'react';
import Home from './newComponents/Home';
import Choosing from './Login/Choosing';
import FormSeller from './Login/FormSeller';
import FormUser from './Login/FormUser';
import Menu from './AppHome/Menu';
import MensMenu from './AppHome/Mens/MensMenu';
import FormDropshipper from './Login/FormDropshipper';
import RegesterUser from './Regester/RegesterUser';
import Stores from './AppHome/Stores/Stores';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import ProductDetailPage from './AppHome/ProductDetails';
import RegistrationForm from './Regester/RegesterCheck';

import Sellers from './Seller/Sellers';

function App() {
	return (



		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/loginChoice" element={<Choosing />} />
				<Route path="/LoginAsSeller" element={<FormSeller />} />
				<Route path="/LoginAsUser" element={<FormUser />} />
				<Route path="/LoginAsDropshipper" element={<FormDropshipper />} />
				<Route path="/UserRegester" element={<RegesterUser />} />
				<Route path="/UserHome" element={<Menu />} />
				<Route path="/MensMenu" element={<MensMenu />} />
				<Route path="/Stores" element={<Stores />} />
				<Route path="/rg" element={<RegistrationForm />} />
				<Route path="/details/:productId" Component={ProductDetailPage} />
           
			</Routes>
		</Router>

	);
}

export default App;


