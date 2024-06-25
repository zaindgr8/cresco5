import Layout from "../../components/Layout";
import Carousel from "../../components/corousel";
import Link from "next/link";

export default function BlogDetails() {
  return (
    <Layout>
      {/* Start Page Header */}
      <div
        className="blog-header position-relative text-white"
      >
      <img src="assets/img/blog/0.jpg" alt="" className="h-100  object-cover position-absolute w-100 top-0 left-0"/>
        <div className="container position-relative z-1">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8 text-center">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-17 gap-2 hstack justify-content-center mb-1 text-capitalize">
                <div className="text-white fw-medium">Azizi Venice
                </div>
                {/* <span className="vr" />
                <div>jun 23, 2023</div> */}
              </div>
              {/* /.End Meta Info */}
              <h1 className="fw-semibold display-4 text-white">
               
Discover the Charm of Venice in the Heart of Dubai

              </h1>
             
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
                <div className="entry-content">
                  <p>
                  Welcome to Azizi Venice, where luxury living meets Venetian elegance. Located in the vibrant Meydan One district, Azizi Venice brings the timeless beauty of Venice to Dubai. Picture yourself in a community where stunning architecture, tranquil waterways, and a bustling lifestyle blend seamlessly—this is Azizi Venice.

                  </p>
                 
                  
                  
                
                  <figure className="caption aligncenter">
                    <img
                      src="assets/img/blog/1.jpg"
                      className="img-fluid rounded-3"
                      alt=""
                    />
                    <figcaption className="caption-text fs-11 text-center text-muted text-uppercase mt-2">
                      Beach at Big Sur, CA
                    </figcaption>
                  </figure>
                  <p>
                    
Azizi Venice is more than just a residential development; it’s a lifestyle destination. Positioned along the beautiful Dubai Water Canal, our development features an array of meticulously designed studios, one, two, and three-bedroom apartments. Each home is crafted with modern aesthetics and high-quality finishes, ensuring you experience the best of both style and comfort.

                  </p>
                  <p>
                  Our architecture takes inspiration from Venice's iconic charm(Venice,a city of France) with its elegant designs and picturesque canals creating a unique and serene environment. Whether you’re taking in the views of the Dubai skyline, the calm canal, or the majestic Meydan Racecourse, every moment at Azizi Venice is a feast for the senses.

                  </p>
                  <p>
                  Azizi Venice is located in South Dubai right next to Al Maktoum International airport, which is good for people who like connectivity and ease of access to other facilities and services. It is a waterfront community. You will find a combination of villas, mansions and apartments.

                  </p>
                  <p>
                    
This is AED 30 billion project which is estimated to be completed in 2026. It comprised of 100 mid size apartment buildings, 69 waterfront apartments and 261 waterfront villas. You will find come across 18 km lagoon with a depth of 1.5 meter with waterfront lifestyle. The lagoon features Sweetwater and artificial waves, making the lagoon as sea right at the doorstep of residents, to give them see like feelings. It is attractive for residents visitors and tourists alike.

                  </p>
                  
                  {/* <blockquote className="blockquote quote-text alignleft">
                    <p className="fst-italic mb-0">“Stay hungry, stay foolish.”</p>
                    <cite className="fs-14 fw-semibold quote-attribution text-dark">
                      — John Doe Molicere
                    </cite>
                  </blockquote> */}
                  {/* /.End of blockquote */}
                  
                  
                  
                  
                 
                  
                </div>
                {/* /.End of entry content */}
                
                {/* /.End of post tags */}
              </article>
            </div>
          </div>
        </div>
      </div>
      {/* Start Articles Section */}
      <div className="py-5 border-top">
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {/* Start Section Header Title */}
              <div className="section-header text-center mb-5">
                {/* Start Subtitle */}
                <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">
                  related Articles
                </div>
                {/* /. End Subtitle */}
                {/* Start Section Header title */}
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">Check Out more of our projects by Azizi</h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">
                  It is a long established fact that a reader will be distracted by
                  the
                  <br className="d-none d-lg-block" /> readable content of a page
                  when looking at its layout.
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>
           <Carousel/>
        </div>
      </div>
      {/* /. End Articles Section */}
    </Layout>

  );
}