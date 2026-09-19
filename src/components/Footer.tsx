const Footer = () => (
  <footer className="px-5 pb-8 md:px-10">
    <div className="mx-auto flex max-w-[1440px] flex-col gap-4 border-t border-border pt-6 text-xs uppercase text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
      <span>© {new Date().getFullYear()} Aqib Javid</span>
      <span>Independent product designer · Working globally</span>
    </div>
  </footer>
);

export default Footer;