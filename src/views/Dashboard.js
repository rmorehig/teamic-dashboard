import React from 'react'
import View from 'components/View'
import styled from 'styled-components'
import Table from 'components/Table'
import { columns, data } from 'config/teams'

const Button = styled.button`
  margin-left: 26px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #000000;
  text-transform: uppercase;
  svg {
    margin-right: 8px;
  }
`

const DownloadIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.774193 11.1636C0.346618 11.1636 -3.92506e-07 11.5103 -3.55126e-07 11.9378L-1.55771e-07 14.2182C-6.97413e-08 15.2023 0.808777 16 1.80645 16L14.1935 16C15.1912 16 16 15.2023 16 14.2182L16 11.9378C16 11.5103 15.6534 11.1636 15.2258 11.1636C14.7982 11.1636 14.4516 11.5103 14.4516 11.9378L14.4516 14.2182C14.4516 14.3588 14.3361 14.4727 14.1935 14.4727L1.80645 14.4727C1.66393 14.4727 1.54839 14.3588 1.54839 14.2182L1.54839 11.9378C1.54839 11.5103 1.20177 11.1636 0.774193 11.1636ZM11.6111 5.93058L8.77419 8.449L8.77419 6.317e-07L7.22581 7.67064e-07L7.22581 8.449L4.38888 5.93058L3.35306 7.06579L7.48209 10.7312C7.77755 10.9935 8.22245 10.9935 8.51791 10.7312L12.6469 7.06579L11.6111 5.93058Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
)
const DownloadButton = () => (
  <Button>
    <DownloadIcon />
    Download list
  </Button>
)
const Dashboard = () => {
  return (
    <View title="Teams" titleAction={<DownloadButton />}>
      <Table columns={columns} data={data} />
    </View>
  )
}

export default Dashboard
