import NewsList from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

export default async function FilteredNewsPage({
  params,
}: {
  params: Promise<{ filter: string }>;
}) {
  const { filter } = await params;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(+selectedYear);
    links = getAvailableNewsMonths(+selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(+selectedYear, +selectedMonth);
    links = [];
  }

  let newsContent = <p> No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(+selectedYear).includes(+selectedMonth))
  ) {
    throw new Error("Invalid filter.");
  }
  // const links = getAvailableNewsYears();

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((year) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${year}`
                : `/archive/${year}`;
              return (
                <li key={year}>
                  <Link href={href}>{year}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
