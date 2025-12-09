import React from "react";
import { Switch } from "@headlessui/react";

const ToggleRow = ({ title, subtitle, icon: Icon, defaultChecked }) => {
  const [enabled, setEnabled] = React.useState(defaultChecked);

  return (
    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>

      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-blue-600" : "bg-gray-300"} 
          relative inline-flex h-6 w-11 items-center rounded-full transition cursor-pointer`}
      >
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white`}
        />
      </Switch>
    </div>
  );
};

export default ToggleRow;
