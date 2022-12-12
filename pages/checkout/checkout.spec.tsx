import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkout from "dh-marvel/pages/checkout/[id].page";
import { server } from "dh-marvel/test/server";

const comic = {
    "id": 1886,
    "title": "Official Handbook of the Marvel Universe (2004) #12 (SPIDER-MAN)",
    "issueNumber": 12,
    "variantDescription": "SPIDER-MAN",
    "description": "The spectacular sequel to last year's OFFICIAL HANDBOOK OF THE MARVEL UNIVERSE: SPIDER-MAN 2004, this Official Handbook contains in-depth bios on more than 30 of the wisecracking web-slinger's closest allies and most infamous enemies - including the Stacy Twins, fresh from the pages of AMAZING SPIDER-MAN, and Toxin, in time for this month's TOXIN #1! Plus: An all-new cover by superstar artist Tom Raney, digitally painted by Morry Hollowell.\r<br>48 PGS./Marvel PSR ...$3.99\r<br>",
    "modified": "-0001-11-30T00:00:00-0500",
    "isbn": "",
    "upc": "5960605667-00111",
    "diamondCode": "",
    "ean": "",
    "issn": "",
    "format": "Comic",
    "pageCount": 0,
    "textObjects": [
        {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "The spectacular sequel to last year's OFFICIAL HANDBOOK OF THE MARVEL UNIVERSE: SPIDER-MAN 2004, this Official Handbook contains in-depth bios on more than 30 of the wisecracking web-slinger's closest allies and most infamous enemies - including the Stacy Twins, fresh from the pages of AMAZING SPIDER-MAN, and Toxin, in time for this month's TOXIN #1! Plus: An all-new cover by superstar artist Tom Raney, digitally painted by Morry Hollowell.\r<br>48 PGS./Marvel PSR ...$3.99\r<br>"
        }
    ],
    "resourceURI": "http://gateway.marvel.com/v1/public/comics/1886",
    "urls": [
        {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/1886/official_handbook_of_the_marvel_universe_2004_12_spider-man/spider-man?utm_campaign=apiRef&utm_source=1a6398753f1b8571f4b2f7e5b57ac2c9"
        }
    ],
    "series": {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/787",
        "name": "Official Handbook of the Marvel Universe (2004)"
    },
    "variants": [],
    "collections": [],
    "collectedIssues": [],
    "dates": [
        {
            "type": "onsaleDate",
            "date": "2029-12-31T00:00:00-0500"
        },
        {
            "type": "focDate",
            "date": "-0001-11-30T00:00:00-0500"
        }
    ],
    "prices": [
        {
            "type": "printPrice",
            "price": 3.99
        }
    ],
    "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/4bc64020a4ccc",
        "extension": "jpg"
    },
    "images": [
        {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/4bc64020a4ccc",
            "extension": "jpg"
        }
    ],
    "creators": {
        "available": 12,
        "collectionURI": "http://gateway.marvel.com/v1/public/comics/1886/creators",
        "items": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/907",
                "name": "Heather Buchanan",
                "role": "writer"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/887",
                "name": "Ronald Byrd",
                "role": "writer"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/902",
                "name": "Jeff Christiansen",
                "role": "writer"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/909",
                "name": "Eric Engelhard",
                "role": "writer"
            }
        ],
        "returned": 4
    },
    "characters": {
        "available": 14,
        "collectionURI": "http://gateway.marvel.com/v1/public/comics/1886/characters",
        "items": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009156",
                "name": "Apocalypse"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009197",
                "name": "Blink"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009243",
                "name": "Colossus"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009313",
                "name": "Gambit"
            }
        ],
        "returned": 4
    },
    "stories": {
        "available": 2,
        "collectionURI": "http://gateway.marvel.com/v1/public/comics/1886/stories",
        "items": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/4430",
                "name": "Cover #4430",
                "type": "cover"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/4431",
                "name": "Interior #4431",
                "type": "interiorStory"
            }
        ],
        "returned": 2
    },
    "events": {
        "available": 0,
        "collectionURI": "http://gateway.marvel.com/v1/public/comics/1886/events",
        "items": [],
        "returned": 0
    },
    "price": 72,
    "oldPrice": 87,
    "stock": 2
}

async function fillForm() {
    const buttonSubmit = screen.getByText("Confirmar");
    const inputFirstName = screen.getByRole("textbox", { name: "Nome" });
    const inputLastName = screen.getByRole("textbox", { name: "Sobrenome" });
    const inputEmail = screen.getByRole("textbox", { name: "E-mail" });
    const inputAddress = screen.getByRole("textbox", { name: "Endereço" });
    const inputAddress2 = screen.getByRole("textbox", { name: "Apartamento, andar, etc" });
    const inputCity = screen.getByRole("textbox", { name: "Cidade" });
    const inputState = screen.getByRole("textbox", { name: "Estado" });
    const inputCep = screen.getByRole("textbox", { name: "CEP" });
    const inputNumberCard = screen.getByRole("textbox", { name: "Nº do cartão" });
    const inputNameOnCard = screen.getByRole("textbox", { name: "Nome no cartão" });
    const inputValidCard = screen.getByRole("textbox", { name: "Validade" });
    const inputCvcCard = screen.getByTestId("cvc");

    await userEvent.type(inputFirstName, "Matheus")
    await userEvent.type(inputLastName, "Silva")
    await userEvent.type(inputEmail, "matheus@email.com")
    await userEvent.type(inputAddress, "Minha rua")
    await userEvent.type(inputAddress2, "Complemento da minha rua")
    await userEvent.type(inputCity, "São Luís")
    await userEvent.type(inputState, "Maranhão")
    await userEvent.type(inputCep, "65056-330")
    await userEvent.type(inputNumberCard, "4040 4042 4042 4042")
    await userEvent.type(inputNameOnCard, "Matheus Silva Souza")
    await userEvent.type(inputValidCard, "02/2020")
    await userEvent.type(inputCvcCard, "123")
}

beforeAll(() => server.listen())
afterAll(() => server.close())
describe(("Page checkout"), () => {
    it("Should render page checkout", () => {
        render(<Checkout comic={comic} />)
        const titleComic = screen.getByText(/official handbook of the marvel universe \(2004\) #12 \(spider\-man\)/i)
        expect(titleComic).toBeInTheDocument();

    })
    it("Should render errors menssages when inputs are empty", async () => {
        render(<Checkout comic={comic} />)
        const buttonSubmit = screen.getByRole("button");
        await userEvent.click(buttonSubmit);
        const messageErrors = await screen.findAllByText("Campo obrigatório");
        expect(messageErrors[0]).toBeInTheDocument()
    })
    jest.setTimeout(10000)
    it("Should render errors menssages when submit form with incorrect card number", async () => {
        render(<Checkout comic={comic} />)
        const buttonSubmit = screen.getByText("Confirmar");
        const inputFirstName = screen.getByRole("textbox", { name: "Nome" });
        const inputLastName = screen.getByRole("textbox", { name: "Sobrenome" });
        const inputEmail = screen.getByRole("textbox", { name: "E-mail" });
        const inputAddress = screen.getByRole("textbox", { name: "Endereço" });
        const inputAddress2 = screen.getByRole("textbox", { name: "Apartamento, andar, etc" });
        const inputCity = screen.getByRole("textbox", { name: "Cidade" });
        const inputState = screen.getByRole("textbox", { name: "Estado" });
        const inputCep = screen.getByRole("textbox", { name: "CEP" });
        const inputNumberCard = screen.getByRole("textbox", { name: "Nº do cartão" });
        const inputNameOnCard = screen.getByRole("textbox", { name: "Nome no cartão" });
        const inputValidCard = screen.getByRole("textbox", { name: "Validade" });
        const inputCvcCard = screen.getByTestId("cvc");

        await userEvent.type(inputFirstName, "Matheus")
        await userEvent.type(inputLastName, "Silva")
        await userEvent.type(inputEmail, "matheus@email.com")
        await userEvent.type(inputAddress, "Minha rua")
        await userEvent.type(inputAddress2, "Complemento da minha rua")
        await userEvent.type(inputCity, "São Luís")
        await userEvent.type(inputState, "Maranhão")
        await userEvent.type(inputCep, "65056-330")
        await userEvent.type(inputNumberCard, "4000 4000 4000 4000")
        await userEvent.type(inputNameOnCard, "Matheus Silva Souza")
        await userEvent.type(inputValidCard, "02/2020")
        await userEvent.type(inputCvcCard, "123")
        expect(inputFirstName).toHaveValue("Matheus")
        expect(inputLastName).toHaveValue("Silva")
        expect(inputEmail).toHaveValue("matheus@email.com")
        expect(inputAddress).toHaveValue("Minha rua")
        expect(inputAddress2).toHaveValue("Complemento da minha rua")
        expect(inputCity).toHaveValue("São Luís")
        expect(inputState).toHaveValue("Maranhão")
        expect(inputCep).toHaveValue("65056-330")
        expect(inputNumberCard).toHaveValue("4000 4000 4000 4000")
        expect(inputNameOnCard).toHaveValue("Matheus Silva Souza")
        expect(inputValidCard).toHaveValue("02/2020")
        expect(inputCvcCard).toHaveValue("123")
        await userEvent.click(buttonSubmit);

        const errorMessage = await screen.findByTestId("alert-error");

        expect(errorMessage).toBeInTheDocument();

        // await waitForElementToBeRemoved(() => {
        //     expect(errorMessage).not.toBeInTheDocument();
        // }, {interval: 2500})
    })
    it("Should push to router /checkout/success", async () => {
        render(<Checkout comic={comic} />)
        const buttonSubmit = screen.getByText("Confirmar");
        const inputFirstName = screen.getByRole("textbox", { name: "Nome" });
        const inputLastName = screen.getByRole("textbox", { name: "Sobrenome" });
        const inputEmail = screen.getByRole("textbox", { name: "E-mail" });
        const inputAddress = screen.getByRole("textbox", { name: "Endereço" });
        const inputAddress2 = screen.getByRole("textbox", { name: "Apartamento, andar, etc" });
        const inputCity = screen.getByRole("textbox", { name: "Cidade" });
        const inputState = screen.getByRole("textbox", { name: "Estado" });
        const inputCep = screen.getByRole("textbox", { name: "CEP" });
        const inputNumberCard = screen.getByRole("textbox", { name: "Nº do cartão" });
        const inputNameOnCard = screen.getByRole("textbox", { name: "Nome no cartão" });
        const inputValidCard = screen.getByRole("textbox", { name: "Validade" });
        const inputCvcCard = screen.getByTestId("cvc");

        await userEvent.type(inputFirstName, "Matheus")
        await userEvent.type(inputLastName, "Silva")
        await userEvent.type(inputEmail, "matheus@email.com")
        await userEvent.type(inputAddress, "Minha rua")
        await userEvent.type(inputAddress2, "Complemento da minha rua")
        await userEvent.type(inputCity, "São Luís")
        await userEvent.type(inputState, "Maranhão")
        await userEvent.type(inputCep, "65056-330")
        await userEvent.type(inputNumberCard, "4042 4042 4042 4042")
        await userEvent.type(inputNameOnCard, "Matheus Silva Souza")
        await userEvent.type(inputValidCard, "02/2020")
        await userEvent.type(inputCvcCard, "123")
        await userEvent.click(buttonSubmit);
    })
})