/* eslint-disable react/prop-types */

import { Select as ShadCNSelect, SelectItem } from "@shadcn/ui"; 

export const Select = ({ value, onChange, options, required }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Select Court</label>
      <ShadCNSelect value={value} onChange={onChange} required={required}>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </ShadCNSelect>
    </div>
  );
};
