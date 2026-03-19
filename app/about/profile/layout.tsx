const ProfileLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="px-44 mt-10">
        <h1 className="text-slate-100 text-2xl">Title</h1>
      </div>
      <div>{children}</div>
    </>
  );
};

export default ProfileLayout;
