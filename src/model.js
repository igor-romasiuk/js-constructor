import image from './assets/image.png'

export const model = [
    {type: 'title', value: 'Конструктор сайтів на JavaScript', options: {
        tag: 'h2',
        styles: {
            background: 'liner-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }},
    {type: 'text', value: 'here text'},
    {type: 'columns', value: [
        '111111111111',
        '121112112111111',
        '1311113311111131'
    ]},
    {type: 'image', value: image}
]