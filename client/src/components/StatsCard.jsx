
const StatsCard = ({ title, value }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      minWidth: "120px",
      textAlign: "center",
      marginRight: "1rem"
    }}>
      <h4 style={{ margin: "0 0 0.5rem 0" }}>{title}</h4>
      <p style={{ margin: 0, fontWeight: "bold", fontSize: "1.2rem" }}>{value}</p>
    </div>
  );
};

export default StatsCard;