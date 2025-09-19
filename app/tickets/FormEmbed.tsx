"use client"; 

export default function FormEmbed() {
  const formUrl = "https://www.zeffy.com/embed/ticketing/ego-trip?modal=true";

  const openForm = () => {
    window.open(formUrl, "_blank", "width=600,height=800"); // opens in a popup
  };

  return (
    <div>
      <button
        onClick={openForm}
        style={{
          padding: "10px 20px",
          backgroundColor: "#f0c040",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Buy Tickets
      </button>
    </div>
  );
}
