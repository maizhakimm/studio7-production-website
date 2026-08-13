import { defineField, defineType } from "sanity";

export const portfolioProject = defineType({
  name: "portfolioProject",
  title: "Portfolio Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "Wedding",
          "Corporate",
          "Engagement",
          "ROM",
          "Pre-wedding",
          "Birthday",
          "Live Feed",
          "Live Streaming",
          "Other"
        ]
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string"
    }),
    defineField({
      name: "eventDate",
      title: "Event Date",
      type: "date"
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string"
        })
      ]
    }),
    defineField({
      name: "gallery",
      title: "Photo Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string"
            }
          ]
        }
      ]
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL",
      description: "Use YouTube, Vimeo, Instagram, or any external video URL.",
      type: "url"
    }),
    defineField({
      name: "excerpt",
      title: "Short Description",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "featured",
      title: "Featured on Homepage",
      type: "boolean",
      initialValue: false
    })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "coverImage"
    }
  }
});
