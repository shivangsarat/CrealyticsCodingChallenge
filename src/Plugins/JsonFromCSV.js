

export const getJsonFromCSV = csv => {
    let lines = csv.split("\n");
    let result = [];
    let headers = lines[0].split(",")
    
    for(var i=1;i<lines.length;i++){
        var obj = {};
        var currentline=lines[i].split(",");
    
        for(var j=0;j<headers.length;j++){
            if (j < 6) {
                if (currentline[3] === 'male' || currentline[3] === 'female' || currentline[3] === 'unisex') {
                    obj[headers[0]] = currentline[0].replace('"', '').replace("s.", "") + currentline[1].replace('"', '');
                    obj[headers[j]] = currentline[j+1];
                } else if (currentline[2] === 'male' || currentline[2] === 'female' || currentline[2] === 'unisex') {
                    obj[headers[j]] = currentline[j];
                }
            } else {
                let additional_image_link = []
                for (let k = j; k < currentline.length; k++) {
                    const element = currentline[k].replace('"', '').replace(' ', '');
                    additional_image_link.push(element)
                }
                obj[headers[j]] = additional_image_link;
            }
            
        }
        result.push(obj);
    
    }
    return result;
}