document.addEventListener('DOMContentLoaded', function () {
    const reviews = document.querySelectorAll('.review');
    let currentReview = 0;
  
    function showReview(index) {
      reviews.forEach(review => review.classList.remove('active'));
      reviews[index].classList.add('active');
    }
  
    document.getElementById('prev-review').addEventListener('click', function () {
      currentReview = (currentReview + reviews.length - 1) % reviews.length;
      showReview(currentReview);
    });
  
    document.getElementById('next-review').addEventListener('click', function () {
      currentReview = (currentReview + 1) % reviews.length;
      showReview(currentReview);
    });
  
    showReview(currentReview);
  });
  