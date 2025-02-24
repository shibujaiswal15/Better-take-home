import { Geist, Geist_Mono } from "next/font/google";
import { HeaderProvider } from "@/context/HeaderContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <HeaderProvider>
                    <Header />
                    {children}
                    <Footer />
                </HeaderProvider>
            </body>
        </html>
    );
}
