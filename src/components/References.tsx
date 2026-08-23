import "./styles/References.css";

const references = [
  { name: "NovaCraft", note: "Sunucu projesi" },
  { name: "SakuraNetwork", note: "SMP + Lobi paketi" },
  {
    name: "ZenitMC",
    note: "Practice eklenti paketi — sipariş sonradan iptal edildi",
  },
  { name: "EjderMC", note: "Sunucu projesi" },
  { name: "AliceNetwork", note: "Sunucu projesi" },
];

const References = () => {
  return (
    <div className="refs-section section-container" id="references">
      <h2>Referanslarım</h2>
      <p className="refs-note">Birlikte çalıştığım sunucular ve projeler.</p>
      <div className="refs-grid">
        {references.map((ref, index) => (
          <div className="ref-card" key={index}>
            <span className="ref-no">0{index + 1}</span>
            <h4>{ref.name}</h4>
            <p>{ref.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default References;
