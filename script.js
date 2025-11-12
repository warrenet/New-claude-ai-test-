// Profile data
const profileData = {
    name: "John Doe",
    title: "Software Developer",
    about: "Passionate software developer with expertise in web technologies and a love for creating user-friendly applications.",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    skills: ["JavaScript", "HTML/CSS", "React", "Node.js", "Git"]
};

// Edit profile function
function editProfile() {
    const name = prompt("Enter your name:", profileData.name);
    if (name !== null && name.trim() !== "") {
        profileData.name = name;
        document.getElementById('profileName').textContent = name;
    }
    
    const title = prompt("Enter your title:", profileData.title);
    if (title !== null && title.trim() !== "") {
        profileData.title = title;
        document.getElementById('profileTitle').textContent = title;
    }
    
    const about = prompt("Enter about text:", profileData.about);
    if (about !== null && about.trim() !== "") {
        profileData.about = about;
        document.getElementById('aboutText').textContent = about;
    }
    
    const email = prompt("Enter your email:", profileData.email);
    if (email !== null && email.trim() !== "") {
        profileData.email = email;
        document.getElementById('email').textContent = email;
    }
    
    const phone = prompt("Enter your phone:", profileData.phone);
    if (phone !== null && phone.trim() !== "") {
        profileData.phone = phone;
        document.getElementById('phone').textContent = phone;
    }
    
    const location = prompt("Enter your location:", profileData.location);
    if (location !== null && location.trim() !== "") {
        profileData.location = location;
        document.getElementById('location').textContent = location;
    }
    
    alert("Profile updated successfully!");
}

// Share profile function
function shareProfile() {
    const profileUrl = window.location.href;
    const shareText = `Check out ${profileData.name}'s profile!`;
    
    if (navigator.share) {
        navigator.share({
            title: `${profileData.name} - Profile`,
            text: shareText,
            url: profileUrl
        }).then(() => {
            console.log('Profile shared successfully');
        }).catch((error) => {
            console.log('Error sharing profile:', error);
            fallbackShare(profileUrl, shareText);
        });
    } else {
        fallbackShare(profileUrl, shareText);
    }
}

// Fallback share function for browsers that don't support navigator.share
function fallbackShare(url, text) {
    const shareMessage = `${text}\n${url}`;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(shareMessage).then(() => {
            alert('Profile link copied to clipboard!');
        }).catch(() => {
            alert(`Share this link:\n${url}`);
        });
    } else {
        alert(`Share this link:\n${url}`);
    }
}

// Initialize profile on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('User Profile Page loaded successfully');
    
    // Add animation to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
    });
});
