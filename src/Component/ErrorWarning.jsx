export default function ErrorWarning({ error }) {
  if (!error) return null;
  return (
    <div style={{ marginBottom: 0, width: "100%" }}>
      {
        <p style={{ color: "red", lineHeight: 0, fontSize: "10px" }}>
          I don&apos;t know where it is!
        </p>
      }
    </div>
  );
}
