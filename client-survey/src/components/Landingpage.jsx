
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../App.css";
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../global/NavBar";
import banner from "../images/banner.png";

const description = [
    "As we journey towards influencing the future, the Office of the Vice-Chancellor for Strategic Initiatives (OVCSI), through the Office of Monitoring and Evaluation (OME), conducts a semestral performance evaluation of internal and external services of the offices in the University. This survey will definitely help the management improve the delivery of its services to the clientele.",
    "In view of this, we would like to know and gather your thoughts on how a particular office has served your needs and met your satisfaction in terms of the services you have availed by taking time in answering this survey. Your objective and honest answer in this survey will be highly appreciated.",
    "This Client Satisfaction Measurement (CSM) tracks the customer experience of government offices. Your feedback on your recently concluded transaction will help this office provide a better service. Personal information shared will be kept confidential and you always have the option to not answer this form.",
    "Let us journey together to a greater MSU-IIT!"
  ];
  
  // Static data for dropdown options
  const officeOptions = [
    {id: 1 , officeName:"Accounting Division"},
    {id: 2 , officeName:"Alumni and Endowment Fund Center"},
    {id: 3 , officeName:"CED - Integrated Development School"},
    {id: 3 , officeName:"Center for Advanced Education and Lifelong Learning"},
    {id: 3 , officeName:"Center for Information and Communication Techonology"},
    {id: 3 , officeName:"College of Education"},
    {id: 3 , officeName:"Hostel"},
    {id: 3 , officeName:"HR Management Division"},
    {id: 3 , officeName:"Infrastructure Services Division"},
    {id: 3 , officeName:"Knowledge and Technology Transfer Office"},
    {id: 3 , officeName:"Legal Services Office"},
    {id: 3 , officeName:"MSU-IIT Center for Resiliency"},

  ];
const LandingPage = () => {
    const navigate = useNavigate();
    const [selectedOffice, setSelectedOffice] = useState("");

    const handleNext = () => {
        if (selectedOffice) {
            navigate(`/office/${selectedOffice}`); // Dynamically insert the office ID
        } else {
            alert("Please select an office first.");
        }
    };
    return (
        <div>
            <Navbar/>
            <div className="survey-container">
            {/* Header Banner */}
            <div className="banner">
                <img src={banner} alt="Client Satisfaction Measurement" className="banner-img" />
            </div>

            {/* Survey Description */}
            <div className="survey-content">
                {description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
                ))}

                {/* Survey Dropdown */}
                <h3>Client Satisfactory Survey</h3>
                <div className="survey-dropdown">
                <select value={selectedOffice} onChange={(e) => setSelectedOffice(e.target.value)}>
                <option value="">-- Choose --</option>
                {officeOptions.map((office) => (
                    <option key={office.id} value={office.id}>{office.officeName}</option>
                ))}
            </select>
                </div>
                <button className="next-btn"  onClick={handleNext}> Next </button>
            </div>
            </div>
        </div>
    );
};

export default LandingPage;
