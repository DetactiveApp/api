export const typeDefs = /* GraphQL */`
    interface Decision {
        uuid:                               String!
        stepInputUuid:                      String!
        stepOutputUuid:                     String!
        title:                              String!
        Step_Decision_stepInputUuidToStep:  Step!
        Step_Decision_stepOutputUuidToStep: Step!
    }

    interface Step {
        uuid:                                   String!
        storyUuid:                              String!
        waypointUuid:                           String
        assetId:                                String
        description:                            String!
        media:                                  Media
        title:                                  String!
        ending:                                 Ending
        Decision_Decision_stepInputUuidToStep:  [Decision!]!
        Decision_Decision_stepOutputUuidToStep: [Decision!]!
        Story:                                  Story!
        Waypoint:                               Waypoint
        UserStoryStep:                          [UserStoryStep!]!
    }
    
    interface Story {
        uuid:        String!
        active:      Boolean!
        assetId:     String
        description: String!
        title:       String!
        Step:        [Step!]!
        UserStory:   [UserStory!]!
    }

    interface User {
        uuid:      String!
        email:     String
        UserStory: [UserStory!]!
    }

    interface UserStory {
        uuid:          String!
        storyUuid:     String!
        userUuid:      String!
        createdAt:     String!
        deletedAt:     String
        finishedAt:    String
        Story:         Story!
        User:          User!
        UserStoryStep: [UserStoryStep!]!
    }

    interface UserStoryStep {
        userStoryUuid: String!
        stepUuid:      String!
        createdAt:     String!
        updatedAt:     String!
        finishedAt:    String
        latitude:      Float!
        longitude:     Float!
        Step:          Step!
        UserStory:     UserStory!
    }

    interface Waypoint {
        uuid:      String!
        placeType: String
        Step:      [Step!]!
    }

    enum Ending {
        SUCCESS
        FAILURE
    }

    enum Media {
        AUDIO
        IMAGE
        VIDEO
    }

    type Query {
        user: User,
    }
`;