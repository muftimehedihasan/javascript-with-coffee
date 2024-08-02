let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "রবিবার";
        break;
    case 2:
        dayName = "সোমবার";
        break;
    case 3:
        dayName = "মঙ্গলবার";
        break;
    case 4:
        dayName = "বুধবার";
        break;
    case 5:
        dayName = "বৃহস্পতিবার";
        break;
    case 6:
        dayName = "শুক্রবার";
        break;
    case 7:
        dayName = "শনিবার";
        break;
    default:
        dayName = "ভুল দিন";
}

console.log(dayName);
