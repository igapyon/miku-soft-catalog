# Quickstart

この文書は、`mikuproject-skills-java` をいま動く想定で試すための最短手順です。

対象:

- `spec`
- `draft`
- `patch`
- `workbook`
- `validate` / `apply`
- `mikuproject-java` CLI の `xml` / `workbook-json` / `xlsx`
- `mikuproject-java` CLI の `wbs-xlsx` / `daily-svg` / `weekly-svg` / `wbs-markdown`

この時点で向いている相手:

- 開発者
- 評価目的の利用者
- `draft -> patch -> workbook` の往復を追える利用者

この時点でまだ向いていない相手:

- runtime 配置や bundle 同梱方式が未確定なまま、完全な導入手順を期待する利用者

## 先に結論

最初に確認すべきことは次です。

1. このリポジトリ全体を workspace に置く
2. `mikuproject-java` runtime を development 用の想定場所または bundle 形式で用意する
3. `skills/mikuproject-java` を参照して使う
4. Codex との会話で `mikuproject` skill を使う

## 事前準備

### 1. workspace を揃える

このリポジトリ全体を workspace に置いて開きます。

必要なのは次です。

- `skills/mikuproject-java`
- `docs/`
- `mikuproject-java` runtime を見つけるための想定パスまたは bundle

`skills/` だけでは不足します。

### 2. runtime を用意する

現在の第一候補は次の 2 つです。

- development 時は近傍の `mikuproject-java` を参照する
- bundle 時は実行に必要な最小 runtime を同梱する

runtime の扱いは [runtime-java-cli.md](./runtime-java-cli.md) を参照してください。

### 3. 生成物の置き場所を決める

WBS 関連の生成物は、workspace ルートへ直置きせず、専用ディレクトリへ寄せるのを推奨します。

推奨構成:

```text
mikuproject/
  state/
  report/
  tmp/
```

使い分け:

- `mikuproject/state/`: workbook JSON、draft JSON、Patch JSON などの状態ファイル
- `mikuproject/report/`: `WBS XLSX`、`SVG`、`Markdown` などの成果物
- `mikuproject/tmp/`: 一時ファイル

ファイル名は、同じ実行単位で同じ prefix を使うと整理しやすくなります。

推奨例:

- `YYYYMMDDHHmm-workbook.json`
- `YYYYMMDDHHmm-wbs.xlsx`
- `YYYYMMDDHHmm-daily.svg`
- `YYYYMMDDHHmm-weekly.svg`
- `YYYYMMDDHHmm-patch.json`

## まず試す流れ

### 新規草案と既存編集の区別

この skill では、ここを厳密に分けます。

- 新規に WBS を作るとき: `project_draft_view`
- 既存の WBS を直すとき: `Patch JSON`

### 1. まずは明示トリガー付きで WBS 作成を依頼する

会話では、まず明示トリガー付きの依頼文で始めます。

```text
mikuproject で、れでえいやあでWBSつくって
```

または:

```text
miku project で、れでえいやあでWBSつくって
```

期待すること:

- エージェントが内部で `spec` を参照する
- エージェントが内部で `project_draft_view` を作る
- それを Java runtime に内部で取り込み、workbook state まで進める
- ユーザーには WBS 要約や完成結果だけが返る

避けたい挙動:

- `spec` 本文がそのまま画面に出る
- `project_draft_view` の JSON がそのまま画面に出る
- visible handoff で止まる

補足:

- この skill は generic な planning 語だけでは自動起動しない
- まず `mikuproject` または `miku project` を入れて始める

### 2. patch を当てる

現在の workbook state をもとに変更したいときは、通常は変更要求をそのまま伝えます。

```text
このWBSを1週間短くして
```

期待すること:

- エージェントが必要に応じて内部状態を参照する
- エージェントが内部で `Patch JSON` を作る
- それを validate して内部で適用する
- ユーザーには更新後の内容だけを返す

### 3. workbook を引き渡す

現在の state をもう一度 AI に渡したいときは、次のように依頼します。

```text
現在の workbook を出して
```

期待すること:

- 現在の `workbook JSON` が返る

### 4. Markdown / Excel ガント / SVG に変換する

export を頼むときは、補助スクリプトを作るのではなく、`mikuproject-java` の正式 export を使うのが期待動作です。

例:

```text
これを markdown化して
```

```text
Excelガントが欲しい
```

期待すること:

- `markdown化` は `wbs-markdown` 系 export として扱われる
- `Excelガント` や `xlsxでガント` は通常 `WBS XLSX` として扱われる
- `daily SVG` や `weekly SVG` も既知の report export として扱われる
- 一般的な表計算ライブラリ探索や ad-hoc な生成へ逸れない

## ドキュメントの読み順

1. [README.md](../README.md)
2. [runtime-java-cli.md](./runtime-java-cli.md)
3. [development.md](./development.md)
4. [skills/mikuproject-java/SKILL.md](../skills/mikuproject-java/SKILL.md)
