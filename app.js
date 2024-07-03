const questions = document.querySelectorAll('.ques');
const details = document.querySelectorAll('.details');
const box = document.getElementById('faq')

questions.forEach((question, index) => {
    // display the details
    question.addEventListener('click', () => {

        details.forEach((detail) => {
        detail.style.display = 'none';
        });
        
        question.style.borderRadius = '10px 10px 0px 0px'
        const currentDetails = question.nextElementSibling;
        currentDetails.style.display = (currentDetails.style.display === 'block') ? 'none' : 'block';

        box.style.height = '600px';
    }); 
});