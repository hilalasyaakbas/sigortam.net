
// Dropdown menüleri tıklanarak açma ve kapama
document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll('.dropdown > a');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(event) {
            event.preventDefault();
            
            const dropdownMenu = dropdown.nextElementSibling; //drop down menüsü
            
            // Eğer zaten açık değilse, diğer tüm menüleri kapat
            document.querySelectorAll('.dropdown-content').forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.style.display = 'none';
                }
            });
            
            // Menüyü açma veya kapama
            if (dropdownMenu.style.display === 'block') {
                dropdownMenu.style.display = 'none';
            } else {
                dropdownMenu.style.display = 'block';
            }
        });
    });
    
    // Sayfanın diğer yerlerine tıklanırsa tüm dropdown menülerini kapatma
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-content').forEach(menu => {
                menu.style.display = 'none';
            });
        }
    });
});