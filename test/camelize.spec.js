import assert from 'power-assert'
import camelize from '../src/camelize'

const UnderscoreToUpperCamelSpecs = [
  { underscore: 'hoge', camel: 'Hoge' },
  { underscore: 'hoge_fuga', camel: 'HogeFuga' },
  { underscore: 'Hoge_fuga', camel: 'HogeFuga' },
  { underscore: 'hoge_Fuga', camel: 'HogeFuga' },
  { underscore: 'foo_bar_zar', camel: 'FooBarZar' }
]

const UnderscoreToLowerCamelSpecs = [
  { underscore: 'hoge', camel: 'hoge' },
  { underscore: 'hoge_fuga', camel: 'hogeFuga' },
  { underscore: 'Hoge_fuga', camel: 'hogeFuga' },
  { underscore: 'hoge_Fuga', camel: 'hogeFuga' },
  { underscore: 'foo_bar_zar', camel: 'fooBarZar' }
]

describe('#camelize', () => {
  context('when `uppercaseFirstLetter` is true', () => {
    UnderscoreToUpperCamelSpecs.forEach(({ underscore, camel }) => {
      context(`with ${underscore}`, () => {
        it(`returns ${camel} string`, () => {
          assert.equal(camelize(underscore, true), camel)
        })
      })
    })
  })

  context('when `uppercaseFirstLetter` is false', () => {
    UnderscoreToLowerCamelSpecs.forEach(({ underscore, camel }) => {
      context(`with ${underscore}`, () => {
        it(`returns ${camel} string`, () => {
          assert.equal(camelize(underscore, false), camel)
        })
      })
    })
  })
})
