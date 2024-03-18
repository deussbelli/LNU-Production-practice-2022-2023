import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom"; 
import axios from 'axios';
import React from "react";
import LogIn from "../components/Auth/LogIn.jsx";

vi.mock('axios')

test('renders log-in page', () => {
    const { getByText, getByPlaceholderText } = render(
      <BrowserRouter>
        <LogIn />
      </BrowserRouter>
    );
    expect(getByText('Login:'));
    expect(getByPlaceholderText('my-email@gmail.com'));
    expect(getByText('Password:'));
    expect(getByPlaceholderText('***************'));
    expect(getByText('I dont have account'));
});
  
test('updates form data on input change', () => {
    const { getAllByPlaceholderText } = render(
        <BrowserRouter>
          <LogIn />
        </BrowserRouter>
      );
    
      const emailInputs = getAllByPlaceholderText('my-email@gmail.com');
      const passwordInputs = getAllByPlaceholderText('***************');
    
      fireEvent.change(emailInputs[0], { target: { value: 'test@example.com' } });
      fireEvent.change(passwordInputs[0], { target: { value: 'password123' } });
    
      expect(emailInputs[0].value).toBe('test@example.com');
      expect(passwordInputs[0].value).toBe('password123');
});
  
test('submits form with correct data', async () => {
    const history = {
      push: vi.fn(),
    };
  
    const { getAllByText, getAllByPlaceholderText } = render(
        <BrowserRouter>
          <LogIn />
        </BrowserRouter>
      );
    
      const emailInputs = getAllByPlaceholderText('my-email@gmail.com');
      const passwordInputs = getAllByPlaceholderText('***************');
      const submitButtons = getAllByText('Log in');
    
      fireEvent.change(emailInputs[0], { target: { value: 'test@example.com' } });
      fireEvent.change(passwordInputs[0], { target: { value: 'password123' } });
    
      axios.post.mockResolvedValue({ status: 200 });
    
      fireEvent.click(submitButtons[0]);
  
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        'http://127.0.0.1:8000/user/',
        {
          email: 'test@example.com',
          password: 'password123',
        }
      );
    });
  
    const response = await axios.post('http://127.0.0.1:8000/user/', {
      email: 'test@example.com',
      password: 'password123',
    });
  
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