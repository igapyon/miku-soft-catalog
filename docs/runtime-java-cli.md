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

`mikuproject-skills-java` は、`workplace/mikuproject-java` に checkout した `mikuproject-java` を build し、その成果物である `mikuproject.jar` を bundle に取り込む前提とします。

この repo は `mikuproject-java` の source を Git 管理下へ vendor しません。
開発用 checkout と build 作業は `workplace/` 配下で行い、bundle には build 済み jar だけを含めます。

## build 手順の前提

1. `workplace/mikuproject-java` に `mikuproject-java` を checkout する
2. `workplace/mikuproject-java` で `mvn package` を実行する
3. 生成された `target/mikuproject.jar` を bundle 作成時に取り込む
4. `npm run build:bundle` で skill bundle を生成する

`workplace/` 配下は Git 管理外とし、runtime の取得や build のための作業場所として扱います。

## bundle に取り込む成果物

- `mikuproject.jar`

`mikuproject-dist.zip` も upstream 側では生成されますが、現時点で `mikuproject-skills-java` が bundle に取り込む対象は `mikuproject.jar` を正とします。

## bundle 内の配置先

bundle 内では、次の配置を正とします。

```text
bundle/mikuproject-skills-java/
  skills/
    mikuproject-java/
      vendor/
        mikuproject-java/
          mikuproject.jar
```

bundle 作成時の入力 jar は次を正とします。

```text
workplace/mikuproject-java/target/mikuproject.jar
```

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

1. bundle 内の `mikuproject.jar`
2. 見つからなければ hard error

想定する bundle 内 runtime path:

- `skills/mikuproject-java/vendor/mikuproject-java/mikuproject.jar`

## まだ未確定の点

- runtime を呼び出す補助 wrapper を置くか
