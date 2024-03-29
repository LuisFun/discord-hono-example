import { DiscordHono, Components, LinkButton, Button } from 'discord-hono'

const app = new DiscordHono()
  .command('hello', c => c.res('world!'))
  .command('help', c =>
    c.res({
      content: 'text: ' + c.values.text,
      components: new Components().row(
        new LinkButton('https://discord-hono.luis.fun', 'Docs'),
        new Button('delete-self', 'Delete', 'Secondary').emoji({ name: '🗑️' }),
      ),
    }),
  )
  .component('delete-self', c => c.resRepost())

export default app
