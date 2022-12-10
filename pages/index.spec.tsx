import { render, screen } from "@testing-library/react";
import Index from "dh-marvel/pages/index.page";

const Comics = [{
  "title": "X-Men: Days of Future Past (Trade Paperback)",
  "id": 1332,
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239",
    "extension": "jpg"
  }
},
{
  "title": "Official Handbook of the Marvel Universe (2004) #12 (SPIDER-MAN)",
  "id": 1886,
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/4bc64020a4ccc",
    "extension": "jpg"
  }
}]

describe("IndexPage", () => {
  describe("when rendering default", () => {
    it("should render the title", () => {
      render(<Index comics={Comics} />);
      const title = screen.getByText("Sample");
      expect(title).toBeInTheDocument();
    });
  });
});
