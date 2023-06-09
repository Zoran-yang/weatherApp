export default function BlankInputWarning({ isBlank }) {
  if (!isBlank) return null;

  return (
    <div style={{ marginBottom: 0, width: "100%" }}>
      {
        <p style={{ color: "red", lineHeight: 0, fontSize: "10px" }}>
          Please type a word!
        </p>
      }
    </div>
  );
}
