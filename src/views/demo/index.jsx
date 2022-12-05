import Indicator from '@/base-ui/indicator'
import React, { memo } from 'react'
import { DemoWrapper } from './style'

const Demo = memo(() => {
  const names = ['abc', 'cba', 'aaab', 'bbb', 'eddd', 'ccc', 'dddd', 'cdcdcdcd', 'yhn', 'abddd', 'eeee', 'rrrr']

  return (
    <DemoWrapper>
      <div className="control">
        <button>上一个</button>
        <button>下一个</button>
      </div>
      <div className="list">
        <Indicator>
          {names.map(item => {
            return <button>{item}</button>
          })}
        </Indicator>
      </div>
    </DemoWrapper>
  )
})

export default Demo