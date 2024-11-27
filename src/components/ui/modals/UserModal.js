import React from "react";
import { Modal } from "./Modal";

export const UserModal = ({ isOpen, onClose, user, onSubmit }) => {
  const isEditing = user && user.id;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isEditing ? "Edit User" : "Add User"}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          onSubmit({
            name: formData.get("name"),
            email: formData.get("email"),
            role: formData.get("role"),
            status: "Active",
          });
        }}
      >
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            name="name"
            type="text"
            defaultValue={user?.name || ""}
            className="w-full bg-background p-2 rounded border border-gray-700"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            defaultValue={user?.email || ""}
            className="w-full bg-background p-2 rounded border border-gray-700"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Role</label>
          <select
            defaultValue={user?.role || ""}
            className="w-full bg-background p-2 rounded border border-gray-700"
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>
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
