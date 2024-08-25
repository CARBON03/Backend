

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';



inquirer
  .prompt([
        {
          name: 'URL',
          message: "Type in Your URL",
        },
  ])

  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile('URL.txt', answers.URL, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      
    } else {
      // Something else went wrong
    }
  });


  
