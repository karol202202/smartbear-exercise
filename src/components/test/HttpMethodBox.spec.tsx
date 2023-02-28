import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HttpMethodBox } from 'components/HttpMethodBox'
import { RequestMethodEnum } from 'model/RequestMethodEnum'

describe('HttpMethodBox', () => {

    const mock = {
        "tags": [],
        "summary": "uploads an image",
        "description": "",
        "operationId": "uploadFile",
        "parameters": [
            {
                "name": "petId",
                "in": "path",
                "description": "ID of pet to update",
                "required": true,
                "type": "integer",
                "format": "int64"
            }
        ],
        "responses": {
            "400": {
                "description": "Invalid ID supplied"
              },
        },
    }

  it('should match color based on method passed', () => {

    render(
      <HttpMethodBox requestObject={mock} requestMethodName={RequestMethodEnum.POST} url=''/>
    )

    expect(screen.getByTestId('method-box')).toHaveClass('bg-green-100')
  })

  it('should collapse on click',async () => {

    render(
      <HttpMethodBox requestObject={mock} requestMethodName={RequestMethodEnum.POST} url=''/>
    )

    const collapseIcon =screen.getByTestId('collapse-icon')
    await userEvent.click(collapseIcon)

    expect(screen.getByText('Parameters')).toBeVisible()
    expect(screen.getByText('Response')).toBeVisible()
  })

})
