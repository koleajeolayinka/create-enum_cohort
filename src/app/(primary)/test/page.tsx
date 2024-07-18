'use client'
import React, { useState } from "react";

function CourseProfile() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="course-profile">
            <button className="profile-header" onClick={toggleExpansion}>
                Course Profile{" "}
                <span className={`arrow ${isExpanded ? "rotate-180" : ""}`}>
          &#9660; {/* Downward-facing triangle (Unicode) */}
        </span>
            </button>
            {isExpanded && (
                <div className="profile-content">
                    <div className="profile-item">Course Details</div>
                    {/* Add course image here */}
                    <div className="profile-item">Course Outcomes</div>
                </div>
            )}
        </div>
    );
}

export default CourseProfile;
