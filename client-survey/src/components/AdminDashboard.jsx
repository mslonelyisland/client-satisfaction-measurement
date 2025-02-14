import Navbar from "../global/NavBar";
import AdminSidebar from "../global/AdminSideBar";
import React, { useState } from "react";
import { BarChart } from "recharts";
const officeOptions = [
  { id: 1, officeName: "Accounting Division" },
  { id: 2, officeName: "Alumni and Endowment Fund Center" },
  { id: 3, officeName: "CED - Integrated Development School" },
];

const surveyOptions = [
  { id: 1, surveyName: "Survey 1" },
  { id: 2, surveyName: "Survey 2" },
];

// Mock Data only
const responseData = [
  { officeId: 1, surveyId: 1, description: "Accounting Division - Survey 1 response data." },
  { officeId: 1, surveyId: 2, description: "Accounting Division - Survey 2 response data." },
  { officeId: 2, surveyId: 1, description: "Alumni Center - Survey 1 feedback." },
  { officeId: 2, surveyId: 2, description: "Alumni Center - Survey 2 responses." },
  { officeId: 3, surveyId: 1, description: "CED School - Survey 1 collected responses." },
  { officeId: 3, surveyId: 2, description: "CED School - Survey 2 insights." },
];

const AdminDashboard = () => {
  const [selectedOffice, setSelectedOffice] = useState("");
  const [selectedSurvey, setSelectedSurvey] = useState("");

  // Find matching response data
  const selectedData = responseData.find(
    (item) => item.officeId == selectedOffice && item.surveyId == selectedSurvey
  );

  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <AdminSidebar />
        <div className="dashboard-container flex-grow-1 p-4">
          {/* <h2>Dashboard</h2> */}
          <div className="view-officeresponse d-flex gap-3">
            <div className="offices-dropdown">
            <select value={selectedOffice} onChange={(e) => setSelectedOffice(e.target.value)}>
              <option value="">Select an office</option>
              {officeOptions.map((office) => (
                <option key={office.id} value={office.id}>
                  {office.officeName}
                </option>
              ))}
            </select>
            </div>
           <div className="survey-dropdown">
           <select value={selectedSurvey} onChange={(e) => setSelectedSurvey(e.target.value)}>
              <option value="">Select a survey</option>
              {surveyOptions.map((survey) => (
                <option key={survey.id} value={survey.id}>
                  {survey.surveyName}
                </option>
              ))}
            </select>
           </div>

          </div>

          {/* Display Data */}
          <div className="response-data mt-4">
            {selectedOffice && selectedSurvey ? (
              selectedData ? (
                <div className="alert alert-info">{selectedData.description}</div>
              ) : (
                <div className="alert alert-warning">No data found for this selection.</div>
              )
            ) : (
              <div className="alert alert-secondary">Please select an office and a survey.</div>
            )}
          </div>
        </div>
        <div className="mt-4">
            <BarChart />
          </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
