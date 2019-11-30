import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

const FormWrapper = styled.div`
  width: 100%;
  margin: 100px 0;
  padding: 0;
  form {
    width: 100%;
    max-width: 600px;
    margin: 0;
    input,
    textarea {
      width: 100%;
      max-width: 100%;
      border: none;
      margin: 0.5rem 0;
      padding: 0.5rem 1rem;
      border-radius: 0.2rem;
      background: #111111;
      color: grey;
      font-size: 1rem;
      font-weight: 300;
      letter-spacing: 3px;
    }
    input {
      height: 2.5rem;
      &[type="submit"] {
        background: grey;
        color: whitesmoke;
        transition: all 0.5s ease;
        cursor: pointer;
        &:hover {
          background: whitesmoke;
          color: darkgrey;
        }
      }
    }
    textarea {
      height: 15rem;
    }
  }
`

const Contact = () => (
  <Layout>
    <FormWrapper className="form-wrapper">
      <form
        action="https://formspree.io/ky.32012.voilf@gmail.com"
        method="POST"
        className="form"
      >
        <input
          type="text"
          name="name"
          id="name"
          className="name"
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          className="email"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          id="message"
          rows="10"
          className="message"
          placeholder="Message"
          required
        />
        <input type="submit" value="Send" className="submit" />
      </form>
    </FormWrapper>
  </Layout>
)

export default Contact
