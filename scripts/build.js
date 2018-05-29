const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const React = require("react");
const ReactDOMServer = require("react-dom/server");

function writeFile(file, contents) {
  mkdirp.sync(path.dirname(file));
  fs.writeFileSync(file, contents);
}

function renderPage(element) {
  return (
    "<!DOCTYPE html>" + ReactDOMServer.renderToStaticMarkup(element)
  );
}

const e = React.createElement;

function HostPage({ chunk, data, title = "Getting Started React" }) {
  return e(
    "html",
    null,
    e(
      "head",
      null,
      e("meta", { charSet: "utf-8" }),
      e("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }),
      e("title", null, title),
      data &&
        e("script", {
          dangerouslySetInnerHTML: {
            __html: `window.__DATA__ = ${JSON.stringify(data)}`
          }
        })
    ),
    e(
      "body",
      null,
      e("div", { id: "app" }),
      e("script", { src: "/shared.js" }),
      e("script", { src: `/${chunk}.js` })
    )
  );
}

const publicDir = path.resolve(__dirname, "..", "public");
const lessonsDir = path.resolve(__dirname, "..", "lessons");
const lessonDirs = fs
  .readdirSync(lessonsDir)
  .map(file => path.join(lessonsDir, file))
  .filter(file => fs.statSync(file).isDirectory());

const lessons = [];
lessonDirs.forEach(dir => {
  const base = path.basename(dir);
  const match = base.match(/^(\d+)-(.+)$/);
  //check that lesson folder is valid format 'XX-Title-Here'
  //utils is excluded
  if(match){
  const lesson = {
    number: match[1],
    name: match[2].replace(/-/g, " ")
  };
  
  ["lecture", "exercise", "solution"].forEach(name => {
    if (fs.existsSync(path.join(dir, `${name}.js`))) {
      console.log(`Building /${base}/${name}.html...`);
      
      writeFile(
        path.join(publicDir, base, `${name}.html`),
        renderPage(e(HostPage, { chunk: `${base}-${name}` }))
      );
      
      lesson[name] = `/${base}/${name}.html`;
    }
  });
  
  lessons.push(lesson);
}
});

console.log(`Building /index.html...`);

writeFile(
  path.join(publicDir, "index.html"),
  renderPage(e(HostPage, { chunk: "index", data: { lessons } }))
);
