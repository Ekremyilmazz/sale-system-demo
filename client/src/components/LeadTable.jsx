const LeadTable = ({ leads, onStatusChange }) => {
  return (
    <table className="w-full border-collapse mt-4 text-sm">
      <thead>
        <tr className="text-left border-b border-gray-200">
          <th className="py-2 px-2">Name</th>
          <th className="py-2 px-2">Email</th>
          <th className="py-2 px-2">Company</th>
          <th className="py-2 px-2">Estimated Value</th>
          <th className="py-2 px-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {leads.map((lead) => (
          <tr key={lead.id} className="border-b border-gray-100 hover:bg-gray-50">
            <td className="py-2 px-2">{lead.name}</td>
            <td className="py-2 px-2">{lead.email}</td>
            <td className="py-2 px-2">{lead.company}</td>
            <td className="py-2 px-2 font-medium">
              ${lead.estimated_value}
            </td>
            <td className="py-2 px-2">
              <select
                value={lead.status}
                onChange={(e) =>
                  onStatusChange(lead.id, e.target.value)
                }
                className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="proposal">Proposal</option>
                <option value="won">Won</option>
                <option value="lost">Lost</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeadTable;