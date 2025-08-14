export default function Layout({
  children,
  details,
}: {
  children: React.ReactNode;
  details: React.ReactNode;
}) {
  return (
    <>
      {children}
      {details}
    </>
  );
}
