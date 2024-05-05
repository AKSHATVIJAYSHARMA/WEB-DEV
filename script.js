// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Fetch dynamic data from server or any other source
    const dynamicData = "{{ dynamic_data }}";
    
    // Update the HTML content with dynamic data
    document.getElementById('dynamicData').innerText = dynamicData;
});
