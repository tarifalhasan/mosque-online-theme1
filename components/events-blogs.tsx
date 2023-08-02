import { BlogsData, EventsData } from "@/constant/data";
import BlogCard from "./blog-card";
import Container from "./container";
import EventsCard from "./events-card";
const OurEventsBlog = () => {
  return (
    <section id="events" className=" py-10">
      <Container>
        <div>
          <p className="sub-heading  leading-[1.70] lg:leading-[2.40] text-center">
            Events & Blog
          </p>
          <h2 className="heading1 leading-none text-center">
            Our Events & Blog
          </h2>
        </div>
        <div className=" pt-10 grid gap-6 grid-cols-12">
          <div className=" col-span-12 lg:col-span-7 space-y-5">
            {BlogsData.map((data) => (
              <BlogCard
                key={data.link}
                image={data.image}
                title={data.title}
                authorName={data.authorName}
                date={data.date}
                description={data.description}
              />
            ))}
          </div>
          <div className=" col-span-12 lg:col-span-5 ">
            <div className="space-y-5 h-full grid grid-rows-3">
              {EventsData.map((data) => (
                <EventsCard
                  key={data.title}
                  backgroundImage={data.backgroundImage}
                  title={data.title}
                  authorName={data.authorName}
                  month={data.month}
                  day={data.day}
                  location={data.location}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurEventsBlog;
