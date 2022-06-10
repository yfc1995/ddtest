
// import { useNavigate } from 'react-router-dom'
// import { getToken } from '@utils/axios/until'
// import { useEffect } from 'react'

import { useEffect } from "react"


const Index = () => {
  // const navigate = useNavigate()
  // useEffect(() => {
  //   const token = getToken()

  //   if (token) {
  //     navigate('/routerDemo/list')
  //     return
  //   }
  //   navigate('/login')
  // }, [navigate])
  useEffect(() => {
    var windowReference = window.open();
    windowReference.location = 'http://124.222.160.155:8001/demo';
    // myService.getUrl().then(function (url) {
    //   windowReference.location = 'http://124.222.160.155:8001/demo';
    // });
  }, [])

  return <div>
    index
    <a href="http://124.222.160.155:8001/demo" target="_blank" rel="noopener noreferrer">
      点击打开新窗口预览
    </a>
  </div>
}

export default Index