function Footer() {
  return <footer className="page-footer teal lighten-1">
    <div className="footer-copyright">
      <div className="container">
        © {new Date().getFullYear()} aimwave
        <a className="grey-text
        text-lighten-4 right" 
        href="https://github.com/aimwave/1aimwave">Repository</a>
      </div>
    </div>
</footer>
}
export { Footer };