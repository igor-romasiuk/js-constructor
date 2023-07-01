import image from './assets/image.png'

const text = `
Круті відео та уроки з JavaScript тут: <a href="https://youtube.com/c/VladilenMinin" target="_blank">Владилен Мінін</a>. Тут ти знайдеш вичерпну інформацію з будь-яких аспектів мови, будь-яких фреймворків, таких як: React, Vue, Angular, Node, Svelte, Express, Next, Nuxt та багато іншого. Приєднуйся!
`

export const model = [
    {
        type: 'title', value: 'Конструктор сайтів на JavaScript', options: {
            tag: 'h2',
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                padding: '1.5rem',
                'text-align': 'center'
            }
        }
    },
    {
        type: 'image', value: image, options: {
            styles: {
                padding: '2rem 0',
                display: 'flex',
                'justify-content': 'center'
            }
        }
        
    },
    {
        type: 'columns', value: [
        'Додаток на JavaScript, без використання бібліотек',
        'Дізнатись як працюють принципи SOLID і ООП в JavaScript за один курс',
        'JavaScript - це просто, цікаво. Навчись створювати будь-які UI своїми руками'
        ], options: {
            styles: {
                background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
                padding: '2rem',
                color: '#fff', 
                'font-weight': 'bold'
            }
        }
    },
    {
        type: 'text', value: text, options: {
            styles: {
                background: 'linear-gradient(to left, #f2994a, #f2c94c)',
                padding: '1rem',
                'font-weight': 'bold'
            }
        }
    },
    
]