import React from "react";
import { Button } from "../components/ui/button";

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <p className="mb-4 text-lg">{message}</p>
        <div className="flex justify-end space-x-4">
          <Button variant="destructive" onClick={onConfirm}>
            Yes
          </Button>
          <Button onClick={onCancel}>No</Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
