import { bangladeshPlatforms } from "./bangladesh.platforms";
import { globalPlatforms } from "./global.platforms";
import { remotePlatforms } from "./remote.platforms";
import { companyCareers } from "./company.career";
export const directories = [
    { slug: "bangladesh", name: "Bangladesh Jobs", kicker: "GROW CLOSE TO HOME", tone: "green", shortDescription: "Find your next big opportunity, right here at home.", title: "Your next chapter, closer to home.", description: "Discover Bangladeshi job platforms in one place. Find the right starting point for your next local opportunity.", platforms: bangladeshPlatforms },
    { slug: "global", name: "Global Jobs", kicker: "THINK BEYOND BORDERS", tone: "blue", shortDescription: "Take your skills further with opportunities worldwide.", title: "Big ambitions. A world of possibilities.", description: "Explore international job platforms and discover opportunities across countries, industries, and career stages.", platforms: globalPlatforms },
    { slug: "remote", name: "Remote Jobs", kicker: "WORK YOUR OWN WAY", tone: "purple", shortDescription: "Meaningful work, wherever you feel most inspired.", title: "Great work. Wherever you call home.", description: "Explore remote and flexible job boards. Check each listing for location and timezone requirements to find your fit.", platforms: remotePlatforms },
    { slug: "companies", name: "Company Careers", kicker: "GO STRAIGHT TO THE SOURCE", tone: "orange", shortDescription: "Meet your next team. Explore company careers directly.", title: "Find the team for your next chapter.", description: "Explore career pages from Bangladesh’s software and technology companies. Get to know the teams and apply directly.", platforms: companyCareers },
];
