import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    useCase: '',
    userCount: '',
    mathIntensity: 5, // Default to the middle of the scale
    multilingualSupport: 'no',
    knowledgeBase: '',
    storageLocation: '',
    uptime: '',
    usageTimings: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-gradient-primary"
    
    style={{
      backgroundImage: "url()",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed"
    }}

    >
      <div className="row w-100 justify-content-end">
        {/* Form Section */}
        <div className="col-md-8 col-lg-6 p-3">
          <div className="card shadow-lg border-0 p-4 rounded-4 bg-light">
            
            {/* Form Heading */}
            <h2 className="text-center mb-4 font-weight-bold text-uppercase" style={{ letterSpacing: '2px', color: '#2c3e50' }}>
              Application Configuration Form
            </h2>

            <form onSubmit={handleSubmit}>

              {/* Use Case Input */}
              <div className="mb-3">
                <label htmlFor="useCase" className="form-label font-weight-semibold">Use Case</label>
                <input
                  type="text"
                  className="form-control rounded-pill shadow-sm"
                  id="useCase"
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleChange}
                  required
                  style={{ borderColor: '#3498db' }}
                />
              </div>
              
              {/* Number of Users Input */}
              <div className="mb-3">
                <label htmlFor="userCount" className="form-label font-weight-semibold">Number of Users</label>
                <input
                  type="number"
                  className="form-control rounded-pill shadow-sm"
                  id="userCount"
                  name="userCount"
                  value={formData.userCount}
                  onChange={handleChange}
                  required
                  style={{ borderColor: '#3498db' }}
                />
              </div>

              {/* Math Intensity Scale */}
              <div className="mb-3">
                <label htmlFor="mathIntensity" className="form-label font-weight-semibold">Math Intensity (1-10)</label>
                <input
                  type="range"
                  className="form-range"
                  id="mathIntensity"
                  name="mathIntensity"
                  min="1"
                  max="10"
                  value={formData.mathIntensity}
                  onChange={handleChange}
                  style={{ borderRadius: '50px', border: '1px solid #3498db' }}
                />
                <div className="text-center text-muted">{formData.mathIntensity}</div>
              </div>

              {/* Multilingual Support (Yes/No) */}
              <div className="mb-3">
                <label htmlFor="multilingualSupport" className="form-label font-weight-semibold">Multilingual Support</label>
                <select
                  className="form-select rounded-pill shadow-sm"
                  id="multilingualSupport"
                  name="multilingualSupport"
                  value={formData.multilingualSupport}
                  onChange={handleChange}
                  style={{ borderColor: '#3498db' }}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {/* Knowledge Base Input */}
              <div className="mb-3">
                <label htmlFor="knowledgeBase" className="form-label font-weight-semibold">Knowledge Base Capacity</label>
                <input
                  type="text"
                  className="form-control rounded-pill shadow-sm"
                  id="knowledgeBase"
                  name="knowledgeBase"
                  value={formData.knowledgeBase}
                  onChange={handleChange}
                  required
                  style={{ borderColor: '#3498db' }}
                />
              </div>

              {/* Knowledge Base Storage Location */}
              <div className="mb-3">
                <label htmlFor="storageLocation" className="form-label font-weight-semibold">Storage Location</label>
                <select
                  className="form-select rounded-pill shadow-sm"
                  id="storageLocation"
                  name="storageLocation"
                  value={formData.storageLocation}
                  onChange={handleChange}
                  style={{ borderColor: '#3498db' }}
                >
                  <option value="ftp">FTP</option>
                  <option value="s3">S3</option>
                  <option value="sharepoint">SharePoint</option>
                </select>
              </div>

              {/* Uptime Input */}
              <div className="mb-3">
                <label htmlFor="uptime" className="form-label font-weight-semibold">Required Uptime</label>
                <input
                  type="time"
                  className="form-control rounded-pill shadow-sm"
                  id="uptime"
                  name="uptime"
                  value={formData.uptime}
                  onChange={handleChange}
                  style={{ borderColor: '#3498db' }}
                />
              </div>

              {/* Usage Timings Input */}
              <div className="mb-3">
                <label htmlFor="usageTimings" className="form-label font-weight-semibold">Usage Timings</label>
                <input
                  type="text"
                  className="form-control rounded-pill shadow-sm"
                  id="usageTimings"
                  name="usageTimings"
                  value={formData.usageTimings}
                  onChange={handleChange}
                  style={{ borderColor: '#3498db' }}
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-100 py-2 rounded-pill mt-3 shadow-sm">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
