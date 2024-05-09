import { Post } from "@/service/posts";
import Link from "next/link";
import Image from "next/image";

type Props = { post: Post };
export default function PostCard({
    post: { title, description, date, category, path },
}: Props) {
    return (
        <Link href={`/posts/${path}`}>
            <article className="rounded-md overflow-hidden shadow-md hover:shadow-lg">
                <Image
                    className="w-full"
                    src={`/images/posts/${path}.png`}
                    alt={title}
                    width={300}
                    height={200}
                />
                <div className="flex flex-col items-center p-4">
                    <time className="self-end text-gray-500">
                        {date.toString()}
                    </time>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="w-full truncate text-center">{description}</p>
                    <span className="text-sm rounded-lg bg-green-100 px-2 mg-2">
                        {category}
                    </span>
                </div>
            </article>
        </Link>
    );
}