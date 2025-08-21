export default function NewsDetailLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal?: React.ReactNode;
}) {
  return <div className="news-detail-page">{modal}{children}</div>;
}
