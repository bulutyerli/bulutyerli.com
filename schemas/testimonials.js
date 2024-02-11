const testimonials = {
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "The name of the person providing the testimonial.",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Image of the person providing the testimonial.",
    },
    {
      name: "review",
      title: "Review",
      type: "text",
      description: "The testimonial review.",
    },
  ],
};

export default testimonials;
