$(document).ready(function(){
    $('.post-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow:$('.next'),
        prevArrow:$('.prev'),
      });

      $('.tech-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow:$('.nextone'),
        prevArrow:$('.previous'),
      });

      const posts = document.querySelectorAll('.post');
        const modal = document.getElementById('myModal');
        const modalContent = document.querySelector('.modal-content');

        posts.forEach(post => {
            post.addEventListener('click', () => {
                // Open the modal with the larger image
                modal.style.display = 'block';
            });
        });

        // Close the modal when clicking outside the image
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
});

