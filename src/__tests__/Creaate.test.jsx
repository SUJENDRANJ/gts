import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import CreateAgreement from "../components/CreateAgreement";

// check if app is rendered
test("renders Dashboard component", () => {
  render(<CreateAgreement />);
  const heading = screen.getByText(/Add/i);
  expect(heading).toBeInTheDocument();
});
