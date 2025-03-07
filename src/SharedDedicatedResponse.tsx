import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./shared.css";
import axios from "axios";

export default function SharedDedicatedResponse() {
  const { state } = useLocation();
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [values, setValues] = useState(state?.data || null);
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userData, setUserData] = useState(state?.userData || null);

  const navigate = useNavigate();

  const handleDeployment = (
    EstimatedCost: number,
    MemoryType: string,
    Model: string
  ) => {
    const updatedUserData = {
      ...userData,
      responseToDeploy: MemoryType,
      estimatedPrice: EstimatedCost,
      suggestedModel: Model,
    };

    axios
      .post(`${process.env.REACT_APP_APP_URL_ENDPOINT}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS, POST",
        },
      })
      .then((response) => {
        const appUrl = response.data.body.app_url;
        updatedUserData.appUrl = appUrl;

        axios
          .post(`${process.env.REACT_APP_BACKEND_HOST}/sendemail`, updatedUserData, {
            headers: {
              "Content-Type": "application/json"
            },
          })
          .then((res) => {
            // console.log(res.data);
            alert("Email sent successfully");
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // console.log(userData);

  return (
    <div className="container">
      <div className="one">
        <header>
          <span>$</span>
          {values.monthly_cost_shared}
        </header>
        <div className="basic">Shared Response</div>
        <div className="content">
          <div>
            Hardware requirements (GPU, RAM, Storage)
            <ul>
              <li>RAM(GiB) : {values.hardware_req.RAM_GiB}</li>
              <li>Storage(GiB) : {values.hardware_req.Storage_GiB}</li>
              <li>Total VRAM(GiB) : {values.hardware_req.Total_VRAM_GiB}</li>
              <li>vCPUs : {values.hardware_req.vCPUs}</li>
            </ul>
          </div>
          <div>
            ec2 type with pricing
            <ul>
              <li>Instance type : {values.ec2_details.instance_type}</li>
              <li>Price(hourly) : {values.ec2_hourly_rate}</li>
            </ul>
          </div>
          <p>Model suggestions : {values.model_suggestion}</p>
        </div>
        <div className="send">
          <button
            onClick={() =>
              handleDeployment(
                values.monthly_cost_shared,
                "Shared Memory",
                values.model_suggestion
              )
            }
          >
            DEPLOY NOW
          </button>
        </div>
      </div>
      <div className="two">
        <header>
          <span>$</span>
          {values.monthly_cost_dedicated}
        </header>
        <div className="basic">Dedicated Response</div>
        <div className="content">
          <div>
            Hardware requirements (GPU, RAM, Storage)
            <ul>
              <li>RAM(GiB) : {values.hardware_req.RAM_GiB}</li>
              <li>Storage(GiB) : {values.hardware_req.Storage_GiB}</li>
              <li>Total VRAM(GiB) : {values.hardware_req.Total_VRAM_GiB}</li>
              <li>vCPUs : {values.hardware_req.vCPUs}</li>
            </ul>
          </div>
          <div>
            ec2 type with pricing
            <ul>
              <li>Instance type : {values.ec2_details.instance_type}</li>
              <li>Price(hourly) : {values.ec2_hourly_rate}</li>
            </ul>
          </div>
          <p>Model suggestions : {values.model_suggestion}</p>
        </div>
        <div className="send">
          <button             
            onClick={() =>
              handleDeployment(
                values.monthly_cost_dedicated,
                "Dedicated Memory",
                values.model_suggestion
              )
            }
          >
            DEPLOY NOW
          </button>
        </div>
      </div>
    </div>
  );
}
