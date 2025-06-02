import { Flame, Star, ShieldCheck, CalendarClock, Rocket, TrendingUp, Target, Zap, LucideIcon } from "lucide-react";

interface CategoryT {
    id: number;
    name: string;
    description: string;
    icon: LucideIcon;
    noOfChallenges: number;
    speciality: string;
}


const SpecialSections: CategoryT[] = [
    {
        id: 1,
        name: "Top Picks for You",
        description: "Handpicked challenges based on your progress and interest.",
        icon: Flame,
        noOfChallenges: 6,
        speciality: "A curated set to boost your Tailwind skills quickly."
    },
    {
        id: 2,
        name: "This Week's Special",
        description: "Freshly added challenges to keep you in sync with trends.",
        icon: CalendarClock,
        noOfChallenges: 5,
        speciality: "Stay updated with design trends using new components."
    },
    {
        id: 3,
        name: "Beginner Boost",
        description: "Easy and essential challenges to build your foundation.",
        icon: Rocket,
        noOfChallenges: 7,
        speciality: "Perfect if you're just getting started with Tailwind CSS."
    },
    {
        id: 4,
        name: "Mastery Level",
        description: "Advanced components that demand design and utility finesse.",
        icon: ShieldCheck,
        noOfChallenges: 4,
        speciality: "Push your limits with complex layouts and animation logic."
    },
    {
        id: 5,
        name: "Trending Challenges",
        description: "Most attempted challenges by the community this week.",
        icon: TrendingUp,
        noOfChallenges: 8,
        speciality: "Build what's hot and compare your designs with others."
    },
    {
        id: 6,
        name: "Focus Mode",
        description: "Challenges to help you master one concept deeply.",
        icon: Target,
        noOfChallenges: 3,
        speciality: "Focus on spacing, positioning, typography, or animation."
    },
    {
        id: 7,
        name: "1-Minute Challenges",
        description: "Quick and simple tasks to practice Tailwind daily.",
        icon: Zap,
        noOfChallenges: 10,
        speciality: "Perfect for daily warmups or limited-time practice."
    },
    {
        id: 8,
        name: "Editor's Choice",
        description: "Premium hand-selected components for deeper learning.",
        icon: Star,
        noOfChallenges: 5,
        speciality: "Challenge yourself with designs curated by the creators."
    }
];

export default SpecialSections