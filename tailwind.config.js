/** @type {import('tailwindcss').Config} */
import { teal } from 'tailwindcss/colors'
export default {
  darkMode: 'class',
  // tailwindcssの適用範囲
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // 独自のユーティリティクラスを定義するところ
  theme: {
    // デフォルト設定を上書きする場合はここ
    // --------------------------------
    extend: {
      // 追加する場合はここ
      // ----------------
      colors: {
        teal,
        hobby: {
          100: '#001871',
          200: '#ff585d',
          300: '#ffb549',
          400: '#41b6e6',
        },
      },
    },
  },
  plugins: [],
}
