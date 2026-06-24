// Tiny retrieval-practice widget shared by all lessons.
// Markup contract:
//   <div class="quiz" data-answer="1">
//     <div class="q">Question?</div>
//     <button class="opt">Option A</button>   (index 0)
//     <button class="opt">Option B</button>   (index 1 = correct here)
//     <div class="feedback" data-correct="Why right." data-wrong="Nudge."></div>
//   </div>
// Options are deliberately styled identically and equal-length so formatting
// leaks no clue — the point is to force genuine recall, not pattern-matching.

document.querySelectorAll('.quiz').forEach(function (quiz) {
  var answer = parseInt(quiz.getAttribute('data-answer'), 10);
  var opts = quiz.querySelectorAll('.opt');
  var fb = quiz.querySelector('.feedback');
  var done = false;

  opts.forEach(function (opt, i) {
    opt.addEventListener('click', function () {
      if (done) return;
      done = true;
      opts[answer].classList.add('correct');
      if (i !== answer) opt.classList.add('wrong');
      if (fb) {
        fb.textContent = (i === answer)
          ? (fb.getAttribute('data-correct') || 'Correct.')
          : (fb.getAttribute('data-wrong') || 'Not quite — see the highlighted answer.');
        fb.classList.add('show');
      }
    });
  });
});
