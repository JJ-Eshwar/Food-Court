import { fireEvent, render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import RestaurantMenu from '../RestaurantMenu';
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from 'react-router-dom';
import MOCK_DATA from "../mocks/mockRestListData.json"
import { Provider } from 'react-redux';
import appStore from "../../utils/appStore"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
    });
});
jest.setTimeout(10000);
it("should load restaurant menu component", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
                <Cart />
            </Provider>
        </BrowserRouter>
    ));

    const addBtns = screen.getByText("Cart");

    const cartItem = screen.getByText("Your Cart");


})

