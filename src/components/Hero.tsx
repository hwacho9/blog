import Image from "next/image";
import profileImage from "../../public/images/profile.jpg";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="text-center">
            <Image
                src={profileImage}
                alt="Picture of the author "
                className="transfrom rotate-90 scale-y-[-1] mx-auto rounded-full mt-20"
                width={250}
                height={250}
            />
            <h2 className="text-3xl font-bold mt-10">{"Hi I'm Sunghwa"}</h2>
            <h3 className="text-xl font-semibold">{"Full Stack Engineer"}</h3>
            <Link href="/contact">
                <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">
                    {"University students B3"}
                </button>
            </Link>
        </section>
    );
}
