// City Data (All 10 Indian cities)
const cities = [
    {
        id: "delhi",
        name: "Delhi",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        tagline: "The Historic Capital",
        spots: [
            { name: "Red Fort", highlight: "UNESCO World Heritage Site", rating: "★★★★★" },
            { name: "Qutub Minar", highlight: "Tallest brick minaret in the world", rating: "★★★★★" },
            { name: "India Gate", highlight: "Iconic war memorial", rating: "★★★★☆" },
            { name: "Humayun's Tomb", highlight: "Precursor to the Taj Mahal", rating: "★★★★☆" }
        ],
        foods: [
            { name: "Butter Chicken", place: "Moti Mahal", type: "Non-Veg" },
            { name: "Chole Bhature", place: "Sita Ram Diwan Chand", type: "Veg" },
            { name: "Paranthas", place: "Paranthe Wali Gali", type: "Veg" },
            { name: "Daulat Ki Chaat", place: "Chandni Chowk", type: "Veg" }
        ],
        experiences: [
            { name: "Heritage Walk in Old Delhi", duration: "3 hours", bestTime: "Morning" },
            { name: "Sound & Light Show at Red Fort", duration: "1 hour", bestTime: "Evening" },
            { name: "Shopping at Dilli Haat", duration: "2-3 hours", bestTime: "Afternoon" },
            { name: "Sunrise at Jama Masjid", duration: "1 hour", bestTime: "Dawn" }
        ]
    },
    {
        id: "mumbai",
        name: "Mumbai",
        image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        tagline: "The City of Dreams",
        spots: [
            { name: "Gateway of India", highlight: "Iconic colonial-era arch", rating: "★★★★★" },
            { name: "Marine Drive", highlight: "3.6km long coastal road", rating: "★★★★☆" },
            { name: "Elephanta Caves", highlight: "Ancient rock-cut caves", rating: "★★★★☆" },
            { name: "Chhatrapati Shivaji Terminus", highlight: "UNESCO World Heritage Site", rating: "★★★★★" }
        ],
        foods: [
            { name: "Vada Pav", place: "Street stalls", type: "Veg" },
            { name: "Pav Bhaji", place: "Cannon Pav Bhaji", type: "Veg" },
            { name: "Bombay Sandwich", place: "Street stalls", type: "Veg" },
            { name: "Seafood", place: "Gajalee", type: "Non-Veg" }
        ],
        experiences: [
            { name: "Dharavi Slum Tour", duration: "3 hours", bestTime: "Morning" },
            { name: "Ferry to Elephanta Island", duration: "Half day", bestTime: "Morning" },
            { name: "Sunset at Bandra-Worli Sea Link", duration: "1 hour", bestTime: "Evening" },
            { name: "Bollywood Studio Tour", duration: "2 hours", bestTime: "Afternoon" }
        ]
    },
    {
        id: "jaipur",
        name: "Jaipur",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        tagline: "The Pink City",
        spots: [
            { name: "Hawa Mahal", highlight: "Palace of Winds with 953 windows", rating: "★★★★★" },
            { name: "Amber Fort", highlight: "Majestic hilltop fortress", rating: "★★★★★" },
            { name: "City Palace", highlight: "Royal residence complex", rating: "★★★★☆" },
            { name: "Jantar Mantar", highlight: "Ancient astronomical observatory", rating: "★★★★☆" }
        ],
        foods: [
            { name: "Dal Baati Churma", place: "Laxmi Misthan Bhandar", type: "Veg" },
            { name: "Laal Maas", place: "Handi Restaurant", type: "Non-Veg" },
            { name: "Pyaaz Kachori", place: "Rawats", type: "Veg" },
            { name: "Ghewar", place: "JMB Sweet House", type: "Veg" }
        ],
        experiences: [
            { name: "Elephant Ride at Amber Fort", duration: "30 minutes", bestTime: "Morning" },
            { name: "Hot Air Balloon Ride", duration: "1 hour", bestTime: "Sunrise" },
            { name: "Block Printing Workshop", duration: "2 hours", bestTime: "Afternoon" },
            { name: "Night Tour of Nahargarh Fort", duration: "2 hours", bestTime: "Evening" }
        ]
    },
    {
        id: "goa",
        name: "Goa",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        tagline: "Beach Paradise",
        spots: [
            { name: "Palolem Beach", highlight: "Scenic crescent-shaped beach", rating: "★★★★★" },
            { name: "Basilica of Bom Jesus", highlight: "UNESCO site with St. Francis Xavier's relics", rating: "★★★★☆" },
            { name: "Dudhsagar Falls", highlight: "Four-tiered waterfall", rating: "★★★★★" },
            { name: "Fontainhas", highlight: "Latin Quarter with colorful houses", rating: "★★★★☆" }
        ],
        foods: [
            { name: "Fish Curry Rice", place: "Ritz Classic", type: "Non-Veg" },
            { name: "Pork Vindaloo", place: "Viva Panjim", type: "Non-Veg" },
            { name: "Bebinca", place: "Confeitaria 31 de Janeiro", type: "Veg" },
            { name: "Feni Cocktails", place: "Souza Lobo", type: "Veg" }
        ],
        experiences: [
            { name: "Water Sports at Calangute", duration: "2-3 hours", bestTime: "Morning" },
            { name: "Spice Plantation Tour", duration: "Half day", bestTime: "Morning" },
            { name: "Silent Noise Headphone Party", duration: "4 hours", bestTime: "Night" },
            { name: "Island Hopping Cruise", duration: "Full day", bestTime: "Daytime" }
        ]
    },
    {
        id: "varanasi",
        name: "Varanasi",
        image:" https://media.istockphoto.com/id/1164329797/photo/hindu-sadhu-sitting-on-a-boat-overlooking-varanasi-city-architecture-at-sunset.jpg?s=612x612&w=0&k=20&c=LbpIHRo7kGT7dbUr6b6UuD1d6P0yCaKZ2lbqo3TY988=",
        tagline: "Spiritual Capital",
        spots: [
            { name: "Kashi Vishwanath Temple", highlight: "Golden Temple dedicated to Shiva", rating: "★★★★★" },
            { name: "Dashashwamedh Ghat", highlight: "Main riverfront with famous Ganga Aarti", rating: "★★★★★" },
            { name: "Sarnath", highlight: "Where Buddha gave his first sermon", rating: "★★★★☆" },
            { name: "Manikarnika Ghat", highlight: "Sacred cremation ground", rating: "★★★★☆" }
        ],
        foods: [
            { name: "Tamatar Chaat", place: "Kachori Gali", type: "Veg" },
            { name: "Malaiyo", place: "Street stalls (winter only)", type: "Veg" },
            { name: "Banarasi Paan", place: "Keshav Tambul Bhandar", type: "Veg" },
            { name: "Thandai", place: "Blue Lassi Shop", type: "Veg" }
        ],
        experiences: [
            { name: "Sunrise Boat Ride on Ganges", duration: "1 hour", bestTime: "Dawn" },
            { name: "Evening Ganga Aarti Ceremony", duration: "1 hour", bestTime: "Sunset" },
            { name: "Silk Weaving Demonstration", duration: "1 hour", bestTime: "Daytime" },
            { name: "Yoga Class by the Ghats", duration: "1 hour", bestTime: "Morning" }
        ]
    },
    {
        id: "bangalore",
        name: "Bangalore",
        image: "https://t3.ftcdn.net/jpg/03/41/95/04/360_F_341950409_Gq1sN2OqYgRZrUTvPohSmgQVubaqzlA5.jpg",
        tagline: "Garden City & Tech Hub",
        spots: [
            { name: "Lalbagh Botanical Garden", highlight: "240-acre garden with glasshouse", rating: "★★★★☆" },
            { name: "Bangalore Palace", highlight: "Tudor-style royal palace", rating: "★★★★☆" },
            { name: "Cubbon Park", highlight: "Lush green space in city center", rating: "★★★★☆" },
            { name: "Innovative Film City", highlight: "Entertainment complex", rating: "★★★☆☆" }
        ],
        foods: [
            { name: "Masala Dosa", place: "MTR", type: "Veg" },
            { name: "Filter Coffee", place: "Indian Coffee House", type: "Veg" },
            { name: "Mangalorean Seafood", place: "Karavalli", type: "Non-Veg" },
            { name: "Craft Beer", place: "Toit Brewpub", type: "Veg" }
        ],
        experiences: [
            { name: "Nandi Hills Sunrise Trek", duration: "Half day", bestTime: "Early morning" },
            { name: "Microbrewery Hopping", duration: "3-4 hours", bestTime: "Evening" },
            { name: "VR Gaming Experience", duration: "1-2 hours", bestTime: "Anytime" },
            { name: "Cubbon Park Cycling", duration: "1 hour", bestTime: "Morning" }
        ]
    },
    {
        id: "kolkata",
        name: "Kolkata",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuiWQvKkM_I0I6byC8jX54wkovtJfONeJsvOUOqw_QjH9h1NZ5diFR1dFOW05P4x-P4NA&usqp=CAU",
        tagline: "City of Joy",
        spots: [
            { name: "Victoria Memorial", highlight: "Marble museum in colonial building", rating: "★★★★★" },
            { name: "Howrah Bridge", highlight: "Iconic cantilever bridge over Hooghly", rating: "★★★★☆" },
            { name: "Dakshineswar Temple", highlight: "Famous Kali temple", rating: "★★★★☆" },
            { name: "Kumartuli", highlight: "Traditional potters' quarter", rating: "★★★★☆" }
        ],
        foods: [
            { name: "Rosogolla", place: "KC Das", type: "Veg" },
            { name: "Kathi Rolls", place: "Nizam's", type: "Non-Veg" },
            { name: "Phuchka", place: "Park Street stalls", type: "Veg" },
            { name: "Macher Jhol", place: "6 Ballygunge Place", type: "Non-Veg" }
        ],
        experiences: [
            { name: "Tram Ride Through Old City", duration: "1 hour", bestTime: "Daytime" },
            { name: "College Street Book Browsing", duration: "2 hours", bestTime: "Afternoon" },
            { name: "Durga Puja Pandal Hopping", duration: "3-4 hours", bestTime: "Evening (Oct)" },
            { name: "Kalighat Temple Visit", duration: "1 hour", bestTime: "Morning" }
        ]
    },
    {
        id: "chennai",
        name: "Chennai",
        image: "https://media.istockphoto.com/id/471507884/photo/shore-temple-mamallapuram.jpg?s=612x612&w=0&k=20&c=QvX3e5SD4jPlznA6FBPSLm-_9fYbsf6KO94Bai-hKSU=",
        tagline: "Gateway to South India",
        spots: [
            { name: "Marina Beach", highlight: "Second longest urban beach", rating: "★★★★☆" },
            { name: "Kapaleeshwarar Temple", highlight: "Dravidian-style Shiva temple", rating: "★★★★☆" },
            { name: "Fort St. George", highlight: "First British fortress in India", rating: "★★★★☆" },
            { name: "DakshinaChitra", highlight: "Living history museum", rating: "★★★★☆" }
        ],
        foods: [
            { name: "Filter Coffee", place: "Saravana Bhavan", type: "Veg" },
            { name: "Chettinad Crab Curry", place: "Annalakshmi", type: "Non-Veg" },
            { name: "Idli-Sambar", place: "Murugan Idli Shop", type: "Veg" },
            { name: "Kothu Parotta", place: "Junior Kuppanna", type: "Non-Veg" }
        ],
        experiences: [
            { name: "Bharatanatyam Dance Show", duration: "1.5 hours", bestTime: "Evening" },
            { name: "Covelong Surfing", duration: "2 hours", bestTime: "Morning" },
            { name: "Mahabalipuram Day Trip", duration: "Full day", bestTime: "Daytime" },
            { name: "T Nagar Shopping Spree", duration: "3-4 hours", bestTime: "Afternoon" }
        ]
    },
    {
        id: "udaipur",
        name: "Udaipur",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkTha-VcG97rTE7oC8UBpWAA1mJhLWc2Lpwg&s",
        tagline: "City of Lakes",
        spots: [
            { name: "Lake Pichola", highlight: "Iconic lake with island palaces", rating: "★★★★★" },
            { name: "City Palace", highlight: "Largest royal complex in Rajasthan", rating: "★★★★★" },
            { name: "Jag Mandir", highlight: "Island palace on Lake Pichola", rating: "★★★★☆" },
            { name: "Sajjangarh (Monsoon Palace)", highlight: "Hilltop palace with panoramic views", rating: "★★★★☆" }
        ],
        foods: [
            { name: "Dal Baati Churma", place: "Ambrai Ghat", type: "Veg" },
            { name: "Laal Maas", place: "Jheel Dining", type: "Non-Veg" },
            { name: "Gatte ki Sabzi", place: "Millets of Mewar", type: "Veg" },
            { name: "Mawa Kachori", place: "Jagdish Misthan Bhandar", type: "Veg" }
        ],
        experiences: [
            { name: "Boat Dinner on Lake Pichola", duration: "2 hours", bestTime: "Sunset" },
            { name: "Miniature Painting Workshop", duration: "2 hours", bestTime: "Afternoon" },
            { name: "Vintage Car Museum Visit", duration: "1 hour", bestTime: "Daytime" },
            { name: "Heritage Walk in Old City", duration: "3 hours", bestTime: "Morning" }
        ]
    },
    {
        id: "kochi",
        name: "Kochi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqmhtTpNQpUEyG5uunboRutBiu9H1eyF5O6Q&s",
        tagline: "Queen of Arabian Sea",
        spots: [
            { name: "Fort Kochi", highlight: "Historic colonial district", rating: "★★★★★" },
            { name: "Chinese Fishing Nets", highlight: "Iconic shore nets", rating: "★★★★☆" },
            { name: "Jew Town", highlight: "Historic Jewish quarter", rating: "★★★★☆" },
            { name: "St. Francis Church", highlight: "Oldest European church in India", rating: "★★★★☆" }
        ],
        foods: [
            { name: "Kerala Sadya", place: "Grand Hotel", type: "Veg" },
            { name: "Karimeen Pollichathu", place: "Fort House Restaurant", type: "Non-Veg" },
            { name: "Appam with Stew", place: "Kashi Art Cafe", type: "Veg" },
            { name: "Banana Chips", place: "Local markets", type: "Veg" }
        ],
        experiences: [
            { name: "Kathakali Performance", duration: "1.5 hours", bestTime: "Evening" },
            { name: "Backwater Houseboat Stay", duration: "Overnight", bestTime: "All day" },
            { name: "Spice Market Tour", duration: "2 hours", bestTime: "Morning" },
            { name: "Fort Kochi Heritage Walk", duration: "3 hours", bestTime: "Morning" }
        ]
    }
