import { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
	const [order, setOrder] = useState({
		regular: 0,
		regularPrice: 799,
		vip: 0,
		vipPrice: 1299,
		area: { svartheim: 0, nilfheim: 0, helheim: 0, muspelheim: 0, alfheim: 0 },
		guests: [],
		tentOption: {
			bringOwn: true,
			crewSetup: false,
			green: null,
			twoPersonPrice: 299,
			threePersonPrice: 399,
		},
		crewTents: {
			twoPerson: 0,
			twoPersonPrice: 0,
			threePerson: 0,
			threePersonPrice: 0,
			bookingfee: 99,
		},
		sum: 0,
	});

	const value = {
		order,
		setOrder,
	};
	return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
};
