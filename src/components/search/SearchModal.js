import React, { useState, useCallback } from "react";
import { debounce } from "lodash";
import { User, Shield, Key } from "lucide-react";

const SearchModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Mock search data
  const allData = {
    users: [
      { id: 1, name: "John Doe", type: "User", role: "Admin" },
      { id: 2, name: "Jane Smith", type: "User", role: "Editor" },
    ],
    roles: [
      {
        id: 1,
        name: "Administrator",
        type: "Role",
        description: "Full access",
      },
      {
        id: 2,
        name: "Editor",
        type: "Role",
        description: "Content management",
      },
    ],
    permissions: [
      { id: 1, name: "User Management", type: "Permission", access: "Full" },
      { id: 2, name: "Content Access", type: "Permission", access: "Read" },
    ],
  };

  const performSearch = useCallback(
    debounce((term) => {
      if (!term) return setSearchResults([]);

      const results = [
        ...allData.users
          .filter((user) =>
            user.name.toLowerCase().includes(term.toLowerCase())
          )
          .map((user) => ({ ...user, icon: User })),
        ...allData.roles
          .filter((role) =>
            role.name.toLowerCase().includes(term.toLowerCase())
          )
          .map((role) => ({ ...role, icon: Shield })),
        ...allData.permissions
          .filter((perm) =>
            perm.name.toLowerCase().includes(term.toLowerCase())
          )
          .map((perm) => ({ ...perm, icon: Key })),
      ];

      setSearchResults(results);
    }, 300),
    []
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    performSearch(e.target.value);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full max-w-3xl bg-background-secondary rounded-lg p-6">
        <input
          autoFocus
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search users, roles, or permissions..."
          className="w-full bg-background p-4 rounded-lg border border-gray-700 text-lg"
        />
        <div className="mt-4 max-h-[70vh] overflow-y-auto">
          <div className="space-y-2">
            {searchResults.map((result) => (
              <div
                key={`${result.type}-${result.id}`}
                className="p-4 hover:bg-background/50 rounded-lg cursor-pointer flex items-center gap-3"
              >
                <div className="p-2 rounded-full bg-primary/10">
                  <result.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{result.name}</h4>
                  <p className="text-sm text-gray-400">
                    {result.type}{" "}
                    {result.role || result.description || result.access}
                  </p>
                </div>
              </div>
            ))}
            {searchTerm && !searchResults.length && (
              <div className="text-center py-8 text-gray-400">
                No results found for "{searchTerm}"
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
