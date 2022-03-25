interface Input {
  type: string
  name: string
  label: string
  placeholder: string | null
}

const newInput = (type: string, name: string): Input => {
  return {
    type: type,
    name: name,
    label: name,
    placeholder: name,
  }
}


const formEls: Input[] = [
  newInput('email', 'contact'), newInput('textarea', 'feedback'),
]

enum PosX {
  TOP = 'top', BOTTOM = 'bottom'
}

enum PosY {
  RIGHT = 'right', LEFT = 'left'
}

export const Pos = {
  ...PosX, ...PosY
}

export interface FeeditConfig {
  position: [PosX, PosY]
  hook: string
}

export interface Feedback {
  contact: string
  content: string
}

const cEl = (tag: string) => (id?: string): HTMLElement => {
  const el = document.createElement(tag)

  if (typeof(id) !== 'undefined') {
    el.id = id
  }

  return el
}

const cDiv = cEl('div')
const cButton = cEl('button')
const cInput = cEl('input')
const cInputx = (input: Input): HTMLInputElement => {
  const el = cInput(input.name) as HTMLInputElement
  el.type = input.type, el.name = input.name

  if (input.placeholder !== null) {
    el.placeholder = input.placeholder
  }

  return el
}

const cForm = (hook: string): HTMLFormElement => {
  const form = cEl('form')('feedit-form') as HTMLFormElement
  form.action = hook
  form.method = 'POST'

  const inputs = formEls.map(cInputx)
  inputs.map(it => form.appendChild(it))

  const button = cInput('submit') as HTMLInputElement
  button.value = 'submit'
  button.type = 'button'
  form.appendChild(button)

  return form
}

export class Feedit {
  constructor(config: FeeditConfig) {
    const button = cButton('feedit-button')
    button.innerText = "Feedback"
    config.position.map(it => button.classList.add(`feedit-pos-${it}`))

    

    document.body.appendChild(button)

    const form = cForm(config.hook)
    form.dataset['state'] = 'hidden'
    button.onclick = async () => {
      form.dataset['state'] = 'visible'
    }
    document.body.appendChild(form)
  }
}
