import { render, screen } from '@testing-library/react'
import { Button } from 'components/Button'
import userEvent from '@testing-library/user-event'
import {vi} from 'vitest'

describe('Button', () => {
  it('should mark button as active', () => {
    const buttonLabel = 'test'

    render(
      <Button
        value={buttonLabel}
        onClick={() => {}}
        isActive={true}
      />
    )

    expect(screen.getByText(buttonLabel)).toHaveClass('bg-blue-500')
  })

  it('should call onClick handler',async () => {

    const buttonLabel = 'test'
    const onClickSpy = vi.fn() 

    render(
      <Button
        value={buttonLabel}
        onClick={onClickSpy}
      />
    )

    const button = screen.getByText(buttonLabel)
    await userEvent.click(button)

    expect(onClickSpy).toHaveBeenCalled()
  })
})
