import React from 'react';

export default function UploadModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      aria-modal="true"
      role="dialog"
      aria-labelledby="upload-modal-title"
    >
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg w-full max-w-md">
        <h2
          id="upload-modal-title"
          className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100"
        >
          Upload Your License
        </h2>

        <input
          type="file"
          accept=".pdf,.jpg,.png"
          className="mb-4 w-full"
          aria-label="Choose a license file"
        />

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Accepted formats: PDF, JPG, PNG. Max size: 5MB.
        </p>

        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              /* handle file upload here */
              onClose();
            }}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
