import "./_Basket.scss";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { OrderContext } from "../../context/Tickets";
import { useWindowWidth } from "@react-hook/window-size";

function Basket({ linkActive }) {
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const windowWidth = useWindowWidth();

	const handleBasket = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		windowWidth < 768 ? setIsMobile(true) : setIsMobile(false);
		setIsOpen(false);

		// console.log(windowWidth);
	}, [windowWidth]);

	return (
		<section className="basket">
			<p onClick={handleBasket}>Basket</p>

			{isMobile ? isOpen && isMobile && <BasketContent /> : <BasketContent />}

			<Link to={"/checkout"} className={`desktop_checkout cta ${linkActive ? "" : "disabled"}`}>
				Checkout
			</Link>
		</section>
	);
}

function BasketContent() {
	const { order } = useContext(OrderContext);

	const sum = {
		bookingfee: 99,
		regular: order.regular * order.regularPrice,
		vip: order.vip * order.vipPrice,
		twoPrs: order.crewTents.twoPersonPrice * order.crewTents.twoPerson,
		threePrs: order.crewTents.threePersonPrice * order.crewTents.threePerson,
		greenCamping: order.tentOption.green ? 299 : 0,
	};

	return (
		<div className="basket_content">
			<h4>Order:</h4>
			<ul>
				<li>
					<div>
						<p>Bookingfee</p>
						<span> {order.bookingfee},-</span>
					</div>
					<p>{order.bookingfee},-</p>
				</li>
			</ul>
			<ul>
				Tickets:
				{order.regular ? (
					<li>
						<div>
							<p>Regular Ticket x {order.regular}</p>
							<span>á {order.regular} x 799,-</span>
						</div>
						<p>{order.regular * order.regularPrice},-</p>
					</li>
				) : null}
				{order.vip ? (
					<li>
						<div>
							<p>Vip Ticket x {order.vip}</p>
							<span>á {order.vip} x 799,-</span>
						</div>
						<p>{order.vip * order.vipPrice},-</p>
					</li>
				) : null}
			</ul>

			<ul>
				Area:
				<li>
					<div>
						<p>{order.area}</p>
						<span>Free</span>
					</div>
					<p>0,-</p>
				</li>
			</ul>

			<ul>
				Tent:
				{order.tentOption.bringOwn ? (
					<li>
						<div>
							<p>Bring Own Tent</p>
							<span>Free</span>
						</div>
						<p>0,-</p>
					</li>
				) : null}
				{order.tentOption.bringOwn ? null : (
					<li>
						<div>
							<p>Crew Setup - 2 prs.: {order.crewTents.twoPerson}</p>
							<span>á {order.crewTents.twoPerson} x 399,-</span>
						</div>
						<p>{order.crewTents.twoPerson * order.crewTents.twoPersonPrice},-</p>
					</li>
				)}
				{order.tentOption.bringOwn ? null : (
					<li>
						<div>
							<p>Crew Setup - 3 prs.: {order.crewTents.threePerson}</p>
							<span>á {order.crewTents.threePerson} x 499,-</span>
						</div>
						<p>{order.crewTents.threePerson * order.crewTents.threePersonPrice},-</p>
					</li>
				)}
				{order.tentOption.green && (
					<li>
						<div>
							<p>Green Camping</p>
							<span>299,-</span>
						</div>
						<p>249,-</p>
					</li>
				)}
			</ul>
			<ul>
				<li>
					<div>
						<p>Total</p>
					</div>
					<p>
						{Object.values(sum).reduce(
							(previousValue, currentValue) => previousValue + currentValue,
							0
						)}
						,-
					</p>
				</li>
			</ul>
		</div>
	);
}

export default Basket;
