const months_en = [
  '', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
]

function getDate(m, d, y) {
  if (lang === 'en') {
    const month = months_en[m];
    return month + ' ' + d + ', ' + y;
  } else {
    return y + '年' + m + '月' + d + '日';
  }
}

function renderArticle(filename) {
  const month = parseInt(filename.slice(0, 2));
  const date = parseInt(filename.slice(2, 4));
  const year = parseInt('20'+filename.slice(4, 6));

  const date_mdy = getDate(month, date, year);
  const file_obj = (lang === 'en') ? file_data[filename+'.md'] : file_data[filename+'_jp.md'];
  const article = renderObject({
    element: 'div',
    className: 'article',
    children: [
      {
        element: 'div',
        className: 'article-date',
        innerHTML: date_mdy
      },
      {
        element: 'div',
        className: 'article-body'
      }
    ]
  });

  return article;
}

function renderArticleCard(filename) {
  const month = parseInt(filename.slice(0, 2));
  const date = parseInt(filename.slice(2, 4));
  const year = parseInt('20'+filename.slice(4, 6));

  const date_mdy = getDate(month, date, year);
  const file_obj = (lang === 'en') ? file_data[filename+'.md'] : file_data[filename+'_jp.md'];
  const articleCard = renderObject({
    element: 'div',
    className: 'article-card',
    children: [
      {
        element: 'a',
        className: 'article-card-header',
        href: file_obj.html,
        innerHTML: file_obj.header
      },
      {
        element: 'div',
        className: 'article-card-date',
        innerHTML: date_mdy
      },
      {
        element: 'div',
        className: 'article-card-preview',
        innerHTML: marked(file_obj.preview)
      },
      {
        element: 'a',
        className: 'article-card-readmore',
        innerHTML: (lang === 'en') ? 'read more' : '詳しくはこちらへ'
      }
    ]
  });

  return articleCard;
}
