import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import api from "../../api/api";

export default function AdminQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // ✅ Fetch Quotes
  const fetchQuotes = async () => {
    try {
      setLoading(true);
      const res = await api.get("/quotes");
      setQuotes(res.data);
    } catch (error) {
      console.log("Quotes Fetch Error:", error);
      alert("Error fetching quotes ❌");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  // ✅ Delete Quote
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this quote request?")) return;

    try {
      await api.delete(`/quotes/${id}`);
      alert("Quote Deleted ✅");
      fetchQuotes();
    } catch (error) {
      console.log("Delete Quote Error:", error);
      alert("Delete failed ❌");
    }
  };

  // ✅ Change Status
  const handleStatusChange = async (id, currentStatus) => {
    const newStatus = currentStatus === "Pending" ? "Completed" : "Pending";

    try {
      await api.put(`/quotes/${id}/status`, { status: newStatus });
      alert("Status Updated ✅");
      fetchQuotes();
    } catch (error) {
      console.log("Status Update Error:", error);
      alert("Status update failed ❌");
    }
  };

  // ✅ Search filter
  const filteredQuotes = quotes.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.product.toLowerCase().includes(search.toLowerCase()) ||
      item.mobile.includes(search)
    );
  });

  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900">
          Quote Requests
        </h1>
        <p className="text-gray-600 mt-2">
          View and manage customer quote requests.
        </p>

        {/* SEARCH */}
        <div className="mt-8 bg-white shadow border rounded-2xl p-6">
          <h2 className="text-lg font-bold text-gray-900">Search Requests</h2>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by customer name, mobile or product..."
            className="mt-4 w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* QUOTES TABLE */}
        <div className="mt-10 bg-white shadow border rounded-2xl p-6 overflow-x-auto">
          <h2 className="text-xl font-bold text-gray-900">
            Customer Quote Requests
          </h2>

          {loading ? (
            <p className="text-gray-500 mt-6 font-semibold">
              Loading quotes...
            </p>
          ) : filteredQuotes.length === 0 ? (
            <p className="text-gray-500 mt-6 font-semibold">
              No quote requests found ❌
            </p>
          ) : (
            <table className="w-full mt-6 border-collapse text-sm">
              <thead>
                <tr className="border-b text-gray-600">
                  <th className="py-3 text-left">Customer</th>
                  <th className="py-3 text-left">Mobile</th>
                  <th className="py-3 text-left">Product</th>
                  <th className="py-3 text-left">Qty</th>
                  <th className="py-3 text-left">Size</th>
                  <th className="py-3 text-left">Price</th>
                  <th className="py-3 text-left">Status</th>
                  <th className="py-3 text-left">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredQuotes.map((item) => (
                  <tr key={item._id} className="border-b hover:bg-gray-50">
                    <td className="py-4 font-semibold text-gray-900">
                      {item.name}
                      <p className="text-xs text-gray-500 mt-1">
                        {item.message || "No message"}
                      </p>
                    </td>

                    <td className="py-4 text-gray-700">{item.mobile}</td>
                    <td className="py-4 text-gray-700">{item.product}</td>
                    <td className="py-4 text-gray-700">{item.quantity}</td>
                    <td className="py-4 text-gray-700">{item.size}</td>
                    <td className="py-4 font-bold text-blue-600">
                      ₹{item.estimatedPrice || "N/A"}
                    </td>

                    <td className="py-4">
                      <span
                        className={`px-3 py-1 rounded-full font-semibold text-xs ${
                          item.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="py-4 flex gap-2 flex-wrap">
                      <button
                        onClick={() =>
                          handleStatusChange(item._id, item.status)
                        }
                        className="px-3 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                      >
                        Change Status
                      </button>

                      <button
                        onClick={() => handleDelete(item._id)}
                        className="px-3 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
