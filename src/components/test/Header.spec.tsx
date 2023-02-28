import { render, screen } from '@testing-library/react'
import { Button } from 'components/Button'
import userEvent from '@testing-library/user-event'
import {vi} from 'vitest'
import { Header } from 'components/Header'

describe('Header', () => {
  it('should display header', () => {

    render(
      <Header/>
    )

    expect(screen.getByText('Grouped by paths')).toBeVisible()
    expect(screen.getByText('Grouped by tags')).toBeVisible()
  })

})
