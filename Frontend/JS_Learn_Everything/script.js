const reels = [
    {
        username: "techwithran",
        likeCount: 12900,
        isLiked: false,
        commentCount: 342,
        caption: "This trick will save you HOURS in JavaScript 🔥",
        video: "./reels/Tech.mp4",
        userProfile: "https://randomuser.me/api/portraits/men/11.jpg",
        shareCount: 88,
        isFollowed: true
    },
    {
        username: "cookingbyria",
        likeCount: 84500,
        isLiked: true,
        commentCount: 1290,
        caption: "10-minute pasta that actually tastes good 😌🍝",
        video: "./reels/cooking.mp4",
        userProfile: "https://randomuser.me/api/portraits/women/22.jpg",
        shareCount: 510,
        isFollowed: false
    },
    {
        username: "fitwitharjun",
        likeCount: 42000,
        isLiked: false,
        commentCount: 554,
        caption: "Home workout — no equipment needed 💪",
        video: "./reels/fitness.mp4",
        userProfile: "https://randomuser.me/api/portraits/men/33.jpg",
        shareCount: 190,
        isFollowed: true
    },
    {
        username: "travel.krit",
        likeCount: 155000,
        isLiked: true,
        commentCount: 2030,
        caption: "Sunrise in Mountains ☀️🏔️",
        video: "./reels/travel.mp4",
        userProfile: "https://randomuser.me/api/portraits/women/44.jpg",
        shareCount: 710,
        isFollowed: false
    },
    {
        username: "designhub",
        likeCount: 9800,
        isLiked: false,
        commentCount: 120,
        caption: "UI tip: stop overusing shadows 😭",
        video: "./reels/design.mp4",
        userProfile: "https://randomuser.me/api/portraits/men/55.jpg",
        shareCount: 42,
        isFollowed: false
    },
    {
        username: "dailycoding",
        likeCount: 56000,
        isLiked: true,
        commentCount: 800,
        caption: "If you understand this, you’re not a beginner anymore 👀",
        video: "./reels/coding.mp4",
        userProfile: "https://randomuser.me/api/portraits/men/66.jpg",
        shareCount: 260,
        isFollowed: true
    },
    {
        username: "sneakeradda",
        likeCount: 21300,
        isLiked: false,
        commentCount: 310,
        caption: "Nike Air Force vs Dunk — real difference 👇",
        video: "./reels/sneakers.mp4",
        userProfile: "https://randomuser.me/api/portraits/men/77.jpg",
        shareCount: 96,
        isFollowed: false
    },
    {
        username: "makeupbyhira",
        likeCount: 72000,
        isLiked: false,
        commentCount: 1430,
        caption: "Soft glam look under 5 minutes ✨",
        video: "./reels/makeup.mp4",
        userProfile: "https://randomuser.me/api/portraits/women/12.jpg",
        shareCount: 350,
        isFollowed: true
    },
    {
        username: "funnyraju",
        likeCount: 310000,
        isLiked: true,
        commentCount: 9020,
        caption: "Funny dad 😂",
        video: "./reels/dad.mp4",
        userProfile: "https://randomuser.me/api/portraits/men/88.jpg",
        shareCount: 1800,
        isFollowed: false
    },
    {
        username: "artwithsana",
        likeCount: 16400,
        isLiked: false,
        commentCount: 280,
        caption: "Trying a new watercolor style 🌊",
        video: "./reels/Art.mp4",
        userProfile: "https://randomuser.me/api/portraits/women/99.jpg",
        shareCount: 64,
        isFollowed: true
    }
];

let heart = document.querySelector('#heart')

let allReels = document.querySelector('.all-reels');

function addData() {
    let sum = ''
    reels.forEach((elem, idx) => {

        sum = sum + `                <div class="reel">
                    <video id="main-img" src=${elem.video} alt="" autoplay loop mute > </video>
                    <div class="bottom">
                        <div class="user">
                            <div class = "user-profile">
                            <img src= ${elem.userProfile} alt="">
                            <h4>${elem.username}</h4>
                            </div>
                            <button class = 'follow' id=${idx}>${elem.isFollowed ? 'Followed' : 'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                            <h4 class="like-icon">${elem.isLiked ? '<i class="ri-heart-3-fill love"></i>' : '<i class="ri-heart-3-line"></i>'}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comments">
                            <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
                        </div>
                    </div>
                </div>`
    })
    allReels.innerHTML = sum
}
addData();
const videos = document.querySelectorAll("video");

allReels.addEventListener('click', (dets) => {
    if (dets.target.className == 'like') {
        if (reels[dets.target.id].isLiked) {
            reels[dets.target.id].likeCount--;
            reels[dets.target.id].isLiked = false;
            addData()
        }
        else {
            reels[dets.target.id].likeCount++;
            reels[dets.target.id].isLiked = true;
            addData()
        }
    }
    if (dets.target.className == 'follow') {
        if (reels[dets.target.id].isFollowed) {
            reels[dets.target.id].isFollowed = false;
            addData()
        }
        else {
            reels[dets.target.id].isFollowed = true;
            addData()
        }
    }

})

function pauseAll() {
    videos.forEach(v => v.pause());
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            pauseAll();
            entry.target.play();
        }
    });
}, { threshold: 0.6 });

videos.forEach(video => observer.observe(video));


