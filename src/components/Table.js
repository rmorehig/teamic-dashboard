import React from 'react'
import styled from 'styled-components'
import colors from 'theme/colors'

const ChevronDown = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 3H1L5 7L9 3Z" fill="currentColor" />
  </svg>
)

const TableWrapper = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  border-right: 1px solid #d7dfe9;
  border-left: 1px solid #d7dfe9;
`
const TableHeader = styled.thead``
const TableRow = styled.tr`
  &:hover {
    background-color: ${colors.gray[50]};
  }
`
const TableCell = styled.td`
  border-bottom: 1px solid #d7dfe9;
  padding: 18px 24px;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.gray[100]};
`
const TableHeaderCell = styled.th`
  border-top: 1px solid #d7dfe9;
  border-bottom: 1px solid #d7dfe9;
  color: #7e858e;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  padding: 24px;
  text-align: left;
  &.sort {
    cursor: pointer;
    &:hover {
      color: ${colors.primary};
    }
  }
  svg {
    margin-left: 8px;
  }
`

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const Table = ({ columns = [], data = [] }) => {
  return (
    <TableWrapper>
      <TableHeader>
        <TableRow>
          {columns.map(({ id, name, sort }) => (
            <TableHeaderCell key={id} className={sort ? 'sort' : ''}>
              <FlexRow>
                {name}
                {sort && <ChevronDown />}
              </FlexRow>
            </TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      <tbody>
        {data.map(row => (
          <TableRow key={row.id}>
            {columns.map(({ id, render }) => (
              <TableCell key={`${id}-${row.id}`}>
                {render ? render(row) : row[id]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
    </TableWrapper>
  )
}

export default Table
