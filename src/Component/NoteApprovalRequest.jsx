import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const NoteForm = () => {
  const [institutes, setInstitutes] = useState([]);
  const [selectedInstitute, setSelectedInstitute] = useState("");
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");

  // Simulate fetching institute data from server
  useEffect(() => {
    // Replace this with your actual API call
    setInstitutes([
      { id: 1, name: "ABC Institute" },
      { id: 2, name: "XYZ University" },
    ]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      instituteId: selectedInstitute,
      subject,
      details,
    };
    console.log("Form Submitted:", payload);
    // Call your API here to submit the form
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "auto" }}>
      {/* Dropdown */}
      <label>Institute</label>
      <select
        value={selectedInstitute}
        onChange={(e) => setSelectedInstitute(e.target.value)}
        required
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      >
        <option value="">Select Institute</option>
        {institutes.map((inst) => (
          <option key={inst.id} value={inst.id}>
            {inst.name}
          </option>
        ))}
      </select>

      {/* Text Area */}
      <label>Subject</label>
      <textarea
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        rows={4}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      {/* Rich Text Editor */}
      <label>Details</label>
      <CKEditor
        editor={ClassicEditor}
        data={details}
        onChange={(event, editor) => {
          const data = editor.getData();
          setDetails(data);
        }}
      />

      <button type="submit" style={{ marginTop: "20px" }}>
        Submit
      </button>
    </form>
  );
};

export default NoteForm;
