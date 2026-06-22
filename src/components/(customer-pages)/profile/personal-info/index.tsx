"use client";

import { useState } from "react";
import DashboardCard from "../../../../shared/DashboardCard";
import ProfileHeader from "./ProfileHeader";
import PersonalInfoView from "./PersonalInfoView";
import PersonalInfoForm from "./PersonalInfoForm";

// Mock user data — replace with real API data later
const defaultUserData = {
  username: "Ziad Aboultaif",
  email: "ziad@gmail.com",
  phone: "+9 018674512001",
  country: "",
};

export default function PersonalInfoPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(defaultUserData);

  const handleSave = (data: typeof defaultUserData) => {
    setUserData(data);
    setIsEditing(false);
  };

  return (
    <DashboardCard>
      <ProfileHeader
        title={isEditing ? "Edit Personal Information" : "Personal Information"}
        isEditing={isEditing}
        onToggleEdit={() => setIsEditing(true)}
      />

      {isEditing ? (
        <PersonalInfoForm
          userData={userData}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <PersonalInfoView userData={userData} />
      )}
    </DashboardCard>
  );
}
