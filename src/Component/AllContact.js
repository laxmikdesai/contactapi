import React, { useEffect, useState } from "react";
import getAllContactFromServer from "../api/ContactApi"; // ✅ fixed path

const AllContact = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await getAllContactFromServer();
        console.log(data)
        setContact(data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <>
   <table className="table table-bordered">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Contact No</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>

  {Array.isArray(contact) && contact.length > 0 ? (
    contact.map((c) => (
      <tr key={c.id}>
        <td>{c.fullName}</td>
        <td>{c.email}</td>
        <td>{c.contactNo}</td>
        <td>{c.status}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="4">No contacts found or data format is incorrect.</td>
    </tr>
  )}


  </tbody>
</table>
</>
  );
};

export default AllContact;
