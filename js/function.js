window.addEventListener('load', (event) => {
		
	const burger = document.getElementById("burger");
	const ul = document.querySelector("nav ul");

	let mainPosts = document.querySelectorAll(".main-post");
	let posts = document.querySelectorAll(".post");

	let i = 0;
	let postIndex = 0;
	let currentPost = posts[postIndex];
	let currentMainPost = mainPosts[postIndex];

	let progressInterval = setInterval(progress, 80); // 180

	function progress() {
		if(currentPost != undefined){
			if (i === 80) {
			i = -5;
			// reset progress bar
			currentPost.querySelector(".progress-bar__fill").style.width = 0;
			document.querySelector(
			".progress-bar--primary .progress-bar__fill"
			).style.width = 0;
			currentPost.classList.remove("post--active");

			postIndex++;

			currentMainPost.classList.add("main-post--not-active");
			currentMainPost.classList.remove("main-post--active");

			// reset postIndex to loop over the slides again
			if (postIndex === posts.length) {
			postIndex = 0;
			}

			currentPost = posts[postIndex];
			currentMainPost = mainPosts[postIndex];
			} 
			else {
			i++;
			currentPost.querySelector(".progress-bar__fill").style.width = `${i}%`;
			document.querySelector(
			".progress-bar--primary .progress-bar__fill"
			).style.width = `${i}%`;
			currentPost.classList.add("post--active");

			currentMainPost.classList.add("main-post--active");
			currentMainPost.classList.remove("main-post--not-active");
			}
		}
	}

	burger.addEventListener("click", function (){
		burger.classList.toggle("show-x");
		ul.classList.toggle("show");
	});

	
});

