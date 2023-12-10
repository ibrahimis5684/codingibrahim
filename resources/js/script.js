document.addEventListener('DOMContentLoaded', function () {
    const sideNavBar = document.querySelector('.side-nav-bar');
    const menuButton = document.querySelector('.menu-icon-box button');
    const hideSpans = document.querySelectorAll('.side-nav-bar span[id="hide-span"]');
    const home = document.getElementById('home');
    const category = document.getElementById('category-list');
    const projectsBox = document.querySelectorAll('.projects-box');
    
    let isCollapsed = false;

    menuButton.addEventListener('click', function () {
        isCollapsed = !isCollapsed;
        updateStyles();
    });

    // Function to update styles based on screen width and isCollapsed
    function updateStyles() {
        const screenWidth = window.innerWidth;
        const maxScreenWidth = 1200;
        
        if (screenWidth <= maxScreenWidth) {
            sideNavBar.style.width = isCollapsed ? '23rem' : '7rem';
            home.style.marginLeft = isCollapsed ? '7rem' : '7rem';
            category.style.marginLeft = isCollapsed ? '19.5rem' : '4rem';
            hideSpans.forEach(span => span.style.scale = isCollapsed ? '1' : '0');
        } else {
            sideNavBar.style.width = isCollapsed ? '7rem' : '23rem';
            home.style.marginLeft = isCollapsed ? '7rem' : '23rem';
            category.style.marginLeft = isCollapsed ? '4rem' : '19.5rem';
            hideSpans.forEach(span => span.style.scale = isCollapsed ? '0' : '1');
            projectsBox.forEach(box => box.style.width = isCollapsed ? '24%' : '36.7rem');
        }

    }

    // Update styles on page load
    updateStyles();

    // Update styles on window resize
    window.addEventListener('resize', updateStyles);
});


// category bar 

function changeColor(selectedItem) {
    var items = document.querySelectorAll('#category-menu-list a');
    items.forEach(function(item) {
        item.style.background = '#ffffff';
        item.style.color = '#353535';
    });

    selectedItem.style.background = '#F4F2F1';
    selectedItem.style.color = '#1976D2';
}

// filter-method

document.addEventListener("DOMContentLoaded", function () {
    var categoryItems = document.querySelectorAll("#category-menu-list li a");

    var projects = document.querySelectorAll(".projects-box");

    categoryItems.forEach(function (item) {
        item.addEventListener("click", function () {
            var selectedCategory = item.innerText.toLowerCase();

            // Hide all projects
            projects.forEach(function (project) {
                project.classList.add("hidden");
            });

            // Show projects with matching category
            projects.forEach(function (project) {
                var projectCategory = project.querySelector("#category").innerText.toLowerCase();

                if (selectedCategory === "all" || projectCategory.includes(selectedCategory)) {
                    project.classList.remove("hidden");
                }
            });
        });
    });
});

// search 

function filterPosts() {
    var searchInput = document.getElementById('search-input').value.toLowerCase();
    var posts = document.querySelectorAll('.projects-box');

    var firstPostDisplayed = false;

    posts.forEach(function (post) {
        var title = post.querySelector('h2').textContent.toLowerCase();
        var subtitle = post.querySelector('span').textContent.toLowerCase();

        if (title.includes(searchInput) || subtitle.includes(searchInput)) {
            post.style.display = 'inline-block';

            if (!firstPostDisplayed) {
                firstPostDisplayed = true;
            }
        } else {
            post.style.display = 'none';
        }
    });

    if (!firstPostDisplayed) {
        var firstPost = document.querySelector('.projects-box');
        if (firstPost) {
            firstPost.style.display = 'inline-block';
        }
    }
}


// dark mode

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const modeText = body.querySelector(".mode-text");


darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');

  if (body.classList.contains("dark")) {
      modeText.innerText = "Dark Mode";
  } else {
      modeText.innerText = "Light Mode";
  }
});

// copy text design

function htmlCopyCode() {
    var htmlCode = document.getElementById('htmlCode');
    var htmlRange = document.createRange();
    htmlRange.selectNode(htmlCode);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(htmlRange);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    
    // Provide a confirmation message
    alert('Code has been copied!');
}

function cssCopyCode() {
    var cssCode = document.getElementById('cssCode');
    var cssRange = document.createRange();
    cssRange.selectNode(cssCode);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(cssRange);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    
    // Provide a confirmation message
    alert('Code has been copied!');
}

function jsCopyCode() {
    var jsCode = document.getElementById('jsCode');
    var jsRange = document.createRange();
    jsRange.selectNode(jsCode);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(jsRange);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    
    // Provide a confirmation message
    alert('Code has been copied!');
}