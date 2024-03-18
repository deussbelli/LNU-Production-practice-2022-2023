import { screen, render, fireEvent, waitFor, act } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom"; 
import axios from 'axios';
import React from "react";
import SignUp from "../components/Auth/SignUp.jsx";

vi.mock('axios');

global.matchMedia = global.matchMedia || function () {
    return {
      addListener: vi.fn(),
      removeListener: vi.fn(),
    };
  };

test('renders sign-up page', () => {
    const { } = render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
});
 
test("renders the SignUp component", () => {
    const { getAllByText } = render(
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
    );

    const firstNameLabel = getAllByText('First Name:');
    const lastNameLabel = getAllByText('Last Name:');
    const emailLabel = getAllByText('Email address:');
    const passwordLabel = getAllByText('Password:');
    const confirmPasswordLabel = getAllByText('Confirm password:');
    const birthdayLabel = getAllByText('Birthday:');

    expect(firstNameLabel);
    expect(lastNameLabel);
    expect(emailLabel);
    expect(passwordLabel);
    expect(confirmPasswordLabel);
    expect(birthdayLabel);
});

test('renders SignUp component', () => {
    const signUpElements = screen.getAllByText(/First Name:/i);
    expect(signUpElements.length).toBeGreaterThan(0);
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) || (email && email.includes('@'));
}


export function validateName(name) {
    const nameRegex = /^[A-Z][a-z]*$/;
    return nameRegex.test(name);
}

export function validatePassword(password) {
    return (
      password &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#\$%^&*()_+]/.test(password) &&
      password.length >= 12
    );
  }


test('validatePassword function', () => {
  expect(validatePassword('StrongPassword1!!_23')).toBe(true);
  expect(validatePassword('weak')).toBe(false);
});

test('validateName function', () => {
  expect(validateName('John')).toBe(true);
  expect(validateName('J')).toBe(true);
});

test('validateEmail function', () => {
  expect(validateEmail('test@example.com')).toBe(true);
  expect(validateEmail('invalidEmail')).toBe(false);
});

test('submits the form with valid data', async () => { 
    const history = {
      push: vi.fn(),
    };
    
    fireEvent.change(screen.getAllByLabelText(/First Name/i, { selector: 'input' })[0], { target: { value: 'John' } });
    fireEvent.change(screen.getAllByLabelText(/Last Name/i, { selector: 'input' })[0], { target: { value: 'Doe' } });
    fireEvent.change(screen.getAllByLabelText(/Email address/i, { selector: 'input' })[0], { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getAllByLabelText(/Password/i, { selector: 'input' })[0], { target: { value: 'StrongPassword123!!' } });
    fireEvent.change(screen.getAllByLabelText(/Confirm password/i, { selector: 'input' })[0], { target: { value: 'StrongPassword123!!' } });    
    fireEvent.change(screen.getAllByLabelText(/Birthday/i, { selector: 'input' })[0], { target: { value: '1990-01-01' } });
  
    act(() => {
      fireEvent.click(screen.getAllByText(/Submit/i)[0]);
    });

    
    axios.post.mockResolvedValue({ status: 200 });
        
    expect(screen.getByText(/Missing password/));
    expect(screen.getByText(/Missing confirmPassword/));

    
    await act(async () => {
        const response = await axios.post('http://127.0.0.1:8000/auth/register', {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            password: 'StrongPassword123!!',
            confirmPassword: 'StrongPassword123!!',
            birthday: '1990-01-01'
        });
        console.log(response.status);

        if (response.status === 200) {
            console.log('https://http.cat/200');
            history.push('https://http.cat/200');
         }
         else if (response.status === 201){
             console.log('https://http.cat/201');
             history.push('https://http.cat/201');
         }
         else if (response.status === 403){
             console.log('https://http.cat/403');
             history.push('https://http.cat/403');
         }
         else if (response.status === 418){
             console.log('https://http.cat/418');
             history.push('https://http.cat/418');
         }
         else if (response.status === 404){
             console.log('https://http.cat/404');
             history.push('https://http.cat/404');
         }
         else if (response.status === 500){
             console.log('https://http.cat/500');
             history.push('https://http.cat/500');
         }
         else{
             console.log('https://http.cat/400');
             history.push('https://http.cat/400');
         }
    });
    
    expect(history.push).toHaveBeenCalledWith('https://http.cat/200');
});
  