# Java CLI Runtime

この文書は、`mikuproject-skills-java` がどのように `mikuproject-java` の CLI を前提にするかの初期仕様メモです。

## 目的

会話レイヤでは Node 版 `mikuproject-skills` に近い体験を保ちつつ、実行レイヤだけを Java CLI に切り替えます。
特に、CLI に入るきっかけは既存 `mikuproject-skills` にできるだけ揃える方針です。

## runtime 方針

- 会話では CLI の詳細を前面に出さない
- 内部では `mikuproject-java` CLI の操作へルーティングする
- `XML`、`workbook JSON`、`patch JSON` を正本とする
- UI 操作やブラウザ依存の流れは採用しない
- CLI を使う条件は、既存 `mikuproject-skills` の runtime discipline をできるだけ踏襲する

## 対応対象の主要操作

初期仕様では、少なくとも次のような操作を想定します。

- `validate-xml`
- `export-wbs-markdown`
- `export-daily-svg`
- `export-weekly-svg`
- `export-workbook-json`
- `import-workbook-json`
- `apply-patch-json`
- `import-ai-json`
- `export-xlsx`
- `import-xlsx`

## 会話から runtime への対応方針

- 新規作成要求は draft 系の内部表現を経由して `XML` または `workbook JSON` に着地させる
- 既存計画の修正要求は `patch JSON` を主更新手段とする
- レポート出力要求は `Markdown`、`SVG`、`XLSX` の各 export へ振り分ける
- 妥当性確認要求は validate 系 command を優先する

## runtime の受け取り方

現在の検討対象は次の 2 案です。

### 案2: bundle 同梱

- skill bundle の中に `mikuproject-java` の実行に必要な配布物を含める
- skill はまず bundle 内 runtime を探して使う
- 利用者は追加セットアップなしで使いやすい

向いている点:

- runtime 検出が単純
- 利用者にとって導入がわかりやすい
- `mikuproject-skills` の bundled runtime に近い感覚を作りやすい

気になる点:

- bundle が重くなる
- Java 配布物の更新責務がこの repo に寄る
- 開発中の `mikuproject-java` 追従は別途考える必要がある

### 案3: 開発時は外部参照、bundle 時は同梱

- development repo では近傍の `mikuproject-java` を参照する
- skill bundle では実行に必要な最小 runtime を同梱する
- 開発時と配布時で runtime 検出ルールを分ける

向いている点:

- 開発時に `mikuproject-java` の更新を追いやすい
- 配布時は利用者の導入負荷を下げられる
- `mikuproject-skills` の development / bundled の考え方を踏襲しやすい

気になる点:

- runtime 検出ルールが 2 段になる
- 文書とテストで development / bundled の両方を意識する必要がある

## 現時点の推奨

現時点では案3を第一候補とします。

理由:

- 利用者には bundle 同梱のわかりやすさを残せる
- 開発者は `mikuproject-java` の更新を直接追いやすい
- `mikuproject-skills` の runtime discipline をより自然に踏襲できる

ただし、配布を最優先して早く MVP を作るなら、初期実装は案2から始めて後で案3へ拡張する進め方もあります。

## CLI を使う条件

次の条件では、一般的な workspace 探索や ad-hoc な変換より先に Java CLI を優先します。

- `mikuproject` の明示トリガーがある import/export 要求
- `XML`、`workbook JSON`、`patch JSON` の validate / import / apply / export 要求
- `Markdown`、`SVG`、`XLSX` などの既知レポート出力要求
- 既存 WBS の修正で、構造化された差分適用が必要な要求

逆に、次のような場合は CLI 前提に固定しません。

- まだ `mikuproject` workflow に入っていない一般的な計画相談
- 単なる説明、比較、仕様検討
- Java runtime が未配置で、代替経路の検討自体が目的のとき

## 想定する runtime 探索順

案3を採る場合、探索順のたたき台は次です。

1. bundle 内の `mikuproject-java` runtime
2. 明示設定された runtime path
3. development 用の近傍 `mikuproject-java`
4. 見つからなければ hard error

## まだ未確定の点

- 実際の起動形式を `java -jar` とするか wrapper とするか
- bundle に何を最小 runtime として含めるか
- development 用の近傍 path をどう定義するか
