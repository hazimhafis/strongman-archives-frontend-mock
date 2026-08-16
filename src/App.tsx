import { BrowserRouter, Route, Routes } from "react-router-dom"

import { SiteLayout } from "@/components/layout/SiteLayout"
import { AthleteDetailPage } from "@/pages/AthleteDetailPage"
import { AthletesPage } from "@/pages/AthletesPage"
import { HomePage } from "@/pages/HomePage"
import { NewsDetailPage } from "@/pages/NewsDetailPage"
import { NewsPage } from "@/pages/NewsPage"
import { NotFoundPage } from "@/pages/NotFoundPage"
import { RecordsPage } from "@/pages/RecordsPage"
import { ResultDetailPage } from "@/pages/ResultDetailPage"
import { ResultsPage } from "@/pages/ResultsPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="athletes" element={<AthletesPage />} />
          <Route path="athletes/:slug" element={<AthleteDetailPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="news/:slug" element={<NewsDetailPage />} />
          <Route path="results" element={<ResultsPage />} />
          <Route path="results/:slug" element={<ResultDetailPage />} />
          <Route path="records" element={<RecordsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
