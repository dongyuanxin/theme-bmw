const Marked = window.marked;

// Marked.setOptions({
//   highlight: (code, lang) =>
//     Prism.highlight(code, Prism.languages[lang || "markup"], lang || "markup")
// });

const mdToHTML = content => Marked(content)

const getRealPath = (pathname, desc = false) => {
  if(!pathname) {
    pathname = window.location.pathname
  }
  let names = pathname.split("/")
  if(desc === false) {
    for(let i = names.length - 1; i >= 0; --i) {
      let name = names[i].trim()
      if(name.length > 0 && name !== "/" && name !== "index.html") {
        return name
      }
    }
  } else {
    for(let i = 0 ; i < names.length; ++i) {
      let name = names[i].trim()
      if(name.length > 0 && name !== "/" && name !== "index.html") {
        return name
      }
    }
  }
  return "/"
}

const generateToc = () => {
  if(document.body.clientWidth < 768) {
    return;
  }
  $("#sidebar-header").append("<span> Table of Contents </span>");
  let sidebar = $("#sidebar"),
    app = $("#app"),
    topBtn = $(".back-to-top");
  app.addClass("sidebar-active");
  sidebar.addClass("sidebar-active");
  if (document.body.clientWidth <= 768) {
    topBtn.attr("style", "right: calc(2rem + 200px);");
  } else {
    topBtn.attr("style", "right: calc(2rem + 250px);");
  }
  topBtn.addClass("sidebar-active");
  
  $(".markdown-body")
    .find("h2,h3,h4,h5,h6")
    .each(function(i, item) {
      let tag = $(item).get(0).localName;
      let tagID = $(item)
        .text()
        .replace(/\s{2}/g, "");
      let idName = $(item).attr("id");
      $("#sidebar-toc").append(`
      <li class="toc-${tag}">
        <a data-id=#${idName}>
          ${tagID}
        </a>
      </li>
    `);
    });
  $("#sidebar-toc").on("click", "li", function() {
    let idName = $(this)
      .find("a")
      .data("id");
    $("html, body").animate(
      {
        scrollTop: $(idName).offset().top - $(".header-wrap").height()
      },
      { duration: 500, easing: "swing" }
    );
    return false;
  });
}
