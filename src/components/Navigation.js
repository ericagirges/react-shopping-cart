import React, { useContext } from 'react';
import CartContext from "../contexts/CartContext";
import { NavLink } from 'react-router-dom';

const Navigation = () => {

	const values = useContext(CartContext);

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{values.cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
