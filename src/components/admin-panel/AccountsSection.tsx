// components/admin-panel/AccountsSection.tsx
"use client"
import { useState, useEffect } from "react";
import axios from "axios";

interface Account {
  id: number;
  username: string;
  email: string;
  role: string;
}

const AccountsSection = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    axios
      .get("/api/accounts")
      .then((response) => setAccounts(response.data))
      .catch((error) => console.error("Error fetching accounts:", error));
  }, []);

  const handleDelete = (id: number) => {
    axios
      .delete(`/api/accounts/${id}`)
      .then(() => setAccounts(accounts.filter((account) => account.id !== id)))
      .catch((error) => console.error("Error deleting account:", error));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Accounts</h2>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td>{account.id}</td>
              <td>{account.username}</td>
              <td>{account.email}</td>
              <td>{account.role}</td>
              <td>
                <button onClick={() => handleDelete(account.id)}>Delete</button>
                {/* Add edit functionality here */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountsSection;
