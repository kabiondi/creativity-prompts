
var prompt = ['First Prompt', 'Second Prompt', 'Third Prompt', 'Fourth Prompt'];
var idx = 0;

var runSlideshow = function () {
	var target = document.getElementById('prompt-area');
	if (!target) {return}
	if (idx >= prompt.length) {idx = 0}
	setTimeout(
		function() {
			console.log(prompt[idx]);
			idx ++;
			runSlideshow();
		}, 3000);
}