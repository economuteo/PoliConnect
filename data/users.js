import bcrypt from "bcryptjs";

const users = [
    {
        fullName: "Teo-Antonio Economu",
        email: "teo_antonio.economu@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "admin",
        username: "teoantonioeconomu",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Andrei Popescu",
        email: "andreipopescutest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "andreipopescu",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Ioana Ionescu",
        email: "ioanaionescutest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "ioanaionescu",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Radu Dumitrescu",
        email: "radudumitrescutest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "radudumitrescu",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Mihai Georgescu",
        email: "mihaigeorgescutest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "mihaigeorgescu",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Ana Maria Vasilescu",
        email: "anamariavasilescutest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "anamariavasilescu",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Cristian Stoica",
        email: "cristianstoicatest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "cristianstoica",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Adela Grigorescu",
        email: "adelagrigorescutest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "adelagrigorescu",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Florin Marinescu",
        email: "florinmarinescutest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "florinmarinescu",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Elena Enescu",
        email: "elenaenescutest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "elenaenescu",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "George Anghel",
        email: "georgeangheltest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "georgeanghel",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Diana Munteanu",
        email: "dianamunteanutest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "dianamunteanu",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Alexandru Preda",
        email: "alexandrupredatest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "alexandrupreda",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Roxana Bălan",
        email: "roxanabalantest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "roxanabalan",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Maria Drăghici",
        email: "mariadraghicitest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "mariadraghici",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Vlad Mihăescu",
        email: "vladmihaescutest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "vladmihaescu",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Gabriela Dobre",
        email: "gabrieladobretest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "gabrieladobre",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Daniel Popa",
        email: "danielpopatest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "danielpopa",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Adrian Florescu",
        email: "adrianflorescutest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "adrianflorescu",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Bianca Neagu",
        email: "biancaneagutest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "biancaneagu",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Paul Rusu",
        email: "paulrusutest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "paulrusu",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Ștefan Popescu",
        email: "stefanpopescutest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "stefanpopescu",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Ionuț Andrei",
        email: "ionutandreitest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "ionutandrei",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Ioana Vintilescu",
        email: "ioanavintilescuutest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "ioanavintilescu",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Georgian Roșu",
        email: "georgianrosutest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "georgianrosu",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Laura Cojocaru",
        email: "lauracojocarutest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "lauracojocaru",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Andreea Filișan",
        email: "andreeafilisantest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "andreeafilisan",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Andrei Bălan",
        email: "andreibalantest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "andreibalan",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Jonathan Smith",
        email: "jonathansmithtest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "jonathansmith",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Pierre Dupont",
        email: "pierreduponttest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "pierredupont",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Martin François",
        email: "martinfrancoiostest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "martinfrancois",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
    {
        fullName: "Maria Garcia",
        email: "mariagarciatest@stud.fils.upb.ro",
        password: bcrypt.hashSync("Parolagrea12", 10),
        role: "user",
        username: "mariagarcia",
        university: "UPB",
        profile: "Electronics, Telecommunications and Information Technology",
        year: "4",
        profileImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
        bannerImage:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        following: [],
        followers: [],
    },
];

export default users;