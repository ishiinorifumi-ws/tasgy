# tasgy

GitHub Issues をバックエンドにした、スマホ向けタスク管理Webアプリ。

Issue の一覧をカンバン風タブで分類し、優先度変更・メモ追記・タスク作成をすばやく行える。

## スクリーンショット

```
┌──────────────────────────┐
│ 📋 マイタスク      [＋]  │
├──────────────────────────┤
│ 🔴緊急│🟡今週│🔵次週│👀待ち│
├──────────────────────────┤
│ カテゴリ: [全て ▼]       │
│ ソート:  [作成日順 ▼]    │
├──────────────────────────┤
│ ┌────────────────────┐   │
│ │ #38 タスクタイトル   │   │
│ │ 🏢 カテゴリ 📅 4/30  │   │
│ │ [🟡今週へ] [✅完了]  │   │
│ └────────────────────┘   │
└──────────────────────────┘
```

## 機能

- **タブ切り替え** — 優先度ラベル（緊急 / 今週 / 次週以降 / 確認待ち）で分類
- **カテゴリフィルター / ソート** — カテゴリ絞り込み、期限順・作成日順で並べ替え
- **タスク詳細** — カードをタップで展開、Issue 本文とコメントを表示
- **メモ追記** — 展開内からコメントをすぐ追加
- **優先度変更** — ボタンで優先度ラベルを付け替え
- **タスク完了** — ワンタップで Issue を Close
- **新規タスク作成** — タイトル・詳細・優先度・カテゴリ・期限を指定して作成
- **期限アラート** — 3日以内 ⚠️ / 超過 🔥 を自動表示

## 技術スタック

- **React 19** + **Vite**
- **Tailwind CSS v4**
- **GitHub REST API** — Issue をデータストアとして利用
- **GitHub Pages** — 静的サイトとしてホスティング

## セットアップ

### 1. リポジトリをクローン

```bash
git clone https://github.com/<your-username>/tasgy.git
cd tasgy
npm install
```

### 2. 環境変数を設定

`.env` ファイルをプロジェクトルートに作成:

```
VITE_REPO_OWNER=<GitHubユーザー名>
VITE_REPO_NAME=<Issueを管理するリポジトリ名>
```

### 3. GitHub Personal Access Token を作成

1. [GitHub Settings > Tokens](https://github.com/settings/tokens?type=beta) にアクセス
2. Fine-grained token を作成（`Issues: Read and write` 権限）
3. アプリ初回アクセス時にトークンを入力

### 4. 開発サーバーを起動

```bash
npm run dev
```

## デプロイ（GitHub Pages）

1. リポジトリの Settings > Pages で **Source: GitHub Actions** を選択
2. リポジトリの Settings > Secrets and variables > Actions > Variables に環境変数を追加:
   - `VITE_REPO_OWNER`
   - `VITE_REPO_NAME`
3. `main` ブランチにプッシュすると自動デプロイ

## ライセンス

MIT
