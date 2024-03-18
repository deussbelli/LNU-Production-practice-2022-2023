import { screen, render, fireEvent, waitFor, act } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom"; 
import axios from 'axios';
import React from "react";
import Message from "../components/Email Form's/SendMessage.jsx";

test('renders send-message page', () => {
    const { } = render(
      <BrowserRouter>
        <Message />
      </BrowserRouter>
    );
});