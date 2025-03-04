import { useState } from "react";
import backgroundImage from './images/side-updated.png';
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface ApplicatioData {
  use_case: string,
  needs_vision: boolean,
  concurrent_users: number,
  reasoning_intensity: number,
  needs_multilingual: boolean,
  knowledge_size_gb: number,
  storageLocation: string,
  uptime: string,
  usageTimings: string,
}

interface userData{
  username: string,
  receipientMail : string
}

export default function ConfigurationForm() {
  const [formData, setFormData] = useState<ApplicatioData>({
    use_case: "",
    needs_vision: true,
    concurrent_users: 0,
    reasoning_intensity: 0,
    needs_multilingual: false,
    knowledge_size_gb: 0,
    storageLocation: "s3",
    uptime: "",
    usageTimings: "",
  });

  const [userData, setUserData] = useState<userData>({
    username:"",
    receipientMail:""
  })

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if(name === "needs_multilingual"){
      setFormData((prev) => ({ ...prev, [name]: value === "true" }));
    }else{
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleUserData = (e:any) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    axios.post("https://pdk80npe06.execute-api.us-east-1.amazonaws.com/dev/", formData,
      {
        headers : {
          "Content-Type" : "application/json",
          "Access-Control-Allow-Origin":"*",
          "Access-Control-Allow-Headers":"*"
        }
      }
    )
    .then((res)=>{
      // console.log(res.data);
      const data = res.data;
      navigate("/result",{state:{data,userData}})
    })
    .catch((err)=>{
      console.log(err);
    })
  };

  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "rgba(51, 132, 179, 0.57)"
      }}
    >
      <div className="row w-100 justify-content-end">
        {/* Form Section */}
        <div className="col-lg-4 p-2 text-center">
          <img src={backgroundImage} alt="sidebg"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",  // This ensures the image fits in the container without stretching.
              objectFit: "contain",  // This ensures the image scales correctly within the container.
              height: "90vh",
            }}
          />
        </div>
        <div className="col-lg-8 p-3">
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
                    htmlFor="username"
                    className="form-label font-weight-semibold"
                    style={{ fontSize: "14px" }}
                  >
                    <b>Your Full Name</b>
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill shadow-sm"
                    id="username"
                    name="username"
                    pattern="[A-Za-z\s]+"
                    title="Please use only alphabets"
                    value={userData.username}
                    onChange={handleUserData}
                    required
                    style={{ fontSize: "14px" }}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label
                    htmlFor="receipientMail"
                    className="form-label font-weight-semibold"
                    style={{ fontSize: "14px" }}
                  >
                    <b>Email address</b>
                  </label>
                  <input
                    type="email"
                    className="form-control rounded-pill shadow-sm"
                    id="receipientMail"
                    name="receipientMail"
                    title="Please use valid email address"
                    value={userData.receipientMail}
                    onChange={handleUserData}
                    required
                    style={{ fontSize: "14px" }}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label
                    htmlFor="use_case"
                    className="form-label font-weight-semibold"
                    style={{ fontSize: "14px" }}
                  >
                    <b>What is your use case?</b>
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill shadow-sm"
                    id="use_case"
                    name="use_case"
                    pattern="[A-Za-z\s]+"
                    title="Please use only alphabets"
                    value={formData.use_case}
                    onChange={handleChange}
                    required
                    style={{ fontSize: "14px" }}
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label
                    htmlFor="concurrent_users"
                    className="form-label font-weight-semibold"
                    style={{ fontSize: "14px" }}
                  >
                    <b>How many users will be using this application?</b>
                  </label>
                  <input
                    type="number"
                    className="form-control rounded-pill shadow-sm"
                    id="concurrent_users"
                    name="concurrent_users"
                    min={0}
                    pattern="^[0-9]\d*$"
                    value={formData.concurrent_users}
                    onChange={handleChange}
                    required
                    style={{ fontSize: "14px" }}
                  />
                </div>
              </div>

              {/* Math Intensity and Multilingual Support (2 inputs in 1 row) */}
              <div className="row mb-3">
                <div className="col-12 col-md-6">
                  <label
                    htmlFor="reasoning_intensity"
                    className="form-label font-weight-semibold"
                    style={{ fontSize: "13px" }}
                  >
                    <b>In the scale of 1 - 10 how mathematical intensive your questions?</b>
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    id="reasoning_intensity"
                    name="reasoning_intensity"
                    min="0"
                    max="10"
                    value={formData.reasoning_intensity}
                    onChange={handleChange}
                    style={{
                      borderRadius: "50px",
                      fontSize: "14px",
                    }}
                    required
                  />
                  <div className="text-center text-muted" style={{ fontSize: "14px" }}>
                    {formData.reasoning_intensity}
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <label
                    htmlFor="needs_multilingual"
                    className="form-label font-weight-semibold"
                    style={{ fontSize: "14px" }}
                  >
                    <b>What is the preferred language of the application?</b>
                  </label>
                  <select
                    className="form-select rounded-pill shadow-sm"
                    id="needs_multilingual"
                    name="needs_multilingual"
                    value={String(formData.needs_multilingual)}
                    onChange={handleChange}
                    style={{

                      fontSize: "14px",
                    }}
                  >
                    <option value="select">--select--</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
              </div>

              {/* Knowledge Base and Storage Location (2 inputs in 1 row) */}
              <div className="row mb-3">
                <div className="col-12 col-md-6">
                  <label
                    htmlFor="knowledge_size_gb"
                    className="form-label font-weight-semibold"
                    style={{ fontSize: "14px" }}
                  >
                    <b>How much knowledge base do you currently have?(In GB)</b>
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill shadow-sm"
                    id="knowledge_size_gb"
                    name="knowledge_size_gb"
                    value={formData.knowledge_size_gb}
                    onChange={handleChange}
                    required
                    style={{
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
                    <b>Where is this knowledge base stored?</b>
                  </label>
                  <select
                    className="form-select rounded-pill shadow-sm"
                    id="storageLocation"
                    name="storageLocation"
                    value={formData.storageLocation}
                    onChange={handleChange}
                    style={{
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
                    <b>How much uptime is needed?</b>
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill shadow-sm"
                    id="uptime"
                    name="uptime"
                    pattern="^[1-9]\d*/[1-9]\d*$"
                    title="Please use valid format. For Example 24/7"
                    value={formData.uptime}
                    onChange={handleChange}
                    style={{
                      fontSize: "14px",
                    }}
                    required
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label
                    htmlFor="usageTimings"
                    className="form-label font-weight-semibold"
                    style={{ fontSize: "14px" }}
                  >
                    <b>Usage Timings</b>
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill shadow-sm"
                    id="usageTimings"
                    name="usageTimings"
                    value={formData.usageTimings}
                    onChange={handleChange}
                    style={{
                      fontSize: "14px",
                    }}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary w-50 py-2 rounded-pill mt-3 shadow-sm"
                  style={{ fontSize: "16px" }}
                >
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
