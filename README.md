# miku-soft catalog

miku-soft カタログ一覧です。GitHub user `igapyon` の公開リポジトリから、名前が `miku` で始まるものを抽出して作成しました。

miku-soft は、Mikuku さんと Toshiki Iga が作成・管理している OSS 群です。

取得日: 2026-05-09

## miku-docx2md family

DOCXをMarkdownへ変換するツール系列です。

| リポジトリ | 位置づけ | 状態 | 概要 |
|---|---|---:|---|
| [miku-docx2md](https://github.com/igapyon/miku-docx2md) | 標準実装 (TypeScript) |  | DOCXをMarkdownへ変換 |
| [miku-docx2md-java](https://github.com/igapyon/miku-docx2md-java) | Java実装 |  | DOCX→MarkdownのJava版 |

## miku-grep family

AI agent向けの構造化grepツール系列です。

| リポジトリ | 位置づけ | 状態 | 概要 |
|---|---|---:|---|
| [miku-grep](https://github.com/igapyon/miku-grep) | 標準実装 (TypeScript) | ベータ版 | AI agent向け構造化grep CLI |
| [miku-grep-java](https://github.com/igapyon/miku-grep-java) | Java実装 | ベータ版 | miku-grepのJava版 |
| [miku-grep-skills](https://github.com/igapyon/miku-grep-skills) | Agent Skill (Markdown) | ベータ版 | miku-grep用Agent Skill |

## miku-indexgen family

Markdownディレクトリのindexを生成するツール系列です。

| リポジトリ | 位置づけ | 状態 | 概要 |
|---|---|---:|---|
| [miku-indexgen](https://github.com/igapyon/miku-indexgen) | 標準実装 (TypeScript) |  | Markdownディレクトリのindex生成 |
| [miku-indexgen-java](https://github.com/igapyon/miku-indexgen-java) | Java実装 |  | miku-indexgenのJava版 |

## miku-readfile family

UTF-8/Shift_JISファイルを読み取るツール系列です。

| リポジトリ | 位置づけ | 状態 | 概要 |
|---|---|---:|---|
| [miku-readfile](https://github.com/igapyon/miku-readfile) | 標準実装 (TypeScript) | ベータ版 | UTF-8/Shift_JISファイル読取CLI |
| [miku-readfile-java](https://github.com/igapyon/miku-readfile-java) | Java実装 | ベータ版 | miku-readfileのJava版 |
| [miku-readfile-skills](https://github.com/igapyon/miku-readfile-skills) | Agent Skill (Markdown) | ベータ版 | miku-readfile用Agent Skill |

## miku-text-bundle family

リポジトリ内のテキストをMarkdown束に集約するツール系列です。

| リポジトリ | 位置づけ | 状態 | 概要 |
|---|---|---:|---|
| [miku-text-bundle](https://github.com/igapyon/miku-text-bundle) | 標準実装 (TypeScript) |  | リポジトリテキストをMarkdown束に集約 |
| [miku-text-bundle-java](https://github.com/igapyon/miku-text-bundle-java) | Java実装 |  | miku-text-bundleのJava版 |
| [miku-text-bundle-skills](https://github.com/igapyon/miku-text-bundle-skills) | Agent Skill (Markdown) |  | miku-text-bundle用Agent Skill |

## miku-xlsx2md family

XLSXをMarkdownへ抽出するツール系列です。

| リポジトリ | 位置づけ | 状態 | 概要 |
|---|---|---:|---|
| [miku-xlsx2md](https://github.com/igapyon/miku-xlsx2md) | 標準実装 (TypeScript) |  | XLSXをMarkdownへ抽出 |
| [miku-xlsx2md-java](https://github.com/igapyon/miku-xlsx2md-java) | Java実装 |  | miku-xlsx2mdのJava版 |

## mikuproject family

MS Project XML/WBS変換・可視化のツール系列です。

| リポジトリ | 位置づけ | 状態 | 概要 |
|---|---|---:|---|
| [mikuproject](https://github.com/igapyon/mikuproject) | 標準実装 (TypeScript) |  | MS Project XML/WBS変換・可視化 |
| [mikuproject-java](https://github.com/igapyon/mikuproject-java) | Java実装 |  | mikuprojectのJava版 |
| [mikuproject-mcp](https://github.com/igapyon/mikuproject-mcp) | MCP server (TypeScript) |  | mikuproject用MCP server |
| [mikuproject-skills](https://github.com/igapyon/mikuproject-skills) | Agent Skills (Markdown) |  | mikuproject用Agent Skills |

## mikuscore family

MusicXML中心の楽譜変換ツール系列です。

| リポジトリ | 位置づけ | 状態 | 概要 |
|---|---|---:|---|
| [mikuscore](https://github.com/igapyon/mikuscore) | 標準実装 (TypeScript) |  | MusicXML中心の楽譜変換 |
| [mikuscore-java](https://github.com/igapyon/mikuscore-java) | Java実装 |  | mikuscoreのJava版、開発途中 |
| [mikuscore-skills](https://github.com/igapyon/mikuscore-skills) | Agent Skills (Markdown) |  | mikuscore用Agent Skills |

## Standalone tools

| リポジトリ | 位置づけ | 状態 | 概要 |
|---|---|---:|---|
| [miku-abc-player](https://github.com/igapyon/miku-abc-player) | 標準実装 (TypeScript) |  | mikuscoreの機能をABCにフォーカスした、ABC/MusicXML/MIDI/MuseScore対応の単一HTMLアプリ |
| [miku-javaclass2json-java](https://github.com/igapyon/miku-javaclass2json-java) | Java実装 |  | class/jarをJSON/JSONL化 |
| [miku-unicode-guard](https://github.com/igapyon/miku-unicode-guard) | 標準実装 (TypeScript) |  | 怪しいUnicode文字検出CLI |

## Article searches

記事が存在する場合に見つけやすくするための検索リンクです。対象によっては該当する記事がない場合があります。

件数取得日: 2026-05-09

| 対象 | Qiita記事検索 | 件数 | Note記事検索 | 件数 |
|---|---|---:|---|---:|
| miku-abc-player | [検索](https://qiita.com/search?q=%5Bmiku-abc-player%5D) | 2 | [検索](https://note.com/search?q=miku-abc-player&context=note&mode=search) | 2 |
| miku-docx2md | [検索](https://qiita.com/search?q=%5Bmiku-docx2md%5D) | 0 | [検索](https://note.com/search?q=miku-docx2md&context=note&mode=search) | 0 |
| miku-grep | [検索](https://qiita.com/search?q=%5Bmiku-grep%5D) | 6 | [検索](https://note.com/search?q=miku-grep&context=note&mode=search) | 0 |
| miku-indexgen | [検索](https://qiita.com/search?q=%5Bmiku-indexgen%5D) | 4 | [検索](https://note.com/search?q=miku-indexgen&context=note&mode=search) | 1 |
| miku-javaclass2json-java | [検索](https://qiita.com/search?q=%5Bmiku-javaclass2json-java%5D) | 1 | [検索](https://note.com/search?q=miku-javaclass2json-java&context=note&mode=search) | 0 |
| miku-readfile | [検索](https://qiita.com/search?q=%5Bmiku-readfile%5D) | 3 | [検索](https://note.com/search?q=miku-readfile&context=note&mode=search) | 0 |
| miku-text-bundle | [検索](https://qiita.com/search?q=%5Bmiku-text-bundle%5D) | 5 | [検索](https://note.com/search?q=miku-text-bundle&context=note&mode=search) | 0 |
| miku-unicode-guard | [検索](https://qiita.com/search?q=%5Bmiku-unicode-guard%5D) | 0 | [検索](https://note.com/search?q=miku-unicode-guard&context=note&mode=search) | 0 |
| miku-xlsx2md | [検索](https://qiita.com/search?q=%5Bmiku-xlsx2md%5D) | 1 | [検索](https://note.com/search?q=miku-xlsx2md&context=note&mode=search) | 0 |
| mikuproject | [検索](https://qiita.com/search?q=%5Bmikuproject%5D) | 7 | [検索](https://note.com/search?q=mikuproject&context=note&mode=search) | 3 |
| mikuscore | [検索](https://qiita.com/search?q=%5Bmikuscore%5D) | 6 | [検索](https://note.com/search?q=mikuscore&context=note&mode=search) | 3 |

取得方法メモ:

- Qiita: `https://qiita.com/api/v2/items?query=%5B対象名%5D&per_page=1` の `total-count` ヘッダを参照
- Note: `https://note.com/search?q=対象名&context=note&mode=search` の検索結果ページに含まれる検索結果件数を参照

## Sources

- https://github.com/igapyon?tab=repositories
- https://api.github.com/users/igapyon/repos?per_page=100&page=1&sort=full_name
