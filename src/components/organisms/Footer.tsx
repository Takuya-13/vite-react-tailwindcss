import React from 'react'
import { Label } from '../atoms/Label'

const Component: React.FC = () => {
  return (
    <footer className="border-t border-gray-500 bottom-0 absolute w-full">
      <div className="container justify-center">
        <div className="p-4 mx-auto flex">
          <Label value="Copyrights的な。" className="mx-auto" />
        </div>
        {/* <div className="p-4 md:flex-row mx-auto">
          <a
            target="_blank"
            href="https://icons8.com/icon/62039/%E5%A4%AA%E9%99%BD"
            rel="noreferrer"
          >
            太陽
          </a>{' '}
          icon by{' '}
          <a target="_blank" href="https://icons8.com" rel="noreferrer">
            Icons8
          </a>
          <a
            target="_blank"
            href="https://icons8.com/icon/1RZffALm9Wgo/cloud"
            rel="noreferrer"
          >
            Cloud
          </a>{' '}
          icon by{' '}
          <a target="_blank" href="https://icons8.com" rel="noreferrer">
            Icons8
          </a>
          <a
            target="_blank"
            href="https://icons8.com/icon/1RZffALm9Wgo/cloud"
            rel="noreferrer"
          >
            Cloud
          </a>{' '}
          icon by{' '}
          <a target="_blank" href="https://icons8.com" rel="noreferrer">
            Icons8
          </a>
          <a
            target="_blank"
            href="https://icons8.com/icon/XU_Xw_ks6koX/%E9%A2%A8"
            rel="noreferrer"
          >
            風
          </a>{' '}
          icon by{' '}
          <a target="_blank" href="https://icons8.com" rel="noreferrer">
            Icons8
          </a>
          <a
            target="_blank"
            href="https://icons8.com/icon/0pNUeNgf88hY/%E9%9B%A8%E5%A4%A9"
            rel="noreferrer"
          >
            雨天
          </a>{' '}
          icon by{' '}
          <a target="_blank" href="https://icons8.com" rel="noreferrer">
            Icons8
          </a>
        </div> */}
      </div>
    </footer>
  )
}

export const Footer = Component
