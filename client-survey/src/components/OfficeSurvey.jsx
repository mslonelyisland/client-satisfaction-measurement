import React from "react";
import { useParams } from "react-router-dom";

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

    // If office is not found, show error message
    if (!office) {
        return <h2>Office not found!</h2>;
    }

    return (
        <div className="office-container">
            <h1>{office.officeName}</h1>
            <p>{office.description}</p>
        </div>
    );
};

export default OfficeSurvey;
