import mongoose from "mongoose";

export const events = [
    {
        eventName: "Poli AutoFEST",
        eventDate: "2024-09-03T00:00:00.000+00:00",
        eventTime: "16:21",
        eventLocation: "UPB Campus",
        description:
            "A festival dedicated to automobiles, transport and logistics, AutoFEST transforms the POLITEHNICA Bucharest campus into the most spectacular automobile exhibition!",
        typeOfPost: "EventPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e4"),
    },
    {
        eventName: "Poli E-FEST",
        eventDate: "2024-10-15T00:00:00.000+00:00",
        eventTime: "09:00",
        eventLocation: "UPB AN024",
        description:
            "Poli E-FEST is the largest event dedicated to the video game industry. The popularity of video games has opened new avenues for innovation and technological advancement in a deeply interdisciplinary field where engineering plays the leading role!",
        typeOfPost: "EventPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e5"),
    },
    {
        eventName: "SpaceFEST",
        eventDate: "2024-11-20T00:00:00.000+00:00",
        eventTime: "10:00",
        eventLocation: "UPB AN024",
        description:
            "Far from being the last frontier, space currently represents humanity's greatest opportunity. SpaceFEST is the event that allows attendees to learn all about space exploration, how we rely on space in our everyday lives, and how a career in space is accessible to anyone who wants it!",
        typeOfPost: "EventPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e6"),
    },
    {
        eventName: "RoboFEST",
        eventDate: "2024-12-05T00:00:00.000+00:00",
        eventTime: "18:00",
        eventLocation: "UPB Hall",
        description:
            "RoboFEST is the festival that promotes technology, education and innovation, with robots as the main protagonists. Every year, the largest university campus in the country becomes the place to play and exhibit for hundreds of robots and technologies.",
        typeOfPost: "EventPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e7"),
    },
    {
        eventName: "MedFEST",
        eventDate: "2025-03-10T00:00:00.000+00:00",
        eventTime: "08:00",
        eventLocation: "UPB Automatics Faculty",
        description:
            "We are waiting for you at the POLITEHNICA Bucharest campus to learn everything about medical engineering – the science that promises to revolutionize the health field by developing innovative technologies and expanding access to advanced medical care..",
        typeOfPost: "EventPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e8"),
    },
];

export const photoPosts = [
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1729001225/photo-posts/demo-photo-posts/kdakg8dcvnm7kbl8fcgw.png",
        description: "Poli E-FEST starting soon!",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551e9"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1729001223/photo-posts/demo-photo-posts/hszlddf2pqbstpvxvh0t.jpg",
        description:
            "Incredible turnout for the Poli Robofest! Proud of our university’s innovations.",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551ea"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1729001222/photo-posts/demo-photo-posts/ihl9i1emnqhyowwvlgrh.jpg",
        description: "Just a casual walk in the beautiful Campus!!",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551eb"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1729001222/photo-posts/demo-photo-posts/k8plygktqhzqymid5msw.jpg",
        description:
            "A lot of kids attended today the RoboFest! I am sure that the newer generations will change the world in a better place! 👏",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551ec"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1729001221/photo-posts/demo-photo-posts/cm29vilkzcru8n5ap57z.jpg",
        description: "Robots on the stage! 🤖",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551ed"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1729001221/photo-posts/demo-photo-posts/nhjjp5stbqdw62vvufps.png",
        description: "RoboFest 2024 was a blast! 🚀",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551ee"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1729001220/photo-posts/demo-photo-posts/enpfgujoxasfyljqtsqw.jpg",
        description: "Take a look at this one! 🤖",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551ef"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1729001220/photo-posts/demo-photo-posts/bcntncprtmauxg1b27pl.jpg",
        description: "Hi there!",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551f0"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1729001220/photo-posts/demo-photo-posts/kdo2xri05zoomduzgheu.png",
        description: "The final game was amazing! 🎮",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551f1"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1729001219/photo-posts/demo-photo-posts/xxy9pgobi1vhxa36pqnu.jpg",
        description: "Getting things ready for E-FEST! 🎮",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551f2"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1729001219/photo-posts/demo-photo-posts/apbjxeynhiwdr82shehp.jpg",
        description: "Focused and ready to play!",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551f3"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1729001219/photo-posts/demo-photo-posts/dmlcuks2yor0gtrlghf3.webp",
        description: "The drift competition was amazing! 🚗",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551f4"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1729001218/photo-posts/demo-photo-posts/ulyvmj5ioepzrzf5k5g9.png",
        description: "All eyes! 👀",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551f5"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1729001218/photo-posts/demo-photo-posts/sphvh8joceejv52ehmwz.jpg",
        description: "This is huge!",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551f6"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1729001218/photo-posts/demo-photo-posts/lr7zgmzrvoxmixx4uwuy.jpg",
        description: "SpaceFest's future spacemen! 🍲",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551f7"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1729001217/photo-posts/demo-photo-posts/ig3fnizatl7dbl8ciuya.png",
        description: "Just chill vibes! 🌞",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551f8"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1729001217/photo-posts/demo-photo-posts/mfgxzu31ibppvrolau4q.png",
        description: "Ready, set, drift!",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551f9"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1729001217/photo-posts/demo-photo-posts/zzwbcxdwrxaso5jighc4.jpg",
        description: "SpaceFest is coming ! 🚀",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551fa"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1729001216/photo-posts/demo-photo-posts/snurtz2jrdheatikyige.jpg",
        description:
            "E-FEST is the largest event dedicated to the video game industry. The popularity of video games has opened new avenues for innovation and technological advancement in a deeply interdisciplinary field where engineering plays the leading role!",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551fb"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1729001215/photo-posts/demo-photo-posts/hxrl62v6x7mhcg5uk4og.webp",
        description: "Stunning one!",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551fc"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1729001215/photo-posts/demo-photo-posts/vontpbg8tck25eolj75b.jpg",
        description: "Smile! 😁",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551fd"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1729001215/photo-posts/demo-photo-posts/v9jepobpdxajevvo2oi3.jpg",
        description: "A lot of people joined today!",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551fe"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1729001214/photo-posts/demo-photo-posts/rr2w8j8o8aom8hw87rrk.webp",
        description: "One word: Stunning!",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d551ff"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1729001214/photo-posts/demo-photo-posts/fkwomhx8lqmn3kvofait.jpg",
        description: "See you at the MedFEST!",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d55200"),
    },
    {
        mediaUrl:
            "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1729010943/photo-posts/demo-photo-posts/mgfk4u53leov3wjfgc4j.jpg",
        description: "The campus is so lonely today! ",
        typeOfPost: "PhotoPost",
        createdBy: new mongoose.Types.ObjectId("66ec5821956cb15742d55202"),
    },
];
