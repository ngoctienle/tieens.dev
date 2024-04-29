/** @type {import('cz-git').UserConfig} */
module.exports = {
  ignores: [(commit) => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'perf',
        'style',
        'docs',
        'test',
        'refactor',
        'build',
        'ci',
        'chore',
        'revert',
        'wip',
        'workflow',
        'types',
        'release'
      ]
    ]
  },
  prompt: {
    /** @use `pnpm commit :f` */
    alias: {
      f: 'docs: fix typos',
      s: 'style: update code format',
      b: 'build: bump dependencies',
      c: 'chore: update config',
      r: 'docs: update README'
    },
    allowEmptyIssuePrefixs: false,
    allowCustomIssuePrefixs: false,

    typesAppend: [
      { value: 'wip', name: 'wip: Work in process' },
      { value: 'workflow', name: 'workflow: Workflow improvement' },
      { value: 'types', name: 'types: Type definition file changes' }
    ]
  }
}
