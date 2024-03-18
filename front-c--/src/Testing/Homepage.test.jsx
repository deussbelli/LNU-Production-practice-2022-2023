import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom"; 
import React from "react";
import Homepage from "../components/Global/Homepage.jsx";

vi.mock('axios')

test('renders homepage', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    );
    expect(getByText('Creating chaos.'));
});