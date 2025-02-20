import React, { useState } from "react";

function RegisterForm() {
  const [formData, setFormData] = useState({
    useCase: '',
    userCount: '',
    mathIntensity: '',
    language: '',
    knowledgeBase: '',
    storageLocation: '',
    uptime: '',
    usageTimings: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="container">
      <h1 className="mt-5">Application Configuration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="useCase" className="form-label">Use Case</label>
          <input
            type="text"
            className="form-control"
            id="useCase"
            name="useCase"
            value={formData.useCase}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="userCount" className="form-label">Number of Users</label>
          <input
            type="number"
            className="form-control"
            id="userCount"
            name="userCount"
            value={formData.userCount}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="mathIntensity" className="form-label">Mathematical Intensity (1-10)</label>
          <input
            type="number"
            className="form-control"
            id="mathIntensity"
            name="mathIntensity"
            value={formData.mathIntensity}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="language" className="form-label">Preferred Language</label>
          <input
            type="text"
            className="form-control"
            id="language"
            name="language"
            value={formData.language}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="knowledgeBase" className="form-label">Knowledge Base</label>
          <input
            type="text"
            className="form-control"
            id="knowledgeBase"
            name="knowledgeBase"
            value={formData.knowledgeBase}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="storageLocation" className="form-label">Storage Location</label>
          <input
            type="text"
            className="form-control"
            id="storageLocation"
            name="storageLocation"
            value={formData.storageLocation}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="uptime" className="form-label">Required Uptime</label>
          <input
            type="text"
            className="form-control"
            id="uptime"
            name="uptime"
            value={formData.uptime}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="usageTimings" className="form-label">Usage Timings</label>
          <input
            type="text"
            className="form-control"
            id="usageTimings"
            name="usageTimings"
            value={formData.usageTimings}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;
