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

$(document).ready(function() {
  const data = {
    email: 'nlp.kchro',
    host: 'gmail.com',
    linkedin: 'jeff-hara-670784104',
    bio: 'sample text',
    github: 'kchro'
  }

  let en = document.querySelector('.en');
  readTextFile('../archive/2018/05/052518_intro.md', function(responseText) {
    en.innerHTML = marked(responseText);
  });

  let jp = document.querySelector('.jp');
  readTextFile('../archive/2018/05/052518_intro_jp.md', function(responseText) {
    jp.innerHTML = marked(responseText);
  });

  let email = document.querySelector('.profile-email');
  email.innerHTML = data.email+'@'+data.host;
  let github = document.querySelector('.profile-github');
  github.innerHTML = '<a href="https://github.com/'+data.github+'">GitHub profile</a>';
  let linkedin = document.querySelector('.profile-linkedin');
  linkedin.innerHTML = '<a href="www.linkedin.com/in/'+data.linkedin+'">LinkedIn profile</a>';
});
