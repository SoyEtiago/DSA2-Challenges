import {Button} from './Button'

export const Pad = ({handleClick, handleOperatorClick, handleClear, handleOperationClick}) => {
  return (
    <>
      <div className='Pad'>
        <Button value={1} handleClick={handleClick}></Button>
        <Button value={2} handleClick={handleClick}></Button>
        <Button value={3} handleClick={handleClick}></Button>
        <Button value={'/'} handleOperatorClick={handleOperatorClick}></Button>
        <Button value={4} handleClick={handleClick}></Button>
        <Button value={5} handleClick={handleClick}></Button>
        <Button value={6} handleClick={handleClick}></Button>
        <Button value={'*'}handleOperatorClick={handleOperatorClick}></Button>
        <Button value={7} handleClick={handleClick}></Button>
        <Button value={8} handleClick={handleClick}></Button>
        <Button value={9} handleClick={handleClick}></Button>
        <Button value={'+'}handleOperatorClick={handleOperatorClick}></Button>
        <Button value={0} handleClick={handleClick}></Button>
        <Button value={'='} handleOperationClick={handleOperationClick}></Button>
        <Button value={'CLEAR'} handleClear={handleClear} Name={'clearBttn'}></Button>
        <Button value={'-'}handleOperatorClick={handleOperatorClick}></Button>

      </div>
    </>
  )
}