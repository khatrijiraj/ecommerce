// pages/admin/transactions.tsx

const TransactionsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Sample transaction cards */}
        <div className="border rounded p-4">
          <h2 className="text-lg font-semibold">Transaction 1</h2>
          <p className="text-gray-500">Amount: ₹1999</p>
        </div>
        <div className="border rounded p-4">
          <h2 className="text-lg font-semibold">Transaction 2</h2>
          <p className="text-gray-500">Amount: ₹599</p>
        </div>
        <div className="border rounded p-4">
          <h2 className="text-lg font-semibold">Transaction 3</h2>
          <p className="text-gray-500">Amount: ₹75999</p>
        </div>
        {/* Add more transaction cards here */}
      </div>
    </div>
  );
};

export default TransactionsPage;
