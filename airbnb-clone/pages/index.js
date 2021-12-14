import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
const axios = require("axios");

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* Main */}

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6 ">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* Data from API Endpoint */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

// This function runs before it reaches the browser and it passes the props to the functional component Home as props
export async function getStaticProps() {
  const options = {
    method: "GET",
    url: "https://jsonkeeper.com/b/4G1G",
  };

  const { data } = await axios(options);

  console.log(data);

  return {
    props: {
      data,
    },
  };
}
