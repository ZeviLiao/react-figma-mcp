import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-4">
          🎨 Figma MCP App
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          使用 Figma MCP Server 整合設計與程式碼
        </p>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            功能展示
          </h2>
          <ul className="space-y-3 text-left text-slate-700">
            <li className="flex items-start">
              <span className="text-green-500 mr-3 text-xl">✓</span>
              <span>從 Figma 自動抓取設計</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 text-xl">✓</span>
              <span>生成 React + TypeScript 元件</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 text-xl">✓</span>
              <span>使用 Tailwind CSS 樣式</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 text-xl">✓</span>
              <span>支援 Cloud & Desktop MCP</span>
            </li>
          </ul>
        </div>

        <Link
          to="/demo"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
        >
          查看 Figma Demo →
        </Link>

        <div className="mt-8 text-sm text-slate-500">
          <p>技術棧：React 19 • TypeScript • Vite • Tailwind CSS</p>
        </div>
      </div>
    </div>
  )
}
