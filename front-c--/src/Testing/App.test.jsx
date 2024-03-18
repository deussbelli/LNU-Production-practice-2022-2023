import { screen, render } from "@testing-library/react";
import { it, expect } from "vitest";
import React from "react";
import App from "../App.jsx";

it("should render the app & profile page", async () => {
  render(<App />);
  const screenLink = await screen.findByText("Profile");
});
