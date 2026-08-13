import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "eventType",
      title: "Event Type",
      type: "string"
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "isActive",
      title: "Show on Website",
      type: "boolean",
      initialValue: true
    })
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "eventType"
    }
  }
});
