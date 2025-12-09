import React, { useState } from "react";
import { User } from "lucide-react";

import TabNavigation from "../Components/Settings/TabNavigation";
import ProfileContent from "../Components/Settings/ProfileContent";
import PreferencesView from "../Components/Settings/PreferencesView";
import AccountView from "../Components/Settings/AccountView";
import ChangePasswordModal from "../Components/Settings/ChangePasswordModal"; // 💡 Import the new modal

const Setting = () => {
  const [activeTab, setActiveTab] = useState("profile");
  // 💡 State for the new modal
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false); 

  return (
    <div className="min-h-screen bg-white p-20">
      

      <main className="max-w-6xl mx-auto px-6 pb-12">
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        <div>
          {/* 💡 Pass the handler down to ProfileContent */}
          {activeTab === "profile" && (
            <ProfileContent 
              onOpenChangePassword={() => setIsChangePasswordModalOpen(true)}
            />
          )}
          {activeTab === "preferences" && <PreferencesView />}
          {activeTab === "account" && <AccountView />}
        </div>

        {/* 💡 Render the Change Password Modal */}
        <ChangePasswordModal
            isOpen={isChangePasswordModalOpen}
            onClose={() => setIsChangePasswordModalOpen(false)}
        />
      </main>
    </div>
  );
};

export default Setting;