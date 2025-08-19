"use client";
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";
import { use } from "react";

export default function InterceptedImagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const router = useRouter();

  const { slug } = use(params);
  const newsItemSlug = slug;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  if (!newsItem) {
    notFound();
  }
  return (
    <div className="modal-backdrop" onClick={router.back}>
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={500}
            height={500}
          />
        </div>
      </dialog>
    </div>
  );
}
