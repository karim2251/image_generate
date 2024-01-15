const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5174;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.get('/dowimage', (req, res) => {
  const url = 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-YbJw28js1R3siPUZH3ZkJp10/user-i2zx92stnqvtXj9OrMPn8G23/img-sySd46KhgzbJyOrLDJEPw6al.png?st=2024-01-15T16%3A19%3A16Z&se=2024-01-15T18%3A19%3A16Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-01-15T12%3A34%3A15Z&ske=2024-01-16T12%3A34%3A15Z&sks=b&skv=2021-08-06&sig=LxXFkc9BA7v0g39dH/D/dN81/UJWhXafSr0dtrOSLKE%3D';
  const filePath = path.join('/home/karim/Documents', 'image.png');

  https.get(url, (response) => {
    if (response.statusCode !== 200) {
      console.error(`Failed to get image '${url}' (${response.statusCode})`);
      res.status(response.statusCode).send('Failed to download image');
      return;
    }

    const file = fs.createWriteStream(filePath);
    response.pipe(file);

    file.on('finish', () => {
      file.close(() => {
        console.log('Image downloaded successfully');
        res.send('Image downloaded successfully');
      });
    });
  }).on('error', (error) => {
    console.error(error);
    res.status(500).send('Internal Server Error');
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  
});
