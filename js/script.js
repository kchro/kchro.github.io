let lang = 'en';
const data = {
  name: 'kchro',
  jp_name: 'ケイクロ',
  email: 'nlp.kchro',
  host: 'gmail.com',
  linkedin: 'jeff-hara-670784104',
  bio: '../archive/2018/05/052818_bio.md',
  jp_bio: '../archive/2018/05/052818_bio_jp.md',
  github: 'kchro'
}

function readTextFile(file, callback) {
  let rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4) {
          if (rawFile.status === 200 || rawFile.status == 0) {
              callback(rawFile.responseText);
          }
      }
  }
  rawFile.send(null);
}

function renderMeishi() {
  let name = document.querySelector('.meishi-name');
  name.innerHTML = (lang === 'en') ? data.name : data.jp_name;

  let bio = document.querySelector('.meishi-bio');
  let bio_file = (lang === 'en') ? data.bio : data.jp_bio;

  readTextFile(bio_file, function(responseText) {
    bio.innerHTML = marked(responseText);
  });

  let lang_toggle = document.querySelector('.meishi-lang');
  lang_toggle.innerHTML = (lang === 'en') ? '日本語' : 'English';
}

$('.meishi-lang').click(function() {
  lang = (lang == 'en') ? 'jp' : 'en';
  renderMeishi();
});

$(document).ready(function() {
  let email = document.querySelector('.meishi-email');
  email.innerHTML = data.email+'@'+data.host;

  let github = document.querySelector('.meishi-github');
  github.href = 'https://github.com/'+data.github;

  let linkedin = document.querySelector('.meishi-linkedin');
  linkedin.href = 'http://www.linkedin.com/in/'+data.linkedin;

  renderMeishi();
});
