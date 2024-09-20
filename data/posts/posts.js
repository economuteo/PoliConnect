import mongoose from "mongoose";

export const events = [
    {
        eventName: "Poli AutoFest 2024",
        eventDate: "2024-09-03T00:00:00.000+00:00",
        eventTime: "16:21",
        eventLocation: "UPB Campus",
        eventDescription: "The biggest automotive event in Romania!",
        typeOfPost: "EventPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    {
        eventName: "Tech Innovators Conference",
        eventDate: "2024-10-15T00:00:00.000+00:00",
        eventTime: "09:00",
        eventLocation: "UPB AN024",
        eventDescription: "A conference showcasing the latest in tech innovations.",
        typeOfPost: "EventPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    {
        eventName: "UPB Career Fair",
        eventDate: "2024-11-20T00:00:00.000+00:00",
        eventTime: "10:00",
        eventLocation: "UPB AN024",
        eventDescription: "Meet top employers and explore career opportunities.",
        typeOfPost: "EventPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    {
        eventName: "Winter Gaming Contest 2024",
        eventDate: "2024-12-05T00:00:00.000+00:00",
        eventTime: "18:00",
        eventLocation: "UPB Hall",
        eventDescription: "An elegant evening to celebrate the end of the year.",
        typeOfPost: "EventPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    {
        eventName: "Spring Hackathon 2025",
        eventDate: "2025-03-10T00:00:00.000+00:00",
        eventTime: "08:00",
        eventLocation: "UPB Automatics Faculty",
        eventDescription: "A 24-hour hackathon to solve real-world problems.",
        typeOfPost: "EventPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
];

export const photoPosts = [
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Amazing experience at Poli AutoFest!",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Incredible turnout for the Tech Expo! Proud of our university’s innovations.",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Enjoying a peaceful evening at the campus library. Study vibes! 📚",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Big thanks to our guest speakers at the Leadership Summit! 👏",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "The campus looks so beautiful during sunset 🌅 #CampusLife",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Another successful blood drive event! Thanks to all the donors. 💉",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Had an amazing time at the annual Science Fair! 👨‍🔬 #STEM",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Can't wait for the football match this weekend! 🏈 #GoTeam",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Yoga at the quad today was so refreshing! 🧘‍♀️ #CampusWellness",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Proud to be part of the environmental cleanup initiative 🌱 #GreenCampus",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Prepping for finals at the library, who’s with me? 😅📚 #StudyGrind",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Cheers to an unforgettable night at the Homecoming Dance! 💃🕺",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "The Robotics Club nailed their competition today! 🤖 #EngineeringExcellence",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Thanks to the alumni network for hosting such a valuable career workshop!",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Had an amazing experience volunteering at the local food bank! 🍲",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Check out the art gallery on campus, it’s stunning! 🎨 #ArtAndCulture",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Networking at the Business Innovation Conference is a game changer!",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "The Engineering Expo was mind-blowing! So much talent. 🚀",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description:
            "The multicultural fair brought so many cultures together! 🌍 #UnityInDiversity",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Feeling proud after presenting at the Undergraduate Research Symposium!",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Exploring our new campus innovation hub! So futuristic. 💡",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "The Health Fair this year was full of insightful tips and free check-ups! 🩺",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Campus Carnival vibes were 🔥! Can’t wait till next year.",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "Late-night dorm study sessions are the best! #TeamNoSleep 💤",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726737425/photo-posts/g1raodd3eyimhtxxfof6.jpg",
        description: "So excited to finally join the university’s student council! 🙌 #NewChapter",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
        userUsername: "andreipopescu",
        userProfileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
];
