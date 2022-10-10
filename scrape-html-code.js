
const scraping = require('website-scraper');

let options = {

      urls: ['https://www.bothouniversity.com/'],
      directory: './botho-homepage',        
      
};

    scraping(options).then((result) => {
        console.log("Seccesfully Scraped..!");
}).catch((err) =>{ 
        console.log("Error!!",err);
}); 











