# React-useContext-CounterApp

Reactの `useContext` と Context API を使用して、コンポーネント間でカウンターの状態を共有する練習用アプリです。

## 📌 概要

`CounterContext` でカウンターの状態と操作を管理し、`CounterDisplay` と `CounterButtons` から共有された状態を利用します。

## 🛠 使用技術

* React
* TypeScript
* Context API
* useContext
* useState
* Tailwind CSS
* Vite

## 📂 ディレクトリ構成

```text
src/
├── components/
│   ├── CounterButtons.tsx
│   └── CounterDisplay.tsx
├── contexts/
│   └── CounterContext.tsx
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## ⚙️ 実装内容

### CounterContext

Context APIを使用してカウンターの状態を管理します。

* `count`：現在のカウント値
* `increment`：カウントアップ
* `decrement`：カウントダウン

### CounterDisplay

`useContext` を使用して `count` を取得し、現在のカウント値を表示します。

### CounterButtons

`useContext` を使用して `increment` と `decrement` を取得し、ボタンからカウンターを操作します。

## 🎨 UI

Tailwind CSSを使用してスタイリングしています。

カウンターボタンには円形のデザインを使用しています。

```tsx
className="w-12 h-12 rounded-full"
```

## 🚀 起動方法

```bash
npm install
npm run dev
```

ブラウザで表示されたURLにアクセスしてください。
