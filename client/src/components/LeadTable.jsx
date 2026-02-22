
const LeadTable = ({ leads, onStatusChange }) => {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
      <thead>
        <tr>
          <th style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>Name</th>
          <th style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>Email</th>
          <th style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>Company</th>
          <th style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>Estimated Value</th>
          <th style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>Status</th>
        </tr>
      </thead>
      <tbody>
        {leads.map(lead => (
          <tr key={lead.id}>
            <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>{lead.name}</td>
            <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>{lead.email}</td>
            <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>{lead.company}</td>
            <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>${lead.estimated_value}</td>
            <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>
              <select
                value={lead.status}
                onChange={(e) => onStatusChange(lead.id, e.target.value)}
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