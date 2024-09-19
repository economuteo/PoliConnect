import mongoose from "mongoose";

export const events = [
    {
        eventName: "Poli AutoFest 2024",
        eventDate: "2024-09-03T00:00:00.000+00:00",
        eventTime: "16:21",
        eventLocation: "UPB Campus",
        eventDescription: "The biggest automotive event in Romania!",
        eventType: "Event",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
    {
        eventName: "Tech Innovators Conference",
        eventDate: "2024-10-15T00:00:00.000+00:00",
        eventTime: "09:00",
        eventLocation: "UPB AN024",
        eventDescription: "A conference showcasing the latest in tech innovations.",
        eventType: "Event",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
    {
        eventName: "UPB Career Fair",
        eventDate: "2024-11-20T00:00:00.000+00:00",
        eventTime: "10:00",
        eventLocation: "UPB AN024",
        eventDescription: "Meet top employers and explore career opportunities.",
        eventType: "Event",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
    {
        eventName: "Winter Gaming Contest 2024",
        eventDate: "2024-12-05T00:00:00.000+00:00",
        eventTime: "18:00",
        eventLocation: "UPB Hall",
        eventDescription: "An elegant evening to celebrate the end of the year.",
        eventType: "Event",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
    {
        eventName: "Spring Hackathon 2025",
        eventDate: "2025-03-10T00:00:00.000+00:00",
        eventTime: "08:00",
        eventLocation: "UPB Automatics Faculty",
        eventDescription: "A 24-hour hackathon to solve real-world problems.",
        eventType: "Event",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
];

export const photoPosts = [
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Amazing experience at Poli AutoFest!",
        eventType: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Incredible turnout for the Tech Expo! Proud of our university’s innovations.",
        eventType: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Enjoying a peaceful evening at the campus library. Study vibes! 📚",
        eventType: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Big thanks to our guest speakers at the Leadership Summit! 👏",
        eventType: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "The campus looks so beautiful during sunset 🌅 #CampusLife",
        eventType: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Another successful blood drive event! Thanks to all the donors. 💉",
        eventType: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Had an amazing time at the annual Science Fair! 👨‍🔬 #STEM",
        eventType: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Can't wait for the football match this weekend! 🏈 #GoTeam",
        eventType: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Yoga at the quad today was so refreshing! 🧘‍♀️ #CampusWellness",
        eventType: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Proud to be part of the environmental cleanup initiative 🌱 #GreenCampus",
        eventType: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Prepping for finals at the library, who’s with me? 😅📚 #StudyGrind",
        eventType: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Cheers to an unforgettable night at the Homecoming Dance! 💃🕺",
        eventType: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "The Robotics Club nailed their competition today! 🤖 #EngineeringExcellence",
        eventType: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Thanks to the alumni network for hosting such a valuable career workshop!",
        eventType: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Had an amazing experience volunteering at the local food bank! 🍲",
        eventType: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Check out the art gallery on campus, it’s stunning! 🎨 #ArtAndCulture",
        eventType: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Networking at the Business Innovation Conference is a game changer!",
        eventType: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "The Engineering Expo was mind-blowing! So much talent. 🚀",
        eventType: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description:
            "The multicultural fair brought so many cultures together! 🌍 #UnityInDiversity",
        eventType: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Feeling proud after presenting at the Undergraduate Research Symposium!",
        eventType: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Exploring our new campus innovation hub! So futuristic. 💡",
        eventType: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "The Health Fair this year was full of insightful tips and free check-ups! 🩺",
        eventType: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Campus Carnival vibes were 🔥! Can’t wait till next year.",
        eventType: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Late-night dorm study sessions are the best! #TeamNoSleep 💤",
        eventType: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "So excited to finally join the university’s student council! 🙌 #NewChapter",
        eventType: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("611d9b3b8f3b9b0015f3f3b1"),
    },
];
