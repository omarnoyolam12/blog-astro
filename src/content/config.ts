import { defineCollection, z, reference } from "astro:content";

const blogCollections = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: image(),
        author: reference('author'),
        tags: z.array(z.string()),
    })
});

const authorCollection = defineCollection({
    type: 'data',
    schema: ({ image }) => z.object({
        name: z.string(),
        avatar: image()
    })
})

export const collections = {
    blog: blogCollections,
    author: authorCollection
};