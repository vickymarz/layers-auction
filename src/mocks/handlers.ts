import { rest } from 'msw'

export const handlers = [
    rest.get('https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    name: 'Victor Okoroji',
                    title: 'Apple MacBook Air 13 M1 Chip 8GB 256GB 2020 Model - Rose Gold',
                    bids: '₦795,000',
                    image: 'https://i.ibb.co/h7Bts6w/Imagelaptop.png',
                },
                {
                    name: 'John Doe',
                    title: 'Apple MacBook Air 13 M1 Chip 8GB 256GB 2020 Model - Rose yellow',
                    bids: '₦295,000',
                    image: 'https://i.ibb.co/h7Bts6w/Imagelaptop.png',
                }
]
            )
        )
    })
]

