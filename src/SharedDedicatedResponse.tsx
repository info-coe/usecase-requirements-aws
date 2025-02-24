import sharedResource from "./images/18867.jpg";
import dedicatedResource from "./images/131.jpg";

export default function SharedDedicatedResponse() {
  return (
    <div className="container p-4">
        <div className="shadow rounded d-md-flex justify-content-between m-3">
            <div className="col-md-5">
                <img src={sharedResource} alt="shared Resource" width="100%"/>
                {/* <h2 className="d-flex justify-content-center align-items-center h-100">Shared Response</h2> */}
            </div>
            <div className="p-3 col-md-7">
                <p>Hardware requirements (GPU, RAM, Storage)</p>
                <p>ec2 type with pricing</p>
                <p>Model suggestions</p>
                <p>usage patterns - based on uptime</p>
            </div>
        </div>
        <div className="shadow rounded d-md-flex justify-content-between m-3">
            <div className="p-3 col-md-7">
                <p>Hardware requirements (GPU, RAM, Storage)</p>
                <p>ec2 type with pricing</p>
                <p>Model suggestions</p>
                <p>usage patterns - based on uptime</p>
            </div>
            <div className="col-md-5">
                <img src={dedicatedResource} alt="dedicated Resource" width="100%"/>
                {/* <h2 className="d-flex justify-content-center align-items-center h-100">Dedicated Response</h2> */}
            </div>
        </div>
    </div>
  )
}
