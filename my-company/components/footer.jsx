function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', marginTop: '40px', background: '#eee' }}>
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
