const AboutLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
  return (
    <>
      <nav className="fixed left-0 w-32 top-12 z-10 h-screen bg-slate-100">
        <ul className="text-slate-900 space-y-5 p-5">
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
        </ul>
      </nav>
      <div>
        {children}
      </div>
    </>
  );
};

export default AboutLayout;
