document.addEventListener("DOMContentLoaded", function() {
    var educationLink = document.getElementById('education-link');
    var educationSection = document.getElementById('education');

    var profilelink = document.getElementById('profile-link')
    var profileSection = document.getElementById('profile')

    var skillslink = document.getElementById('skills-link')
    var skillsSection = document.getElementById('skills')

    profilelink.addEventListener('click', function() {
        profileSection.scrollIntoView({behavior: 'smooth'})
    });
    skillslink.addEventListener('click', function() {
        skillsSection.scrollIntoView({behavior: 'smooth'})
    });
    educationLink.addEventListener('click', function() {
        educationSection.scrollIntoView({ behavior: 'smooth' });
    });
});