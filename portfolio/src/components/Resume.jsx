function Resume() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <iframe
        src="/resume.pdf"
        title="My Resume"
        style={{ height: "100%", width: "100%", border: "none" }}
      />
    </div>
  );
}

export default Resume;
