# XML Import Export

`XML` は既存プロジェクトの入出力や最終成果物の 1 つとして扱います。

- validate は `validate-xml`
- `import-ai-json` や `import-workbook-json` の着地点として扱う
- report export の入力としても使う

## 代表コマンド

```bash
java -jar bundle/mikuproject-skills-java/skills/mikuproject-java/vendor/mikuproject-java/mikuproject.jar validate-xml mikuproject/state/input.xml
java -jar bundle/mikuproject-skills-java/skills/mikuproject-java/vendor/mikuproject-java/mikuproject.jar import-ai-json mikuproject/state/draft.json mikuproject/state/output.xml
java -jar bundle/mikuproject-skills-java/skills/mikuproject-java/vendor/mikuproject-java/mikuproject.jar import-workbook-json mikuproject/state/input-workbook.json mikuproject/state/output.xml
java -jar bundle/mikuproject-skills-java/skills/mikuproject-java/vendor/mikuproject-java/mikuproject.jar export-workbook-json mikuproject/state/output.xml
```

## 位置づけ

- 新規作成では `project_draft_view` から `XML` へ着地することが多い
- 既存変更では patch 適用先として `XML` を使う
- `XML` ができてから Markdown、SVG、WBS XLSX などの export へ進める
