import React from "react";
import { useTheme } from "../../context/theme-context";
import "./contact.css";

export const Contact = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`contact ${isDarkMode ? "dark" : "light"}`}>
      <header>
        <h1>Contact Us</h1>
      </header>
      <main>
        <section>
          <h2>Contact Information</h2>
          <address>
            <p>123 Main Street</p>
            <p>City, State ZIP Code</p>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </address>
        </section>
        <section>
          <h2>Contact Form</h2>
          <form>
            <tr>
              <td><label htmlFor="name">Name</label></td>
              <td>:</td>
              <td><input type="text" id="name" name="name" required /></td>
            </tr>
            <tr>
              <td><label htmlFor="email">Email:</label></td>
              <td>:</td>
              <td><input type="email" id="email" name="email" required /></td>
            </tr>
            <label htmlFor="message">Message:</label> <br/>
            <textarea id="message" name="message" rows="4" required style={{ width: '300px' }}></textarea> <br/>

            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
      <footer>
        &copy; 2023 Your Company Name
      </footer>
    </div>
  );
};

export default Contact;
