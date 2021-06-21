import { useMediaQuery } from 'react-responsive'

export const Desktop = ({ children }) => useMediaQuery({ minWidth: 1248 }) ? children : null

// export const DesktopOrTablet = ({ children }) => {
//   return useMediaQuery({ minWidth: 768 }) ? children : null
// }

// export const Tablet = ({ children }) => {
//   return useMediaQuery({ minWidth: 768, maxWidth: 991 }) ? children : null
// }

export const TabletOrMobile = ({ children }) => useMediaQuery({ maxWidth: 1247.98 }) ? children : null

// export const Mobile = ({ children }) => {
//   return useMediaQuery({ maxWidth: 767 }) ? children : null
// }

export const Default = ({ children }) => useMediaQuery({ minWidth: 768 }) ? children : null
