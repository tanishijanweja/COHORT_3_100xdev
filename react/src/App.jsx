function App() {
  return (
    <div>
      <Card innerContent={"hi there"} />
      <Card innerContent={<div style={{color: "green"}}>hello there</div>} />
    </div>
  );
}

function Card({ innerContent }) {
  return (
    <div style={{ background: "black", borderRadius: 10, color: "white", padding: 10, margin: 10 }}>
      {innerContent}
    </div>
  );
}

export default App;
