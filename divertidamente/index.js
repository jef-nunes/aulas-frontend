class Map {
    constructor(){
        this.matrix = [];
        this.rowNames = [];
    }
    setMatrix(matrix){
        console.log(matrix)
        this.matrix = matrix;
    }
    setRowNames(rowNames){
        this.rowNames = rowNames
    }
    getElement(rowName,columnIndex){
        let rowIndex = this.rowNames.indexOf(rowName);
        return this.matrix[rowIndex][columnIndex];
    }
    getRow(rowName){
        let rowIndex = this.rowNames.indexOf(rowName);
        return this.matrix[rowIndex];
    }
}

class Handler1{
    static map = new Map();
    static targetIMG;
    static dynamicTitle;
    
    static changeImage(event){
        let lastClickID = event.target.id;
        console.log('Last click on button with ID: ', lastClickID)
        let btnRow = Handler1.map.getRow('buttons-id');
        let imgRow = Handler1.map.getRow('images-link');
        let dynTitleClassesRow = Handler1.map.getRow('dyn-title-classes');
        let dynTitleTextRow = Handler1.map.getRow('dyn-title-text');
        let colIndex = btnRow.indexOf(lastClickID);
        Handler1.targetIMG.src = imgRow[colIndex];
        Handler1.dynamicTitle.classList = [];
        Handler1.dynamicTitle.classList.add(dynTitleClassesRow[colIndex]);
        Handler1.dynamicTitle.innerText = dynTitleTextRow[colIndex];
    }

    static setListeners(){
        let btnRow = Handler1.map.getRow('buttons-id');
        for(let i=0;i<btnRow.length;i++){
            let btnID = btnRow[i];
            console.log(btnID);
            let btnHTMLElement = document.getElementById(btnID);
            btnHTMLElement.addEventListener('click',Handler1.changeImage);
        }
    }
    static activate(){
        Handler1.targetIMG = document.getElementById('emotion-img');
        Handler1.dynamicTitle = document.getElementById('emotion-title');
        Handler1.map.setMatrix([
            ['btn-A0','btn-A1','btn-A2','btn-A3','btn-A4'],
            ['../images/picture_01.png','../images/picture_02.png',
                '../images/picture_03.png','../images/picture_04.png',
                '../images/silhueta.png'],
                ['emotion-title-anger','emotion-title-happy','emotion-title-disgust',
                    'emotion-title-sad','emotion-title-default'],
                    ['Raiva','Alegria','Nojinho','Tristeza','Selecione uma emoção']
        ])
        Handler1.map.setRowNames(['buttons-id','images-link','dyn-title-classes','dyn-title-text']);
        Handler1.setListeners();
    }
}

function main(){
console.log('index.js main()')
Handler1.activate();
}


document.addEventListener("DOMContentLoaded",main);

