
---------------------------------
**<center>[FRONT-END]**
================================
## The layout of the pages and the implementation of the design were carried specifically for the NeforStore project.

**Author: Anastasiia Nachynka, Kristian Sabadosh, PMK-22s, 2023.*
<br><br><br><br>

# Overview **[Login /log-in]**
This documentation explains the purpose, usage, and structure of the `LogIn` component in a React application. The `LogIn` component is responsible for rendering a login form, handling user input, and making a POST request to a server for user authentication.

## Usage
The `LogIn` component is designed to be used within a React application to allow users to log in. To integrate this component into your application, follow these steps:

1. Import the `LogIn` component into your application:
    ```javascript
    import LogIn from './path/to/LogIn';
    ```

2. Use the `LogIn` component within your application, typically in a route or view where user login is required.
    ```javascript
    function App() {
      return (
        <div>
          {/* Other components and routes */}
          <LogIn />
          {/* Other components and routes */}
        </div>
      );
    }
    ```

3. Ensure that you have set up React Router and other dependencies as required by this component, as indicated by the import statements.

## Component Description
The `LogIn` component consists of a login form that collects user input for email and password. It also performs client-side input validation, displays error messages, and sends a POST request to a server for authentication.

## Component State
- `showPassword` (boolean): Determines whether the password field should display the entered text.
- `userData` (object): An object that holds user data, including `email` and `password`.
- `formData` (object): An object that holds form data, including `userEmail` and `userPassword`.
- `formErrors` (object): An object that holds form validation error messages for `email` and `password`.

## Component Functions
- `handleChange(event)`: Handles input changes in the form fields and performs client-side validation for email and password inputs.
- `handleSubmit(event)`: Handles the form submission, validates user input, sends a POST request to the server for authentication, and displays success or error messages.

## Dependencies
The `LogIn` component depends on the following external packages and files:
- React (imported as `React`)
- `useState` from React
- `Link` and `useNavigate` from React Router
- `axios` for making HTTP requests
- Validation functions (`validatePassword`, `validateName`, and `validateEmail`) from "../FormValidtion's/validation's"
- `toast` and `Toaster` from "react-hot-toast" for displaying toast notifications
- `loginStyles` from "../../styles/AuthStyles/LogIn.module.css" for styling
- `PORT` from "../constants" for specifying the server's URL
- `preRequestFormChecker` from "./preRequestCheck" for additional form validation

## Component Structure
The `LogIn` component is structured as follows:
- The component starts with importing necessary dependencies and functions.
- It defines the component function `LogIn` and sets up state variables using the `useState` hook.
- The `handleChange` function is defined to handle input changes and validation.
- The `handleSubmit` function is defined to handle form submission and send a POST request to the server.
- The component renders a form with email and password fields and displays validation error messages.
- The `Toaster` component from "react-hot-toast" is used to display toast notifications.

## Example Usage
Here's an example of how the `LogIn` component can be used within a React application:
```javascript
import React from 'react';
import LogIn from './LogIn';
function App() {
  return (
    <div>
      {/* Other components and routes */}
      <LogIn />
      {/* Other components and routes */}
    </div>
  );
}
export default App;
```
By integrating the `LogIn` component into your application, users can log in and access your protected content.

---------------------------------
<br><br><br>

# Overview **[Sign-up /sign-up]**
This documentation explains the purpose, usage, and structure of the `SignUp` component in a React application. The `SignUp` component is responsible for rendering a user registration form, handling user input, and making a POST request to a server for user registration.

## Usage
The `SignUp` component is designed to be used within a React application to allow users to create new accounts. To integrate this component into your application, follow these steps:

1. Import the `SignUp` component into your application:
    ```javascript
    import SignUp from './path/to/SignUp';
    ```

2. Use the `SignUp` component within your application, typically in a route or view where user registration is required.
    ```javascript
    function App() {
      return (
        <div>
          {/* Other components and routes */}
          <SignUp />
          {/* Other components and routes */}
        </div>
      );
    }
    ```

3. Ensure that you have set up React Router and other dependencies as required by this component, as indicated by the import statements.

## Component Description
The `SignUp` component consists of a user registration form that collects user input for first name, last name, email, password, password confirmation, and birthday. It performs client-side input validation, displays error messages, and sends a POST request to the server for registration.

## Component State
- `userData` (object): An object that holds user data, including `firstName`, `lastName`, `email`, `password`, `confirmPassword`, and `birthday`.
- `formData` (object): An object that holds form data, including `userFirstName`, `userLastName`, `userEmail`, `userPassword`, `userBirthday`.
- `formErrors` (object): An object that holds form validation error messages for `firstName`, `lastName`, `email`, `password`, `confirmPassword`, and `birthday`.

## Component Functions
- `handleChange(event)`: Handles input changes in the form fields and performs client-side validation for each input field.
- `handleSubmit(event)`: Handles the form submission, validates user input, sends a POST request to the server for registration, and displays success or error messages.

## Dependencies
The `SignUp` component depends on the following external packages and files:
- React (imported as `React`)
- `useState` from React
- `Link` from React Router for navigation
- `axios` for making HTTP requests
- Validation functions (`validatePassword`, `validateName`, and `validateEmail`) from "../FormValidtion's/validation's"
- `toast` and `Toaster` from "react-hot-toast" for displaying toast notifications
- `authStyles` from "../../styles/AuthStyles/Auth.module.css" for styling
- `PORT` from "../constants" for specifying the server's URL
- `preRequestFormChecker` from "./preRequestCheck" for additional form validation

## Component Structure
The `SignUp` component is structured as follows:
- The component starts with importing necessary dependencies and functions.
- It defines the component function `SignUp` and sets up state variables using the `useState` hook.
- The `handleChange` function is defined to handle input changes and validation for each input field.
- The `handleSubmit` function is defined to handle form submission, validate user input, send a POST request to the server, and display success or error messages.
- The component renders a registration form with input fields for first name, last name, email, password, password confirmation, and birthday. It also displays validation error messages.
- The `Toaster` component from "react-hot-toast" is used to display toast notifications.

## Example Usage
Here's an example of how the `SignUp` component can be used within a React application:
```javascript
import React from 'react';
import SignUp from './SignUp';
function App() {
  return (
    <div>
      {/* Other components and routes */}
      <SignUp />
      {/* Other components and routes */}
    </div>
  );
}
export default App;
```
---------------------------------
<br><br><br>

# Overview **[Profile /profile]**
This documentation explains the purpose, usage, and structure of the `Profile` component in a React application. The `Profile` component is responsible for rendering a user profile page, allowing users to view and edit their personal information.

## Usage
The `Profile` component is designed to be used within a React application to display and edit user profile information. To integrate this component into your application, follow these steps:

1. Import the `Profile` component into your application:
    ```javascript
    import Profile from './path/to/Profile';
    ```

2. Use the `Profile` component within your application, typically in a route or view where user profile management is required.
    ```javascript
    function App() {
      return (
        <div>
          {/* Other components and routes */}
          <Profile />
          {/* Other components and routes */}
        </div>
      );
    }
    ```

3. Ensure that you have set up React Router and other dependencies as required by this component, as indicated by the import statements.

## Component Description
The `Profile` component provides a user interface for viewing and editing personal information. It includes sections for user details such as first name, last name, email, new password, phone number, address, and date of birth. Users can toggle between viewing and editing modes. When in edit mode, users can modify their information.

## Component State
- `isEditing` (boolean): Indicates whether the user is in edit mode.
- `firstName` (string): User's first name.
- `lastName` (string): User's last name.
- `newPassword` (string): User's new password (for editing).
- `email` (string): User's email address.
- `phoneNumber` (string): User's phone number.
- `address` (string): User's address.
- `dateOfBirth` (string): User's date of birth.
- `photo` (string or null): URL of the user's avatar photo or null if not specified.

## Component Functions
- `handleAvatarChange(e)`: Handles changes to the user's avatar photo.
- `fetchUserData()`: Fetches user data from a server (currently a placeholder).
- `handleEditClick()`: Activates the edit mode, allowing users to modify their profile information.
- `handleSaveClick()`: Saves the modified profile information to the server.
- `handleSubmit(e)`: Handles form submission when in edit mode.

## Dependencies
The `Profile` component depends on the following external packages, files, and images:
- React (imported as `React`)
- `useState` from React
- `Link` and `useNavigate` from React Router for navigation
- `toast` and `Toaster` from "react-hot-toast" for displaying toast notifications
- `Header` component from the application (assumed to exist)
- Image files (`image`, `avatar`, `wallet`, `history`, `basket`, `discounts`, `comments`, `support`, `exit`) for various icons.

## Component Structure
The `Profile` component is structured as follows:
- The component starts with importing necessary dependencies, functions, and image files.
- It defines the component function `Profile` and sets up state variables using the `useState` hook.
- The `handleAvatarChange` function is defined to handle avatar photo changes.
- The `fetchUserData` function is a placeholder for fetching user data from the server (currently empty).
- The `handleEditClick` function activates edit mode.
- The `handleSaveClick` function saves modified profile information to the server.
- The `handleSubmit` function handles form submission when in edit mode.
- The component renders user details, allowing users to toggle between viewing and editing modes.

## Example Usage
Here's an example of how the `Profile` component can be used within a React application:
```javascript
import React from 'react';
import Profile from './Profile';
function App() {
  return (
    <div>
      {/* Other components and routes */}
      <Profile />
      {/* Other components and routes */}
    </div>
  );
}
export default App;
```
By integrating the `Profile` component into your application, users can view and edit their profile information, enhancing the user experience.

---------------------------------
<br><br><br>

# Overview **[ Homepage /]** 
 This documentation explains the purpose, usage, and structure of the `Homepage` component in a React application. The `Homepage` component is responsible for rendering the home page of your application, including a logo, search bar, and a banner with accompanying phrases.

## Usage
The `Homepage` component is designed to be used as the main landing page within a React application. To integrate this component into your application, follow these steps:

1. Import the `Homepage` component into your application:
    ```javascript
    import Homepage from './path/to/Homepage';
    ```

2. Use the `Homepage` component as the main landing page in your application.
    ```javascript
    function App() {
      return (
        <div>
          <Homepage />
          {/* Other components and routes */}
        </div>
      );
    }
    ```

## Component Description
The `Homepage` component provides a visually appealing landing page for your application. It includes a logo, a search bar, and a banner with accompanying phrases.

## Component Structure
- The component starts with importing necessary dependencies and image files.
- It defines the component function `Homepage`.
- The component renders the following elements:
   - `Header` component for the application header.
   - Logo displayed using an `<img>` element.
   - Search bar input field.
   - Banner image displayed using an `<img>` element.
   - Three text phrases as `<p>` elements.

## Dependencies
The `Homepage` component depends on the following external packages and image files:
- React (imported as `React`)
- Image files (`logo` and `banner`) for displaying the logo and banner.

## Example Usage
Here's an example of how the `Homepage` component can be used within a React application:
```javascript
import React from 'react';
import Homepage from './Homepage';
function App() {
  return (
    <div>
      <Homepage />
      {/* Other components and routes */}
    </div>
  );
}
export default App;
```
By integrating the `Homepage` component into your application, you can create an engaging and attractive landing page for your users.

-----------------------------------
<br><br><br>

# Overview [ Product Page /product ] 

This documentation provides details about the React component code for a product page. The code fetches and displays information about a specific item using React, Axios for HTTP requests, and React Router for handling route parameters.

## Table of Contents

- [Overview](#overview)
- [Dependencies](#dependencies)
- [Component Structure](#component-structure)
- [State and Variables](#state-and-variables)
- [Effect Hook](#effect-hook)
- [Render](#render)
- [Styles](#styles)
- [Export](#export)

## Overview

The `Product` component is responsible for displaying detailed information about a specific product. It utilizes React for building the UI, Axios for making HTTP requests, and React Router for handling route parameters.

## Dependencies

The component relies on the following external dependencies:

- `React`: The core library for building user interfaces in React applications.
- `axios`: A promise-based HTTP client for making asynchronous requests.
- `react-router-dom`: A library for routing in React applications.

Make sure to install these dependencies before using the component.

```bash
npm install react axios react-router-dom
```

## Component Structure

The component is structured as follows:

- `Header`: A global header component.
- `Footer`: A global footer component.
- `productPageStyles`: CSS modules for styling the product page.
- `URL`: A constant for the base URL used for making API requests.

## State and Variables

- `itemData`: State variable to store information about the displayed item.
- `id`: Extracted from the route parameters using `useParams()`.

```jsx
const [itemData, setItemData] = useState(null);
const { id } = useParams();
```

## Effect Hook

The `useEffect` hook is employed to fetch the item data when the component mounts. It depends on the `id` parameter, and the data is fetched using Axios.

```jsx
useEffect(() => {
    const loadItem = async () => {
        try {
            const response = await axios.get(URL + "/items/" + id);
            setItemData(response.data);
        } catch (error) {
            console.error("Error loading item:", error);
        }
    };

    loadItem();
}, [id]);
```

## Render

The `render` section displays the product information if `itemData` is available; otherwise, it shows a loading message.

```jsx
return (
    <>
        <Header />
        <div className={productPageStyles.productContainer}>
            {itemData ? (
                // Display item information
            ) : (
                <div>Loading...</div>
            )}
        </div>
        <Footer />
    </>
);
```

## Styles

CSS modules are used to style the product page. Different styles are applied to various elements, such as containers, images, and text.

## Export

The `Product` component is exported as the default export.

```jsx
export default Product;
```

---------------------------------
<br><br><br>

# Overview **[ SendMessage /message]** 
The `EmailForm` component is a React component designed for sending email messages to registered users. It utilizes React for building the user interface, Axios for making HTTP requests, and includes a form for entering the email subject and message.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Component Structure](#component-structure)
- [Props](#props)
- [Methods](#methods)
- [Styles](#styles)

## Installation
To use the `EmailForm` component in your project, follow these steps:

1. Copy the `EmailForm.jsx` file into your project.
2. Make sure to install the required dependencies:

   ```bash
   npm install axios
3. Import the component in your desired file:
   ```jsx
   import EmailForm from 'path/to/EmailForm';
   ```

## Usage
```jsx
import React from 'react';
import EmailForm from 'path/to/EmailForm';

const App = () => {
  return (
    <div>
      {/* Your other components */}
      <EmailForm />
    </div>
  );
};

export default App;
```
## Component Structure
- `Header`: A global header component.
- `formContainerBackrgound_second`: Container for styling purposes.
- `mainText`: Display text for the message section.
- `formContainerBackrgound_one`: Container for styling purposes.
- `massageForm`: The main form for entering the email subject and message.
- `massageSubject`: Label and input for the email subject.
- `massageText`: Label and textarea for the email message.
- `inputSubject`: Input field for the email subject.
- `inputmassageLabel`: Label for the email message textarea.
- `inputMassageText`: Textarea for entering the email message.
- `button`: Button for submitting the form and sending the email.

## Props
The EmailForm component does not accept any props.

## Methods
- `handleSubmit`: Handles the form submission, retrieves registered users, and sends emails to them.
- `fetchRegisteredUsers`: Fetches the list of registered users from the server.
- `sendEmails`: Sends emails to the specified users with the provided subject and message.

## Styles
Styling is applied using CSS modules. The styles are imported from SendMassage.module.css and applied to the respective elements within the component.

---------------------------------
<br><br><br>

# Overview **[ Admin Panel /admin-panel]** 

The `AdminPanel` component is a React functional component designed to serve as the main interface for an admin panel in a web application. It includes a navigation sidebar with links to various admin functionalities and a header.

## Usage

To use the `AdminPanel` component, import it into your React application and include it in your JSX/HTML structure.

```jsx
import React from 'react';
import AdminPanel from './path/to/AdminPanel';

function App() {
  return (
    <div>
      {/* Other components or content */}
      <AdminPanel />
      {/* Other components or content */}
    </div>
  );
}

export default App;
```

## Component Structure

The `AdminPanel` component returns a JSX fragment (`<>...</>`) containing the following elements:

1. **Toaster:** This component is imported and rendered within the `AdminPanel`. The `Toaster` component is responsible for displaying toast notifications.

2. **Header:** Another component, `Header`, is also imported and rendered within the `AdminPanel`. The `Header` component represents the header section of the admin panel.

3. **Form Container:** A `div` element with a class of `formContainerBackrgound_second` is included, providing a background for the main content of the admin panel.

4. **Main Text:** Inside the form container, there is a `div` element with a class of `mainText` displaying the text "Admin Panel."

5. **Sidebar:** A `div` element with a class of `sidebar` represents the navigation sidebar of the admin panel. It contains the following links:

    - **Edit Users:** A link to the page for editing users (`/edit-users`).
    
    - **Edit Products:** A link to the page for editing products (`/edit-products`).
    
    - **Log:** A link to the admin log page (`/admin-log`).
    
    - **Log Out:** A link to log out, with an associated image (presumably an exit icon).

## Styling

The component relies on external styles defined in a stylesheet, presumably named `adminPanelStyles`. The styles include various class names used for styling different elements within the `AdminPanel` component.

## Dependencies

The component assumes the existence of the following external dependencies:

- **React:** The component is built using React.

## Example

```jsx
import React from 'react';
import AdminPanel from './path/to/AdminPanel';

function App() {
  return (
    <div>
      {/* Other components or content */}
      <AdminPanel />
      {/* Other components or content */}
    </div>
  );
}

export default App;
```

---------------------------------
<br><br><br>

# Overview **[ Logs /admin-log]** 
# LogTable Component Documentation

The `LogTable` component is a React functional component designed to display logs from a server-side log file. It utilizes Axios for making HTTP requests to fetch logs from a file, and it includes external styles and a header component.

## Dependencies

- **React:** The component is built using React.
- **axios:** A Promise-based HTTP client for making requests to the server.
- **CSS Styles:** The component relies on external styles defined in a stylesheet, presumably named `AdminLog.module.css`.

## Usage

To use the `LogTable` component, import it into your React application and include it in your JSX/HTML structure.

```jsx
import React from 'react';
import LogTable from './path/to/LogTable';

function App() {
  return (
    <div>
      {/* Other components or content */}
      <LogTable />
      {/* Other components or content */}
    </div>
  );
}

export default App;
```

## Component Structure

The `LogTable` component includes the following functionalities:

- **Fetching Logs:** Logs are fetched from the server by making an HTTP GET request to the relative path `'../../../../../back-c--/database-logs.log'`. The fetched logs are split by newline characters, and the resulting array is set as the state using the `useState` hook.

## Styling

The component relies on external styles defined in a stylesheet, presumably named `AdminLog.module.css`. The styles include various class names used for styling different elements within the `LogTable` component.

## Log Table

The component renders a table displaying log entries. Each log entry is displayed in a separate row within the table.

## Example

```jsx
import React from 'react';
import LogTable from './path/to/LogTable';

function App() {
  return (
    <div>
      {/* Other components or content */}
      <LogTable />
      {/* Other components or content */}
    </div>
  );
}

export default App;
```
---------------------------------
<br><br><br>

# Overview **[ Users /edit-users]** 

The `EditUsers` component is a React functional component designed to display and manage user information in an admin panel. It uses external styles, includes a header, and allows for user actions such as editing, blocking, changing status, and deleting.

## Dependencies

- **React:** The component is built using React.
- **react-router-dom:** Utilized for navigation within the application.
- **axios:** A Promise-based HTTP client for making requests to the server.
- **CSS Styles:** The component relies on external styles defined in a stylesheet, presumably named `AdminEditUsers.module.css`.
- **Images:** Several image assets (`blocked.png`, `delete.png`, `status-change.png`, `edit.png`) are used for buttons.

## Usage

To use the `EditUsers` component, import it into your React application and include it in your JSX/HTML structure.

```jsx
import React from 'react';
import EditUsers from './path/to/EditUsers';

function App() {
  return (
    <div>
      {/* Other components or content */}
      <EditUsers />
      {/* Other components or content */}
    </div>
  );
}

export default App;
```

## Component Structure

The `EditUsers` component includes the following functionalities:

- **Fetching Users:** Users are fetched from the server using an HTTP GET request to `/api/users` when the component mounts. The fetched users are stored in the component's state using the `useState` hook.

- **Deleting Users:** The `handleDeleteUser` function is responsible for deleting a user. It sends an HTTP DELETE request to `/api/users/${userId}` and updates the state to remove the deleted user.

- **Editing Users:** The `handleEditUser` function navigates to the user's profile page using the `useNavigate` hook from `react-router-dom`.

- **Blocking Users:** The `handleBlockUser` function sends an HTTP PUT request to `/api/users/${userId}/block` to block a user.

- **Changing User Status:** The `handleChangeStatus` function is currently commented out. It appears to be intended for changing the status of a user but is not implemented in the provided code.

## Mock Users

A set of mock users is included within the component for demonstration purposes. If no users are fetched from the server, these mock users are used and displayed in the table.

## Styling

The component relies on external styles defined in a stylesheet, presumably named `AdminEditUsers.module.css`. The styles include various class names used for styling different elements within the `EditUsers` component.

## User Table

The component renders a table (`usersTable`) displaying user information, including ID, name, email, hash, phone number, date of birth, address, order history, status, and action buttons.

## Action Buttons

Each row in the user table contains action buttons for editing, blocking, changing status (currently commented out), and deleting a user. These buttons trigger the respective functions mentioned earlier.

## Example

```jsx
import React from 'react';
import EditUsers from './path/to/EditUsers';

function App() {
  return (
    <div>
      {/* Other components or content */}
      <EditUsers />
      {/* Other components or content */}
    </div>
  );
}

export default App;
```
---------------------------------
<br><br><br>

# Overview **[ Products /edit-products]** 

The `ProductTable` component is a React functional component responsible for displaying a table of products. It includes features for fetching products from an API, deleting products, and navigating to an edit page for a specific product. The component utilizes external styles, images, and a header component.

## Dependencies

- **React:** The component is built using React.
- **react-router-dom:** Utilized for navigation within the application.
- **CSS Styles:** The component relies on external styles defined in a stylesheet, presumably named `EditProducts.module.css`.
- **Images:** Image assets (`delete-prod.png`, `edit.png`) are used for delete and edit buttons.

## Usage

To use the `ProductTable` component, import it into your React application and include it in your JSX/HTML structure.

```jsx
import React from 'react';
import ProductTable from './path/to/ProductTable';

function App() {
  return (
    <div>
      {/* Other components or content */}
      <ProductTable />
      {/* Other components or content */}
    </div>
  );
}

export default App;
```

## Component Structure

The `ProductTable` component includes the following functionalities:

- **Fetching Products:** Products are fetched from the server using the `fetchProducts` function, which is an asynchronous function that makes a GET request to the specified API endpoint (`https://nefor-store-api.onrender.com/items?page=0`). The fetched products are stored in the component's state using the `useState` hook.

- **Deleting Products:** The `handleDelete` function is responsible for deleting a product. It sends an HTTP DELETE request to the server endpoint `/items/${id}` and updates the state to remove the deleted product.

- **Editing Products:** The `handleEdit` function navigates to the edit page for a specific product using the `useNavigate` hook from `react-router-dom`.

## Product Component

The `Products` component is a sub-component responsible for rendering the product table. It takes the product data, delete and edit functions as props, and displays a table with product information, including ID, photo, product name, description, price, and action buttons for editing and deleting.

## Styling

The component relies on external styles defined in a stylesheet, presumably named `EditProducts.module.css`. The styles include various class names used for styling different elements within the `ProductTable` component.

## Example

```jsx
import React from 'react';
import ProductTable from './path/to/ProductTable';

function App() {
  return (
    <div>
      {/* Other components or content */}
      <ProductTable />
      {/* Other components or content */}
    </div>
  );
}

export default App;
```