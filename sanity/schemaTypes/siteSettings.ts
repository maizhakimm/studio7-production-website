import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "brandName",
      title: "Brand Name",
      type: "string",
      initialValue: "Studio 7 Production"
    }),
    defineField({
      name: "headline",
      title: "Homepage Headline",
      type: "string"
    }),
    defineField({
      name: "intro",
      title: "Homepage Intro",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "coverage",
      title: "Coverage Area",
      type: "string",
      initialValue: "Malaysia & Singapore"
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url"
    }),
    defineField({
      name: "whatsappUrl",
      title: "WhatsApp URL",
      type: "url"
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string"
        })
      ]
    })
  ],
  preview: {
    select: {
      title: "brandName",
      subtitle: "coverage"
    }
  }
});
