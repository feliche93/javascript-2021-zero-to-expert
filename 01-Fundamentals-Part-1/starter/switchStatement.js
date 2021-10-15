
const day = 'Saturday';

switch (day) {
    case 'Monday': // day === 'Monday' strict equality
        console.log('I go for a run');
        console.log('Go to work');
        // without break, the next case will be executed
        break;
    case 'Tuesday':
        console.log('Work on startup');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'Monday') {
    console.log('I go for a run');
    console.log('Go to work');
} else if (day === 'Tuesday') {
    console.log('Work on startup');
} else if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day!');
}