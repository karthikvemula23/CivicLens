function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "2rem 1rem",
        borderTop: "1px solid #e5e7eb",
        marginTop: "4rem",
      }}
    >
      <h3>CivicLens</h3>

      <p>© {new Date().getFullYear()} CivicLens. All rights reserved.</p>
    </footer>
  );
}

export default Footer;