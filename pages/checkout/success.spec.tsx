import { render, screen } from "@testing-library/react"
import { CheckoutContext } from "dh-marvel/context/checkout.context"
import SuccessPage from "./purchase-confirmation.page"
const checkout = {
    "customer": {
        "name": "Matheus",
        "lastname": "Silva",
        "email": "ms25022003@gmail.com",
        "address": {
            "address1": "Estrada da Vitória",
            "address2": "48",
            "city": "São Luís",
            "state": "11",
            "zipCode": "65056-330"
        }
    },
    "card": {
        "number": "42424242 4242 4242",
        "nameOnCard": "sdas",
        "expDate": "02/2020",
        "cvc": "123"
    },
    "order": {
        "name": "Official Handbook of the Marvel Universe (2004) #12 (SPIDER-MAN)",
        "image": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/4bc64020a4ccc.jpg",
        "price": 72
    }
}
describe("Testing component success", () => {
    it("Should render component success", () => {
        const handleCheckout = jest.fn()
        render(
            <CheckoutContext.Provider value={{ checkout, handleCheckout }} >
                <SuccessPage />
            </CheckoutContext.Provider>
        )
        const successMessage = screen.getByText("Aproveite sua compra!");
        expect(successMessage).toBeInTheDocument();
    })
    it("Should not render component sucess without comic purchased", () => {
        const handleCheckout = jest.fn()
        render(
            <CheckoutContext.Provider value={{ checkout: null, handleCheckout }} >
                <SuccessPage />
            </CheckoutContext.Provider>
        )
        const errorMessage = screen.getByText("null");
        expect(errorMessage).toBeInTheDocument();
    })
    it("Should render component sucess without comic purchased", () => {
        const handleCheckout = jest.fn()

        const checkoutWithoutComplement = {
            "customer": {
                "name": "Matheus",
                "lastname": "Silva",
                "email": "ms25022003@gmail.com",
                "address": {
                    "address1": "Estrada da Vitória",
                    "address2": "",
                    "city": "São Luís",
                    "state": "MA",
                    "zipCode": "65056-330"
                }
            },
            "card": {
                "number": "42424242 4242 4242",
                "nameOnCard": "sdas",
                "expDate": "02/2020",
                "cvc": "123"
            },
            "order": {
                "name": "Official Handbook of the Marvel Universe (2004) #12 (SPIDER-MAN)",
                "image": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/4bc64020a4ccc.jpg",
                "price": 72
            }
        }
        render(
            <CheckoutContext.Provider value={{ checkout: checkoutWithoutComplement, handleCheckout }} >
                <SuccessPage />
            </CheckoutContext.Provider>
        )
        const errorMessage = screen.getByText("Estrada da Vitória, São Luís, MA");
        expect(errorMessage).toBeInTheDocument();
    })
})