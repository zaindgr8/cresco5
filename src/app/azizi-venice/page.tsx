import Layout from "../layout";
import Footer from "../../components/Footer";
export default function AziziVenice() {
  return (
    <Layout>
      {/* Start Page Header */}
      <div className="blog-header md:mt-20 position-relative text-white">
        <img
          src="assets/img/blog/0.jpg"
          alt=""
          className="h-100 object-fit-cover position-absolute w-100 top-0 left-0"
        />
        <div className="container position-relative z-1">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8 text-center">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-17 gap-2 hstack justify-content-center mb-1 text-capitalize">
                {/* <div className="text-white fw-medium">
                Discover the Charm of Venice in the Heart of Dubai
                </div>
                <span className="vr" />
                <div>over 17 years of experience</div> */}
              </div>
              {/* /.End Meta Info */}
              <h1 className="fw-semibold display-4 text-white">
                Discover the Charm of Venice in the Heart of Dubai
              </h1>
              {/* /.End of header title */}
              {/* Start Author Info */}

              {/* /.End Author Info */}
            </div>
          </div>
        </div>
      </div>
      {/* /.End Page Header */}
      <div className="py-5">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-xxl-8">
              <article className="post single-post">
                <div className="row">
                  <div className="col-md-10 offset-md-1" data-aos="fade-down">
                    {/* Start Section Header Title */}
                    <div className="section-header text-center mb-5">
                      {/* Start Subtitle */}
                      <div className="bg-[#DAB852] d-inline-block  mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
                        <span className="font-bold text-xl">Azizi Venice</span>
                      </div>
                      {/* /. End Subtitle */}
                    </div>
                    {/*/. End Section Header */}
                  </div>
                </div>
                <div className="entry-content">
                  <p className="mt-2">
                    Welcome to Azizi Venice, where luxury living meets Venetian
                    elegance. Located in the vibrant Meydan One district, Azizi
                    Venice brings the timeless beauty of Venice to Dubai.
                    Picture yourself in a community where stunning architecture,
                    tranquil waterways, and a bustling lifestyle blend
                    seamlessly—this is Azizi Venice.
                  </p>

                  <figure className="caption aligncenter">
                    <img
                      src="assets/img/blog/1.jpg"
                      className="img-fluid rounded-3"
                      alt="Beach at Big Sur, CA"
                    />
                    <figcaption className="caption-text fs-11 text-center text-muted text-uppercase mt-2">
                      Beach at Big Sur, CA
                    </figcaption>
                  </figure>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 offset-md-1" data-aos="">
          {/* Start Section Header Title */}
          <div className="section-header text-center mb-5">
            {/* Start Subtitle */}
            <div className="bg-[#DAB852] d-inline-block  mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
              <span className="font-bold text-xl">About Azizi Venice</span>
            </div>
            {/* /. End Subtitle */}
          </div>
          {/*/. End Section Header */}
        </div>
      </div>
      <div className="container mx-auto mb-5">
        <div className="flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/2 h-64 md:h-auto relative">
            <img
              src="/assets/img/blog/r.jpeg" // Assuming assets folder is at root
              alt="Blog Image"
              className="responsive-img absolute inset-0 w-full rounded-xl h-full object-cover object-center"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <p className="text-gray-700 mb-4">
              Azizi Venice is more than just a residential development; it’s a
              lifestyle destination. Positioned along the beautiful Dubai Water
              Canal, our development features an array of meticulously designed
              studios, one, two, and three-bedroom apartments. Each home is
              crafted with modern aesthetics and high-quality finishes, ensuring
              you experience the best of both style and comfort.
            </p>
            <ul className="list-checked mb-9 mb-md-10 ps-0 text-gray-800">
              <li className=" ">
                Our architecture takes inspiration from Venice's iconic charm
                (Venice, a city of France) with its elegant designs and
                picturesque canals creating a unique and serene environment.
                Whether you’re taking in the views of the Dubai skyline, the
                calm canal, or the majestic Meydan Racecourse , every moment at
                Azizi Venice is a feast for the senses.
              </li>
              <li>
                Azizi Venice is located in South Dubai right next to Al Maktoum
                International Airport, which is ideal for people who like
                connectivity and ease of access to other facilities and
                services. It is a waterfront community with a combination of
                villas, mansions, and apartments.
              </li>
              <li>
                This AED 30 billion project is estimated to be completed in
                2026. It comprises 100 mid-size apartment buildings, 69
                waterfront apartments, and 261 waterfront villas. You will find
                an 18 km lagoon with a depth of 1.5 meters, featuring Sweetwater
                and artificial waves, making the lagoon feel like the sea right
                at the doorstep of residents. It is attractive for residents,
                visitors, and tourists alike.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 offset-md-1" data-aos="">
          {/* Start Section Header Title */}
          <div className="section-header text-center mb-5">
            {/* Start Subtitle */}
            <div className="bg-[#DAB852] d-inline-block  mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
              <span className="font-bold text-xl">Unparalleled Amenities</span>
            </div>
            {/* /. End Subtitle */}
          </div>
          {/*/. End Section Header */}
        </div>
      </div>
      <div className="container mx-auto mb-5">
        <div className="flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <p className="text-gray-700 mb-4">
              At Azizi Venice, we believe in offering more than just a home. Our
              world-class amenities are designed to elevate your lifestyle:
            </p>
            <ul className="list-checked mb-9 mb-md-10 ps-0 text-gray-800">
              <li>
                <strong className="text-xl font-medium text-black">
                  Fitness and Recreation:
                </strong>{" "}
                Stay fit with our cutting-edge fitness centers, refreshing
                swimming pools, and serene wellness areas.
              </li>
              <li>
                <strong className="text-xl font-medium text-black">
                  Parks and Green Spaces:
                </strong>{" "}
                Enjoy beautifully landscaped gardens and parks perfect for
                leisurely strolls or family picnics.
              </li>
              <li>
                <strong className="text-xl font-medium text-black">
                  Waterfront Living:
                </strong>{" "}
                Delight in the stunning waterfront promenade along the Dubai
                Canal, ideal for relaxing walks and outdoor activities.
              </li>
              <li>
                <strong className="text-xl font-medium text-black">
                  Community Spaces:
                </strong>{" "}
                Connect with neighbors in our dedicated BBQ areas, playgrounds,
                and community clubs.
              </li>
              <li>
                <strong className="text-xl font-medium text-black">
                  24/7 Security:
                </strong>{" "}
                Live with peace of mind thanks to our round-the-clock security
                and concierge services.
              </li>
              <li>
                We also plan to provide amenities such as basketball and tennis
                courts, jogging trails, spa and sauna, shopping mall, running
                tracks, outdoor dining, BBQ areas, fitness centers, community
                hall, gardens, parks, and many more.
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 h-64 md:h-auto relative">
            <img
              src="/assets/img/blog/IMG_1458.JPG" // Assuming assets folder is at root
              alt="Blog Image"
              className="responsive-img absolute inset-0 w-full rounded-xl h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {/* Start Section Header Title */}
              <div className="section-header text-center mb-5" data-aos="">
                {/* Start Subtitle */}
                <div className="row">
                  <div className="col-md-10 offset-md-1" data-aos="">
                    {/* Start Section Header Title */}
                    <div className="section-header text-center mb-3">
                      {/* Start Subtitle */}
                      <div className="bg-[#DAB852] d-inline-block rounded-pill section-header__subtitle text-capitalize text-gray-900">
                        <span className="font-bold text-xl">
                          Azizi Venice Highlights
                        </span>
                      </div>
                      {/* /. End Subtitle */}
                    </div>
                    {/*/. End Section Header */}
                  </div>
                </div>

                <div className="sub-title fs-16">
                  <p>
                    Azizi Venice, located in Meydan One, offers an unparalleled
                    lifestyle with prime connectivity, a warm community, and
                    excellent investment opportunities. Enjoy the convenience of
                    being at the center of Dubai's key destinations and the
                    benefits of a well-rounded, luxurious living experience.
                  </p>
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>

          {/* Start Button */}

          {/* /.End Button */}
        </div>
      </div>

      <div className="p-4 text-black space-x-0 md:space-x-10 flex flex-col md:flex-row justify-between">
        <section className="bg-[#DAB852] p-6 rounded-md shadow-md mb-8 flex-1">
          <h1 className="text-3xl md:text-3xl font-bold mb-4">
            Prime Location
          </h1>
          <p className="mb-4">
            Azizi Venice’s prime location in Meydan One means you’re at the
            center of all that Dubai has to offer. Enjoy unparalleled
            connectivity and convenience, with key destinations just minutes
            away.
          </p>
          <ul className="space-y-2">
            <li>
              <strong>Dubai Mall:</strong> Indulge in retail therapy at one of
              the world's largest malls, featuring endless shopping, dining, and
              entertainment options.
            </li>
            <li>
              <strong>Dubai Creek:</strong> Discover this historic and cultural
              hub with its scenic beauty and vibrant atmosphere.
            </li>
            <li>
              <strong>Business Bay:</strong> Stay close to one of Dubai’s major
              commercial districts.
            </li>
            <li>
              <strong>Dubai International Airport:</strong> Travel effortlessly
              with easy access to the airport.
            </li>
          </ul>
        </section>

        <section className="bg-[#DAB852] p-6 rounded-md shadow-md mb-8 flex-1">
          <h2 className="text-3xl  font-bold mb-4">A Community with Heart</h2>
          <p className="mb-4">
            Azizi Venice isn’t just about luxury; it’s about creating a warm,
            inviting community where you can truly feel at home. Whether you’re
            looking to make new friends, relax, or stay active, Azizi Venice has
            something for everyone. From lively neighborhood events to peaceful
            moments by the canal, life at Azizi Venice is rich with experiences.
          </p>
          <p className="mb-4">
            The 700 meter boulevard is considered to become the center of
            attraction of Dubai in the future. It features a retail market,
            making it easier for residents to get everything they need with
            ease.
          </p>
          <p className="mb-4">
            Azizi Venice also has a 1,500 seat multi-purpose cultural center or
            opera which will be the second opera house of Dubai. Wedding
            ceremonies, comedy shows, theater shows, concerts, and many more
            events will be hosted here.
          </p>
        </section>

        <section className="bg-[#DAB852] p-6 rounded-md shadow-md mb-8 flex-1">
          <h2 className="text-3xl  font-bold mb-4">Investment Opportunities</h2>
          <p className="mb-4">
            Looking to invest? Azizi Venice is one of Dubai’s most coveted
            developments. With its strategic location, luxurious amenities, and
            strong demand for high-quality residential properties, it offers
            excellent potential for long-term growth and rental income.
          </p>
        </section>
      </div>
      <Footer />
    </Layout>
  );
}
