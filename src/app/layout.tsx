import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/shared/Navigation/Navigation";
import { ThemeProvider } from "@/components/theme-provider";
import CurrentUserProvider from "@/context/CurrentUserContext";
import getCurrentUser from "@/actions/getCurrentUser";
import CreateChannelModalProvider from "@/context/CreateChannelModalContext";
import CreateChannelModal from "@/components/shared/Modal/CreateChannelModal";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "xSprark Videos",
  description: "Platform for devs to share informative videos",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch current user using server action method
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={roboto.className}>
        <CreateChannelModalProvider>
          <CreateChannelModal />
          <CurrentUserProvider user={currentUser}>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <Navigation />
              <div className="pt-16">{children}</div>
            </ThemeProvider>
          </CurrentUserProvider>
        </CreateChannelModalProvider>
      </body>
    </html>
  );
}
