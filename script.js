

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
});
const checklistItems = document.querySelectorAll('#checklistItems input');
const checklistMessage = document.getElementById('checklistMessage');

checklistItems.forEach(item => {
    item.addEventListener('change', () => {
        const allChecked = Array.from(checklistItems).every(input => input.checked);
        if (allChecked) {
            checklistMessage.textContent = 'All set! You are ready to travel!';
        } else {
            checklistMessage.textContent = '';
        }
    });
});
const monthlyDestinations = document.getElementById('monthlyDestinations');

// Destination recommendations by month
const recommendations = {
    0: ['Goa, India', 'Sydney, Australia'], // January
    1: ['Venice, Italy', 'Kerala, India'], // February
    2: ['Tokyo, Japan', 'Paris, France'], // March
    3: ['Amsterdam, Netherlands', 'Kyoto, Japan'], // April
    4: ['Santorini, Greece', 'Ladakh, India'], // May
    5: ['Maui, Hawaii', 'Queenstown, New Zealand'], // June
    6: ['Banff, Canada', 'Iceland'], // July
    7: ['Edinburgh, Scotland', 'Switzerland'], // August
    8: ['Munich, Germany', 'Bali, Indonesia'], // September
    9: ['Kyoto, Japan', 'New York, USA'], // October
    10: ['Dubai, UAE', 'Jaipur, India'], // November
    11: ['Lapland, Finland', 'Zurich, Switzerland'], // December
};

// Loop through all months and create sections
Object.keys(recommendations).forEach(month => {
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const monthDiv = document.createElement('div');
    monthDiv.className = 'month';
    
    const monthHeading = document.createElement('h3');
    monthHeading.textContent = monthNames[month];
    monthDiv.appendChild(monthHeading);

    const destinationList = document.createElement('ul');
    recommendations[month].forEach(destination => {
        const listItem = document.createElement('li');
        listItem.textContent = destination;
        destinationList.appendChild(listItem);
    });

    monthDiv.appendChild(destinationList);
    monthlyDestinations.appendChild(monthDiv);
});

