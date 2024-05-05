import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { App } from "../App";

describe("App page", () => {
  test("renders skip-link correctly ", () => {
    render(<App />);
    const skipLink = screen.getByTestId("main-content-skip-link");
    expect(skipLink).toBeInTheDocument();
  });
});


