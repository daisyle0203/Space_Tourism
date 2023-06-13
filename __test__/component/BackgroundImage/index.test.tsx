import { render } from "@testing-library/react"
import BackgroundImage from "@/components/BackgroundImage"

describe("BackgroundImage component", () => {
  it("renders without errors", () => {
    const props = {
      mobile: "https://example.com/mobile-image.jpg",
      tablet: "https://example.com/tablet-image.jpg",
      desktop: "https://example.com/desktop-image.jpg",
    }

    render(<BackgroundImage {...props} />)
  })

  // Add more test cases as needed
})
