# Patch Import

既存 WBS の変更では `patch JSON` を主更新手段とします。

会話要求から差分を組み立て、`mikuproject-java` の patch 適用機能へ渡すのを基本動線とします。

## 基本動線

1. 既存の `XML` または `workbook JSON` を基準状態として扱う
2. 会話要求から `patch JSON` を組み立てる
3. `validate-patch-json` で妥当性を確認する
4. `apply-patch-json` で基準 `XML` に適用する

## 代表コマンド

```bash
java -jar bundle/mikuproject-skills-java/skills/mikuproject-java/vendor/mikuproject-java/mikuproject.jar validate-patch-json mikuproject/state/change-patch.json
java -jar bundle/mikuproject-skills-java/skills/mikuproject-java/vendor/mikuproject-java/mikuproject.jar apply-patch-json mikuproject/state/base.xml mikuproject/state/change-patch.json mikuproject/state/output.xml
```

## 依存関係変更の注意

- 依存関係変更は `link_tasks` / `unlink_tasks` を使う
- lag を出すときは `lag` または `lag_hours` のどちらか一方だけを使う
- base state なしで patch を適用しようとしたら hard error とみなす
