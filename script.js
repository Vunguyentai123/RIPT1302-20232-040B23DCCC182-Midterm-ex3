document.addEventListener("DOMContentLoaded", function() {
    
    const personalInfo = document.getElementById('personal-info');
    personalInfo.innerHTML = `
      <h2>Personal Information</h2>
      <p><strong>Name:</strong> Nguyễn Tài Vũ</p>
      <p><strong>Age:</strong> 18</p>
      <p><strong>Address:</strong> Trần Phú - Hà Đông</p>
      <p><strong>Phone:</strong> 0359245447</p>
      <p><strong>Email:</strong> vu31122005@gmail.com</p>
    `;
  
    
    const education = document.getElementById('education');
    education.innerHTML =`
      <h2>Education</h2>
      <p> Học Viện Công Nghệ Bưu Chính Viễn Thông</p>
      <p>Graduated: 2023</p>'
    `;
  
    
    const experience = document.getElementById('experience');
    experience.innerHTML =`
      <h2>Experience</h2>
      <p> Web programming in 2024</p>
      <p>Start programming in 2020</p>'
      `;
  
    
    const skills = document.getElementById('skills');
    skills.innerHTML = `
      <h2>Skills</h2>
      <p><strong>Strengths:</strong> Problem-solving, attention to detail, teamwork</p>
      <p><strong>Weaknesses:</strong> Public speaking, time management</p>
      <p><strong>Technical Skills:</strong> JavaScript, HTML/CSS, Python</p>
    `;
  
    // Links
    const links = document.getElementById('links');
    links.innerHTML = `
      <h2>Links</h2>
      <p><a href="https://github.com/Vunguyentai123">GitHub Profile</a></p>
    `;
  });
  