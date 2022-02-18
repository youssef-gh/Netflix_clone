// Grab all tab & tab content items to create node list (like an array - so can loop )

const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
 // Remove all show and border classes
 removeBorder();
 removeShow();
 // Add border to current tab item
 this.classList.add('tab-border');
 // Grab content item from DOM
//  console.log(this.id);
 const tabContentItem = document.querySelector(`#${this.id}-content`);
 // Add show class
 tabContentItem.classList.add('show');
}

// Remove border function
function removeBorder() {
 tabItems.forEach(item => item.classList.remove("tab-border"));
}

// Remove the 'show' class to change content displayed
function removeShow() {
 tabContentItems.forEach(item => item.classList.remove("show"));
}

// Loop through the nodelist(array) & listen for event
tabItems.forEach(item => item.addEventListener("click", selectItem));