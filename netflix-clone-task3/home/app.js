

let cato_bx = document.getElementById('cato_bx');
let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');

left_scroll.addEventListener('click', () => {
    cato_bx.scrollLeft -= 100;
})
right_scroll.addEventListener('click', () => {
    cato_bx.scrollLeft += 100;
})


let mvoes_bx_1 = document.getElementById('mvoes_bx_1');
let left_scroll1 = document.getElementById('left_scroll1');
let right_scroll1 = document.getElementById('right_scroll1');

left_scroll1.addEventListener('click', () => {
    mvoes_bx_1.scrollLeft -= 150;
})
right_scroll1.addEventListener('click', () => {
    mvoes_bx_1.scrollLeft += 150;
})




// year and a-z box start 
let year = document.getElementById('year');
let a_z = document.getElementById('a_z');

year.addEventListener('click', () => {
    year.classList.toggle('show_year1')
});
a_z.addEventListener('click', () => {
    a_z.classList.toggle('show_year1')
});

// header slider start

let header_dur = document.getElementById('header_dur');
let header_gen = document.getElementById('header_gen');
let header_title = document.getElementById('header_title');
let header_pra = document.getElementById('header_pra');
let header = document.getElementsByTagName('header')[0];
let slider_btn = document.getElementsByClassName('slider');

const slider_load = () => {
    setTimeout(() => {
        header.style.background = "url('img/121213.jpg') no-repeat center center/cover";
        header_dur.innerText = "3";
        header_gen.innerHTML = `<i class="fas fa-star"></i>8.5 IMdb
        <span>Fantasy / Adventure / Sci-Fi / Horror</span>`;
        header_title.innerText = "The Witcher";
        header_pra.innerText = "The story begins with Geralt of Rivia, Crown Princess Ciri of Cintra, and the quarter-elf sorceress Yennefer of Vengerberg at different points of time, exploring formative events that shape their characters throughout the first season, before eventually merging into a single timeline.";
        slider_btn[0].style.background = "#fff";
        slider_btn[1].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[2].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[3].style.background = "rgb(184, 184, 184, .1)";
    }, 1000);
    setTimeout(() => {
        header.style.background = "url('img/121214.jpg') no-repeat center center/cover";
        header_dur.innerText = "2";
        header_gen.innerHTML = `<i class="fas fa-star"></i>8.5 IMdb
        <span>Famliy / Adventure / Sci-Fi</span>`;
        header_title.innerText = "Sweet Tooth";
        header_pra.innerText = "Sweet Tooth will drop viewers into the world of a young deer-boy named Gus whose been sequestered away in safety for a decade. A product of the unexpected results of “The Great Crumble” 10 years ago, Gus is a human-animal hybrid.";
        slider_btn[0].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[1].style.background = "#fff";
        slider_btn[2].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[3].style.background = "rgb(184, 184, 184, .1)";
    }, 5000);
    setTimeout(() => {
        header.style.background = "url('img/121215.jpeg') no-repeat center center/cover";
        header_dur.innerText = "1";
        header_gen.innerHTML = `<i class="fas fa-star"></i>9.0 IMdb
        <span>Sci-Fci / Action / Thriller</span>`;
        header_title.innerText = "Bird Box";
        header_pra.innerText = "In a post-apocalyptic world, Malorie Hayes informs two young children that they will go down a river in a rowboat. She sternly instructs them not to remove their blindfolds, or they will dieFive years earlier, a pregnant Malorie is visited by her sister, Jessica..";
        slider_btn[0].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[1].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[2].style.background = "#fff";
        slider_btn[3].style.background = "rgb(184, 184, 184, .1)";
    }, 10000);
    setTimeout(() => {
        header.style.background = "url('img/121216.jpg') no-repeat center center/cover";
        header_dur.innerText = "6";
        header_gen.innerHTML = `<i class="fas fa-star"></i>9.2 IMdb
        <span>Comady / Action / Demon / Crime</span>`;
        header_title.innerText = "Lucifer";
        header_pra.innerText = "The series focuses on Lucifer Morningstar, a handsome, and powerful angel who was cast out of Heaven for his rebellion. As the Devil, Lucifer tires of the millennia he spent being the Lord of Hell, punishing people. Becoming increasingly bored and unhappy with his life in Hell..";
        slider_btn[0].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[1].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[2].style.background = "#fff";
        slider_btn[3].style.background = "rgb(184, 184, 184, .1)";
    }, 15000);
   
}

setInterval(slider_load, 30000);
slider_load();

// video controal start 

let plays = document.getElementById('play');
let videos = document.getElementById('video');
let play_btn = document.getElementById('play_btn');


play_btn.addEventListener('click', () => {
    videos.play();
    plays.classList.add('bi-pause-fill');
    plays.classList.remove('bi-play-fill');
});

plays.addEventListener('click', () => {
    if (videos.paused || videos.currentTime <= 0) {
        plays.classList.add('bi-pause-fill');
        plays.classList.remove('bi-play-fill');
        videos.play();
    } else {
        plays.classList.remove('bi-pause-fill');
        plays.classList.add('bi-play-fill');
        videos.pause();
    }
});

// video time update 

videos.addEventListener('timeupdate', () => {
    let start_time = document.getElementById('start_time');
    let end_time = document.getElementById('end_time');
    let video_duration = videos.duration;
    let min = Math.floor(video_duration / 60);
    let hour = Math.floor(min / 60);
    let sec = Math.floor(video_duration % 60);
    let video_current_time = videos.currentTime;


    let start_min = Math.floor(video_current_time / 60);
    let start_sec = Math.floor(video_current_time % 60);
    let start_hour = Math.floor(start_min / 60);

    if (start_min < 10) {
        start_min = "0" + start_min;
    }
    if (start_sec < 10) {
        start_sec = "0" + start_sec;
    }
    start_time.innerText = start_min + ":" + start_sec;

    if (start_hour < 10) {
        start_hour = "0" + start_hour;
    }

    if (start_min == 60 || start_min > 60) {
        start_time.innerText = start_hour + ":" + start_min + ":" + start_sec;
    }

    // end 
    let end_min = min - start_min;
    let end_sec = video_duration - start_sec;
    let end_hour = hour - start_hour;

    let end_mins = Math.floor(end_min % 60);
    if (end_mins < 10) {
        end_mins = "0" + end_mins;
    }
    let end_secs = Math.floor(end_sec % 60);
    if (end_secs < 10) {
        end_secs = "0" + end_secs;
    }
    let end_hours = Math.floor(end_min / 60);
    if (end_hours < 10) {
        end_hours = "0" + end_hours;
    }

    end_time.innerText = "-" + end_mins + ":" + end_secs;

    if (end_min == 60 || end_min > 60) {
        end_time.innerText = "-" + end_hours + ":" + end_mins + ":" + end_secs;
    }


    // seek bar start

    let seek = document.getElementById('seek');
    let seek_2 = document.getElementById('seek_2');
    let seek_dot = document.getElementById('seek_dot');


    let progressbar = parseInt((videos.currentTime / videos.duration) * 100);

    seek.value = progressbar;
    let seekbar = seek.value;
    seek_2.style.width = `${seekbar}%`;
    seek_dot.style.left = `${seekbar}%`;

    // seekbar value change 
    let sec_30 = document.getElementById('sec_30');
    seek.addEventListener('change', () => {
            videos.currentTime = seek.value * videos.duration / 100;
            sec_30.addEventListener('click', () => {
                videos.currentTime = seek.value * ((videos.duration - 30) / 100);
            });
        })
        // video end event 
    videos.addEventListener('ended', () => {
        plays.classList.remove('bi-pause-fill');
        plays.classList.add('bi-play-fill');
    })
});

// volume change

let start_seekbar_end = document.querySelector('.start_seekbar_end');
let cc_vol_screen = document.querySelector('.cc_vol_screen');
let vol = document.getElementById('vol');
let vol_icon = document.getElementById('vol_icon');

vol_icon.addEventListener('click', () => {
    cc_vol_screen.classList.toggle('cc_vol');
    start_seekbar_end.classList.toggle('start_seekbar');
    vol.classList.toggle('input_vol');
});

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a = vol.value;
    videos.volume = vol_a / 100;
});

// full screen start 
let full_screen = document.getElementById('full_screen');
full_screen.addEventListener('click', () => {
    videos.requestFullscreen();
});

// video box start
let title_video = document.getElementsByClassName('title_video');
let video_1 = document.getElementsByClassName('video_1');
video_1[0].addEventListener('click', () => {
    videos.src = "video/Witcher.mp4";
    videos.play();
    title_video[0].innerText = "The Witcher";
    plays.classList.add('bi-pause-fill');
    plays.classList.remove('bi-play-fill');
});
video_1[1].addEventListener('click', () => {
    videos.src = "video/SweetTooth.mp4";
    videos.play();
    title_video[0].innerText = "Sweet Tooth";
    plays.classList.add('bi-pause-fill');
    plays.classList.remove('bi-play-fill');
});
video_1[2].addEventListener('click', () => {
    videos.src = "video/BirdBox.mp4";
    videos.play();
    title_video[0].innerText = "Bird Box";
    plays.classList.add('bi-pause-fill');
    plays.classList.remove('bi-play-fill');
});


// Movies Box Set



// letter_a box start 
let letter_a = document.getElementById('letter_a');

let letter_a_array = movies.filter((e) => {
    return e.letter == "a";
})

window.addEventListener('load', () => {
        letter_a_array.forEach(element => {
            const { img, title, year, url, rate } = element;
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

            letter_a.appendChild(card);
        });
    })
    // letter_b box start 
let letter_b = document.getElementById('letter_b');

let letter_b_array = movies.filter((e) => {
    return e.letter == "b";
})

window.addEventListener('load', () => {
        letter_b_array.forEach(element => {
            const { img, title, year, url, rate } = element;
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

            letter_b.appendChild(card);
        });
    })
    // letter_t box start 
let letter_t = document.getElementById('letter_t');

let letter_t_array = movies.filter((e) => {
    return e.letter == "t";
})

window.addEventListener('load', () => {
    letter_t_array.forEach(element => {
        const { img, title, year, url, rate } = element;
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

        letter_t.appendChild(card);
    });
});


// rate8 box start 
let rate8 = document.getElementById('rate8');

let rate8_array = movies.filter((e) => {
    return e.rate >= 8;
})

window.addEventListener('load', () => {
    rate8_array.forEach(element => {
        const { img, title, year, url, rate } = element;
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

        rate8.appendChild(card);
    });
});
// rate4 box start 
let rate4 = document.getElementById('rate4');

let rate4_array = movies.filter((e) => {
    return e.rate <= 8;
})

window.addEventListener('load', () => {
    rate4_array.forEach(element => {
        const { img, title, year, url, rate } = element;
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

        rate4.appendChild(card);
    });
});


// movies box2 end


// btns start 

let all_btn = document.getElementById('all_btn');

all_btn.addEventListener('click', () => {
    all_btn.classList.toggle('cato_button_active');
    all.classList.toggle('box2_actives');
});

let latest_btn = document.getElementById('latest_btn');

latest_btn.addEventListener('click', () => {
    latest_btn.classList.toggle('cato_button_active');
    latest.classList.toggle('box2_actives');
});
let year2022__btn = document.getElementById('year2022__btn');

year2022__btn.addEventListener('click', () => {
    year2022__btn.classList.toggle('cato_button_active');
    year_2022.classList.toggle('box2_actives');
});
let year2021__btn = document.getElementById('year2021__btn');

year2021__btn.addEventListener('click', () => {
    year2021__btn.classList.toggle('cato_button_active');
    year_2021.classList.toggle('box2_actives');
});
let year2020__btn = document.getElementById('year2020__btn');

year2020__btn.addEventListener('click', () => {
    year2020__btn.classList.toggle('cato_button_active');
    year_2020.classList.toggle('box2_actives');
});


let letter_a_btn = document.getElementById('letter_a_btn');

letter_a_btn.addEventListener('click', () => {
    letter_a_btn.classList.toggle('cato_button_active');
    letter_a.classList.toggle('box2_actives');
});
let letter_b_btn = document.getElementById('letter_b_btn');

letter_b_btn.addEventListener('click', () => {
    letter_b_btn.classList.toggle('cato_button_active');
    letter_b.classList.toggle('box2_actives');
});
let letter_t_btn = document.getElementById('letter_t_btn');

letter_t_btn.addEventListener('click', () => {
    letter_t_btn.classList.toggle('cato_button_active');
    letter_t.classList.toggle('box2_actives');
});

// rat change 

let change_input = document.getElementById('change_input');

change_input.addEventListener('change', () => {
    if (change_input.value >= 8) {
        rate8.classList.add('box2_actives');
    } else {
        rate8.classList.remove('box2_actives');
    }
    if (change_input.value < 8) {
        rate4.classList.add('box2_actives');
    } else {
        rate4.classList.remove('box2_actives');
    }
});


let search_bx2 = document.getElementsByClassName('search_bx2')[0];


window.addEventListener('load', () => {
    movies.forEach(element => {
        const { img, title, year, url } = element;

        let card = document.createElement('a');
        card.href = url;
        card.innerHTML = ` <img src="${img}" alt="">
        <div class="content2">
            <h6>${title}</h6>
            <p>${year}</p>
        </div>`;
        search_bx2.appendChild(card);
    });
});


search.addEventListener('keyup', () => {
    let filter = search.value.toUpperCase();
    let a = search_bx2.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
        let b = a[i].getElementsByClassName('content2')[0];
        let c = b.getElementsByTagName('h6')[0];

        let TextValue = c.textContent || c.innerText;
        if (TextValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = '';
            search_bx2.style.visibility = "visible";
            search_bx2.style.opacity = 1;
        } else {
            a[i].style.display = 'none';
        }
        if (search.value == 0) {
            search_bx2.style.visibility = "hidden";
            search_bx2.style.opacity = 0;
        }
    }
})