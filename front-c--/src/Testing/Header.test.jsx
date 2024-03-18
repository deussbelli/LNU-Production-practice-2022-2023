import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom"; 
import axios from 'axios';
import React from "react";
import Header from "../components/Global/Header.jsx";

vi.mock('axios')

test('renders header', () => {
    const { } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
});

test('renders "Sign Up" link if not logged in', async () => {
    const history = {
      push: vi.fn(),
    };

    localStorage.setItem('isLoggedIn', 'false');

    const { getAllByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  
    const signUpLink = getAllByText(/Sign up/i);

    expect(signUpLink.length).toBeGreaterThan(0);
 
    fireEvent.click(signUpLink[0]); 
    if (vi.spyOn(axios, 'post').mockResolvedValue({ status: 200 })){
        console.log('https://http.cat/200');
        history.push('https://http.cat/200');
    }
    else {
        console.log('https://http.cat/404');
        history.push('https://http.cat/404');
    }
  
    expect(signUpLink);
    console.log(signUpLink);
});
  
test('renders "Profile" link if logged in', async () => {
    const history = {
      push: vi.fn(),
    };

    localStorage.getItem('isLoggedIn', 'true');
    const { getAllByText } = render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
    const profileLink = getAllByText('Profile');

    expect(profileLink.length).toBeGreaterThan(0);
 
    fireEvent.click(profileLink[0]); 
    if (vi.spyOn(axios, 'post').mockResolvedValue({ status: 200 })){
        console.log('https://http.cat/200');
        history.push('https://http.cat/200');
    }
    else {
        console.log('https://http.cat/404');
        history.push('https://http.cat/404');
    }
  
    expect(profileLink);
    console.log(profileLink);
});