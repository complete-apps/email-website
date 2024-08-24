import Head from 'next/head';
import Image from 'next/image';



export default function Home() {
    return (
        <>
            <Head>
                <title>Complete Apps</title>
                <meta name="description" content="Complete Apps is a company that makes and sells software for supporting ecommerce businesses." />
            </Head>
            <section>
                <header className="flex flex-col items-center">
                    <h1 className="xs:w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/3">
                        <span className="sr-only">
                            Complete Apps
                        </span>
                    </h1>
                </header>
                <section className="max-w-prose mx-auto text-center">
                    <h2 className="mt-20 mb-4 text-5xl font-bold text-brand-brown">
                        Website Coming Soon
                    </h2>
                    <h3 className="font-normal">
                        We are working hard to create high-quality software for ecommerce businesses. We will launch a proper website soon.
                    </h3>
                </section>
            </section>
        </>
    );
}
