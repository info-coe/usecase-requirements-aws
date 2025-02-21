import { useState } from "react";

export default function ConfigurationForm() {
  const [formData, setFormData] = useState({
    useCase: "",
    userCount: "",
    mathIntensity: 0,
    multilingualSupport: "",
    knowledgeBase: "",
    storageLocation: "",
    uptime: "",
    usageTimings: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };
  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center bg-gradient-primary"
      style={{
        backgroundImage: "url()",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="row w-100 justify-content-end">
        {/* Form Section */}
        <div className="col-md-8 col-lg-6 p-3">
          <div className="card shadow-lg border-0 p-4 rounded-4 bg-light">
            {/* Form Heading */}
            <h2
              className="text-center mb-4 font-weight-bold text-uppercase"
              style={{ letterSpacing: "2px", color: "#2c3e50" }}
            >
              Application Configuration Form
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Use Case Input */}
              <div className="mb-3">
                <label
                  htmlFor="useCase"
                  className="form-label font-weight-semibold"
                >
                  what is your use case?
                </label>
                <input
                  type="text"
                  className="form-control rounded-pill shadow-sm"
                  id="useCase"
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleChange}
                  required
                  style={{ borderColor: "#3498db" }}
                />
              </div>

              {/* Number of Users Input */}
              <div className="mb-3">
                <label
                  htmlFor="userCount"
                  className="form-label font-weight-semibold"
                >
                  How many users will be using this application?
                </label>
                <input
                  type="number"
                  className="form-control rounded-pill shadow-sm"
                  id="userCount"
                  name="userCount"
                  value={formData.userCount}
                  onChange={handleChange}
                  required
                  style={{ borderColor: "#3498db" }}
                />
              </div>

              {/* Math Intensity Scale */}
              <div className="mb-3">
                <label
                  htmlFor="mathIntensity"
                  className="form-label font-weight-semibold"
                >
                  In the scale of 1 - 10 how mathematical intensive your questions?
                </label>
                <input
                  type="range"
                  className="form-range"
                  id="mathIntensity"
                  name="mathIntensity"
                  min="0"
                  max="10"
                  value={formData.mathIntensity}
                  onChange={handleChange}
                  style={{ borderRadius: "50px", border: "1px solid #3498db" }}
                />
                <div className="text-center text-muted">
                  {formData.mathIntensity}
                </div>
              </div>

              {/* Multilingual Support (Yes/No) */}
              <div className="mb-3">
                <label
                  htmlFor="multilingualSupport"
                  className="form-label font-weight-semibold"
                >
                  what is the preferred language of the application?
                </label>
                <select
                  className="form-select rounded-pill shadow-sm"
                  id="multilingualSupport"
                  name="multilingualSupport"
                  value={formData.multilingualSupport}
                  onChange={handleChange}
                  style={{ borderColor: "#3498db" }}
                >
                  <option value="select">--select--</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {/* Knowledge Base Input */}
              <div className="mb-3">
                <label
                  htmlFor="knowledgeBase"
                  className="form-label font-weight-semibold"
                >
                  How much knowledge base you currently have?
                </label>
                <input
                  type="text"
                  className="form-control rounded-pill shadow-sm"
                  id="knowledgeBase"
                  name="knowledgeBase"
                  value={formData.knowledgeBase}
                  onChange={handleChange}
                  required
                  style={{ borderColor: "#3498db" }}
                />
              </div>

              {/* Knowledge Base Storage Location */}
              <div className="mb-3">
                <label
                  htmlFor="storageLocation"
                  className="form-label font-weight-semibold"
                >
                  Where is this knowledge base stored?
                </label>
                <select
                  className="form-select rounded-pill shadow-sm"
                  id="storageLocation"
                  name="storageLocation"
                  value={formData.storageLocation}
                  onChange={handleChange}
                  style={{ borderColor: "#3498db" }}
                >
                  <option value="select">--select--</option>
                  <option value="ftp">FTP</option>
                  <option value="s3">S3</option>
                  <option value="sharepoint">SharePoint</option>
                </select>
              </div>

              {/* Uptime Input */}
              <div className="mb-3">
                <label
                  htmlFor="uptime"
                  className="form-label font-weight-semibold"
                >
                  How much up time needed?
                </label>
                <input
                  type="time"
                  className="form-control rounded-pill shadow-sm"
                  id="uptime"
                  name="uptime"
                  value={formData.uptime}
                  onChange={handleChange}
                  style={{ borderColor: "#3498db" }}
                />
              </div>

              {/* Usage Timings Input */}
              <div className="mb-3">
                <label
                  htmlFor="usageTimings"
                  className="form-label font-weight-semibold"
                >
                  Usage Timings
                </label>
                <input
                  type="text"
                  className="form-control rounded-pill shadow-sm"
                  id="usageTimings"
                  name="usageTimings"
                  value={formData.usageTimings}
                  onChange={handleChange}
                  style={{ borderColor: "#3498db" }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary w-100 py-2 rounded-pill mt-3 shadow-sm"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
