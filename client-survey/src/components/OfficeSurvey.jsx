import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NavBarQuest from "../global/NavBarQuest";

// Static office data (same as dropdown options)
const officeOptions = [
    { id: 1, officeName: "Accounting Division", description: "Handles financial transactions and budgeting." },
    { id: 2, officeName: "Alumni and Endowment Fund Center", description: "Supports alumni relations and funding projects." },
    { id: 3, officeName: "CED - Integrated Development School", description: "Provides K-12 education programs." },
    { id: 4, officeName: "Center for Advanced Education and Lifelong Learning", description: "Offers advanced education and training programs." },
    { id: 5, officeName: "Center for Information and Communication Technology", description: "Manages IT and digital transformation initiatives." },
    { id: 6, officeName: "College of Education", description: "Focuses on teacher training and education programs." },
    { id: 7, officeName: "Hostel", description: "Provides accommodation for students and guests." },
    { id: 8, officeName: "HR Management Division", description: "Handles recruitment, employee benefits, and HR services." },
    { id: 9, officeName: "Infrastructure Services Division", description: "Manages building maintenance and infrastructure projects." },
    { id: 10, officeName: "Knowledge and Technology Transfer Office", description: "Facilitates research commercialization and tech transfer." },
    { id: 11, officeName: "Legal Services Office", description: "Provides legal assistance and compliance services." },
    { id: 12, officeName: "MSU-IIT Center for Resiliency", description: "Leads disaster preparedness and climate resiliency efforts." }
];

const OfficeSurvey = () => {
    const params = useParams();
    const officeId = params.officeId; // Extract officeId from params
    const office = officeOptions.find(o => o.id.toString() === officeId);
    const [clientType, setClientType] = useState("");
    const [serviceType, setserviceType] = useState("");
    const [userType, setUserType] = useState("");
    const [otherServiceType, setOtherServicesType] = useState("");
    const [sexType, setsexType] = useState("");
    const [residenceType, setresidenceType] = useState("");
    const [collegeType, setcollegeType] = useState("");
    const [age, setAge] = useState("");
    const [selectedPersonnel, setSelectedPersonnel] = useState([]);
    const [step, setStep] = useState(1); // Track step progress
    const [cc1,setCC1 ] = useState("");
    const [cc2,setCC2 ] = useState(""); 
    const [cc3,setCC3 ] = useState(""); 
    const [SQD0,setSQD0 ] = useState(""); 
    const [SQD1,setSQD1 ] = useState(""); 
    const [SQD2,setSQD2 ] = useState(""); 
    const [SQD3,setSQD3 ] = useState(""); 
    const [SQD32,setSQD32 ] = useState(""); 
    const [SQD4,setSQD4 ] = useState(""); 
    const [SQD5,setSQD5 ] = useState(""); 
    const [SQD6,setSQD6 ] = useState(""); 
    const [SQD7,setSQD7 ] = useState(""); 
    const [SQD72,setSQD72 ] = useState(""); 
    const [SQD73,setSQD73 ] = useState(""); 
    const [SQD8,setSQD8 ] = useState(""); 
    const [SQD9,setSQD9 ] = useState(""); 
    const [comment,setcomment ] = useState(""); 
    const [email,setemail ] = useState(""); 
    const [contact,setcontact ] = useState(""); 

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);

    const handleCheckboxChange = (e) => {
      const { value, checked } = e.target;
  
      setSelectedPersonnel((prevSelected) =>
        checked
          ? [...prevSelected, value] // Add to array if checked
          : prevSelected.filter((person) => person !== value) // Remove if unchecked
      );
    };


    // If office is not found, show error message
    if (!office) {
        return <h2>Office not found!</h2>;
    }

    return (
        <div className="parent-container-questions">
          <NavBarQuest/>
          <div className="headertext">
            <p>{office.officeName} - {office.description}</p>
          </div>
           {/* Stepper Header */}
           <div className="stepper-wrapper">
            <div className="stepper-container">
            <div className="step">
                <div className={`step-circle ${step >= 1 ? "active" : ""}`}>1</div>
            </div>
            <div className={`step-line ${step >= 2 ? "active" : ""}`}></div>
            <div className="step">
                <div className={`step-circle ${step >= 2 ? "active" : ""}`}>2</div>
            </div>
            <div className={`step-line ${step >= 3 ? "active" : ""}`}></div>
            <div className="step">
                <div className={`step-circle ${step >= 3 ? "active" : ""}`}>3</div>
            </div>
            </div>
            </div>
        {step === 1 && (
          <div className="survey-container-questions">
                           {/* Left Side - Client Type with Radio Buttons */}
                  <div className="survey-container-questions-left">
                    <div className="instruction-1">
                        <p className="instructions-header2">Client Type:</p>
                        <div className="radio-group">
                            <label>
                                <input 
                                    type="radio" 
                                    name="clientType" 
                                    value="Citizen" 
                                    checked={clientType === "Citizen"}
                                    onChange={(e) => setClientType(e.target.value)}
                                />
                                Citizen
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    name="clientType" 
                                    value="Business" 
                                    checked={clientType === "Business"}
                                    onChange={(e) => setClientType(e.target.value)}
                                />
                                Business
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    name="clientType" 
                                    value="Government" 
                                    checked={clientType === "Government"}
                                    onChange={(e) => setClientType(e.target.value)}
                                />
                                Government (Employee or another agency)
                            </label>
                        </div>
                    </div>
                    <div className="instruction-1">
                        <p className="instructions-header2">I am a/an:</p>
                        <select 
                            className="dropdown-select" 
                            value={userType} 
                            onChange={(e) => setUserType(e.target.value)}
                        >
                            <option value="">-- Select One --</option>
                            <option value="Faculty Member">Faculty Member</option>
                            <option value="Student">Student</option>
                            <option value="Staff">Staff</option>
                        </select>
                    </div>
                    <div className="instruction-1">
                        <p className="instructions-header2">Sex at Birth:</p>
                        <div className="radio-group">
                            <label>
                                <input 
                                    type="radio" 
                                    name="sexType" 
                                    value="Male" 
                                    checked={sexType === "Male"}
                                    onChange={(e) => setsexType(e.target.value)}
                                />
                                Male
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    name="sexType" 
                                    value="Female" 
                                    checked={sexType === "Female"}
                                    onChange={(e) => setsexType(e.target.value)}
                                />
                                Female
                            </label>
                        </div>
                    </div>
                    <div className="instruction-1">
                        <p className="instructions-header2">Your Office/College:</p>
                        <select 
                            className="dropdown-select" 
                            value={collegeType} 
                            onChange={(e) => setcollegeType(e.target.value)}
                        >
                            <option value="">-- Select One --</option>
                            <option value="CASS">College of Arts and Social Sciences (CASS)</option>
                            <option value="CEBA">College of Economics, Business and Accountancy (CEBA)</option>
                            <option value="CED">College of Education (CED)</option>
                            <option value="CCS">College of Computer Studies (CCS)</option>
                            <option value="CHS">College of Health Sciences (CHS)</option>
                            <option value="COE">College of Engineering (COE)</option>
                            <option value="CSM">College of Science and Mathematics (CSM)</option>
                        </select>
                    </div>
                    <div className="instruction-1">
                        <p className="instructions-header2">Your Age:</p>
                        <input 
                          type="number"  // Enforce numeric input
                          name="age" 
                          className="input-full"  // Add class for styling
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          min="0" // Prevents negative age input
                          placeholder="Enter your age" // Adds a placeholder for better UX
                        />
                      </div>
                </div>             
                <div className="survey-container-questions-right">
                      <div className="instruction-1">
                                  <p className="instructions-header2">Region of Residence:</p>
                                  <select 
                                      className="dropdown-select" 
                                      value={residenceType} 
                                      onChange={(e) => setresidenceType(e.target.value)}
                                  >
                                      <option value="">-- Select One --</option>
                                      <option value="CAR">CAR - Cordillera Administrative Region</option>
                                      <option value="NCR">NCR - National Capital Region</option>
                                      <option value="RegionI">Region I - Ilocos</option>
                                      <option value="RegionII">Region II - Cagayan Valley</option>
                                      <option value="RegionIII">Region III - Central Luzon</option>
                                      <option value="RegionIV-A">Region IV-A - Calabarzon</option>
                                      <option value="RegionIV-B">Region IV-B - MIMAROPA</option>
                                      <option value="RegionV">Region V - Bicol</option>
                                      <option value="RegionVI">Region VI - Western Visayas</option>
                                      <option value="RegionVII">Region VII - Central Visayas</option>
                                      <option value="RegionVIII">Region VIII - Eastern Visayas</option>
                                      <option value="RegionIX">Region IX - Zamboanga Peninsula</option>
                                      <option value="RegionX">Region X - Northern Mindanao</option>
                                      <option value="RegionXI">Region XI - Davao</option>
                                      <option value="RegionXII">Region XII - SOCCSKSARGEN</option>
                                      <option value="RegionXIII">Region XIII - Caraga</option>
                                      <option value="BARMM">BARMM - Bangsamoro Autonomous Region in Muslim Mindanao</option>
                                  </select>
                              </div>
                        <div className="instruction-1">
                          <p className="instructions-header2">Service Availed:</p>
                          <div className="radio-group">
                              <label> 
                                  <input 
                                      type="radio" 
                                      name="serviceType" 
                                      value="Citizen" 
                                      checked={serviceType === "Citizen"}
                                      onChange={(e) => setserviceType(e.target.value)}
                                  />
                                  Remittance Certificate
                              </label>
                              <label>
                                  <input 
                                      type="radio" 
                                      name="serviceType" 
                                      value="Business" 
                                      checked={serviceType === "Business"}
                                      onChange={(e) => setserviceType(e.target.value)}
                                  />
                                  Liquidation of Cash Advance
                              </label>
                              <label>
                                  <input 
                                      type="radio" 
                                      name="serviceType" 
                                      value="Government" 
                                      checked={serviceType === "Government"}
                                      onChange={(e) => setserviceType(e.target.value)}
                                  />
                                  Payroll/Disbursement Voucher Processing 
                              </label>
                              <label className="radio-option other-option">
                              <input 
                                  type="radio" 
                                  name="serviceType" 
                                  value="Other" 
                                  checked={serviceType === "Other"}
                                  onChange={(e) => setserviceType(e.target.value)}
                              />
                              Other
                              {/* The text field is always visible */}
                              <input 
                                  type="text" 
                                  className="other-textfield"
                                  placeholder="Please specify"
                                  value={otherServiceType}
                                  onChange={(e) => setOtherServicesType(e.target.value)}
                              />
                          </label>
                        </div>
                      </div>
                      <div className="instruction-1">
                        <p className="instructions-header2">Personnel you transacted with:</p>
                        <div className="checkbox-group">
                          {[
                            "Ajmal A. Tomaga",
                            "Armida S. Hadji Asis",
                            "Cadidia B. Madid",
                            "Fatimah Sahara M. Alonto",
                            "Fern Aster J. Medina",
                            "Glenie Fe S. Bullanday",
                          ].map((person) => (
                            <label key={person} className="checkbox-label">
                              <input
                                type="checkbox"
                                name="personnel"
                                value={person}
                                checked={selectedPersonnel.includes(person)}
                                onChange={handleCheckboxChange}
                              />
                              {person}
                            </label>
                          ))}
                        </div>
                      </div>
            </div>
          </div>
                )}

{step === 2 && (
          <div className="survey-container-questions">
            <div className="survey-container-questions-left">
              <div className="instruction-1">
                <p className="instructions-header">INSTRUCTIONS</p>
                <p className="description-body">
                  Tick your answer to the Citizen’s Charter (CC) questions. 
                  The Citizen’s Charter is an official document that reflects 
                  the services of a government agency/office including its requirements, 
                  fees, and processing times among others.
                </p>
              </div>
              <div className="instruction-1">
                <p className="instructions-header2">CC1. Which of the following best describes your awareness of a Citizen's Charter?
                </p>
                <div className="radio-group">
                              <label> 
                                  <input 
                                      type="radio" 
                                      name="cc1" 
                                      value="a" 
                                      checked={cc1 === "a"}
                                      onChange={(e) => setCC1(e.target.value)}
                                  />
                                  I know what a CC is and I saw this office's CC
                              </label>
                              <label>
                                  <input 
                                      type="radio" 
                                      name="cc1" 
                                      value="b" 
                                      checked={cc1 === "b"}
                                      onChange={(e) => setCC1(e.target.value)}
                                  />
                                  I know what a CC is but I did NOT see this office's CC
                              </label>
                              <label>
                                  <input 
                                      type="radio" 
                                      name="cc1" 
                                      value="c" 
                                      checked={cc1 === "c"}
                                      onChange={(e) => setCC1(e.target.value)}
                                  />
                                  I learned of the CC only when I saw this office’s CC.
                              </label>
                              <label className="radio-option other-option">
                              <input 
                                  type="radio" 
                                  name="cc1" 
                                  value="d" 
                                  checked={cc1 === "d"}
                                  onChange={(e) => setCC1(e.target.value)}
                              />
                              I do not know what a CC is and I did not see one in this office. (Answer ‘N/A’ on CC2 and CC3)
                          </label>
                        </div>
              </div>
              <div className="instruction-1">
                <p className="instructions-header2">CC2. If aware of CC (answered 1-3 in CC1), would you say that the CC of this office was …?
                </p>
                <div className="radio-group">
                              <label> 
                                  <input 
                                      type="radio" 
                                      name="cc2" 
                                      value="a" 
                                      checked={cc2 === "a"}
                                      onChange={(e) => setCC2(e.target.value)}
                                  />
                                  Easy to see
                              </label>
                              <label>
                                  <input 
                                      type="radio" 
                                      name="cc2" 
                                      value="b" 
                                      checked={cc2 === "b"}
                                      onChange={(e) => setCC2(e.target.value)}
                                  />
                                  Difficult to see
                              </label>
                              <label>
                                  <input 
                                      type="radio" 
                                      name="cc2" 
                                      value="c" 
                                      checked={cc2 === "c"}
                                      onChange={(e) => setCC2(e.target.value)}
                                  />
                                  Not visible at all
                              </label>
                              <label className="radio-option other-option">
                              <input 
                                  type="radio" 
                                  name="cc2" 
                                  value="d" 
                                  checked={cc2 === "d"}
                                  onChange={(e) => setCC2(e.target.value)}
                              />
                              N/A
                          </label>
                        </div>
              </div>
            </div>
            
            <div className="survey-container-questions-right">
              <div className="instruction-1">
                <p className="instructions-header2">CC3. If aware of CC (answered codes 1-3 in CC1), how much did the CC help you in your transaction?</p>
                <div className="radio-group">
                              <label> 
                                  <input 
                                      type="radio" 
                                      name="cc3" 
                                      value="a" 
                                      checked={cc3 === "a"}
                                      onChange={(e) => setCC3(e.target.value)}
                                  />
                                  Helped very much
                              </label>
                              <label>
                                  <input 
                                      type="radio" 
                                      name="cc3" 
                                      value="b" 
                                      checked={cc3 === "b"}
                                      onChange={(e) => setCC3(e.target.value)}
                                  />
                                  Somewhat helped
                              </label>
                              <label>
                                  <input 
                                      type="radio" 
                                      name="cc3" 
                                      value="c" 
                                      checked={cc3 === "c"}
                                      onChange={(e) => setCC3(e.target.value)}
                                  />
                                  Did not help
                              </label>
                              <label className="radio-option other-option">
                              <input 
                                  type="radio" 
                                  name="cc3" 
                                  value="d" 
                                  checked={cc3 === "d"}
                                  onChange={(e) => setCC3(e.target.value)}
                              />
                              N/A
                          </label>
                        </div>
              </div>
            </div>
          </div>
            )}

{step === 3 && (       
          <div className="survey-container-questions">
            <div className="survey-container-questions-left">
              <div className="instruction-1">
                <p className="instructions-header">INSTRUCTIONS</p>
                <p className="description-body">
                For Service Quality Dimensions 0-9, please tick the option that best corresponds to your
                answer.
                </p>
              </div>
              <div className="instruction-1">
                <p className="instructions-header2">SQD0.  I am satisfied with the service that I availed.
                
                </p>
                    <select 
                        className="dropdown-select" 
                        value={SQD0} 
                        onChange={(e) => setSQD0(e.target.value)}
                    >
                        <option value="">-- Select One --</option>
                        <option value="Strongly Disagree">Strongly Disagree</option>
                        <option value="Disagree">Disagree</option>
                        <option value="Neither Agree nor Disagree">Neither Agree nor Disagree</option>
                        <option value="Agree">Agree</option>
                        <option value="Strongly Agree">Strongly Agree</option>
                        <option value="Not Applicable">Not Applicable</option>
                    </select>
              </div>
              <div className="instruction-1">
                <p className="instructions-header2">SQD1. I spent a reasonable amount of time for my transaction.                
                </p>
                    <select 
                    className="dropdown-select" 
                    value={SQD1} 
                    onChange={(e) => setSQD1(e.target.value)}
                    >
                        <option value="">-- Select One --</option>
                        <option value="Strongly Disagree">Strongly Disagree</option>
                        <option value="Disagree">Disagree</option>
                        <option value="Neither Agree nor Disagree">Neither Agree nor Disagree</option>
                        <option value="Agree">Agree</option>
                        <option value="Strongly Agree">Strongly Agree</option>
                        <option value="Not Applicable">Not Applicable</option>
                </select>
              </div>
              <div className="instruction-1">
                <p className="instructions-header2">SQD2. The office followed the transaction’s requirements and steps based on the information provided.               
                </p>
                    <select 
                    className="dropdown-select" 
                    value={SQD2} 
                    onChange={(e) => setSQD2(e.target.value)}
                    >
                        <option value="">-- Select One --</option>
                        <option value="Strongly Disagree">Strongly Disagree</option>
                        <option value="Disagree">Disagree</option>
                        <option value="Neither Agree nor Disagree">Neither Agree nor Disagree</option>
                        <option value="Agree">Agree</option>
                        <option value="Strongly Agree">Strongly Agree</option>
                        <option value="Not Applicable">Not Applicable</option>
                </select>
              </div>
              <div className="instruction-1">
                <p className="instructions-header2">SQD3-1. The steps (including payment) I needed to do for my transaction were easy and simple.           
                </p>
                    <select 
                    className="dropdown-select" 
                    value={SQD3} 
                    onChange={(e) => setSQD3(e.target.value)}
                    >
                        <option value="">-- Select One --</option>
                        <option value="Strongly Disagree">Strongly Disagree</option>
                        <option value="Disagree">Disagree</option>
                        <option value="Neither Agree nor Disagree">Neither Agree nor Disagree</option>
                        <option value="Agree">Agree</option>
                        <option value="Strongly Agree">Strongly Agree</option>
                        <option value="Not Applicable">Not Applicable</option>
                </select>
              </div>
              <div className="instruction-1">
                <p className="instructions-header2">SQD3-2. The receiving/ waiting/ processing/ working area, office facilities, etc. has visual appeal and comfiness.         
                </p>
                    <select 
                    className="dropdown-select" 
                    value={SQD32} 
                    onChange={(e) => setSQD32(e.target.value)}
                    >
                        <option value="">-- Select One --</option>
                        <option value="Strongly Disagree">Strongly Disagree</option>
                        <option value="Disagree">Disagree</option>
                        <option value="Neither Agree nor Disagree">Neither Agree nor Disagree</option>
                        <option value="Agree">Agree</option>
                        <option value="Strongly Agree">Strongly Agree</option>
                        <option value="Not Applicable">Not Applicable</option>
                </select>
              </div>
              <div className="instruction-1">
                <p className="instructions-header2">SQD4. I easily found information about my transaction from the office or its website.        
                </p>
                    <select 
                    className="dropdown-select" 
                    value={SQD4} 
                    onChange={(e) => setSQD4(e.target.value)}
                    >
                        <option value="">-- Select One --</option>
                        <option value="Strongly Disagree">Strongly Disagree</option>
                        <option value="Disagree">Disagree</option>
                        <option value="Neither Agree nor Disagree">Neither Agree nor Disagree</option>
                        <option value="Agree">Agree</option>
                        <option value="Strongly Agree">Strongly Agree</option>
                        <option value="Not Applicable">Not Applicable</option>
                </select>
              </div>
              <div className="instruction-1">
                <p className="instructions-header2">SQD5. I paid a reasonable amount of fees for my transaction.        
                </p>
                    <select 
                    className="dropdown-select" 
                    value={SQD5} 
                    onChange={(e) => setSQD5(e.target.value)}
                    >
                        <option value="">-- Select One --</option>
                        <option value="Strongly Disagree">Strongly Disagree</option>
                        <option value="Disagree">Disagree</option>
                        <option value="Neither Agree nor Disagree">Neither Agree nor Disagree</option>
                        <option value="Agree">Agree</option>
                        <option value="Strongly Agree">Strongly Agree</option>
                        <option value="Not Applicable">Not Applicable</option>
                </select>
              </div>
              <div className="instruction-1">
                <p className="instructions-header2">SQD6. I feel the office was fair to everyone, or “walang palakasan”, during my transaction.       
                </p>
                    <select 
                    className="dropdown-select" 
                    value={SQD6} 
                    onChange={(e) => setSQD6(e.target.value)}
                    >
                        <option value="">-- Select One --</option>
                        <option value="Strongly Disagree">Strongly Disagree</option>
                        <option value="Disagree">Disagree</option>
                        <option value="Neither Agree nor Disagree">Neither Agree nor Disagree</option>
                        <option value="Agree">Agree</option>
                        <option value="Strongly Agree">Strongly Agree</option>
                        <option value="Not Applicable">Not Applicable</option>
                </select>
              </div>
            </div>
            
            <div className="survey-container-questions-right">
            <div className="instruction-1">
                <p className="instructions-header2">SQD7-1. I was treated courteously by the staff, and (if asked for help) the staff was helpful.     
                </p>
                    <select 
                    className="dropdown-select" 
                    value={SQD7} 
                    onChange={(e) => setSQD7(e.target.value)}
                    >
                        <option value="">-- Select One --</option>
                        <option value="Strongly Disagree">Strongly Disagree</option>
                        <option value="Disagree">Disagree</option>
                        <option value="Neither Agree nor Disagree">Neither Agree nor Disagree</option>
                        <option value="Agree">Agree</option>
                        <option value="Strongly Agree">Strongly Agree</option>
                        <option value="Not Applicable">Not Applicable</option>
                </select>
              </div>
              <div className="instruction-1">
                <p className="instructions-header2">SQD7-2. The staff is knowledgeable of the functions and/or operations of the office.   
                </p>
                    <select 
                    className="dropdown-select" 
                    value={SQD72} 
                    onChange={(e) => setSQD72(e.target.value)}
                    >
                        <option value="">-- Select One --</option>
                        <option value="Strongly Disagree">Strongly Disagree</option>
                        <option value="Disagree">Disagree</option>
                        <option value="Neither Agree nor Disagree">Neither Agree nor Disagree</option>
                        <option value="Agree">Agree</option>
                        <option value="Strongly Agree">Strongly Agree</option>
                        <option value="Not Applicable">Not Applicable</option>
                </select>
              </div>
              <div className="instruction-1">
                <p className="instructions-header2">SQD7-3. The staff has the ability to complete the transaction.   
                </p>
                    <select 
                    className="dropdown-select" 
                    value={SQD73} 
                    onChange={(e) => setSQD73(e.target.value)}
                    >
                        <option value="">-- Select One --</option>
                        <option value="Strongly Disagree">Strongly Disagree</option>
                        <option value="Disagree">Disagree</option>
                        <option value="Neither Agree nor Disagree">Neither Agree nor Disagree</option>
                        <option value="Agree">Agree</option>
                        <option value="Strongly Agree">Strongly Agree</option>
                        <option value="Not Applicable">Not Applicable</option>
                </select>
              </div>
              <div className="instruction-1">
                <p className="instructions-header2">SQD8. I got what I needed from the government office, or (if denied) denial of request was sufficiently explained to me.
                </p>
                    <select 
                    className="dropdown-select" 
                    value={SQD8} 
                    onChange={(e) => setSQD8(e.target.value)}
                    >
                        <option value="">-- Select One --</option>
                        <option value="Strongly Disagree">Strongly Disagree</option>
                        <option value="Disagree">Disagree</option>
                        <option value="Neither Agree nor Disagree">Neither Agree nor Disagree</option>
                        <option value="Agree">Agree</option>
                        <option value="Strongly Agree">Strongly Agree</option>
                        <option value="Not Applicable">Not Applicable</option>
                </select>
              </div>
              <div className="instruction-1">
                <p className="instructions-header2">SQD9. The staff shows professionalism, politeness, and willingness to help.
                </p>
                    <select 
                    className="dropdown-select" 
                    value={SQD9} 
                    onChange={(e) => setSQD9(e.target.value)}
                    >
                        <option value="">-- Select One --</option>
                        <option value="Strongly Disagree">Strongly Disagree</option>
                        <option value="Disagree">Disagree</option>
                        <option value="Neither Agree nor Disagree">Neither Agree nor Disagree</option>
                        <option value="Agree">Agree</option>
                        <option value="Strongly Agree">Strongly Agree</option>
                        <option value="Not Applicable">Not Applicable</option>
                </select>
              </div>
              <div className="instruction-1">
                        <p className="instructions-header2">To better improve our service, please state your comments/suggestions and the issues you have encountered below: </p>
                        <input 
                          type="text"  // Enforce numeric input
                          name="comment" 
                          className="input-full"  // Add class for styling
                          value={comment}
                          onChange={(e) => setcomment(e.target.value)}
                          placeholder="Comment here" // Adds a placeholder for better UX
                        />
                      </div>
                      <div className="instruction-1">
                        <p className="instructions-header2">Email Address (optional): </p>
                        <input 
                          type="email"  // Enforce numeric input
                          name="email" 
                          className="input-full"  // Add class for styling
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                          placeholder="Please input your email address" // Adds a placeholder for better UX
                        />
                      </div>
                      <div className="instruction-1">
                        <p className="instructions-header2">Mobile Number (optional): </p>
                        <input 
                          type="text"  // Enforce numeric input
                          name="contact" 
                          className="input-full"  // Add class for styling
                          value={contact}
                          onChange={(e) => setcontact(e.target.value)}
                          placeholder="Please input your contact number" // Adds a placeholder for better UX
                        />
                      </div>
            </div>
          </div>
)}
                    {/* Navigation Buttons */}
                    <div className="button-container">
                    {step > 1 && (
                        <button className="back-button show" onClick={handleBack}>
                        Back
                        </button>
                    )}

                    {step < 3 ? (
                        <button className="next-button" onClick={handleNext}>
                        Next
                        </button>
                    ) : (
                        <button className="submit-button" onClick={() => alert("Survey Submitted!")}>
                        Submit
                        </button>
                    )}
                    </div>


        </div>
      );
};

export default OfficeSurvey;