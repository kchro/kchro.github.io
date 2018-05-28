let lang = 'en';
const data = {
  name: 'kchro',
  jp_name: 'ケイクロ',
  email: 'nlp.kchro',
  host: 'gmail.com',
  linkedin: 'jeff-hara-670784104',
  bio: '/archive/2018/05/052818_bio.md',
  jp_bio: '/archive/2018/05/052818_bio_jp.md',
  github: 'kchro'
}

function renderObject(options) {
  const obj = document.createElement(options.element);

  Object.keys(options).forEach(function(attr) {
    // recursive case:
    // appendChild for each child
    if (attr == 'children') {
      options[attr].forEach(function(child) {
        if (child instanceof HTMLElement) {
          obj.appendChild(child);
        } else {
          obj.appendChild(renderObject(child));
        }
      });
    } else if (attr == 'style') {
      Object.keys(options[attr]).forEach(function(style_attr) {
        obj[attr][style_attr] = options[attr][style_attr];
      });
    } else if (attr != 'element') {
      // otherwise:
      // fill in attribute
      // for cases like "style.color", recurse and update attribute
      let attrs = attr.split(".");
      let obj_ptr = obj;

      for (let i = 0; i < attrs.length-1; i++) {
        obj_ptr = obj_ptr[attrs[i]];
      }

      obj_ptr[attrs[attrs.length-1]] = options[attr];
    }
  });

  return obj;
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
  renderContent();
});

$('.lang-toggle').click(function() {
  lang = (lang == 'en') ? 'jp' : 'en';
  let toggle = document.querySelector('.lang-toggle');
  toggle.innerHTML = (lang == 'en') ? '日本語' : 'English';
  renderMeishi();
  renderContent();
});

$(document).ready(function() {
  let toggle = document.querySelector('.lang-toggle');
  toggle.innerHTML = '日本語';

  let email = document.querySelector('.meishi-email');
  email.innerHTML = data.email+'@'+data.host;

  let github = document.querySelector('.meishi-github');
  github.href = 'https://github.com/'+data.github;

  let linkedin = document.querySelector('.meishi-linkedin');
  linkedin.href = 'http://www.linkedin.com/in/'+data.linkedin;

  renderMeishi();
});
