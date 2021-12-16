import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
const axios = require("axios");

function Search({ searchResults }) {
  const router = useRouter();

  console.log(searchResults);
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays - {range} - {noOfGuests} number of guests
          </p>
          <h1 class="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

          <div
            className="hidden lg:inline-flex mb-5 
          space-x-3 text-gray-800 whitespace-nowrap "
          >
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div class="flex flex-col">
            {searchResults?.map(
              ({ img, location, title, description, star, total, price }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const options = {
    method: "GET",
    url: "https://jsonkeeper.com/b/5NPS",
  };

  const { data: searchResults } = await axios(options);

  return {
    props: {
      searchResults,
    },
  };
}
