import { render, screen } from "@testing-library/react";
import Contact from "../Contact.js";
import "@testing-library/jest-dom";

describe("Contact us page test case", () => {

   
    it("Should load contact us component", () => {
        render(<Contact />);

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
    });

    it("should load button inside contact component", () => {
        render(<Contact />);

        const button = screen.getByRole("button");


        expect(button).toBeInTheDocument();
    });


    it("should load input name inside contact component", () => {
        render(<Contact />);

        const inputName = screen.getByPlaceholderText("Your Name");


        expect(inputName).toBeInTheDocument();
    });
});



