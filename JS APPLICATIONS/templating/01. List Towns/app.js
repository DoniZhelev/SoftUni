const elements = {
    input: () => document.querySelector('input#towns'),
    button:() => document.querySelector('button#btnLoadTowns'),
    root:() => document.querySelector('div#root'),
   clear:() => document.getElementById('towns')
};

elements.button().addEventListener('click', getInputInformation);

function getInputInformation(e) {
    e.preventDefault();
    const { value } = elements.input();
    const  towns = value.split(/[, ]+/g).map((t)=> {return {name: t}})
    elements.clear().value = ''
    
    apeendTowns(towns)
}

function apeendTowns(towns) {
    getTemplate()
    .then((templateSource)=> {
        const template = Handlebars.compile(templateSource)
        const htmlResult = template({towns});
        elements.root().innerHTML = htmlResult
      
        })
}

function getTemplate() {
    return fetch('./template.hbs').then((r)=> r.text())
}




        
