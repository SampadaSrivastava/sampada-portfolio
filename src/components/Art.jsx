
const projectImages = {
  documind: "/images/documind-ai.jpg",
  omnigen: "/images/omnigen-ai.jpg",
  resume: "/images/smart-resume-matcher.jpg",
  hospital: "/images/hospital-er-dashboard.jpg",
  inventory: "/images/inventory-optimization.jpg",
  frost: "/images/frost-prediction.jpg",
};

function getProjectImage(id = "") {
  const key = String(id).toLowerCase();

  if (key.includes("documind")) return projectImages.documind;
  if (key.includes("omnigen")) return projectImages.omnigen;
  if (key.includes("resume")) return projectImages.resume;
  if (key === "er" || key.includes("hospital") || key.includes("emergency")) {
  return projectImages.hospital;
}
  if (key.includes("inventory")) return projectImages.inventory;
  if (key.includes("frost")) return projectImages.frost;

  return projectImages.documind;
}

export default function Art({ id }) {
  return (
    <div className="art project-art">
      <img
        src={getProjectImage(id)}
        alt={`${id} project preview`}
        loading="lazy"
      />
    </div>
  );
}
