import React from "react";
import { Modal } from "./Modal";

export const RoleModal = ({ isOpen, onClose, role }) => {
  const isEditing = role && role.id;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isEditing ? "Edit Role" : "Create Role"}
    >
      <form className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Role Name</label>
          <input
            type="text"
            defaultValue={role?.name || ""}
            className="w-full bg-background p-2 rounded border border-gray-700"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Description</label>
          <textarea
            defaultValue={role?.description || ""}
            className="w-full bg-background p-2 rounded border border-gray-700 h-24"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Base Permissions</label>
          {["Create", "Read", "Update", "Delete"].map((perm) => (
            <label key={perm} className="flex items-center gap-2 mt-2">
              <input type="checkbox" className="rounded border-gray-700" />
              <span>{perm}</span>
            </label>
          ))}
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-gray-700 rounded"
          >
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-primary rounded">
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
};
