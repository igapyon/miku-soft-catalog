# miku-soft docs maintenance

このリポジトリの `docs/miku-soft-*.md` は、miku-soft の基本設計文書です。

これらの文書を追加・更新・差し替えする場合は、Codex で `igapyon-miku-soft-developer` スキルを明示的に使用してください。

## 対象文書

- `miku-soft-00-overview-design.md`
- `miku-soft-10-mainapp-design.md`
- `miku-soft-11-web-design.md`
- `miku-soft-20-javaapp-design.md`
- `miku-soft-21-java-maven-design.md`
- `miku-soft-30-straight-conversion.md`
- `miku-soft-40-agentskills-design.md`
- `miku-soft-50-mcp-design.md`

## 更新方針

- `igapyon-miku-soft-developer` スキルに同梱されている最新の `references/miku-soft-basic/` 文書を同期元とします。
- 更新時は、スキル内の最新版をこのリポジトリの `docs/` 配下へ反映します。
- ファイル名は原則としてスキル同梱の基本設計文書名をそのまま使います。
- 古い版名の文書が残っている場合は、差分と利用状況を確認してから整理します。
- 更新後は `README.md` や関連するカタログ説明に影響がないか確認します。

## Codex への依頼例

```text
miku-soft-developerスキルを使って、docs配下のmiku-soft基本設計文書を最新化して。
```
