import Image from "next/image";
import Link from "next/link";

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
}

export default function NewsList({ news }: { news: NewsItem[] }) {
  return (
    <>
      <ul className="news-list">
        {news.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <Image
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
                width={200}
                height={100}
              />
              <span>{newsItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
