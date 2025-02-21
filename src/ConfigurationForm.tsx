import { useState } from "react";
import backgroundImage from './images/side-updated.png';

interface ApplicatioData{
  useCase: string,
  userCount: string,
  mathIntensity: number,
  multilingualSupport: string,
  knowledgeBase: string,
  storageLocation: string,
  uptime: string,
  usageTimings: string,
}

export default function ConfigurationForm() {
  const [formData, setFormData] = useState<ApplicatioData>({
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
      className="min-vh-100 d-flex justify-content-center align-items-center"
    style={{
      backgroundColor:"rgba(51, 132, 179, 0.57)"
    }}
    >
      <div className="row w-100 justify-content-end">
        {/* Form Section */}
        <div className="col-lg-6 p-2 text-center">
          <img src={backgroundImage} alt="sidebg"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",  // This ensures the image fits in the container without stretching.
              objectFit: "contain",  // This ensures the image scales correctly within the container.
              height: "90vh",
            }}
          />
        </div>
        <div className="col-lg-6 p-3">
          <div className="card shadow-lg border-0 p-4 rounded-4 bg-light ">
            {/* Form Heading */}
            <h2
              className="text-center mb-4 font-weight-bold text-uppercase"
              style={{
                letterSpacing: "2px",
                color: "#2c3e50",
              }}
            >
              Application Configuration Form
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Use Case and User Count Inputs (2 inputs in 1 row) */}
              <div className="row h-100 mb-3">
                <div className="col-12 col-md-6">
                  <label
                    htmlFor="useCase"
                    className="form-label font-weight-semibold"
                    style={{ fontSize: "14px" }}
                  >
                    What is your use case?
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill shadow-sm"
                    id="useCase"
                    name="useCase"
                    value={formData.useCase}
                    onChange={handleChange}
                    required
                    style={{ borderColor: "#3498db", fontSize: "14px" }}
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label
                    htmlFor="userCount"
                    className="form-label font-weight-semibold"
                    style={{ fontSize: "14px" }}
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
                    style={{ borderColor: "#3498db", fontSize: "14px" }}
                  />
                </div>
              </div>

              {/* Math Intensity and Multilingual Support (2 inputs in 1 row) */}
              <div className="row mb-3">
                <div className="col-12 col-md-6">
                  <label
                    htmlFor="mathIntensity"
                    className="form-label font-weight-semibold"
                    style={{ fontSize: "14px" }}
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
                    style={{
                      borderRadius: "50px",
                      border: "1px solid #3498db",
                      fontSize: "14px",
                    }}
                  />
                  <div className="text-center text-muted" style={{ fontSize: "14px" }}>
                    {formData.mathIntensity}
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <label
                    htmlFor="multilingualSupport"
                    className="form-label font-weight-semibold"
                    style={{ fontSize: "14px" }}
                  >
                    What is the preferred language of the application?
                  </label>
                  <select
                    className="form-select rounded-pill shadow-sm"
                    id="multilingualSupport"
                    name="multilingualSupport"
                    value={formData.multilingualSupport}
                    onChange={handleChange}
                    style={{
                      borderColor: "#3498db",
                      fontSize: "14px",
                    }}
                  >
                    <option value="select">--select--</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>

              {/* Knowledge Base and Storage Location (2 inputs in 1 row) */}
              <div className="row mb-3">
                <div className="col-12 col-md-6">
                  <label
                    htmlFor="knowledgeBase"
                    className="form-label font-weight-semibold"
                    style={{ fontSize: "14px" }}
                  >
                    How much knowledge base do you currently have?
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill shadow-sm"
                    id="knowledgeBase"
                    name="knowledgeBase"
                    value={formData.knowledgeBase}
                    onChange={handleChange}
                    required
                    style={{
                      borderColor: "#3498db",
                      fontSize: "14px",
                    }}
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label
                    htmlFor="storageLocation"
                    className="form-label font-weight-semibold"
                    style={{ fontSize: "14px" }}
                  >
                    Where is this knowledge base stored?
                  </label>
                  <select
                    className="form-select rounded-pill shadow-sm"
                    id="storageLocation"
                    name="storageLocation"
                    value={formData.storageLocation}
                    onChange={handleChange}
                    style={{
                      borderColor: "#3498db",
                      fontSize: "14px",
                    }}
                  >
                    <option value="select">--select--</option>
                    <option value="ftp">FTP</option>
                    <option value="s3">S3</option>
                    <option value="sharepoint">SharePoint</option>
                  </select>
                </div>
              </div>

              {/* Uptime and Usage Timings (2 inputs in 1 row) */}
              <div className="row mb-3">
                <div className="col-12 col-md-6">
                  <label
                    htmlFor="uptime"
                    className="form-label font-weight-semibold"
                    style={{ fontSize: "14px" }}
                  >
                    How much uptime is needed?
                  </label>
                  <input
                    type="time"
                    className="form-control rounded-pill shadow-sm"
                    id="uptime"
                    name="uptime"
                    value={formData.uptime}
                    onChange={handleChange}
                    style={{
                      borderColor: "#3498db",
                      fontSize: "14px",
                    }}
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label
                    htmlFor="usageTimings"
                    className="form-label font-weight-semibold"
                    style={{ fontSize: "14px" }}
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
                    style={{
                      borderColor: "#3498db",
                      fontSize: "14px",
                    }}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary w-100 py-2 rounded-pill mt-3 shadow-sm"
                style={{ fontSize: "16px" }}
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
