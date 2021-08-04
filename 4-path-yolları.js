//Bulunan path yolunu gösterir
const path = require('path');
console.log(path.sep)
//Bulunduğun dizinden sonraki folderları gösterir
const filePath = path.join('/content/','subfolder','text.txt');
console.log(filePath)
//Bulunduğun yer ve sonrasındaki Tüm dizinleri gösterir.
const base= path.basename(filePath)
console.log(base)
//Bulunduğun yer ve sonrasaındaki dizinleri gösterir ve dosyaları da gösterir.
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')