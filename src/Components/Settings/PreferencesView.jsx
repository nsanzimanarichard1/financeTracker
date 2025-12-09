import React from "react";
import SelectField from "./SelectField";
import ToggleRow from "./ToggleRow";
import { Bell } from "lucide-react";

const PreferencesView = () => (
  <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
    <h2 className="text-xl font-bold text-gray-900 mb-6">App Preferences</h2>

    <SelectField
      label="Currency"
      value="US Dollar (USD)"
      options={["US Dollar (USD)", "Euro (EUR)", "British Pound (GBP)"]}
      className="cursor-pointer"
    />

    <div className="space-y-4">
      <ToggleRow
        title="Email Notifications"
        subtitle="Get notified about transactions"
        icon={Bell}
        defaultChecked={true}
      />
    </div>
  </div>
);

export default PreferencesView;
