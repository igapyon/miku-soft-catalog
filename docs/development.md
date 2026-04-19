# Development Notes

この文書は `mikuproject-skills-java` の開発方針メモです。

## 基本方針

- Node 版との違いはできるだけ runtime に閉じ込める
- 会話上の用語は既存 `mikuproject-skills` と揃える
- 正本データは `mikuproject-java` が扱える形式に寄せる
- UI は扱わない
- CLI に関係ない会話規則は既存 `mikuproject-skills` を原則として継承する
- 既存 `mikuproject-skills` の文書や規則でそのまま使えるものは、書き換えずに踏襲する
- GitHub Actions も、Node 固有 step を除いて既存 `mikuproject-skills` の構成を原則として踏襲する

## リポジトリ責務

この repo が持つもの:

- skill 定義
- workflow ルール
- handoff ルール
- Java CLI 前提の runtime 説明
- bundle 配布向け文書

この repo が持たないもの:

- Java コア実装の詳細
- 画面 UI
- `mikuproject-java` のコアロジック改修そのもの

## 設計原則

- 新規作成は draft 系の流れを主にする
- 既存 WBS の変更は patch 系の流れを主にする
- import/export の可否は `mikuproject-java` CLI の機能に従う
- 文書上の会話例は Node 版との互換性を重視する
- runtime の受け取り方は、bundle 同梱または development 外部参照 + bundle 同梱のどちらかで整理する

## 初期成果物

初期段階で整えるもの:

- `README.md`
- `docs/quickstart.md`
- `docs/runtime-java-cli.md`
- `docs/compatibility.md`
- `docs/upstream-policy.md`
- `skills/mikuproject-java/SKILL.md`
- `skills/mikuproject-java/references/`

## 今後の実装論点

- CLI 呼び出し契約の固定
- bundle 形式の具体化
- `mikuproject-java` 依存の配布方法
- development 時と bundled 時の runtime 検出ルール
- smoke test の方針
