import AdminLayout from "../../layouts/AdminLayout";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Dashboard Overview
          </h1>
        </div>

        {/* Stats Cards */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow border rounded-2xl p-6">
            <h3 className="text-sm text-gray-500">Total Orders</h3>
            <p className="text-3xl font-extrabold text-gray-900 mt-2">120</p>
          </div>

          <div className="bg-white shadow border rounded-2xl p-6">
            <h3 className="text-sm text-gray-500">Portfolio Items</h3>
            <p className="text-3xl font-extrabold text-gray-900 mt-2">45</p>
          </div>

          <div className="bg-white shadow border rounded-2xl p-6">
            <h3 className="text-sm text-gray-500">Services</h3>
            <p className="text-3xl font-extrabold text-gray-900 mt-2">12</p>
          </div>

          <div className="bg-white shadow border rounded-2xl p-6">
            <h3 className="text-sm text-gray-500">Messages</h3>
            <p className="text-3xl font-extrabold text-gray-900 mt-2">30</p>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="mt-12 bg-white shadow border rounded-2xl p-6">
          <h2 className="text-xl font-bold text-gray-900">
            Recent Quote Requests
          </h2>

          <div className="overflow-x-auto mt-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-600 text-sm border-b">
                  <th className="py-3">Customer</th>
                  <th className="py-3">Product</th>
                  <th className="py-3">Quantity</th>
                  <th className="py-3">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b text-sm">
                  <td className="py-3">Rahul Sharma</td>
                  <td className="py-3">Visiting Cards</td>
                  <td className="py-3">1000</td>
                  <td className="py-3">
                    <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 font-semibold">
                      Pending
                    </span>
                  </td>
                </tr>

                <tr className="border-b text-sm">
                  <td className="py-3">Amit Patel</td>
                  <td className="py-3">Banner Printing</td>
                  <td className="py-3">50 sq.ft</td>
                  <td className="py-3">
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold">
                      Completed
                    </span>
                  </td>
                </tr>

                <tr className="text-sm">
                  <td className="py-3">Sneha Verma</td>
                  <td className="py-3">Sticker Printing</td>
                  <td className="py-3">200 Sheets</td>
                  <td className="py-3">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold">
                      Printing
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
