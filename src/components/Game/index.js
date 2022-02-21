import * as React from 'react'
import './styles.css'

export class Game extends React.Component {
  outerContainerEl

  constructor(props) {
    super(props)
    this.state = {
      outerContainerEl: null,
    }
  }

  async componentDidMount() {
    const config = {
      id: 'runner',
      width: this.outerContainerEl.offsetWidth,
    }
    const { Runner } = await import('../GameRunner')
    const runner = new Runner(this.outerContainerEl, config)
    runner.init()
  }

  render() {
    return (
      <div className='game-container'>
        <div>
          <div
            ref={node => (this.outerContainerEl = node)}
            className='runner-wrapper'
          />
        </div>
      </div>
    )
  }
}

export default Game