const fs = require ('fs')

function generateHTML(data) {
    
  }
  
  function generatePage (data) {
    return new Promise((resolve, reject) => {
      fs.writeFile("./newfile.md", generateMarkdown(data), (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve({ok: true, message: "NewFile created"});
      });
    });
  };

  module.exports = {
    generatePage,
  }