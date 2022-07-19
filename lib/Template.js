module.exports = {
    generateHtml( teamArr ) {
       const HtmlArr = [];
 
       const htmlHeader = `
 <!DOCTYPE html>
 <html lang = "en">
 <head>
    <meta charset = "UTF-8">
    <meta name = "viewport" content = "width = device-width, initial scale = 1.0">
    <meta http-equiv = "X-UA-Compatible" content = "ie = edge">
    <title>Team Roster</title>
    <link rel = "stylesheet" href = "../src/styles.css">
 </head>
 <body>
    `;
       HtmlArr.push( htmlHeader);
 
       // Loop through the teamArr array
       for ( let i = 1; i < teamArr.length; i++ ) {
          let teamHtml = `
          <div class = "employee-card">
             <div class = "employee-card-top">
                <h2>${teamArr[i].name}</h2>
                `;
 
                teamHtml += `
             </div>
             <div class = "employee-card-bottom">
                <p><b>Employee ID:</b> ${teamArr[i].id}</p>
                <P><b>Email:</b><br><a href = "mailto:${teamArr[i].email}">${teamArr[i].email}</a></p>
          `;
 
          if ( teamArr[ i ].officeNumber ) {
             teamHtml += `<p><b>Office Number:</b><br>${teamArr[ i ].officeNumber}</p>`;
          }
          
          else if (teamArr[ i ].github ) {
             teamHtml += `<p><b>GitHub:</b><br><a href = "https://github.com/${teamArr[ i ].github}">${teamArr[ i ].github}</a></p>`;
          }
          
          else if ( teamArr[ i ].school ) {
             teamHtml += `<p><b>School:</b><br>${teamArr[ i ].school}</p>`;
          };
 
          teamHtml += `
             </div>
          </div>
          `;
          HtmlArr.push( teamHtml );
       };
 
       const htmlFooter = `
    </div>   
 </body>
 </html>
 `;
       HtmlArr.push ( htmlFooter );
 
       return HtmlArr;
    }
 };