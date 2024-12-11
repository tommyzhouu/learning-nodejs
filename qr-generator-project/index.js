import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';


inquirer 
    .prompt([
        {
            message: "Enter the URL you want to convert to QR code: ",
            name: "URL",
        },
    ])
    .then((answers) => {
        const url = answers.URL;
        const qr_png = qr.image(url);
        qr_png.pipe(fs.createWriteStream('qr.png'));
        console.log('QR code generated successfully!');

        fs.writeFile("URL.txt", url, (err) => {
            if (err) throw err;
            console.log("The file has been successfully saved");
        })
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment");
        } else {
            console.log("An error occurred while generating QR code", error);
        }
    });
