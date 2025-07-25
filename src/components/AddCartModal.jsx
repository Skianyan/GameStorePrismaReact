import { useState, useEffect } from "react";
import { useShopContext } from "../provider/shopProvider";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CartCard from "./CartCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { prisma } from "@/libs/prisma";
import { getUser } from "@/libs/getUser";

const AddCartModal = ({ item, cartList }) => {
	const [show, setShow] = useState(false);
	const [carts, setCarts] = useState([]);
	const [users, setUsers] = useState([]);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		const getCarts = async () => {
			try {
				const response = await fetch("/api/routes/carts");
				if (!response.ok) {
					throw new Error("Failed to fetch carts");
				}

				const cartList = await response.json();
				return cartList;
			} catch (error) {
				console.error("Error fetching carts:", error);
				return []; // or handle error in another way
			}
		};

		getCarts().then((cartList) => {
			setCarts(cartList);
		});
	}, [carts]);

	const addToCart = async (cart_id) => {
		try {
			await fetch(`/api/routes/carts/${cart_id}`, {
				cache: "no-store",
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(item),
			});
		} catch (error) {
			console.error(error);
		}

		alert(`added product ${item.productName} to cart with the id: ${cart_id}`);
		handleClose();
	};

	const getUser = async (item) => {
		try {
			await fetch(`/api/routes/users/${item}`, {
				method: "GET",
				headers: { "Content-Type": "application/json" },
			});
		} catch (error) {
			console.error(error);
		}

		const userJson = await response.json();
		//console.log(typeof userJson);
		return userJson;
	};

	return (
		<>
			<Button variant="success" onClick={handleShow}>
				Add to cart
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Select the cart to add the item</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{carts.map((item) => {
						return (
							<div className="card flex justify-between">
								Cart ID: {item.id}
								<br />
								User ID: {`${item.user.username}'s cart`}
								<Button
									variant="success"
									className="w-50"
									onClick={() => addToCart(item.id)}
								>
									Add
								</Button>
							</div>
						);
					})}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default AddCartModal;
