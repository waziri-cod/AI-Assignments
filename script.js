// Course Data
const courses = [
    {
        id: 1,
        title: "Philosophy of Science",
        description: "Explore the foundations of scientific knowledge, methodology, and the nature of scientific theories. Learn about hypothesis formation, experimentation, and theory development in science.",
        instructor: "Dr. Sarah Mitchell",
        duration: "8 weeks",
        modules: [
            {
                id: 1,
                title: "Introduction to Scientific Method",
                description: "Understanding the basics of scientific inquiry",
                content: "Learn about hypothesis formation, experimentation, and theory development in science. This module covers the fundamental principles that guide scientific research and discovery."
            },
            {
                id: 2,
                title: "Theories and Paradigms",
                description: "Exploring scientific theories and paradigm shifts",
                content: "Study Thomas Kuhn's concept of paradigm shifts and how scientific revolutions occur. Understand how scientific knowledge evolves and changes over time."
            },
            {
                id: 3,
                title: "Scientific Realism vs Anti-Realism",
                description: "The debate about scientific truth",
                content: "Examine different philosophical positions on whether science describes reality as it truly is. Explore the ongoing debate between realists and anti-realists in philosophy of science."
            }
        ]
    },
    {
        id: 2,
        title: "Philosophy of Law",
        description: "Examine the nature of law, legal systems, justice, and the relationship between law and morality. Study different theories of legal interpretation and the foundations of legal systems.",
        instructor: "Prof. James Chen",
        duration: "6 weeks",
        modules: [
            {
                id: 4,
                title: "Natural Law Theory",
                description: "Classical theories of law and morality",
                content: "Explore the connection between law and universal moral principles. Study how natural law theorists argue that law should reflect fundamental moral truths."
            },
            {
                id: 5,
                title: "Legal Positivism",
                description: "Law as social construction",
                content: "Study H.L.A. Hart and the separation of law and morality. Learn how legal positivists view law as a human creation rather than a reflection of natural moral order."
            },
            {
                id: 6,
                title: "Justice and Rights",
                description: "Foundations of legal justice",
                content: "Analyze theories of justice and human rights in legal systems. Explore how different conceptions of justice shape legal institutions and practices."
            }
        ]
    },
    {
        id: 3,
        title: "Political Philosophy",
        description: "Study fundamental questions about government, justice, rights, liberty, and political legitimacy. Explore different theories of political authority and the role of the state.",
        instructor: "Dr. Emily Rodriguez",
        duration: "10 weeks",
        modules: [
            {
                id: 7,
                title: "Social Contract Theory",
                description: "Origins of political authority",
                content: "Study Hobbes, Locke, and Rousseau on the foundations of government. Learn how social contract theorists explain the legitimacy of political authority."
            },
            {
                id: 8,
                title: "Theories of Justice",
                description: "Rawls and distributive justice",
                content: "Examine John Rawls' theory of justice and the veil of ignorance. Understand how Rawls' approach to justice has influenced contemporary political thought."
            },
            {
                id: 9,
                title: "Liberty and Authority",
                description: "Freedom and state power",
                content: "Explore the tension between individual liberty and governmental authority. Study how different political theories balance freedom and security."
            },
            {
                id: 10,
                title: "Democracy and Representation",
                description: "Models of democratic governance",
                content: "Analyze different forms of democracy and political participation. Learn about representative democracy, direct democracy, and other models of governance."
            }
        ]
    }
];

// User Data (simulated)
let currentUser = null;
let userProgress = JSON.parse(localStorage.getItem('userProgress')) || {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadCourses();
    checkUserSession();
});

// Check if user is logged in
function checkUserSession() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateNavigation();
        loadCourses();
    }
}

// Update navigation based on login status
function updateNavigation() {
    const navMenu = document.querySelector('.nav-menu');
    if (currentUser) {
        navMenu.innerHTML = `
            <span>Welcome, ${currentUser.name}!</span>
            <a href="#" class="nav-link" onclick="logout()">Logout</a>
        `;
    } else {
        navMenu.innerHTML = `
            <a href="#" class="nav-link" onclick="showLogin()">Login</a>
            <a href="#" class="nav-link" onclick="showSignup()">Sign Up</a>
        `;
    }
}

// Show login modal
function showLogin() {
    document.getElementById('loginModal').style.display = 'block';
}

// Show signup modal
function showSignup() {
    document.getElementById('signupModal').style.display = 'block';
}

// Close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Handle login
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simple validation (in real app, this would be server-side)
    if (email && password) {
        currentUser = {
            id: Date.now(),
            name: email.split('@')[0],
            email: email
        };
        
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateNavigation();
        closeModal('loginModal');
        loadCourses();
        
        alert('Login successful!');
    } else {
        alert('Please fill in all fields');
    }
}

// Handle signup
function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    if (name && email && password) {
        currentUser = {
            id: Date.now(),
            name: name,
            email: email
        };
        
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateNavigation();
        closeModal('signupModal');
        loadCourses();
        
        alert('Signup successful!');
    } else {
        alert('Please fill in all fields');
    }
}

// Logout
function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateNavigation();
    showHomePage();
}

// Load courses
function loadCourses() {
    const coursesGrid = document.getElementById('coursesGrid');
    coursesGrid.innerHTML = '';
    
    courses.forEach(course => {
        const progress = calculateCourseProgress(course.id);
        const isCompleted = progress === 100;
        
        const courseCard = document.createElement('div');
        courseCard.className = `course-card ${isCompleted ? 'completed' : ''}`;
        courseCard.onclick = () => showCourseDetail(course.id);
        
        courseCard.innerHTML = `
            <div class="course-header-card">
                <div class="course-badge ${isCompleted ? 'completed' : ''}">
                    <i class="fas fa-book"></i> Philosophy
                </div>
                ${isCompleted ? '<div class="course-badge completed"><i class="fas fa-check-circle"></i> Completed</div>' : ''}
            </div>
            <h3 class="course-title">${course.title}</h3>
            <p class="course-description">${course.description}</p>
            <div class="course-info">
                <span><i class="fas fa-user"></i> ${course.instructor}</span>
                <span><i class="fas fa-clock"></i> ${course.duration}</span>
                <span><i class="fas fa-book"></i> ${course.modules.length} modules</span>
            </div>
            ${currentUser ? `
                <div class="progress-section">
                    <div class="progress-header">
                        <span>${isCompleted ? 'Completed' : 'Progress'}</span>
                        <span>${Math.round(progress)}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill ${isCompleted ? 'completed' : ''}" style="width: ${progress}%"></div>
                    </div>
                </div>
            ` : ''}
        `;
        
        coursesGrid.appendChild(courseCard);
    });
}

// Calculate course progress
function calculateCourseProgress(courseId) {
    if (!currentUser) return 0;
    
    const course = courses.find(c => c.id === courseId);
    if (!course) return 0;
    
    const courseKey = `course_${courseId}`;
    const completedModules = userProgress[courseKey] || [];
    
    return (completedModules.length / course.modules.length) * 100;
}

// Show course detail
function showCourseDetail(courseId) {
    if (!currentUser) {
        alert('Please login to view course details');
        return;
    }
    
    const course = courses.find(c => c.id === courseId);
    if (!course) return;
    
    // Hide home page, show course detail page
    document.getElementById('homePage').classList.remove('active');
    document.getElementById('courseDetailPage').classList.add('active');
    
    // Update course header
    document.getElementById('courseTitle').textContent = course.title;
    document.getElementById('courseDescription').textContent = course.description;
    document.getElementById('courseInstructor').textContent = course.instructor;
    document.getElementById('courseDuration').textContent = course.duration;
    document.getElementById('courseModules').textContent = course.modules.length;
    
    // Load modules
    loadModules(course);
    
    // Update progress
    updateCourseProgress(courseId);
}

// Load modules
function loadModules(course) {
    const modulesList = document.getElementById('modulesList');
    modulesList.innerHTML = '';
    
    const courseKey = `course_${course.id}`;
    const completedModules = userProgress[courseKey] || [];
    
    course.modules.forEach(module => {
        const isCompleted = completedModules.includes(module.id);
        
        const moduleItem = document.createElement('div');
        moduleItem.className = `module-item ${isCompleted ? 'completed' : ''}`;
        moduleItem.onclick = () => toggleModuleCompletion(course.id, module.id, isCompleted);
        
        moduleItem.innerHTML = `
            <div class="module-header">
                <input type="checkbox" class="module-checkbox" ${isCompleted ? 'checked' : ''} 
                       onclick="event.stopPropagation(); toggleModuleCompletion(${course.id}, ${module.id}, ${isCompleted})">
                <h3 class="module-title">${module.title}</h3>
                ${isCompleted ? '<i class="fas fa-check-circle" style="color: #48bb78;"></i>' : ''}
            </div>
            <p class="module-description">${module.description}</p>
        `;
        
        modulesList.appendChild(moduleItem);
    });
}

// Toggle module completion
function toggleModuleCompletion(courseId, moduleId, currentStatus) {
    if (!currentUser) return;
    
    const courseKey = `course_${courseId}`;
    let completedModules = userProgress[courseKey] || [];
    
    if (currentStatus) {
        // Remove from completed
        completedModules = completedModules.filter(id => id !== moduleId);
    } else {
        // Add to completed
        completedModules.push(moduleId);
    }
    
    userProgress[courseKey] = completedModules;
    localStorage.setItem('userProgress', JSON.stringify(userProgress));
    
    // Reload modules and progress
    const course = courses.find(c => c.id === courseId);
    loadModules(course);
    updateCourseProgress(courseId);
    
    // Show success message
    const message = currentStatus ? 'Module marked as incomplete' : 'Module completed! Great work!';
    showNotification(message);
}

// Update course progress
function updateCourseProgress(courseId) {
    const progress = calculateCourseProgress(courseId);
    const isCompleted = progress === 100;
    
    document.getElementById('progressPercentage').textContent = Math.round(progress) + '%';
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressFill').className = `progress-fill ${isCompleted ? 'completed' : ''}`;
    
    const progressSection = document.querySelector('.progress-section');
    progressSection.className = `progress-section ${isCompleted ? 'completed' : ''}`;
    
    const progressLabel = document.getElementById('progressLabel');
    if (isCompleted) {
        progressLabel.innerHTML = '<i class="fas fa-check-circle"></i> Course Complete!';
        document.getElementById('completionMessage').classList.remove('hidden');
    } else {
        progressLabel.textContent = 'Course Progress';
        document.getElementById('completionMessage').classList.add('hidden');
    }
}

// Show home page
function showHomePage() {
    document.getElementById('courseDetailPage').classList.remove('active');
    document.getElementById('homePage').classList.add('active');
    loadCourses();
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #48bb78;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 3000;
        font-weight: 500;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
        style.remove();
    }, 3000);
}

// Close modals when clicking outside
window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    
    if (event.target === loginModal) {
        closeModal('loginModal');
    }
    if (event.target === signupModal) {
        closeModal('signupModal');
    }
}
