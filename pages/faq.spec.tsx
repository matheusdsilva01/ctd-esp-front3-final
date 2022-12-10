import { render, screen } from "@testing-library/react"
import Faq from "./faq.page"

describe("Test component faq", () => {
    it("Should render component faq", () => {
        render(<Faq />);
        const title = screen.getByText("Quantos comics eles têm?")
        expect(title).toBeInTheDocument()
    })
})