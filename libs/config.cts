import type { PlopTypes } from '@turbo/gen'
import path from 'path'

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  const usehooksSrcPath = path.resolve('packages/hooks/src')
  plop.setGenerator('hook', {
    description: 'Create a post',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'post name please (eg: "use test")'
      }
    ],
    actions: [
      // Create the hook file itself
      {
        type: 'add',
        path: usehooksSrcPath + '/{{dashCase name}}/{{dashCase name}}.ts',
        templateFile: 'templates/hook/hook.ts.hbs'
      },

      // Create the test file
      {
        type: 'add',
        path: usehooksSrcPath + '/{{dashCase name}}/{{dashCase name}}.test.ts',
        templateFile: 'templates/hook/hook.test.ts.hbs'
      },

      // Create the hook's index file
      {
        type: 'add',
        path: usehooksSrcPath + '/{{dashCase name}}/index.ts',
        templateFile: 'templates/hook/index.ts.hbs'
      },

      // Update the global hooks index file
      {
        type: 'append',
        path: usehooksSrcPath + '/index.ts',
        templateFile: 'templates/index.ts.hbs'
      }
    ]
  })
}
