import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import React from "react";
import { Header } from "../../patterns/appheader";

describe("AppHeader pattern", () => {
  test("has weestoater branding", () => {
    render(<Header />);
    const branding = screen.getByText(/weestoater/i);
    expect(branding).toBeInTheDocument();
  });

  test("has weestoater icon", () => {
    render(<Header />);
    const altText = screen.getByAltText(/weestoater logo/i);
    expect(altText).toBeInTheDocument();
  });

  test("has github icon", () => {
    render(<Header />);
    const github = screen.getByTestId('github-icon');
    expect(github).toBeInTheDocument();
  });


});
