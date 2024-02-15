import SectionTitle from "./SectionTitle";

export default function Testimonials() {
  return (
    <section className="max-w-lg">
      <div>Logo of company</div>
      <h4>Company Name</h4>
      <p>
        “Amet amet eget scelerisque tellus sit neque faucibus non eleifend.
        Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus
        tortor consequat at. Vulputate gravida sociis enim nullam ultricies
        habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.”
      </p>
      <div className="flex gap-5">
        <div>Profile Picture</div>
        <div className="flex flex-col">
          <h5>Tentimonials name</h5>
          <p>owner of company</p>
        </div>
      </div>
    </section>
  );
}
