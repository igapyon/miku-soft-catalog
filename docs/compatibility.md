# Compatibility Policy

`mikuproject-skills-java` は、`mikuproject-skills` の Java runtime 版として設計します。
この方針の主目的は、`mikuproject-skills` 側の将来の強化を、`mikuproject-skills-java` 側でも低コストで受け取れるようにすることです。

## 継承を優先するもの

- `mikuproject-skills` に既にある文書構造や規則文で、そのまま意味が通るもの
- skill の明示トリガー
- CLI や runtime に入るきっかけ
- 会話上の workflow 語彙
- draft / workbook / patch / report の役割分担
- validate / import / apply / export の考え方
- intermediate JSON を可能な限り内部で処理する方針
- browser UI を通常経路に含めない境界
- GitHub Actions の構成や運用方針で、そのまま意味が通るもの

## 差し替えるもの

- 実行 backend
- runtime の検出方法
- CLI の起動方法
- bundle 内の実装都合
- Node.js 固有の前提や Node runtime 固有の説明
- Node.js 固有の GitHub Actions step や依存セットアップ

## 判断原則

- CLI に入る条件は、既存 `mikuproject-skills` の runtime discipline にできるだけ合わせる
- CLI に関係ない会話規則は、既存 `mikuproject-skills` を原則として継承する
- 既存 `mikuproject-skills` の文面をそのまま使えるところは、極力そのまま踏襲する
- 差分はできるだけ runtime 層だけに閉じ込める
- 判断に迷ったら、Node 版利用者が違和感なく使えることを優先する

## Upstream Follow Strategy

- `mikuproject-skills-java` を別流儀の派生物にしない
- 非 runtime 部分の独自化はできるだけ避ける
- upstream の改善が会話規則、workflow 規則、文書構造の強化であれば、原則としてそのまま取り込む
- upstream の改善が GitHub Actions の job 構成、命名、確認観点の強化であれば、原則としてそのまま取り込む
- upstream の改善が Node.js 固有の runtime 実装に依存する場合だけ、Java 版として読み替える
- 追従しやすさを優先し、局所的な書き味の違いより upstream との対応関係を重視する
