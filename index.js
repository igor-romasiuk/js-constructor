const model = [
    {type: 'title', value: 'hello world'},
    {type: 'text', value: 'here text'},
    {type: 'columns', value: [
        '111111111111',
        '121112112111111',
        '1311113311111131'
    ]}
]

const site = document.querySelector('#site')

model.forEach(block => {
    let html = ''

    if (block.type === 'title') {
        html = `
            <div class="row">
                <div class="col-sm">
                    <h1>${block.value}</h1>
                </div>
            </div>
        `
    } else if (block.type === 'text') {
        html = `
            <div class="row">
                <div class="col-sm">
                    <p>${block.value}</p>
                </div>
            </div>
        `
    } else if (block.type === 'columns') {
        
    }

})