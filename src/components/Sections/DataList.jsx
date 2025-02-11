import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);

  // Fetch data when the component mounts
  useEffect(() => {
    fetchContacts();
  }, []);

  // Function to fetch contacts from the API
  const fetchContacts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/contacts");
      setContacts(response.data);
    } catch (error) {
      console.error("There was an error fetching the contacts:", error);
    }
  };

  return (
    <Wrapper>
      <h1 className="font40 extraBold">Contacts List</h1>
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.fname}</td>
              <td>{contact.email}</td>
              <td>{contact.mobile}</td>
              <td>{contact.message}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 70px 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  th {
    background-color: #f2f2f2;
  }
`;
