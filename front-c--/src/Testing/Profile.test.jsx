import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom"; 
import axios from 'axios';
import React from "react";
import Profile from "../components/User/Profile.jsx";

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

test('renders profile page', () => {
    const { } = render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    );
});


test('switches to edit mode when the edit button is clicked', () => {
    const { getAllByText } = render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    );
  
    const editButton = getAllByText(/edit/i)[0];
    fireEvent.click(editButton);
  });