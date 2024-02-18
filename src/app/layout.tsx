import { ReactNode } from 'react'
import { Open_Sans } from 'next/font/google'
import '@/styles/globals.css'
import { seo } from '@/constants'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = seo.homeLayout

type TRootLayout = { children: ReactNode }

export default function RootLayout({ children }: TRootLayout) {
	return (
		<html lang="en">
			<body className={openSans.className}>{children}</body>
		</html>
	)
}
