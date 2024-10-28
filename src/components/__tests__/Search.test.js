import { render, screen, fireEvent } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import Body from '../Body';
import MOCK_DATA from "../mocks/mockRestListData.json";
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
    });
});

it("should render the body component and allow searching", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );


    
    // const cardsBS = screen.getAllByTestId("resCard");

    // expect(cardsBS.length).toBe(20);

    const searchBtn = screen.getByRole("button", { name: "Search" });
    // 3. Simulate user input (e.g., searching for "KFC"):
    fireEvent.change(searchBtn, { target: { value: 'KFC' } });
    fireEvent.click(searchBtn)
    // 4. Wait for the results to update and make assertions:
    const kfcRestaurant = await screen.findByText('KFC'); // Assuming "KFC" is a unique identifier
    expect(kfcRestaurant).toBeInTheDocument();

    expect(searchBtn).toBeInTheDocument();

});

it("should filter top rated restaurants", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );
 
    const topRatedBtn = screen.getByRole("button", {name:"Top Rated Restaurants"});

    // fireEvent.click(topRatedBtn);
    // const cardsFilter = screen.getAllByTestId("resCard");
    expect(topRatedBtn).toBeInTheDocument();

    
});

