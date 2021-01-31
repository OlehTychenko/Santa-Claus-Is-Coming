//  data from GitHub //

const BASE_URL = 'https://api.github.com/';
const api = {
    searchUsers: 'search/users'
};

const searchWrap = document.createElement('div');
searchWrap.innerHTML = '<h2>Find informations about our users<h2>';
searchWrap.classList = 'container';
searchWrap.style.textAlign = 'center'
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'User Login';
const but = document.createElement('button');
but.textContent = 'Search';
but.classList = 'btn btn-primary'
but.style.marginLeft = '30px';

document.getElementById('sendForm').append(searchWrap);
searchWrap.append(searchInput);
searchWrap.append(but);

function getUser(login) {
    return fetch(`${BASE_URL}${api.searchUsers}?q=${login}`)
        .then(value => value.json())
        .then(data => data)
};

const searchUser = () => {
    return new Promise((resolve, reject) => {
        const input = searchInput.value;
        resolve(input);
    })
        .then(input => getUser(input))
        .then(user => {

            if (document.getElementById(user.items[0].id) == null) {

                const userWrap = document.createElement('div');
                userWrap.id = user.items[0].id;
                const userPhoto = document.createElement('img');
                userPhoto.src = `${user.items[0].avatar_url}`;
                userPhoto.style.width = '200px';
                userPhoto.style.height = '200px';
                userPhoto.style.borderRadius = "50%";
                const userLogin = document.createElement('h2');
                userLogin.textContent = user.items[0].login;
                userLogin.classList = 'inBlock';
                const adminUser = document.createElement('div');
                adminUser.textContent = `Is Admin : ${user.items[0].site_admin}`;
                adminUser.classList = 'inBlock';
                const userType = document.createElement('div');
                userType.textContent = `User Type : ${user.items[0].type}`;
                userType.classList = 'inBlock';
                const likesBut = document.createElement('button');
                likesBut.textContent = 'How many girls like you?'
                const showLikes = document.createElement('div');
                showLikes.textContent = 'count: 0';
                handleClick = () => {
                    showLikes.textContent = Math.round((Math.random() * 10));
                };
                likesBut.addEventListener('click', handleClick);
                const butGameOfTrones = document.createElement('button');
                butGameOfTrones.textContent = "Who you will be in Game of Trones";
                secHandleClick = () => {
                    let a = Math.round((Math.random() * 10));
                    userPhoto.src = `./images/goftrones/img${a}.jpg`
                }
                butGameOfTrones.onclick = secHandleClick;

                searchWrap.append(userWrap);
                userWrap.append(userPhoto);
                userWrap.append(userLogin);
                userWrap.append(adminUser);
                userWrap.append(userType);
                userWrap.append(likesBut);
                userWrap.append(showLikes);
                userWrap.append(butGameOfTrones);
                userWrap.append(document.createElement('hr'));
                console.log(user);
            } else alert('already exists');
        })
}

but.addEventListener('click', searchUser);


//      add buttons     //


let cards = document.querySelectorAll(".assortment__goods-card")

let func = () => {
    return new Promise((resolve, reject) => {

        for (let i = 0; i < cards.length; i++) {
            // create and style
            let cardCount = document.createElement('p');
            cardCount.id = i + 1;
            cardCount.style.display = 'inline-block';
            cardCount.style.marginTop = '10px';
            let count = document.createElement('div');
            count.style.display = 'inline-block';
            // define id and append into html
            count.textContent = 0;
            count.id = `count${i + 1}`;
            cardCount.textContent = `Element ${i + 1}:`;
            cards[i].append(cardCount);
            cards[i].append(count);
        }
        resolve();
    }
    ).then(() => {
        for (let i = 0; i < cards.length; i++) {
            // create and style
            let cardBut = document.createElement('button');
            cardBut.textContent = `-`;
            cardBut.classList = ('btn btn-dark');
            cardBut.style.marginLeft = "10px"
            cardBut.style.marginRight = "10px"
            // func
            let countr = document.getElementById(`count${i + 1}`);
            let dicreaseCount = () => {
                if (+countr.textContent === 0) return;
                countr.textContent = parseInt(countr.textContent, 10) - 1;
            }
            cardBut.addEventListener('click', dicreaseCount)
            cards[i].append(cardBut);
        }
    }).then(() => {
        for (let i = 0; i < cards.length; i++) {
            let cardBut = document.createElement('button');
            cardBut.textContent = `+`;
            cardBut.classList = ('btn btn-dark');
            let countr = document.getElementById(`count${i + 1}`);
            let increaseCount = () => {
                countr.textContent = +countr.textContent + 1;
            }
            cardBut.addEventListener('click', increaseCount)
            cards[i].append(cardBut);
        }
    })
};

func();







//      add buttons end     //


//  why does it work?
//  who knows

$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});

// Отут знайшов (Прелоадер);
// http://gnatkovsky.com.ua/preloader-dlya-sajta-na-javascript-ili-kak-ne-pokazyvat-sajt-poka-polnostyu-ne-zagruzitsya.html