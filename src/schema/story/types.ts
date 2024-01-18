export const StoryTypes = /* GraphQL */`
    type Story {
        uuid:         String
        active:       Boolean
        assetUrl:     String
        description:  String
        title:        String
    }

    extend type Query {
        story: Story
    }
`